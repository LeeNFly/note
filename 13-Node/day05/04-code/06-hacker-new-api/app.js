var express = require('express');
var storage = require('./storage-mongo');
var app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
})

app.get("/api/getnewslist", function (req, res, next) {
    storage.getAllNews(function (newsList) {
        res.send({
            errCode: 200,
            msg: "获取列表数据成功",
            data: newsList
        });
    })
})

app.get("/api/getnewsdetail", function (req, res, next) {
    storage.getNewsById(req.query.id, function (news) {
        res.send({
            errCode: 200,
            msg: "获取详情成功",
            data: news
        });
    })
})


app.get('/api/addnews', function (req, res, next) {
    storage.addNews(req.query, function () { 
        res.send({
            errCode: 200,
            msg: "添加数据成功"
        })
    })
})


app.listen(8888, function () { 
    console.log('http://localhost:8888')
})