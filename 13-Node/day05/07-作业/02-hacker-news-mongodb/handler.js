var storage = require('./storage')
var path = require('path')
module.exports = {
    handlerIndex: function (req, res) {
        storage.readNews(function (newsList) {
            res.render('index', {list: newsList})
        })
    },
    handlerDetails: function (req, res) {
        storage.getNewsById(req.query.id,function (news) {
            res.render('details', {item: news})
        })
    },
    handlerSubmit: function (req, res) {
        res.sendFile(path.join(__dirname, 'views', 'submit.html'))
    },
    handlerPostAdd: function (req, res) {
        storage.writeNews(req.body, function() {
            res.redirect('/')
        })
    },
    handlerGetAdd: function (req, res) {
        storage.writeNews(req.query, function() {
            res.redirect('/')
        })
    }
}
