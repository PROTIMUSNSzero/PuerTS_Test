global.kunpo = global.kunpo || {};

(function (kunpo) {
    class HeapNode {
    }
    kunpo.HeapNode = HeapNode;
    /**
     * Heap 二叉堆
     *
     * @export
     * @class List
     * @template T
     */
    class Heap {
        get count() {
            return this._size;
        }
        get empty() {
            return this._size == 0;
        }
        constructor(capacity) {
            this._size = 0;
            this._capacity = capacity <= 0 ? 4 : capacity;
            this._nodes = new Array(this._capacity);
        }
        /**
         * 清空
         */
        clear() {
            const nodes = this._nodes;
            for (let i = 0, l = this._size; i < l; ++i) {
                nodes[i] = null;
            }
            this._size = 0;
        }
        /**
         * 获取节点
         * @param index 节点索引
         */
        get(index) {
            return this._nodes[index];
        }
        /**
         * 获取顶部节点
         */
        top() {
            return this._nodes[0];
        }
        /**
         * 是否包含节点
         * @param node 节点
         */
        contains(node) {
            return node.index >= 0 && node.index < this._size;
        }
        /**
         * Push节点
         * @param node 节点
         */
        push(node) {
            const size = ++this._size;
            if (size > this._capacity) {
                this._capacity = this._nodes.length *= 2;
            }
            this._sortUp(node, size - 1);
        }
        /**
         * Pop节点
         * @returns
         */
        pop() {
            if (this._size == 0) {
                return null;
            }
            const nodes = this._nodes;
            const node = nodes[0];
            node.index = -1;
            nodes[0] = null;
            const size = --this._size;
            if (size > 0) {
                const finalNode = nodes[size];
                nodes[size] = null;
                this._sortDown(finalNode, 0);
            }
            return node;
        }
        /**
         * 移除节点
         * @param node 要移除的节点
         */
        remove(node) {
            if (!this.contains(node)) {
                return;
            }
            const size = --this._size;
            const nodes = this._nodes;
            const newNode = (nodes[node.index] = nodes[size]);
            newNode.index = node.index;
            nodes[size] = null;
            this.update(newNode);
            node.index = -1;
        }
        /**
         * 更新节点
         * @param node 要更新的节点
         */
        update(node) {
            if (!this.contains(node)) {
                return false;
            }
            const index = node.index;
            const nodes = this._nodes;
            if (index > 0 && nodes[index].lessThan(nodes[this._parent(index)])) {
                this._sortUp(nodes[index], index);
            }
            else {
                this._sortDown(nodes[index], index);
            }
            return true;
        }
        _parent(index) {
            return (index - 1) >> 1;
        }
        _sortUp(node, index) {
            let parentIndex = this._parent(index);
            const nodes = this._nodes;
            // up
            while (index > 0 && node.lessThan(nodes[parentIndex])) {
                nodes[parentIndex].index = index;
                nodes[index] = nodes[parentIndex];
                index = parentIndex;
                parentIndex = this._parent(parentIndex);
            }
            node.index = index;
            nodes[index] = node;
        }
        _sortDown(node, index) {
            let childIndex = (index << 1) + 1;
            const nodes = this._nodes;
            const size = this._size;
            while (childIndex < size) {
                let newParent = node;
                // left
                if (nodes[childIndex].lessThan(newParent)) {
                    newParent = nodes[childIndex];
                }
                // right
                if (childIndex + 1 < size && nodes[childIndex + 1].lessThan(newParent)) {
                    ++childIndex;
                    newParent = nodes[childIndex];
                }
                if (node == newParent) {
                    break;
                }
                // swap down
                newParent.index = index;
                nodes[index] = newParent;
                index = childIndex;
                childIndex = (childIndex << 1) + 1;
            }
            node.index = index;
            nodes[index] = node;
        }
    }
    kunpo.Heap = Heap;
})(kunpo || (kunpo = {}));

