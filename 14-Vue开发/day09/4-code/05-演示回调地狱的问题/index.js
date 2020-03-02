const fs = require('fs')

// 需求: 按照顺序读取 a/b/c 文件的内容
function readFile(filePath, callback) {
  fs.readFile(filePath, function(err, data) {
    callback(data.toString())
  })
}

readFile('./data/a.txt', function(data) {
  console.log('a: ', data)

  readFile('./data/b.txt', function(data) {
    console.log('b: ', data)

    readFile('./data/c.txt', function(data) {
      console.log('c: ', data)

      readFile('./data/d.txt', function(data) {
        console.log('d: ', data)
      })
    })
  })
})

/* fs.readFile('./data/a.txt', function(err, data) {
  console.log('a：', data.toString())

  fs.readFile('./data/b.txt', function(err, data) {
    console.log('b：', data.toString())

    fs.readFile('./data/c.txt', function(err, data) {
      console.log('c：', data.toString())

      fs.readFile('./data/d.txt', function(err, data) {
        console.log('d：', data.toString())
      })
    })
  })
}) */
