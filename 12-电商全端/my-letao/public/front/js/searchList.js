$(function () {
    // 将查询字符串中的关键字 显示 到 搜素框中
    var proName = getSearchByKey('key')
    $('#search_content').val(proName)
    render()
    // 渲染商品列表数据
    function render() {
        $('.product-list > ul').html('<div class="loading"></div>')
        var params = {}
        params.proName = $('#search_content').val()
        params.page = 1
        params.pageSize = 100
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
                    var htmlStr = template('product_tpl', info)
                    $('.product-list > ul').html(htmlStr)
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
        render()

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
    $('.sortCondition-bar a[data-type]').on('click', function () {
        // 如果有current类, 则改变箭头方向即可
        // 如果没有current类, 给自己加上current类, 并且移除兄弟元素的current类
        if ($(this).parent().hasClass('current')) {
            // 有current类, 说明已经高亮, 改变箭头方向即可
            $(this).find('i').toggleClass('fa-angle-down').toggleClass('fa-angle-up')
        } else {
            // 没有current类, 加上current类, 实现高亮效果, 并且移除其他所有兄弟元素的current类
            $(this).parent().addClass('current').siblings().removeClass('current')
        }

        render()
    })
})
