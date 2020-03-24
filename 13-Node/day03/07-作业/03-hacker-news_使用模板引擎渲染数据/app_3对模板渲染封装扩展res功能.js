var http = require('http')
var fs = require('fs')
var path = require('path')
var mime = require('mime')
var template = require('art-template')
var url = require('url')
var server = http.createServer()

server.on('request', function(req, res) {

    // 对res增强, 添加模板渲染功能
    res.render = function (filename, data) {
        fs.readFile(path.join(__dirname, 'views', filename), 'utf-8', function (err, dataStr) {
           if (data) {
               var render = template.compile(dataStr)
               var htmlStr = render(data)
               res.end(htmlStr)
           }
           else {
               res.end(dataStr)
           }
        })
    }

    // 对res增强, 增加重定向功能
    res.sendRedirect = function (url) {
        // 1. 设置状态码
        res.statusCode = 302;
        // 2. 设置状态信息
        res.statusMessage = "Found";
        res.setHeader('location', url)
        res.end()
    }

    var contentType = mime.getType(req.url)
    var urlObj = url.parse(req.url, true)
    res.setHeader('Content-Type', contentType)
    if (req.url == '/index' || req.url == '/') {
        readNews(function (newsList) {
            res.render('index.html', {list: newsList})
        })
    } else if (urlObj.pathname == '/details'){
        getNewsById(urlObj.query.id, function(news) {
            res.render('details.html', {item: news})
        })
    } else if (req.url == '/submit'){
        res.render('submit.html')
    } else if (req.url.indexOf('/resources') > -1) {
        fs.readFile(path.join(__dirname, req.url), function (err, data) {
            if (err) {
                data = '读取文件失败'
            }
            res.end(data)
        })
    } else if (urlObj.pathname == '/add') {
        writeNews(urlObj.query, function () {
            res.sendRedirect('/')
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

