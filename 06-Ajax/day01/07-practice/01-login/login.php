<?php
  header('content-type:text/html;charset=utf-8');
  $username = $_POST['username'];
  $password = $_POST['password'];

  if ($username === 'pengpeng' && $password === '123456') {
    session_start();
    $_SESSION['username'] = $username;
    header('location: ./person.php');
  }
  else {
    echo '登录失败, 3秒后跳转到首页';
    header('refresh: 3;url=login.html');
  }

?>