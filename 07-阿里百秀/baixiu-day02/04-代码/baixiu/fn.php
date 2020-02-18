<?php
  header('content-type:text/html;charset=utf-8');
  // php 操作数据库步骤
  // 1. 建立连接
  // 2. 准备 sql
  // 3. 执行 sql 语句
  // 4. 分析结果
  // 5. 关闭连接

  // 定义常量
  define( "HOST", "127.0.0.1" ); // ip地址
  define( "UNAME", "root" ); // 用户名
  define( "PWD", "root" ); // 密码
  define( "DB", "z_baixiu" ); // 连接的数据库名
  define( "PORT", 3306 ); // 端口号  mysql 3306


  // 1. 封装非查询语句操作  my_exec
  //    返回值:  true / false
  //    传参:  $sql
  function my_exec( $sql ) {
    // 建立连接
    // mysqli_connect 成功, 返回连接对象, 失败返回 false
    $link = mysqli_connect( HOST, UNAME, PWD, DB, PORT );
    if ( !$link ) {
      echo "连接失败";
      return false;
    }
    // 执行非查询sql语句, 返回 true 或者 false
    $res = mysqli_query( $link, $sql );
    // 分析结果
    if ( $res ) {
      mysqli_close( $link ); // 关闭连接
      return true;
    }
    else {
      echo mysqli_error( $link ); // 输出错误信息
      mysqli_close( $link ); // 关闭连接
      return false;
    }
  }

  // 2. 封装查询语句的操作  my_query
  //    返回值: 成功返回数组, 失败返回 false
  //    参数: $sql 
  function my_query( $sql ) {
    $link = mysqli_connect( HOST, UNAME, PWD, DB, PORT ); // 建立连接
    if ( !$link ) {
      echo "连接失败";
      return false;
    }

    // 执行 sql, 执行查询语句
    // 成功返回 结果集, 失败 返回 false
    $res = mysqli_query( $link, $sql );

    // 分析结果
    if ( !$res ) {
      // 处理失败
      echo mysqli_error( $link );
      mysqli_close( $link );
      return false;
    }

    // 成功, 得到了结果集 
    $arr = []; // 专门存储从结果集中取出的数据

    // mysqli_fetch_assoc 可以从结果集取数据, 每次取一条, 以关联数组的形式返回
    while( $row = mysqli_fetch_assoc( $res ) ) {
      $arr[] = $row;
    }

    mysqli_close( $link );
    return $arr;
  }


  // 3. 登录拦截的函数
  function is_login() {
    // 登录拦截
    // 判断 cookie 中有没有 sessionId
    // 1. 有, 尝试获取用户信息 user_id
    //    (1) 获取到了, 啥也不干
    //    (2) 没获取到, 拦截到登陆页
    // 2. 没有, 拦截到登录页
    if ( isset( $_COOKIE['PHPSESSID'] ) ) {
      // 有 sessionId
      session_start();
      // 尝试获取用户信息
      if ( isset( $_SESSION['user_id'] ) )  {
        // 获取到了啥也不用干
      }
      else {
        header("location: login.php");
      }
    }
    else {
      // 没有 sessionId 
      header( "location: login.php" );
    }
  }


?>