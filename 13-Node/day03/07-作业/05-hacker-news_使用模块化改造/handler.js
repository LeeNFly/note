var storage = require('./storage')
var fs = require('fs')
var path = require('path')
module.exports = {
    indexHandler: function (req, res) {
        storage.readNews(function (newsList) {
            res.render('index.html', {list: newsList})
        })
    },
    detailsHandler: function (req, res) {
        storage.getNewsById(req.urlObj.query.id, function(news) {
            res.render('details.html', {item: news})
        })
    },
    submitHandler: function (req, res) {
        res.render('submit.html')
    },
    resourcesHandler: function (req, res) {
        fs.readFile(path.join(__dirname, req.url), function (err, data) {
            if (err) {
                data = '读取文件失败'
            }
            res.end(data)
        })
    },
    addHandler: function(req, res) {
        storage.writeNews(req.urlObj.query, function () {
            res.sendRedirect('/')
        })
    },
    notFoundHandler: function (req, res) {
        res.statusCode = 404
        res.statusMessage = 'Not Found'
        res.end('Not Found')
    }
}
