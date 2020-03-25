var express = require('express')
var path = require('path')
var url = require('url')

var app = express()

app.get('/', function (req, res) {
    console.log(111)
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/details', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'details.html'))
})

app.get('/submit', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'submit.html'))
})

// app.use('/resources', function (req, res) {
//
//     res.sendFile(path.join(__dirname, 'resources' ,req.path))
// })

app.use('/resources', express.static('resources'))

app.listen('8888', function () {
    console.log('http://localhost:8888')
})
