"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = require("./greet");
const TimerManager_1 = require("./TimerManager");
function init(mono) {
    hello('TypeScript');
    mono.updateCb = this.update;
    new TimerManager_1.TimerManager();
    TimerManager_1.TimerManager.Instance.startTimer(() => {
        console.log("timer");
    }, 3, -1);
    let go = new CS.UnityEngine.GameObject("main");
    go.AddComponent(puerts.$typeof(CS.UnityEngine.SpriteRenderer));
}
init;
function update(interval) {
    TimerManager_1.TimerManager.Instance.update(interval);
    console.log('main update');
}
function hello(compiler) {
    console.log((0, greet_1.sayHi)(compiler));
}
function append(str1, str2) {
    return str1 + str2;
}
