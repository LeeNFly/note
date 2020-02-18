$(function () {
    banner(); //触屏轮播图的功能
    //设置轮播图切换时间 
    $('.carousel').carousel({
        interval: 3000 //设置定时器切换时间
    })

    //动态设置ul的宽度
    setWidth();

    //触屏轮播图的功能 
    function banner () {
        // 给banner绑定touch
        //触屏开始： 清定时器  记录起始坐标
        //触屏移动: 记录移动距离 算距离差 
        //触屏结束： 判断滑动方向，让轮播图切换 

        var startX = 0;
        var moveX = 0;
        var distanceX = 0;
    
        $('.wjs-banner').on('touchstart', function (e) {
            //e --->是jq的事件对象
            //jq对象中  e.originalEvent 属性中存放的是原生DOM是事件对象  
            //暂停轮播图
            $('.carousel').carousel('pause');
            console.log(e.originalEvent.targetTouches[0].clientX);
            startX = e.originalEvent.targetTouches[0].clientX;            

        })

        $('.wjs-banner').on('touchmove', function (e) {
            moveX =  e.originalEvent.targetTouches[0].clientX;
            //算出距离差
            distanceX = moveX -startX;
        })


        $('.wjs-banner').on('touchend', function (e) {
             if (distanceX > 0) {
                 //  上一张 
                 console.log('prev');
                 $('.carousel').carousel('prev');
             }

             if(distanceX < 0) {
                 //下一张
                 console.log('next');
                $('.carousel').carousel('next');
             }

             //轮播图继续自动轮播
             $('.carousel').carousel('cycle');

             //数据重置             
             startX = 0;
             moveX = 0;
             distanceX = 0;

        })




    }

     //动态设置ul的宽度
    function setWidth() {
        var width = 0;
        $('.wjs-product .product-tabs li').each(function (i, e){
            width += $(this).outerWidth(true); //累加所有li宽度
        })
        console.log(width);    
        //将累加的宽设置给ul
        $('.wjs-product .product-tabs').width(width);
    }
});