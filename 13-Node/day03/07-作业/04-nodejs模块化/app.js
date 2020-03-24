var path = require('path')
var moduleA_export = require(path.join(__dirname, 'moduleA.js'))
console.log('执行app.js')

console.log(moduleA_export)


