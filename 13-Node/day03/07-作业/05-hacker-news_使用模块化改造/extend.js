var template = require('art-template')
var path = require('path')
var url = require('url')
var mime = require('mime')
var fs = require('fs')

module.exports = function (req, res) {
    // 对res增强, 添加模板渲染功能
    res.render = function (filename, data) {
        fs.readFile(path.join(__dirname, 'views', filename), 'utf-8', function (err, dataStr) {
            if (data) {
                var render = template.compile(dataStr)
                var htmlStr = render(data)
                res.end(htmlStr)
            }
            else {
                res.end(dataStr)
            }
        })
    }

    // 对res增强, 增加重定向功能
    res.sendRedirect = function (url) {
        // 1. 设置状态码
        res.statusCode = 302;
        // 2. 设置状态信息
        res.statusMessage = "Found";
        res.setHeader('location', url)
        res.end()
    }

    req.urlObj = url.parse(req.url, true)

    res.setHeader('Content-Type', mime.getType(req.url))


}
