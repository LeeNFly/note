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
        setInterval(function () {
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
            index++;
            ul.style.transform = 'translateY(' + (-index * 30) + 'px)';
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
            header.style.backgroundColor = 'rgba(242, 48, 48, ' + percent + ')';
        }
    }


    function setBanner() {
        var img = document.querySelector('.jd-banner img');
        var ul = document.querySelector('.jd-banner ul');
        var lis = ul.querySelectorAll('li');
        var width = ul.offsetWidth;
        ul.style.height = img.offsetHeight + 'px';
        // 1- 监听浏览器窗口变化, 实时给ul设置高度
        window.addEventListener('resize', function () {
            ul.style.height = img.offsetHeight + 'px';
            width = ul.offsetWidth;
        });

        // 2- 轮播
        //  2-1 初始化
        lis[0].style.transform = 'none';
        lis[lis.length - 1].style.transform = 'translate(-100%, 0)';
        lis[1].style.transform = 'translate(100%, 0)';

        var index = 0; // 当前展示的轮播图索引
        var prev = lis.length - 1;// 上一张索引
        var next = 1; // 下一张索引
        var direction = 'right';

        // 2-2 轮播功能
        var timer = setInterval(lunbo, 1000);

        // 轮播函数
        function lunbo() {
            index++;
            direction = "left"; // 左滑 index ++

            // index --;
            // direction = "right"; // 右滑, index --
            checkIndex();
            addTransition(direction);
            transform();

        }

        // 校验索引值
        function checkIndex() {
            if (index > lis.length - 1) {
                index = 0;
            }
            if (index < 0) {
                index = lis.length - 1;
            }

            prev = index - 1;
            next = index + 1;
            if (prev < 0) {
                prev = lis.length - 1;
            }
            if (next > lis.length - 1) {
                next = 0;
            }
        }

        // 添加过渡
        function addTransition(direction) {
            if (direction === 'right') { // ★ 右滑, index -- , --后, index 和 next, 需要过渡 prev不需要过渡
                lis[index].style.transition = 'all 0.3s';
                lis[prev].style.transition = 'none';
                lis[next].style.transition = 'all 0.3s';
            }

            if (direction === 'left') { // ★ 左滑, index ++ , ++ 后, index 和 prev, 需要过渡 next 不需要过渡
                lis[index].style.transition = 'all 0.3s';
                lis[prev].style.transition = 'all 0.3s';
                lis[next].style.transition = 'none';
            }

        }

        // 移出过渡
        function removeTransition() {
            lis[index].style.transition = 'none';
            lis[prev].style.transition = 'none';
            lis[next].style.transition = 'none';
        }
        // 平移函数
        function transform(distanceX) {
            // x: 触屏滑动的距离
            if (distanceX) {
                lis[index].style.transform = 'translate(' + distanceX + 'px, 0)';
                lis[prev].style.transform = 'translate(' + (-width + distanceX) + 'px, 0)';
                lis[next].style.transform = 'translate(' + (width + distanceX) + 'px, 0)';
            } else {
                // 正常轮播
                lis[index].style.transform = 'none';
                lis[prev].style.transform = 'translate(' + -width + 'px, 0)';
                lis[next].style.transform = 'translate(' + width + 'px, 0)';
            }
        }

        // 轮播图滑动
        var startX = 0;
        var moveX = 0;
        var distanceX = 0;
        ul.addEventListener('touchstart', function (e) {
            clearInterval(timer);
            startX = e.targetTouches[0].clientX;
            removeTransition();
        });
        ul.addEventListener('touchmove', function (e) {
            moveX = e.targetTouches[0].clientX;
            distanceX = moveX - startX;
            transform(distanceX);
        });
        ul.addEventListener('touchend', function (e) {
            var drx = '';
            if (Math.abs(distanceX) > 1 / 3 * width) {
                if (distanceX > 0) {
                    // 右滑
                    index --;
                    drx = 'right';
                }
                if (distanceX < 0) {
                    // 左滑
                    index ++;
                    drx = 'left';
                }
            }

            checkIndex();
            addTransition(drx);
            transform();

            startX = 0;
            moveX = 0;
            distanceX = 0;
            timer = setInterval(lunbo, 1000);
        });


    }





})();