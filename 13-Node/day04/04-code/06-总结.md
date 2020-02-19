# Node.js 第4天

## Node.js实现hacker-news
1. 基础班
2. 基础优化版
3. 基础优化-模块化版

## express

### 基本使用
```js
var express = require('express');
var app = express();

app.get('/index', function(req, res){
    res.send("ok")
})

app.listen(8888, function(){
    console.log('http://localhost:8888');
})
```

### 路由注册的方式
1. app.METHOD METHOD指的就是请求方式 get post delete ...
    1. 请求方式必须和注册路由的方法名一致
    2. 请求的路径必须和注册路由的路径完全一致
2. app.all
    1. 请求方式不限
    2. 请求的路径必须和注册路由的路径完全一致
3. app.use
    1. 请求方式不限
    2. 请求的路径只要是以注册路由的路径开头即可

```js
app.METHOD("路由路径", function(req, res){

})

app.all("路由路径", function(req, res){

})

app.use("路由路径", function(req, res){

})
```

### req和res新增的属性和方法
#### req
1. req.query  获取get请求参数
2. req.body   获取post请求参数 但是需要配合body-parser使用
3. req.orinalUrl 获取请求的url原始地址 
4. req.path   获取请求的路径  urlObj.pathname
5. req.get(key)  获取请求头中key对应的信息
6. req.params 获取路由参数   /index/:参数名     http://localhost/index/1

### res
1. res.send     给浏览器返回数据，自动调用end，只能调用一次： 能接受anything作为参数，如果是数字作为参数，则会被当做状态码！
2. res.sendFile 给浏览器返回文件
3. res.render   渲染模板返回结果给浏览器 必须进行配置才能使用
4. res.download 给浏览器进行文件下载
5. res.status   设置状态码，可以进行链式编程
6. res.redirect 跳转页面 重定向
7. res.jsonp    返回jsonp格式的数据，需要在请求的时候传递callback参数

### 中间件
#### 什么是中间件
中间件就是一个函数，这个函数有三个参数，req, res, next
req: 请求对象
res: 响应对象
next: 可以用来调用下一个中间件

中间件中必须做如下两件事儿中的一个：
1. 结束响应
2. 调用下一个中间件

#### 中间件可以对照自来水厂的处理流程进行理解，在整个中间件处理流程中，req, res对象是不会变。

### body-parser
1. 作用： 可以用来给req.body设置值，获取post请求参数
2. 使用：
```js
app.use(require('body-parser').urlencoded())
app.use(require('body-parser').json())
```

### 自己实现body-parser
```js
app.use(function(req, res, next){
    var bufferList = [];
    req.on('data', function(chunk){
        bufferList.push(chunk);
    })
    req.on('end', function(){
        var result = Buffer.concat(bufferList);
        result = result.toString();

        if(req.get('content-type').indexOf('json') != -1){
            req.body = JSON.parse(result)
        }else if(req.get('content-type').indexOf('urlencoded') != -1){
            req.body = querystring.parse(result);
        }else{
            req.body = {}
        }

        next();
    })
})
```

### 模板引擎的使用
```js
//1. 设置模板引擎
app.engine('html', require('express-art-template'));

//2. 设置模板文件存放的文件夹路径 （可选的，默认回去views文件夹中查找）
app.set('views', 文件夹路径)

//3. 设置默认的后缀名 (可选的)
app.set('view engine', '文件后缀名')
```

### 静态资源处理
```js
app.use(express.static('静态资源目录路径'))
```

### hacker-news