// 模板引擎的原理等 与之前前端的模板引擎类似
// 下载包 npm install art-template -S

// 1. 引包
var template = require('art-template')

var path = require('path')

// 2. 准备模板 (html文件或字符串变量)

// 3. 准备数据并渲染
var obj = {
    msg: '数据信息'
}

// html文件作为模板
var htmlStr = template(path.join(__dirname, 'tpl.html'), obj)
console.log(htmlStr) // 得到html字符串 <div>数据信息</div>

// 以字符串变量作为模板

var str = '<div>{{msg}}</div>'
var render = template.compile(str)
var htmlStr2 = render(obj)
console.log(htmlStr2) // <div>数据信息</div>
