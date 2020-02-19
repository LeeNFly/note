var http = require('http');
var server = http.createServer();

var router = require('./router');
var extend = require('./extend');

server.on('request', function (req, res) {
    // 调用功能扩展模块增强req,res
    extend(req, res);

    // 调用路由模块设置路由
    router(req, res);
})

server.listen(8888, function () { 
    console.log('http://localhost:8888')
})