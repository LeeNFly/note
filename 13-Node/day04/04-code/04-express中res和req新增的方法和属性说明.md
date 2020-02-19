# 新增的功能、

## res的功能
1. res.send  向浏览器响应数据，这个方法可以接收的参数（字符串，对象，数组，数字（状态码），buffer对象）
    1. res.send方法中会自动调用end
    2. res.send方法只可以调用一次！
2. res.download 想浏览器响应文件，并且打开下载保存窗口！（下载文件的！！）
3. res.status 设置状态码，可以进行链式编程
4. res.jsonp 可以返回jsonp格式的数据 请求的时候需要传递callback参数！
5. res.redirect 重定向
6. res.sendFile 向浏览器响应文件！
7. res.render 

## req的功能
1. req.body 是用来获取post请求参数的！但是不能直接使用
2. req.query 是用来获取get请求参数的
3. req.originalUrl 是用来获取原始的url地址  类似于之前的req.url
4. req.params 是用来获取路由参数的
5. req.path 是用来获取请求的路径的  类似于 urlObj.pathname

## 路由参数
在注册路由规则的时候，可以指定路由路径中的某一部分为参数
```js
app.get("/details/:id", function(req, res){

})
```