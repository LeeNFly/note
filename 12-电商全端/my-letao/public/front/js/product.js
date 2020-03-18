$(function () {
    var productId = getSearchByKey('id')
    // 发送ajax, 请求商品详细信息
    $.ajax({
        url: '/product/queryProductDetail',
        data: {
            id: productId
        },
        dataType: 'json',
        success: function (info) {
            console.log(info)
            var htmlStr = template('banner_tpl', info)
            $('.mui-scroll').html(htmlStr)
            // 初始化图片轮播
            var gallery = mui('.mui-slider')
            gallery.slider({
                interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
            });
            // 初始化数字输入框
            mui('.mui-numbox').numbox()
        }
    })

    // 给选择尺码绑定事件
    $('.mui-scroll').on('click', '.lt_pro_size span', function () {
        $(this).addClass('current').siblings().removeClass('current')
    })

    // 加入购物车按钮
    $('#btn_add_cart').on('click', function () {
        if ( !$('.lt_pro_size span').hasClass('current') ) {
            mui.toast('请选择尺码',{ duration:'long', type:'div' })
            return
        }
        var num = $('.mui-numbox-input').val()
        var size = $('.lt_pro_size span.current').text()
        $.ajax({
            type: 'post',
            url: '/cart/addCart',
            data: {
                productId,
                num,
                size
            },
            dataType: 'json',
            success: function ( info ) {
                console.log(info)
                if (info.error == 400 ) {
                    location.href = './login.html?retUrl=' + location.href
                }
                mui.confirm('添加成功', '温馨提示', ['去购物车', '继续浏览'], function (type) {
                    if (type.index == 0) {
                        // 去购物车
                        location.href = './cart.html'
                    }
                })
            }
        })
    })
})
