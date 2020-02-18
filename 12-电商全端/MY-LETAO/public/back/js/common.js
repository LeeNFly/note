$(function () {
    // 5. 登录拦截功能
    //  5.1 判断是否是登录页面
    //      登录页面不用拦截,
    var isLogin = location.href.indexOf('login.html');
    if (isLogin > -1) {
        // 登录页, 不需要拦截
    }
    else {
        // 非登录页, 需要拦截校验是否登录
        $.ajax({
            url: '/employee/checkRootLogin',
            dataType: 'json',
            success: function ( info ) {
                if (info.error === 400) {
                    // 未登录, 拦截到登录页
                    location.href = 'login.html';
                }
                if (info.success) {
                    // 已登录
                }
            }
        });
    }
    // 1. 进度条
    $(document).ajaxStart(function () {
        NProgress.start();
    });

    $(document).ajaxStop(function () {
        // 模拟网络延迟
        setTimeout(function () {
            NProgress.done();
        }, 500)
    });

    // 2. 左侧分类管理切换
    $('.nav .category').on('click', function () {
        $('.nav .child').slideToggle();
    });

    // 3. 左侧菜单栏切换功能
    $('.lt_menu').on('click', function () {
        $('.lt_aside').toggleClass('hidemenu');
        $('.lt_toolbar').toggleClass('hidemenu');
        $('.lt_main').toggleClass('hidemenu');
    });

    // 4. 公共退出功能
    //   4.1 退出按钮绑定点击事件
    $('.lt_logout').on('click', function () {
        $('#logoutModal').modal('show')
    });

    //  4.2 给退出按钮注册点击事件
    $('#btn_logout').on('click', function () {
        $.ajax({
           url: '/employee/employeeLogout',
           dataType: 'json',
            success: function ( info ) {
                if (info.success) {
                    location.href = 'login.html';
                }
            }
        });
    })
});