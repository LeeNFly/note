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
//命名空间
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
                //让callback中this执行 事件源 del  
                //函数.call(替换this的对象， 实参列表);
                callback&&callback.call(box, e);  // null 1, 'acb' , obj  date 
            }
        })
       
    }
}