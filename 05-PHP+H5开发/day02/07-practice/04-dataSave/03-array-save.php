<?php
  header('content-type:text/html;charset=utf-8');
  $arr = [
    'name' => '小明',
    'age' => 18
  ];

  $jsonStr = json_encode($arr);
  echo $jsonStr;
  file_put_contents('03-array-save.txt', $jsonStr);
?>