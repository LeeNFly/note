// 箭头函数中没有arguments！！！ 那在箭头函数中对于形参个数不定时, 如何获得传递的所有形参?

// 作用位置, 在函数的 ★ 形参 中使用剩余参数

// 剩余参数在形参列表中只能有一个，并且只能是参数列表的最后一个！！

// 剩余参数是一个真数组！！ 可以使用任何数组的方法！！

// 会将剩余的实参封装成一个数组, 赋值给这个剩余参数形参, 所以剩余参数形参的值一定是一个数组, 并且是真数组, 可以使用数组的方法

// 不管是之前ES5中的三种声明函数的方式 还是 ES6中的箭头函数声明函数的方式, 都可以使用剩余参数

// function func(...a) {
//     console.log(a); // [1, 2, 3, 4]
//     console.log(Array.isArray(a));
// }
//
// func(1, 2, 3, 4);

function func(a, ...b) {
    console.log(b); // [2, 3, 4]
    console.log(Array.isArray(a));
}

func(1, 2, 3, 4);



// 在箭头函数中如果要获取不定个数的实参，就可以使用剩余参数！！

var sum = (...arr) => {
    var result = 0;
    arr.forEach(v => {
        result += v;
    })
    return result;
}

sum(1)
sum(1, 2)
sum(1, 2, 3, 4)



var fakeArr = {
    0: "王春生",
    1: "方玮",
    2: "蒋鹏",
    length: 3,
    forEach(callback) {
        for (var i = 0; i < this.length; i++){
            callback(this[i], i);
        }
    }
}

fakeArr.forEach();
