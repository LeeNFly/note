// 引入fs模块
var fs = require('fs');


fs.writeFile("./abc/静夜思.txt", "床前明月光, 疑似地上霜, 举头望明月，低头思故乡", "utf8", function (err) { 
    // err这个形参，会在写入文件出错的时候，将错误信息传递进来
    // 如果没有出错， err就是一个null
    if (err) {
        console.log("写入失败", err);
    } else {
        console.log("写入成功");
    }
})

console.log("123");