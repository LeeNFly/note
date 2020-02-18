<?php

  include_once "../fn.php";
  is_login();

  // 页面标识, 以页面名为标识
  $page = "categories";
?>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Categories &laquo; Admin</title>
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
        <h1>分类目录</h1>
      </div>
      <!-- 有错误信息时展示 -->
      <!-- <div class="alert alert-danger">
        <strong>错误！</strong>发生XXX错误
      </div> -->
      <div class="row">
        <div class="col-md-4">
          <form id="form">
            <h2>添加新分类目录</h2>
            <!-- 添加一个隐藏域, 用于存储需要修改的分类 id -->
            <input type="hidden" name="id" id="id">
            <div class="form-group">
              <label for="name">名称</label>
              <input id="name" class="form-control" name="name" type="text" placeholder="分类名称">
            </div>
            <div class="form-group">
              <label for="slug">别名</label>
              <input id="slug" class="form-control" name="slug" type="text" placeholder="slug">
              <p class="help-block">https://zce.me/category/<strong>slug</strong></p>
            </div>
            <div class="form-group">              
              <input type="button" class="btn btn-primary btn-add" value="添加">
              <input type="button" class="btn btn-primary btn-update" value="修改" style="display: none;">
              <!-- 如果 input type类型, 是reset可以重置表单 -->
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
                <th class="text-center" width="40"><input type="checkbox"></th>
                <th>名称</th>
                <th>Slug</th>
                <th class="text-center" width="100">操作</th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr>
                <td class="text-center"><input type="checkbox"></td>
                <td>未分类</td>
                <td>uncategorized</td>
                <td class="text-center">
                  <a href="javascript:;" class="btn btn-info btn-xs">编辑</a>
                  <a href="javascript:;" class="btn btn-danger btn-xs">删除</a>
                </td>
              </tr> -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  
  <?php include_once "./inc/aside.php"?>

  <script src="../assets/vendors/jquery/jquery.js"></script>
  <script src="../assets/vendors/bootstrap/js/bootstrap.js"></script>
  <script>NProgress.done()</script>
  <script src="../assets/vendors/template/template-web.js"></script>
  <script type="text/html" id="tpl">
    {{ each list v i }}
      <tr>
        <td class="text-center"><input type="checkbox"></td>
        <td>{{ v.name }}</td>
        <td>{{ v.slug }}</td>
        <td class="text-center" data-id="{{ v.id }}">
          <a href="javascript:;" class="btn btn-info btn-xs btn-edit">编辑</a>
          <a href="javascript:;" class="btn btn-danger btn-xs btn-del">删除</a>
        </td>
      </tr>
    {{ /each }}
  </script>
  <script>
    $(function() {

      // 功能1: 一进入页面就进行页面渲染
      function render() {
        // 发送请求, 获取数据
        $.ajax({
          url: "./categories/cateGet.php",
          dataType: "json",
          success: function( info ) {
            // 将数组包装成对象
            var obj = {
              list: info
            };
            console.log( obj );
            var htmlStr = template("tpl", obj);
            $('tbody').html( htmlStr );
          }
        })
      }
      render();

      // 功能2: 添加功能
      // 1. 用户点击添加按钮
      // 2. 收集表单信息 $('#form').serialize() 使用表单序列化收集表单信息
      // 3. 发送请求, 进行提交, 进行处理
      // 4. 页面重新渲染
      $('.btn-add').on("click", function() {
        // 收集表单信息
        var str = $('#form').serialize();   // name=aaa&slug=bbb
        // 发送请求
        $.ajax({
          url: "./categories/cateAdd.php",
          data: str,
          success: function( info ) {
            console.log( info );
            render();
            // 添加完成, 重置表单
            $('#form')[0].reset();
          }
        })
      });

      // 功能3: 删除功能
      // 1. 点击删除按钮 通过事件委托注册
      // 2. 获取 id
      // 3. 发送请求, 进行删除
      // 4. 页面重新渲染
      $('tbody').on("click", ".btn-del", function() {
        // 获取 id
        var id = $(this).parent().attr("data-id");
        // 发送请求, 进行删除
        $.ajax({
          url: "./categories/cateDel.php",
          data: {
            id: id
          },
          success: function( info ) {
            console.log( info )
            // 页面重新渲染 
            render();
          }
        })
      });

      // 功能4: 编辑功能
      // 4-1 渲染
      // 1. 给编辑按钮添加点击事件
      // 2. 获取 id
      // 3. 发送请求, 请求该条分类的数据
      // 4. 渲染
      $('tbody').on("click", ".btn-edit", function() {
        var id = $(this).parent().attr("data-id");
        $.ajax({
          url: "./categories/cateGetOne.php",
          data: {
            id: id
          },
          dataType: "json",
          success: function( info ) {
            console.log( info );
            $('#name').val(info.name);
            $('#slug').val(info.slug);

            // 让添加按钮, 隐藏
            $('.btn-add').hide();
            // 让编辑按钮, 显示
            $('.btn-update').show();

            // 将分类id存储到隐藏域中
            $('#id').val( info.id );
          }
        })
      })

      // 4-2 修改提交
      // 1. 点击修改按钮
      // 2. 收集数据  $('#form').serialize();
      // 3. 提交数据, 进行请求
      // 4. 页面重新渲染
      $('.btn-update').on("click", function() {
        var str = $('#form').serialize();  // id=16&name=aaa&slug=bbb
        $.ajax({
          url: "./categories/cateUpdate.php",
          data: str,
          success: function( info ) {
            console.log( info );
            // 重新渲染
            render();
            // 将表单重置
            $('#form')[0].reset();
            // 修改按钮隐藏
            $('.btn-update').hide()
            // 添加按钮显示
            $('.btn-add').show();
          }
        })

      });
      


    });
  
  
  </script>
</body>
</html>
