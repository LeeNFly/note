<?php
  // echo '<pre>';
  // print_r($_FILES);
  // echo '</pre>';

  $file = $_FILES['file'];
  if ($file['error'] === 0) {
    $ext = strrchr($file['name'], '.'); // 后缀名
    $newFileName = time() . rand(1000, 9999) . $ext;
    $temp = $file['tmp_name'];
    $newFileUrl = "./upload/$newFileName";
    move_uploaded_file($temp, $newFileUrl);
    echo $newFileUrl;
  }
?>