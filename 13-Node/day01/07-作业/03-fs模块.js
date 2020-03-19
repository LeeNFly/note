var fs = require('fs')

// 1. fs模块 - 读文件
// fs.readFile('data.txt', function (err, data) {
//     if (err) {
//         console.log('读取文件失败')
//         return
//     }
//     console.log(data.toString())
// })
//
// fs.readFile('data.txt','utf-8', function (err, data) {
//     if (err) {
//         console.log('读取文件失败')
//         return
//     }
//     console.log(data)
// })

// fs模块 - 写文件
// fs.writeFile('data.txt', '举头望明月', function (err) {
//     if (err) {
//         console.log('写入文件失败')
//         return
//     }
//     console.log('写入成功')
// })

// fs模块 - 在原来的内容上追加内容 使用readFile 和 writeFile方法
// fs.readFile('data.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.log('读取文件失败')
//         return
//     }
//
//     data = data + '低头思故乡'
//     fs.writeFile('data.txt', data, function () {
//         if (err) {
//             console.log('写入文件失败')
//             return
//         }
//         console.log('写入文件成功')
//     })
// })

// fs模块 - 在原来的内容上追加内容 使用appendFile 方法
// fs.appendFile('data.txt', '追加的内容哦', function (err) {
//     if (err) {
//         console.log('追加内容失败')
//         return
//     }
//     console.log('追加内容成功')
// })

// 路径问题
fs.readFile(__dirname + '/data.txt', function (err, data) {
    if (err) {
        console.log('读取文件失败')
        return
    }
    console.log(data.toString())
})
