<?php

  include_once "../fn.php";
  is_login();

  $page = "comments";

?>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Comments &laquo; Admin</title>
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
        <h1>所有评论</h1>
      </div>
      <!-- 有错误信息时展示 -->
      <!-- <div class="alert alert-danger">
        <strong>错误！</strong>发生XXX错误
      </div> -->
      <div class="page-action">
        <!-- show when multiple checked -->
        <div class="btn-batch" style="display: none">
          <button class="btn btn-info btn-sm">批量批准</button>
          <button class="btn btn-danger btn-sm">批量删除</button>
        </div>
        <!-- 准备自己的容器, 实现分页 -->
        <div class="page-box text-right">

        </div>
      </div>
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th class="text-center" width="40"><input type="checkbox"></th>
            <th>作者</th>
            <th>评论</th>
            <th>评论在</th>
            <th>提交于</th>
            <th>状态</th>
            <th class="text-center" width="100">操作</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td class="text-center"><input type="checkbox"></td>
            <td>大大</td>
            <td>楼主好人，顶一个</td>
            <td>《Hello world》</td>
            <td>2016/10/07</td>
            <td>未批准</td>
            <td class="text-center">
              <a href="javascript:;" class="btn btn-info btn-xs">批准</a>
              <a href="javascript:;" class="btn btn-danger btn-xs">删除</a>
            </td>
          </tr> -->
        </tbody>
      </table>
    </div>
  </div>

  <?php include_once "./inc/aside.php" ?>

  <script src="../assets/vendors/jquery/jquery.js"></script>
  <script src="../assets/vendors/jquery-pagination/jquery.pagination.js"></script>
  <script src="../assets/vendors/bootstrap/js/bootstrap.js"></script>
  <script src="../assets/vendors/template/template-web.js"></script>
  <script>NProgress.done()</script>

  <script type="text/html" id="tpl">
    {{ each list v i }}
      <tr>
        <td class="text-center"><input type="checkbox"></td>
        <td>{{ v.author }}</td>
        <!-- substr(从哪开始, 截取多少个) -->
        <td>{{ v.content.substr(0, 20) }}...</td>
        <td>《{{ v.title }}》</td>
        <td>{{ v.created }}</td>
        <td>{{ state[v.status] }}</td>
        <td class="text-right" data-id="{{ v.id }}">
          {{ if v.status === 'held' }}
            <a href="javascript:;" class="btn btn-info btn-xs btn-approved">批准</a>
          {{ /if }}
          <a href="javascript:;" class="btn btn-danger btn-xs btn-del">删除</a>
        </td>
      </tr>
    {{ /each }}
  </script>

  <script>
    $(function() {
      var currentPage = 1; // 默认当前页第一页

      // 待审核（held）/ 准许（approved）/ 拒绝（rejected）/ 回收站（trashed）
      var state = {
        held: "待审核",
        approved: "准许",
        rejected: "拒绝",
        trashed: "回收站"
      }
      // var key = "held";
      // console.log( state[ key ] );

      // 功能1: 进行页面的基本渲染, 发送请求获取数据, 通过模板引擎渲染
      function render( page, pageSize ) {
        $.ajax({
          url: "./comments/comGet.php",
          data: {
            page: page || 1,
            pageSize: pageSize || 10
          },
          dataType: "json",
          success: function( info ) {
            // 需要将 info 数组, 包装在一个对象中
            var obj = {
              list: info,
              state: state
            };
            console.log( obj );
            // template( 模板id, 数据对象 )  要求是一个对象
            var htmlStr = template( 'tpl', obj );  // 生成 htmlStr
            $('tbody').html( htmlStr ); // 渲染到页面中
          }
        })
      }
      // 请求第 1 页的数据, 每页 10 条
      render();


      // 功能2: 实现分页功能, 进行分页插件初始化
      function setPage( page ) {
        // page: 通过设置current_page: page, 保证当前高亮页和页面渲染的数据保持一致
        // 获取当前评论总条数
        $.ajax({
          url: "./comments/comTotal.php",
          dataType: "json",
          success: function( info ) {
            // 根据总条数, 初始化分页插件
            $('.page-box').pagination( info.total,{
              prev_text: "« 上一页",
              next_text: "下一页 »",
              items_per_page: 10,  // 每页 10 条
              num_edge_entries: 1,   // 两侧首尾分页条目数
              num_display_entries: 5,    // 连续分页主体部分分页条目数
              current_page: page - 1 || 0,   // 当前页索引, 控制按钮亮
              load_first_page: false,  // 一进入页面不执行回调

              // 每次页码被点击都会被调用的函数(插件提供的)
              callback: function( index ) {
                // 点击页码时, 应该请求对应页码的数据, 进行渲染

                // 利用封装的render方法, 渲染点击对应的页面数据
                render( index + 1 );

                // 记录当前页
                currentPage = index + 1;
              }
            });
          }
        })
      }
      setPage();



      // 功能3: 批准功能
      // 1. 在渲染的时候, 将需要的 id 存在 父级 td 中
      // 2. 给按钮注册点击事件
      // 3. 获取id, 发请求
      // 4. 后台接收到请求, 进行批准
      // 5. 页面重新渲染
      console.log( $('.btn-approved') );

      // 通过模板动态生成的结构, 一开始页面中没有, 不能直接绑定事件
      // 给存在的父级元素绑定事件, 由子元素触发事件即可 (事件委托)

      // 事件委托语法: $('父级元素').on( "事件类型", "子代元素", function() { ... })
      // 1. 可以给动态生成的结构绑定点击事件
      // 2. 因为事件是给父辈元素绑定的, 所以事件只需要绑定一次, 所有子元素都可以有事件了, 效率高
      // 3. 新增的节点的事件处理函数被调用时, 说明事件触发了, 说明此时页面已经渲染完成了, 可以获得到页面所有元素
      $('tbody').on("click", ".btn-approved", function() {
        // 获取 id, 发送请求
        var id = $(this).parent().attr("data-id");

        $.ajax({
          url: "./comments/comApproved.php",
          data: {
            id: id
          },
          success: function( info ) {
            // 我们自己的接口没有返回值, 如果返回了内容, 说明是报错信息
            console.log( info )
            // 重新渲染当前页面
            render( currentPage );
          }
        })
      });


      // 功能4: 删除功能
      // 1. 在渲染的时候, 将需要的 id 存在 父级 td 中
      // 2. 给按钮注册点击事件
      //   由于按钮是通过模板动态生成的, 不能直接绑定
      //   需要通过事件委托来进行绑定事件
      // 3. 获取id, 发请求
      // 4. 后台接收到请求, 进行删除
      // 5. 页面重新渲染

      $('tbody').on("click", ".btn-del", function() {
        // 获取 id 发送请请求
        var id = $(this).parent().attr("data-id");

        $.ajax({
          url: "./comments/comDel.php",
          data: {
            id: id
          },
          dataType: "json",
          success: function( info ) {
            console.log( info )

            // 最大多少页
            var maxPage = Math.ceil( info.total / 10 );
            if ( currentPage > maxPage ) {
              // 如果当前页超出了最大页
              currentPage = maxPage;
            }

            // 重新渲染当前页
            render( currentPage );
            // 总条数发生改变, 需要重新渲染分页标签
            setPage( currentPage );
          }
        })
      })


    });


  </script>
</body>
</html>
