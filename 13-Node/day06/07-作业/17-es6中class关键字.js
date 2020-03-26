class Person {
    constructor(name, age) {
        // 实例属性
        this.name = name
        this.age = age
    }
    // 原型属性
    sayHi() {
        console.log('大家好, 我的名字是' + this.name + ',我今年' + this.age + '岁了')
    }
}
const per = new Person('张三', 18)

console.log(per)
per.sayHi()
