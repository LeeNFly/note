var path = require('path')
var fs = require('fs')

module.exports = {
    readNews: function(callback) {
        fs.readFile(path.join(__dirname, 'data.json'), 'utf-8', function (err, data) {
            var newsList = JSON.parse(data || '[]')
            callback && callback(newsList)
        })
    },
    getNewsById: function(id, callback) {
        fs.readFile(path.join(__dirname, 'data.json'), 'utf-8', function (err, data) {
            var newsList = JSON.parse(data || '[]')
            var news = newsList.find(item => {
                return item.id == id
            })
            callback && callback(news)
        })
    },
    writeNews: function(news, callback) {
        this.readNews(function (newsList) {
            var id = newsList[newsList.length - 1].id + 1
            news.id = id
            newsList.push(news)
            fs.writeFile(path.join(__dirname, 'data.json'),  JSON.stringify(newsList), function (err) {
                callback && callback()
            })
        })
    }
}
