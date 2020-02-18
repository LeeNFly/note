;(function () {
    // 左侧菜单 无滚动条滑动事件
    setAside();
    // 右侧商品列表 无滚动条滑动
    setRightSlide()

    function setAside() {
        var div = document.querySelector('.content-left');
        var ul = document.querySelector('.content-left ul');
        var minTop = div.offsetHeight - ul.offsetHeight;
        var startY = 0, moveY = 0, distance = 0, distanced = 0; // distanced, 记录ul已经位移的距离
        div.addEventListener('touchstart', function (e) {
            ul.style.transition = 'none';
            startY = e.targetTouches[0].clientY;
        });

        div.addEventListener('touchmove', function (e) {
            moveY = e.targetTouches[0].clientY;
            distance = moveY - startY;
            ul.style.transform = 'translateY(' + (distanced + distance) + 'px)';
        });

        div.addEventListener('touchend', function (e) {
            distanced += distance;

            if (distanced > 0) {
                ul.style.transition = 'all 0.3s';
                ul.style.transform = 'none';
                distanced = 0;
            }

            if (distanced < minTop) {
                ul.style.transition = 'all 0.3s';
                ul.style.transform = 'translateY(' + minTop + 'px)';
                distanced = minTop;
            }

            startY = 0;
            moveY = 0;
            distance = 0;
        });
    }

    function setRightSlide() {
        myScroll = new IScroll('.content-right');
    }

})();