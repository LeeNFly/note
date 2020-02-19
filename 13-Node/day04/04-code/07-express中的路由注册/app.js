var express = require('express');
var app = express();

// app.get("/", function (req, res) {
//     res.send("ok");
// })

// app.all("/index", function (req, res) {
//     res.send('ok');
// })

// app.use('/index', function (req, res) {
//     res.send("ok");
// })



app.get("/index", function (req, res) { 
    res.send("首页")
})

// app.get("/index", function (req, res) { 
//     res.send("首页1")
// })

app.get("/login", function (req, res) { 
    res.send("登录页")
})

app.get("/list", function (req, res) { 
    res.send("列表页")
})

app.listen(8888, function () {
    console.log("http://localhost:8888")
})