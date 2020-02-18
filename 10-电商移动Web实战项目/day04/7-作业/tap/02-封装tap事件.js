// 命名空间
var itcast = {
    tap: function (selector, callback) {
        var box = document.querySelector(selector);
        var isMove = false;
        var startTime = 0;
        box.addEventListener('touchstart', function () {
            startTime = +new Date();
        });
        box.addEventListener('touchmove', function () {
            isMove = true;
        });
        box.addEventListener('touchend', function (e) {
            var distanceTime = +new Date() - startTime;
            if (!isMove && distanceTime < 150) {
                callback && callback.call(this, e);
            }
            isMove = false;
        });
    }
}