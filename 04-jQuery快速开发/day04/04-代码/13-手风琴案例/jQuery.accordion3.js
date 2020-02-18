//往原型上添加
$.fn.accordion = function(box, imgs, currentW) {
    // box： 父盒子，用来注册鼠标离开事件
    // imgs：手风琴图片数组，
    // currentW:  当前展开的li的width


    // 知道这个变量保存的是jq对象
    var $lis = this;

    // 手动遍历
    $lis.each(function(index, ele){
        // 给每个li设置上不同的背景图片
        $(ele).css("backgroundImage", "url("+ imgs[index] +")");
    })

    // 这里需要动态的去计算兄弟li的宽度
    // 父盒子的宽度
    var pW = $(box).width();
    // 其他兄弟均分的
    var min = (pW - currentW) / ($lis.length - 1);
    // 算没有展开的时候，均分的宽度
    var average = pW / $lis.length;

    // 2. 给li注册mouseenter，让当前的li做animate({width: 800})
    //                        其他的兄弟元素做animate({width: 100})
    $lis.mouseenter(function() {
        $(this).stop().animate({
            width: currentW
        }).siblings().stop().animate({
            width: min
        })
    })


    // 3. 给父盒子box，注册mouseleave，让所有的li做animate({width:240})
    $(box).mouseleave(function() {
        $lis.stop().animate({
            width: average
        })
    })
}
