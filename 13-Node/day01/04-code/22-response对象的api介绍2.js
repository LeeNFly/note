var http = require('http')
var server = http.createServer();
server.listen(8888, function () { 
    console.log("http://localhost:8888")
})
server.on('request', function (request, response) { 

    // setHeader
    // writeHead
    // write
    // end

    // response.statusCode
    // response.statusMessage


    response.statusCode = "502";
    response.statusMessage = "Bad GateWay"

    response.end('ok');
})

