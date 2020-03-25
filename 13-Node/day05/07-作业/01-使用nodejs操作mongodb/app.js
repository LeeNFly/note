var mongoClient = require('mongodb').MongoClient

var connStr = "mongodb://localhost:27017"

mongoClient.connect(connStr, function (err, client) {
    console.log(err)
    if (err) {
        console.log('连接失败')
    }
    console.log('连接mongodb成功')

    var db = client.db('mytest') // use mytest

    var users = db.collection('users') // db.users

    // 增
    // users.insert({name: '方伟', age: 13}, function (err, dbResult) {
    //     console.log(err)
    //     console.log(dbResult)
    // })

    // users.insertMany([{name: '潘明', age: 14}, {name: '蒋鹏', age: 15}], function (err, dbResult) {
    //     console.log(err)
    //     console.log(dbResult)
    // })

    // 查
    // toArray就是将查询到的数据转换成js数组！
    // 查询所有
    // users.find().toArray(function (err, arr) {
    //     console.log(arr)
    // })

    // users.find({age: 15}).toArray(function (err, arr) {
    //     console.log(arr)
    // })

    // users.find({age: {$gt: 13}}).toArray(function (err, arr) {
    //     console.log(arr)
    // })

    // var ObjectId = require('mongodb').ObjectId
    // users.find({_id: ObjectId('5e7b1e28645d9b5b90267d5f')}).toArray(function (err, arr) {
    //     console.log(arr)
    // })


    // 改
    // users.updateOne({age: {$gt: 13}}, {$set: {age: 20}}, function (err, dbRes) {
    //     console.log(err, dbRes)
    // })

    // users.updateMany({age: {$gt: 12}}, {$set: {age: 25}}, function (err, dbRes) {
    //     console.log(err, dbRes)
    // })


    // 删
    // users.deleteOne({age: {$gt: 20}}, function (err, dbRes) {
    //     console.log(err, dbRes)
    // })

    // users.deleteMany({age: {$gt: 20}}, function (err, dbRes) {
    //     console.log(err, dbRes)
    // })

    client.close()
})
