// 基本步骤
// 引入http模块
var http = require('http')

// 创建服务器
var server = http.createServer()

// 注册处理请求的事件处理函数
server.on('request', function (req, res) {
    // res.setHeader('key', value) 设置响应头信息, 一次只能设置一个
    // 解决中文响应乱码问题, 告诉浏览器, 以utf-8编码解析响应体中内容
    // res.setHeader('content-Type', 'text/html;charset=utf-8')
    // res.setHeader('name', 'pm')

    // res.writeHeader(状态码, 状态说明, {'key': 'value', 'key', 'value' ...}) 一次可以设置多个响应头
    res.writeHead('404', 'OK', {
        'name': 'pp',
        'age': 18,
        'Content-type': 'text/html;charset=utf-8'
    })
    // 响应头content-Type说明: 浏览器根据响应头content-Type, 来觉得如何解析本次响应的响应体中的数据
    // content-Type 为 text/html 说明响应的是html, 浏览器以html方式解析响应体中内容
    // content-Type 为 text/css 说明响应的是css, 浏览器以css方式解析响应体中内容 ...

    // res.write(参数)
    // 参数可以是buffer对象, 也可以是字符串, 会将参数作为数据写入响应体中
    // res.end(参数)
    // 可以接收buffer对象
    // 也可以接收字符串
    // 会将参数作为数据写入响应体中, 并结束响应并将响应体中的所有数据响应给浏览器, 由浏览器进行解析
    res.end('<div style="color:red;">end发送内容到响应体</div>')
})

// 启动服务器
server.listen(8888, function () {
    console.log('http://localhost:8888')
})
