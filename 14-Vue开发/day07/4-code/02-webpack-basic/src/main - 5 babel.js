// babel 是用来将 最新的JS 语法转化为浏览器能够识别的语法

// JS 语法的规范： ECMAScript
// es5
//
// ES6 ---> ES2015
// ES7 ---> ES2016
// ES8 ---> ES2017
// ES9 ---> ES2018
// ...
//
// 一般我们说 ES6 就表示JS最新的语法特性

// JS语法提案的流程：

class Person {
  constructor() {
    this.name = 'jack'
  }
}

const p = new Person()
console.log(p.name)

const obj = {
  name: 'jack',
  age: 19
}

// 对象扩展运算符不是一个标准的ECMAScritp语法
const obj1 = { ...obj, gender: 'male' }
console.log(obj1)
