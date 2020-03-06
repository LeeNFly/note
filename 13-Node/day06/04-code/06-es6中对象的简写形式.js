// ★ 对象中, 属性简写形式
let name = "王春生"

// let obj = {
//     name: name,
//     sing: function () {
//         console.log("带MV的神话！！！")
//     }
// }


// // 1. 属性简写  如果属性名和后面的属性值的变量名同名，就可以写成一个
// let obj = {
//     name
// }


// 2. 方法(函数属性)简写 : 这边也只是声明函数, 不会调用
let obj = {
    // 和之前一样, 也可以传参数
    sing () {
        console.log("带MV的神话！！！")
    }
}


let obj = {
    name,
    sing () {
        console.log("带MV的神话！！！")
    },
    dance () {
        console.log("带MV的神话！！！")
    }
}

console.log(obj.dance)
// 这个对象有3个属性, name, sing, 和 dance, 其中, sing 和 dance 的属性值是函数

// obj.sing();


// $.ajax({
//     success () {

//     }
// })

