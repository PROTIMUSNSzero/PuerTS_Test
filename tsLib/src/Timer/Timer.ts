/// <reference path="../Heap.ts"/>
/// <reference path="./TimerNodePool.ts"/>

namespace kunpo {
    /**
     * 定时器
     *
     * @export
     * @class Timer
     */
    export class Timer {
        /**
         * 经过的时间
         *
         * @protected
         * @type {number}
         * @memberof Timer
         */
        protected elapsedTime: number = 0;
        protected heap: Heap<TimerNode>;

        private _timerNodeOrder: number = 0;

        private _pool: TimerNodePool;

        /**
         * 暂停的Timer
         *
         * @private
         * @type {Map<number, TimerNode>}
         * @memberof Timer
         */
        private _pausedTimers: Map<number, TimerNode>;
        /**
         * 定时器数量
         *
         * @readonly
         * @type {number}
         * @memberof Timer
         */
        public get timerCount(): number {
            return this.heap.count;
        }

        /**
         * 定时器管理类
         *
         * @param {number} [capacity=8] 初始定时器容量
         * @memberof Timer
         */
        public constructor(capacity: number = 8) {
            capacity = capacity < 2 ? 2 : capacity;
            this.heap = new Heap<TimerNode>(capacity);
            this._pool = new TimerNodePool(capacity);
            this._pausedTimers = new Map<number, TimerNode>();
        }

        /**
         * 启动一个定时器
         *
         * @param {()=>void} callback 回调方法
         * @param {number} interval 回调间隔
         * @param {number} [loop=0] 重复次数：0：回调一次，1~n：回调n次，-1：无限重复
         * @param {boolean} [loopLatestTime=false] 重复执行时是否使用最新时间，是：下次回调时间 = 当前时间 + 更新间隔，否：下次回调时间 += 更新间隔
         * @returns {number} 定时器ID
         * @memberof Timer
         */
        public startTimer(callback: () => void, interval: number, loop: number = 0, loopLatestTime: boolean = false): number {
            const timerNode = this._getTimerNode(callback, interval, loop, loopLatestTime);
            this.heap.push(timerNode);
            return timerNode.id;
        }

        /**
         * 删除指定定时器
         *
         * @param {number} timerId 定时器ID
         * @memberof Timer
         */
        public stopTimer(timerId: number): void {
            const timerNode = this._pool.get(timerId);
            if (timerNode) {
                if (timerNode.pause) {
                    this._pausedTimers.delete(timerId);
                }

                this.heap.remove(timerNode);
                this._pool.recycle(timerId);
            }
        }

        /**
         * 暂停定时器
         *
         * @param {number} timerId 定时器ID
         * @memberof Timer
         */
        public pauseTimer(timerId: number): void {
            // 是否已经暂停
            if (this._pausedTimers.has(timerId)) {
                return;
            }
            const timerNode = this._pool.get(timerId);
            if (timerNode) {
                timerNode.pauseRemainTime = timerNode.expireTime - this.elapsedTime;
                this.heap.remove(timerNode);
                this._pausedTimers.set(timerId, timerNode);
            }
        }

        /**
         * 恢复定时器
         *
         * @param {number} timerId 定时器ID
         * @memberof Timer
         */
        public resumeTimer(timerId: number): void {
            const timerNode = this._pausedTimers.get(timerId);
            if (timerNode) {
                timerNode.pause = false;
                timerNode.expireTime = this.elapsedTime + timerNode.pauseRemainTime;
                this._pausedTimers.delete(timerId);
                this.heap.push(timerNode);
            }
        }

        /**
         * 更新定时器
         *
         * @param {number} timerId 定时器ID
         * @param {number} interval 回调间隔
         * @param {number} loop 重复次数
         * @param {boolean} [resetTime=false] 是否更新下次回调时间（是否从当前时间开始计时）
         * @returns {boolean} 如果定时器ID存在则返回true
         * @memberof Timer
         */
        public updateTimer(timerId: number, interval: number, loop: number, resetTime: boolean = false): boolean {
            const timerNode = this._pool.get(timerId);
            if (!timerNode) {
                return false;
            }

            // 防止在回调时传入0同时又回调方法又添加自身回调依然传0，导致死循环
            interval = interval || 1e-3;
            timerNode.interval = interval;
            timerNode.loop = loop;
            if (resetTime) {
                timerNode.expireTime = this.elapsedTime + interval;
            }

            return this.heap.update(timerNode);
        }

        /**
         * 获取定时器剩余时间
         *
         * @param {number} timerId 定时器id
         * @returns {number} 剩余时间，如果未找到定时器返回0
         * @memberof Timer
         */
        public getTimerRemainTime(timerId: number): number {
            const timerNode = this._pool.get(timerId);
            if (!timerNode) {
                return 0;
            }
            return timerNode.expireTime - this.elapsedTime;
        }

        /**
         * 更新时钟
         *
         * @param {number} deltaTime 更新间隔
         * @memberof Timer
         */
        public update(deltaTime: number): void {
            const elapsedTime = (this.elapsedTime += deltaTime);
            const heap = this.heap;
            let timerNode = heap.top();

            while (timerNode && timerNode.expireTime <= elapsedTime) {
                const callback = timerNode.callback;
                if (timerNode.loop == 0) {
                    // 处理一次回调定时器
                    heap.pop();
                    this.recycle(timerNode);
                } else if (timerNode.loop > 0) {
                    // 处理多次回调定时器
                    if (--timerNode.loop == 0) {
                        heap.pop();
                        this.recycle(timerNode);
                    } else {
                        // 更新下一次回调
                        timerNode.expireTime = (timerNode.loopLatestTime ? elapsedTime : timerNode.expireTime) + timerNode.interval;
                        heap.update(timerNode);
                    }
                } else {
                    // 无限次数回调
                    // 更新下一次回调
                    timerNode.expireTime = (timerNode.loopLatestTime ? elapsedTime : timerNode.expireTime) + timerNode.interval;
                    heap.update(timerNode);
                }

                callback();
                timerNode = heap.top();
            }
        }

        /**
         * 清空所有定时器
         *
         * @memberof Timer
         */
        public clear(): void {
            this.heap.clear();
            this._pool.clear();
            this._pausedTimers.clear();
            this._timerNodeOrder = 0;
        }

        protected recycle(timerNode: TimerNode): void {
            this._pool.recycle(timerNode.id);
        }

        private _getTimerNode(callback: Function, interval: number, loop: number, loopLatestTime: boolean): TimerNode {
            // 防止在回调时传入0同时又回调方法又添加自身回调依然传0，导致死循环
            interval = interval || 1e-3;
            const timerNode = this._pool.allocate();
            timerNode.orderIndex = ++this._timerNodeOrder;
            timerNode.callback = callback;
            timerNode.interval = interval;
            timerNode.expireTime = this.elapsedTime + interval;
            timerNode.loop = loop;
            timerNode.loopLatestTime = loopLatestTime;
            timerNode.pause = false;

            return timerNode;
        }
    }
}
