# 新增的功能、
express对原生的res和req进行了增强
## res的功能
1. ★ res.send  向浏览器响应数据，这个方法可以接收的参数类型有（字符串，对象，数组，数字（状态码），buffer对象）
    res.send是对res.end的封装, 将接收的参数作为响应体数据, 响应给浏览器, 并且结束这次请求, 结束浏览器挂起状态
    res.send里面封装了解决参数乱码的解决, 即res设置了Content-Type为text/html;charset=utf-8来解决了
    1. res.send方法中会自动调用end, 结束浏览器挂起状态
    2. res.send方法只可以调用一次！ (res.send包含res.end, 相当于给浏览器响应, 告诉浏览器这次请求结束了, res.send代表这次请求结束, 之后的代码不会再执行了)
2. res.download 向浏览器响应文件，并且打开下载保存窗口！（下载文件的！！）
    要下载的文件必须在服务器所在的计算机中
    参数1: 要给用户下载的文件, 其所在路径
    参数2: 可有可无, 下载时默认的文件名
    res.download作用, 将服务器中的文件下载到用户本地
3. res.status(状态码) 设置状态码，可以进行链式编程
4. res.jsonp 可以返回jsonp格式的数据 请求的时候需要传递callback参数 (将来要调用的函数的函数名)！
5. ★ res.redirect('路径') 做页面url重定向跳转的 并且结束响应(自带res.end()功能) 可以是相对路径, 也可以是绝对路径
6. ★ res.sendFile('路径') 路径必须是全路径, 用path.join(__dirname, ..) 进行拼接, 要精确到文件名及后缀
      向浏览器响应文件, 并且结束请求, 响应完毕, 浏览器结束挂起状态！(自带res.end()功能)  
      (相当于我们之前封装的读文件得到buffer对象, 然后将读到的buffer对象响应给浏览器, 且自带★ 响应头Content-type 和 res.end() 结束挂起状态) 
7. res.render 结合后面模板引擎使用, 结束响应, 自带响应头

## req的功能
1. req.body 是用来获取post请求参数的！但是不能直接使用
2. req.query 是用来获取get请求参数的, 直接就是一个对象了 (默认是一个空对象)
3. req.originalUrl 是用来获取原始的url地址  类似于之前的req.url
4. req.params 是用来获取路由参数的 (默认是一个空对象)
5. req.path 是用来获取请求的路径的  类似于 urlObj.pathname 
   req.path 就是url 协议://主机名(域名)(ip地址):端口号/路径...?查询字符串#锚点 中 /路径部分 (以/开头)
6. req.get('key') 获取请求头中的信息

注意, 特殊: 如果路由通过app.use注册, 则对应路由函数里的req.path (req.url) 不会带有前面匹配的路径了
## 路由参数
在注册路由规则的时候，可以指定路由路径中的某一部分为参数
```js
app.get("/details/:id", function(req, res){
 
})
```

路由参数说明:
路由规则中也可以是路由参数的形式的, 可以用于获取路径中的值
ps: 冒号只需要在定义路由参数的时候写, 在访问路径中不需要写冒号

路由参数, 也是路由, 请求时先要满足路由的规则请求到该路由, 然后 触发和调用对应路由路径的事件处理函数, 在处理函数中才可以获取路由参数

```js
app.get('/details/:id', function (req, res) {
    console.log(req.params);
    res.send(req.params);
})
```
一个完整的url路径: 协议://主机名(域名)(ip地址):端口号/路径...?查询字符串#锚点
/路径...部分的格式必须是 /details/xxx 或/details/xxx/, 才能满足路由规则, 访问到对应路由, 调用路由函数, 如果是/details/xxx/yyy 或 /details 则不满足路由规则, 即不能多, 也不能少
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
/路径...部分的格式必须是 /list/xxx/yyy 或/list/xxx/yyy, 才能满足路由规则, 访问到对应路由, 调用路由函数, 如果是/list/xxx/yyy/zzz 或 /list/xxx 则不满足路由规则, 即不能多, 也不能少
则可以请求到对应的路由, 执行对应的处理函数
req.params 得到一个对象, 格式为 { categorie: xxx, id: yyy }, 是一个对象

路由参数, 也是路由, 请求时先要满足路由的规则请求到该路由, 然后 触发和调用对应路由路径的事件处理函数, 在处理函数中才可以获取路由参数
路由参数是在匹配路由规则的基础上, 然后在 ★ /路径部分, 一一对应获取路由参数的值
