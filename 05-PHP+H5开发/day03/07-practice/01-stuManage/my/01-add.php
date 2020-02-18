<?php
  // 获取基本信息
  $info = [];
  $info['username'] = $_POST['username'];
  $info['nickname'] = $_POST['nickname'];
  $info['age'] = $_POST['age'];
  $info['tel'] = $_POST['tel'];
  $info['sex'] = $_POST['sex'];
  $info['class'] = $_POST['class'];

  // 获取文件相关
  $file = $_FILES['photo'];
  // 转存文件
  $ext = strrchr($file['name'], '.');
  $newFileName = time() . rand(1000, 9999) . $ext;
  $tempFileUrl = $file['tmp_name'];
  $newFileUrl = "upload/$newFileName";
  move_uploaded_file($tempFileUrl, $newFileUrl);

  // 手机图片路径
  $info['photo'] = $newFileUrl;

  // 将数据存入txt文件
  // 1. 取出文件里的json字符串
  $str = file_get_contents('data.txt', true);
  // 2. 转成关联数组
  $arr = json_decode($str, true);
  // 3. 往数组中存入数据
  $arr[] = $info;
  // 4. 将数组转为json字符串
  $jsonStr = json_encode($arr);
  // 5. 写入文件
  file_put_contents('data.txt', $jsonStr);

  // 跳转到列表页面
  header('location: 01-list.php');
 
?>