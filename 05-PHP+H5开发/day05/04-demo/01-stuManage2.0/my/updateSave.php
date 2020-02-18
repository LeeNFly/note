<?php
  header('content-type:text/html;charset=utf-8');

  // echo '<pre>';
  // print_r( $_POST );
  // echo '</pre>';

  // echo '<pre>';
  // print_r( $_FILES );
  // echo '</pre>';

  include_once "./fn.php";

  // (1) 收集前端提交过来的信息 (基本表单信息, 文件信息, 文件需要转存)
  $id = $_POST['id'];
  $username = $_POST['username'];
  $nickname = $_POST['nickname'];
  $age = $_POST['age'];
  $tel = $_POST['tel'];
  $sex = $_POST['sex'];
  $class = $_POST['class'];

  // 文件信息
  // 1. 获取 $file
  // 2. 判断 $file['error']
  // 3. 生成新的文件名 (动态生成后缀名)
  // 4. 转存文件 move_uploaded_file( 临时文件路径, 新的文件路径 )
  $file = $_FILES['photo'];

  // 没有上传图片, error 4, 不会进入判断, $photo 就未赋值
  if ( $file['error'] === 0 ) {
    // 成功
    $ext = strrchr( $file['name'], '.' ); // 后缀名
    $newName = time() . rand(1000, 9999) . $ext; // 新的文件名
    $temp = $file['tmp_name']; // 临时文件路径
    $newFileUrl = "./uploads/" . $newName; // 新的文件路径
    // 进行转存
    move_uploaded_file( $temp, $newFileUrl );

    // 收集图片地址
    $photo = $newFileUrl;
  }

  // (2) 准备 sql 语句 更新  (update)  外双内单
  if ( empty( $photo ) ) {
    // 说明没有收集到图片地址, 用户没传, 保留原图片
    $sql = "update stu set name='$username', nickname='$nickname', age=$age, 
            tel='$tel' , sex='$sex', classid=$class where id=$id";
  }
  else {
    // 需要更新数据库的地址
    $sql = "update stu set name='$username', nickname='$nickname', age=$age, 
            tel='$tel' , sex='$sex', classid=$class, photo='$photo' where id=$id";
  }


  // (3) 执行 sql 语句
  $res = my_exec( $sql );

  if ( $res ) {
    echo "修改成功";
    // 跳转到 列表页
    header( "location: list.php" );
  }
  else {
    echo "修改失败";
  }
  

?>