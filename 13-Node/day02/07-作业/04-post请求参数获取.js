var http = require('http')
var querystring = require('querystring')

var server = http.createServer()

server.on('request', function (req, rep) {
    var bufferList= []
    req.on('data', function (chunk) {
        // console.log('传递数据---')
        // console.log(chunk)
        bufferList.push(chunk)
    })
    req.on('end', function () {
        var dataBuffer = Buffer.concat(bufferList)
        console.log(dataBuffer.toString())
        var paramStr = dataBuffer.toString()
        var param = querystring.parse(paramStr)
        console.log(param)
    })
})

server.listen(8888, function () {
    console.log('http://localhost:8888')
})
