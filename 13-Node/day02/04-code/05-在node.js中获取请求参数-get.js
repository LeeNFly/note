// get请求的参数是用?拼接在url地址后面的

// 如何获取get请求的参数？

var http = require('http');
var server = http.createServer();
var querystring = require('querystring')
var url = require('url');

server.on('request', function (req, res) {

    // 获取get请求的参数
    // console.log(req.url);

    // 查询字符串：
    // 格式: key=value&key2=value2... , 如 name=pp&age=18

    // 1. 自己动手，操作字符串获取参数信息
    // var params = {};

    // if (req.url.indexOf("?") != -1) {
    //     var querystring = req.url.split("?")[1];
    //     // querystring   name=pm&age=18

    //     querystring.split("&").forEach(function (v, i) {
    //         // v  name=pm
    //         // v  age=18
    //         var temp = v.split('=');
    //         params[temp[0]] = temp[1];
    //     })
    //     console.log(params);
    // }

    // 2. 使用node自带的, querystring模块直接实现查询字符串的解析
    //   1. 引入var querystring = require('querystring')
    //   2. 使用: querystring.parse(查询字符串), 将查询字符串如name=pp&age=18转换成js对象{name: 'pp', age: '18'}, 并且返回这个对象
    //      注意, 转换成js对象后, 属性的值都是字符串
    // if (req.url.indexOf("?") != -1) {
    //      1. 先获取到url地址中的查询字符串, 即传递的参数, 格式name=pp&age=13
    //     var str = req.url.split("?")[1]
    //      2. 通过querystring, 将查询字符串转换成js对象
    //     var params = querystring.parse(str);
    //     console.log(params);
    // }

    // 3. 使用node自带的url模块进行参数的解析
    //   3.1 引入模块 var url = require('url')
    //   3.2 使用: url.parse(url, parseQueryString)
    // req.url /?name=pm&age=18
    // url.parse方法可以将url字符串转换成对应的url对象
    // 有两个参数：
    // url.parse(url, parseQueryString)
    // url： 要进行解析的url字符串, ★ 可以是完整的url路径, 也可以是部分的url路径
    // url.parse(url, parseQueryString), 将传入的url字符串解析成一个对象, 包含了url路径的所有信息, 并返回这个对象
    // 转换成的对象中, query属性, 就只是路径中的查询字符串部分, 就是?后面的查询字符串, 不包含?和后面的锚点, 格式就是key=value&key2=value2..
    // 比如url.parse('/index?name=pp&age=18#aa'), 得到的对象中, query属性值就是name=pp&age=18, 如果parseQueryString是true, 就会转换成js对象, { name: 'pp', age: '18' }
    // parseQueryString: 是一个布尔值，如果为true则最终解析出来的对象中的query是一js个对象, 自动会将查询字符串转成js对象！
    //                   如果是false则解析出来的对象中的query是一个查询字符串, 默认是false
    // parseQueryString为true, 解析得到后的对象中query是一个对象, 对象中的属性值都是字符串类型

    // 给的url地址是什么, 就把能解析的全都解析了, 对于传的url字符串没有的信息, 则转成对象后显示null
   // url.parse('/index.html?name=pp&age=18#aa')
    // 给的路径不完整, 解析的url对象的信息就不完全
    // Url {
    //   protocol: null, // 协议
    //   slashes: null,
    //   auth: null,
    //   host: null, // 主机名(ip地址或域名)+端口号
    //   port: null, // 端口
    //   hostname: null, // 主机名(ip地址或域名)
    //   hash: '#aa', // 锚点
    //   search: '?name=pp&age=18',
    //   query: 'name=pp&age=18', (查询字符串)
    //   pathname: '/index.html',
    //   path: '/index.html?name=pp&age=18',
    //   href: '/index.html?name=pp&age=18#aa'
    // }

    // 若给的路径是完整的, 则获取的转换后的对象中, 信息更多
    // url.parse('http:localhost/app/index.html?name=pp&age=18#aa', true)
    // Url {
    //     protocol: 'http:',
    //         slashes: null,
    //         auth: null,
    //         host: null,
    //         port: null,
    //         hostname: null,
    //         hash: '#aa',
    //         search: '?name=pp&age=18',
    //         query: { name: 'pp', age: '18' },
    //         pathname: 'localhost/app/index.html',
    //         path: 'localhost/app/index.html?name=pp&age=18',
    //         href: 'http:localhost/app/index.html?name=pp&age=18#aa'
    // }


    // 我们这里只需要req.url就可以url中获得ip和端口后面的所有字符串内容了, 对于解析传参的查询字符串, 足够用了
    var urlObj = url.parse(req.url, true);
    // urlObj：  pathname: 路径部分的内容
            //   query: 参数部分的内容 默认情况下是一个字符串
    console.log(urlObj.query);


    res.end("ok");

})

server.listen(8888, function () {
    console.log('http://localhost:8888')
})