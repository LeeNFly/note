<?php
  header('content-type:text/html;charset=utf-8');
  // $_GET 可以获取所有通过 get 方式发起请求的数据
  // $_POST 可以获取所有通过 post 方式发起请求(传递)的基本数据 
  // $_POST 超全局变量, 也是一个一维关联数组, key值也和表单的name值一致

  echo '<pre>';
  print_r( $_POST );
  echo '</pre>';

  $username = $_POST['username'];
  $password = $_POST['password'];

  // 用户名 pengpeng 密码 123456
  if ( $username === "pengpeng" && $password === "123456" ) {
    echo "登陆成功";
  }
  else {
    echo "登陆失败";
  }

?>