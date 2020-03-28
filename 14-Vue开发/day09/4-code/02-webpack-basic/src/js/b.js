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
