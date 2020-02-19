var http = require('http')
var server = http.createServer();

server.on('request', function (req, res) {
    res.statusCode = 404;
    res.statusMessage = "Not Found";
    res.end();
})

server.listen(8888, function () { 
    console.log("http://localhost:8888")
})