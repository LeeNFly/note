function Person(name, age) { 
    this.name = name;
    this.age = age;
}

// Person.prototype.sayHello = function () { 

// }

var p = new Person("王春生", 18);

// console.log(p);


// function Person() {
    
// }

// var p = new Person();
// console.log(p);


class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // 在类中的方法会自动添加到构造函数的原型中！！
    sayHello() {
        console.log("Hello");
    }
}


var p = new Person("王春生", 18);
console.log(p);
