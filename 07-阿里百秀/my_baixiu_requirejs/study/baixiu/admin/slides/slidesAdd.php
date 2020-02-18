<?php
  include_once '../../fn.php';
  // echo '<pre>';
  // print_r($_POST);
  // echo '</pre>';
  // echo '<pre>';
  // print_r($_FILES);
  // echo '</pre>';
  $info['text'] = $_POST['text'];
  $info['link'] = $_POST['link'];
  $file = $_FILES['image'];
  if ($file['error'] === 0) {
    $ext = strrchr($file['name'], '.');
    $temp = $file['tmp_name'];
    $newName = time() . rand(1000, 9999) . $ext;
    $newFileUrl = "../../uploads/$newName";
    move_uploaded_file($temp, $newFileUrl);
    $info['image'] = "../uploads/$newName";
  }
  if (!empty($info['image'])) {
    // 有上传图片
    $sql_select = "select * from options where id = 10";
    $jsonStr = my_query($sql_select)[0]['value'];
    // echo $jsonStr;
    $arr = json_decode($jsonStr, true); // 将json字符串转为二维数组
    $arr[] = $info;

    // echo '<pre>';
    // print_r($arr);
    // echo '</pre>';

    $str = json_encode($arr, JSON_UNESCAPED_UNICODE);
    // echo $str;


    $sql_update = "update options set value = '$str' where id = 10";

    my_exec($sql_update);
  }
?>
