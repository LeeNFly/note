$(function () {
    // 页面渲染
    function render(callback) {
        $.ajax({
            url: '/cart/queryCart',
            dataType: 'json',
            success: function (info) {
                // console.log(info)
                if (info.error == 400) {
                    // 用户未登录
                    location.href = './login.html'
                }
                callback && callback(info)
            }
        })
    }

    // 添加下拉刷新
    mui.init({
        pullRefresh : {
            container:".mui-scroll-wrapper",//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
            down : {
                auto: true,//可选,默认false.首次加载自动上拉刷新一次
                callback: function () { //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
                    setTimeout(function () {
                        render(function (info) {
                            var htmlStr = template('cart_item_tpl', {list: info})
                            $('#cart_list').html(htmlStr)
                            mui('.mui-scroll-wrapper').pullRefresh().endPulldownToRefresh()
                        })
                    }, 500)
                }
            }
        }
    });

    // 删除操作
    $('#cart_list').on('tap', '.btn_del', function () {
        var id = $(this).data('id')
        $.ajax({
            url: '/cart/deleteCart',
            data: {
                id
            },
            dataType: 'json',
            success: function (info) {
                console.log(info)
                if (info.success) {
                    mui(".mui-scroll-wrapper").pullRefresh().pulldownLoading()
                }
            }
        })
    })

    // 编辑操作
    $('#cart_list').on('tap', '.btn_edit', function () {
        var id = $(this).data('id')
        var num = $(this).data('num')
        var productnum = $(this).data('productnum')
        var productsize = $(this).data('productsize')
        var size = $(this).data('size')
        var htmlStr = template('editTpl', {num, productnum, productsize, size})
        htmlStr = htmlStr.replace(/\n/g, '')
        mui.confirm( htmlStr, '编辑商品', ['确认', '取消'], function (res) {
            // 点击确定, 此时页面已经渲染完成, 可以直接获取dom元素
            if (res.index == 0) {
                // 点击确定
                var size = $('.cart_size span.current').text()
                var num = $('.mui-numbox-input').val()
                $.ajax({
                    type: 'post',
                    url: '/cart/updateCart',
                    data: {
                        id,
                        size,
                        num
                    },
                    success: function (info) {
                        if(info.success) {
                            mui(".mui-scroll-wrapper").pullRefresh().pulldownLoading()
                        }
                    }
                })
            }

        })
        mui('.mui-numbox').numbox()

    })

    // 给尺码绑定点击事件
    $('body').on('click', '.cart_size span', function () {
        $(this).addClass('current').siblings().removeClass('current')
    })
})
