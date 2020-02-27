var express = require('express');
// 需要先下载body-parser的包, 然后引入
var bodyParser = require('body-parser');
var app = express();

// bodyParser.urlencoded() 返回一个函数, 就是该路由的事件处理函数
// 返回的函数中, 获取了post请求的参数, 赋给了req.body, 并且调用下一个中间件
// bodyParser.urlencoded() 可以处理封装key=value&key=value参数格式的post请求的参数
// bodyParser.json() 可以处理封装json格式的post请求的参数
app.use(bodyParser.urlencoded());

app.post('/api', function (req, res) {
    // 获取post请求的参数
    // 通过req.body可以直接过去post请求参数（有前提！需要使用body-parser中间件）
    console.log(req.body);

})



app.listen(8888, function () {
    console.log('http://localhost:8888')
})
