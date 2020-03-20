var http = require('http')
var querystring = require('querystring')
var url = require('url')

var server = http.createServer()

server.on('request', function (req, rep) {
    // 1. 方式1: 手动封装
    // var url = req.url
    // var params = {}
    // var index = url.indexOf('?')
    // var querystring = url.slice(index + 1)
    // console.log(querystring)
    // var querystringArr = querystring.split('&')
    // querystringArr.forEach(item => {
    //     var itemArr = item.split('=')
    //     params[itemArr[0]] = itemArr[1]
    // })
    // console.log(params)


    // 2. 方式2: 使用node自带querystring模块
    // var url = req.url
    // var index = url.indexOf('?')
    // var paramstring = url.slice(index+1)
    // var params = querystring.parse(paramstring)
    // console.log(params)

    // 3. 方式3: 使用url模块的parse功能
    var urlObj =  url.parse(req.url, true)
    var urlObj2 =  url.parse(req.url, false)
    console.log(urlObj, urlObj.query)
    console.log(urlObj2, urlObj2.query)
})

server.listen(8888, function () {
    console.log('http://localhost:8888')
})
