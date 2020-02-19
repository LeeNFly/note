# 复习

## Node.js模拟phpStudy

```js
var http = require('http');
var server = http.createServer();
var fs = require('fs')
var path = require('path')
var mime = require('mime')

server.on('request', function(req, res){

    res.setHeader('Content-Type', mime.getType(req.url));
    fs.readFile(path.join(__dirname, "public", req.url), function(err, data){
        res.end(data);
    })
})

server.listen(8888, function(){
    console.log('http://localhost:8888')
})
```

## Request对象的属性
req.url
req.headers
req.rawHeaders
req.method
req.httpVersion

## 请求参数获取
### get请求参数获取
```js
var url = require('url')
var urlObj = url.parse(req.url, true);

// urlObj.pathname
// urlObj.query
```

### post请求参数的获取
```js
var querystring = require('querystring')

var bufferList = [];

req.on("data", function(chunk){
    bufferList.push(chunk);
})

req.on("end", function(){
    var result = Buffer.concat(bufferList);

    //获取post参数
    result = result.toString();

    var params = querystring.parse(result);
})
```

## NPM
1. 初始化一个package.json文件
`npm init`
`npm init -y`

2. 下载包
`npm install 包`
`npm install 包@版本号`
`npm install 包@版本号 包@版本号 包`

`npm i 包`

`npm install`
`npm install --production`

3. 卸载包
`npm uninstall 包名`

4. 保存依赖信息
dependencies
`npm i 包名`
`npm i 包名 --save`
`npm i 包名 -S`

devDependencies
`npm i 包名 --save-dev`
`npm i 包名 -D`

### package.json
name
version 1.1.1

scripts: shell命令  npm run 别名


## NRM
nrm ls
nrm use 服务器名称
nrm current 
nrm test 
nrm test 服务器名称

nrm add 别名 地址


## Hacker-News