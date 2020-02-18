<?php
  include_once '../fn.php';
  is_login();
  $page = 'comments';
  
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
    <?php include_once './inc/navbar.php'?>
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
          <button class="btn btn-info btn-sm btn-approveds">批量批准</button>
          <button class="btn btn-danger btn-sm btn-dels">批量删除</button>
        </div>
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
            <th class="text-center" width="40"><input type="checkbox" class="th-chk"></th>
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

  <?php include_once './inc/aside.php'?>

  <script src="../assets/vendors/template/template-web.js"></script>
  <script src="../assets/vendors/jquery/jquery.js"></script>
  <script src="../assets/vendors/bootstrap/js/bootstrap.js"></script>
  <script src="../assets/vendors/jquery-pagination/jquery.pagination.js"></script>
  <script>NProgress.done()</script>
  <script type="text/html" id="tpl">
    {{each list v i }}
      <tr>
        <td class="text-center"><input type="checkbox" class="tb-chk" data-id="{{v.id}}"></td>
        <td>{{v.author}}</td>
        <td>{{v.content.substr(0, 20) + '...'}}</td>
        <td>《{{v.title}}》</td>
        <td>{{v.created}}</td>
        <td>{{status[v.status]}}</td>
        <td class="text-right" data-id="{{v.id}}">
          {{if v.status === 'held'}}
            <a href="javascript:;" class="btn btn-info btn-xs btn-approved">批准</a>
          {{/if}}
          <a href="javascript:;" class="btn btn-danger btn-xs btn-del">删除</a>
        </td>
      </tr>
    {{/each}}
  </script>
  <script>
    $(function() {
      var status = {
        held: '待审核',
        approved: '准许',
        rejected: '拒绝',
        trashed: '回收站'
      }
      var currentPage = 1;
      // 功能1: 进行页面的基本渲染, 发送请求获取数据, 通过模板引擎渲染
      function render(page, pageSize) {
          $.ajax({
          url: './comments/comGet.php',
          dataType: 'json',
          data: {
            page: page || 1,
            pageSize: pageSize || 10
          },
          success: function (info) {
            // console.log(info)
            var htmlStr = template('tpl', {list: info, status: status});
            $('tbody').html(htmlStr);
          }
          })
      }
      // 请求第 1 页的数据, 每页 10 条
      render();
      
      // 功能2: 实现分页功能, 进行分页插件初始化
      function setPage(page, pageSize) {
        $.ajax({
          url: './comments/comTotal.php',
          dataType: 'json',
          success: function(info) {
            // console.log(info);
            $('.page-box').pagination(info.total, {
              prev_text: "« 上一页",
              next_text: "下一页 »",
              items_per_page:pageSize || 10,
              num_edge_entries: 1,       //两侧首尾分页条目数
              num_display_entries: 5,    //连续分页主体部分分页条目数
              current_page: page - 1 || 0, //当前页索引
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

      // 功能3: 批准功能
      // 由于ajax的回调函数是在浏览器任务队列中等待栈空时被执行的
      // 代码执行到此处, ajax回到函数还未被执行, 页面还未被渲染完毕
      // 需要使用事件委托绑定事件
      $('tbody').on('click', '.btn-approved', function () {
        var id = $(this).parent().attr('data-id');
        $.ajax({
          url: './comments/comApproved.php',
          data: {
            id: id
          },
          success: function (info) {
            // console.log(info);
            render(currentPage);
          }
        })
      })
      // 功能4: 删除功能
      $('tbody').on('click', '.btn-del', function() {
        var id = $(this).parent().attr('data-id');
        $.ajax({
          url: './comments/comDel.php',
          data: {
            id: id
          },
          dataType: 'json',
          success: function (info) {
            // console.log(info)
            var maxPage = Math.ceil((info.total / 10));
            if (currentPage > maxPage) {
              currentPage = maxPage;
            }
            render(currentPage);
            setPage(currentPage);
          }
        })
      });

      // 功能5: 全选功能
      $('.th-chk').on('click', function () {
        var flag = $(this).prop('checked');
        $('.tb-chk').prop('checked', flag);
        if (flag) {
          $('.btn-batch').show();
        } else {
          $('.btn-batch').hide();
        }
      })
      // 功能6: 选中同步
      $('tbody').on('click', '.tb-chk', function(){
        var total = $('.tb-chk').length;
        var select = $('.tb-chk:checked').length;
        $('.th-chk').prop('checked', total === select);
        if (select >= 2) {
          $('.btn-batch').show();
        }
        else {
          $('.btn-batch').hide();
        }
      })
      // 封装方法, 获得选中记录的id拼接, 如: 3,5,7
      function getIds() {
        var arr = [];
        $('.tb-chk:checked').each(function(index, ele) {
          var id = $(this).attr('data-id');
          arr.push(id);
        })
        return arr.join(',');
      }
      // 功能7: 批量批准功能
      $('.btn-approveds').on('click', function(){
        var ids = getIds();
        $.ajax({
          url: './comments/comApproved.php',
          data: {
            id: ids
          },
          success: function () {
            render(currentPage);
            $('.th-chk').prop('checked', false);
            $('.btn-batch').hide();
          }
        })
      })
      // 功能8: 批量删除功能
      $('.btn-dels').on('click', function() {
        var ids = getIds();
        $.ajax({
          url: './comments/comDel.php',
          data: {
            id: ids
          },
          dataType: 'json',
          success: function(info) {
            var maxPage = Math.ceil((info.total / 10));
            if (currentPage > maxPage) {
              currentPage = maxPage;
            }
            render(currentPage);
            setPage(currentPage);
            $('.th-chk').prop('checked', false);
            $('.btn-batch').hide();
          }
        })
      })
    })
  </script>
</body>
</html>
