<?php
  // echo '<pre>';
  // print_r($_FILES);
  // echo '</pre>';

  // 转存文件的步骤
  // 1. 通过 name 获取 $file
  // 2. 判断 error
  // 3. 动态生成新的文件名 (截取后缀名)
  // 4. 转存文件 move_uploaded_file( 临时文件路径, 新的文件路径 )

  $file = $_FILES['file'];
  if ( $file['error'] === 0 ) {
    $ext = strrchr( $file['name'], '.' ); // 后缀名
    $newName = time().rand(1000, 9999).$ext; // 新的文件名
    $temp = $file['tmp_name']; // 临时文件路径
    $newFileUrl = "./uploads/" . $newName; // 新的文件路径
    move_uploaded_file( $temp, $newFileUrl ); // 转存文件

    echo $newFileUrl;  // 输出文件路径
  }



?>