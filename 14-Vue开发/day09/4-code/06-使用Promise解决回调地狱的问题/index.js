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

// Promise是可以无限调用  then 方法的
// 每一个后面的 then ，都可以获取到前一个 then 的返回值

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

/* function readFile(path, callback) {
  fs.readFile(path, function(err, data) {
    callback(data)
  })
}
 */
