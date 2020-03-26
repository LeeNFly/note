// 解决箭头函数无法使用arguments问题

// var fn = (...param) => console.log(param)
var fn = (a, ...param) => console.log(param)

fn(1,2,3,4,5)
