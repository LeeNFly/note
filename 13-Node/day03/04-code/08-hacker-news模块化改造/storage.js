var fs = require('fs');
var path = require('path');

var NEWSPATH = path.join(__dirname, 'data.json');
module.exports = {
    // 读取所有的数据
    getAllNews: function (callback) { 
        fs.readFile(NEWSPATH, 'utf8', function (err, data) {
            data = JSON.parse(data || "[]");
            callback(data);
        })
    },
    getNewsById: function (id, callback) {
        this.getAllNews(function (newsList) {
            var news = newsList.find(function (v, i) {
                return v.id == id;
            });
            callback(news);
        })
    },
    addNews: function (news, callback) {
        this.getAllNews(function (newsList) {
            news.id = newsList.length == 0 ? 1 : newsList[newsList.length - 1].id + 1;

            newsList.push(news);

            fs.writeFile(NEWSPATH, JSON.stringify(newsList), function (err) { 
                callback();
            })
        })
    }
}