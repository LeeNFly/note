var storage = require('./storage');
var path = require('path');
module.exports = {
    indexHandler: function (req, res, next) {
        // 1. 先读取所有的数据
        storage.getAllNews(function (newsList) { 
            // 2. 使用模板引擎进行渲染返回结果
            res.render('index', { list: newsList });
        })
    },
    detailsHandler: function (req, res, next) {
        // 1. 先读取id对应的数据
        storage.getNewsById(req.query.id, function (news) { 
            // 2. 使用模板引擎进行渲染返回结果
            res.render('details', { item: news });
        })
    },
    submitHandler: function (req, res, next) { 
        res.sendFile(path.join(__dirname, "views", 'submit.html'))
    },
    postAddHandler: function (req, res, next) { 
        //1. 获取用户提交的数据
        var news = req.body;
        //2. 添加数据到data.json中
        storage.addNews(news, function () { 
            // 3. 跳转到首页
            res.redirect('/index');
        })
    },
    getAddHandler: function (req, res, next) {
        //1. 获取用户提交的数据
        var news = req.query;
        //2. 添加数据到data.json中
        storage.addNews(news, function () { 
            // 3. 跳转到首页
            res.redirect('/index');
        })
    }
}