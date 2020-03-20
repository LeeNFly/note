var http = require('http')
var fs = require('fs')
var path = require('path')

var server = http.createServer();

server.on('request', function (req, res) {
    var url = req.url
    if (url == '/') {
        url = '/index.html'
    }
    fs.readFile(path.join(__dirname, 'public', url), function(err, data) {
        if (err) {
            res.statusCode = 404
            res.statusMessage = 'Not Found'
            res.end('Not Found')
        }
        res.end(data)
    })
})

server.listen('8888', function () {
    console.log('http://localhost:8888')
})
