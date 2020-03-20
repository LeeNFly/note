var http = require('http')

var server = http.createServer()

server.on('request', function (req, rep) {
    console.log(req.headers)
    if (req.method == 'GET') {
        console.log('你必须使用post请求')
    }
})

server.listen(8888, function () {
    console.log('http://localhost:8888')
})
