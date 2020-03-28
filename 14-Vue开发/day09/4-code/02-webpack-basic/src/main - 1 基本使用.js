// ES6 中的模块化语法
// import / export

// 在浏览器或NodeJS环境中，是无法直接使用 import 语法的
// 在模块化的环境中每个JS文件都是一个独立的作用域，如果两个JS文件需要交互
// 那么，必须通过 导入和导出 才能实现

// 第一种语法:
// 导出：export default 要导出的内容
// 导入：import a from '模块路径'
//
// 注意:
//  1 使用 export default 导出的内容，在导入的时候，import后面的名称可以是任意的
//  2 在一个模块中 export default 语法只能使用一次

// 导入a.js中的内容：
// import abc from './js/a'
// console.log('main.js中导入内容为：', abc)

// 第二种语法:
// 导出: export const num = 888
// 导入: import { num } from '模块路径'
//
// 注意:
//  1 导入内容的时候,需要添加 {}
//  2 导入的内容(num),必须是模块导出的内容(num).如果导入内容与导出内容不相同,那么,导入内容为: undefined
//  3 export 不带 default 可以出现任意多次

// 导入b.js中的内容:
import { num, str, fn } from './js/b'
console.log('导入b.js内容为:', num, str)

fn()
