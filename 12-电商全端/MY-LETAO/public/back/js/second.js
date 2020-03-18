$(function () {
    var currentPage = 1;
    var pageSize  = 2;
    render();
    function render() {
        $.ajax({
            url: '/category/querySecondCategoryPaging',
            data: {
                page: currentPage,
                pageSize: pageSize
            },
            dataType: 'json',
            success: function ( info ) {
                var htmlStr = template('secondTpl', info);
                $('#second_table').html(htmlStr);

                // 初始化分页组件
                $("#pagintor").bootstrapPaginator({
                    bootstrapMajorVersion: 3,//默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage: info.page,//当前页
                    totalPages: Math.ceil(info.total / info.size),//总页数
                    size:"small",//设置控件的大小，mini, small, normal,large
                    onPageClicked:function(event, originalEvent, type, page){
                        //为按钮绑定点击事件 page:当前点击的按钮值
                        currentPage = page;
                        render();
                    }
                });

            }
        });
    }

    // 添加分类按钮点击事件
    $('#btn_add').on('click', function () {
        $('#addModal').modal('show');

        // 发送请求, 初始化一级分类下拉框
        $.ajax({
            url: '/category/queryTopCategoryPaging',
            data: {
                page: 1,
                pageSize: 100
            },
            dataType: 'json',
            success: function ( info ) {
                console.log(info);
                var htmlStr = template('categoryTpl', info);
                $('.dropdown-menu').html(htmlStr);
            }
        });
    });

    // 给一级分类下拉框绑定点击事件
    $('.dropdown-menu').on('click', 'a', function () {
        $('#cate_text').text($(this).text()); // 修改按钮展示的文本
        $('[name="categoryId"]').val($(this).data('id'));
        // 更新校验状态
        $("#form").data('bootstrapValidator').updateStatus('categoryId', 'VALID')
    })

    // 点击上传图片按钮  (处理方式1)
    // $('#btn_upload').on('click', function () {
    //     $('#inpFile').click();
    // })

    // jquery fileupload 文件上传初始化
    $("#inpFile").fileupload({
        dataType:"json",
        //e：事件对象
        //data：图片上传后的对象，通过data.result.picAddr可以获取上传后的图片地址
        done:function (e, data) {
            var imgAddress = data.result.picAddr
            $('#upload_img').attr('src', imgAddress)
            $('[name="brandLogo"]').val(imgAddress)
            // 更新图片的校验状态
            $("#form").data('bootstrapValidator').updateStatus('brandLogo', 'VALID')
        }
    });

    // 给表单注册校验事件
    //使用表单校验插件
    $('#form').bootstrapValidator({
        //1. 指定不校验的类型，默认为[':disabled', ':hidden', ':not(:visible)'],可以不设置
        excluded: [],

        //2. 指定校验时的图标显示，默认是bootstrap风格
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },

        //3. 指定校验字段
        fields: {
            categoryId: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '请选择一级分类'
                    },
                }
            },
            brandName: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '请输入二级分类'
                    },
                }
            },
            brandLogo: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '请上传图片'
                    },
                }
            },

        }

    });

    // 给表单注册校验成功事件, 阻止默认的表单提交, 使用ajax进行提交
    $("#form").on('success.form.bv', function (e) {
        e.preventDefault();
        //使用ajax提交逻辑
        $.ajax({
            type: 'post',
            url: '/category/addSecondCategory',
            data: $('#form').serialize(),
            dataType: 'json',
            success: function ( info ) {
                if(info.success) {
                    // 重新渲染表格数据
                    currentPage = 1
                    render()
                    // 关闭模态框
                    $('#addModal').modal('hide')
                    reset()
                }
            }
        })
    });

    // 重置表单封装
    function reset() {
        // 重置表单和校验状态
        $("#form").data('bootstrapValidator').resetForm(true)
        // 重置下拉框
        $('#cate_text').text('请选择一级分类')
        // 重置图片
        $('#upload_img').attr('src', './images/none.png')
    }
    //
    $('#addModal').on('hide.bs.modal', function () {
        reset()
    })
});