<?php

  header('content-type:text/html;charset=utf-8');

  // 导入封装好的函数
  include_once "fn.php";

  // echo "添加成功";

  echo '<pre>';
  print_r($_POST);
  echo '</pre>';

  echo '<pre>';
  print_r($_FILES);
  echo '</pre>';

  // 1. 收集普通表单提交的用户信息  $_POST
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

  // 3. 准备 sql 语句, 调用封装好的方法, 将数据存储到数据库中
  $sql = "insert into stu (name, nickname, age, tel, sex, photo, classid)
          values ('$username', '$nickname', $age, '$tel', '$sex', '$photo', $class)";

  // 4. 调用方法, 执行, 返回值 true/false
  if ( my_exec( $sql ) ) {
    echo "添加成功";
    // 跳转到 list.php
    header('location:list.php');
  }
  else {
    echo "添加失败";
  }
  
?>