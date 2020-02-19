var http = require('http')
var server = http.createServer();
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var url = require('url');
var template = require('art-template');

server.on('request', function (req, res) {
    var urlObj = url.parse(req.url, true);
    // 制定路由规则

    // 5条
    // 首页路由
    if (req.url == "/index" || req.url == "/") {
        // // 读取到index.html的文件，将文件内容直接返回给浏览器
        // fs.readFile(path.join(__dirname, 'views', 'index.html'), function (err, data) {
        //     res.end(data);
        // })

        // 因为我们要进行后端渲染，所以读到文件之后，不能直接将文件返回
        // 而是需要将数据渲染到页面中之后，将渲染结果返回给浏览器

        fs.readFile(path.join(__dirname, 'views', 'index.html'), function (err, tpl) {
            // tpl 就是从html文件中读到的内容

            // 读取数据
            fs.readFile(path.join(__dirname, 'data.json'), 'utf8', function (err, newsList) {
                newsList = JSON.parse(newsList || "[]");

                // tpl 是模板 (Buffer对象)
                // newsList 是数据
                // 将数据渲染到模板中

                var render = template.compile(tpl.toString());
                var result = render({
                    list: newsList
                })

                // 将渲染结果返回给浏览器
                res.end(result);
            })

        })

    } else if (urlObj.pathname == "/details") {
        // 1. 读取到了details.html模板文件中的内容
        fs.readFile(path.join(__dirname, 'views', 'details.html'), function (err, tpl) {
            //2. 获取id (获取get请求参数 urlObj.query)
            //3. 读取data.json中的数据，查找id对应的元素
            fs.readFile(path.join(__dirname, 'data.json'), 'utf8', function (err, newsList) {
                newsList = JSON.parse(newsList || "[]");
                // 查找id对应的元素
                var news = newsList.find(function (v, i) {
                    return v.id == urlObj.query.id;
                })

                // 将数据渲染到模板中
                var render = template.compile(tpl.toString());
                var result = render({
                    item: news
                });

                // 将渲染结果返回给浏览器
                res.end(result);
            })
        })
    } else if (req.url == "/submit") {
        fs.readFile(path.join(__dirname, 'views', 'submit.html'), function (err, data) {
            res.end(data);
        })
    } else if (req.url.indexOf('/resources') == 0) {
        res.setHeader("Content-Type", mime.getType(req.url));
        fs.readFile(path.join(__dirname, req.url), function (err, data) {
            res.end(data);
        })
    } else if (urlObj.pathname == "/add") {
        // 1. 获取用户提交的参数数据(urlObj.query)
        var news = urlObj.query;
        // 2. 将数据存储到data.json中
        // 2.1 先读取原有的数据
        fs.readFile(path.join(__dirname, 'data.json'), 'utf8', function (err, newsList) {
            newsList = JSON.parse(newsList || "[]");

            // 2.2 先给新数据加id
            news.id = newsList.length == 0 ? 1 : newsList[newsList.length - 1].id + 1;

            // 2.3 将新数据追加到newsList
            newsList.push(news);

            // 3. 将新的数组重新写入到data.json中
            fs.writeFile(path.join(__dirname, "data.json"), JSON.stringify(newsList), function (err) {
                
                // 在node.js中通知浏览器跳转到首页去！

                // 1. 设置状态码
                res.statusCode = 302;
                // 2. 设置状态信息
                res.statusMessage = "Found";
                // 3. 设置响应头中的location 告诉浏览器要跳转到哪里
                res.setHeader('location', '/');
                // 4. 结束响应
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