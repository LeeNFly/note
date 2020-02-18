<?php
  include_once '../../fn.php';
  $index = $_GET['index'];
  $sql = "select * from options where id = 10";
  $jsonStr = my_query($sql)[0]['value'];
  $arr = json_decode($jsonStr, true);
  array_splice($arr, $index, 1);
  $str = json_encode($arr, JSON_UNESCAPED_UNICODE);
  $sql_update = "update options set value = '$str' where id = 10";
  my_exec($sql_update);
?>