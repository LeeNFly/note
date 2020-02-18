<?php
  // 导入方法
  include_once "./fn.php";
  
  echo '<pre>';
  print_r( $_POST );
  echo '</pre>';


  echo '<pre>';
  print_r( $_FILES );
  echo '</pre>';

  // 添加思路
  // (1) 收集前端提交过来的信息 (基本表单信息, 文件信息)
  // 双击内容, ctrl+d 向后选中相同项
  $username = $_POST['username'];
  $nickname = $_POST['nickname'];
  $age = $_POST['age'];
  $tel = $_POST['tel'];
  $sex = $_POST['sex'];
  $class = $_POST['class'];

  // 文件信息, 我们需要存储的是路径, 需要对文件进行转存
  // 转存文件思路
  // 1. 通过 $_FILES 获取文件信息, $_FILES['photo'] 取得 $file

  // 2. 判断是否上传成功
  // 3. 需要随机生成文件名 (后缀名动态获取)
  // 4. 转存文件 move_uploaded_file( 临时文件路径, 新的文件路径 )
  $file = $_FILES['photo'];
  if ( $file['error'] === 0 ) {
    // 上传成功
    $ext = strrchr( $file['name'], '.' ); // 获取后缀名
    $newName = time().rand(1000, 9999).$ext; // 新的文件名
    $temp = $file['tmp_name']; // 临时文件路径
    $newFileUrl = './uploads/' . $newName; // 新的文件路径
    move_uploaded_file( $temp, $newFileUrl );  // 转存文件

    $photo = $newFileUrl;  // 收集图片地址
  }

  // (2) 编写 sql 语句 (外双内单) insert into
  //     1. 单引号没加
  //     2. 字段 name, classid
  $sql = "insert into stu (name, nickname, age, tel, sex, photo, classid)
          values( '$username', '$nickname', $age, '$tel', '$sex', '$photo', $class)";


  // (3) 执行 sql 语句, 用的是 fn.php my_exec方法 将数据添加到数据
  //     返回值 true 或者 false
  if ( my_exec( $sql ) ) {
    echo "添加成功";
  }
  else {
    echo "添加失败";
  }




?>