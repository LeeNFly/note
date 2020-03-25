var express = require('express')
var querystring = require('querystring')
var body_parser = require('./02-将body-parser外提成模块')
var app = express()

// 基本实现
// app.use(function (req, res, next) {
//     if (req.method == "GET") {
//         next()
//         return
//     }
//     var bufferList = []
//     req.on('data', function (chunk) {
//         bufferList.push(chunk)
//     })
//     req.on('end', function () {
//         var buffer = Buffer.concat(bufferList)
//         var paramStr = buffer.toString()
//         if (req.get('content-type').indexOf('json') > -1) {
//             // 请求体格式为json
//             req.body = JSON.parse(paramStr)
//         }
//         else if (req.get('content-type').indexOf('urlencoded') > -1) {
//             // 请求体格式为 name=pp&age=18
//             req.body = querystring.parse(paramStr)
//         }
//         next()
//     })
// })

// 将body-parser外提成模块
app.use(body_parser)

app.post('/index', function (req, res) {
    console.log('/index')
    console.log('post请求的参数为', req.body)
})

app.listen(8888, function () {
    console.log('http://localhost:8888')
})
