# 复习

## 浏览器和服务器的通信过程

## 浏览器的工作原理

## 浏览器的5大组成部分
UI
Socket
Render Engine
JavaScript Engine
Storage

## web开发的本质
1. 请求  2. 处理  3. 响应

## Node.js
LTS
Current

1. REPL
2. 执行文件

## process.stdout.write

## global

## 文件读写
fs.writeFile(文件路径， 写入内容, 编码格式, 回调函数)  写入默认字符编码为utf8

fs.readFile(文件路径, 编码格式, 回调函数)

## 路径 __dirname __filename
__dirname
__filename

## path.join
path.join(路径的一部分, 路径的一部分, 路径的一部分)

## 创建简单的http服务器
```js
var http = require('http')
var server = http.createServer();

server.on('request', function(req, res){
    // ...
    res.end("响应结束")
})

server.listen(8888, function(){

})
```

## 设置响应头的方法
1. res.setHeader(key, value)  一次只能设置一个响应头键值对
2. res.writeHead(statusCode, statusMessage, {}) 一次只能设置多个响应头键值对

这两个方法都必须在write之前调用！

## response的其他方法
write: 向浏览器返回数据  字符串  buffer对象
end:
statusCode
statusMessage

## request.url
获取请求地址中的 路径+参数

## 路由
根据不同的url地址返回不同的内容