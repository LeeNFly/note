//web开发的本质：
// 1. 请求  前端
// 2. 处理  后端
// 3. 响应  后端

// node.js做后端开发  处理和响应

// 第一步： 引入http模块
var http = require('http');

// 第二步： 创建一个http服务器实例
var server = http.createServer();

// 第三步： 使用server实例来监听指定的端口
server.listen(8888, function () { 
    console.log("监听端口成功，你可以通过 http://localhost:8888 来访问")
})

// 第四步: 给server对象注册一个事件 request
// request事件的触发时机： 当服务器接收到浏览器的请求后，就会触发这个事件
server.on('request', function (request, response) { 
    // 这个函数就是request事件的处理函数
    // request就是请求相关的所有的信息都在request对象中
    // response 响应相关的所有内容都在该对象中

    // console.log("有请求来了！！");

    // 在接收到浏览器的请求之后，必须对浏览器做出响应，否则浏览器就会一直处于挂起状态

    // 通过response对象，提供的方法，就可以给浏览器响应数据了
    response.write('hello node.js');
    // 在响应数据完毕之后，得通知浏览器，响应结束了！
    response.end();
})