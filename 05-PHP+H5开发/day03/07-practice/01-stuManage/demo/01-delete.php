<?php
  header('content-type:text/html;charset=utf-8');
  echo "删除成功";

  // 所谓删除, 就是删除 从文件中解析得到数组中的 对应项
  // 后台想要删除, 需要知道要删除的项的 下标

  echo '<pre>';
  print_r($_GET);
  echo '</pre>';

  // 得到需要删除的索引
  $index = $_GET['index'];

  // 读取文件
  $jsonstr = file_get_contents('data.txt');
  // 转成数组
  $arr = json_decode( $jsonstr, true );

  // 删除对应项, 会改变原数组
  // array_splice( 数组, 从哪开始删, 删几个 )
  array_splice( $arr, $index, 1 );

  // 将数组转成 json字符串, 存到本地文件中
  file_put_contents( "data.txt", json_encode( $arr ) );

  // 删除完成, 跳转到列表页
  header('location:01-list.php');

?>