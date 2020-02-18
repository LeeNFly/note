<?php
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
  echo '<pre>';
  print_r($file);
  echo '</pre>';
  // 判断是否上传成功
  if ($file['error'] == '0') {
    // 文件上传成功, 生成新的文件名
    $ext = strrchr($file['name'], '.'); // 得到文件的后缀名
    $newFileName = time() . rand(1000, 9999) . $ext;
    echo $newFileName;

    move_uploaded_file($file['tmp_name'], "upload/$newFileName");
  }
?>