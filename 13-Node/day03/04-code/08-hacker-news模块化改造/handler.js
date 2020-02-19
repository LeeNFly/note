var storage = require('./storage');
var mime = require('mime');
var fs = require('fs');
var path = require('path');

module.exports = {
    indexHandler: function (req, res) {
        //1. 读数据
        storage.getAllNews(function (newsList) {
            //2. 渲染返回结果
            res.render('index', { list: newsList });
        })
    },
    detailsHandler: function (req, res) {
        // 1. 读数据
        storage.getNewsById(req.urlObj.query.id, function (news) {
            // 2. 渲染 返回结果
            res.render('details', { item: news });
        })
    },
    submitHandler: function (req, res) {
        // 直接渲染返回结果
        res.render('submit');
    },
    staticHandler: function (req, res) {
        res.setHeader("Content-Type", mime.getType(req.url));
        fs.readFile(path.join(__dirname, req.url), function (err, data) {
            res.end(data);
        })
    },
    addHandler: function (req, res) {
        storage.addNews(req.urlObj.query, function () { 
            res.redirect('/')
        })
    },
    notFoundHandler: function (req, res) {
        res.statusCode = 404;
        res.statusMessage = "Not Found";
        res.end("Not Found");
    }
}