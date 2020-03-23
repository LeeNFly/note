// webpack 配置文件的使用方式:
// 使用配置文件的方式打包, 替代之前的命令方式打包

// 1 在项目根目录中创建webpack的配置文件: webpack.config.js, 并且做好相关的配置 (最基本的要配上路口entry, 出口output, 打包模式mode)
// 2. 在package.json的scripts中编写脚本 "build": "webpack", npm run build即可对项目进行打包了, 只要运行webpack命令, 就会找到webpack.config.js配置文件,
//    根据配置文件里的信息, 对我们的项目进行打包了 (实际上是对入口文件进行打包)

// ES6 中的模块化语法:
import $ from 'jquery'

$('#list > li:odd').css('background-color', 'pink')
$('#list > li:even').css('background-color', 'skyblue')
