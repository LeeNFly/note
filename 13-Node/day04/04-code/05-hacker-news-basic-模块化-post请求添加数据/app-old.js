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

    // 读取模板 渲染数据 返回结果
    res.render = function (filename, data) {
        var that = this;
        fs.readFile(path.join(__dirname, 'views', filename + '.html'), function (err, tpl) {
            var result = tpl;
            if (data) { 
                var render = template.compile(tpl.toString());
                result = render(data);
            }
            that.end(result);
        })
    }

    // 重定向
    res.redirect = function (url) {
        this.statusCode = 302;
        this.statusMessage = "Found"
        this.setHeader("location", url);
        this.end();
    }

    var urlObj = url.parse(req.url, true);

    if (req.url == "/" || req.url == "/index") {
        getAllNews(function (newsList) { 
            res.render("index", {list: newsList});
        })
    } else if (urlObj.pathname == "/details") {
        getNewsById(urlObj.query.id, function (news) {
            res.render("details", {item: news})
        })  
    } else if (req.url == "/submit") {
        res.render('submit')
    } else if (req.url.indexOf("/resources") == 0) {
        res.setHeader("Content-Type", mime.getType(req.url));
        fs.readFile(path.join(__dirname, req.url), function (err, data) {
            res.end(data);
        })
    } else if (urlObj.pathname == "/add") {
        var news = urlObj.query;
        addNews(news, function () { 
            res.redirect('/')
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

// 获取所有的新闻数据
function getAllNews(callback) {
    fs.readFile(path.join(__dirname, 'data.json'), 'utf8', function (err, data) {
        data = JSON.parse(data || "[]");
        callback(data);
    })
}

// 根据id获取对应的新闻数据
function getNewsById(id, callback) {
    getAllNews(function (newsList) {
        var news = newsList.find(function (v, i) {
            return v.id == id;
        })
        callback(news);
    })
}

// 添加新闻
function addNews(news, callback) {
    getAllNews(function (newsList) {
        news.id = newsList.length == 0 ? 1 : newsList[newsList.length - 1].id + 1;

        newsList.push(news);

        fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(newsList), function (err) {
            callback();
        })
    })
}

