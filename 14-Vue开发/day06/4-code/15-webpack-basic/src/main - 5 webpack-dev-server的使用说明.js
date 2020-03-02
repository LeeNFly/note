// 开启服务器:

// webpack-dev-server
//
// 1 npm i -D webpack-dev-server
// 2 开启服务器
// 3 自动打开浏览器
// 4 监视文件变化, 自动刷新浏览器
// 5 等等

// 使用步骤:
// 1 安装: npm i -D webpack-dev-server
// 2 在 webpack.config.js 中配置 devServer 配置项
// 3 在 package.json 中添加一个配置项: "dev": "webpack-dev-server"

// webpack-dev-server 帮我们搭建了开发环境, 使用之后, 我们只需要
// 写代码完成功能即可, 其他的所有内容, 这个插件都帮我们处理了

// webpack-dev-server 命令 和 webpack 命令的区别:
// 开发期间 webpack-dev-server
// 项目打包上线 webpack

// webpack 命令会生产 dist 文件夹
// webpack-dev-server 不会创建 dist 文件夹, 而是将所有内容放在内存中

// ES6 中的模块化语法:
import $ from 'jquery'

$('#list > li:odd').css('background-color', '#def')
$('#list > li:even').css('background-color', 'skyblue')
