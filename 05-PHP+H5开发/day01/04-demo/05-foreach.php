<?php

  header('content-type:text/html;charset=utf-8');

  // 索引数组
  // $arr = [ "张三", "李四", "王五", "赵六", "田七", "王八" ];

  // // for 循环 遍历
  // for ( $i = 0; $i < count( $arr ); $i++ ) {
  //   echo $arr[$i];
  // }

  // 关联数组
  $info = [
    'name' => '涛涛',
    'age' => 80,
    'sex' => '未知',
    'desc' => '猥琐'
  ];
  
  foreach ( $info as $k => $v ) {
    echo $k . '------' . $v . '<br>';
  }

  // foreach 也可以遍历索引数组, 遍历索引数组时 $k 就是下标, $v就是下标对应的值
?>