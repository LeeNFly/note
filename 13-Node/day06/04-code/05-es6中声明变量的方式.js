/*
 * @Author: Ling Hui Shi
 * @Date: 2019-01-07 22:37:33
 * @LastEditors: Ling Hui Shi
 * @LastEditTime: 2020-04-18 22:38:20
 * @Description: 
 */

// ES6语法, 也是js语法, 就是新增的JS中的语法和规范, 就是js, 只要在js的运行环境中都使用
// 我们之前学的js都是ES5语法, 接下来学习ES6语法, 他在ES5的基础上新增了部分功能, ES6中新增的语法有兼容性问题, IE8及IE8以下浏览器不支持ES6语法(不能识别解析和执行ES6语法JS代码), IE9及以以上浏览器, 可以识别ES6语法并解析和执行 ES6语法js代码
// ES5之后的ECMAScript语法, 如ES6 ES7 ES8 ... 等, 统称为ES6

// var a = 10

// var a = 100;

// console.log(a);

// if (true) {
//     var a = 10;
// }

// console.log(a);


// es6中的声明变量的方式
// let
// 声明的叫做变量
// 1. let声明变量不可以进行重复声明
//    说明: 用let声明变量,
//          1.1. 在let声明变量前, 若该变量名已被var const 或let 方式声明了, 则无法重复声明, 报错
//          1.2  在let声明变量成功之后, 若后续还有var const 或 let 要声明相同变量名的变量, 则无法声明, 报错
// 2. let声明的变量有块级作用域 (外部不能访问内部, 内部可以访问外部)
//    块级作用域: 只要是{}中的, 如 if, for, 等, { }中都是一个块级作用域, 就是{ 代码块 }中 有自己的块级作用域, 内部能访问外部, 外部不能访问内部
// 3. let声明的变量可以只声明, 不赋值, 只声明不赋值变量的值就是undefined
// 4. let声明的变量只能存储一个值, 可以存储所有类型数据, 可以多次赋值, 可以接收任意类型的数据赋值 (5基本3复杂), 数据类型自动改变, 后面的赋值会覆盖前面存储的值
// 5. 其他和var一致

// 注意: 函数的形参默认都是使用var声明

// const
// 声明的叫做常量
// 1. const声明变量不可以进行重复声明
//    说明: 用const声明变量,
//          1.1. 在const声明变量前, 若该变量名已被var const 或let 方式声明了, 则无法重复声明, 报错
//          1.2  在const声明变量成功之后, 若后续还有var const 或 let 要声明相同变量名的变量, 则无法声明, 报错
// 2. const声明也有块级作用域 (外部不能访问内部, 内部可以访问外部)
// 3. const声明的变量不能被修改值, const声明的变量只能存储一个值, 值可以是任意类型 (可以存储所有类型数据)
// 4. const声明变量的时候必须赋一个初始值！ (值可以是任意类型, 5基本3复杂)
// 5. 其他和var一致
// 说明: const声明的变量不能被修改值, 如果是引用类型的数据, 则变量中存储的是引用地址, 我们只要保证const声明的变量
//       的值, 引用地址不被修改即可, 而修改引用类型地址里的数据并不会改变引用地址, 所以const声明的变量如果是
//       引用类型的, 我们可以修改其地址里的数据
//       如:
//       const obj = { name: 'zs', age: 18};
//       obj.name = 'zhangsan';
//       这样是可以的, obj的值还是引用地址, 并没有被改变, 我们改变的只是地址里的数据

//    特殊: 函数内部使用let或const声明变量, 其被多次调用, 是被允许的, 每次执行函数体, 不算let和const重复声明, 且在当前作用域中, 后声明的会覆盖之前声明的变量
    // ★★★★★ 即多次调用函数, 每次调用同一个函数, 本次调用此函数执行函数体时, 函数体中声明的变量, 会覆盖之前调用此函数时函数体中声明的同名变量, 声明并拿到最新的值

//    特殊: for内部使用const或let声明的变量, 是被允许的, 每次执行循环体, 不算let, const重复声明, 并且在当前作用域中, 后声明的会覆盖之前声明的变量
      // ★★★ 即每次执行循环体时, 循环体中后声明的变量会覆盖之前循环体中声明的同名变量.

//    注意: 在函数或for循环中, 虽然不算const let变量重复声明, 但是在每次调用函数和每次执行循环体时, 在单次里面也还是要遵守const 和 let变量的语法规则的.
// const a;
// console.log(a);


// for (let i = 0; i < 10; i++){
//     setTimeout(function () {
//         console.log(i);
//     }, 0)
// }


// let a = 10;
// let a = 100;
// console.log(a);

// if (true) {
//     let a = 10;
// }

// console.log(a);


// const obj = {
//     name: "方玮",
//     age: 18
// }

// obj.age = 19;
