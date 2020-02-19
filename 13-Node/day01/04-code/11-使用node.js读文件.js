var fs = require('fs');

// fs.readFile('./静夜思.txt', 'utf8', function (err, data) { 
//     if (err) {
//         console.log("读取文件失败", err)
//     } else {
//         console.log(data);
//     }
// })


// 如果不传字符编码，则读取到的内容为Buffer对象，Buffer对象就是数据的16进制的表示形式！
fs.readFile('./静夜思.txt', function (err, data) { 
    if (err) {
        console.log("读取文件失败", err)
    } else {
        // 读取到的数据为buffer对象的时候，可以使用toString方法将其转换成字符串来使用
        console.log(data.toString());
    }
})