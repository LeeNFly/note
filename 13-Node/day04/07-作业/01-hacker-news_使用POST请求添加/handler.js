var storage = require('./storage')
var fs = require('fs')
var path = require('path')
var querystring = require('querystring')
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
        var param
        if (req.method == 'GET') {
            param = req.urlObj.query
            storage.writeNews(param, function () {
                res.sendRedirect('/')
            })
        } else {
            var bufferList = []
            req.on('data', function (chunk) {
                bufferList.push(chunk)
            })

            req.on('end', function () {
                var buffer = Buffer.concat(bufferList)
                param = querystring.parse(buffer.toString())
                storage.writeNews(param, function () {
                    res.sendRedirect('/')
                })

            })
        }

    },
    notFoundHandler: function (req, res) {
        res.statusCode = 404
        res.statusMessage = 'Not Found'
        res.end('Not Found')
    }
}
