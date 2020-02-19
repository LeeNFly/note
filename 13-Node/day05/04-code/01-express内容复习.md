# express

## express是什么
是一个基于node.js的web开发框架

## 基本使用

```js
var express = require("express");
var app = express();

app.get(路由路径, function(req, res, next){
    res.send('ok')
})

app.get(路由路径, function(req, res, next){
    res.send('ok')
})

app.get(路由路径, function(req, res, next){
    res.send('ok')
})

app.all(路由路径, function(req, res, next){
    res.send('ok');
})

app.listen(8888, function(){
    console.log('http://localhost:8888');
})
```


### 路由注册的方式
1. app.METHOD  
    1. 请求方式必须和方法名一致
    2. 请求的路径必须和路由路径一致
2. app.all
    1. 请求方式不限
    2. 请求的路径必须和路由路径一致
3. app.use
    1. 请求方式不限
    2. 请求的路由只要是以路由路径开头即可
    3. 如果不传递路由路径，则默认为 /    


## req res
### req
1. req.query
2. req.body    body-parser中间件
3. req.originalUrl  
4. req.path
5. req.get  

### res
1. res.send
2. res.sendFile
3. res.render  需要配置模板引擎
4. res.download
5. res.status
6. res.jsonp
7. res.redirect


## req.body的获取
body-parser中间件
```js
app.use(require('body-parser').urlencoded())
app.use(require('body-parser').json())
```

## render方法的使用
配置模板引擎
```js
// 1. 设置模板引擎、
app.engine('html', require('express-art-template'));

// 2. 设置模板文件的文件夹路径
app.set('views', path.join(__dirname, '路径'))

// 3. 设置默认的后缀名
app.set('view engine', 'html');
```

## 中间件
中间件就是一个函数，这个函数有三个参数 req, res, next

app.get(路由路径, 中间件函数)
app.all
app.use

中间件必须
1. 结束响应
2. 调用下一个中间件