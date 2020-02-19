var express = require('express');
var app = express();

var router = require('./router');

// 配置模板引擎
app.engine('html', require('express-art-template'));
// 如果需要改变模板文件所在的目录路径
// app.set('views', path.join(__dirname, '要修改的文件夹的名字'))

// 如果想要省略掉使用模板的后缀名，则需要
app.set('view engine', 'html');

app.use(require('body-parser').urlencoded())
app.use(require('body-parser').json())

app.use(router);


app.listen(8888, function () { 
    console.log('http://localhost:8888')
})
