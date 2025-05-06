// 使用 let 和 const 声明两个变量，一个保存用户名，一个保存年龄；
//
// 编写一个箭头函数 greet(name)，返回模板字符串 "你好, [name]"；
//
// 将以下传统函数转换为箭头函数：
//
// js
// 复制
// 编辑
// function square(x) {
//     return x * x;
// }

// let name = '张三';
// const age = 18;
//
// function greet(name) {
//   return `你好, ${name}`;
// }
//
// const greetName = (name) => `你好, ${name}`;
// console.log(greetName('张三'));

// 你的练习任务（建议使用 TypeScript 编写）：
// 使用对象解构从以下对象中提取 title 和 author：
//
// ts
// 复制
// 编辑
// const book = { title: 'TS Handbook', author: 'Microsoft', year: 2021 };
// 编写一个函数 greetUser(name?: string)，如果未传入 name，默认是 "匿名用户"。
//
// 编写一个函数 multiply(...nums: number[])，返回所有数字的乘积。

// function scopeTest() {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//
//     if (true) {
//         var a = 100;
//         let b = 200;
//         const c = 300;
//         console.log("块内：", a, b, c);
//     }
//
//     console.log("块外：", a, b, c);
// }
// scopeTest();


// const user = {
//     name: "张三",
//     age: 18
// };
//
// user.age = 20;
// console.log(user);

const user = {
    name: "张三",
    sayHello: () => {
        console.log(`Hello, ${this.name}`);
    },
};

user.sayHello(); // Hello, undefined

function sayHi() {
    this.name = "张三";
    setTimeout(function () {
        console.log(`Hello, ${this.name}`);
    }, 1000);
}

new sayHi(); // Hello, undefined


class Counter {
    count = 0;

    constructor() {
        setInterval(() => {
            this.count++;
            console.log(this.count);
        }, 1000);
    }
}

new Counter(); // 1
