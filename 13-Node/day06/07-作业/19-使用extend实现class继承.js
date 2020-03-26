// ================================ 父类constructor不带参数 ========================
// class Person {
//     constructor() {
//         this.type = '人类'
//         this.money = 1000
//     }
//
//     sayHi() {
//         console.log('人类自带打招呼技能')
//     }
// }
// Person.iq = 150
//
// // Student继承了Person constructor中的实例属性, 原型继承了Person原型上的方法 => Student创建的实例自带Person中的实例属性, 且 可以访问Person原型上的方法
// // Student继承了Person的静态属性
// class Student extends Person {
//     // 不写constructor, 默认的constructor为
//     // constructor() {
//     //     super(); // 调用父类的constructor, 且在调用时, 内部实现了让this指向新创建出来的子类对象, 给创建出来的字类对象添加父类实例属性, 这样Student实例就拥有了父类中的实例属性
                       // 必须要调用super, 这样在子类的实例中才会有父类的实例属性
//     // }
// }
// console.log(Student.iq) // 150
// var stu1 = new Student()
// console.log(stu1) // Student { type: '人类', money: 1000 }
// stu1.sayHi() // 人类自带打招呼技能

// ================================ 父类constructor带参数 ========================
class Person {
    constructor(name, money) {
        this.name = name
        this.money = money
    }

    sayHi() {
        console.log('人类自带打招呼技能')
    }
}
Person.iq = 150

// Student继承了Person constructor中的实例属性, 原型继承了Person原型上的方法 => Student创建的实例自带Person中的实例属性, 且 可以访问Person原型上的方法
// Student继承了Person的静态属性
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        // 在写自己的实例属性时, 要先调用父类的constructor, 将父类的实例属性赋值给new出来的字类对象
        this.grade = grade
    }
    study() {
        console.log('我叫' + this.name + '我是一名' + this.grade + '年级的学生, 本职工作是学习')
    }
}
console.log(Student.iq) // 150
var stu1 = new Student('pp', 18, 6)
console.log(stu1) // Student { type: '人类', money: 1000 }
stu1.sayHi() // 人类自带打招呼技能
stu1.study() // 我叫pp我是一名6年级的学生, 本职工作是学习
