var path = require('path')
var mongoClient = require('mongodb').MongoClient
var connStr = "mongodb://localhost:27017"
var DBNAME = 'hacker_news'
var COLNAME = 'news'

module.exports = {
    readNews: function(callback) {
        mongoClient.connect(connStr, function(err, client) {
            var db = client.db(DBNAME) // use hacker_news
            var newsCol = db.collection(COLNAME) // db.news
            newsCol.find().toArray(function (err, arr) {
                client.close()
                callback && callback(arr)
            })
        })
    },
    getNewsById: function(id, callback) {
        mongoClient.connect(connStr, function(err, client) {
            var db = client.db(DBNAME)
            var newsCol = db.collection(COLNAME)
            var ObjectId = require('mongodb').ObjectId
            newsCol.find({_id: ObjectId(id)}).toArray(function (err, arr) {
                client.close()
                callback && callback(arr[0])
            })
        })
    },
    writeNews: function(news, callback) {
        mongoClient.connect(connStr, function(err, client) {
            var db = client.db(DBNAME)
            var newsCol = db.collection(COLNAME)
            newsCol.insert(news, function (err, dbRes) {
                client.close()
                callback && callback()
            })
        })
    }
}
