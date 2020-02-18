<?php
  include_once '../fn.php';
  if (!empty($_POST)) {
    // 只有当提交表单时, 才进行校验, 普通访问登录页面, 不进行校验
    $email = $_POST['email'];
    $password = $_POST['password'];
    if (empty($email) || empty($password)) {
      $msg = '用户名或者密码为空';
    }
    else {
      // 非空校验通过, 进行登录校验
      $sql = "select * from users where email = '$email'"; // 通过用户名查询用户信息
      $res = my_query($sql); 
      if (empty($res)) {
        // 未查询到数据
        $msg = '用户名不存在';
      }
      else {
        // 校验密码是否正确
        $data = $res[0]; // 用户名唯一, 所以查询出来若有记录, 则只有一条
        if ($data['password'] === $password) {
          // 密码正确
          session_start();
          $_SESSION['user_id'] = $data['id'];
          header('location: ./index1.php');
        } 
        else {
          $msg = '密码错误';
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
  <div class="login">
    <form class="login-wrap" action="" method="post">
      <img class="avatar" src="../assets/img/default.png">
      <!-- 有错误信息时展示 -->
      <?php if (!empty($msg)) {?>
        <div class="alert alert-danger">
          <strong>错误！</strong> <?php echo $msg?>
        </div>
      <?php }?>
      <div class="form-group">
        <label for="email" class="sr-only">邮箱</label>
        <input value="<?php echo empty($email) ? '' : $email?>" id="email" name="email" type="text" class="form-control" placeholder="邮箱" autofocus>
      </div>
      <div class="form-group">
        <label for="password" class="sr-only">密码</label>
        <input id="password" name="password" type="password" class="form-control" placeholder="密码">
      </div>
      <input  class="btn btn-primary btn-block" type="submit" value="登录">
    </form>
  </div>
</body>
</html>
