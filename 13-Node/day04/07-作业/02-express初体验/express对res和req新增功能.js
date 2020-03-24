var express = require('express')
var path = require('path')

var app = express()

app.get('/', function (req, res) {
    // res.send({name: '张三', age: 14})
    // res.download(path.join(__dirname, 'app.js'))
    // res.status(300)
    // res.send('300')
    // res.redirect('/index')
    console.log(111)
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(8888, function () {
    console.log('http://localhost:8888')
})
