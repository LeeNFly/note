<?php
  header('content-type:text/html;charset=utf-8');

  // $_POST
  $username = $_POST['username']; // 用户名
  $password = $_POST['password']; // 密码

  // 用户名 pp 密码 123456

  if ( $username === "pp" && $password === "123456" ) {
    // 登录成功
    echo "yes";
  }
  else {
    // 登录失败
    echo "no";
  }

?>