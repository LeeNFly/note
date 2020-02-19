var http = require('http');
var server = http.createServer();

server.on("request", function (request, response) {
    // 根据不同的url地址返回不同的内容
    // 当用户访问 /index  返回  首页
    // 当用户访问 /login  返回  登录页
    // 当用户访问 /list   返回  列表页

    // request.url : 这个属性可以用来获取浏览器端请求的地址的详细信息！
    // 包含两部分内容  路径+参数

    response.setHeader("Content-Type", "text/html;charset=utf-8");

    // console.log(request.url);

    // 路由（Route）
    // 根据不同的url地址返回不同的内容！

    // 路由规则！
    switch (request.url) {
        case "/index":
            response.end("首页")
            break;
        case "/login":
            response.end("登录页")
            break;
        case "/list":
            response.end("列表页")
            break;
        default:
            response.statusCode = 404;
            response.statusMessage = "Not Found";
            response.end("你访问的页面不存在");
    }

})

server.listen(8888, function () {
    console.log('http://localhost:8888')
})