var http = require('http')

var server = http.createServer()

server.on('request', function (req, res) {
    res.end('ok')
})

server.listen(8888, function(){
    console.log('http://localhost:8888')
})
