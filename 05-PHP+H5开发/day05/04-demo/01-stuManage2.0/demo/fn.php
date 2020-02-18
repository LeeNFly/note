<?php
  header('content-type:text/html;charset=utf-8');
  
  // 定义常量, 配置
  define( 'HOST', '127.0.0.1' ); // 主机地址
  define( 'UNAME', 'root' ); // 用户名
  define( 'PWD', 'root' );   // 密码
  define( 'DB', 'z_stumanage' );  // 数据库
  define( 'PORT', '3306' );  // 端口

  // 封装一个非查询语句执行函数 (删除, 更新, 添加)
  // 参数: 执行的 sql 语句
  // 返回值: true 或 false

  function my_exec( $sql ) {
    // 1. 连接数据库
    $link = @ mysqli_connect( HOST, UNAME, PWD, DB, PORT );

    if ( !$link ) {
      echo "数据库连接失败";
      return false;
    }

    // 2. 准备 sql 语句, 传入进来

    // 3. 执行 sql 语句
    if ( mysqli_query( $link, $sql ) ) {
      // 4. 关闭数据库
      mysqli_close( $link );
      return true;
    }
    else {
      echo mysqli_error( $link );
      // 4. 关闭数据库
      mysqli_close( $link );
      return false;
    }
  }

  // 封装一个查询语句执行函数 
  // 参数: 执行的 sql 语句
  // 返回值: 
  //    (1) 执行成功, 返回数组
  //    (2) 执行失败, 返回false
  function my_query( $sql ) {

    // 1. 连接数据库
    $link = @ mysqli_connect( HOST, UNAME, PWD, DB, PORT );

    if ( !$link ) {
      echo "数据库连接失败";
      return false;
    }

    // 2. 准备 sql, $sql

    // 3. 执行 sql, 执行的是 查询, 成功:结果集, 失败:false
    $res = mysqli_query( $link, $sql );

    if ( !$res ) {  // 失败了
      echo mysqli_error( $link ); // 打印错误信息

      mysqli_close( $link );
      return false;
    }

    // 从结果集中取数据 
    // mysqli_fetch_assoc(结果集) 每次取一条记录, 返回一个关联数组
    // 如果没取到, 返回 null

    $arr = []; // 存放查询到的所有数据

    while ( $row = mysqli_fetch_assoc($res) ) {
      // 将数据, 追加到 arr 中
      $arr[] = $row;
    }
    
    mysqli_close( $link );
    return $arr; // 将查询到的数据返回
  }

?>