
(function () {
    //要实现功能： 
    //1-倒计时效果
    downTime();
    //2-头部滚动变色
    setHeader();
    //3-京东快报无缝效果
    news();
    //4-触屏轮播图实现 
    banner();


    //1- 倒计时功能    
    //倒计时时间 - 当前时间  = 时间的差值  t
    //实现思路：使用定时器 递减 时间t， 将递减之后 时分秒 显示到标签上 
    function downTime() {
        var  t = 5 * 60 * 60;  //5小时   1小时30分钟4秒  3600 + 1800 + 4   5405 
        var spans = document.querySelectorAll('.jd-seckill .time span:nth-child(odd)');
        console.log(spans);        

        var timer = setInterval(function () {
            //将t（秒数）转成时分秒
            var  h = Math.floor(t / 3600);
            var  m = Math.floor(t % 3600 / 60); //不足1小时部分算分钟
            var  s = t % 60;                    //不足一分钟算秒

            //将时间转成00:00:00格式

            h = h < 10 ? '0' + h : h;
            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;

            // console.log(h);
            // console.log(m);
            // console.log(s);
            //显示到span中
            spans[0].innerHTML = h;
            spans[1].innerHTML = m;
            spans[2].innerHTML = s;
            
            t--;
            //判断是否越界
            if(t < 0) {
                t = 5 * 60 * 60;
            }            
        }, 1000);      

    }

    //2-头部滚动变色
    //随着页面滚动，头部盒子不透明度越来越大，
    //比值 = 页面滚出去高度 / banner的高度 
    function setHeader() {
        var banner = document.querySelector('.jd-banner');
        var header = document.querySelector('.jd-header'); 
        //监听页面滚动时间
        window.addEventListener('scroll', function () {
            //获取页面卷曲的高度           
            var top = window.pageYOffset;
            var height = banner.offsetHeight; //获取banner高
            // console.log(top);
            // console.log(height);

            //计算比值
            var value = top / height;

            if(value > 1) {
                value = 1;
            }

            //将value值设置为 header的 透明度 rgb(222, 24, 27)
            header.style.backgroundColor = 'rgba(222, 24, 27, ' + value +')';

            
        })
    }

    //3-京东快报
    //新闻 每2秒切换一次，无缝切换效果 
    //处理对webkit内核的兼容 ： 使用驼峰命名来兼容webkit内核  针对css3的属性
    function news () {
        //1-先获取需要的元素
        var ul = document.querySelector('.jd-news ul');
        var lis = ul.querySelectorAll('li');

        //2-让ul做动画
        //动画本质： 让一个变量的值发生改变，将这个改变值赋值盒子某个属性，动画就产生了
        var  index = 0; 
        setInterval(function () {
            index++;
            //添加过渡
            ul.style.transition = 'transform .3s'; 
            ul.style.webkitTransition = 'transform .3s'; 
            //根据index值做动画
            ul.style.transform = 'translateY('+ (-index * 30) +'px)';
            ul.style.webkitTransform = 'translateY('+ (-index * 30) +'px)';
        }, 2000);

        //在每次动画做完间隙，判断index值是否达到临界值，如果到5，立即调回0进行重合 
        ul.addEventListener('transitionend', function () {
            //判断index是否最一个，若是index 设置为0， ul 瞬移到 第一个li进行重合，实现无缝滚动
            if (index >= lis.length - 1 ) {
                index = 0; //index复位
                //移除过渡
                ul.style.transition = 'none';
                ul.style.webkitTransition = 'none';
                //ul位置复位
                ul.style.transform = 'translateY(0)';
                ul.style.webkitTransform = 'translateY(0)';
            }
        })
    }


    //4-轮播图
    //1-定时器切换轮播图
    //2-触屏切换轮播

    function banner () {
        var banner = document.querySelector('.jd-banner');
        var ul = banner.querySelector('ul');
        var width = banner.offsetWidth; //获取banner宽度
        var points = banner.querySelectorAll('ol li');
        var  index = 1; //当前显示的第二张图片（第一张是替补）

        console.log(points);
        

        //1-定时器切换轮播图
        var timer = setInterval(function () {
            index++; //累加index
            //轮播图根据index值做动画
            //轮播图移动距离 = -index * 一屏的宽度 
            //添加过渡
            // 注意 过渡持续时间一定要小于 定时器间隔时间 ，否则会一直做过渡动画, 过渡结束不了, transitionend事件 不会触发
            ul.style.transition = 'transform 0.3s';
            ul.style.transform = 'translateX('+(-index * width)+'px)';
        }, 1000);

        //2-在ul动画完成间隙 判断 index值是否越界
        ul.addEventListener('transitionend', function () {
            if (index >=9 ) {
                index = 1;  //index 复位
                //去掉过渡
                ul.style.transition = 'none';
                //ul瞬移到真正的第一张图片,进行重合实现无缝
                ul.style.transform = 'translateX('+ (-index * width) +'px)';
            }

            if (index <= 0) {
                index = 8;
                //去掉过渡
                ul.style.transition = 'none';
                //ul瞬移到真正的第一张图片,进行重合实现无缝
                ul.style.transform = 'translateX('+ (-index * width) +'px)';
            }

            //此时index经过了重重判断， 到此 index一定是合理；
            setPoints(index -1);
        })

        //3-切换小圆点方式
        function setPoints(index) {
            //1-排他
            points.forEach(function (v, i) {
                //$('li').removeClass('current');
                v.classList.remove('current');
            })
            //2-突出显示自己
            points[index].classList.add('current');
        }
    }
})();