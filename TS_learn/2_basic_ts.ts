// let a: number = 1;
// console.log(a);
//
// let str: string = "hello world";
// console.log(str);
// str += 'wl'
// console.log(str);
//
// let b: boolean = true;
// if (b) {
//     console.log("b is true")
// } else {
//     console.log("b is false")
// }
//
// // 联合类型 值只能是制定的
// let c: 'male'| 'female';
// c = 'male';
// c = 'female';
//
// // 联合类型 只能是指定的类型
// let d: boolean|number|string;
// d = 1;
// d= false;
// d= 'abc';
//
//
// // 数据类型： boolean number string any unknown void never object array tuple enum
// let arr: number[] = [1, 2, 3];
// console.log(arr, arr[0]);
// let arrStr: string[] = ["a", "b", "c"];
// console.log(arrStr, arrStr.pop());
// let arrAny: any[] = [1, "a", true];
// console.log(arrAny,arrAny.push("d"),arrAny);
// let arrTuple: [number, string] = [1, "a"];
// console.log(arrTuple.length,arrTuple.shift())
// let num:number = 1;
//
// let double:number = 1.0;
//
// // 参数制定类型和 函数制定返回值
// function sum(a:number,b:number):number {
//     return a+b;
// }
//
// // 类型不对，也可以继续运行，和Java对比 类型没有那么强，并非强制的
// console.log(sum(123, "213"));
//
// // 声明变量 不赋值， 会隐士的 认为为 any, 当声明并赋值了值，会根据赋值的类型进行类型推导
// let e = 20;
// e= 10;
//
// // 类型断言
// var s = e as number;
// console.log(s)

// 创建一个变量 userName，类型为 string，并给它赋值 "John"。
//
// 创建一个变量 age，类型为 number，并给它赋值 25。
//
// 创建一个变量 isMember，类型为 boolean，并给它赋值 true。
//
// 编写一个函数 printDetails，接收 userName（string）、age（number）、isMember（boolean） 作为参数，并打印出如下格式的字符串：

// let userName: string ="John";
// let age:number  = 25;
// let isNumber:boolean = true;
// function printDetails(userName:string,age:number,isMember:boolean):void{
//     console.log(`用户名: ${userName}` + `年龄: ${age}`+`，是否会员: ${isMember}`);
// }
//
// printDetails(userName,age,isNumber);

// 创建一个数字数组 scores，类型为 number[]，并赋值 [90, 80, 70, 85, 100]。
//
// 创建一个包含两个元素的元组 userInfo，第一个元素是 string 类型（用户名），第二个元素是 number 类型（用户年龄），并赋值为 ["Alice", 28]。
//
// 编写一个函数 getScore，它接收 scores 数组作为参数，并返回数组中所有分数的平均值。
//
// let scores: number[] = [90, 80, 70, 85, 100];
// let userInfo: [string, number] = ["Alice", 28];
// function getScore(scores: number[]): number {
//     let sum = 0;
//     for (let i = 0; i < scores.length; i++) {
//         sum += scores[i];
//     }
//     return sum / scores.length;
// }
//
// console.log(getScore(scores));

// title: string
//
// author: string
//
// year: number
//
// interface Book {
//     title: string;
//     author: string;
//     year: number;
// }
//
// let book: Book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     year: 1925
// };
// function getBookInfo(book: Book): string {
//     // 书名: TypeScript Handbook, 作者: John Doe, 出版年份: 2021
//     return `书名: ${book.title},作者: ${book.author}，出版年份: ${book.year}`;
// }
// console.log(getBookInfo(book));

// 创建一个泛型函数 echo，它接收一个参数 value，并返回该参数。
//
// echo 应该接受任意类型的值，并返回相同类型的值。
//
// 使用 echo 函数传入一个字符串和一个数字，分别输出它们。

// function echo<T>(value: T): T {
//     return value;
// }
// let str = echo<string>("abc");
// let number = echo<number>(123);
// console.log(str, number);

// 任务：
// 创建一个类型别名 ID，它可以是 string 或 number 类型。
//
// 创建一个函数 printID，它接收 ID 类型的参数，打印出 "ID: " 加上传入的值。
//
// 调用 printID，传入一个数字和一个字符串，观察输出。

// let union: string | number;
// union = "union str";
// union = 123;
//
// function printID(id: string | number): string |number {
//     return id;
// }
//
// console.log(`ID: ${printID(union)}`);

// 任务：
// 创建一个 any 类型的变量 someValue，并赋值为一个字符串 "Hello, TypeScript"。
//
// 使用类型断言将 someValue 转换为 string 类型，并打印出其长度。

