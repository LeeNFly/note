// 1. 引包
var express = require('express')

// 2. 创建express实例
var app = express()

// 3. 直接注册路由
app.get('/index', function (req, res) {
    res.send('你好, express')
})

app.listen(8888, function () {
    console.log('http://localhost:8888')
})
