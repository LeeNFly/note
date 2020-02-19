// 1. 引包
var express = require('express');
// 2. 创建express实例
var app = express();

// 4. 直接注册路由规则
app.get('/', function (req, res) { 
    res.send("你好世界");
})

// 3. 通过实例监听指定的端口
app.listen(8888, function () {
    console.log('http://localhost:8888')
})