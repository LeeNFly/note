var http = require('http')
var server = http.createServer();
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var url = require('url');
var template = require('art-template');

server.on('request', function (req, res) {

    // 封装一个进行模板渲染的函数
    res.render = function (filename, data) {
        fs.readFile(path.join(__dirname, 'views', filename + '.html'), function (err, tpl) {
            var result = tpl;
            if (data) {
                var xuanran = template.compile(tpl.toString());
                result = xuanran(data)
            }
            this.end(result);
        })
    }

    // 封装一个进行重定向的函数
    res.redirect = function (url) {
        // 在node.js中通知浏览器跳转到首页去！
        // 1. 设置状态码
        this.statusCode = 302;
        // 2. 设置状态信息
        this.statusMessage = "Found";
        // 3. 设置响应头中的location 告诉浏览器要跳转到哪里
        this.setHeader('location', url);
        // 4. 结束响应
        this.end();
    }

    var urlObj = url.parse(req.url, true);
    if (req.url == "/index" || req.url == "/") {
        // 1. 读取数据
        readNews(function (newsList) {
            // 2. 进行模板渲染
            res.render("index", {
                list: newsList
            });
        })
    } else if (urlObj.pathname == "/details") {

        // 1. 读取id对应的数据
        getNewsById(urlObj.query.id, function (news) {
            res.render("details", {
                item: news
            });
        })

    } else if (req.url == "/submit") {
        res.render("submit");
    } else if (req.url.indexOf('/resources') == 0) {
        res.setHeader("Content-Type", mime.getType(req.url));
        fs.readFile(path.join(__dirname, req.url), function (err, data) {
            res.end(data);
        })
    } else if (urlObj.pathname == "/add") {
        // 1. 获取用户提交的参数数据(urlObj.query)
        var news = urlObj.query;
        // 2. 调用writeNews方法将数据添加到文件中
        addNews(news, function () {
            res.redirect("/");
        })
    } else {
        res.statusCode = 404;
        res.statusMessage = "Not Found";
        res.end("Not Found");
    }
})

server.listen(8888, function () {
    console.log('http://localhost:8888')
})


var NEWSPATH = path.join(__dirname, 'data.json');

// 对读写数据的方法进行封装
// 1. 读取新闻数据
function readNews(callback) {
    fs.readFile(NEWSPATH, 'utf8', function (err, data) {
        data = JSON.parse(data || "[]");
        // fs模块读取的回调函数是异步执行的, 所以我们在调用readNews时, 需要传递一个函数
        // 等到读取文件结束时, 在读取文件回调函数中, 在执行我们传递来的函数, 把文件内容作为形参传入
        callback(data);
    })
}

// readNews(function (newsList) { 
//     console.log(newsList);
// })

// 2. 写入新闻数据
function addNews(news, callback) {
    // 1. 调用写好的读数据的方法 读取原有数据
    readNews(function (newsList) {
        // 2. 将新数据添加到原有数据中
        //  设置新数据的id
        news.id = newsList.length == 0 ? 1 : newsList[newsList.length - 1].id + 1;
        newsList.push(news);

        // 3. 将新数组重新写入文件中
        fs.writeFile(NEWSPATH, JSON.stringify(newsList), function (err) {
            callback();
        })
    })
}

// addNews({ title: "" }, function(){
//     console.log("ok")
// })


// 3. 读取id对应的新闻数据
function getNewsById(id, callback) {
    readNews(function (newsList) {
        var news = newsList.find(function (v, i) {
            return v.id == id;
        })
        callback(news);
    })
}