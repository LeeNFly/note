var express = require('express')
var app = express()
app.use('/', function (req, res) {
    res.end('get ok')
})
app.listen('8888', function () {
    console.log('http://localhost:8888')
})