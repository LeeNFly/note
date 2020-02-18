<?php

  // 退出功能
  // 服务器只要销毁该用户的 session 文件, 下次就不认识该用户了, 让该用户重新登录
  session_start();
  session_destroy();  // 销毁 session 文件

  // 销毁完成, 跳转到 login.html
  header("location: login.html");

?>