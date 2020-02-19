var fs = require('fs');


// 异步操作中的异常，直接用try-catch无法进行捕获
try {
    fs.readFile('./出师表.txt', 'utf8', function (err, data) {
        console.log(a);
    })
} catch (e) {
    console.log("出错啦")
}

// 如果要捕获，则需要将try-catch放在回调函数内部使用！
fs.readFile('./出师表.txt', 'utf8', function (err, data) {
    try {
        console.log(a);

    } catch (e) {
        console.log("出错啦")
    }
})