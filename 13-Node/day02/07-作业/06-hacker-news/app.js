var http = require('http')

var server = http.createServer()

server.on('request', function(req, res) {

})

server.listen(8888, function () {
    console.log('http://localhost:8888')
})
