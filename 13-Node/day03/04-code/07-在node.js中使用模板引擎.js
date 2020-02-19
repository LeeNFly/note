// art-template 
// 既支持浏览器端使用也支持服务器端（node.js）中使用

// 浏览器端的用法
// 1. 引包
// 2. 准备模板（script type=text/template）
// 3. 渲染（template）  template(模板的id, 要渲染的数据对象)


// node.js中的用法
// 1. 引包
var template = require('art-template');
var path = require('path')

// 2. 准备模板 （1. 以文件作为模板， 2.以字符串变量作为模板）

// 3. 渲染
var obj = {
    msg: "Hello World"
}

// // template(模板文件的路径, 要渲染的数据对象)
// var result = template(path.join(__dirname, 'tpl.html'), obj)

// console.log(result);


// 如果以字符串变量作为模板
// 使用方法如下：

var str = "<div>{{msg}}</div>"
//1. 根据模板字符串创建一个渲染函数
// template.compile(模板字符串)

var render = template.compile(str);

//2. 使用渲染函数进行模板渲染  
// render(要渲染的数据)

var result = render(obj);
console.log(result);