// loader 加载器

// webpack 自身只能处理普通的JS文件, 而对于 非JS 文件, 都需要对应的 loader
// 来进行特殊的处理. 处理之后才可以使用
// 也就是每种类型的文件, 都有自己专门的loader来处理

// 比如:
// css文件,需要使用 style-loader css-loader
// less文件,需要使用 style-loader css-loader less-loader
// ...

// 使用步骤:
// 1 安装:  npm i -D style-loader css-loader
// 2 在 webpack.config.js 中的 module 里面配置loader处理规则

// ES6 中的模块化语法: (写在js中)
import $ from 'jquery'

$('#list > li:odd').css('background-color', '#def')
$('#list > li:even').css('background-color', 'skyblue')

//import语法也可以 导入css文件,
import './css/index.css' // 在入口文件中导入css, 将来生成style标签并插入到页面中
// 只要见到 you may need an appropriate loader to handle this file type 就说明缺少loader处理, 需要手动配置该类型文件的loader处理
// import语法也可以导入js等其他文件
