class Person { 
    constructor() {
        this.name = "王春生";
        this.age = 38;
    }

    sing() {
        console.log("一次就好！！！");
    }
}

class Student extends Person{
    constructor() {
        // 子类构造函数中第一句代码就需要调用一下父类的构造函数
        // super就是父类的构造函数
        super();
        this.stuNo = 10086;
    }

    coding() {
        console.log("console.log('我在敲代码')")
    }
}

var stu = new Student();
console.log(stu);
stu.sing();
stu.coding();