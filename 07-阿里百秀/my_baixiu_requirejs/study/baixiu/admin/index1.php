<?php
  include_once '../fn.php';
  is_login();
  $page = 'index1';
  $sqlPosts = "select count(*) as total from posts";
  $sqlDrafted = "select count(*) as total from posts where status = 'drafted'";
  $sqlCategory = "select count(*) as total from categories";
  $sqlComments = "select count(*) as total from comments";
  $sqlHeld = "select count(*) as total from comments where status = 'held'";
  
  $postTotal = my_query($sqlPosts)[0];
  $draftedTotal = my_query($sqlDrafted)[0];
  $categoryTotal = my_query($sqlCategory)[0];
  $commentTotal = my_query($sqlComments)[0];
  $heldTotal = my_query($sqlHeld)[0];
?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Dashboard &laquo; Admin</title>
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
      <div class="jumbotron text-center">
        <h1>One Belt, One Road</h1>
        <p>Thoughts, stories and ideas.</p>
        <p><a class="btn btn-primary btn-lg" href="post-add.html" role="button">写文章</a></p>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">站点内容统计：</h3>
            </div>
            <ul class="list-group">
              <li class="list-group-item"><strong><?php echo $postTotal['total']?></strong>篇文章（<strong><?php echo $draftedTotal['total']?></strong>篇草稿）</li>
              <li class="list-group-item"><strong><?php echo $categoryTotal['total']?></strong>个分类</li>
              <li class="list-group-item"><strong><?php echo $commentTotal['total']?></strong>条评论（<strong><?php echo $heldTotal['total']?></strong>条待审核）</li>
            </ul>
          </div>
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>

  <?php include_once './inc/aside.php'?>

  <script src="../assets/vendors/jquery/jquery.js"></script>
  <script src="../assets/vendors/bootstrap/js/bootstrap.js"></script>
  <script>NProgress.done()</script>
</body>
</html>
