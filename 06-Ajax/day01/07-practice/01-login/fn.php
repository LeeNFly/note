<?php
  function is_login() {
    if (isset ($_COOKIE['PHPSESSID'])) {
      // 有sessionId, 尝试进行取值
      session_start();
      if (isset($_SESSION['username'])) {
        echo $_SESSION['username'];
      }
      else {
        header('location: ./login.html');
      }
    }
    else {
      header('location: ./login.html');      
    }

  }
?>