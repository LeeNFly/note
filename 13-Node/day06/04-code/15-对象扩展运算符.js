var wcs = {
    name: "王春生",
    age: 18,
    sing() {
        console.log("解开王春生的鞋带！")
    }
}
var wjl = {
    house: 'more'
}

// 使用...可以将对象中所有的属性给当前字面量创建的对象添加一份, 成为自己的属性！ (添加到自身的属性中, 而非原型上)
// 对象扩展运算符可以有多个
var xiaowsc = { ...wcs, ...wjl, money: 9999999999999 }; // 将wcs对象中的所有属性拷贝到新创建的对象中

console.log(xiaowsc) // {name: "王春生", age: 18, money: 9999999999999, sing: ƒ}

// 用在数组中
var arr = ['刘备', '张飞', '赵云']
var arr2 = ['曹操', '典韦', '许褚']

var arr3 = [...arr, ...arr2]
console.log(arr3);