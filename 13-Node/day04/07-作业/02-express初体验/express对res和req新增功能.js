var express = require('express')
var path = require('path')

var app = express()

app.get('/index.html/:id/:name', function (req, res) {
    // express对res增强功能:
    // res.send({name: '张三', age: 14})
    // res.download(path.join(__dirname, 'app.js'))
    // res.status(300)
    // res.send('300')
    // res.redirect('/index')
    // console.log(111)
    // res.sendFile(path.join(__dirname, 'index.html'))

    // express对req增强功能:
    // console.log(req.query)
    // console.log(req.originalUrl)
    // console.log(req.params)
    // console.log(req.path)
    // console.log(req.params)
    // req.get('content-type') 获取请求头中content-type, 用来指定请求体格式的, 只有post请求有
})

app.use('/res/ress', function (req, res) {
    console.log(req.url, req.path)
})

app.listen(8888, function () {
    console.log('http://localhost:8888')
})
