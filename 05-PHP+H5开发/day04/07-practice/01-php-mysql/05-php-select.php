<?php

  header('content-type:text/html;charset=utf-8');

  // 查询
  $link = mysqli_connect('127.0.0.1', 'root', 'root', 'test01', 3306);

  if (!$link) {
    die('连接失败');
  }

  $sql = "select * from stu";

  $res = mysqli_query($link, $sql);

  // echo '<pre>';
  // print_r($res);
  // echo '</pre>';

  // echo mysqli_num_rows($res);

  // echo '<pre>';
  // print_r(mysqli_fetch_assoc($res));
  // echo '</pre>';
  // echo '<pre>';
  // print_r(mysqli_fetch_assoc($res));
  // echo '</pre>';
  // echo '<pre>';
  // print_r(mysqli_fetch_assoc($res));
  // echo '</pre>';
  // echo '<pre>';
  // var_dump(mysqli_fetch_assoc($res));
  // echo '</pre>';
  if(!$res) {
    mysqli_close($link);
    die('查询失败');
  }
  $arr = [];
  while( $result = mysqli_fetch_assoc($res)) {
    $arr[] = $result;
  }
  echo '<pre>';
  print_r($arr);
  echo '</pre>';
  mysqli_close($link);
  

 
?>