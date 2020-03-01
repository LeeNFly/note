// var name = "王秋生";
// var age = 40;


// var str = "我叫" + name + ", 我今年" + age + "岁";

// var str1 = "abc"

// 模板字符串
// 反引号  `
// 模板字符串 最后的结果还是字符串
// 1. 模板字符串可以换行

// var str = `字符
// 串`

// 2. 可以直接在字符串中嵌入变量的, 即可以识别变量

var name = "王秋生";
var age = 40;

var str = `我叫${name}，我今年${age}岁`;

console.log(str);
