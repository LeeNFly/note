const fs = require('fs')

// 使用Promise封装异步操作
function readFile(path) {
  const p = new Promise(function(resolve, reject) {
    fs.readFile(path, function(err, data) {
      if (err) {
        return reject(err)
      }

      resolve(data.toString())
    })
  })
  return p
}

// async 和 await 是异步编程的终极解决方案
async function fn() {
  // await 的返回值是 后面Promise 成功的结果，也就是 resolve 方法的参数
  try {
    // await 拿到的是resolve(参数)成功时传递的数据
    const a = await readFile('./data/aa.txt')
    console.log(a)
  } catch (err) {
    // 在catch中, 可以通过err拿到reject('参数')失败时传递的数据, 并继续往下执行catch中代码
    console.log('出错了：', err)
  }
  // 要想拿到失败时的数据, 要用try/catch语法

  const b = await readFile('./data/b.txt')
  const c = await readFile('./data/c.txt')
  const d = await readFile('./data/d.txt')

  console.log(b)
  console.log(c)
  console.log(d)
}

fn()

console.log('abc')

// Promise是可以无限调用  then 方法的
// 每一个后面的 then ，都可以获取到前一个 then 的返回值
/* 
readFile('./data/a.txt')
  .then(function(data) {
    console.log('a: ', data)
    return readFile('./data/b.txt')
  })
  .then(function(data) {
    console.log('b: ', data)
    return readFile('./data/c.txt')
  })
  .then(function(data) {
    console.log('c: ', data)
    return readFile('./data/d.txt')
  })
  .then(function(data) {
    console.log('d: ', data)
  })
 */
/* function readFile(path, callback) {
  fs.readFile(path, function(err, data) {
    callback(data)
  })
}
 */
