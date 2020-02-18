<?php
  header('content-type:text/html;charset=utf-8');

  echo '<pre>';
  print_r($_POST);
  echo '</pre>';

  echo '<pre>';
  print_r($_FILES);
  echo '</pre>';

  // Array
  // (
  //     [username] => 鹏鹏
  //     [nickname] => 帅鹏鹏
  //     [age] => 8
  //     [tel] => 110
  //     [sex] => m
  //     [class] => 19
  // )

  // 后台需要处理前端提交过来的数据, 收集成一个学生的信息

  // 1. 普通学生数据, 通过 $_POST 获取
  $info['username'] = $_POST['username'];
  $info['nickname'] = $_POST['nickname'];
  $info['age'] = $_POST['age'];
  $info['tel'] = $_POST['tel'];
  // ctrl+d, 往后选中一个相同的单词, 可以同时编辑多个
  $info['sex'] = $_POST['sex'];
  $info['class'] = $_POST['class'];
  // 需要存储学生头像的地址
  $info['photo'] = "";

  // 2. 学生头像文件信息, 通过 $_FILES 获取, 还需要转存文件
  //    将转存文件的地址存在 $info['photo'] 中
  
  $file = $_FILES['photo'];

  // 判断图片是否上传成功
  if ( $file['error'] === 0 ) { // 上传成功

    $ftmp = $file['tmp_name'];  // 临时文件路径

    // 获取文件后缀名
    $ext = strrchr( $file['name'], '.' );

    // 生成新的文件名
    $newName = time().rand(1000,9999).$ext;

    // move_uploaded_file(临时文件路径, 转存文件路径)
    move_uploaded_file( $ftmp, './upload/'.$newName );

    // 将存好的头像图片地址, 存在 $info中
    $info['photo'] = './upload/'.$newName;
  }


  // 需要将添加的学生信息, 持久化到文件中, 需要追加到学生数组中去
  // 1. 空, 说明学生数组为空
  // 2. 有数据, 说明已经有学生信息了 
  $str = file_get_contents('data.txt');
  
  // 对空字符串做处理, 如果是空字符串, 说明没有存学生信息
  if ( empty($str) ) {
    $arr = []; // 数组为空
  }
  else {
    // 不为空, 解析$str json字符串, 得到学生数组
    $arr = json_decode( $str, true );
  }

  // 将新添加的学生信息, 追加到学生数组中
  $arr[] = $info;  // 类似于 js 中的 push

  // 需要转换成 json 字符串, 持久化到文件中
  file_put_contents('data.txt', json_encode( $arr ));

  // 跳转到渲染列表
  // header('location:相对路径')
  header('location:01-list.php');

?>