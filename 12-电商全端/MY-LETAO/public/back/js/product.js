$(function () {
    var currentPage = 1
    var pageSize = 2
    var picArr = [] // 最多存储三张图片
    render()
    // 1. 分页渲染
    function render() {
        $.ajax({
            url: '/product/queryProductDetailList',
            data: {
                page: currentPage,
                pageSize: pageSize
            },
            dataType: 'json',
            success: function ( info ) {
                var jsonStr = template('productTpl', info)
                $('#product_table').html(jsonStr);
                // 初始化分页插件
                $("#pagintor").bootstrapPaginator({
                    bootstrapMajorVersion: 3,//默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage: info.page,//当前页
                    totalPages: Math.ceil((info.total / info.size)),//总页数
                    size: "small",//设置控件的大小，mini, small, normal,large
                    itemTexts: function(type, page, current) {
                        switch (type) {
                            case 'first':
                                return '首页'
                            case 'prev':
                                return '上一页'
                            case 'page':
                                return page
                            case 'next':
                                return '下一页'
                            case 'last':
                                return '尾页'
                        }
                    },
                    onPageClicked: function(event, originalEvent, type,page){
                        //为按钮绑定点击事件 page:当前点击的按钮值
                        currentPage = page
                        render()
                    }
                });

            }
        })
    }

    // 2. 添加商品按钮
    $('#btn_add').on('click', function () {
        $('#addModal').modal('show');
        // 请求二级分类列表
        $.ajax({
            url: '/category/querySecondCategoryPaging',
            data: {
                page: 1,
                pageSize: 100
            },
            dataType: 'json',
            success: function ( info ) {
                var jsonStr = template('brandListTpl', info)
                $('.dropdown-menu').html(jsonStr)
            }
        })
    })

    // 3. 选择二级分类下拉框按钮点击事件
    $('.dropdown-menu').on('click', 'a', function () {
        // 隐藏表单域赋值
        $('[name="brandId"]').val($(this).data('id'))
        $('#brand_text').text($(this).text())
        // 更新校验状态
        $("#form").data('bootstrapValidator').updateStatus('brandId', 'VALID')
    })

    // 4. 多文件上传
    $("#inpFile").fileupload({
        dataType:"json",
        //e：事件对象
        //data：图片上传后的对象，通过data.result.picAddr可以获取上传后的图片地址
        done:function (e, data) {
            console.log(data)
            picArr.unshift(data.result)
            // 构造img标签节点添加到页面上
            $('#product_imgs').prepend('<img src="' + data.result.picAddr + '" width="100"/>')
            if (picArr.length > 3) {
                // 上传图片超过3个
                // 1. 弹出数组中最后一个元素
                picArr.pop()
                $('#product_imgs img:last').remove()
            }

            // 修改校验状态
            if (picArr.length === 3) {
                $("#form").data('bootstrapValidator').updateStatus('picStatus', 'VALID')
            }
        }
    });

    // 5. 添加表单校验
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
            //校验用户名，对应name表单的name属性
            brandId: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '请选择二级分类'
                    },
                }
            },
            proName: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '请输入商品名称'
                    },
                }
            },
            proDesc: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '请输入商品描述'
                    },
                }
            },
            num: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '请输入商品库存'
                    },
                    //正则校验
                    regexp: {
                        regexp: /^[1-9]\d*$/,
                        message: '商品库存格式, 必须是非零开头的数字'
                    }
                }
            },
            size: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '请输入商品尺码'
                    },
                    //正则校验
                    regexp: {
                        regexp: /^\d{2}-\d{2}$/,
                        message: '尺码格式, 必须是 32-40'
                    }
                }
            },
            oldPrice: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '请输入商品原价'
                    },
                }
            },
            price: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '请输入商品价格'
                    },
                }
            },
            picStatus: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '请上传3张图片'
                    },
                }
            },
        }

    });

    // 6. 表单校验成功事件
    $("#form").on('success.form.bv', function (e) {
        e.preventDefault()
        //使用ajax提交逻辑
        var paramStr = $('#form').serialize()
        // brandId=11&proName=12&proDesc=12&num=12&size=12-12&oldPrice=12&price=321&picStatus=
        // 拼接图片参数
        picArr.forEach(function (v, i) {
            paramStr += '&picName' + (i + 1) + '=' + v.picName + '' + '&picAddr' + (i + 1) + '=' + v.picAddr
        })
        console.log(paramStr)

        $.ajax({
            type: 'post',
            url: '/product/addProduct',
            data: paramStr,
            dataType: 'json',
            success: function ( info ) {
                if (info.success) {
                    $('#addModal').modal('hide')
                    currentPage = 1
                    render()
                    // 重置表单内容
                    reset()
                }
            }
        })
    });

    // 7. 重置表单方法
    function reset() {
        $("#form").data('bootstrapValidator').resetForm(true)
        $('#brand_text').text('请选择二级分类')
        $('#product_imgs img').remove()
        picArr = []
    }

    // 8. 关闭添加产品模态框后调用
    $('#addModal').on('hide.bs.modal', function () {
        reset()
    })
})