// let someValue: any = "Hello, TypeScript";
// console.log((someValue as string).length)

// 任务：
// 创建一个类型别名 Mutable<T>，它接受一个泛型类型 T，并将 T 中所有字段设为可变（从只读变为可写）。
//
// 示例：Readonly<T> 是 TypeScript 内置的高级类型，可以将对象的字段设为只读，Mutable<T> 应该做相反的操作。
//
// 定义一个类型 Book，其字段为只读字段（readonly），然后使用 Mutable<Book> 将其转换为可写字段。
// interface Book {
//     readonly title: string;
//     readonly author: string;
//     readonly year: number;
// }
//
// let book: Readonly<Book> = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     year: 1925
// };
// console.log(book,book.author,book.author,book.year)
//
// type Mutable<T> = {
//     -readonly [P in keyof T]: T[P];
// };
//
// let mutableBook: Mutable<Book> = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     year: 1925
// };
// // console.log(mutableBook,mutableBook.author,mutableBook.author,mutableBook.year);
// mutableBook.author = "wl!";
// console.log(mutableBook,mutableBook.author,mutableBook.author,mutableBook.year);
//
// 定义一个联合类型 LoginUser，它表示两种用户类型：
//
// 普通用户（RegularUser）
//
// username: string
//
// role: "user"
//
// email: string
//
// 第三方用户（OAuthUser）
//
// username: string
//
// role: "oauth"
//
// provider: "google" | "github"
//
// 然后实现一个函数 handleLogin(user: LoginUser)，根据用户的类型输出不同的信息：
//
// 如果是 RegularUser，打印欢迎信息和邮箱；
//
// 如果是 OAuthUser，打印欢迎信息和使用的第三方平台。

// abstract class BasicUser {
//     userName: string;
//     role: string;
//
//     protected constructor(userName: string, role: string) {
//         this.userName = userName;
//         this.role = role;
//     }
//
//     abstract handleLogin(): void;
//
// }
//
//  class LoginUser extends BasicUser {
//
//     public email: string;
//
//     constructor(userName: string, role: string, email?: string, provider?: string) {
//         super(userName, role);
//         this.email = email;
//     }
//
//     handleLogin() {
//         console.log(`欢迎${this.userName},您的邮箱为${this.email},您的权限为${this.role}`);
//     }
// }
//
// class RegularUser extends BasicUser {
//
//     public provider: string;
//
//     constructor(userName: string, role: string, provider?: string) {
//         super(userName, role);
//         this.provider = provider;
//     }
//
//     handleLogin() {
//         console.log(`欢迎${this.role},您的第三方平台为${this.provider},您的权限为${this.role}`);
//     }
// }
//
// const loginUser = new LoginUser("wl", "user", "wl@qq.com");
//
//
// type User = RegularUser | LoginUser;
// function handleLogin(user: User): void {
//     user.handleLogin();
// }
// handleLogin(loginUser);

/**
 * 创建一个接口 User，它具有 userName 字段，以及一个 notify 方法。
 */
// interface User {
//     userName: string;
//
//     notify(): void;
// }
//
// class EmailUser implements User {
//
//     userName: string;
//
//     email: string
//
//     constructor(email: string, userName: string) {
//         this.email = email;
//         this.userName = userName;
//     }
//
//     notify(): void {
//         // 向邮箱 [email] 发送通知给用户 [userName]
//         console.log(`向邮箱${this.email}发送通知给用户${this.userName}`);
//     }
// }
//
// class SmsUser  implements User {
//
//     userName: string;
//
//     phoneNumber: string
//
//     constructor(phoneNumber: string, userName: string) {
//         this.phoneNumber = phoneNumber;
//         this.userName = userName;
//     }
//
//     notify(): void {
//         // 向手机号 [phoneNumber] 发送通知给用户 [userName]
//         console.log(`向手机号${this.phoneNumber}发送通知给用户${this.userName}`);
//     }
// }
//
// class Notifier<T extends User> {
//
//     sendNotification(user: T): void {
//         user.notify();
//     }
//
// }
//
// const smsUser = new SmsUser("123", "wl");
// const emailUser = new EmailUser("123@qq.com", "wl");
// new Notifier().sendNotification(smsUser);
// new Notifier().sendNotification(emailUser);

class ReverseUtils {
    static reverse(input: string): string;
    static reverse(input: number[]): number[];
    static reverse(input: readonly number[]): readonly number[];

    static reverse(input: string | number[] | readonly number[]): any {
        // @ts-ignore
      return [...input].reverse();
    }
}

console.log(ReverseUtils.reverse("123"));

