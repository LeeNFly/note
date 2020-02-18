//往原型上添加
$.fn.accordion = function(box) {
    // 知道这个变量保存的是jq对象
    var $lis = this;

    // 手动遍历
    $lis.each(function(index, ele){
        $(ele).css("backgroundImage", "url(images/" + (index + 1) + ".jpg)")
    })


    // 2. 给li注册mouseenter，让当前的li做animate({width: 800})
    //                        其他的兄弟元素做animate({width: 100})
    $lis.mouseenter(function() {
        $(this).animate({
            width: 800
        }).siblings().animate({
            width: 100
        })
    })


    // 3. 给父盒子box，注册mouseleave，让所有的li做animate({width:240})
    $(box).mouseleave(function() {
        $lis.animate({
            width: 240
        })
    })
}
