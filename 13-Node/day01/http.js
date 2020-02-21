var http = require('http')

var server = http.createServer()

server.on('request', function (req, res) {
    console.log(req.url)
});

server.listen('9999', function () {
    console.log('服务器启动成功')
})