// 1. 对象解构赋值
// var name = '王思聪'
// let obj = {
//     name: '小红',
//     age: 14,
//     sing: function (name) {
//         console.log('我在听'+ name + '唱歌')
//     }
// }
//
// let { name: name1, age: age1, sing: singFn } = obj
// console.log(name1, age1, singFn)
// singFn('春哥')
//
// const { name, age, sing} = obj
// console.log(name, age, sing)
// sing('pp')

// 2. 数组结构
const arr = [{name: 'zs', age: 13}, {name: 'ls', age: 14}, {name: 'ww', age: 15}]

// let [,obj1, obj2 ] = arr
// console.log(obj1, obj2)

// 数组结构中使用剩余元素法 ...

let [obj1, obj2, ...obj] = arr
console.log(obj)


