// 1. 创建一个http服务器
// 2. 制定路由规则
// 3. 实现首页的功能
//      3.1 返回views中的index.html
// 4. 实现了静态资源的请求处理
// 5. 优化详情页的路由规则
// 6. 实现详情页的功能
//      6.1 返回views中的details.html
// 7. 实现添加页的工鞥呢
//      7.1 返回views中的submit.html

var http = require('http');
var server = http.createServer();
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var url = require('url');
var template = require('art-template');

server.on('request', function (req, res) {

    var urlObj = url.parse(req.url, true);

    if (req.url == "/" || req.url == "/index") {
        fs.readFile(path.join(__dirname, 'data.json'), 'utf8', function (err, newsList) { 
            newsList = JSON.parse(newsList || "[]");

            fs.readFile(path.join(__dirname, 'views', 'index.html'), function (err, tpl) {
                var render = template.compile(tpl.toString());
                var result = render({ list: newsList });
                res.end(result);
            })
        })

        
    } else if (urlObj.pathname == "/details") {

        fs.readFile(path.join(__dirname, 'data.json'), 'utf8', function (err, newsList) { 
            newsList = JSON.parse(newsList || "[]");
            var news = newsList.find(function (v, i) {
                return v.id == urlObj.query.id;
            })

            fs.readFile(path.join(__dirname, 'views', 'details.html'), function (err, tpl) {
                var render = template.compile(tpl.toString());
                var result = render({ item: news });
                res.end(result);
            })
        })
    } else if (req.url == "/submit") {
        fs.readFile(path.join(__dirname, 'views', 'submit.html'), function (err, data) {
            res.end(data);
        })
    } else if (req.url.indexOf("/resources") == 0) {
        res.setHeader("Content-Type", mime.getType(req.url));
        fs.readFile(path.join(__dirname, req.url), function (err, data) { 
            res.end(data);
        })
    } else if (urlObj.pathname == "/add") { 
        var news = urlObj.query;

        fs.readFile(path.join(__dirname, 'data.json'), 'utf8', function (err, newsList) {
            newsList = JSON.parse(newsList || "[]");
            news.id = newsList.length == 0 ? 1 : newsList[newsList.length - 1].id + 1;
            newsList.push(news);

            fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(newsList), function (err) {
                res.statusCode = 302;
                res.statusMessage = "Found"
                res.setHeader("location", "/");
                res.end();
            })
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