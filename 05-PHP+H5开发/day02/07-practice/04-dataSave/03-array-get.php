<?php
  header('content-type:text/html;charset=utf-8');
  $str = file_get_contents('03-array-save.txt');
  $arr = json_decode($str, true);
  echo '<pre>';
  print_r($arr);
  echo '</pre>';
  echo $arr['name'];
?>