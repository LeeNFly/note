<?php
  header('content-type:text/html;charset=utf-8');
  // 对php操作mysql进行封装
  // php操作数据库:
  // 1. 连接数据库
  // 2. 准备sql
  // 3. 执行sql
  // 4. 分析结果
  // 5. 关闭连接
  define('HOST', '127.0.0.1');
  define('UNAME', 'root');
  define('PWD', 'root');
  define('DB', 'z_baixiu');
  define('PORT', 3306);
  // 封装非查询操作  my_exec
  // 返回值: 操作成功, 返回true; 操作失败, 返回false
  // 参数: $sql

  function my_exec($sql) {
    $link = mysqli_connect(HOST, UNAME, PWD, DB, PORT); // 连接成功, 返回连接对象, 连接失败, 返回false
    if (!$link) {
      // 连接失败
      echo '连接失败';
      return false;
    }

    $res = mysqli_query($link, $sql); // 非查询操作, 操作成功返回true, 失败返回false

    if ($res) {
      // 操作数据库成功
      mysqli_close($link);
      return true;
    } else {
      // 操作数据库失败
      echo mysqli_error($link);
      mysqli_close($link);
      return false;
    }
  }

  // 封装查询操作 my_query
  // 返回值, 查询成功, 返回一个二维数组, 查询失败, 返回false
  // 参数: $sql
  function my_query($sql) {
    $link = mysqli_connect(HOST, UNAME, PWD, DB, PORT); // 连接成功, 返回连接对象, 连接失败, 返回false
    if (!$link) {
      // 连接失败
      echo '连接失败';
      return false;
    }

    $res = mysqli_query($link, $sql); // 查询成功, 返回结果集; 查询失败, 返回false

    if(!$res) {
      // 查询失败
      echo mysqli_error($link);
      mysqli_close($link);
      return false;
    }

    // 查询成功
    $arr = [];
    while($row = mysqli_fetch_assoc($res)) {
      $arr[] = $row;
    }
    mysqli_close($link);
    return $arr;

  }

  // 登录拦截
  function is_login () {
    if (empty($_COOKIE['PHPSESSID'])) {
      header('location: ./login.php');
    } else {
      session_start();
      if (empty($_SESSION['user_id'])) {
        header('location: ./login.php');
      }
    }
  }
  
?>