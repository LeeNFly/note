// 不管是之前ES5中的三种声明函数的方式 还是 ES6中的箭头函数声明函数的方式, 都可以使用形参的默认值
// ES6中添加了形参默认值
function sum(a = 100, b = 100) { // 设置形参默认值
    // 每次调用函数时, 实参按 ★顺序★ 一一对应赋值给形参
    // 有传实参的形参, 则用传递的实参值
    // 没有传递实参的形参, 若有设置默认值, 则使用默认值, 否则为undefined
    return a + b;
}

console.log(sum(1, 2));

console.log(sum());
