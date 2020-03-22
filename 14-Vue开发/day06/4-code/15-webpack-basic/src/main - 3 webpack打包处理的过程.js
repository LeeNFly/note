// webpack打包处理的过程::

// 案例: 使用jQuery实现隔行变色的效果

// 浏览器或者NodeJS中 都无法直接识别 import 语法,
// 但是, 经过webpack打包处理后, 浏览器就能够识别这个语法了

// webpack打包处理的过程:
// 1 运行了webpack的打包命令: webpack ./src/main.js --mode development
// 2 webpack 就会找到我们指定的入口文件 main.js
// 3 webpack 就会分析 main.js 中的代码, 当遇到 import $ from 'jquery' 语法的时候, 那么, webpack
//    就知道,我们要使用 jQuery 这个模块
// 4 webpack 就会将jQuery模块的代码拿过来
// 5 然后,继续往后分析, 如果在遇到 import 语法, 继续加载这个模块 ...
// 6 直到分析完成整个 JS 文件后, 将 main.js 中所有用到的模块的代码 与 我们自己写的js代码
//   打包生成一个新的JS文件, 也就是 dist/main.js, 这个js文件可以被浏览器识别
//   将来在页面中引入这个打包后的js文件, 里面的模块以及我们自己写的js代码, 都可以被浏览器识别和解析了

// CommonJS 中的模块化语法
// const $ = require('jquery')

// ES6 中的模块化语法: (浏览器和node无法识别, 需要借助webpack打包后才能识别)
import $ from 'jquery' // 类似于之前的引入jq, $就是jQuery暴露到全局的jQuery函数, 与之前一样, 可以直接使用$来使用jQuery

$('#list > li:odd').css('background-color', 'red')
$('#list > li:even').css('background-color', 'green')
