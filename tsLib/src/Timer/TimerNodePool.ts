/// <reference path="./TimerNode.ts"/>

namespace kunpo {
    const TimerIdBit = 20;
    const TimerCount = 1 << (32 - TimerIdBit);
    const TimerVersionMask = (1 << TimerIdBit) - 1;
    const TimerMaxVersion = TimerVersionMask;
    /**
     * 定时器池
     *
     * @export
     * @class TimerNodePool
     */

    export class TimerNodePool {
        private _pool: TimerNode[];
        private _freeIndices: number[];

        /**
         * 定时器池
         * @param {number} capacity 初始容量
         * @memberof TimerNodePool
         */
        public constructor(capacity: number) {
            const pool: TimerNode[] = (this._pool = new Array(capacity));
            const freeIndices: number[] = (this._freeIndices = new Array(capacity));
            for (let i = 0; i < capacity; ++i) {
                const timerNode = new TimerNode(i << TimerIdBit);
                timerNode.recycled = true;
                pool[i] = timerNode;
                freeIndices[i] = i;
            }
        }

        /**
         * 分配定时器节点
         *
         * @returns {TimerNode} 定时器节点
         * @memberof TimerNodePool
         */
        public allocate(): TimerNode {
            let timerNode: TimerNode;
            const pools = this._pool;

            if (this._freeIndices.length == 0) {
                if (pools.length == TimerCount) {
                    throw new Error("超出时钟个数: " + TimerCount);
                }
                timerNode = new TimerNode(pools.length << TimerIdBit);
                pools.push(timerNode);
            } else {
                timerNode = pools[this._freeIndices.pop()];
                timerNode.recycled = false;
                if ((timerNode.id & TimerVersionMask) == TimerMaxVersion) {
                    timerNode.id = 0;
                    console.error(`时钟版本号过高: ${TimerMaxVersion}，重置为1`);
                }
                ++timerNode.id;
            }

            return timerNode;
        }

        /**
         * 回收定时器节点
         *
         * @param {number} timerId 定时器ID
         * @memberof TimerNodePool
         */
        public recycle(timerId: number): void {
            const index = timerId >>> TimerIdBit;

            if (index < 0 || index >= this._pool.length) {
                throw new Error("定时器不存在");
            }

            const timerNode = this._pool[index];

            if (timerNode.recycled) {
                throw new Error("定时器已经被回收");
            }

            timerNode.recycled = true;
            timerNode.callback = null;
            this._freeIndices.push(index);
        }

        /**
         * 根据TimerID获取定时器节点
         *
         * @param {number} timerId 定时器ID
         * @returns {TimerNode}
         * @memberof TimerNodePool
         */
        public get(timerId: number): TimerNode | undefined {
            const index = timerId >>> TimerIdBit;
            const version = timerId & TimerVersionMask;

            if (index < 0 || index >= this._pool.length) {
                return null;
            }

            const timerNode = this._pool[index];
            if (timerNode.recycled) {
                return null;
            }

            const timerNodeVersion = timerNode.id & TimerVersionMask;
            if (timerNodeVersion != version) {
                return null;
            }

            return timerNode;
        }

        /**
         * 清空正在使用的Timer
         *
         * @memberof TimerNodePool
         */
        public clear(): void {
            const pools = this._pool;
            const timerNodeCount = pools.length;
            const freeIndices = this._freeIndices;

            freeIndices.length = 0;
            for (let i = 0; i < timerNodeCount; ++i) {
                pools[i].recycled = true;
                pools[i].callback = null;
                freeIndices.push(i);
            }
        }
    }
}
