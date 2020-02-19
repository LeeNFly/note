var http = require('http');
var server = http.createServer();

server.on("request", function (request, response) {
    response.setHeader("Content-Type", "text/html;charset=utf-8")

    // 响应头中的Content-Type的作用：
    // 浏览器在接收到服务器响应的数据之后，会根据响应头中的Content-Type来进行对应的处理
    // Content-Type: text/html    浏览器就会解析DOM
    // Content-Type: text/css     浏览器会将内容当做css来处理
    // Content-Type: application/json

    response.write('<h1>Hello Node.js</h1>')
    // response.write("body{background-color: pink;}")

    // response.setHeader("Content-Type", "application/json")
    // response.write('{"name": "fangwei", "age": 18}')
    response.end();
})

server.listen(8888, function () { 
    console.log('http://localhost:8888')
})