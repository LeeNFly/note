<?php
  header('content-type:text/html;charset=utf-8');
  // echo '<pre>';
  // print_r($_POST);
  // print_r($_FILES);  
  // echo '</pre>';
  include_once './fn.php';
  
  $id = $_POST['id'];
  $username = $_POST['username'];
  $nickname = $_POST['nickname'];
  $age = $_POST['age'];
  $tel = $_POST['tel'];
  $sex = $_POST['sex'];
  $class = $_POST['class'];
  $photo = "";

  $file = $_FILES['photo'];

  if ($file['error'] === 0) {
    $ext = strrchr($file['name'], '.');
    $newFileName = time() . rand(1000, 9999) . $ext;
    $temp = $file['tmp_name'];
    $newFileUrl = './uploads/$newFileName';
    move_uploaded_file($temp, $newFileUrl);
    $photo = $newFileUrl;
  }
  if (empty($photo)) {
    // 没有上传文件按
    $sql = "update stu set name = '$username', nickname = '$nickname', age = $age, tel = '$tel', sex = '$sex', classid = $class where id = $id";
  }
  else {
    $sql = "update stu set name = '$username', nickname = '$nickname', age = $age, tel = '$tel', sex = '$sex', classid = $class, photo = '$photo' where id = $id";    
  }

  $res = my_exec($sql);
  if ($res) {
    echo '修改成功';
    header('location: ./list.php');
  }
  else {
    echo '修改失败';
  }
?>