var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.urlencoded());

app.post('/api', function (req, res) { 
    // 获取post请求的参数
    // 通过req.body可以直接过去post请求参数（有前提！需要使用body-parser中间件）
    console.log(req.body);

})



app.listen(8888, function () { 
    console.log('http://localhost:8888')
})