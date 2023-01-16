namespace kunpo {
    /**
     * 定时器节点
     *
     * @export
     * @class TimerNode
     * @extends {HeapNode}
     */
    export class TimerNode extends HeapNode {
        /**
         * 定时器ID
         *
         * @type {number}
         * @memberof TimerNode
         */
        public id: number;

        /**
         * 定时器添加索引，同一时间回调根据OrderIndex排序
         *
         * @type {number}
         * @memberof TimerNode
         */
        public orderIndex: number;

        /**
         * 定时间隔
         *
         * @type {number}
         * @memberof TimerNode
         */
        public interval: number;

        /**
         * 回调时间点
         *
         * @type {number}
         * @memberof TimerNode
         */
        public expireTime: number;

        /**
         * 重复次数
         *
         * @type {number}
         * @memberof TimerNode
         */
        public loop: number = 0;

        /**
         * 计时器重复执行时，是否使用最新时间
         *
         * @type {boolean}
         * @memberof TimerNode
         */
        public loopLatestTime: boolean = false;

        /**
         * 定时回调
         *
         * @type {Function}
         * @memberof TimerNode
         */
        public callback: Function;

        /**
         * 暂停时剩余时间
         *
         * @type {number}
         * @memberof TimerNode
         */
        public pauseRemainTime: number;

        /**
         * 是否暂停
         *
         * @type {boolean}
         * @memberof TimerNode
         */
        public pause: boolean;

        /**
         * 是否被回收
         *
         * @type {boolean}
         * @memberof TimerNode
         */
        public recycled: boolean;

        constructor(id: number) {
            super();
            this.id = id;
        }

        /**
         * 是否比其他定时节点小
         *
         * @param {HeapNode} other 其他定时节点
         * @returns {boolean}
         * @memberof TimerNode
         */
        public lessThan(other: HeapNode): boolean {
            const otherTimerNode = other as TimerNode;

            if (Math.abs(this.expireTime - otherTimerNode.expireTime) <= 1e-5) {
                return this.orderIndex < otherTimerNode.orderIndex;
            }

            return this.expireTime < otherTimerNode.expireTime;
        }
    }
}
