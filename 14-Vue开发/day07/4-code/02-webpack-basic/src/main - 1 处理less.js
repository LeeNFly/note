// 处理 less 文件

// 步骤：
// 1 安装包： npm i -D less-loader less
//           npm i -D style-loader css-loader
// 2 在 webpack.config.js 的 module 中添加一个规则

// ES6 中的模块化语法:
import $ from 'jquery'

$('#list > li:odd').css('background-color', '#def')
$('#list > li:even').css('background-color', 'skyblue')

// 导入css文件
import './css/index.css'

// 导入less文件
import './css/index.less'
