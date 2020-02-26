var express = require('express');
var app = express();



app.use(function (req, res, next) {
    req.fangwei = {
        name: "方玮",
        age: 21
    }
    next();
})

// 路由的处理函数就是一个中间件
app.get("/index", function (req, res, next) {
    req.pm = "潘明"
    console.log(req.fangwei)
    // 中间件函数中必须做出一个选择
    // 1. 要么结束整个响应过程
    // 2. 要么调起下一个中间件
    // 否则, 浏览器就会处于挂起状态, 一直等待响应结束

    next(); // 调起下一个中间件 (调用下一个url匹配的路由的处理函数, 进入下一个路由处理函数)

    // 调用下一个中间件, 顺序是按照满足条件的所有路由的注册顺序
})


app.get("/index", function (req, res, next) {
    console.log(req.pm);
    console.log(req.fangwei)

    res.send("第二个index中间件")
})

app.get("/login", function (req, res, next) {
    console.log(req.fangwei)

    res.send("ok");
})



// express中默认有一个中间件，这个中间件是用来 兜底儿 的

app.listen(8888, function () {
    console.log("http://localhost:8888")
})
