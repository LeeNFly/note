<?php
  header('content-type:text/html;charset=utf-8');
  // 1. 获取前端传递过来的表单数据
  // 2. 存储前端上传的图像, 把图片存储在服务器硬盘中
  // 3. 将表单传递过来的数据 和 图片地址, 持久化到 data.txt 中

  echo '<pre>';
  print_r($_POST);
  echo '</pre>';

  echo '<pre>';
  print_r($_FILES);
  echo '</pre>';

  // Array
  // (
  //     [username] => 社会我鹏哥
  //     [nickname] => 人狠话不多
  //     [age] => 108
  //     [tel] => 110
  //     [sex] => m
  //     [class] => 23
  // )

  // 一个人的信息, 用一维数组表示, 一个班的信息用二维数组

  // 1. 获取基本信息
  $info['username'] = $_POST['username'];
  $info['nickname'] = $_POST['nickname'];
  $info['age'] = $_POST['age'];
  $info['tel'] = $_POST['tel'];
  $info['sex'] = $_POST['sex'];
  $info['class'] = $_POST['class'];
  // 图片地址
  $info['photo'] = '';

  // 2. 将上传的图片, 转存到服务器中
  $file = $_FILES['photo'];
  
  // 在文件上传成功的情况下, 保存图片
  if ( $file['error'] == 0 ) {
    // 获取临时文件路径
    $ftmp = $file['tmp_name'];
    // 获取文件后缀名
    $ext = strrchr( $file['name'], '.' );
    // 随机生成新文件名
    $newName = time().rand(1000, 9999).$ext;
    // 进行转存
    move_uploaded_file( $ftmp, './upload/'.$newName );
    
    // 图片地址存起来
    $info['photo'] = './upload/'.$newName;
  }


  echo '<pre>';
  print_r($info);
  echo '</pre>';


  // 3. 将数据持久化到 data.txt 中
  // 思路:
  // (1) 如果 data.txt 没有数据, 说明应该往空数组里面追加
  // (2) 如果 data.txt 有数据, 转成数组, 在原数组基础上追加

  $str = file_get_contents('data.txt');

  // 判断内容是否为空 
  if ( !empty( $str ) ) {  // 如果不为空, 本来就有值
    // 将获取到的 str 转成 数组
    $arr = json_decode( $str, true );
  } else {
    // 说明是空数组
    $arr = [];
  }

  // 往数组中加一项
  $arr[] = $info;
  // 将数据持久化 data.txt 中
  $jsonstr = json_encode( $arr );
  file_put_contents( 'data.txt', $jsonstr );

  // 添加数据完成后, 自动跳转到列表页显示
  header('location:01-list.php');


?>