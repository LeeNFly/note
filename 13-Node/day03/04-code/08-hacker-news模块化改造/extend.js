
var fs = require('fs');
var path = require('path');
var template = require('art-template');
var url = require('url');

module.exports = function (req, res) {

    // 1. 增强res 给其添加一个render方法
    res.render = function (filename, data) { 
        var that = this;
        fs.readFile(path.join(__dirname, 'views', filename + '.html'), 'utf8', function (err, tpl) {
            var result = tpl;
            if (data) {
                var tRender = template.compile(tpl);
                result = tRender(data);
            }
            that.end(result);
        })
    }

    // 2. 增强req 给req添加一个属性 urlObj
    req.urlObj = url.parse(req.url, true);

    // 3. 增强res 给res添加一个重定向的方法
    res.redirect = function (url) { 
        this.statusCode = 302;
        this.statusMessage = "Found";
        this.setHeader("location", url);
        this.end();
    }
}