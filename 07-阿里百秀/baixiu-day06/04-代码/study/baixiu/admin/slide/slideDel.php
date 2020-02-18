<?php
  include_once "../../fn.php";

  // 1. 接收 index 下标
  $index = $_GET['index'];

  // 2. 从数据库中取出轮播数据 jsonStr
  $sql = "select value from options where id = 10";
  $jsonStr = my_query( $sql )[0]['value'];

  // 3. 转成二维数组
  $arr = json_decode( $jsonStr, true );

  // 4. 通过 index 将二维数组里面对应的项删除
  //    array_splice( $arr, 从哪开始删, 删几个 )
  array_splice( $arr, $index, 1 );

  // 5. 将二维数组转成jsonStr
  $str = json_encode( $arr, JSON_UNESCAPED_UNICODE );

  // 6. 存到数据库中 update
  $updateSql = "update options set value='$str' where id=10";
  my_exec( $updateSql );
?>