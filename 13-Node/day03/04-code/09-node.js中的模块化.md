# 模块化

## 概念
将代码按照一定的规则，拆分成一个个小单元（模块）的过程，称之为模块化！

## 模块化标准
1. AMD： 异步模块定义  Async Module Definetion  require.js
2. CMD： 通用模块定义  Common Module Definetion  sea.js
3. CommonJS: node.js模块化标准

标准的意义在于，让模块更加通用！！

## 学习模块化学什么？？
1. 如何定义模块
2. 如何引用模块

## 模块化的意义
1. 便于代码维护
2. 便于代码复用

## node.js的模块化

### 定义模块
一个js文件就是一个模块

每个模块有自己单独的作用域！

### 引用模块
require函数就可以用来引用模块
```js
// js文件在引入的时候，.js后缀可以省略
require(模块文件的路径)
```

### 模块导出项的设置和接收

1. 设置模块导出项
```js
module.exports.属性名 = 要导出的内容

module.exports = 要导出的内容
```

2. 获取模块的导出项
模块的导出项会被作为require函数的返回值！ 直接接收即可
```js
var 导出项 = require("模块路径")
```


module.exporst和exports都可以用来导出内容
但是，exports只能给对象中添加属性来导出内容
```js
exports.名字 = 导出项
```
exports不能直接赋值，复制之后没意义
```js
exports = 导出项；  //这种方式不可以！！！
```