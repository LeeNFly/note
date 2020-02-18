<?php

  // 如果 $_POST 非空, 说明提交了数据, 需要处理
  if ( !empty( $_POST ) ) {

    // 引包
    include_once "../fn.php";

    $email = $_POST['email'];
    $password = $_POST['password'];

    // 邮箱和密码要求非空
    if ( empty( $email ) || empty( $password ) ) {
      $msg = "用户名或者密码为空";
    }
    else {
      // 用户已输入邮箱和密码
      // 注意: 如果是字符串需要加引号, 编写sql语句外双内单
      $sql =  "select * from users where email = '$email'"; 
      $res = my_query( $sql );

      // 如果查出来 $res 是空数组, 说明没有该用户, 就提示 用户名 不存在用户名 不存在
      if ( empty( $res ) ) {
        $msg = "用户名不存在";
      }
      else {
        $data = $res[0];
        
        // 进行密码校验
        if ( $data['password'] === $password ) {
          // 用户名密码正确, 跳转到首页
          // 需要记录用户信息 user_id
          session_start();
          $_SESSION['user_id'] = $data['id'];
          header("location: index1.php");
        }
        else {
          // 密码错误
          $msg = "密码错误";
        }

      }
    }
  }
?>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Sign in &laquo; Admin</title>
  <link rel="stylesheet" href="../assets/vendors/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" href="../assets/css/admin.css">
</head>
<body>
  <!-- 表单的三大属性  action method name  -->

  <div class="login">
    <!-- action="" 表示自己提交给自己 -->
    <form class="login-wrap" action="" method="post" >
      <img class="avatar" src="../assets/img/default.png">
      <!-- 有错误信息时展示 -->
      <?php if ( isset( $msg ) ) { ?>
        <div class="alert alert-danger">
          <strong>错误！</strong> <?php echo $msg ?>
        </div>
      <?php } ?>
      <div class="form-group">
        <label for="email" class="sr-only">邮箱</label>
        <input 
            name="email"
            id="email" 
            type="text" 
            class="form-control" 
            placeholder="邮箱"
            value="<?php echo isset( $email ) ? $email : '' ?>"
            autofocus>
        <!-- 如果用户提交了, 将邮箱继续保留 -->
      </div>
      <div class="form-group">
        <label for="password" class="sr-only">密码</label>
        <input
            name="password" 
            id="password" 
            type="password" 
            class="form-control" 
            placeholder="密码">
      </div>     
      <input  class="btn btn-primary btn-block" type="submit" value="登录">
    </form>
  </div>
</body>
</html>
