require('./libs/kunpo.js');
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = require("./greet");
function hello(compiler) {
    console.log((0, greet_1.sayHi)(compiler));
}
function append(str1, str2) {
    return str1 + str2;
}
hello('TypeScript');
function startTimer(callback, interval, loop = 1) {
    let timer = new kunpo.Timer();
    timer.startTimer(callback, interval, loop);
}
startTimer(() => {
    console.log("timer");
}, 3, -1);
