var querystring = require('querystring')
module.exports = function (req, res, next) {
    if (req.method == "GET") {
        next()
        return
    }
    var bufferList = []
    req.on('data', function (chunk) {
        bufferList.push(chunk)
    })
    req.on('end', function () {
        var buffer = Buffer.concat(bufferList)
        var paramStr = buffer.toString()
        if (req.get('content-type').indexOf('json') > -1) {
            // 请求体格式为json
            req.body = JSON.parse(paramStr)
        }
        else if (req.get('content-type').indexOf('urlencoded') > -1) {
            // 请求体格式为 name=pp&age=18
            req.body = querystring.parse(paramStr)
        }
        next()
    })
}
