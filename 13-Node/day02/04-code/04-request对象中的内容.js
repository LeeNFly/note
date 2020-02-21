var http = require('http')
var server = http.createServer();

server.on('request', function (req, res) {
    
    // req.url:  请求地址中的 路径和参数
    // req.headers： 请求报文中的所有请求头信息，他是一个对象！ (取值方便, 推荐使用)
    // req.rawHeaders: 请求报文中的所有请求头信息，是一个数组！ (取值不方便, 不推荐使用)
    // req.httpVersion:  浏览器发送的http请求的协议的版本号！
    // req.method: 获取请求方式

    console.log(req.headers);
    // res.end("ok");

    if (req.method == "POST") {
        res.end("ok")
    } else {
        res.end("你的请求方式不被允许！！只能使用POST")
    }

})

server.listen(8888, function () { 
    console.log('http://localhost:8888')
})