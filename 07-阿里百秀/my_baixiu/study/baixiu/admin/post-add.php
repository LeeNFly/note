<?php
  include_once '../fn.php';
  is_login();
  $page = 'post-add';
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
    <?php include_once './inc/navbar.php'?>
    <div class="container-fluid">
      <div class="page-title">
        <h1>写文章</h1>
      </div>
      <!-- 有错误信息时展示 -->
      <!-- <div class="alert alert-danger">
        <strong>错误！</strong>发生XXX错误
      </div> -->
      <form class="row" method="post" action="./posts/postsAdd.php" enctype="multipart/form-data">
        <div class="col-md-9">
          <div class="form-group">
            <label for="title">标题</label>
            <input id="title" class="form-control input-lg" name="title" type="text" placeholder="文章标题">
          </div>
          <div class="form-group">
            <label for="content">标题</label>
            <textarea id="content" class="form-control input-lg" name="content" cols="30" rows="10" placeholder="内容" style="display: none;"></textarea>
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
            <!-- show when image chose -->
            <img class="help-block thumbnail" id="img" style="display: none; width: 100px; height: 100px">
            <input id="feature" class="form-control" name="feature" type="file" accept="image/gif, image/jpeg, image/jpg, image/png">
          </div>
          <div class="form-group">
            <label for="category">所属分类</label>
            <select id="category" class="form-control" name="category">
              <!-- <option value="1">未分类</option> -->
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

  <?php include_once './inc/aside.php'?>

  <script src="../assets/vendors/wangEditor/wangEditor.min.js"></script>
  <script src="../assets/vendors/moment/moment.js"></script>
  <script src="../assets/vendors/template/template-web.js"></script>
  <script src="../assets/vendors/jquery/jquery.js"></script>
  <script src="../assets/vendors/bootstrap/js/bootstrap.js"></script>
  <script>NProgress.done()</script>

  <script type="text/html" id="cateSel">
    {{each list v i }}
      <option value="{{v.id}}">{{v.name}}</option>
    {{/each}}
  </script>

    <script type="text/html" id="statusSel">
    {{each status v k }}
      <option value="{{k}}">{{v}}</option>
    {{/each}}
  </script>

  <script>
    $(function() {
           // 大思路:
      // 1. 前端将基本文本信息, 文件信息, 进行提交
      // 2. 后台进行保存处理
    
      // 对页面进行优化处理
      // 1. 使用富文本编辑器
        var E = window.wangEditor;
        var editor = new E('#content-box');
        var $content = $('#content');
        editor.customConfig.onchange = function (html) {
            // 监控变化，同步更新到 textarea
            $content.val(html);
        }
        editor.create();

      // 2. 别名同步功能
      //    input 是 html5 新增的事件, 监听表单的输入
      $('#slug').on('input', function() {
        // 输入框中的value值, 一定是一个字符串
        var txt = $(this).val() || 'slug';
        $('#strong').text(txt);
      })

      // 3. 图片实时预览
      $('#feature').on('change', function() {
        var file = this.files[0];
        var imgUrl = URL.createObjectURL(file);
        $('#img').attr('src', imgUrl).show();
      });

      // 4. 时间日期格式化
      //    2017-07-03T02:05
      var dateStr = moment().format('YYYY-MM-DDTHH:mm');
      $('#created').val(dateStr);
      
      // 5. 分类动态渲染
      $.ajax({
        url: './categories/cateGet.php',
        dataType: 'json',
        success: function(info) {
          // console.log(info);
          var htmlStr = template('cateSel', {list: info})
          $('#category').html(htmlStr);
        }
      })
      // 6. 状态动态渲染
      var status = {
        // 草稿（drafted）/ 已发布（published）/ 回收站（trashed）
        drafted: '草稿',
        published: '已发布',
        trashed: '回收站'
      }
      var statusStr = template('statusSel', {status: status});
      $('#status').html(statusStr);
    })
  </script>
</body>
</html>
