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

     //1定时器切换轮播图
     var  timer = setInterval(function () {
         lis[prev].style.transform = 'translate('+(-100 + index * 10)+'px, '+(200 + index * 10)+'%)';


         index++; //累加index 
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
         //添加动画
         //向左滑动的情况下，下一张next 不需要过渡效果
         lis[index].style.transition = 'transform 0.3s';
         lis[prev].style.transition = 'transform 0.3s';
         lis[next].style.transition = 'transform 0.3s';
        //  lis[next].style.transition = 'none';

         
         //此时 index  prev  next 数据安全，可以用于做动画
         //根据index值，选对应图片放到 ，上一张，下一张，当前的位置
         lis[index].style.transform = 'translateX(0)';
         lis[prev].style.transform = 'translateX(' + -width + 'px)';
         lis[next].style.transform = 'translateX('+ width +'px)';

     }, 1000)
   }
};
