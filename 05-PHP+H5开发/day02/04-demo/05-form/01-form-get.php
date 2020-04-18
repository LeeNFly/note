<?php
  header('content-type:text/html;charset=utf-8');

  // 超全局变量 $_GET 获取所有用户通过 get 方式发起请求(传递)的基本参数数据
  // $_GET 是一个一维关联数组, key值与表单提交的name值一致

  echo '<pre>';
  print_r( $_GET );
  echo '</pre>';

  // Array
  // (
  //     [username] => 11
  //     [password] => 22
  // )

  $username = $_GET['username'];
  $password = $_GET['password'];

  // 登陆验证, 判断用户是否登录成功
  // 根据用户名, 查询数据库, 找出该用户的密码, 和传过来的密码比对

  // 假设, 只有一个用户, 用户名: admin  密码: 123456

  if ( $username === 'admin' && $password === '123456' ) {
    echo "登陆成功";
  }
  else {
    echo "登录失败";
  }


  

?>