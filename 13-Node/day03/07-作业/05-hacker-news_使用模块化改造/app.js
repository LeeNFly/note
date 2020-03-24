var http = require('http')
var extend = require('./extend.js')
var router = require('./router.js')

var server = http.createServer()

server.on('request', function(req, res) {

    extend(req, res)

    router(req, res)
})

server.listen(8888, function () {
    console.log('http://localhost:8888')
})



