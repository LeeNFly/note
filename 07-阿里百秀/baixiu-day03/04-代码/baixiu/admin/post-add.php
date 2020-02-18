<?php

  include_once "../fn.php";
  is_login();

  $page = "post-add";
?>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Add new post &laquo; Admin</title>
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
        <h1>写文章</h1>
      </div>
      <!-- 有错误信息时展示 -->
      <!-- <div class="alert alert-danger">
        <strong>错误！</strong>发生XXX错误
      </div> -->

      <!-- 三要素 action method name -->
      <!-- 文件上传, 必须要指定 enctype="multipart/form-data" -->
      <form class="row" action="./posts/postsAdd.php" method="post" enctype="multipart/form-data">
        <div class="col-md-9">
          <div class="form-group">
            <label for="title">标题</label>
            <input id="title" class="form-control input-lg" name="title" type="text" placeholder="文章标题">
          </div>
          <div class="form-group">
            <label for="content">标题</label>
            <textarea id="content" class="form-control input-lg" name="content" cols="30" rows="10" placeholder="内容" style="display:none;"></textarea>
            <!-- 准备一个容器, 用于初始化富文本编辑器 -->
            <div id="content-box"></div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="slug">别名</label>
            <input id="slug" class="form-control" name="slug" type="text" placeholder="slug">
            <p class="help-block">https://zce.me/post/<strong id="strong">slug</strong></p>
          </div>
          <div class="form-group">
            <label for="feature">特色图像</label>
            <!-- show when image chose 在文件被选中时显示-->
            <img class="help-block thumbnail" style="display: none; height: 100px; width: 100px;" id="img"  >
            <input id="feature" class="form-control" name="feature" type="file">
          </div>
          <div class="form-group">
            <label for="category">所属分类</label>
            <select id="category" class="form-control" name="category">
              <option value="1">未分类</option>
              <option value="2">潮生活</option>
            </select>
          </div>
          <div class="form-group">
            <label for="created">发布时间</label>
            <input id="created" class="form-control" name="created" type="datetime-local">
          </div>
          <div class="form-group">
            <label for="status">状态</label>
            <select id="status" class="form-control" name="status">
              <option value="drafted">草稿</option>
              <option value="published">已发布</option>
            </select>
          </div>
          <div class="form-group">
            <button class="btn btn-primary" type="submit">保存</button>
          </div>
        </div>
      </form>
    </div>
  </div>

  <?php include_once "./inc/aside.php"?>

  <script src="../assets/vendors/jquery/jquery.js"></script>
  <script src="../assets/vendors/bootstrap/js/bootstrap.js"></script>
  <script src="../assets/vendors/wangEditor/wangEditor.min.js"></script>
  <script src="../assets/vendors/moment/moment.js"></script>
  <script>NProgress.done()</script>

  <script>
    
    $(function() {

      // 大思路:
      // 1. 前端将基本文本信息, 文件信息, 进行提交
      // 2. 后台进行保存处理
      
      // 对页面进行优化处理
      // 1. 使用富文本编辑器
      var E = window.wangEditor;  // 起了个别名
      var editor = new E('#content-box');  // 创建实例
      // 监听富文本编辑器的内容变化, 同步到 textarea 将来用于提交
      editor.customConfig.onchange = function (html) {
        // 监控变化，同步更新到 textarea
        $('#content').val(html)
      }
      editor.create(); // 创建一个文本编辑器


      // 2. 别名同步功能
      //    input 是 html5 新增的事件, 监听表单的输入
      $('#slug').on("input", function() {
        // 获取input框中的值, 如果为空, 初始化成 slug
        var txt = $(this).val() || 'slug';
        $('#strong').text( txt );
      });
      

      // 3. 图片实时预览
      $('#feature').on("change", function() {
        // 获取文件对象
        var file = this.files[0];
        // 根据文件对象生成地址
        var imgUrl = URL.createObjectURL( file );
        // 赋值到 img src 中
        $('#img').attr("src", imgUrl).show();
      }) 
      

      // 4. 时间日期格式化
      //    2017-07-03T02:05
      $('#created').val( moment().format("YYYY-MM-DDTHH:mm") )


      // 5. 分类动态渲染
      // 6. 状态动态渲染



    })
  
  </script>
</body>
</html>
