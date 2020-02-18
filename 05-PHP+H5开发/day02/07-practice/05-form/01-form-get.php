<?php
  header('content-type:text/html;charset=utf-8');
  // echo '<pre>';
  // print_r($_GET);
  // echo '</pre>';

  if ($_GET['username'] === 'admin' && $_GET['password'] === '123456') {
    echo '登录成功';
  } else {
    echo '登录失败';
  }
?>