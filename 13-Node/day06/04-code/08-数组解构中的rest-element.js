let arr = [1, 2, 3, 4, 5];

// ... 语法在数组解构赋值中叫做 RestElement
// 剩余元素！！
// ... + 剩余元素

// 1. 一次数组结构赋值中, 剩余元素只能有一个！ let [...num2, num1, ...num3] = arr; 写法错误
// 2. 剩余元素只能是最后一个元素, let [...num2, num1] = arr; 写法错误
// 3. 注意, 用剩余元素法, 将来是将元素封装成数组, 赋值给这个剩余元素变量, 即剩余元素变量最后拿到的值为数组形式, 可以使用数组的方法

let [num1, ...num2] = arr;
// 可以是let声明, 也可以是const声明
console.log(num2); // [2, 3, 4, 5]
