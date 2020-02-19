module.exports = function (req, res, next) {
    // 1. 获取post请求参数
    var bufferList = [];
    req.on('data', function (chunk) {
        bufferList.push(chunk);
    })
    req.on('end', function () { 
        var result = Buffer.concat(bufferList);
        result = result.toString(); 
        // result就是从浏览器发送过来的post请求的数据
        // 可能有两种形式
        // 1. x-www-form-urlencoded：  拿到的数据 key=value&key=value
        // 2. application/json:        拿到的数据 {key: value, key: value}
        
        // 对于两种数据格式，应该进行不同的处理
        // 1. 如果是x-www-form-urlencoded, 就调用querystring.parse进行转换
        // 2. 如果是application/json, 就调用JSON.parse进行转换

        // 如何判断浏览器端请求的时候，发送的数据是什么格式的？
        // 通过请求头中的 content-type 就可以知道
        // console.log(req.get('content-type'));

        if (req.get('content-type').indexOf('json') != -1) {
            req.body = JSON.parse(result);
        } else if (req.get('content-type').indexOf('urlencoded') != -1) {
            req.body = querystring.parse(result);
        } else {
            req.body = {};
        }

        next();
    })
}