var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var connStr = 'mongodb://localhost:27017';
var DBNAME = "hackernews";
var COLNAME = "news";

module.exports = {
    getAllNews: function (callback) { 
        MongoClient.connect(connStr, function (err, client) {
            //1. 获取数据库db对象
            var db = client.db(DBNAME);
            //2. 获取集合对象
            var news = db.collection(COLNAME);

            //3. 获取所有的新闻数据
            news.find().toArray(function (err, arr) {
                callback(arr);
            })

            //4. 关闭数据库连接
            client.close();
        })
    },
    getNewsById: function (id, callback) { 
        MongoClient.connect(connStr, function (err, client) {
            var db = client.db(DBNAME);
            var news = db.collection(COLNAME);

            // 查询的时候，id是objectid类型，所以需要进行转换
            news.find({ _id: ObjectId(id) }).toArray(function (err, arr) {
                callback(arr[0]);
            })

            client.close();
        })
    },
    addNews: function (info, callback) { 
        MongoClient.connect(connStr, function (err, client) {
            var db = client.db(DBNAME);
            var news = db.collection(COLNAME);
            news.insertOne(info, function (err, dbResult) {
                if (dbResult.result.ok == 1) {
                    callback();
                }
            })

            client.close();
        })
    }
}