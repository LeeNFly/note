var express = require('express')
var storage = require('./storage')
var app = express()
app.use('/', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
})
app.get('/api/getnewslist', function (req, res) {
    storage.readNews(function (newsList) {
        console.log(newsList)
        res.send({
            errCode: 200,
            msg: "获取列表数据成功",
            data: newsList
        })
    })
})

app.get('/api/getnewsdetail', function (req, res) {
    storage.getNewsById(req.query.id, function (news) {
        res.send({
            errCode: 200,
            msg: "获取详情成功",
            data: news
        })
    })
})

app.get('/api/addnews', function (req, res) {
    storage.writeNews(req.query, function (news) {
        res.send({
            errCode: 200,
            msg: "添加数据成功"
        })
    })
})

app.listen(8888, function () {
    console.log('http://localhost:8888')
})
