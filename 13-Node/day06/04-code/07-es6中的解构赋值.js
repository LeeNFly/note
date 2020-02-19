// let obj = {
//     name: "王春生",
//     age: 30
// }

// let name = obj.name;
// let age = obj.age;

// 解构赋值

// let {对象的属性名: 要声明的变量名} = 对象
// 就会自动声明一个变量出来，变量的值就是对象中对应的属性的值

// let { name: name1 } = obj;

// console.log(name1);


// let {对象的属性名: 要声明的变量名} = 对象
// 如果 对象的属性名 和要声明的变量名同名 可以简写成一个
// let { name, age } = obj;
// let { name： name, age: age } = obj;
// console.log(name, age);

// import { 要导入的内容， 要导入的内容 } from "模块"



// function test({name, age}) {
//     console.log(name, age)
// }

// test(obj);


// let arr = [1, 2, 3, 4];

// let num1 = arr[0]
// let num2 = arr[1]
// let num3 = arr[2]
// let num4 = arr[3]

// let [num1, num2, num3, num4] = arr;

// let [,,,num4] = arr;

// console.log(num4);


// let arr = [[1, 2], [3, 4]];

// let [[num1, num2], [num3, num4]] = arr;

// console.log(num1, num2,num3, num4)