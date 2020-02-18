<?php
  header('content-type:text/html;charset=utf-8');

  echo '<pre>';
  print_r( $_POST );
  echo '</pre>';

  // 进行登陆校验
  // 1. 如果登录成功, 记录用户信息, 跳转个人中心页
  //    session_start();
  //    往 session 中存数据
  // 2. 如果登录失败, 提示用户登录失败, 并且跳转回登录页让用户重新登录
  //    3秒后跳转到登录页

  $username = $_POST['username'];
  $password = $_POST['password'];

  // 用户名和密码 pengpeng  123456

  if ( $username === "pengpeng" && $password === "123456" ) {
    // 如果登录成功, 记录用户信息
    session_start();
    // 记录用户名
    $_SESSION['username'] = $username;
    $_SESSION['password'] = $password;

    // 跳转个人中心页
    header( "location: person.php" );
  }
  else {
    echo "用户名或者密码错误, 3秒后将跳转回登陆页";
    // header( "refresh: 几秒后; url=刷新的地址 ");
    // 3 秒重新跳转到 登录页
    header( "refresh: 3; url=login.html" );
  }
?>

