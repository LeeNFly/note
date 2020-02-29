// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.sayHello = function () {

// }

// var p = new Person("王春生", 18);

// console.log(p);


// function Person() {

// }

// var p = new Person();
// console.log(p);

// 类似于之前对象中学的自定义构造函数, 用来创建js对象的
// class 类名, 类名不能与之前声明的构造函数或函数名重复
class Person{
    // 在使用类名创建js对象的时候, 会调用constructor函数 (constructor函数又称为构造函数), 传递new时的参数, 给创建的对象添加属性并赋值
    // 如果不写constructor函数, 默认会提供一个空的constructor函数, 创建出来的就是空对象
    // 如果提供了constructor函数, 则创建对象时使用提供了的constructor函数
    constructor(name, age) { // 可以定义形参, 接收new 时 传递的参数
        // 在constructor中:
        // 添加实例自身的属性, 属性值可以是任意类型 可以是函数
        // 不过函数属性一般不在实例自身上加, 而是添加到构造函数的原型上
        // 在constructor中一般不添加函数属性 (即方法)
        this.name = name;
        this.age = age;
    }

    // 之前自定义构造函数给实例加函数属性(方法), 我们都是加到构造函数的原型上的,
    // Person.prototype.sayHello = function () {

    // }

    // 在类中, 我们通过以下方式给实例(对象)添加函数属性 (方法), 且仅通过这种方式添加的函数属性 (方法) , 会自动添加到构造函数的原型上！！
    sayHello() {
        console.log("Hello");
    }
    // 注意: 若以sayHello = () => { ... }, 这种方式添加的函数属性, 不是添加到构造函数的原型上的, 是添加到实例自身上
}

// 使用class创建js对象, 返回的是创建的js对象
// 语法: new 类名 (参数列表)
var p = new Person("王春生", 18);
// new 做了几件事情 4件  (记住) 执行顺序与以下顺序一致
// 1. 创建一个新的js空对象 {}  (开辟了一块新的内存空间)
// 2. this指向了这个新对象 (新对象就有了属性)
// 3. 执行(调用)constructor (new时 的实参会传递给constructor) , 执行其函数体 (给对象添加属性和方法)
// 4. 返回这个js新对象 (返回这个新对象的地址)
console.log(p);
