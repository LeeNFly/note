// get请求的参数是用?拼接在url地址后面的

// 如何获取get请求的参数？

var http = require('http');
var server = http.createServer();
var querystring = require('querystring')
var url = require('url');

server.on('request', function (req, res) {

    // 获取get请求的参数
    // console.log(req.url);

    // 1. 自己动手，操作字符串获取参数信息
    // var params = {};

    // if (req.url.indexOf("?") != -1) {
    //     var querystring = req.url.split("?")[1];
    //     // querystring   name=pm&age=18

    //     querystring.split("&").forEach(function (v, i) {
    //         // v  name=pm
    //         // v  age=18
    //         var temp = v.split('=');
    //         params[temp[0]] = temp[1];
    //     })
    //     console.log(params);
    // }

    // 2. 使用querystring模块直接实现查询字符串的解析

    // if (req.url.indexOf("?") != -1) {
    //     var str = req.url.split("?")[1]
    //     var params = querystring.parse(str);
    //     console.log(params);
    // }

    // 3. 使用url模块进行参数的解析
    // req.url /?name=pm&age=18
    // url.parse方法可以将url字符串转换成对应的对象
    // 有两个参数：
    // url.parse(url, parseQueryString);

    // url： 要进行解析的url字符串
    // parseQueryString: 是一个布尔值，如果为true则最终解析出来的query是一个对象！如果是false则是一个字符串

    var urlObj = url.parse(req.url, true);
    // urlObj：  pathname: 路径部分的内容
            //   query: 参数部分的内容 默认情况下是一个字符串
    console.log(urlObj.query);


    res.end("ok");

})

server.listen(8888, function () {
    console.log('http://localhost:8888')
})