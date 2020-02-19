

// 剩余参数只能有一个，并且只能是参数列表的最后一个！！

// 剩余参数是一个真数组！！ 可以使用任何数组的方法！！

function func(...a) {
    console.log(a);
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