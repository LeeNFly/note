//1. 引入http模块
var http = require('http');
//2. 创建服务器实例
var server = http.createServer();

//引入文件操作模块
var fs = require('fs');
var path = require('path');

// 引入mime模块
var mime = require('mime');

//3. 注册request事件
server.on('request', function (req, res) {
    // 当浏览器向当前node.js程序发送请求之后
    // 我们需要将请求的对应的文件，返回给浏览器

    // 当浏览器向服务器发送请求的时候
    // 我们应该根据浏览器请求的不同的地址，给浏览器返回不同的内容

    // 浏览器如果请求的是 /index.html   ---->  public/index.html
    // 浏览器如果请求的是 /anoceanofsky.css  ---->  public/anoceanofsky.css


    // Content-Type: 就是服务器在返回(响应)数据给浏览器的时候，告诉浏览器返回的究竟是什么样的数据
    // 只有返回了Content-Type之后，浏览器在接收到返回的数据，才知道要怎么去处理和解析响应得到的数据
    // 由于我们现在没有返回，所以IE在接收到css文件之后，不知道是个什么东西，所以css样式不生效！
    // 如果我们在响应头中不返回Content-Type, 则浏览器不知道返回的数据是什么样的数据, 就不知道要怎么去解析响应得到的数据了

    // Content-Type: "text/html" => 说明响应的数据是html类型的, 则浏览器会根据html去解析响应的数据
    // Content-Type: "text/css"  => 说明响应的数据是css类型的, 则浏览器会根据css去解析响应的数据
    // Content-Type: "application/x-javascript" => 说明响应的数据是js类型的, 则浏览器会根据js去解析和执行响应的数据
    // Content-Type: "image/png" => 说明响应的数据是png图片类型的, 则浏览器将响应的数据解析成图片

    //MIME 类型

    // 有一个第三方包实现了 根据文件名称获取Content-Type的功能
    //  1. 安装 npm install mime
    //  2. 引入 var mime = require('mime');
    // mime 这个包的名字

    // 如果用户请求的是  http://localhost:8888   那么req.url就是/  我们也需要给浏览器返回 index.html

    if (req.url == "/") {
        req.url = "/index.html";
    }

    // req.url = req.url == "/" ? "/index.html" : req.url;

    res.setHeader("Content-Type", mime.getType(req.url));

    fs.readFile(path.join(__dirname, 'public', req.url), function (err, data) {
        if (err) {
            res.statusCode = 404;
            res.statusMessage = "Not Found";
            res.end("Not Found");
        } else {
            res.end(data);
        }
    })
})

//4. 监听指定的端口
server.listen(8888, function () {
    console.log('http://localhost:8888')
})