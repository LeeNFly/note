var http = require('http')
var fs = require('fs')
var path = require('path')

var server = http.createServer();

server.on('request', function (req, res) {
    var url = req.url
    if (url == '/index' || url == '/') {
        // res.setHeader('content-type', 'text/html')
        fs.readFile(path.join(__dirname, 'public', 'index.html'), 'utf-8', function (err, data,) {
            if (err) {
                data = '读取文件失败'
            }
            res.end(data)
        })
    }
    if (url == '/anoceanofsky.css') {
        // res.setHeader('content-type', 'text/html')
        fs.readFile(path.join(__dirname, 'public', 'anoceanofsky.css'), 'utf-8', function (err, data,) {
            if (err) {
                console.log('读取文件失败')
                data = '读取文件失败'
            }
            res.end(data)
        })
    }
    if (url == '/background.png') {
        // res.setHeader('content-type', 'text/html')
        fs.readFile(path.join(__dirname, 'public', '/background.png'), 'utf-8', function (err, data,) {
            if (err) {
                console.log('读取文件失败')
                data = '读取文件失败'
            }
            res.end(data)
        })
    }
})

server.listen('8888', function () {
    console.log('http://localhost:8888')
})
