var path = require('path')
require(path.join(__dirname, 'moduleB.js'))
console.log('引入了模块A, 执行了模块A')

// module.exports.name = 'zs'
// module.exports = 3
module.exports = {name: 'pp', age: 13}

