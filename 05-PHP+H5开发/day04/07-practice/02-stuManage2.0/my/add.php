<?php
  header('content-type:text/html;charset=utf-8');
  include_once './fn.php';
  echo '<pre>';
  print_r($_POST);
  print_r($_FILES);
  echo '</pre>';

  // 收集基本信息
  $name = $_POST['username'];
  $nickname = $_POST['nickname'];
  $age = $_POST['age'];
  $tel = $_POST['tel'];
  $sex = $_POST['sex'];
  $classid = $_POST['class'];
  $photo = "";
  // 处理文件
  $file = $_FILES['photo'];
  if ($file['error'] === 0) {
    $ext = strrchr($file['name'], '.');
    $newFileName = time() . rand(1000, 9999) . $ext;
    $temp = $file['tmp_name'];
    $newFileUrl = "./uploads/$newFileName";
    move_uploaded_file($temp, $newFileUrl);
    $photo = $newFileUrl;
  }

  $sql = "insert into stu (name, nickname, age, tel, sex, photo, classid) values ('$name', '$nickname', $age, '$tel', '$sex', '$photo', $classid)";
  $res = my_exec($sql);

  if($res) {
    echo '添加成功';
    header('location: ./list.php');
  }
  else {
    echo '添加失败';
  }


?>