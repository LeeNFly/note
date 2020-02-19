// setTimeout(function () {
//     console.log('1s后要做的事情')
//     setTimeout(function () {
//         console.log('2s后要做的事情')
//         setTimeout(function () {
//             console.log('3s后要做的事情')

//         }, 1000)
//     }, 1000)
// }, 1000)


// Promise 就是用来解决回调地狱问题的

// 1. 使用别人写好的Promise api
// .then

// axios: 这是一个用来发送ajax请求的库 这个库支持Promise

// 支持promise就意味着可以使用.then方法来使用回调函数
// .then方法有两个参数，第一个是成功的回调，第二个是失败的回调

// axios({
//     url: "",
//     data: {},
//     method: "get"
// }).then(function (data) { 

// })




// 2. 自己封装Promise给别人使用

// Promise对象有.then方法，可以用来传递回调函数

// setTimeout(function () { 

// }, 1000)


// Promise对象有三种状态
// 1. pending: 挂起 正在执行
// 2. fullfilled: 成功 已经执行完毕并且结果是成功的
// 3. rejected: 失败 已经执行完毕并且结果是失败的


function timeout(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { 
            // 当异步操作完成之后，我们不需要考虑要执行什么回调函数
            // 只需要考虑改变当前Promise的状态就可以了

            // 1. resolve函数调用可以将当前promise改变为成功
            // 2. reject函数调用可以将当前promise改变为失败

            // resolve和reject函数都可以传递参数给回调函数！
            // reject(123);
        }, time)
    });
}


timeout(2000).then(function (data) { 
    console.log("1s 后执行了代码", data)
}, function () { 
    console.log("异步操作失败了")
})
