var express = require('express')
var path = require('path')
var storage = require('./storage')
var express_art_template = require('express-art-template')
var bodyParser = require('body-parser')

var app = express()

app.engine('html', express_art_template)

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'html')

app.use('/', bodyParser.urlencoded())

app.get('/', function (req, res) {
   storage.readNews(function (newsList) {
        res.render('index', {list: newsList})
   })
})

app.get('/index', function (req, res) {
    storage.readNews(function (newsList) {
        res.render('index', {list: newsList})
    })
})

app.get('/details', function (req, res) {
    storage.getNewsById(req.query.id,function (news) {
        res.render('details', {item: news})
    })
})

app.get('/submit', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'submit.html'))
})

app.get('/add', function (req, res) {
    storage.writeNews(req.query, function() {
        res.redirect('/')
    })
})

app.post('/add', function (req, res) {
    storage.writeNews(req.body, function() {
        res.redirect('/')
    })
})

// app.use('/resources', function (req, res) {
//
//     res.sendFile(path.join(__dirname, 'resources' ,req.path))
// })

app.use('/resources', express.static('resources'))

app.listen('8888', function () {
    console.log('http://localhost:8888')
})
