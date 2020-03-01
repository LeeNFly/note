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
// ★★★ promise可以用在所有需要使用回调函数的地方

// 1. 使用别人写好的Promise api
// .then

// axios: 这是一个用来发送ajax请求的库 这个库支持Promise
// 不一定ajax才能使用promise, promise可以用在所有有回调函数的地方

// 只要是支持promise就意味着可以使用.then方法来使用回调函数
// .then方法有两个参数，第一个是成功的回调 (会在成功后调用)，第二个是失败的回调 (会在失败后调用) , 第二个参数可以不传
// 如果回调函数中还有需要调用的函数, 则继续.then()下去, 下一个.then会在上一个.then执行完后调用

// axios({
//     url: "",
//     data: {},
//     method: "get"
// }).then(function (data) {

// })




// 2. 自己封装Promise给别人使用


// ★★★ Promise对象有.then方法，可以用来传递回调函数
// Promise对象通常配合then方法使用
// .then方法有两个参数，第一个是成功的回调，第二个是失败的回调, 第二个参数可以不传


// setTimeout(function () {

// }, 1000)


// Promise对象有三种状态
// 1. pending: 挂起 正在执行
// 2. fullfilled: 成功 已经执行完毕并且结果是成功的
// 3. rejected: 失败 已经执行完毕并且结果是失败的

// 封装一个定时器函数, 支持Promise
function timeout(time) {
    // ★★★ Promise对象有.then方法, 所以我们需要返回一个Promise对象
    return new Promise(function (resolve, reject) {
        // function 该函数会在Promise对象被创建时调用
        setTimeout(function () {
            // 当异步操作完成之后，我们不需要考虑要执行什么回调函数, 要执行的回调函数会在使用时, 通过promise.then定义好
            // 在创建Promise时, 我们不需要关心成功或失败的回调函数是什么, 回调函数会在调用.then时定义好
            // 我们只需要考虑改变当前Promise的状态就可以了, 是成功状体还是失败状态

            // 1. resolve函数调用可以将当前promise改变为成功
            // 2. reject函数调用可以将当前promise改变为失败

            // promise对象的状态变为成功, 则Promise.then中的成功的回调函数会自动被调用
            // promise对象的状态变为失败, 则Promise.then中的失败的回调函数会自动被调用

            // resolve和reject函数都可以传递参数给回调函数！
            // 调用resolve时的实参, 将来会在调用.then中成功的回调函数时传递
            // 调用reject时的实参, 将来会在调用.then中失败的回调函数时传递
            // reject(123);
            // resolve(123);
            // resolve 和 reject函数只是用来改变promise对象状态的, 不是 .then时的成功回调函数或失败回调函数,
        }, time)
    });
}

// Promise对象可以调用.then方法, Promise对象通常配合then方法使用
// 所以 timeout()函数应该返回一个Promise对象
timeout(2000).then(function (data) {
    console.log("1s 后执行了代码", data)
}, function () {
    console.log("异步操作失败了")
})

