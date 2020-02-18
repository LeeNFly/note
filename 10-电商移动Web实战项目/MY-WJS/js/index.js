$(function () {
    setTabWidth();
    carousel();
    // 轮播图
    function carousel() {
        // 轮播图手动初始化 ( 可以不写, 因为自动会帮我们初始化一次)
        $('.carousel').carousel({
            interval: 5000
        });

        // 滑动轮播
        var startX = 0;
        var moveX = 0;
        var distanceX = 0;
        $('.wjs-carousel').on('touchstart', function (e) {
            startX = e.originalEvent.targetTouches[0].clientX;
            $('.carousel').carousel('pause');
        });
        $('.wjs-carousel').on('touchmove', function (e) {
            moveX = e.originalEvent.targetTouches[0].clientX;
            distanceX = moveX - startX;
        });
        $('.wjs-carousel').on('touchend', function (e) {
            if (distanceX < 0) {
                // 左滑
                $('.carousel').carousel('next');
            }
            if (distanceX > 0) {
               // 右滑
                $('.carousel').carousel('prev');
            }
            $('.carousel').carousel('cycle');
            startX = 0;
            moveX = 0;
            distanceX = 0;
        });
    }

    // 设置导航栏宽度
    function setTabWidth() {
        var sumWidth = 0;
        $('.wjs-product .wjs-tabs > li').each(function (index, element) {
            console.log(this);
           sumWidth += $(this).outerWidth(true);
           console.log($(this).outerWidth(true));
        })
        $('.wjs-product .wjs-tabs').width(sumWidth);
        console.log(sumWidth)
    }
});