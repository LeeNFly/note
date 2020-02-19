// function Person() {
//     this.name = "王春生";
//     this.age = 39;
// }

// function Student() {
//     Person.call(this);
// }

// var stu = new Student();


class Person { 
    constructor() {
        this.name = "王春生";
        this.age = 39;
    }

    sayHi() {
        
    }

    static Run() {
        console.log("快跑，打雷了");
    }
}

class Student extends Person{
    constructor() {
        super();
    }
}

Student.Run();