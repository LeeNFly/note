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

// var newArr = arr.map(function (v, i) { 
//     return v * 2;
// })
// console.log(newArr);

// 3. 判断数组中是否有任意元素满足指定条件
// 判断数组里有没有偶数
// var flag = arr.some(function (v, i) {
//     return v % 2 == 0;
// })

// console.log(flag);

// 4. 判断数组中是否所有元素都满足条件
// 判断数组是否全是奇数
// var flag = arr.every(function (v, i) { 
//     return v % 2 != 0;
// })
// console.log(flag);

// 5. 在数组中查找第一个满足条件的元素

// var firstEven = arr.find(function (v, i) {
//     return v % 2 == 0;
// })

// console.log(firstEven);

// 6. 在数组中找所有满足条件的元素
// var newArr = arr.filter(function (v, i) {
//     return v % 2 != 0;
// })

// console.log(newArr)