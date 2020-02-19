# Node.js 第二天

## 使用Node.js模拟PHPStudy
phpstudy的作用： 可以将浏览器请求的文件从根目录中找到进行返回

```js
var http = require('http')
var server = http.createServer();
var fs = require('fs');
var path = require('path');
var mime = require('mime');
server.on('request', function(req, res){
    // 1. 制定路由规则，对每个文件进行挨个处理 （先做了首页）
    // 2. 将req.url用作读取文件的路径
    // 3. 为每个类型的文件设置不同的Content-Type 用到mime
    // 4. 设置在访问/的时候也能够访问到首页
    if(req.url == "/"){
        req.url = "/index.html"
    }
    res.setHeader("Content-Type", mime.getType(req.url));
    fs.readFile(path.join(__dirname, 'public', req.url), function(err, data){
        res.end(data);
    })

})

server.listen(8888, function(){
    console.log('http://localhost:8888')
})
```

## request对象的常用属性
* url: 请求地址中的路径+参数
* headers： 请求头中的内容，是一个对象
* rawHeaders: 请求头中的内容，是一个数组
* method: 请求方式 是大写的GET POST
* httpVersion: http协议的版本号

## 使用node.js获取请求参数

### get请求参数
1. querystring
```js
var querystring = require('querystring');
var params = querystring.parse("key=value&key=value")
```
2. url(推荐使用)
```js
var url = require('url')
var urlObj = url.parse(req.url, true);
// urlObj.pathname 就是路径部分
// urlObj.query 就是参数对象
```

### post请求参数
```js
var querystring = require('querystring')
//1. 定义一个数组用来存储每次提交上来的数据
var bufferList = [];

//2. 为req对象注册data事件 该事件会在每次有数据提交到服务器的时候被触发
req.on('data', function(chunk){
    //chunk就是每次提交上来的数据 buffer对象
    //将每次提交的数据存储到数组中
    bufferList.push(chunk);
})

//3. 为req对象注册end事件 该事件会在数据提交完毕之后触发
req.on('end', function(){
    // 将bufferList中所有的buffer对象合并成一个
    var result = Buffer.concat(bufferList);

    // 如果要获取post请求参数 则需要将这个对象转成字符串
    var qs = result.toString();

    // 使用querystring模块将获取到的post参数字符串转成对象
    var params = querystring.parse(qs);
})
```

## npm
npm是node包管理工具

### 什么是包？
一组被pacakge.json描述的文件！ （如果一个文件夹中有一个合法的package.json文件，那么这个文件夹就是一个包）

### npm三个内容
1. npm服务器   存储包
2. npm网站     浏览包
3. npm命令行工具  操作包（上传、下载）

### npm的基本使用
1. 创建一个package.json文件 一个项目只需要执行一次
`npm init`
`npm init -y`
如果文件夹名称中包含中文或者特殊字符，则创建会报错，但是文件会正常创建出来，需要手动的添加name和version的值

2. 下载包（本地安装）
`npm install 包名`
`npm install 包名@版本号`
`npm i 包名`
`npm i 包名@版本号`
`npm install 包名 包名 包名`

`npm install`  下载依赖项中所有的包
`npm install --production` 下载所有运行时依赖项

3. 卸载包
`npm uninstall 包名`

### 全局安装
当需要安装的包要提供一个全局命令的时候，这个包就需要进行去全局安装
`npm install 包名 -g`
`npm install 包名 --global`

live-server
less
nrm

### package.json
必须包含的两项： name 和 version

scripts:  给shell命令起别名，可以通过别名进行执行 `npm run 别名`
可以省略run的别名： start restart stop test config

dependencies: 运行时依赖项
`npm i 包名`
`npm i 包名 --save`
`npm i 包名 -S`

devDependencies: 开发时依赖项
`npm i 包名 --save-dev`
`npm i 包名 -D`

## nrm
为npm提速（可以切换下载服务器）

```
查看所有的可用服务器列表
nrm ls  

切换到指定的服务器
nrm use 服务器名称

查看当前正在使用的服务器
nrm current

测试所有服务器的速度
nrm test

测试指定服务器的速度
nrm test 服务器名称
```

## hacker-news
1. 创建了项目文件夹
2. 将views文件夹和resources文件移动到项目文件夹
3. 创建了app.js
4. 书写了基本的http服务器代码
5. 制定基本的路由规则（3 ==> 4 ==> 5）
6. 在路由规则中返回简单的字符串 进行测试
7. 加一条路由规则 404
8. 实现首页的功能（读取首页的html文件返回）
9. css和图片无法处理（又要新增一条路由规则， 判断req.url是否以/resources开头）
10. 在静态资源的路由规则中，使用phpStudy的类似逻辑实现静态资源的返回
11. 详情页和添加页实现
12. 优化了详情页的路由规则 （url模块）