(function (kunpo) {
    /**
     * 定时器节点
     *
     * @export
     * @class TimerNode
     * @extends {HeapNode}
     */
    class TimerNode extends kunpo.HeapNode {
        constructor(id) {
            super();
            /**
             * 重复次数
             *
             * @type {number}
             * @memberof TimerNode
             */
            this.loop = 0;
            /**
             * 计时器重复执行时，是否使用最新时间
             *
             * @type {boolean}
             * @memberof TimerNode
             */
            this.loopLatestTime = false;
            this.id = id;
        }
        /**
         * 是否比其他定时节点小
         *
         * @param {HeapNode} other 其他定时节点
         * @returns {boolean}
         * @memberof TimerNode
         */
        lessThan(other) {
            const otherTimerNode = other;
            if (Math.abs(this.expireTime - otherTimerNode.expireTime) <= 1e-5) {
                return this.orderIndex < otherTimerNode.orderIndex;
            }
            return this.expireTime < otherTimerNode.expireTime;
        }
    }
    kunpo.TimerNode = TimerNode;
})(kunpo || (kunpo = {}));
/// <reference path="./TimerNode.ts"/>

(function (kunpo) {
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
    class TimerNodePool {
        /**
         * 定时器池
         * @param {number} capacity 初始容量
         * @memberof TimerNodePool
         */
        constructor(capacity) {
            const pool = (this._pool = new Array(capacity));
            const freeIndices = (this._freeIndices = new Array(capacity));
            for (let i = 0; i < capacity; ++i) {
                const timerNode = new kunpo.TimerNode(i << TimerIdBit);
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
        allocate() {
            let timerNode;
            const pools = this._pool;
            if (this._freeIndices.length == 0) {
                if (pools.length == TimerCount) {
                    throw new Error("超出时钟个数: " + TimerCount);
                }
                timerNode = new kunpo.TimerNode(pools.length << TimerIdBit);
                pools.push(timerNode);
            }
            else {
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
        recycle(timerId) {
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
        get(timerId) {
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
        clear() {
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
    kunpo.TimerNodePool = TimerNodePool;
})(kunpo || (kunpo = {}));
/// <reference path="../Heap.ts"/>
/// <reference path="./TimerNodePool.ts"/>

(function (kunpo) {
    /**
     * 定时器
     *
     * @export
     * @class Timer
     */
    class Timer {
        /**
         * 定时器数量
         *
         * @readonly
         * @type {number}
         * @memberof Timer
         */
        get timerCount() {
            return this.heap.count;
        }
        /**
         * 定时器管理类
         *
         * @param {number} [capacity=8] 初始定时器容量
         * @memberof Timer
         */
        constructor(capacity = 8) {
            /**
             * 经过的时间
             *
             * @protected
             * @type {number}
             * @memberof Timer
             */
            this.elapsedTime = 0;
            this._timerNodeOrder = 0;
            capacity = capacity < 2 ? 2 : capacity;
            this.heap = new kunpo.Heap(capacity);
            this._pool = new kunpo.TimerNodePool(capacity);
            this._pausedTimers = new Map();
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
        startTimer(callback, interval, loop = 0, loopLatestTime = false) {
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
        stopTimer(timerId) {
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
        pauseTimer(timerId) {
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
        resumeTimer(timerId) {
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
        updateTimer(timerId, interval, loop, resetTime = false) {
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
        getTimerRemainTime(timerId) {
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
        update(deltaTime) {
            const elapsedTime = (this.elapsedTime += deltaTime);
            const heap = this.heap;
            let timerNode = heap.top();
            while (timerNode && timerNode.expireTime <= elapsedTime) {
                const callback = timerNode.callback;
                if (timerNode.loop == 0) {
                    // 处理一次回调定时器
                    heap.pop();
                    this.recycle(timerNode);
                }
                else if (timerNode.loop > 0) {
                    // 处理多次回调定时器
                    if (--timerNode.loop == 0) {
                        heap.pop();
                        this.recycle(timerNode);
                    }
                    else {
                        // 更新下一次回调
                        timerNode.expireTime = (timerNode.loopLatestTime ? elapsedTime : timerNode.expireTime) + timerNode.interval;
                        heap.update(timerNode);
                    }
                }
                else {
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
        clear() {
            this.heap.clear();
            this._pool.clear();
            this._pausedTimers.clear();
            this._timerNodeOrder = 0;
        }
        recycle(timerNode) {
            this._pool.recycle(timerNode.id);
        }
        _getTimerNode(callback, interval, loop, loopLatestTime) {
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
    kunpo.Timer = Timer;
})(kunpo || (kunpo = {}));
