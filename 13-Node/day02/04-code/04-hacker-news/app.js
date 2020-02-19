var http = require('http');
var server = http.createServer();
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var url = require('url');

server.on('request', function (req, res) {

    // 通过url模块将url地址解析成一个对象
    var urlObj = url.parse(req.url, true);

    // 1. 设置路由规则
    //  / 或者 /index 让用户访问首页
    //  /details    让用户访问详情页
    //  /submit     让用户访问添加页

    if (req.url == "/" || req.url == "/index") {
        // 首页
        // 需要读取首页的html文件，将其返回给浏览器
        fs.readFile(path.join(__dirname, 'views', 'index.html'), function (err, data) {
            res.end(data);
        })
    } else if (urlObj.pathname == "/details") {
        // 详情页
        // 读取详情页的html返回给浏览器
        fs.readFile(path.join(__dirname, "views", "details.html"), function (err, data) {
            res.end(data);
        })
    } else if (req.url == "/submit") {
        // 添加页
        // 读取添加页的html返回给浏览器
        fs.readFile(path.join(__dirname, "views", "submit.html"), function (err, data) {
            res.end(data);
        })
    } else if (req.url.indexOf("/resources") == 0) {

        // res.end("ni zai qing qiu jing tai zi yuan")
        // req.url 就是要请求的静态资源的路径

        //设置响应头
        res.setHeader("Content-Type", mime.getType(req.url));
        fs.readFile(path.join(__dirname, req.url), function (err, data) {
            res.end(data);
        })
    } else {
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 404;
        res.statusMessage = "Not Found";
        res.end('<img src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=a6f53c14b8a1cd1105b675268129afc1/8644ebf81a4c510f87d03a3e6259252dd42aa5fa.jpg">');
    }
})

server.listen(8888, function () {
    console.log('http://localhost:8888')
})