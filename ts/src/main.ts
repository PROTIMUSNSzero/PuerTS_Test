import {sayHi} from "./greet";



function hello(compiler: string): void {
    console.log(sayHi(compiler));
}

function append(str1: string, str2: string): string {
    return str1 + str2;
}

hello('TypeScript');