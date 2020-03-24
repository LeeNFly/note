// post请求的参数是在请求体中的！

// 如何获取post请求参数呢？

var http = require('http');
var server = http.createServer();
var querystring = require('querystring');

var fs = require('fs')

server.on('request', function (req, res) {

    // 获取post请求的参数

    // 0. 定义一个数组，用来存放每次接收到的数据
    var bufferList = [];

    // 1. 给req对象注册一个事件 data事件
    // ps: post请求数据大小没有限制, 所以数据是一份一份传递的, 传递的数据都是 ★ 请求体中的数据
    // 每当有post请求的数据发送到服务器的时候，就会触发这个事件, 调用data的事件处理函数
    // 事件处理函数都是异步的, 不会阻塞栈
    req.on('data', function (chunk) {
        // post请求的数据可能会分多次发送给服务器
        // 每次发送给服务器都会触发一次data事件
        // 每次发送的数据可以通过chunk来接收  chunk是一个buffer对象, 即每一份数据都是一个buffer对象 二进制数据, 是传递过来的 ★ 请求体中的数据
        // console.log(chunk);
        // 每次有新数据来就将数据添加到数组中
        bufferList.push(chunk);
    })

    // 2. 给req对象注册一个事件 end事件
    // 事件处理函数都是异步的, 不会阻塞栈
    req.on('end', function () {
        // end事件会在post数据发送完毕之后，触发
        // 如果要获取数据，肯定需要在end事件中进行获取！

        // 需要将数组中所有的buffer对象合并成一个buffer对象
        // 我们可以通过Buffer.concat方法进行buffer对象的合并, 最终得到一个buffer对象, 存储着二进制数据
        // 参数为数组, 数组中的元素为buffer对象
        var result = Buffer.concat(bufferList);
        fs.writeFile("./1.jpg", result, function (err) {
            console.log("ok")
        })

        // 如果要获取参数 则直接将result转换成字符串即可
        // console.log(result.toString()); // 得到查询字符串 key=value&key1=value1..

        // 最后使用querystring模块，将这个参数字符串转换成对象即可！

        // var params = querystring.parse(result.toString());
        // console.log(params);

    })

    res.end('ok');
})

server.listen(8888, function () {
    console.log('http://localhost:8888');
})
