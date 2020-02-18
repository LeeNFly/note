<?php
  include_once '../fn.php';
  is_login();
  $page = 'posts';
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
    <?php include_once './inc/navbar.php'?>
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
        <!-- <ul class="pagination pagination-sm pull-right">
          <li><a href="#">上一页</a></li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">下一页</a></li>
        </ul> -->
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

  <?php include_once './inc/aside.php'?>
  <?php include_once './inc/edit.php'?>
  <script src="../assets/vendors/jquery/jquery.js"></script>
  <script src="../assets/vendors/bootstrap/js/bootstrap.js"></script>
  <script src="../assets/vendors/template/template-web.js"></script>
  <script src="../assets/vendors/jquery-pagination/jquery.pagination.js"></script>
  <script src="../assets/vendors/wangEditor/wangEditor.min.js"></script>
  <script src="../assets/vendors/moment/moment.js"></script>
  <script src="../assets/vendors/template/template-web.js"></script>
  <script>NProgress.done()</script>
  <script type="text/html" id="tpl">
    {{each list v i}}
    <tr>
      <td class="text-center"><input type="checkbox"></td>
      <td>{{v.title}}</td>
      <td>{{v.nickname}}</td>
      <td>{{v.name}}</td>
      <td class="text-center">{{v.created}}</td>
      <td class="text-center">{{status[v.status]}}</td>
      <td class="text-center" data-id="{{v.id}}">
        <a href="javascript:;" class="btn btn-default btn-xs btn-edit">编辑</a>
        <a href="javascript:;" class="btn btn-danger btn-xs btn-del">删除</a>
      </td>
    </tr>
    {{/each}}
  </script>

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
      var status = {
        drafted: '草稿',
        published: '已发布',
        trashed: '回收站'
      }
      var currentPage = 1;
       // 功能1: 一进入页面, 渲染第一页的数据
      function render(page, pageSize) {
        $.ajax({
          url: './posts/postsGet.php',
          data: {
            page: page || 1,
            pageSize: pageSize || 10
          },
          dataType: 'json',
          success: function(info) {
            // console.log(info);
            var htmlStr = template('tpl', {list: info, status: status})
            $('tbody').html(htmlStr);
          }
        })
      }
      render();
      // 功能2: 进行分页渲染
      function setPage(page, pageSize) {
        // 获取总记录数
        $.ajax({
          url: './posts/postsTotal.php',
          dataType: 'json',
          success: function(info) {
            // console.log(info)
            $('.page-box').pagination(info.total, {
              prev_text: "« 上一页",
              next_text: "下一页 »",
              items_per_page:10,
              num_edge_entries: 1,       //两侧首尾分页条目数
              num_display_entries: 5,    //连续分页主体部分分页条目数
              current_page: page - 1 || 0,   //当前页索引
              load_first_page: false,
              callback: function(index) {
                render(index + 1);
                currentPage = index + 1;
              }
            })
          }
        })
      }
      setPage();
      // 功能3: 删除功能
      $('tbody').on('click', '.btn-del', function() {
        var id = $(this).parent().attr('data-id');
        $.ajax({
          url: './posts/postsDel.php',
          data: {
            id: id
          },
          dataType: 'json',
          success: function(info) {
            // console.log(info);
            var maxPage = Math.ceil((info.total / 10));
            if (currentPage > maxPage) {
              currentPage = maxPage;
            }
            render(currentPage);
            setPage(currentPage);
          }
        })
      })

      // -------------- 初始化模态框 ---------------------
      // (1) 富文本编辑器   引包, 结构, 初始化  (需要和textarea同步)
        var E = window.wangEditor
        var editor = new E('#content-box')
        $content = $('#content');
        editor.customConfig.onchange = function (html) {
            // 监控变化，同步更新到 textarea
            $content.val(html);
        }
        editor.create();
      // (2) 别名同步   input
        $('#slug').on('input', function() {
          var txt = $(this).val() || 'slug';
          $('#strong').text(txt);
        })
      // (3) 图片实时预览  URL.createObjectURL(文件对象)
        $('#feature').on('change', function() {
          var file = this.files[0];
          var imgUrl = URL.createObjectURL(file);
          $('img').attr('src', imgUrl).show();
        })
      // (4) 时间日期格式化, 格式要求: YYYY-MM-DDTHH:mm  (通用国际日期格式)
        var dataStr = moment().format('YYYY-MM-DDTHH:mm');
        $('#created').val(dataStr);
      // (5) 分类渲染
        $.ajax({
          url: './categories/cateGet.php',
          dataType: 'json',
          success: function(info) {
            var htmlStr = template('cateSel', {list: info});
            $('#category').html(htmlStr);
          }
        })
      // (6) 状态渲染
      var status = {
        // 草稿（drafted）/ 已发布（published）/ 回收站（trashed）
        drafted: '草稿',
        published: '已发布',
        trashed: '回收站'
      }
      var statusStr = template('statusSel', {status: status});
      $('#status').html(statusStr);
      // -------------- 初始化模态框 ---------------------

      // 功能4: 编辑显示模态框功能
      $('body').on('click', '.btn-edit', function() {
        var id = $(this).parent().attr('data-id');
        $.ajax({
          url: './posts/postsGetOne.php',
          data: {
            id: id
          },
          dataType: 'json',
          success: function(info) {
            console.log(info);
            $('#id').val(info.id);
            $('#title').val(info.title);
            editor.txt.html(info.content);
            $('#content').val(info.content);
            $('#slug').val(info.slug);
            $('#strong').text(info.slug)
            $('#img').attr('src', info.feature).show();
            $('#category').val(info.category_id);
            $('#created').val(moment(info.created).format('YYYY-MM-DDTHH:mm'));
            $('#status').val(info.status);
          }
        })
        $('.edit-box').show();
      })
      // 功能5: 点击修改按钮, 进行修改功能
      $('#btn-update').on('click', function() {
        var formData = new FormData($('#editForm')[0]);
        $.ajax({
          type: 'post',
          url: './posts/postsEdit.php',
          data: formData,
          contentType: false, // 不进行设置请求头 (formData不需要设置请求头, 浏览器会自动检测设置)
          processData: false, // 不进行编码 (true 会将对象编码成字符串)
          success: function (info) {
            $('.edit-box').hide();
            render(currentPage);
          }
        });
      })
      
      // 功能6: 关闭模态框功能
      $('#btn-cancel').on('click', function() {
        $('.edit-box').hide();
      })
      
    })
  </script>
</body>
</html>
