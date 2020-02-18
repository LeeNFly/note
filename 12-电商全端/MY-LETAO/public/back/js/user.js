$(function () {
    var currentPage = 1;
    var pageSize = 2;
    var id = '';
    var isDelete;
    render();

    function render() {
        $.ajax({
            url: '/user/queryUser',
            data: {
                page: currentPage,
                pageSize: pageSize,
            },
            dataType: 'json',
            success: function ( info ) {
                var htmlStr = template('userTpl', info);
                $('#user_table').html(htmlStr);

                // 每次查询结束后, 重新初始化分页组件
                $("#pagintor").bootstrapPaginator({
                    bootstrapMajorVersion: 3,//默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage: info.page,//当前页
                    totalPages: Math.ceil(info.total / info.size),//总页数
                    size:"small",//设置控件的大小，mini, small, normal,large
                    onPageClicked:function(event, originalEvent, type,page){
                        //为按钮绑定点击事件 page:当前点击的按钮值
                        currentPage = page;
                        render();
                    }
                });
            }
        });
    }

    // 给按钮绑定点击事件
    $('#user_table').on('click', 'button', function () {
        $('#confirmModal').modal('show');
        id = $(this).parent().data('id');
        isDelete = $(this).data('isdelete');
    });

    $('#btn_confirm').on('click', function () {
        $.ajax({
            type: 'post',
            url: '/user/updateUser',
            data: {
                id: id,
                isDelete: isDelete
            },
            dataType: 'json',
            success: function (info) {
                $('#confirmModal').modal('hide');
                render();
            }
        });
    });

});