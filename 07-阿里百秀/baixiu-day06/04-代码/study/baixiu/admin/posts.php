<?php

  include_once "../fn.php";
  is_login();

  $page = "posts";

?>


<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Posts &laquo; Admin</title>
  <link rel="stylesheet" href="../assets/vendors/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" href="../assets/vendors/font-awesome/css/font-awesome.css">
  <link rel="stylesheet" href="../assets/vendors/nprogress/nprogress.css">
  <link rel="stylesheet" href="../assets/css/admin.css">
  <link rel="stylesheet" href="../assets/vendors/jquery-pagination/pagination.css">
  <script src="../assets/vendors/nprogress/nprogress.js"></script>
</head>
<body>
  <script>NProgress.start()</script>

  <div class="main">

    <?php include_once "./inc/navbar.php" ?>
    
    <div class="container-fluid">
      <div class="page-title">
        <h1>所有文章</h1>
        <a href="post-add.html" class="btn btn-primary btn-xs">写文章</a>
      </div>
      <!-- 有错误信息时展示 -->
      <!-- <div class="alert alert-danger">
        <strong>错误！</strong>发生XXX错误
      </div> -->
      <div class="page-action">
        <!-- show when multiple checked -->
        <a class="btn btn-danger btn-sm" href="javascript:;" style="display: none">批量删除</a>
        <div class="page-box pull-right"></div>
      </div>
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th class="text-center" width="40"><input type="checkbox"></th>
            <th>标题</th>
            <th>作者</th>
            <th>分类</th>
            <th class="text-center">发表时间</th>
            <th class="text-center">状态</th>
            <th class="text-center" width="100">操作</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td class="text-center"><input type="checkbox"></td>
            <td>随便一个名称</td>
            <td>小小</td>
            <td>潮科技</td>
            <td class="text-center">2016/10/07</td>
            <td class="text-center">已发布</td>
            <td class="text-center">
              <a href="javascript:;" class="btn btn-default btn-xs">编辑</a>
              <a href="javascript:;" class="btn btn-danger btn-xs">删除</a>
            </td>
          </tr> -->
        </tbody>
      </table>
    </div>
  </div>

  <?php include_once "./inc/aside.php" ?>
  <?php include_once "./inc/edit.php" ?>


  <script src="../assets/vendors/jquery/jquery.js"></script>
  <script src="../assets/vendors/bootstrap/js/bootstrap.js"></script>
  <script src="../assets/vendors/template/template-web.js"></script>
  <script src="../assets/vendors/jquery-pagination/jquery.pagination.js"></script>
  <script src="../assets/vendors/wangEditor/wangEditor.min.js"></script>
  <script src="../assets/vendors/moment/moment.js"></script>
  <script>NProgress.done()</script>
  <script type="text/html" id="tpl">
    {{ each list v i }}
      <tr>
        <td class="text-center"><input type="checkbox"></td>
        <td>{{ v.title }}</td>
        <td>{{ v.nickname }}</td>
        <td>{{ v.name }}</td>
        <td class="text-center">{{ v.created }}</td>
        <td class="text-center">{{ state[v.status] }}</td>
        <td class="text-center" data-id="{{ v.id }}">
          <a href="javascript:;" class="btn btn-default btn-xs btn-edit">编辑</a>
          <a href="javascript:;" class="btn btn-danger btn-xs btn-del">删除</a>
        </td>
      </tr>
    {{ /each }}
  </script>

  <script type="text/html" id="cateTpl">
    {{ each list v i }}
      <option value="{{ v.id }}">{{ v.name }}</option>
    {{ /each }}
  </script>

  <!-- v 表示每项的值, k 表示键 -->
  <script type="text/html" id="stateTpl">
    {{ each state v k }}
      <option value="{{ k }}">{{ v }}</option>
    {{ /each }}
  </script>

  <script>

    $(function() {
      // 记录当前页
      var currentPage = 1;

      // 英文状态翻译成中文
      // 草稿（drafted）/ 已发布（published）/ 回收站（trashed）
      var state = {
        drafted: "草稿",
        published: "已发布",
        trashed: "回收站"
      };
      // state[v.status]

      // 功能1: 一进入页面, 渲染第一页的数据
      function render( page, pageSize ) {
        // 请求数据, 进行渲染
        $.ajax({
          url: "./posts/postsGet.php",
          data: {
            page: page || 1,
            pageSize: pageSize || 10
          },
          dataType: "json",
          success: function( info ) {
            // 通过模板引擎进行页面渲染
            console.log( info );
            // 将数据 包装成对象
            var obj = {
              list: info,
              state: state
            };
            var htmlStr = template( 'tpl', obj ); // 生成结构
            $('tbody').html( htmlStr ); // 渲染页面
          }
        })
      }
      render();


      // 功能2: 进行分页渲染
      // $('.page-box').pagination(156);
      // 动态获取总条数, 进行分页标签渲染
      function setPage( page ) {
        $.ajax({
          url: "./posts/postsTotal.php",
          dataType: "json",
          success: function( info ) {
            console.log( info );
            // 分页标签初始化
            $('.page-box').pagination( info.total, {
              prev_text: "« 上一页",
              next_text: "下一页 »",
              items_per_page: 10,  // 配置每页多少条
              num_edge_entries: 1,       //两侧首尾分页条目数
              num_display_entries: 5,    //连续分页主体部分分页条目数
              current_page: page - 1 || 0,   //当前页索引
              load_first_page: false, // 一进入页面不调用回调函数
              // 每次点击页码会调用的回调函数
              callback: function( index ) {
                console.log( index );
                // 重新渲染页面
                render( index + 1 );
                // 更新当前页
                currentPage = index + 1;
              }
            })
          }
        })
      }
      setPage();


      // 功能3: 删除功能
      // 1. 点击删除按钮  通过事件委托绑定事件
      // 2. 获取 id   将 id 存在父级 td 中
      // 3. 发送请求, 进行删除操作
      // 4. 重新渲染页面
      $('tbody').on("click", '.btn-del', function() {
        // 获取 id, 发送请求
        var id = $(this).parent().attr("data-id");
        $.ajax({
          url: "./posts/postsDel.php",
          data: {
            id: id
          },
          dataType: "json",
          success: function( info ) {
            // 最大页
            var maxPage = Math.ceil( info.total / 10 );
            // 如果当前页超出最大页, 进行重置
            if ( currentPage > maxPage ) {
              currentPage = maxPage;
            }
            // 页面重新渲染, 重新渲染当前页
            render( currentPage );
            // 重新渲染分页页码
            setPage( currentPage );
          }
        })
      });
      

      // -------------- 初始化模态框 ---------------------
      // (1) 富文本编辑器   引包, 结构, 初始化  (需要和textarea同步)
      var E = window.wangEditor;
      var editor = new E('#content-box');
      // 监听富文本编辑器的变化
      editor.customConfig.onchange = function (html) {
          // 监控变化，同步更新到 textarea
          $('#content').val( html );
      }
      editor.create();

      // (2) 别名同步   input
      $('#slug').on("input", function() {
        // 实时将文本框中的值同步到 strong 标签中
        $('#strong').text( $(this).val() || 'slug' );
      })


      // (3) 图片实时预览  URL.createObjectURL(文件对象)
      $('#feature').on("change", function() {
        var file = this.files[0]; // 获取文件对象
        var imgUrl = URL.createObjectURL( file );  // 得到指向文件对象的地址
        $('#img').attr("src", imgUrl).show(); // 指定地址
      })

      // (4) 时间日期格式化, 格式要求: YYYY-MM-DDTHH:mm  (通用国际日期格式)
      $('#created').val( moment().format("YYYY-MM-DDTHH:mm") );

      // (5) 分类渲染
      $.ajax({
        url: "./categories/cateGet.php",
        dataType: "json",
        success: function( info ) {
          // 将数组包装成对象, 用于模板渲染
          var obj = {
            list: info 
          };
          var htmlStr = template("cateTpl", obj);
          $('#category').html( htmlStr );  // 进行渲染
        }
      });

      // (6) 状态渲染
      var state = {
        drafted: "草稿",
        published: "已发布",
        trashed: "回收站"
      };
      var obj = {
        state: state
      }
      var htmlStr = template( "stateTpl", obj );
      $('#status').html( htmlStr );

      // -------------- 初始化模态框 ---------------------


      // 功能4: 编辑显示模态框功能
      // (1) 用户点击编辑按钮  通过事件委托注册事件
      // (2) 弹出一个模态框 
      // (3) 获取 id, 发送请求, 请求当前文章数据
      // (4) 进行页面渲染
      $('tbody').on("click", ".btn-edit", function() {
        // 让模态框显示
        $('.edit-box').show();
        // 获取 id, 发送请求, 请求数据
        var id = $(this).parent().attr("data-id");
        $.ajax({
          url: "./posts/postsGetOne.php",
          data: {
            id: id
          },
          dataType: "json",
          success: function( info ) {
            console.log( info )
            // (1) 渲染文章
            $('#title').val(info.title);
            // (2) 对富文本编辑器 和 textarea 进行初始化
            editor.txt.html(info.content);
            $('#content').val(info.content);  // textarea 是表单元素, 用 val
            // (3) 别名设置, strong设置
            $('#slug').val(info.slug);
            $('#strong').text(info.slug);
            // (4) 图片初始化
            $('#img').attr("src", info.feature ).show();
            // (5) 发布时间
            $('#created').val(moment(info.created).format("YYYY-MM-DDTHH:mm"));
            // (6) 设置分类
            $('#category').val(info.category_id);
            // (7) 设置状态
            $('#status').val(info.status);

            // (8) 将 id 设置到隐藏域中, 将来用于提交
            $('#id').val(info.id)
          }
        })

      });




      // 功能5: 点击修改按钮, 进行修改功能
      $('#btn-update').on("click", function() {
        // 需要在收集前, 设置 id
        // 收集表单数据, 用于表单提交 (文件和基本表单数据  使用 formData 收集)
        var formData = new FormData( $('#editForm')[0] );
        // 结合着jquery ajax 发送 formData
        $.ajax({
          type: "post",
          url: "./posts/postsUpdate.php", 
          // 传输的数据 data: formData
          data: formData,
          contentType: false, // 不进行设置请求头 (formData不需要设置请求头, 浏览器会自动检测设置)
          processData: false, // 不进行编码 (true 会将对象编码成字符串)
          success: function( info ) {
            // 修改完成
            // 1. 关闭模态框
            $('.edit-box').hide();
            // 2. 重新渲染
            render( currentPage );
          }
        })
      });


      // 功能6: 关闭模态框功能
      $('#btn-cancel').on("click", function() {
        // 隐藏模态框
        $('.edit-box').hide();
      })


    })
  
  
  </script>
</body>
</html>
