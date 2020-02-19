let arr = [1, 2, 3, 4, 5];

// ... 语法在数组解构赋值中叫做 RestElement
// 剩余元素！！

// 1. 剩余元素只能有一个！
// 2. 剩余元素只能是最后一个元素

let [num1, ...num2] = arr;

console.log(num2);