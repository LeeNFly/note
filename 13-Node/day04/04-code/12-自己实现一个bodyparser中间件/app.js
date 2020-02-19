var express = require('express');
var querystring = require('querystring');

var app = express();

// 需求： 自己实现一个中间件body-parser
// body-parser功能： 就是给req添加一个body属性，这个属性中放的就是post请求的参数

// app.use(function (req, res, next) {
//     // 1. 获取post请求参数
//     var bufferList = [];
//     req.on('data', function (chunk) {
//         bufferList.push(chunk);
//     })
//     req.on('end', function () { 
//         var result = Buffer.concat(bufferList);
//         result = result.toString(); // key=value&key=value
        
//         // 2. 将post请求参数 添加给req作为body属性
//         req.body = querystring.parse(result);

//         next();
//     })
// })


var mybodyparser = require('./mybody-parser')

app.use(mybodyparser);

app.post('/add', function (req, res) {
    res.send(req.body);
})


app.listen(8888, function () { 
    console.log('http://localhost:8888');
})