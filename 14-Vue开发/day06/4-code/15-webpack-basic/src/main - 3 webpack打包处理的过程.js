/*
 * @Author: Ling Hui Shi
 * @Date: 2020-03-22 14:21:35
 * @LastEditors: Ling Hui Shi
 * @LastEditTime: 2020-04-18 22:19:10
 * @Description: 
 */
// webpack打包处理的过程::

// 案例: 使用jQuery实现隔行变色的效果

// 浏览器或者NodeJS中 都无法直接识别和解析执行 import 语法,
// 但是, 经过webpack打包处理后, 浏览器就能够识别和解析执行这个语法了, 即ES6中模块化语法import需要配合webpack使用, 才能被浏览器识别和解析执行

// webpack打包处理的过程:
// 1 运行了webpack的打包命令: webpack ./src/main.js --mode development
// 2 webpack 就会找到我们指定的入口文件 main.js (入口文件只能是js文件)
// 3 webpack 就会分析 main.js 中的代码, 当遇到 import $ from 'jquery' 语法的时候, 那么, webpack
//    就知道,我们要使用 jQuery 这个模块
// 4 webpack 就会将jQuery模块的代码拿过来分析处理打包
// 5 然后,继续往后分析, 如果在遇到 import 语法 (还可以导入其他css文件, js文件, 包, 插件, 资源文件等其他文件), 继续加载这个模块 ... 然后分析处理打包
// 6 直到分析完成整个入口文件后, 将 main.js 中所有用到的模块的代码 与 我们自己写的js代码 保留原来的代码逻辑
//   打包生成 ★ 一个新的JS文件, 打包生成的js文件中包含了入口文件中引入的所有模块, 内容, 资源等, 也包括入口文件自己写的js代码, 即包括入口文件中的所有内容
//   也就是 dist/bundles.js, 这个js文件可以被浏览器识别, 原来的路口文件仍保持不变

//   将来在页面中引入这个打包后的js文件, 里面的模块以及我们自己写的js代码, 都可以被浏览器识别和解析执行了, 即入口文件中的所有内容, 都可以在页面中生效

// ★ 入口文件只能是js文件, 并且文件中写js代码, js语法
// ★ webpack打包时只会对我们的入口文件处理, 不会对其他文件进行处理. 即只会打包入口文件 . 一般入口文件只能有一个

// CommonJS 中的模块化语法
// const $ = require('jquery')

// ES6 中的模块化语法: (浏览器和node无法ES6模块化语法识别, 需要借助webpack打包后才能识别)
// 除了可以导入js, 还可以导入包或其他任意文件！！！
// import 语法 只能用在 js文件里 (js环境中, 如script并且内也可以使用import语法) 使用
// 语法: import 接收变量名 from '包名' 或 '文件路径' (还可以导入其他css文件, js文件, 包, 插件, 资源文件等其他文件)
import $ from 'jquery' // 类似于之前的script标签引入jq, 在当前js中直接引入jq, $就是jQuery暴露到全局的jQuery函数, 与之前一样, 可以直接使用$来使用jQuery
// 在当前作用域声明变量$并且将jQuery包中导出的jQuery函数赋值给$
// import './css/index.css' 也可以直接导入资源文件或其他文件(需要配合webpack打包处理, 由对应的loader来处理)

$('#list > li:odd').css('background-color', 'red')
$('#list > li:even').css('background-color', 'green')

// 特别说明:
// 由于将来是在入口文件处进行打包, 则会将项目中所有用到的文件, 包, 插件, 资源文件 (比如css, less, 等) 全部放在路口处 通过 import 模块化语法引入
// import 模块化语法 可以引入 任意文件, 包, 插件, 资源文件(比如css, less等)
// 将来打包时, 会分析入口文件, 会按照以上规则, 将引入的文件代码拿过来 和 保留我们自己写的代码, 在不影响页面逻辑的前提下, 生成一个新的js文件
// 这个js文件里包含了所有入口文件中引入文件(包括包, js文件, css文件, 以及其他所有引入, 导入的文件), 以及我们编写的代码, 并且页面逻辑与原来一致
// 将来我们只需要在页面中引入这个打包后生成的js文件, 则入口中所有引入的模块(文件), 静态资源(css代码, 图片), 插件, 以及js代码, 全部可以在引入的页面中且生效!!!
// 即一个打包后得到的js文件, 包含了入口中所有引入的文件, 如包 插件 js 资源文件(css等)等其他引入的文件 以及我们自己写的js代码, 只需要在页面中引入这个打包后生成的js文件, 则这些在引入页面中都作用生效

// ★ 在项目中所有用到的模块, 文件, 资源文件(css等)等所有需要用到的文件, 应该都要在入口文件中导入(import), 在入口文件中初始化完成, 因为将来打包, webpack只会对路口文件进行打包
// ★ 我们所有的逻辑代码, 要么在入口文件中写, 要么在入口文件中引入, 因为将来webpack只会对入口文件进行打包
// ★ 对于路由, webpack会对路由中的所有组件进行处理的. 
// ★ webpack会对导入import或引入的所有文件、模块 的所有内容进行分析处理和打包的.
// ★ 将来对入口文件中的所有引入模块 资源 代码打包生成新的js文件后, 会自动引入到项目的根页面, 即单页面中, 将来项目中的所有组件都可以使用到入口文件中导入模块的内容, 即入口文件中导入模块的内容都生效
