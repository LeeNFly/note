var http = require('http');

var server = http.createServer();

server.listen(8888, function () { 
    console.log("http://localhost:8888")
})

server.on('request', function (request, response) {
    
    // response.end: 结束响应
    //      response.end方法可以接受参数：
                // 1. 字符串
                // 2. buffer对象
    
    // response.setHeader: 可以用来设置响应头 一次只能设置一个！
    response.setHeader("content-type", "text/html;charset=utf-8");
    // response.setHeader("name", "fangwei");
    // response.setHeader("age", "16");

    // response.writeHead: 这个方法也可以用来设置响应头，并且可以一次设置多条，还能设置状态码
    // response.writeHead(404, "OK", {
    //     "content-type": "text/html;charset=utf-8",
    //     "name": "fangwei",
    //     "age": 17
    // })

    
    // 注意事项： 设置响应头的方法一共有两种： setHeader writeHead
    // 设置响应头，一定要在write调用之前设置，否则会出错！！！


    // response.write： 用来给浏览器响应数据的 可以传两种参数： 字符串 或者 buffer对象
    // response.write可以调用多次的！！
    response.write("write方法返回的数据");
    response.write("write方法返回的数据");
    response.write("write方法返回的数据");
    response.write("write方法返回的数据");
    response.write("write方法返回的数据");
    response.write("write方法返回的数据");

    response.end("响应结束了！");
})