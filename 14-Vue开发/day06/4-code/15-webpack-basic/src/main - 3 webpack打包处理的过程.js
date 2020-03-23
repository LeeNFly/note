// webpack打包处理的过程::

// 案例: 使用jQuery实现隔行变色的效果

// 浏览器或者NodeJS中 都无法直接识别 import 语法,
// 但是, 经过webpack打包处理后, 浏览器就能够识别这个语法了

// webpack打包处理的过程:
// 1 运行了webpack的打包命令: webpack ./src/main.js --mode development
// 2 webpack 就会找到我们指定的入口文件 main.js (入口文件只能是js文件)
// 3 webpack 就会分析 main.js 中的代码, 当遇到 import $ from 'jquery' 语法的时候, 那么, webpack
//    就知道,我们要使用 jQuery 这个模块
// 4 webpack 就会将jQuery模块的代码拿过来
// 5 然后,继续往后分析, 如果在遇到 import 语法 (还可以导入其他css, js文件), 继续加载这个模块 ...
// 6 直到分析完成整个入口文件后, 将 main.js 中所有用到的模块的代码 与 我们自己写的js代码 保留原来的代码逻辑
//   打包生成一个新的JS文件, 也就是 dist/main.js, 这个js文件可以被浏览器识别, 原来的路口文件仍保持不变

//   将来在页面中引入这个打包后的js文件, 里面的模块以及我们自己写的js代码, 都可以被浏览器识别和解析了

// ★ 入口文件只能是js文件, 并且文件中写js代码, js语法
// ★ webpack只会打包时只会对我们的入口文件处理, 不会对其他文件进行处理. 即只会打包入口文件 . 一般入口只能有一个

// CommonJS 中的模块化语法
// const $ = require('jquery')

// ES6 中的模块化语法: (浏览器和node无法识别, 需要借助webpack打包后才能识别)
import $ from 'jquery' // 类似于之前的script标签引入jq, 在当前js中直接引入jq, $就是jQuery暴露到全局的jQuery函数, 与之前一样, 可以直接使用$来使用jQuery

$('#list > li:odd').css('background-color', 'red')
$('#list > li:even').css('background-color', 'green')
