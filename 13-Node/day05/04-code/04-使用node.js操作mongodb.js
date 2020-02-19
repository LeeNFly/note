// 1. 引入mongoClient
var MongoClient = require('mongodb').MongoClient;

// 2. 创建一个数据库连接字符串
var connStr = "mongodb://localhost:27017"

// 3. 调用mongoClient提供的方法connect进行数据库连接
MongoClient.connect(connStr, function (err, client) {
    // console.log("ok")
    // err 错误对象
    // client 数据库客户端对象


    // 增删改查
    // 1. 获取db对象
    var db = client.db("test");
    // 2. 通过db来操作数据库中的集合
    var users = db.collection("users");


    // db.collection("users").insert();
    // db.collection("users").insertMany();
    // db.collection("users").find();


    // 增

    // users.insert({ name: "方玮", age: 24 }, function (err, dbResult) { 
    //     console.log(dbResult.result);
    // });

    // users.insertMany([{ name: "方玮", age: 25 }, { name: "方玮", age: 26 }], function (err, dbResult) { 
    //     console.log(dbResult.result);
    // })


    // 查
    // toArray就是将查询到的数据转换成数组！
    // users.find({age: 18}).toArray(function (err, arr) { 
    //     console.log(arr);
    // })

    // users.find({ age: {$gt: 18}}).toArray(function (err, arr) { 
    //     console.log(arr);
    // })

    // 删
    // users.deleteOne({ age: 18 }, function (err, dbResult) {
    //     console.log(dbResult.result);
    // })


    // 改
    // users.updateOne(条件对象, 操作对象)
    // users.updateOne({ name: "方玮" }, { $set: { gender: "female" } }, function (err, dbResult) {
    //     console.log(dbResult.result);
    // })

    // users.updateMany({ name: "方玮" }, { $set: { age: 18 } }, function (err, dbResult) {
    //     console.log(dbResult.result);
    // })

    
    // 最后一步一定要记得 关闭数据库连接
    client.close();
})