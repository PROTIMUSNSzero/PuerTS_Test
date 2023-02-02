"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
exports.TimerManager = void 0;
class TimerManager {
    constructor() {
        TimerManager.Instance = this;
        this.timer = new kunpo.Timer();
    }
    startTimer(callback, interval, loop = 1) {
        this.timer.startTimer(callback, interval, loop);
    }
    update(interval) {
        this.timer.update(interval);
    }
}
exports.TimerManager = TimerManager;
