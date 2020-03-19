// 基本步骤
// 引入http模块
var http = require('http')

// 创建服务器
var server = http.createServer()

// 注册处理请求的事件处理函数
server.on('request', function (req, res) {
    // 解决中文响应乱码问题, 告诉浏览器, 以utf-8编码解析响应体中内容
    res.setHeader('content-Type', 'text/html;charset=utf-8')
    // req.url
    console.log(req.url)
    // req.methods
    // console.log(req.method)
    // res.write('<div style="color: red">哈哈哈</div>')

    // 模拟区分请求给客户不同响应
    var url = req.url
    if (url == '/index' || url == '/') {
        res.write('首页')
    }
    else if (url == '/detail') {
        res.write('详情页')
    }
    else if (url == '/list') {
        res.write('列表页')
    }
    else {
        res.write('你访问的页面不存在')
    }
    res.end()
})

// 启动服务器
server.listen(8888, function () {
    console.log('http://localhost:8888')
})
