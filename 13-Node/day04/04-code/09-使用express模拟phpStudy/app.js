var express = require('express');
var app = express();
var path = require('path');

// app.get('/index.html', function (req, res) { 
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

// app.get("/anoceanofsky.css", function (req, res) { 
//     res.sendFile(path.join(__dirname, 'public', 'anoceanofsky.css'));
// })


// app.use(function (req, res) { 
//     res.sendFile(path.join(__dirname, 'public', req.path));
// })

// app.use(express.static('public'))
// app.use("/public", express.static('public'))

app.listen(8888, function () { 
    console.log('http://localhost:8888')
})