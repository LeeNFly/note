;(function () {
    // 秒杀倒计时
    countDown();
    // 京东快报
    setNews();
    // 向下滑动头部区域透明度
    setHeader();
    // 轮播图
    setBanner(); 
    
    function countDown() {
        var spans = document.querySelectorAll('.jd-seckill .time span');
        var time = 5 * 60 * 60;
        var hours = Math.floor(time / 3600);
        var minutes = Math.floor(time % 3600 / 60);
        var seconds = time % 60;
        spans[0].innerText = addZero(hours);
        spans[2].innerText = addZero(minutes);
        spans[4].innerText = addZero(seconds);
        time--;
        setInterval(function() {
            var hours = Math.floor(time / 3600);
            var minutes = Math.floor(time % 3600 / 60);
            var seconds = time % 60;
            spans[0].innerText = addZero(hours);
            spans[2].innerText = addZero(minutes);
            spans[4].innerText = addZero(seconds);
            time--;
        }, 1000)

        function addZero(timeNum) {
            return timeNum >= 10 ? timeNum : '0' + timeNum;
        }
    }

    function setNews() {
        var ul = document.querySelector('.jd-news ul');
        var index = 0;
        setInterval(function () {
            ul.style.transition = 'all 0.8s';
            index ++;
            ul.style.transform = 'translateY('+ (-index * 30) +'px)';
            ul.addEventListener('transitionend', function () {
                if (index == 5) {
                    ul.style.transition = 'none';
                    ul.style.transform = 'none';
                    index = 0;
                }
            })
        }, 1000);
    }

    function setHeader() {
        var header = document.querySelector('.jd-header');
        var banner = document.querySelector('.jd-banner');
        window.onscroll = function () {
            var percent = window.pageYOffset / banner.offsetHeight;
            header.style.backgroundColor = 'rgba(242, 48, 48, '+ percent +')';
        }
    }

    function setBanner() {
        var ul = document.querySelector('.jd-banner ul');
        var lis = document.querySelectorAll('.jd-banner ul li');
        var points = document.querySelectorAll('.jd-banner ol li');
        var banner = document.querySelector('.jd-banner');
        var width = lis[0].offsetWidth;
        var index = 1; // 当前展示的轮播图索引号

        // 通用函数:
        // 位移ul
        function setTranslate(x) {
            ul.style.transform = 'translateX(' + x + 'px)';
            ul.style.webkitTransform = 'translateX(' + x + 'px)';
        }
        // 添加过渡
        function addTransition() {
            ul.style.transition = 'all 0.8s';
            ul.style.webkitTransition = 'all 0.8s';
        }
        // 删除过渡
        function removeTransition() {
            ul.style.transition = 'none';
            ul.style.webkitTransition = 'none';
        }
        // 1- 自动轮播
        ul.addEventListener('transitionend', function () {
            if (index == lis.length - 1) {
                // ul.style.transition = 'none';
                removeTransition();
                // ul.style.transform = 'translateX(' + -width + 'px)';
                setTranslate(-width);
                index = 1;
            }
            if (index == 0) {
                // ul.style.transition = 'none';
                removeTransition();
                // ul.style.transform = 'translateX(' + (-width * (lis.length - 2)) + 'px)';
                setTranslate(-width * (lis.length - 2));
                index = lis.length - 2;
            }
            setPoints(index);
        });
        var timer = setInterval(toggle, 1000);
        function toggle() {
            // ul.style.transition = 'all 0.8s';
            addTransition();
            index++;
            // ul.style.transform = 'translateX(' + (-index * width) + 'px)';
            setTranslate(-index * width);
        }

        // 2- 小圆点
        function setPoints(index) {
            points.forEach(function (v, i) {
                if (i == index - 1) {
                    v.classList.add('current');
                } else {
                    v.classList.remove('current');
                }
            });
        }

        // 3- 拖拽移动
        var startX = 0;
        var moveX = 0;
        var distance = 0;
        banner.addEventListener('touchstart', function (e) {
            clearInterval(timer);
            startX = e.targetTouches[0].clientX;
        });
        banner.addEventListener('touchmove', function (e) {
            moveX = e.targetTouches[0].clientX;
            distance = moveX - startX;
            // ul.style.transition = 'none';
            removeTransition();
            // ul.style.transform = 'translateX('+( -index * width + distance)+'px)';
            setTranslate(-index * width + distance);
        });
        banner.addEventListener('touchend', function (e) {
            timer = setInterval(toggle, 1000);
            // ul.style.transition = 'all 0.8s';
            addTransition();
            if (Math.abs(distance) > width / 3) {
                if (distance > 0) {
                    index--;
                }
                if (distance < 0) {
                    index++;
                }
            }
            // ul.style.transform = 'translateX('+ ( -width * index ) +'px)';
            setTranslate(-width * index);
            startX = 0;
            moveX = 0;
            distance = 0;
        });

        window.addEventListener('resize', function () {
            width = lis[0].offsetWidth;
            // ul.style.transition = 'none';
            removeTransition();
            // ul.style.transform = 'translateX(' + (-index * width) + 'px)';
            setTranslate(-width * index);
            setPoints(index);
        })
    }




})();