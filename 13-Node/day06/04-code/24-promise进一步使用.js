// function timeout(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve();
//         }, time);
//     })
// }


// .then连写的时候，需要在回调函数中返回一个新的Promise对象
// timeout(1000)
//     .then(function () {
//         console.log("1s后执行的代码");
//         return timeout(1000);
//     }).then(function () {
//         console.log("2s后执行的代码了")
//         return timeout(1000);
//     }).then(function () {
//         console.log("3s后执行的代码了")
//         return timeout(1000);
//     })

// ajax({
//     url: "xxx",
//     type: "get"
// }).then(function (data) {
//     return ajax()
// }).then(function () {

// })






// promise的catch说明
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