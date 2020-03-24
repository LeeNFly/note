var http = require('http')
var fs = require('fs')
var path = require('path')
var mime = require('mime')
var template = require('art-template')
var url = require('url')
var server = http.createServer()

server.on('request', function(req, res) {


    var contentType = mime.getType(req.url)
    var urlObj = url.parse(req.url, true)
    res.setHeader('Content-Type', contentType)
    if (req.url == '/index' || req.url == '/') {
        fs.readFile(path.join(__dirname, 'views', 'index.html'), "utf-8", function (err, dataStr) {
            readNews(function (newsList) {
                var render = template.compile(dataStr)
                var htmlStr = render({list: newsList})
                res.end(htmlStr)
            })
        })
    } else if (urlObj.pathname == '/details'){
        fs.readFile(path.join(__dirname, 'views', 'details.html'), "utf-8", function (err, data) {
            getNewsById(urlObj.query.id, function(news) {
                var render = template.compile(data)
                var htmlStr = render({item: news})
                res.end(htmlStr)
            })
        })
    } else if (req.url == '/submit'){
        fs.readFile(path.join(__dirname, 'views', 'submit.html'), function (err, data) {
            if (err) {
                data = '读取文件失败'
            }
            res.end(data)
        })
    } else if (req.url.indexOf('/resources') > -1) {
        fs.readFile(path.join(__dirname, req.url), function (err, data) {
            if (err) {
                data = '读取文件失败'
            }
            res.end(data)
        })
    } else if (urlObj.pathname == '/add') {
        writeNews(urlObj.query, function () {
            // 1. 设置状态码
            res.statusCode = 302;
            // 2. 设置状态信息
            res.statusMessage = "Found";
            res.setHeader('location', '/')
            res.end()
        })
    } else {
        res.statusCode = 404
        res.statusMessage = 'Not Found'
        res.end('Not Found')
    }
})

server.listen(8888, function () {
    console.log('http://localhost:8888')
})

function readNews(callback) {
    fs.readFile(path.join(__dirname, 'data.json'), 'utf-8', function (err, data) {
        var newsList = JSON.parse(data || '[]')
        callback && callback(newsList)
    })
}

function getNewsById(id, callback) {
    fs.readFile(path.join(__dirname, 'data.json'), 'utf-8', function (err, data) {
        var newsList = JSON.parse(data || '[]')
        var news = newsList.find(item => {
            return item.id == id
        })
        callback && callback(news)
    })
}

function writeNews(news, callback) {
    readNews(function (newsList) {
        var id = newsList[newsList.length - 1].id + 1
        news.id = id
        newsList.push(news)
        fs.writeFile(path.join(__dirname, 'data.json'),  JSON.stringify(newsList), function (err) {
            callback && callback()
        })
    })
}

