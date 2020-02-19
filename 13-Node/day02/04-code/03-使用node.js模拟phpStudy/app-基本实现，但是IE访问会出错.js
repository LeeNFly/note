//1. 引入http模块
var http = require('http');
//2. 创建服务器实例
var server = http.createServer();

//引入文件操作模块
var fs = require('fs');
var path = require('path');

//3. 注册request事件
server.on('request', function (req, res) {
    // 当浏览器向当前node.js程序发送请求之后
    // 我们需要将请求的对应的文件，返回给浏览器

    // 当浏览器向服务器发送请求的时候
    // 我们应该根据浏览器请求的不同的地址，给浏览器返回不同的内容

    // 浏览器如果请求的是 /index.html   ---->  public/index.html
    // 浏览器如果请求的是 /anoceanofsky.css  ---->  public/anoceanofsky.css


    // Content-Type

    fs.readFile(path.join(__dirname, 'public', req.url), function (err, data) {
        if (err) {
            
        } else {
            res.end(data);
        }
    })
})

//4. 监听指定的端口
server.listen(8888, function () {
    console.log('http://localhost:8888')
})