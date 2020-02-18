//全局 污染
// (function (window) {
//     function tap() {
//         //.. 
//     }
//     window.tap = tap; 
// })(window);

// (function (window) {
//     window.tap = 100;
// })(window);
//命名空间 ： 给自己代码进行命名区域 
// var itcast = {
//     tap: function () {

//     },
//     click: function () {

//     },
//     ajax: function () {

//     }
// }

// var zs = {
//     tap: function (){

//     },
//     ajax: function (){

//     }
// }

// itcast.ajax();
// zs.tap();
// box.onclick = function (e) {

// }
// 移动端本身是没用tap事件的, tap事件是我们通过touch事件进行封装出来的
// tap事件是我们自己封装出来的, 并不是真是存在的事件,
// callback只是回调函数, 是一个普通的函数 并不是事件处理函数!!!
var  itcast  = {
    //参数 一个选择器 
    tap: function (selector, callback) {
        //1-获取要绑定事件元素
        var  box = document.querySelector(selector || 'body');

        var isMove = false; //是否触屏移动
        var startTime = 0; //触屏的起始时间
        //2-给获取的元素绑定事件
        box.addEventListener('touchstart', function () {
            //记录起始时间
            startTime = Date.now();
        })

        box.addEventListener('touchmove', function () {
            //记录是否移动过
            isMove = true;
        })
        
        box.addEventListener('touchend', function (e) {
            //判断是否满足点击事件条件
            //1-没有移动过手指 
            //2-触屏时间小于150ms
            var distance = Date.now() - startTime;
            if (!isMove && distance < 150) {
                //满足点击事件的条件
                // if(callback) {
                //     callback();
                // }
                // 将touchend的事件对象 传递给我们的回调函数
                // callback&&callback(e);
                // 回调函数不是事件按处理函数, 这里将回调函数中的this绑定成我们注册事件的元素.
                callback && callback.call(this, e);
            }
            isMove = false;
        })
       
    }
}