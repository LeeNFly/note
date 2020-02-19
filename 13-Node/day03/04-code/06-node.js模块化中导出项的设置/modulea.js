var fangwei = {
    name: "方玮",
    age: 19,
    gender: "female"
}



// 模块中如果有内容要提供给外界使用
// 则需要设置当前模块的导出项

// 1. 给导出向对象添加属性
// module.exports默认是一个空对象
// 我们可以给对象添加属性，将内容导出！！

// module.exports.fangwei = fangwei;


// 2. 直接为module.exports赋值一个新对象
// module.exports = fangwei;




// module.exports.名字 = 要导出的内容;
// exports.名字 = 要导出的内容


// ！！！
// 不能给exports直接赋值！！
// exports = 要导出的内容