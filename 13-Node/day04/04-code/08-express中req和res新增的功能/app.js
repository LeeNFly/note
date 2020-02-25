var express = require('express');
var app = express();
var path = require('path');

app.get("/index", function (req, res) {
    // res.send({name: "方玮", age: 18})
    // res.send([1, 2, 3, 4])
    // 如果send发送的是一个数字，则这个数字会被作为状态码使用
    // // res.send(404);
    // res.send("1")
    // res.send("2")
    // res.download(path.join(__dirname, '1.jpg'), "fangwei.jpg")
    // res.status(404).end();

    // res.json({ name: "fangwei", age: 20 });

    // res.jsonp({ name: "方玮", age: 21 });
    // res.redirect("http://www.baidu.com")
    // res.sendFile(path.join(__dirname, 'package.json'))


    // res.send(req.baseUrl);
    // res.send(req.body);
    // res.send(req.query);
    res.send(req.originalUrl);
})


// 定义的路由规则为 /details/:id
// 那用户访问的时候  /detials/具体的id值
// params拿到的对象就是  {id: 具体的id值}


// 练习：
// 假设定义的路由规则为：  /list/:name
// 用户访问的时候：       /list/fangwei
// pramas:            {name: "fangwei"}

app.get('/details/:id?', function (req, res) {
    console.log(req.params);
    res.send(req.params);
})

app.get('/list/:categorie/:id', function (req, res) {
    res.send(req.params);
})

app.listen(8888, function () {
    console.log('http://localhost:8888')
})
