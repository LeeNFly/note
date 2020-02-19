var express = require('express');
var path = require('path');
var storage = require('./storage-mongo');
var app = express();

// 1. 配置模板引擎
app.engine('html', require('express-art-template'));

app.set('view engine', 'html');

app.use(require('body-parser').urlencoded())
app.use(require('body-parser').json())

app.get("/index", function (req, res, next) { 
    //1. 读数据
    storage.getAllNews(function (newsList) {
        res.render('index', { list: newsList });
    })
})

app.get('/details', function (req, res, next) {
    storage.getNewsById(req.query.id, function (news) {
        res.render('details', { item: news });
    }) 
})

app.get('/submit', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'views', 'submit.html'));    
})

app.get('/add', function (req, res, next) {
    storage.addNews(req.query, function () { 
        res.redirect('/index');
    })
})

app.post('/add', function (req, res, next) {
    storage.addNews(req.body, function () { 
        res.redirect('/index');
    })
})

app.use('/resources', express.static('resources'));

app.listen(8888, function () { 
    console.log('http://localhost:8888')
})