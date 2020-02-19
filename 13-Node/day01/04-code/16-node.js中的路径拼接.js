var fs = require('fs');

// fs.writeFile(__dirname + "/leveltop" + "/levelmiddle" + "/levelbottom" + "/abc.txt", '这样写路径太烦了', function (err) {
//     if (err) {
//         console.log("no ok");   
//     } else {
//         console.log("ok");   
//     }
// })

// 通过字符串拼接的方式虽然可以拼接路径，但是太过繁琐，得注意斜杠的问题

// node.js中提供了一个模块  path
// path模块中提供了一个join方法，专门用来拼接路径的！

var path = require('path');

fs.writeFile(path.join(__dirname, 'leveltop', 'levelmiddle', 'levelbottom', 'abc.txt'), '这样写路径太烦了', function (err) {
    if (err) {
        console.log("no ok");   
    } else {
        console.log("ok");   
    }
})