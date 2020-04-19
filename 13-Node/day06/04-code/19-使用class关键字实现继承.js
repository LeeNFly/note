/*
 * @Author: Ling Hui Shi
 * @Date: 2019-01-07 22:37:30
 * @LastEditors: Ling Hui Shi
 * @LastEditTime: 2020-04-19 17:34:07
 * @Description: 
 */
// class Person {
//     constructor() {
//         this.name = "王春生";
//         this.age = 38;
//     }
//
//     sing() {
//         console.log("一次就好！！！");
//     }
// }
//
// // 默认实现了实现了原型继承和静态成员继承, 即Student实例可以访问Person原型上的属性; Student函数可以使用Person函数的静态成员(Person函数的属性)
// // 需要手动实现借用构造函数继承, 通过super(), 调用Person中的constructor属性, 继承Person中constructor中的实例属性(实例成员)
// class Student extends Person{
//     // 若不写constructor, 则默认自带的constructor中自带了super调用, 创建的实例也可以继承到Person中constructor中的实例成员
//     constructor() {
//         // 自己手写constructor:
//         // 子类构造函数constructor中第一句代码就需要调用一下父类的构造函数
//         // 借用父类的构造函数, 继承父类constructor中的属性, 是实例含有父类constructor中的属性
//         // super就是父类的构造函数constructor,  ( 相当于调用父类的constructor, 类似于借用构造函数, Person.call(this) )
//         // 并且在调用父类的构造函数constructor时, ★ 其内部自己实现了this指向刚创建出来的Student, 也就是子类对象, 给刚创出来的Student, 子类对象, 添加父类的constructor函数中的属性
//         super();
//         // 给实例添加自身的属性
//         this.stuNo = 10086;
//
//
//     }
//
//     // 添加实例自身的函数属性 (方法), 添加到Student的原型上
//     coding() {
//         console.log("console.log('我在敲代码')")
//     }
// }

// var stu = new Student();
// console.log(stu);
// stu.sing();
// stu.coding();


// super传参的情况
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sing() {
        console.log("一次就好！！！");
    }
}

class Student extends Person{
    constructor(name, age) {
        // 调用父类的构造函数constructor, 并传递new时的参数, 让创建的字类对象Student拥有父类构造函数constructor中的属性, 并且赋予传递的初始值,
        // 调用super时, 若没传递实参的话, super中若有形参, 形参都是undefined; 有传递实参的话, super中形参的值就是传递的实参的值 (一一对应)
        super(name, age);
        this.stuNo = 10086;

    }

    coding() {
        console.log("console.log('我在敲代码')")
    }
}

var stu = new Student("王春", 25);
console.log(stu);
stu.sing();
stu.coding();
