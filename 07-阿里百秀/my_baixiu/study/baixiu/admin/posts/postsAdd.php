<?php
  include_once '../../fn.php';
  session_start();
  $userId = $_SESSION['user_id'];
  $slug = $_POST['slug'];
  $title = $_POST['title'];
  $created = $_POST['created'];
  $content = $_POST['content'];
  $status = $_POST['status'];
  $category = $_POST['category'];

  // 转存图片
  $file = $_FILES['feature'];
  if ($file['error'] === 0) {
    $ext = strrchr($file['name'], '.');
    $temp = $file['tmp_name'];
    $newName = time() . rand(1000, 9999) . $ext;
    $newFileUrl = "../../uploads/$newName";
    move_uploaded_file($temp, $newFileUrl);
    $feature = "../uploads/$newName";
  }

  $sql = "insert into posts (slug, title, feature, created, content, status, user_id, category_id) 
          values ('$slug', '$title', '$feature', '$created', '$content', '$status', $userId, $category)";
  $res = my_exec($sql);
  if ($res) {
    echo '添加成功';
    header('location: ../posts.php');
  }
  else {
    echo '添加失败';
  }
?>