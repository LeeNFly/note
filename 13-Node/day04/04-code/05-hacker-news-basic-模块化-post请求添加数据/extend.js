var fs = require('fs');
var path = require('path');
var template = require('art-template');
var url = require('url');

module.exports = function (req, res) {
    req.urlObj = url.parse(req.url, true);
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
}