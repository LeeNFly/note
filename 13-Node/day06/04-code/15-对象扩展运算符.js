var wcs = {
    name: "王春生",
    age: 18,
    sing() {
        console.log("解开王春生的鞋带！")
    }
}

// 使用...可以将对象中所有的属性给当前对象添加一份, 称为自己的属性！
var xiaowsc = { ...wcs, money: 9999999999999 };

console.log(xiaowsc) // {name: "王春生", age: 18, money: 9999999999999, sing: ƒ}
