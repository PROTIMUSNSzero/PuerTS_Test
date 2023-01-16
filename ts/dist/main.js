"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
function hello(compiler) {
    console.log((0, greet_1.sayHi)(compiler));
}
function append(str1, str2) {
    return str1 + str2;
}
hello('TypeScript');
