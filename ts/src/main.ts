import {sayHi} from "./greet";
import { TimerManager } from "./TimerManager";

function init(mono: any): void {
    hello('TypeScript');
    mono.updateCb = this.update;
    new TimerManager();
    TimerManager.Instance.startTimer(() => {
        console.log("timer");
    }, 3, -1);
    let go = new CS.UnityEngine.GameObject("main");
    go.AddComponent(puerts.$typeof(CS.UnityEngine.SpriteRenderer));
}

init;

function update(interval: number): void {
    TimerManager.Instance.update(interval);
    console.log('main update');
}

function hello(compiler: string): void {
    console.log(sayHi(compiler));
}

function append(str1: string, str2: string): string {
    return str1 + str2;
}