var express = require('express');
var app = express();
var path = require('path');

// app.get('/index.html', function (req, res) {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

// app.get("/anoceanofsky.css", function (req, res) {
//     res.sendFile(path.join(__dirname, 'public', 'anoceanofsky.css'));
// })

// 处理所有的静态资源请求
// 方式1:
// app.use('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'public', req.path));
// })
// 方式2:
// app.use(function (req, res) {
//     res.sendFile(path.join(__dirname, 'public', req.path));
// })

// 方式3： 托管静态资源,
// app.use(express.static('public'))  参数是要托管的文件夹名字
// 相当于app.use('/', static('public')) 内部处理方式与方式1方式2一致

// 方式4: 可以设置前缀路径
// app.use("/public", express.static('public')) // 参数还是要托管的文件夹

app.listen(8888, function () {
    console.log('http://localhost:8888')
})
