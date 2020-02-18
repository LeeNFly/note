<?php 

  // $_POST和$_GET 只能获取基本的数据, 无法获取文件数据
  // echo '<pre>';
  // print_r( $_POST );
  // echo '</pre>';

  // $_FILES 这个超全局变量, 专门用于获取文件信息(所有类型的文件), 也只能获取文件相关的信息, 基本信息他也获取不到
  // $_FILES 是一个二维(关联)数组, key是前端input:file 的name, value值里面存储着文件的一些基本信息, 是一个关联数组
  // 通过前端指定的 input:file 的 name, 可以获取文件信息, 是一个关联数组

  echo '<pre>';
  print_r( $_FILES );
  echo '</pre>';
  // Array
  // (
  //     [photo] => Array
  //         (
  //             [name] => 152808252077730.jpeg    // 文件名
  //             [type] => image/jpeg     // 文件类型
  //             [tmp_name] => C:\Users\Jepson\AppData\Local\Temp\php50B0.tmp   // 文件临时存储路径
  //             [error] => 0       // 错误码, 0, 表示没有错误; 4, 表示没有上传文件
  //             [size] => 60296    // 文件大小, 单位是字节
  //         )
  // )
  
  // 上传文件, 点击提交表单后, 服务器会临时存储上传的文件, 当所有php代码全部运行完成后, 就会自动删除
  $file = $_FILES['photo'];

  // // 睡 10 秒, 让程序在这边 停 10 秒再往下执行
  // sleep(10);

  // 我们需要对文件进行转存, 存到本地磁盘中, 完成持久化存储
  // move_uploaded_file( 临时文件路径, 新文件路径 )  可以转存所有类型的文件
  // ps: 临时文件路径, 新文件路径要包含文件名, 含后缀, 如果该路径下的文件名已经存在, 则会覆盖原文件
  // ps: 临时文件路径在文件对象中的tmp_name, 新文件路径需要自己指定路径及文件名(含后缀)
  move_uploaded_file( $file['tmp_name'], "./upload/test.jpg");

?>