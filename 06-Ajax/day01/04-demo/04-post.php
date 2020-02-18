<?php
  // 通过key获取传递的参数值
  $username = $_POST['username'];
  $password = $_POST['password'];

  echo "post请求:" . $username . $password;

?>