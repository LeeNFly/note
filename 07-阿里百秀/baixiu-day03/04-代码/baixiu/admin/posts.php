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

  <?php include_once "./inc/aside.php"?>

  <script src="../assets/vendors/jquery/jquery.js"></script>
  <script src="../assets/vendors/bootstrap/js/bootstrap.js"></script>
  <script src="../assets/vendors/template/template-web.js"></script>
  <script src="../assets/vendors/jquery-pagination/jquery.pagination.js"></script>
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
          <a href="javascript:;" class="btn btn-default btn-xs">编辑</a>
          <a href="javascript:;" class="btn btn-danger btn-xs btn-del">删除</a>
        </td>
      </tr>
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
      })


    })
  
  
  </script>
</body>
</html>
