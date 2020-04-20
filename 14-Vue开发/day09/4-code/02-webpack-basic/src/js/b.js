/*
 * @Author: Ling Hui Shi
 * @Date: 2020-03-29 12:32:38
 * @LastEditors: Ling Hui Shi
 * @LastEditTime: 2020-04-20 22:46:43
 * @Description: 
 */
// export const num = 888
// export const str = 'bbbbbb'

// 还可以如下导出
const num = 888
const str = 'bbb'

function fn() {
  console.log('b：', num)
}

// 直接导出一个对象, 然后在导入的{}中一一对应同名接收
export { num, str, fn }

// export 和 export default 可以同时使用, export可以导出多次, export default 只能导出一次
// 在导入的时候 以不同的方式进行接收
const num1 = 999
export default num1


// 导出语法3: 
// export const a1 = 1

// const a2 = {name: 'zs}

// export a2

// 可以在导入时 import { a1, a2 } from './b.js' 在当前作用域声明变量并获取导出值