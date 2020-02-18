<?php

  header('content-type:text/html;charset=utf-8');

  // 查询
  // 1. 建立连接
  $link = mysqli_connect('127.0.0.1', 'root', 'root', 'test01', 3306);
  if ( !$link ) {
    die ( "连接失败" );
  }

  // 2. 准备 sql 语句
  $sql = "select * from stu";

  // 3. 执行 sql 语句
  // mysqli_query( 连接对象, sql语句 )
  // (1) 非查询语句, 增删改,返回值, 布尔值 true / false
  // (2) 查询语句, 查询成功, 返回结果集, 是一个对象 
  //              查询失败, 返回 false
  $res = mysqli_query( $link, $sql );


  // 4. 分析结果
  if ( !$res ) {
    // 5. 关闭连接
    mysqli_close( $link );
    die( "查询失败" );
  }

  // 查询成功得到结果集
  // 通过 mysqli_fetch_assoc 可以从结果集中取出数据
  // mysqli_fetch_assoc( 结果集 )
  // 作用: 从结果集中取出数据, 每次取一条, 
  //      有数据, 返回的是(一维)关联数组, key是数据库种对应的列名
  //      没有数据了, 返回 null
  // ps: 虽然取出的是关联数组, 但是关联数组中所有的属性值, 都是字符串类型的值, 
  //     ★ 因为从数据库取出的所有字段值 都是字符串类型的

// 结果集：
//   mysqli_result Object
//   (
//     [current_field] => 0
//     [field_count] => 3 字段个数
//     [lengths] => 
//     [num_rows] => 3 记录数
//     [type] => 0
//   )
// mysqli_fetch_assoc(结果集): 
//    Array
//    (
//        [id] => 14
//        [name] => ww
//        [age] => 20
//    )
  // 查询结果集中有多少条数据 mysqli_num_rows(结果集)
  // echo mysqli_num_rows( $res );

  // echo '<pre>';
  // print_r( mysqli_fetch_assoc( $res ) );
  // print_r( mysqli_fetch_assoc( $res ) );
  // print_r( mysqli_fetch_assoc( $res ) );
  // print_r( mysqli_fetch_assoc( $res ) );

  // var_dump( mysqli_fetch_assoc( $res ) );
  // var_dump( mysqli_fetch_assoc( $res ) );
  // var_dump( mysqli_fetch_assoc( $res ) );
  // var_dump( mysqli_fetch_assoc( $res ) );
  // echo '</pre>';

  $arr = []; // 定义一个数组, 用于收集查询出来的数据
  while ( $row = mysqli_fetch_assoc( $res ) ) {
    $arr[] = $row;
  }

  echo '<pre>';
  print_r($arr);
  echo '</pre>';

  // 5. 关闭连接
  mysqli_close( $link );
 
?>