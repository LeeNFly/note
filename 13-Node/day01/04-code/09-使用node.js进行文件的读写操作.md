# node.js文件读写操作
node.js中对于文件的读写使用fs模块

fs模块需要在使用之前进行引入
`var fs = require('fs')`


## 写文件（异步）

fs.writeFile(file, data, encoding, callback)
file: 文件路径
data: 要写入文件的内容
encoding: 文件的字符编码格式
callback: 写入完成之后的回调函数

如果文件存在，则会进行覆盖！

如果找不到目录，则会报错！！ ENOENT， no such file or directory

## 读文件（异步）

fs.readFile(path, encoding, callback)
path: 要读取的文件的路径
encoding: 文件的字符编码格式 默认是null
callback: 读取完成之后的回调函数


## 读写文件的同步方法
fs.writeFileSync
fs.readFileSync


