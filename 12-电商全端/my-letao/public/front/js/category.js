$(function () {
    // 发送ajax请求获取分类列表数据
    $.ajax({
        url: '/category/queryTopCategory',
        dataType: 'json',
        success: function ( info ) {
            var htmlStr = template('category_tpl', info)
            $('#category_list').html(htmlStr)
            renderByCategoryId(info.rows[0].id)
        }
    })

    // 给左侧分类绑定点击事件
    $('#category_list').on('click', 'a', function () {
        $(this).addClass('current').parent().siblings().find('a').removeClass('current')
        renderByCategoryId($(this).data('id'))
    })

    // 根据一级分类id获取品牌列表数据
    function renderByCategoryId(id) {
        $.ajax({
            url: '/category/querySecondCategory',
            data: {
                id: id
            },
            dataType: 'json',
            success: function ( info ) {
                console.log(info)
                var htmlStr = template('brands_tpl', info)
                $('#brands_list').html(htmlStr)
            }
        })
    }
})
