var fs = require('fs')
var path = require('path')
// 获取所有数据
// fs.readFile(path.join(__dirname, 'data.json'), function(err, data) {
//     if (err) {
//         console.log('读取文件失败')
//         return
//     }
//     var res = JSON.parse(data.toString() || '[]')
//     console.log(res)
// })

// 根据id查找数据
// var id = 2
// var data
// fs.readFile(path.join(__dirname, 'data.json'), function(err, data) {
//     if (err) {
//         console.log('读取文件失败')
//         return
//     }
//     var res = JSON.parse(data.toString() || '[]')
//     // res.forEach(function (item) {
//     //     if (item.id == id) {
//     //         data = item
//     //     }
//     // })
//     data = res.find(function (item) {
//         return item.id == id
//     })
//     console.log(data)
// })

// 追加一条数据
// fs.readFile(path.join(__dirname, 'data.json'), function(err, data) {
//     if (err) {
//         console.log('读取文件失败')
//         return
//     }
//     var res = JSON.parse(data.toString() || '[]')
//     res.push({
//         title: '习近平同英国首相约翰逊通电话',
//         url: '',
//         text: '习近平代表中国政府和中国人民对英国政府和英国人民抗击新冠肺炎疫情表示诚挚慰问。习近平应询介绍了中方防控新冠肺炎疫情的举措，强调希望英方同中方加强配合，在保障必要人员流动和贸易通畅的同时，将疫情扩散风险降至最低。中方愿向英方提供支持和帮助。相信在首相先生领导下，英国人民一定能够战胜疫情。',
//         id: '2'
//     })
//     var jsonStr = JSON.stringify(res)
//     fs.writeFile(path.join(__dirname, 'data.json'), jsonStr, function(err) {
//         if (err) {
//             console.log('写入失败')
//             return
//         }
//         console.log('写入成功')
//     })
// })
