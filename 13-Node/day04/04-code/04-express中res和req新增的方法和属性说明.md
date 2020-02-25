# 新增的功能、
express对res和req进行了增强
## res的功能
1. ★ res.send  向浏览器响应数据，这个方法可以接收的参数类型有（字符串，对象，数组，数字（状态码），buffer对象）
    res.send是对res.end的封装, 将接收的参数作为响应体数据, 响应给浏览器, 并且结束这次请求, 结束浏览器挂起状态
    1. res.send方法中会自动调用end, 结束浏览器挂起状态
    2. res.send方法只可以调用一次！ (res.send包含res.end, 相当于给浏览器响应, 告诉浏览器这次请求结束了, res.send代表这次请求结束, 之后的代码不会再执行了)
2. res.download 向浏览器响应文件，并且打开下载保存窗口！（下载文件的！！）
    要下载的文件必须在服务器所在的计算机中
    参数1: 要给用户下载的文件, 其所在路径
    参数2: 可有可无, 下载时默认的文件名
    res.download作用, 将服务器中的文件下载到用户本地
3. res.status 设置状态码，可以进行链式编程
4. res.jsonp 可以返回jsonp格式的数据 请求的时候需要传递callback参数 (将来要调用的函数的函数名)！
5. ★ res.redirect 做重定向跳转的
6. ★ res.sendFile 向浏览器响应文件！ (相当于我们之前封装的读文件, 然后将文件响应给浏览器) 自带响应头Content-type
7. res.render 

## req的功能
1. req.body 是用来获取post请求参数的！但是不能直接使用
2. req.query 是用来获取get请求参数的, 直接就是一个对象了
3. req.originalUrl 是用来获取原始的url地址  类似于之前的req.url
4. req.params 是用来获取路由参数的
5. req.path 是用来获取请求的路径的  类似于 urlObj.pathname 
   req.path 就是url 协议://主机名(域名)(ip地址):端口号/路径...?查询字符串#锚点 中 /路径部分

## 路由参数
在注册路由规则的时候，可以指定路由路径中的某一部分为参数
```js
app.get("/details/:id", function(req, res){

})
```

路由参数说明:
路由规则中也可以是路由参数的形式的, 可以用于获取路径中的值
```js
app.get('/details/:id', function (req, res) {
    console.log(req.params);
    res.send(req.params);
})
```
一个完整的url路径: 协议://主机名(域名)(ip地址):端口号/路径...?查询字符串#锚点
/路径...部分的格式必须是 /details/xxx 或/details/xxx/, 如果是/details/xxx/yyy 或 /details 则不满足路由规则
则可以请求到对应的路由, 执行对应的处理函数
req.params 得到一个对象, 格式为 { id: xxx }, 是一个对象
拓展: 
/details/:id? 若加上?, 则允许不传对应的参数值, 即/details 或 /details/ 也可以请求到该路由, 只不过没有参数


路由参数支持多层多个
```js
app.get('/list/:categorie/:id', function (req, res) {
    res.send(req.params);
})
```
一个完整的url路径: 协议://主机名(域名)(ip地址):端口号/路径...?查询字符串#锚点
/路径...部分的格式必须是 /details/xxx/yyy 或/details/xxx/yyy, 如果是/details/xxx/yyy/zzz 或 /details/xxx 则不满足路由规则
则可以请求到对应的路由, 执行对应的处理函数
req.params 得到一个对象, 格式为 { categorie: xxx, id: yyy }, 是一个对象
