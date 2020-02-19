var http = require('http');
var server = http.createServer();
var extend = require('./extend');
var router = require('./router');

server.on('request', function (req, res) {
    extend(req, res);
    router(req, res);
})

server.listen(8888, function () {
    console.log('http://localhost:8888')
})


