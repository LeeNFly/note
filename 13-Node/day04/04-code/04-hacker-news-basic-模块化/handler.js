var fs = require('fs');
var path = require('path');
var storage = require('./storage');
var mime = require('mime');
module.exports = {
    indexHandler: function (req, res) {
        storage.getAllNews(function (newsList) {
            res.render("index", {
                list: newsList
            });
        })
    },
    detailsHandler: function (req, res) {
        storage.getNewsById(req.urlObj.query.id, function (news) {
            res.render("details", {
                item: news
            })
        })
    },
    submitHandler: function (req, res) {
        res.render('submit')
    },
    addHandler: function (req, res) {
        var news = req.urlObj.query;
        storage.addNews(news, function () {
            res.redirect('/')
        })
    },
    staticHandler: function (req, res) {
        res.setHeader("Content-Type", mime.getType(req.url));
        fs.readFile(path.join(__dirname, req.url), function (err, data) {
            res.end(data);
        })
    },
    notFoundHandler: function (req, res) {
        res.statusCode = 404;
        res.statusMessage = "Not Found";
        res.end("Not Found");
    }
}