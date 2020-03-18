$(function () {
    // 登录按钮
    $('#login_btn').on('click', function () {
        var username = $('input[name="username"]').val()
        var password = $('input[name="password"]').val()
        if (username == '') {
            mui.toast('请输入用户名')
            return
        }
        if (password == '') {
            mui.toast('请输入密码')
            return
        }
        $.ajax({
            type: 'post',
            url: '/user/login',
            data: {
                username,
                password
            },
            dataType: 'json',
            success: function (info) {
                if (info.error) {
                    mui.toast('用户名或密码错误')
                    return
                }
                if (info.success) {
                    if (location.href.indexOf('retUrl') > -1) {
                        // 需要跳转到原来的页面
                        var idx = location.href.indexOf('=')
                        location.href = location.href.slice(idx + 1)

                    }
                    else {
                        // 跳转到用户中心
                        location.href = './user.html'
                    }
                }
            }
        })
    })
})
