var http = require('http');
var server = http.createServer();
var fs = require('fs');
var path = require('path');

server.on("request", function (req, res) {

    res.setHeader("Content-Type", "text/html;charset=utf-8")

    switch (req.url) {
        case "/index":
            // 当用户请求首页的时候，我们需要通过fs模块读取views中index.html中的内容
            // 再将内容返回给浏览器！

            // 通过fs.readFile读取文件的时候
            // 如果传递了utf8字符编码参数, 则最终读取到的内容为字符串
            // 如果没传，则最终读取到的内容为buffer对象

            // res.write和end方法，都能够接收两种类型的参数 1.字符串，2.buffer对象
            // 所以，不论是否传递字符串编码参数，下面的代码都能够正常实现功能
            
            fs.readFile(path.join(__dirname, 'views', 'index.html'), function (err, data) {
                if (err) {
                    res.statusCode = 404;
                    res.statusMessage = "Not Found";
                    res.end("文件未找到");
                } else {
                    res.end(data);
                }
            });
            break;
        case "/login":
            fs.readFile(path.join(__dirname, 'views', 'login.html'), function (err, data) {
                if (err) {
                    res.statusCode = 404;
                    res.statusMessage = "Not Found";
                    res.end("文件未找到");
                } else {
                    res.end(data);
                }
            });
            break;
        case "/list":
            fs.readFile(path.join(__dirname, 'views', 'list.html'), function (err, data) {
                if (err) {
                    res.statusCode = 404;
                    res.statusMessage = "Not Found";
                    res.end("文件未找到");
                } else {
                    res.end(data);
                }
            });
            break;
        default:
            res.statusCode = 404;
            res.statusMessage = "Not Found";
            res.end("页面未找到")
    }

})
server.listen(8888, function () {
    console.log('http://localhost:8888')
})