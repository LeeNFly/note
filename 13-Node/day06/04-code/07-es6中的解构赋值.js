// let obj = {
//     name: "王春生",
//     age: 30
// }

// 要取得对象中的name 和 age 原来写法:
// let name = obj.name;
// let age = obj.age;

// es6解构赋值

// 一、对象解构赋值
// 对象是无序的键值对, 所以对象在结构赋值时, 对顺序是没有要求的
// let {对象的属性名: 要声明的变量名} = 对象
// 就会自动在 ★★★ 当前作用域声明一个变量出来，变量的值 就是对象中对应的属性的值
// 可以写多个, 用逗号隔开:
// let {对象的属性名: 要声明的变量名, 对象的属性名: 要声明的变量名 } = 对象
// 除了用let声明, 也可以使用const声明
// const {对象的属性名: 要声明的变量名} = 对象,
// const {对象的属性名: 要声明的变量名, 对象的属性名: 要声明的变量名 } = 对象

// 后续通过声明的变量名使用拿到的变量

// let { name: name1 } = obj;

// console.log(name1);


// let {对象的属性名: 要声明的变量名} = 对象
// 如果 对象的属性名 和要声明的变量名同名 可以简写成一个 (一般推荐这种写法)
// let { name } = obj;  相当于 let { name: name } = obj;
// 也可以支持写多个, 用逗号隔开
// let { name, age } = obj; 相当于 let { name: name, age: age } = obj
// 除了用let声明, 也可以使用const声明
// const { name } = obj
// const { name, age } = obj

// console.log(name, age);

// import { 要导入的内容， 要导入的内容 } from "模块"



// function test({name, age}) {
//     我们知道, 调用函数的时候, 会将实参的值一一赋值给形参
//     则就类似于 let { name, age } = obj 结构语法, 完成赋值
//     console.log(name, age)
// }

// test(obj);


// 二、数组结构赋值
// 数组是有序的, 所以数组在结构赋值时, 对顺序是有要求的
// 可以是let声明, 也可以是const声明

// let arr = [1, 2, 3, 4];

// let num1 = arr[0]
// let num2 = arr[1]
// let num3 = arr[2]
// let num4 = arr[3]

// let [num1, num2, num3, num4] = arr;
// console.log(num1, num2, num3, num4)  1, 2, 3, 4 拿到的是数组中的每个元素

// let [num2, num3] = arr;
// console.log(num2, num3); // 1, 2  数组是按照顺序进行结构赋值

// let [,,,num4] = arr;
// console.log(num4); // 4

// 嵌套结构
// let arr = [[1, 2], [3, 4]];

// let [[num1, num2], [num3, num4]] = arr; // 保证格式一致即可

// console.log(num1, num2,num3, num4) // 1, 2, 3, 4
