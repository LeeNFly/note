<?php
  header('content-type:text/html;charset=utf-8');
  // file_put_contents('01-data.txt', '写入测试1');
  echo file_get_contents('01-data.txt');
?>