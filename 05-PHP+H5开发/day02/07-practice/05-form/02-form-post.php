<?php
  header('content-type:text/html;charset=utf-8');
  // echo '<pre>';
  // print_r($_GET);
  // print_r($_POST);
  // echo '</pre>';

  if ($_POST['username'] === 'admin' && $_POST['password'] === '123456') {
    echo '登录成功';
  } else {
    echo '登陆失败';
  }
?>