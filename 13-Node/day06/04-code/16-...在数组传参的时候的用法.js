function sum(a, b, c) {
    return a + b + c;
}

var arr = [1, 2, 3];

// ... 在下面的场景中就相当于将数组所有元素拆解开一次传递给函数形参了！
console.log(sum(...arr));


// sum.apply(null, arr);