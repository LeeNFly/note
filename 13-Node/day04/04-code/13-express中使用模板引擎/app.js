var express = require('express');
var path = require('path');
var app = express();
// 准备工作
// npm install art-template express-art-template

// app.engine方法可以用来为指定的后缀的模板指定对应的模板引擎
// app.engine(模板文件的后缀名, 对应的模板引擎提供的内容)

// 1. 利用app.engine方法指定html文件对应的模板引擎
app.engine('html', require('express-art-template')); //  在使用express模板引擎方法res.render时, 所有html文件 统一使用 express_art_template模板引擎来渲染

// 2. 设置模板文件所在的目录 可选的 如果不设置，则默认回去views文件夹中找
// app.set('views', 要指定的模板文件所在的目录路径)
app.set('views', path.join(__dirname, 'viewsssss')) // res.render时候会去对应的目录下找模板文件

// 3. 设置模板文件的默认后缀 可选的（目的就是为了省略在调用render方法的时候文件的后缀名, 如果不设置, 则在调用render方法时文件名需要加上后缀名）
app.set('view engine', 'html');

app.get('/', function (req, res) {
    var obj = {
        msg: "Hello World"
    }

    //4. res.render(模板文件的名称, 要渲染的数据对象)
    // 将模板与数据相结合, 得到一个html字符串, 并且响应给浏览器 (结束请求, 即包含res.end) , 自带响应头
    res.render('index', obj); // 是通过模板文件的方式使用模板引擎, 而非字符串方式
})

app.listen(8888, function () {
    console.log('http://localhost:8888');
})
