let fn = _ => '模板字符串测试信息'
let a = 3
// let tempStr = `我是模板字符串, 内容为${fn()}`
// let tempStr = `我是模板字符串, 内容为${3 > 5}`
let tempStr = `我是模板字符串, 内容为${a > 5}`

console.log(tempStr)
