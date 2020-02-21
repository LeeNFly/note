//  1. 安装 npm install mime
//  2. 引入 var mime = require('mime');
var mime = require('mime');

// mime.getType    根据文件的路径 或者文件的部分路径 或文件名 获取文件对应的Content-Type , 必须要含后缀
// mime.getExtension

console.log(mime.getType("http://www.baidu.com/abc/index.swf")) // 文件全路径 (含后缀名)
console.log(mime.getType("/abc/index.html")) // 文件部分路径 (含后缀名)
console.log(mime.getType("index.html")) // 文件名 (含后缀名)

// console.log(mime.getExtension("text/css")); // 根据mime类型获取对应的文件后缀名
