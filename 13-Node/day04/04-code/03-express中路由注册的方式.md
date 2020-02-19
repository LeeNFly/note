# express中路由注册的方式

## 路由
根据不同的url地址返回不同的内容

## express中提供的注册路由的方式
### app.METHOD
1. 请求方式必须和方法名一致
2. 请求的路径页必须和注册路由的路径一致

```js
app.get(路由路径, function(req, res){
    //
})
app.post(路由路径, function(req, res){
    //
})
app.delete(路由路径, function(req, res){
    //
})
```

### app.all
1. 任意请求方式都可以
2. 请求的路径必须和注册路由的路径一致
```js
app.all(路由路径, function(req, res){

})
```

### app.use
1. 任意请求方式都可以
2. 请求的路径只要以注册的路由路径开头即可！
3. 如果省略了路由路径，则默认为 "/"
```js
app.use(路由路径，function(req, res){

})
```