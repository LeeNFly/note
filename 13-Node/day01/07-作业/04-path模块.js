var path = require('path')
var fs = require('fs')
console.log(path.join('aa', 'bb', 'cc'))
console.log(path.join('aa', '/bb', '/cc'))
console.log(path.join(__dirname, '/bb', '/cc.txt'))

// 路径问题
fs.readFile(path.join(__dirname, 'data.txt'), function (err, data) {
    if (err) {
        console.log('读取文件失败')
        return
    }
    console.log(data.toString())
})
