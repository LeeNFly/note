<?php
  include_once '../../fn.php';
  $id = $_POST['id'];
  $title = $_POST['title'];
  $content = $_POST['content'];
  $slug = $_POST['slug'];
  $category = $_POST['category'];
  $created = $_POST['created'];
  $status = $_POST['status'];

  $file = $_FILES['feature'];
  if ($file['error'] === 0) {
    $ext = strrchr($file['name'], '.');
    $temp = $file['tmp_name'];
    $newName = time() . rand(1000, 9999) . $ext;
    $newFileUrl = "../../uploads/$newName";
    move_uploaded_file($temp, $newFileUrl);
    $feature = "../uploads/$newName";
  }
  if (empty($feature)) {
    // 用户没有修改图片
    $sql = "update posts set slug = '$slug', title = '$title', created = '$created', content = '$content', status = '$status', category_id = $category where id = $id";
  }
  else {
    $sql = "update posts set slug = '$slug', title = '$title', feature = '$feature', created = '$created', content = '$content', status = '$status', category_id = $category where id = $id";    
  }
  my_exec($sql);
?>