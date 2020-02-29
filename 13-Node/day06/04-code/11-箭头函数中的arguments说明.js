// 箭头函数中没有arguments！！！

var func = () => {
    console.log(arguments);
}

func(123);

// arguments的作用
// 在函数被调用的时候，会将所有的实参存储到arguments对象中
// arguments是一个伪数组！！

// arguments什么时候使用？？？

// 参数个数不确定的情况下, 形参就不用写了, 直接写个(), 直接使用arugments来获取所有的实参


// function sum() {
//     var result = 0;
//     for (let i = 0; i < arguments.length; i++){
//         result += arguments[i];
//     }
//     return result;
// }

// sum(1)
// sum(1, 2)
// sum(1, 2, 3)

