// ★ 对象中, 属性简写形式  (对象中属性名不识别变量 属性值可以识别变量)
// 对象中的属性, 可以使用简写, 也可以不使用简写, 即简写和不简写可以混写, 能简写的简写, 不能简写的就不使用简写.

let name = "王春生"

// let obj = {
//     name: name,
//     sing: function () {
//         console.log("带MV的神话！！！")
//     }
// }


// // 1. 属性简写  如果属性值为变量, 且属性名和后面的属性值的变量名同名，就可以写成一个
// let obj = {
//     name
// }


// 2. 方法(函数属性)简写 : 这边也只是声明函数, 不会调用
let obj = {
    // 和之前一样, 也可以传参数, 参数可有可无, 若传参参数按顺序一一对应接受, 其他ES5中 如形参、函数名的命名规范, 参数总结, this指向, 作用域, 以及变量的查找顺序等所有其他与函数相关的特性, 都支持, 因为本质上就是函数
    // 格式: 函数名(参数列表) { 函数体 }
    // ★★★ 对象属性中函数的简写形式, 并不是箭头函数, 函数中是有this的, this指向还是和原来一样判断. (在哪个函数中, 该函数的调用模式)
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

