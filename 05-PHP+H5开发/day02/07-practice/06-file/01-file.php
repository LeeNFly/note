<?php
  header('content-type:text/html;charset=utf-8');
  echo '<pre>';
  print_r($_POST);
  print_r($_FILES);
  echo '</pre>';
  // Array
  // (
  //     [photo] => Array
  //         (
  //             [name] => TIM图片20191122203426.jpg
  //             [type] => image/jpeg
  //             [tmp_name] => C:\Users\shilinghui\AppData\Local\Temp\phpB731.tmp
  //             [error] => 0
  //             [size] => 163138
  //         )

  // )
  $file = $_FILES['photo'];
  move_uploaded_file($file['tmp_name'], 'upload/mytest.jpg');
?>