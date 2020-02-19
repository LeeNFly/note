# 复习

## MongoDB

### mongod
是用来启动数据库的
`mongod --dbpath ./data`

### mongo
用来连接数据库，并进行数据库操作（命令行）
`mongo`


### 使用mongo来操作数据库
1. 查看所有的数据库
   show databases;

2. 切换数据库
    use 数据库名称;

3. 查看所有的集合
   show collections


查：
db.集合名称.find()
db.集合名称.find({})
db.集合名称.find(条件对象)

条件对象： {属性名: 属性值}   {属性名: 对象（条件）}
$eq
$ne
$lt
$lte
$gt
$gte
$in
$nin

增：
db.集合名称.insert()
db.集合名称.insertOne()
db.集合名称.insertMany()

删
db.集合名称.deleteOne(条件对象)
db.集合名称.deleteMany(条件对象)

改：
db.集合名称.updateOne(条件对象, 操作对象)
db.集合名称.updateMany(条件对象, 操作对象)


## 通过node.js实现mongodb操作
下载mongodb包
```js
var MongoClient = require('mongodb').MongoClient;
var connStr = 'mongodb://localhost:27017';

MongoClient.connect(connStr, function(err, client){
    //1. 通过client获取数据库对象
    var db = client.db(数据库名称);
    //2. 通过db对象获取集合对象
    var 集合 = db.collection(集合名称);

    集合.find(条件对象).toArray(function(err, arr){

    })

    集合.insert(对象， function(err, dbResult){
        //dbResult.result  ok  n
    })

    集合.deleteOne(条件对象, function(err, dbResult){

    })

    集合.updateOne(条件对象, 操作对象, function(err, dbResult){

    })

    client.close();
})

```