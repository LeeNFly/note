var express = require('express')
var path = require('path')

var app = express()

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// 方式1
// app.use('/:path', function(req, res){
//     var pathUrl = req.params.path
//     res.sendFile(path.join(__dirname, 'public', pathUrl))
// })

// 方式2
// app.use('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'public', req.path))
// })

// 方式3 静态资源托管
// app.use(express.static('public'))
// 相当于app.use('/', static('public')) 内部处理方式与方式2一致
// 相当于
// app.use('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'public', req.path))
// })

// 方式4 静态资源托管, 设置前缀
// app.use('/pub', express.static('public'))
// 在方式3的基础上加上访问前缀/pub
// 相当于
// app.use('/pub', function (req, res) {
//     res.sendFile(path.join(__dirname, 'public', req.path))
// })

app.listen(8888, function () {
    console.log('http://localhost:8888')
})
