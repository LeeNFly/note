/*
 * @Author: Ling Hui Shi
 * @Date: 2019-01-07 22:37:32
 * @LastEditors: Ling Hui Shi
 * @LastEditTime: 2020-04-19 18:47:34
 * @Description: 
 */
// 之前确定一个函数中的this是谁，我们需要通过调用模式来确定 (方式1, 方式2, 以及匿名函数的声明方式, 都通过以下方式确定函数体中this指向)
// 1. 函数调用模式  this ---> window   函数名()
// 2. 方法调用模式  this ---> 调用方法的对象  对象.方法名()
// 3. 构造函数调用模式 this ---> 创建出来的实例  new 函数名()
// 4. 上下文调用模式   this ---> call和apply的第一个参数  函数名.call()

// bind


// ★ 特殊: 用箭头函数声明的函数函数体中没有this
// 如果在箭头函数中使用this, 会沿着词法作用域链向上一级作用域链中进行查找this, 找到了就用, 并且停止查找. 没找到就继续沿着作用域链往上找 (全局中this指向window)

// let func = () => {
//     console.log(this);
// }

// func();

// let obj = {
//     name: "春生",
//     sayHello() {
//         let func = () => {
//             console.log(this);
//         }
//         func();
//     }
// }

// obj.sayHello();


// 之前使用var that = this的场景全都可以使用箭头函数来解决了

// let obj = {
//     name: "春生",
//     sayHello() {
//         var that = this;
//         setTimeout(function () {
//             console.log("我叫" + that.name)
//         }, 1000)
//     }
// }

// let obj = {
//     name: "春生",
//     sayHello() {
//         setTimeout(() => {
//             console.log("我叫" + this.name)
//         }, 1000)
//     }
// }

// obj.sayHello();
