// loader 加载器

// webpack 自身只能处理普通的JS文件, 而对于 非JS 文件, 都需要对应的 loader
// 来进行特殊的处理.
// 也就是每种类型的文件, 都有自己专门的loader来处理

// 比如:
// css文件,需要使用 style-loader css-loader
// less文件,需要使用 style-loader css-loader less-loader
// ...

// 使用步骤:
// 1 安装:  npm i -D style-loader css-loader
// 2 在 webpack.config.js 中的 module 里面配置loader处理规则

// ES6 中的模块化语法:
import $ from 'jquery'

$('#list > li:odd').css('background-color', '#def')
$('#list > li:even').css('background-color', 'skyblue')

// 导入css文件
import './css/index.css'
