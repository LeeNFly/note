<?php

  // 实现退出功能, 销毁session
  session_start();
  session_destroy();
  // 销毁完成, 跳转到登录页
  header( "location: login.php");

?>