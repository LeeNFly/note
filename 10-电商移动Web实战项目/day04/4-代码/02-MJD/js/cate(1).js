(function(){
    //1- 当前手指在left上移动式，ul跟随手指移动， 
    //2-在手指松开后，判断ul的位置是否越界  最大top ： 0   最小top: left高 - ul的高

    //具体步骤：
    //触屏开始
    //   获取触屏开始Y坐标值  
    //触屏移动
    //   获取移动后坐标值
    //   计算距离差  之前ul已经移动的距离 + 距离差
    //   ul根据距离进行移动 
    //触屏结束
    //  判断ul的top值是否越界， 如果越界，通过动画进行复位；

    function left() {
        //1-获取需要元素
        var  left = document.querySelector('.c-left');
        var ul = left.querySelector('ul');
        //ul的最小top值
        var minTop = left.offsetHeight - ul.offsetHeight;  

        //定义变量存放数据
        var  startY = 0;
        var  moveY = 0;
        var distanceY = 0;
        var currentY = 0; //记录当前ul移动Y坐标值 （每次ul移动后，立刻记录ul新位置）
        //给left绑定touch事件

        left.addEventListener('touchstart', function (e) {
            //获取起始y坐标值
            startY = e.targetTouches[0].clientY;
        })

        left.addEventListener('touchmove', function (e) {
            //记录移动坐标值
            moveY = e.targetTouches[0].clientY;
            distanceY = moveY - startY; //距离差
            //去掉过渡效果
            ul.style.transition = 'none';
            //ul跟随移动 
            ul.style.transform = 'translateY('+ (currentY + distanceY) +'px)';
        })

        left.addEventListener('touchend', function (e) {
            //触屏结束后，更新最近ul的y坐标值
            currentY += distanceY;
            //判断ul的坐标值是否越界 
            if (currentY > 0) {
                currentY = 0;
            }

            if (currentY < minTop ) {
                currentY = minTop;
            }
            //通过动画进行复位 加过渡
            ul.style.transition = 'transform 0.3s';
            //让ul移动到调整后的y坐标值
            ul.style.transform = 'translateY(' + currentY + 'px)';

            //数据重置
             startY = 0;
             moveY = 0;
             distanceY = 0;
        })
        
    }

    left();

    //右侧滚动
    new IScroll('.c-right', {
        // bounce: false,  //是否反弹
        scrollX: true,     //滑动方向
        scrollY: true
    });

} )();