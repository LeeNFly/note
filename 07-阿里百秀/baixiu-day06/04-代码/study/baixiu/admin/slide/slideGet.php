<?php
  // 此接口返回轮播图数据
  include_once "../../fn.php";
  $sql = "select value from options where id = 10";
  // 执行 sql
  $res = my_query( $sql )[0]['value'];

  // 由于数据库表中存的直接是 jsonStr, 所以取出后, 直接输出给前端
  echo $res;
?>