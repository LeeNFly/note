var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


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

// 遍历数组中的每个元素, 每个元素调用一次函数
// 创建一个新的数组, 将每次调用函数的返回值加入到这个数组中
// 最后返回创建的新的数组, 不会改变原来的数组
// var newArr = arr.map(function (v, i) { 
//     return v * 2;
// })
// console.log(newArr);

// 3. some
// 遍历数组中每个元素, 判断数组中是否有任意元素满足指定条件
// 只要有一个元素满足条件 (函数return true就是满足条件) , 就返回true, 否则返回false
// 判断数组里有没有偶数
// var flag = arr.some(function (v, i) {
//     return v % 2 == 0;
// })

// console.log(flag);

// 4. every
// 遍历数组中每个元素, 判断数组中是否所有元素都满足条件
// 数组中所有元素都满足条件 (函数return true就是满足条件) , 就返回true, 否则返回false
// 判断数组是否全是奇数
// var flag = arr.every(function (v, i) { 
//     return v % 2 != 0;
// })
// console.log(flag);

// 5. 在数组中查找第一个满足条件的元素
// 遍历数组, 若当前遍历的元素满足条件 (函数return true就是满足条件) , 则停止遍历数组并返回这个元素
// 若没有满足条件的元素, 返回undefined
// var firstEven = arr.find(function (v, i) {
//     return v % 2 == 0;
// })

// console.log(firstEven);

// 6. 在数组中找所有满足条件的元素
// 遍历数组
// 创建一个新的数组, 若当前遍历的元素满足条件 (函数return true就是满足条件) , 则将该元素加入到新的数组中
// 最后返回这个新的数组
// 若没有满足条件的元素, 则返回[]空的数组
// var newArr = arr.filter(function (v, i) {
//     return v % 2 != 0;
// })

// console.log(newArr)