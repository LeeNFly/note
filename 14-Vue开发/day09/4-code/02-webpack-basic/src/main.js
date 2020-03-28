const num = 123

// 导入b.js中的内容：
// num as bNum 给导入的变量起别名，可以解决命名冲突的问题
// import { num as bNum } from './js/b'
// console.log(bNum)

// 一次性全部导入b模块中的内容：
// 如果导入所有内容，就不需要 {}
// * 表示所有内容， as 用来起别名
import * as bModule from './js/b'
console.log(bModule)
