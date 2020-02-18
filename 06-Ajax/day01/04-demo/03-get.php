<?php

  // username 和 password 通过key获取传递的参数值
  // echo '<pre>';
  // print_r( $_GET );
  // echo '</pre>';

  $username = $_GET['username'];
  $password = $_GET['password'];

  echo "get请求:" . $username . $password;

?>
