var http = require('http')
var fs = require('fs')
var path = require('path')
var mime = require('mime')
var server = http.createServer()

server.on('request', function(req, res) {
    var contentType = mime.getType(req.url)
    res.setHeader('Content-Type', contentType)
    if (req.url == '/index' || req.url == '/') {
        fs.readFile(path.join(__dirname, 'views', 'index.html'), function (err, data) {
            if (err) {
                data = '读取文件失败'
            }
            res.end(data)
        })
    } else if (req.url == '/details'){
        fs.readFile(path.join(__dirname, 'views', 'details.html'), function (err, data) {
            if (err) {
                data = '读取文件失败'
            }
            res.end(data)
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
    } else {
        res.statusCode = 404
        res.statusMessage = 'Not Found'
        res.end('Not Found')
    }
})

server.listen(8888, function () {
    console.log('http://localhost:8888')
})
