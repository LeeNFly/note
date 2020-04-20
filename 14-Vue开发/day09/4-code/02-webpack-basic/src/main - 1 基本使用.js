/*
 * @Author: Ling Hui Shi
 * @Date: 2020-03-29 12:32:38
 * @LastEditors: Ling Hui Shi
 * @LastEditTime: 2020-04-20 22:48:01
 * @Description: 
 */
// ES6 中的模块化语法 可以在js运行环境中使用 (.js文件, script标签内)
// import / export  (类似于node中的require语法和导出项modules.export)
// ES6 模块化语法不能直接被浏览器或nodejs识别解析和执行, 需要配合webpack打包处理后, 才能被浏览器识别和解析和执行

// 在浏览器或NodeJS环境中，是无法直接使用 import 语法的, 需要配合webpack使用, webpack打包编译后, 才可以被浏览器或nodejs识别
// 在模块化的环境中每个JS文件都是一个独立的作用域，如果两个JS文件需要交互
// 一个js文件, 就可以看作是一个模块
// 那么，必须通过 导入和导出 才能实现

// 第一种语法:
// 导出：export default 要导出的内容, 可以导出任意数据类型(5基本3复杂)  (类似于node模块化中的导出项modules.export)
// 导入：import a from '模块路径' (类似于类似于node模块化中的导入模块require) (还可以导入其他css文件, js文件, 包, 插件, 资源文件等其他文件)
//       在当前作用域声明了变量a, 并且将模块的导出项(export default 后的导出项) 赋值给了变量a
//
// 注意:
//  1 使用 export default 导出的内容，在导入的时候，import后面的名称可以是任意的
//  2 在一个模块中 export default 语法只能使用一次
//  3 通过import语法, 可以拿到导入模块的导出项 即 export default 之后的导出项
//  4 和之前nodejs中的模块化一样, 只不过换成ES6写法了, 导入模块也会执行模块中的js代码, 然后执行完毕后, 返回导出项
//  5 一个模块可以多次导入
// 导入a.js中的内容：
// import abc from './js/a'  导入模块a, 声明变量abc并且将a的导出项赋值给abc
// console.log('main.js中导入内容为：', abc)

// 第二种语法: 
// 可以导出任意数据类型(5基本3复杂)
// 导出: export const num = 888
// 导入: import { num } from '模块路径'
// 导入: import { num as n } from '模块路径' // as 用来取别名

//
// 注意:
//  1 导入内容的时候,需要添加 {}, 先在当前作用域声明变量, 然后再将导出值赋予对应同名变量
//  2 导入的内容{}中变量名(num, 即在当前作用域中先声明变量, 并将导出的内容赋值给这个变量),必须是模块导出的内容变量名(num). 导出的变量名要与导入处的变量名相同, 如果导入内容与导出内容不相同,那么,导入内容为: undefined
//  3 export 不带 default 导出, 则可以出现任意多次, 即可以导出多个内容, 在导入时{}中一一对应同名接收即可

// 导入b.js中的内容:
import { num, str, fn } from './js/b'
console.log('导入b.js内容为:', num, str)

fn()

// 第三种语法, 直接导入静态资源文件, 或其他文件, (需要配合webpack打包处理)
// import './css/index.css'