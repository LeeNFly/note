// 下载mongodb: npm install mongodb
// 1. 引入mongoClient
var MongoClient = require('mongodb').MongoClient;

// 2. 创建一个数据库连接字符串
var connStr = "mongodb://localhost:27017"

// 3. 调用mongoClient提供的方法connect进行数据库连接
    // 连接数据库是异步操作, 等到连接数据库成功后, 调用回调函数
MongoClient.connect(connStr, function (err, client) {
    // console.log("ok")
    // err 错误对象, 若报错, 有错误信息; 若没报错, 则为null
    // client 数据库客户端对象, 用于node操作mongodb数据库


    // 增删改查
    // 1. 获取db对象
    var db = client.db("test"); // use test;
    // 2. 通过db来操作数据库中的集合
    var users = db.collection("users"); // db.users


    // db.collection("users").insert(); // db.users.insert();
    // db.collection("users").insertMany(); // db.users.insertMany();
    // db.collection("users").find(); // db.users.find();

    // 增删改查的回调函数中, 在操作执行完毕后调用, 都是异步的, 包含了操作返回的数据和信息
    // 增

    // users.insert({ name: "方玮", age: 24 }, function (err, dbResult) {
    //     console.log(dbResult.result); // 操作返回的提示信息
    // });

    // users.insertMany([{ name: "方玮", age: 25 }, { name: "方玮", age: 26 }], function (err, dbResult) {
    //     console.log(dbResult.result);
    // })


    // 查
    // toArray就是将查询到的数据转换成数组！
    // users.find({age: 18}).toArray(function (err, arr) {
    //     console.log(arr); // arr 是查询到的数据, 数组类型
    // })

    // users.find({ age: {$gt: 18}}).toArray(function (err, arr) {
    //     console.log(arr);
    // })

    // mongodb在存储数据的时候，会自动给数据添加一个`_id`属性
    // 这个`_id`属性是`ObjectId`类型
    // 注意: mongodb中, id是_id, 并且是ObjectId类型 (mongodb中的数据类型),
    ///     如果通过id查询, 需要将_id转成ObjectId类型
    //      var ObjectId = require('mongodb').ObjectId;
    //      users.find({ _id: ObjectId(id) }).toArray(function (err, arr) {
    //                 callback(arr[0]);
    //             })


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
