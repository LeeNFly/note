<?php

  // 1. session ★ 服务器端存储数据的容器
  // 2. session 可以在服务器端多个页面进行共享

  // $_SESSION 超全局变量, 是一个关联数组
  // 通过 $_SESSION 可以获取当前请求用户的 session 数据
  // 每个用户都有自己的 session 空间


  // 开启 session 机制
  // ps: 要先开启session机制, 才可以使用session
  session_start();

  // echo '<pre>';
  // print_r( $_SESSION );
  // echo '</pre>';

  // // 1. 存储
  // $_SESSION['name'] = 123;
  // $_SESSION['age'] = 18;

  // // 2. 修改
  // $_SESSION['name'] = 456;

  // // 3. 获取
  // echo $_SESSION['name'];

  // // 4. 删除
  // unset($_SESSION['age']);


  echo '<pre>';
  print_r( $_SESSION );
  echo '</pre>';


?>