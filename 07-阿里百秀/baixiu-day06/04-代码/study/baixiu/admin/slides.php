<?php

  include_once "../fn.php";
  is_login();

  $page = "slides";
?>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Slides &laquo; Admin</title>
  <link rel="stylesheet" href="../assets/vendors/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" href="../assets/vendors/font-awesome/css/font-awesome.css">
  <link rel="stylesheet" href="../assets/vendors/nprogress/nprogress.css">
  <link rel="stylesheet" href="../assets/css/admin.css">
  <script src="../assets/vendors/nprogress/nprogress.js"></script>
</head>
<body>
  <script>NProgress.start()</script>

  <div class="main">
    <?php include_once "./inc/navbar.php" ?>
    <div class="container-fluid">
      <div class="page-title">
        <h1>图片轮播</h1>
      </div>
      <!-- 有错误信息时展示 -->
      <!-- <div class="alert alert-danger">
        <strong>错误！</strong>发生XXX错误
      </div> -->
      <div class="row">
        <div class="col-md-4">
          <form id="form">
            <h2>添加新轮播内容</h2>
            <div class="form-group">
              <label for="image">图片</label>
              <!-- show when image chose -->
              <img class="help-block thumbnail" style="display: none">
              <input id="image" class="form-control" name="image" type="file">
            </div>
            <div class="form-group">
              <label for="text">文本</label>
              <input id="text" class="form-control" name="text" type="text" placeholder="文本">
            </div>
            <div class="form-group">
              <label for="link">链接</label>
              <input id="link" class="form-control" name="link" type="text" placeholder="链接">
            </div>
            <div class="form-group">
              <input class="btn btn-primary btn-add" type="button" value="添加">
            </div>
          </form>
        </div>
        <div class="col-md-8">
          <div class="page-action">
            <!-- show when multiple checked -->
            <a class="btn btn-danger btn-sm" href="javascript:;" style="display: none">批量删除</a>
          </div>
          <table class="table table-striped table-bordered table-hover">
            <thead>
              <tr>               
                <th class="text-center">图片</th>
                <th>文本</th>
                <th>链接</th>
                <th class="text-center" width="100">操作</th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr>                
                <td class="text-center"><img class="slide" src="../uploads/slide_1.jpg"></td>
                <td>XIU功能演示</td>
                <td>#</td>
                <td class="text-center">
                  <a href="javascript:;" class="btn btn-danger btn-xs">删除</a>
                </td>
              </tr> -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <?php include_once "./inc/aside.php" ?>

  <script src="../assets/vendors/jquery/jquery.js"></script>
  <script src="../assets/vendors/bootstrap/js/bootstrap.js"></script>
  <script src="../assets/vendors/template/template-web.js"></script>
  <script>NProgress.done()</script>
  <script type="text/html" id="tpl">
    {{ each list v i }}
      <tr>                
        <td class="text-center"><img class="slide" src="{{ v.image }}"></td>
        <td>{{ v.text }}</td>
        <td>{{ v.link }}</td>
        <td class="text-center">
          <a data-index="{{ i }}" href="javascript:;" class="btn btn-danger btn-xs btn-del">删除</a>
        </td>
      </tr>
    {{ /each }}
  </script>
  <script>

    $(function() {

      // 功能1: 请求数据进行渲染
      function render() {
        $.ajax({
          url: "./slide/slideGet.php",
          dataType: "json",
          success: function( info ) {
            console.log( info )
            var htmlStr = template( 'tpl', { list: info } );
            $('tbody').html( htmlStr );
          }
        })
      }
      render();


      // 功能2: 添加轮播图功能
      // 1. 用户点击添加按钮
      // 2. 收集表单数据  formData
      // 3. 发送请求, 提交给后台进行添加
      // 4. 后台进行处理完成后, 前端重新渲染
      $('.btn-add').on("click", function() {
        // 收集表单数据, 利用formData 管理
        var formData = new FormData( $('#form')[0] );
        
        // 发送请求
        // formData 和 $.ajax 配置使用, 必须设置 contentType  processData
        $.ajax({
          type: "post",
          url: "./slide/slideAdd.php",
          data: formData,
          contentType: false,
          processData: false,
          success: function( info ) {
            console.log( info );
            // 重新渲染页面
            render();
            // 重置表单
            $('#form')[0].reset();
          }
        });

      });


      // 功能3: 删除功能
      // 1. 绑定事件 (事件委托)
      // 2. 获取 index 下标
      // 3. 发送请求, 进行删除
      // 4. 重新渲染
      $('tbody').on("click", ".btn-del", function() {
        var index = $(this).attr("data-index");
        // 发送请求
        $.ajax({
          url: "./slide/slideDel.php",
          data: {
            index: index
          },
          success: function( info ) {
            // 页面重新渲染
            render();
          }
        })
      });


    })
  
  </script>
</body>
</html>
