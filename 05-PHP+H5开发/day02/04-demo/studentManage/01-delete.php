<?php
  header('content-type:text/html;charset=utf-8');
 
  echo '<pre>';
  print_r($_GET);
  echo '</pre>';

  // 获取要删除的数据的索引值
  $index = $_GET['index'];

  // 下面需要通过 索引 从数组中进行删除这一项
  // (1) 获取数组
  $jsonstr = file_get_contents('data.txt');
  $arr = json_decode( $jsonstr, true );


  // (2) 根据索引删除数组中的该项, 会改变原数组
  // array_splice(数组, 删除起始的索引, 删几个)
  array_splice( $arr, $index, 1 );

  // 持久化到本地存储中
  $jsonstr = json_encode( $arr ); // 编码成json字符串
  file_put_contents( 'data.txt', $jsonstr );

  // 删除完毕, 跳转回列表页
  header('location:01-list.php');

?>