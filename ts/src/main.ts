import {sayHi} from "./greet";

function hello(compiler: string): void {
    console.log(sayHi(compiler));
}

function append(str1: string, str2: string): string {
    return str1 + str2;
}

hello('TypeScript');

function startTimer(callback: () => void, interval: number, loop: number = 1):  void {
    let timer = new kunpo.Timer();
    timer.startTimer(callback, interval, loop);
}

startTimer(() => {
    console.log("timer");
}, 3, -1);