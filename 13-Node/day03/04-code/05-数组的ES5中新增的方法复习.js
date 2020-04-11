var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2];

// 以下遍历数组的顺序都是按照数组中索引号从小到大进行遍历
// 每个元素都调用一次此函数, 其原理就是将数组中每个元素的值 和 索引 依次 赋值 给 item 和 index, 注意, 赋的是值而非变量
// 如果是赋基本数据类型的值, 则赋值前后互不影响, 在回调函数中对item进行赋值, 也不会改变数组中原来的元素的值的
// 如果赋的是引用数据类型, 则在回调函数中若item对引用地址里的数据做出修改, 则原数组中对应元素也会发生改变. 若不是对引用地址里的数据修改, 而是给item赋新的值, 则不会改变原数组中的数据

// 1. 遍历 forEach
// arr.forEach(function (v, i) {
//     console.log(v + "====>" + i);
// })

// 2. 映射 map

// 想要获取一个新数组，新数组中的元素是 arr中元素的2倍
// [2, 4, 6, 8, 10, 12, 14, 16, 18]

// var newArr = [];
// arr.forEach(function (v, i) {
//     newArr.push(v * 2);
// })
// console.log(newArr);

// 遍历数组中的每个元素, 每个元素调用一次该函数
// 创建一个新的数组, 将每次调用函数的返回值加入到这个数组中
// map方法最后返回创建的新的数组
// var newArr = arr.map(function (v, i) {
//     return v * 2;
// })
// console.log(newArr);

// 3. some
// 遍历数组中每个元素,  每个元素调用一次该函数
// 判断数组中是否有任意元素满足指定条件
// 只要有一个元素满足条件 (函数return true, 布尔值, 就是满足条件) , 就返回布尔值true, 且停止遍历数组, 否则返回布尔值false
// 判断数组里有没有偶数
// some方法最终的返回值为一个布尔值
// var flag = arr.some(function (v, i) {
//     return v % 2 == 0;
// })

// console.log(flag);

// 4. every
// 遍历数组中每个元素,  每个元素调用一次该函数
// 判断数组中是否所有元素都满足条件
// 数组中所有元素都满足条件 (函数return true, 布尔值, 就是满足条件) , 就返回true, 否则返回false
// 判断数组是否全是奇数
// var flag = arr.every(function (v, i) {
//     return v % 2 != 0;
// })
// console.log(flag);

// 5. 在数组中查找第一个满足条件的元素 
// 遍历数组,  每个元素调用一次该函数
// 若当前遍历的元素满足条件 (函数return true, 布尔值, 就是满足条件) , 则停止遍历数组并返回这个元素
// 若没有满足条件的元素, 返回undefined
// var firstEven = arr.find(function (v, i) {
//     return v % 2 == 0;
// })

// console.log(firstEven);

// 6. 在数组中找★所有满足条件的元素
// 遍历数组  每个元素调用一次该函数
// 创建一个新的数组, 若当前遍历的元素满足条件 (函数return true, 布尔值, 就是满足条件) , 则将当前遍历的元素加入到新的数组中, 并且继续往下遍历
// 最后返回这个新的数组
// 若没有满足条件的元素, 则返回[]空的数组
// var newArr = arr.filter(function (v, i) {
//     return v % 2 != 0;
// })

// console.log(newArr)

// 7. findIndex
// 遍历数组  每个元素调用一次该函数
// 返回数组中 ★ 第一个满足条件(函数return true, 布尔值, 就是满足条件)的元素的 ★索引号 , 不会改变数组

// var index = arr.findIndex(item => item === 2)
// var index = arr.findIndex(function (item) {
//     return item === 2
// })

// console.log(index);

// 以上所有你们函数都可以使用箭头函数及箭头函数的简写方式来改造
