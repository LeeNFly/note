<?php

  echo '<pre>';
  print_r( $_POST );
  echo '</pre>';

  // $_FILES 用于获取提交的文件信息

  echo '<pre>';
  print_r( $_FILES );
  echo '</pre>';

  // 需要对文件进行转存, (在php程序执行完成后, 临时文件就会被删除, 所以我们需要转存文件)
  // move_uploaded_file( 临时文件路径, 转存的新文件路径 )
  // Array
  // (
  //     [name] => 003.gif
  //     [type] => image/gif
  //     [tmp_name] => C:\Users\Jepson\AppData\Local\Temp\php9C.tmp
  //     [error] => 0
  //     [size] => 11242
  // )

  // 文件上传完整思路
  // 1. 通过 $_FILES, 根据前端 name 获取 $file
  // 2. 判断 $file['error'] 是否为 0, 进行错误排除, 为 0 表示没有错误
  // 3. 动态生成一个新的文件名 (动态截取后缀名, 然后生成一个新的文件名)
  // 4. 进行转存

  // move_upload_file( 临时文件路径, 转存的文件路径 );
  $file = $_FILES['photo'];

  if ( $file['error'] === 0 ) {
    // 1. 截取文件后缀名
    $name = $file['name']; // 文件名
    // strrchr( 字符串, 标识字符 )
    $ext = strrchr( $name, "." );  // .png

    // 2. 通过随机数生成新的文件名
    $newFileName = time().rand( 1000, 9999 ).$ext;

    // 3. 临时文件路径
    $temp = $file['tmp_name'];

    // 4. 新的文件路径
    $newFileUrl = './upload/' . $newFileName;

    // 5. 进行转存
    move_uploaded_file( $temp, $newFileUrl );
  }

?>