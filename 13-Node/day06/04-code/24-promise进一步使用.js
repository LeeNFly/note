// function timeout(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve();
//         }, time);
//     })
// }


// .then连写的时候，需要在上一个.then方法的回调函数中返回一个新的Promise对象
// timeout(1000)
//     .then(function () {
//         console.log("1s后执行的代码");
//          1. 回调函数中return的值会被用来调用下一个.then, 所以我们需要在回到函数中返回一个Promise对象
//          2. 如果不return, 则默认会return一个空的Primise对象
//         我们需要让下一个.then中的回调函数在一秒后执行
//         return timeout(1000); // 返回我们自己封装的Promise对象, 并且由于创建了Promise对象, 所以Promise中function会被执行一次, 且创建的Promise作为下一个.then时使用的promise对象
//     }).then(function () {
//         console.log("2s后执行的代码了")
//         return timeout(1000);
//     }).then(function () {
//         console.log("3s后执行的代码了")
//         return timeout(1000);
//     })

// 由以上可知, 我们可以将所有的回调函数, 封装成一个Promise对象, 然后通过.then中创建并返回这个Promise对象, 作为下一个.then的Promise, 来解决回调地狱问题

// ajax({
//     url: "xxx",
//     type: "get"
// }).then(function (data) {
//     return ajax()
// }).then(function () {

// })





// promise的catch说明
// 可以把失败的回调函数写在.catch中
function timeout(time) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("某个异步操作完成了")
            resolve(Math.random());
        }, time);
    })
}

// timeout(1000)
//     .then(function () { })
//     .catch(function () { })


// Promise的静态方法
// Promise.all:  在所有的Promise异步操作完成之后，执行某个任务就可以使用Promise.all
// Promise.race: 在第一个Promise异步操作完成之后，就执行某个任务


// var arr = [timeout(1000), timeout(2000), timeout(1500)];

// Promise.all(arr).then(function (data) {
//     console.log("所有的异步操作都完成了", data);
// })

// Promise.race(arr).then(function () {
//     console.log("某个异步操作率先完成了");
// })
