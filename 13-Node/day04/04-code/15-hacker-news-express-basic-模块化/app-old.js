var express = require('express');
var path = require('path');

var storage = require('./storage');

var app = express();

// 配置模板引擎
app.engine('html', require('express-art-template'));
// 如果需要改变模板文件所在的目录路径
// app.set('views', path.join(__dirname, '要修改的文件夹的名字'))

// 如果想要省略掉使用模板的后缀名，则需要
app.set('view engine', 'html');

// 使用bodyparser中间件
app.use(require('body-parser').urlencoded());
app.use(require('body-parser').json());


// 首页路由
function index(req, res, next) {
    // 1. 先读取所有的数据
    storage.getAllNews(function (newsList) { 
        // 2. 使用模板引擎进行渲染返回结果
        res.render('index', { list: newsList });
    })
}
app.get('/', index)
app.get('/index', index)

// 详情页
app.get('/details', function (req, res, next) {
    // 1. 先读取id对应的数据
    storage.getNewsById(req.query.id, function (news) { 
        // 2. 使用模板引擎进行渲染返回结果
        res.render('details', { item: news });
    })
})

app.get('/submit', function (req, res, next) { 
    res.sendFile(path.join(__dirname, "views", 'submit.html'))
})

app.get('/add', function (req, res, next) { 
    //1. 获取用户提交的数据
    var news = req.query;
    //2. 添加数据到data.json中
    storage.addNews(news, function () { 
        // 3. 跳转到首页
        res.redirect('/index');
    })
})

app.post('/add', function (req, res, next) { 
    //1. 获取用户提交的数据
    var news = req.body;
    //2. 添加数据到data.json中
    storage.addNews(news, function () { 
        // 3. 跳转到首页
        res.redirect('/index');
    })
})

// 静态资源处理
app.use("/resources", express.static('resources'));

app.listen(8888, function () { 
    console.log('http://localhost:8888')
})