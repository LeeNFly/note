var fs = require('fs');

var csb = "先帝创业未半而中道崩殂， 尽天下三分。。。。。"


// 写文件的时候，如果写的是相对路径，则参照是 当前执行命令的目录，而不是js文件所在的目录

// fs.writeFile('./出师表.txt', csb, function (err) { 
//     if (err) {
//         console.log("写入失败")
//     } else {
//         console.log("写入成功")
//     }
// })

// __dirname: 指的就是当前正在执行的js文件文件夹路径
// console.log(__dirname);
// __filename: 指的就是当前正在执行的js文件的路径
// console.log(__filename);


fs.writeFile(__dirname + '/出师表.txt', csb, function (err) { 
    if (err) {
        console.log("写入失败")
    } else {
        console.log("写入成功")
    }
})


// 1. 如果想要将文件创建在执行命令的文件夹下，则直接写相对路径就行
// 2. 如果想要将文件创建在和执行的js文件同一个文件夹下，则使用__dirname来拼接路径即可