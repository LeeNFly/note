<?php

  // 1. php 数组 => json   json_encode
  // 2. json => php 数组   json_decode

  // $info = [
  //   "name" => "pp",
  //   "age" => 18
  // ];
  // $str = json_encode( $info );
  // echo $str;

  $jsonStr = '{"name":"pp","age":18}';
  $arr = json_decode( $jsonStr, true );
  echo '<pre>';
  print_r( $arr );
  echo '</pre>';
?>