var express = require('express');
var path = require('path');

var app = express();

// 首页路由
app.get('/index', function (req, res, next) {
    // 返回首页 index.html
    res.sendFile(path.join(__dirname, "views", 'index.html'));
})

app.get('/details', function (req, res, next) {
    res.sendFile(path.join(__dirname, "views", 'details.html'))
})

app.get('/submit', function (req, res, next) { 
    res.sendFile(path.join(__dirname, "views", 'submit.html'))
})

// 静态资源处理
app.use("/resources", express.static('resources'));

app.listen(8888, function () { 
    console.log('http://localhost:8888')
})