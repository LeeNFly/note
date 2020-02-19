# Node.js 第5天

## MongoDB

### 关系型数据库和费关系型数据库
1. 关系型数据库，表和表之间有关系（外键）
2. 非关系型数据，表盒表之间没关系

### 非关系型数据库和关系型数据库的区别
1. 非关系型数据库表和表之间没关联
2. 非关系型数据库，不需要提前创建数据库和表结构
3. 非关系型数据库非常灵活（没有任何限制，表内的数据可以随意存储，没有字段要求）
   
### 非关系型数据库优势
1. 灵活
2. 效率非常高

### mongodb的安装

#### mongod  数据库服务
负责存储数据的
启动：
1. 创建文件夹 data  data文件夹中要创建db文件夹
2. 使用mongod命令启动数据库 `mongod --dbpath ./data`

#### mongo  命令行操作数据库的工具
负责操作数据库的

启动：
`mongo`

#### 利用mongo进行数据库操作
数据库和集合不需要提前创建，直接使用即可，在存入第一条数据的时候，会自动创建！！！
```
1. 查看所有数据库
show databases;

2. 切换数据库
use 数据库名称;

3. 查看当前数据库中所有的集合
show collections;

db指的就是当前正在使用的数据库对象！

增
db.集合名称.insert(对象)
db.集合名称.insertOne(对象)
db.集合名称.insertMany(数组)

删
db.集合名称.deleteOne(条件对象)  如果条件能找到多个对象，则只删除第一个
db.集合名称.deleteMany(条件对象)

改
db.集合名称.updateOne(条件对象，操作对象)  操作对象： {$set: {属性名： 要改的值}}
db.集合名称.updateMany(条件对象，操作对象)

查
db.集合名称.find(条件对象)
```

#### 条件对象
* {属性名： 属性值}     查找指定的属性值为指定的值的内容
* {属性名: {$lt: 值}}  查找指定的属性值小于指定的值的内容
* $gt  大于
* $gte 大于等于
* $lte 小于等于 
* $eq  等于 
* $ne  不等于
* $in  在数组中
* $nin 不在数组中

#### 通过node.js操作数据库
下载mongodb驱动包
npm install mongodb
```js
var MongoClient = require('mongodb').MongoClient;
var connStr = 'mongodb://localhost:27017';

MongoClient.connect(connStr, function(err, client){
    //1. 通过client来获取数据库对象
    var db = client.db(数据库名称);
    //2. 通过数据库对象获取集合对象
    var 集合 = db.collection(集合名称);

    // 增
    集合.insert(要添加的对象, function(err, dbResult){
        // dbResult.result中有两个属性 n: 受影响的行数  ok： 是否成功
    })

    // 删
    集合.deleteOne(条件对象, function(err, dbResult){

    })
    集合.deleteMany(条件对象, function(err, dbResult){

    })

    //改
    集合.updateOne(条件对象, 操作对象, function(err, dbResult){

    })
    集合.updateMany(条件对象, 操作对象, function(err, dbResult){

    })

    // 查
    集合.find(条件对象).toArray(function(err, arr){
        // arr就是最终获取到的数据数组
    })

    //last: 关闭数据库连接
    client.close();
})
```

### 使用mongodb实现了storage模块

mongodb在存储数据的时候，会自动给数据添加一个`_id`属性
这个`_id`属性是`ObjectId`类型, 如果要将一个字符转换成`ObjectId`
```js
// 1. 引入ObjectId
var ObjectId = require('mongodb').ObjectId;
// 2. 通过调用ObjectId来进行转换
ObjectId(id字符串)   //通过id进行数据查询的时候，必须使用这个
```

## 前后端分离的Hacker-News

后端： 只负责提供数据，还要设置cors
前端： 负责静态页面，并且要通过ajax请求数据，并且在浏览器中通过模板引擎进行页面渲染