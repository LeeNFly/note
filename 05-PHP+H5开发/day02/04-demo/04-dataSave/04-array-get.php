<?php

  header('content-type:text/html;charset=utf-8');

  // 得到的是有格式的 json 字符串, 还可以很方便的转换成 数组
  $str = file_get_contents("03-array-save.txt");

  // json_decode( $jsonStr, 是否转换成数组 ) 将 json字符串转换成 php 的数组
  // 第二个参数传true, 转换成一维或二维关联数组, 否则转为对象
  $arr = json_decode( $str, true );
  
  echo '<pre>';
  print_r( $arr );
  echo '</pre>';


  // $obj = json_decode( $str );
  // echo '<pre>';
  // print_r( $obj );
  // echo '</pre>';
  // echo $obj -> name;

?>