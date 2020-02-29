// function Person() {
//     this.name = "";
//     this.age = 18;
//     this.sayHello = function () {

//     }
// }

// var p = new Person();

// 实例成员:
// 函数原型上的属性和方法也叫做实例成员, 因为是通过实例访问的
// p.name
// p.age
// p.sayHello();

// 静态成员
// Person.prototype
// Person.friend = "Dog";
// Person.sayHi = function () { }

// 成员：  属性和方法的统称 (方法就是属性值为函数的属性, 也是属性)
// 实例成员： 指的就是通过实例访问的成员
// 静态成员： 指的就是通过构造函数本身访问的成员


// 在class中为构造函数添加静态成员
class Person {
    constructor() {
        // 在构造函数中可以为实例对象添加实例成员 (将来是通过实例来访问的)
        // 一般在constructor中添加的是实例的非函数属性, 函数属性一般都添加到原型上
        this.属性名 = 值;
    }

    // 这是一个实例方法 (因为将来是通过实例来访问的) ，添加到原型中去了！
    // 添加实例的函数属性 (方法) (属性值为函数的属性)
    sayHello() {

    }


    // 在方法前面加上static这个方法(属性值为函数的属性)就会加到构造函数上 作为静态成员, 静态方法
    // 这个方法是添加到函数(函数也是对象)上的, 实例无法访问, 只能函数本身访问
    static sayHi() {
        console.log("Hi");
    }

    // 静态属性, es6暂时不支持, 只能通过构造函数.属性名自己来添加了

}

Person.sayHi();


//$.ajax
//Array.isArray
//Object.create
