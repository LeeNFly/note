<?php 
  //获取用户提交用户名和密码
  //表单提交为post方式，当以post方式请求当前页面时，获取提交当用户名 和密码进行判断 
    if (!empty($_POST)) {
        // echo '<pre>';
        // print_r($_POST);
        // echo '</pre>';
        include_once '../fn.php'; //引入工具函数

        //1-获取用户名和密码
        $email = $_POST['email'];
        $password = $_POST['password'];
        //2-判断数据是否为空
        if (empty($email) || empty($password)) {
           $msg = '用户名和密码为空';
        } else {
          //3-根据前端用户名，去后台获取对应密码，返回
          $sql = "select * from users where email = '$email'";
          $data = my_query($sql);
          // echo '<pre>';
          // print_r($data);
          // echo '</pre>';
          //4-先判断后台返回的数据是否为空（用户名不存在）
          if (empty($data)) {
            $msg = '用户名不存在';
          } else {
              $data = $data[0]; //$data是一维数组
              //5-如果返回数据不为空，将数据库密码和用户输入密码做对比 ，如果一样就登录成功， 否则密码错误
              if ($password === $data['password']) {
                //登录成功
                //给登录成功的用户添加标记
                session_start();
                //在session中将记录用户信息
                $_SESSION['user_id'] = $data['id'];  //将id放入到session文件中
                //跳转到首页
                header('location: index1.php');
              } else {
                //密码错误
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
   <!-- action为空默认请当前页面 -->
    <form class="login-wrap"  action="" method="post">
      <img class="avatar" src="../assets/img/default.png">
      <!-- 有错误信息时展示 -->
      <!-- 如果变量$msg存在，肯定有错误 -->
      <?php if(isset($msg)) { ?>
        <div class="alert alert-danger">
          <strong>错误！</strong> <?php echo $msg ?>
        </div>
      <?php } ?>

      <div class="form-group">
        <label for="email" class="sr-only">邮箱</label>
        <!-- 登录失败时，保留用户上传输入的邮箱 -->
        <input  id="email" 
                type="email" 
                name="email" 
                class="form-control" 
                placeholder="邮箱" 
                autofocus
                value="<?php echo isset($msg) ? $email : '' ?>"
                >
      </div>
      <div class="form-group">
        <label for="password" class="sr-only">密码</label>
        <input  id="password" 
                type="password" 
                name="password" 
                class="form-control" 
                placeholder="密码">
      </div>     
      <input  class="btn btn-primary btn-block" type="submit" value="登录">
    </form>
  </div>
</body>
</html>

