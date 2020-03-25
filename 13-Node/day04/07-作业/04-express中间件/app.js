var express = require('express')

var app = express()

app.use(function (req, res, next) {
    req.fangwei = {
        name: '方伟',
        age: 23
    }
    next()
})

app.get('/index', function (req, res, next) {
    console.log('1- 传递到get, /index')
    console.log(req.fangwei)
    req.pm = {
        name: '潘明',
        age: 29
    }
    next()
})

app.get('/index', function (req, res, next) {
    console.log('2- 传递到get, /index')
    console.log(req.fangwei)
    console.log(req.pm)
    next()
})

app.post('/index', function (req, res, next) {
    console.log('3- 传递到post, /index')
    next()
})

app.get('/login', function (req, res, next) {
    console.log('4- 传递到get, /login')
    next()
})
app.listen(8888, function () {
    console.log('http://localhost:8888')
})
