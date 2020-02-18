<?php
  header('content-type:text/html;charset=utf-8');
  $index = $_GET['index'];
  $jsonStr = file_get_contents('data.txt');
  $arr = json_decode($jsonStr, true);
  array_splice($arr, $index, 1);
  echo '<pre>';
  print_r($arr);
  echo '</pre>';
  $str = json_encode($arr);
  file_put_contents('data.txt', $str);

  header('location: 01-list.php');
?>