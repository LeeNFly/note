<?php

  // 封装登录拦截的函数
  function is_login() {
    // 实现登录拦截
    // 判断该用户有没有 sessionId  (有没有会员卡号)
    // 1. 如果有sessionId, 尝试获取用户信息
    //   (1) 有用户信息, 输出用户信息
    //   (2) 没有用户信息, 拦截到登陆页
    // 2. 如果没有sessionId, 直接拦截

    // isset( 变量 ) : 可以判断变量是否进行了赋值 
    if ( isset( $_COOKIE['PHPSESSID'] ) ) {
      // 有值, 尝试获取用户信息, 从session中读取数据
      session_start(); 
      if ( isset( $_SESSION['username'] ) ) {
        // 有用户名, 说明服务器认识
        echo $_SESSION['username'];
      }
      else {
        // 没有查到用户名, 拦截到登录页
        header( "location: login.html" );
      }
    }
    else {
      // 没有 sessionid, 跳转登录页
      header( "location: login.html" );
    }
  }

?>