// babel 是用来将 最新的JS 语法转化为浏览器能够识别的语法(转化成老的语法, 浏览器可以识别和认识), 并且保持原有逻辑不变!!! babel是处理js文件的
// ★ 有了babel之后, 我们就可以放心大胆的使用js最新语法了(ES6 ES7 ES8 ... 所有JS最新语法), 不用再担心浏览器不兼容问题了,
// 因为babel都会帮我们对js代码进行转换成浏览器识别的语法(老的, 浏览器兼容的语法, 比如转化成es5语法), 即转换成浏览器兼容的语法,  并且保持原有逻辑不变!!!

// 使用步骤:
// 1. 安装 npm i -D babel-core babel-loader@7  (babel核心包以及babel的loader处理器)
//         npm i -D babel-preset-env (包含ES6, ES7, ES8 ... 以及最新的ES标准语法, 用作语法支持的, 将来转化时需要用到)

// 2. 在webpack配置文件webpack.config.js中module的rules中进行配置 (详见webpack.config.js)
// 3. 在项目根目录 (与webpack.config.js同级目录) 创建.babelrc文件并配置 (详见.babelrc配置文件)
//    将来babel-loader运行的时候, 会检查。babelrc这个配置文件, 并读取相关的语法和插件配置进行处理
// .babelrc文件配置:
//  {
//    "presets": ["env"]
//  }
// 问题:
// 对象扩展运算符 { ...obj } 不是一个标准的ECMAScritp语法, 而babel-preset-env只能支持标准的ES语法
// 解决:
//    1. npm i -D babel-preset-stage-2,
//      安装stage-2语法支持, 支持草案阶段的语法(还未被归入ES标准语法), 而对象扩展运算符就在这个草案语法里
//      草案阶段, 基本上被浏览器支持以及基本上称为下代ES的标准语法, 所以推荐只安装草案阶段stage-2的语法支持即可
//    2. 在.babelrc中添加语法支持配置
// .babelrc文件配置:
//  {
//    "presets": ["env", "stage-2"]
//  }


// 拓展:
// JS 语法的规范： ECMAScript 简称ES
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


