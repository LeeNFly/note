var express = require('express')
var path = require('path')
var express_art_template = require('express-art-template')
var bodyParser = require('body-parser')
var router = require('./router')

var app = express()

app.engine('html', express_art_template)

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'html')

app.use('/', bodyParser.urlencoded())

// router(app)

// 为避免将app对象交出去(app对象权限太大), 使用express提供的router对象注册路由
app.use(router)

app.listen('8888', function () {
    console.log('http://localhost:8888')
})
