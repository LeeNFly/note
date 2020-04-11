/*
 * @Author: Ling Hui Shi
 * @Date: 2020-03-22 14:21:35
 * @LastEditors: Ling Hui Shi
 * @LastEditTime: 2020-04-11 14:18:56
 * @Description: 
 */
// html-webpack-plugin

// 作用:
// 1 在webpack-dev-server服务器启动时, 根据指定的模板页面(根目录下的index.html)在内存中生成一个新的页面
// 2 自动将webpack-dev-server服务器启动时对入口文件打包生成的新的js文件, 自动引入到当前模板文件中, ★ (核心)
// 3. 打开浏览器, 默认访问的是http://ip:端口, 就是访问根目录下的index.html, 即访问的生成的这个页面(index.html)

// html-webpack-plugin实际作用, 即只要访问模板文件(index.html), 就会将打包入口文件生成的新的js文件自动引入到该页面中并解析执行

// 使用:
// 1 安装: npm i -D html-webpack-plugin
// 2 在webpack配置文件  webpack.config.js 中导入这个模块
// 3 在webpack配置文件  webpack.config.js的 plugins 中配置

// ES6 中的模块化语法:
import $ from 'jquery'

$('#list > li:odd').css('background-color', '#def')
$('#list > li:even').css('background-color', 'skyblue')
