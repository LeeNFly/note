var fs = require('fs');
var path = require('path');
var storage = require('./storage');
var mime = require('mime');
var querystring = require('querystring');
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
    getAddHandler: function (req, res) {
        var news = req.urlObj.query;
        storage.addNews(news, function () {
            res.redirect('/')
        })
    },
    postAddHandler: function (req, res) { 
        var bufferList = [];
        req.on("data", function (chunk) {
            bufferList.push(chunk);
        })
        req.on('end', function () { 
            var result = Buffer.concat(bufferList);
            result = result.toString();
            var news = querystring.parse(result);

            storage.addNews(news, function () { 
                res.redirect('/');
            })
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