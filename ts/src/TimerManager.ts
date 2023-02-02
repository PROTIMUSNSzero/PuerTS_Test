export class TimerManager {
    public static Instance: TimerManager;
    private timer: kunpo.Timer;

    public constructor() {
        TimerManager.Instance = this;
        this.timer = new kunpo.Timer();
    }

    public startTimer(callback: () => void, interval: number, loop: number = 1): void {
        this.timer.startTimer(callback, interval, loop);
    }

    public update(interval: number): void {
        this.timer.update(interval);
    }
}