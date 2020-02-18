<?php

  header('content-type:text/html;charset=utf-8');
  echo "保存成功";

  echo '<pre>';
  print_r($_POST);
  echo '</pre>';

  echo '<pre>';
  print_r($_FILES);
  echo '</pre>';

  include_once "fn.php";

  // 1. 收集普通表单提交的用户信息  $_POST
  $id = $_POST['id']; // 接收 id
  $username = $_POST['username'];
  $nickname = $_POST['nickname'];
  $age = $_POST['age'];
  $tel = $_POST['tel'];
  $sex = $_POST['sex'];
  $class = $_POST['class'];
  $photo = ""; // 图片地址

  // 2. 处理文件上传, 存储图片地址  $_FILES
  $file = $_FILES['photo'];

  if ( $file['error'] === 0 ) { // 上传成功, 需要转存图片
    $ftmp = $file['tmp_name']; // 临时图片路径
    $ext = strrchr( $file['name'], '.' ); // 后缀名
    $newName = time().rand(10000, 99999).$ext;  // 新文件名

    // move_uploaded_file(临时文件路径, 转存的文件路径)
    move_uploaded_file( $ftmp, './uploads/'.$newName );
    // 存图片地址
    $photo = './uploads/'.$newName;
  }

  // 3. 如果 photo 为空, 说明不更新图片
  //    如果 photo 有值, 说明用户需要更新图片

  // 准备 sql 语句
  if ( empty( $photo ) ) {
    // 为空, 不需要更新图片
    $sql = "update stu set name='$username', nickname='$nickname', age=$age, tel='$tel', sex='$sex', classid=$class where id=$id";
  }
  else {
    // 需要更新图片, 多加了图片的更新字段
    $sql = "update stu set name='$username', nickname='$nickname', age=$age, tel='$tel', sex='$sex', classid=$class, photo='$photo' where id=$id";
  }

  // 执行 sql 语句
  if ( my_exec( $sql ) ) {
    // 执行成功, 跳转到 list.php
    header("location: list.php");
  }
  else {
    echo "执行失败";
  }

?>