<?php
  header('content-type:text/html;charset=utf-8');

  // 定义常量
  // define( 常量名, 常量值 )
  define( 'HOST', '127.0.0.1' );  // ip 地址
  define( 'UNAME', 'root' );   // 用户名
  define( 'PWD', 'root' );   // 密码
  define( 'DB', 'z_stumanage' );  // 数据库名称
  define( 'PORT', 3306 );
  
  // 作用: 增 删 改, 执行 非查询语句
  // 返回值: true/false
  // 传参: $sql
  function my_exec( $sql ) {

    // 1. 建立连接
    $link = mysqli_connect( HOST, UNAME, PWD, DB, PORT);
    if ( !$link ) {
      echo "连接失败";
      return false;
    }
    // 2. 准备 sql => 通过传参传进来
    // 3. 执行 sql
    $res = mysqli_query( $link, $sql );  // true / false

    // 4. 处理结果
    if ( $res ) {
      // 5. 关闭连接
      mysqli_close( $link );
      return true;
    }
    else {
      echo mysqli_error( $link );
      // 5. 关闭连接
      mysqli_close( $link );
      return false;
    }
  }

  // 作用: 执行查询操作
  // 参数: sql 语句
  // 返回值: 
  //    (1) 查询成功, 将数组返回 (二维数组)
  //    (2) 查询失败, 返回 false
  function my_query( $sql ) {

    //  1. 建立连接
    $link = mysqli_connect( HOST, UNAME, PWD, DB, PORT );
    if( !$link ) {
      echo "连接失败";
      return false;
    }

    // 2. 执行 sql, 得到结果, 如果成功, 得到结果集, 如果失败, 得到 false
    $res = mysqli_query( $link, $sql );  

    // 3. 分析结果
    if ( !$res ) {
      // 执行失败
      echo mysqli_error( $link );
      mysqli_close( $link );   // 关闭连接
      return false;
    }

    // 执行成功
    // mysqli_fetch_assoc( 结果集 )  
    // 每次取一条, 如果取到数据, 返回关联数组, 如果失败, 返回 null

    $arr = []; // 专门用于存储查询的结果
    while( $row = mysqli_fetch_assoc( $res ) ) {
      $arr[] = $row;
    }

    mysqli_close( $link );  // 关闭连接
    return $arr;
  }


?>