window.onload = function () {
   //1-由于li标签定位脱标， 必须实施获取图片的高度，赋值给 ul
    setHeight();
    //2-监听窗口变化， 实时设置
    window.addEventListener('resize', function () {
        setHeight();
    })

    //3-轮播图的功能
    banner();

    //设置ul的高
   function setHeight() {
      document.querySelector('.jd-banner ul').style.height 
        = document.querySelector('.jd-banner ul img').offsetHeight + 'px';
   }

   //轮播图
   function banner () {
     //获取元素
     var  banner = document.querySelector('.jd-banner');
     var  lis = banner.querySelectorAll('ul li');
     var width = banner.offsetWidth; //获取banenr的宽 

     var  index = 0; //当前轮播图片
     var  prev = 7;  //上一张
     var  next = 1;  //下一张

     function setData() {
            //判断index是否越界 
            if(index > 7) {
                index = 0; 
            }
   
            if(index < 0) {
                index = 7;
            }
   
            //在index安全情况，计算 prev next
            prev = index -1;
            next = index + 1;
   
            //判断prev 和 next是否越界
            if (prev < 0) {
                prev = 7;
            }
   
            if (next > 7) {
                next = 0;
            }
     }

     //1定时器切换轮播图
     var  timer = setInterval(function () {
        //  lis[prev].style.transform = 'translate('+(-100 + index * 10)+'px, '+(200 + index * 10)+'%)';


         index++; //累加index 
         setData(); //判断index是否越界，根据index值推算 prev next 
         //添加动画
         //向左滑动的情况下，下一张next 不需要过渡效果
         lis[index].style.transition = 'transform 0.3s';
         lis[prev].style.transition = 'transform 0.3s';
         lis[next].style.transition = 'none';

         
         //此时 index  prev  next 数据安全，可以用于做动画
         //根据index值，选对应图片放到 ，上一张，下一张，当前的位置
         lis[index].style.transform = 'translateX(0)';
         lis[prev].style.transform = 'translateX(' + -width + 'px)';
         lis[next].style.transform = 'translateX('+ width +'px)';

     }, 1000)


     //2-触屏滑动轮播图
     //触屏开始
     // 1-清空定时器
     // 2-获取触屏坐标值
     //触屏移动
     // 1-获取移动坐标值
     // 2-计算出距离差
     // 3- index  next  prev 一起跟随手指移动
     //触屏结束
     // 判断滑动距离是否大于 width/ 3 
     // 判断是否切换  判断上一张 下一张  改变index的值
     // 根据index值做动画

     var startX = 0;
     var moveX = 0;
     var distanceX = 0;

     banner.addEventListener('touchstart', function (e) {
        // 1-清空定时器
        clearInterval(timer);
        // 2-获取触屏坐标值
        startX = e.targetTouches[0].clientX;
     });

     banner.addEventListener('touchmove', function (e) {
            // 1-获取移动坐标值
             moveX = e.targetTouches[0].clientX;
            // 2-计算出距离差
            distanceX = moveX - startX;
            // 3- index  next  prev 一起跟随手指移动
            //移除过渡 
            lis[index].style.transition = 'none';
            lis[prev].style.transition = 'none';
            lis[next].style.transition = 'none';
            //跟随手指移动的距离 = 之前位置 + distanceX;
            //prev index  next 一起移动 30 + 100
            lis[index].style.transform = 'translateX('+ distanceX +'px)';
            lis[prev].style.transform = 'translateX('+ (-width + distanceX) +'px)';
            lis[next].style.transform = 'translateX('+ (width + distanceX) +'px)';
    });

    banner.addEventListener('touchend', function (e) {
        var direction = '';
        //判断是否要切换图片
        if (Math.abs(distanceX) > width / 3) {
            //切换图片 上一张？ 还是下一张？
            if (distanceX > 0) {
                index--;
                direction = 'right';
            }
            if(distanceX < 0) {
                index++;
                direction = 'left';
            }
            setData(); //判断index是否越界，根据index值推算 prev next 
        }
        //添加动画
         //向左滑动的情况下，下一张next 不需要过渡效果, 需要瞬间切换完成, 因为定位层级可能会更高, 可能造成从轮播图上面飞过去的效果, 这是我们不想要的
         //向右滑动的情况下，上一张prev 不需要过渡效果, 需要瞬间切换完成, 因为定位层级可能会更高, 可能造成从轮播图上面飞过去的效果, 这是我们不想要的
         lis[index].style.transition = 'transform 0.3s';
         lis[prev].style.transition = direction == 'right'? 'none' : 'transform 0.3s';
         lis[next].style.transition = direction == 'left'? 'none' : 'transform 0.3s';

        //根据index值 做动画 
        lis[index].style.transform = 'translateX(0)';
        lis[prev].style.transform = 'translateX(' + -width + 'px)';
        lis[next].style.transform = 'translateX('+ width +'px)';
    });
   }
};
