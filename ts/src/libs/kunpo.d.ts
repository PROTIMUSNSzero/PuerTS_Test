declare namespace kunpo {
    abstract class HeapNode {
        index: number;
        abstract lessThan(other: HeapNode): boolean;
    }
    /**
     * Heap 二叉堆
     *
     * @export
     * @class List
     * @template T
     */
    class Heap<T extends HeapNode> {
        private _nodes;
        private _size;
        private _capacity;
        get count(): number;
        get empty(): boolean;
        constructor(capacity: number);
        /**
         * 清空
         */
        clear(): void;
        /**
         * 获取节点
         * @param index 节点索引
         */
        get(index: number): T;
        /**
         * 获取顶部节点
         */
        top(): T;
        /**
         * 是否包含节点
         * @param node 节点
         */
        contains(node: T): boolean;
        /**
         * Push节点
         * @param node 节点
         */
        push(node: T): void;
        /**
         * Pop节点
         * @returns
         */
        pop(): T;
        /**
         * 移除节点
         * @param node 要移除的节点
         */
        remove(node: T): void;
        /**
         * 更新节点
         * @param node 要更新的节点
         */
        update(node: T): boolean;
        private _parent;
        private _sortUp;
        private _sortDown;
    }
}
declare namespace kunpo {
    /**
     * 定时器节点
     *
     * @export
     * @class TimerNode
     * @extends {HeapNode}
     */
    class TimerNode extends HeapNode {
        /**
         * 定时器ID
         *
         * @type {number}
         * @memberof TimerNode
         */
        id: number;
        /**
         * 定时器添加索引，同一时间回调根据OrderIndex排序
         *
         * @type {number}
         * @memberof TimerNode
         */
        orderIndex: number;
        /**
         * 定时间隔
         *
         * @type {number}
         * @memberof TimerNode
         */
        interval: number;
        /**
         * 回调时间点
         *
         * @type {number}
         * @memberof TimerNode
         */
        expireTime: number;
        /**
         * 重复次数
         *
         * @type {number}
         * @memberof TimerNode
         */
        loop: number;
        /**
         * 计时器重复执行时，是否使用最新时间
         *
         * @type {boolean}
         * @memberof TimerNode
         */
        loopLatestTime: boolean;
        /**
         * 定时回调
         *
         * @type {Function}
         * @memberof TimerNode
         */
        callback: Function;
        /**
         * 暂停时剩余时间
         *
         * @type {number}
         * @memberof TimerNode
         */
        pauseRemainTime: number;
        /**
         * 是否暂停
         *
         * @type {boolean}
         * @memberof TimerNode
         */
        pause: boolean;
        /**
         * 是否被回收
         *
         * @type {boolean}
         * @memberof TimerNode
         */
        recycled: boolean;
        constructor(id: number);
        /**
         * 是否比其他定时节点小
         *
         * @param {HeapNode} other 其他定时节点
         * @returns {boolean}
         * @memberof TimerNode
         */
        lessThan(other: HeapNode): boolean;
    }
}
declare namespace kunpo {
    /**
     * 定时器池
     *
     * @export
     * @class TimerNodePool
     */
    class TimerNodePool {
        private _pool;
        private _freeIndices;
        /**
         * 定时器池
         * @param {number} capacity 初始容量
         * @memberof TimerNodePool
         */
        constructor(capacity: number);
        /**
         * 分配定时器节点
         *
         * @returns {TimerNode} 定时器节点
         * @memberof TimerNodePool
         */
        allocate(): TimerNode;
        /**
         * 回收定时器节点
         *
         * @param {number} timerId 定时器ID
         * @memberof TimerNodePool
         */
        recycle(timerId: number): void;
        /**
         * 根据TimerID获取定时器节点
         *
         * @param {number} timerId 定时器ID
         * @returns {TimerNode}
         * @memberof TimerNodePool
         */
        get(timerId: number): TimerNode | undefined;
        /**
         * 清空正在使用的Timer
         *
         * @memberof TimerNodePool
         */
        clear(): void;
    }
}
declare namespace kunpo {
    /**
     * 定时器
     *
     * @export
     * @class Timer
     */
    class Timer {
        /**
         * 经过的时间
         *
         * @protected
         * @type {number}
         * @memberof Timer
         */
        protected elapsedTime: number;
        protected heap: Heap<TimerNode>;
        private _timerNodeOrder;
        private _pool;
        /**
         * 暂停的Timer
         *
         * @private
         * @type {Map<number, TimerNode>}
         * @memberof Timer
         */
        private _pausedTimers;
        /**
         * 定时器数量
         *
         * @readonly
         * @type {number}
         * @memberof Timer
         */
        get timerCount(): number;
        /**
         * 定时器管理类
         *
         * @param {number} [capacity=8] 初始定时器容量
         * @memberof Timer
         */
        constructor(capacity?: number);
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
        startTimer(callback: () => void, interval: number, loop?: number, loopLatestTime?: boolean): number;
        /**
         * 删除指定定时器
         *
         * @param {number} timerId 定时器ID
         * @memberof Timer
         */
        stopTimer(timerId: number): void;
        /**
         * 暂停定时器
         *
         * @param {number} timerId 定时器ID
         * @memberof Timer
         */
        pauseTimer(timerId: number): void;
        /**
         * 恢复定时器
         *
         * @param {number} timerId 定时器ID
         * @memberof Timer
         */
        resumeTimer(timerId: number): void;
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
        updateTimer(timerId: number, interval: number, loop: number, resetTime?: boolean): boolean;
        /**
         * 获取定时器剩余时间
         *
         * @param {number} timerId 定时器id
         * @returns {number} 剩余时间，如果未找到定时器返回0
         * @memberof Timer
         */
        getTimerRemainTime(timerId: number): number;
        /**
         * 更新时钟
         *
         * @param {number} deltaTime 更新间隔
         * @memberof Timer
         */
        update(deltaTime: number): void;
        /**
         * 清空所有定时器
         *
         * @memberof Timer
         */
        clear(): void;
        protected recycle(timerNode: TimerNode): void;
        private _getTimerNode;
    }
}
