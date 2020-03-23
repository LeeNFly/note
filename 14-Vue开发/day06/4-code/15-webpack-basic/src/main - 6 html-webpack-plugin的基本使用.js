// html-webpack-plugin

// 作用:
// 1 在webpack-dev-server服务器启动时, 根据指定的模板页面(index.html)在内存中生成一个新的页面
//    并且, 浏览器打开的就是 生成的页面
// 2 能够自动帮我们引入 css/js 等文件

// 使用:
// 1 安装: npm i -D html-webpack-plugin
// 2 在webpack配置文件  webpack.config.js 中导入这个模块
// 3 在webpack配置文件  webpack.config.js的 plugins 中配置

// ES6 中的模块化语法:
import $ from 'jquery'

$('#list > li:odd').css('background-color', '#def')
$('#list > li:even').css('background-color', 'skyblue')
