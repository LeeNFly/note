var express = require('express')
var bodyParser = require('body-parser')
var app = express()

// 将body-parser外提成模块
app.use(bodyParser.urlencoded())
// app.use(bodyParser.json())

app.post('/index', function (req, res) {
    console.log('/index')
    console.log('post请求的参数为', req.body)
})

app.listen(8888, function () {
    console.log('http://localhost:8888')
})
