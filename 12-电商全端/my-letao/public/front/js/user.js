$(function () {
    // 回显数据并校验登录
    $.ajax({
        url: '/user/queryUserMessage',
        dataType: 'json',
        success: function ( info ) {
            console.log(info)
            if (info.error == 400) {
                // 用户未登录
                location.href = './login.html'
            }
            var htmlStr = template('userInfo_tpl', info)
            $('#userInfo').html(htmlStr)
        }
    })

    // 退出按钮
    $('#btn_logout').on('click', function () {
        $.ajax({
            type: 'get',
            url: '/user/logout',
            dataType: 'json',
            success: function(info) {
                // console.log(info)
                if (info.success) {
                    location.href = 'login.html'
                }
            }
        })
    })
})
