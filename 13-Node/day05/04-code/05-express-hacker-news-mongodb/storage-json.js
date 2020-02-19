var fs = require('fs');
var path = require('path');
module.exports = {

    // 获取所有的新闻数据
    getAllNews: function (callback) {
        fs.readFile(path.join(__dirname, 'data.json'), 'utf8', function (err, data) {
            data = JSON.parse(data || "[]");
            callback(data);
        })
    },

    // 根据id获取对应的新闻数据
    getNewsById: function (id, callback) {
        this.getAllNews(function (newsList) {
            var news = newsList.find(function (v, i) {
                return v.id == id;
            })
            callback(news);
        })
    },

    // 添加新闻
    addNews: function (news, callback) {
        this.getAllNews(function (newsList) {
            news.id = newsList.length == 0 ? 1 : newsList[newsList.length - 1].id + 1;

            newsList.push(news);

            fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(newsList), function (err) {
                callback();
            })
        })
    }
}