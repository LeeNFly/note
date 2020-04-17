// 之前es5中声明函数的方式2:
let func = function () {

}

// 在es6中函数表达式的写法可以使用箭头函数

// let f = (形参列表) => {
//     // 函数体
// }

// 更确切的说是, ★ 原来的匿名函数声明方式, ★ 都可以使用箭头函数来声明, 箭头函数也是一种声明(创建)函数的方式, 返回函数的引用地址, 也可以被调用, 类似于匿名函数的声明函数方式, 返回函数的引用地址
// 箭头函数就是函数, 和函数没区别, 就是函数, 使用方式和原来一样. 可以被调用, 一次声明, 多次调用.
// 原来使用匿名函数的地方, 都可以使用箭头函数来替代, 箭头函数可以看作是匿名函数, 使用方式和匿名函数一模一样, 之前函数的规律都适用, 箭头函数就是函数!!!
// function (形参列表) { 函数体 }  改成使用箭头函数 (形参列表) => { 函数体 }
// (形参列表) => { 函数体 } 相当于 ★ 声明(创建)了一个匿名函数, 开辟一块新的空间存储, 返回函数的引用地址, 且声明函数是不会执行函数体的, 需要调用才会执行函数体
// 其他同ES5函数一致, 比如参数可有可无, 若传参参数按顺序一一对应接收, 形参的命名规范要符合函数的命名规范及形参总结、返回值|变量查找、函数作用域及作用域等等. 因为本质上就是函数
// 形参的声明方式默认使用var


// let sayHi = () => {
//     console.log("Hello 春生");
// }

// sayHi();


// 箭头函数的简写形式：
// 1. 如果箭头函数的形参列表中只有一个形参, 那么形参的()可以省略 (注意, 如果没有形参, 则形参的()不能是省略)
// 如:
// (a) => {
//     console.log(a * 2);
// }

// 可以简写为
// a => {
//     console.log(a * 2);
// }

// let double = (a) => {
//     console.log(a * 2);
// }

//简写如下
// let double = a => {
//     console.log(a * 2);
// }

// double(10);

// 2. 如果箭头函数的函数体只有一句代码，那么函数体的{}可以被省略
// 如:
// () => {
//     console.log("Hey 春生");
// }

// 可以简写为
// () => console.log("Hey 春生");


// let func = () => {
//     console.log("Hey 春生");
// }
// 简写如下
// let func = () => console.log("Hey 春生");

// let triple = (a) => {
//     console.log(a * 3);
// }
//简写如下
// let triple = a => console.log(a * 3);

// triple(10);

// 3. 如果箭头函数的函数体只有一句代码，并且这句代码是返回语句，那么函数体的return和{}都可以省略
// 如:
// (a, b) => {
//     return a + b;
// }

// 可以简写为
// (a, b) => a + b;



// let sum = (a, b) => {
//     return a + b;
// }

//简写如下
// let sum = (a, b) => a + b;

// console.log(sum(1, 2));


// let square = a => a * a;


// let func = _ => {

// }

// 以上3种简写形式, 可以复合使用, 即满足什么, 就可以简写成什么, 也有可能同时满足以上3条, 2条, 1条简写条件, 以上简写方式就可以同时使用了
// 如 (a) => { console.log(a) } 同时满足简写条件的1 和 2, 可以简写为 a => console.log(a)
// 如 (a) => { return a * 3 } 同时满足简写条件 1, 2, 3, 可以简写为 a => a * 3

// 由于如果函数没有形参, 则箭头函数在声明时, 形参部分要带上(),
// 如果函数没有参数要传, 但是又不想写(), 怎么办？
// 如: () => console.log(a)
// 则可以这样写 _ => console.log(a)
// 给他一个参数 _ , 但是我们在函数体中不用就是了, 并且一个参数, 可以省略()

// 注意: 箭头函数的简写形式不是强制的, 若满足条件, 可以简写, 也可以不简写,
//      推荐 能简写就简写, 要么全简写 (能简写的地方都简写), 要么全不简写

