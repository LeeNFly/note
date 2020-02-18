<?php

  // 前端提交过来的信息包括两个部分 (基本表单信息 + 文件信息)

  echo '<pre>';
  print_r( $_POST );
  echo '</pre>';

  echo '<pre>';
  print_r( $_FILES );
  echo '</pre>';

  // 一个学生存在一个关联数组中
  $info = [];

  // 1. 收集基本表单信息
  $info['username'] = $_POST['username'];
  $info['nickname'] = $_POST['nickname'];
  $info['age'] = $_POST['age'];
  $info['tel'] = $_POST['tel'];
  $info['sex'] = $_POST['sex'];
  $info['class'] = $_POST['class'];


  // 2. 转存文件, 收集文件路径
  // 转存文件思路:
  // 1. 利用 $_FILES, 通过 前端的 name 获取 $file
  // 2. 判断错误码, 如果是 0, 表示没有错误, 继续转存
  // 3. 动态生成新的文件名 (后缀名要动态获取)
  // 4. 转存文件 move_uploaded_file(临时文件路径, 新的文件路径)

  $file = $_FILES['photo'];

  if ( $file['error'] === 0 ) {
    // 截取后缀名
    $ext = strrchr( $file['name'], '.' );  // .jpg
    // 动态生成新的文件名
    $newName = time().rand(1000,9999).$ext;
    // 临时文件路径
    $temp = $file['tmp_name'];
    // 新的文件路径
    $newFileUrl = './upload/' . $newName;
    // 进行文件转存
    move_uploaded_file( $temp, $newFileUrl );

    // 将文件路径进行收集
    $info['photo'] = $newFileUrl;
  }

  // 思路:
  // 1. 读取本地学生信息, 得到 jsonStr
  // 2. 转换成 数组
  // 3. 将收集到的学生数据追加到数组中
  // 4. 转换成 jsonStr
  // 5. 重新写入到文件中
  $jsonStr = file_get_contents("data.txt");  // 得到 jsonStr
  $arr = json_decode( $jsonStr, true ); // 转成数组, 得到已有的学生数组

  // array_push(数组, 追加的项)
  // array_push( $arr, $info );
  $arr[] = $info;  // 类似于 js 中的 push

  $str = json_encode( $arr ); // 转成 jsonStr
  file_put_contents( "data.txt", $str ); // 写入到文件中


  // 添加完成, 还应该跳转到渲染列表页
  // 页面跳转语法: header( "location: 路径地址 "); 
  // 会重新请求页面
  header( "location: 01-list.php" );

?>