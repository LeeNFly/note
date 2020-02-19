# Node.js 第六天

## npm上传包
npm login
npm publish

## npm制作CLI
1. 先创建包
2. 编写代码实现相应的功能（创建文件。。。。）
3. 在代码第一行加上 #! node
4. 在package.json中添加 bin属性
    1. bin属性就是制定一个命令的名称，以及命令对应的要执行的文件
    2. 最终进行安装之后，命令行中就可以使用这个命令了！
5. 上传包
6. 全局安装包
7. 使用 命令 
   
## ES6

### 变量相关的
let
const

1. 都不可以重复声明
2. 都有块级作用域

const必须在声明的时候赋值
const声明的变量不能被修改值

### 对象相关的
1. 对象的简写
```js
var name = "王春生"；

var obj = {
    name: name
}
// 简写如下
var obj = {
    name
}


var obj = {
    sayHello: function(){

    }
}

// 简写如下
var obj = {
    sayHello(){

    }
}
```

### 解构赋值
```js
// 1. 对象的解构
var obj = {
    name: "",
    age: 18
}
// 可以自动将对对象中指定的属性的值赋值给一个新的变量
var {对象的属性名: 要声明的变量名, 对象的属性名: 要声明的变量名, }
var {name, age} = obj;

// 2. 数组的解构
var arr = [1, 2, 3]
var [num1, num2, num3] = arr;
var [,,num3] = arr;
```

### 剩余元素
1. 只能有一个
2. 必须是最后一个
```js
var arr = [1, 2, 3]
var [num1, ...num2] = arr;
// num2 获取到的就是剩余的元素  2,3组成的数组
```

### 剩余参数
```js
// 在函数的参数列表中可以使用剩余参数来获取传入的实参
// 1. 只能有一个
// 2. 必须是最后一个
// 3. 剩余参数是一个真数组！

function test(a, ...b){

}

test(1, 2, 3, 4, 5)
```

### 箭头函数
```js
var func = (参数) => {
    // 函数体
}
// 1. 如果只有一个参数则()省略
// 2. 如果函数体只有一句代码则{}省略
// 3. 如果函数体只有一句代码并且是个返回语句则{}和return都可省略
```

#### 箭头函数中没有this
在箭头函数中访问this的时候会沿着作用域链向上进行查找
使用场景： var that = this; 的情况都可以使用箭头函数来解决

#### 箭头函数中没有arguments
如果要在箭头函数中使用不定个数的参数，则直接用剩余参数

### 对象扩展运算符...
```js
var p = {
    name: "",
    age: 18
}

var s = {...p, 自己的属性}
```

### 数组的拆解...
```js
function sum(a, b, c){}
var arr = [1, 2, 3];
sum(...arr)
```

### class
```js
class 类名{
    constructor(){
        // 给实例添加属性
    }

    // 给实例添加方法，方法会被添加到原型中
    sayHello(){}

    // 给构造函数添加静态方法
    static 方法名(){}
}
```

实现继承
```js
class Person(){
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello(){}
    static sayHi(){}
}

class Student extends Person{
    constructor(name, age){
        super(name, age)
        // 写自己的属性
        this.属性名 = ""
    }

}

var stu = new Studnet("", 18)
```

### 模板字符串
```js
var name = "王春生"
var age = 45
var str = `我叫${name},
我今年${age}岁`
```

### Promise
Promise是用来解决回调地狱问题。

#### 使用别人提供的promise的api
只要别人说支持promise，那我们就知道可以使用.then方法了

#### 自己封装Promise的api
```js
function timeout(time){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            // 只需要改变promise的状态即可
            resovle(123);
        }, time)
    })
}

timeout(1000).then(function(){

})
```

.then方法可以传递两个参数，一个是成功的回调一个是失败的回调

.then方法可以连写，但是连写的时候一定要在上一个.then方法中返回一个新的promise对象


Promise.all 在所有的promise都成功之后，可以进行某些操作
Promise.race 在第一个的promise成功之后，可以进行某些操作