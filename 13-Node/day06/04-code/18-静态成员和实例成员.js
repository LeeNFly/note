// function Person() { 
//     this.name = "";
//     this.age = 18;
//     this.sayHello = function () { 

//     }
// }

// var p = new Person();

// p.name
// p.age
// p.sayHello();

// Person.prototype
// Person.friend = "Dog";
// Person.sayHi = function () { }

// 成员：  属性和方法的统称
// 实例成员： 指的就是通过实例访问的成员
// 静态成员： 指的就是通过构造函数本身访问的成员


// 在class中为构造函数添加静态成员
class Person { 
    constructor() {
        // 在构造函数中可以为对象添加实例成员
        this.成员名 = 值;
    }

    // 这是一个实例方法，添加到原型中去了！
    sayHello() {
        
    }


    // 在方法前面加上static这个方法就会加到构造函数上 作为静态成员
    static sayHi() {
        console.log("Hi");
    }

}

Person.sayHi();


//$.ajax
//Array.isArray
//Object.create