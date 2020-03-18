$(function () {
    // 将查询字符串中的关键字 显示 到 搜素框中
    var proName = getSearchByKey('key')
    $('#search_content').val(proName)
    var page
    // render()
    // 渲染商品列表数据
    function render(callback) {
        var params = {}
        params.proName = $('#search_content').val()
        params.page = page
        params.pageSize = 2
        if ($('.sortCondition-bar li').hasClass('current')) {
            // 说明有选择排序
            // 1. 获取排序对应的传参字段名
            var key = $('.sortCondition-bar .current a').data('type')
            params[key] = $('.sortCondition-bar .current i').hasClass('fa-angle-down') ? 2 : 1
        }
        setTimeout( function () {
            $.ajax({
                url: '/product/queryProduct',
                data: params,
                dataType: 'json',
                success: function ( info ) {
                    callback && callback(info)
                }
            })
        }, 500)
    }

    // 搜索按钮绑定点击事件
    $('.search_btn').on('click', function () {
        var key = $('#search_content').val()
        if (key.trim() == '') {
            mui.toast('请输入搜索关键字',{ duration:'long', type:'div' })
            $('#search_content').val('')
            return
        }
        // 执行一次下拉刷新
        mui(".mui-scroll-wrapper").pullRefresh().pulldownLoading()

        // 更新搜索记录
        var search_history = localStorage.getItem('search_list')
        var history_arr = JSON.parse(search_history)
        var index = history_arr.indexOf(key)
        if ( index > -1 ) {
            // 搜索记录之前存在
            var temp = history_arr[index]
            history_arr.splice(index, 1)
            history_arr.unshift(temp)
        } else {
            // 搜索记录之前不存在
            history_arr.unshift(key)
        }
        if (history_arr.length > 10) {
            history_arr.pop()
        }
        localStorage.setItem('search_list', JSON.stringify(history_arr))
    })

    // 按照价格排序
    $('.sortCondition-bar a[data-type]').on('tap', function () {
        // 如果有current类, 则改变箭头方向即可
        // 如果没有current类, 给自己加上current类, 并且移除兄弟元素的current类
        if ($(this).parent().hasClass('current')) {
            // 有current类, 说明已经高亮, 改变箭头方向即可
            $(this).find('i').toggleClass('fa-angle-down').toggleClass('fa-angle-up')
        } else {
            // 没有current类, 加上current类, 实现高亮效果, 并且移除其他所有兄弟元素的current类
            $(this).parent().addClass('current').siblings().removeClass('current')
        }

        // render()
        // 执行一次下拉刷新
        mui(".mui-scroll-wrapper").pullRefresh().pulldownLoading()
    })

    // 配置下拉刷新
    mui.init({
        pullRefresh : {
            container:".mui-scroll-wrapper",//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
            // 下拉刷新
            down : {
                auto: true,//可选,默认false.首次加载自动上拉刷新一次
                callback :function () { //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
                    // console.log('下拉刷新')
                    page = 1
                    render(function (info) {
                        var htmlStr = template('product_tpl', info)
                        $('.product-list > ul').html(htmlStr)
                        mui('.mui-scroll-wrapper').pullRefresh().endPulldownToRefresh()
                        // 重置上拉加载状态
                        mui('.mui-scroll-wrapper').pullRefresh().refresh(true)
                    })
                }
            },
            // 上拉加载
            up : {
                auto: true,//可选,默认false.自动上拉加载一次
                callback: function () {  //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
                    console.log('上拉加载')
                    page ++
                    render(function (info) {
                        if (info.data.length > 0) {
                            var htmlStr = template('product_tpl', info)
                            $('.product-list > ul').append(htmlStr)
                            mui('.mui-scroll-wrapper').pullRefresh().endPullupToRefresh(false)
                        }
                        else {
                            mui('.mui-scroll-wrapper').pullRefresh().endPullupToRefresh(true)
                        }
                    })
                }
            }
        }
    });

    // 给每个商品添加tap事件 (下拉刷新屏蔽了a标签的点击事件)
    $('.product-list').on('tap', 'a', function () {
        var href = $(this).attr('href')
        location.href = href
    })
})
