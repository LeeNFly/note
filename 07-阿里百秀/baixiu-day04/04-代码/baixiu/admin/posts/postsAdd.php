<?php
  header('content-type:text/html;charset=utf-8');
  // 接收 基本表单数据 文件类型数据
  echo '<pre>';
  print_r($_POST);
  echo '</pre>';

  echo '<pre>';
  print_r($_FILES);
  echo '</pre>';

  include_once "../../fn.php";

  // 1. 收集基本表单数据, 还需要获取作者信息
  $title = $_POST['title'];
  $content = $_POST['content'];
  $slug = $_POST['slug'];
  $category = $_POST['category'];
  $created = $_POST['created'];
  $status = $_POST['status'];
  // 还需要作者信息, 从 session 中获取
  session_start();
  $userid = $_SESSION['user_id'];

  // 2. 转存文件, 收集文件路径
  // (1) 根据 name 获取 $file
  // (2) 判断 error
  // (3) 生成一个新的文件名 (动态截取后缀名)
  // (4) 转存文件  move_uploaded_file( 临时文件路径, 新的文件路径 )
  $file = $_FILES['feature'];
  if ( $file['error'] === 0 ) {
    // 上传成功
    $ext = strrchr( $file['name'], "." ); // 截取后缀名
    $newName = time() . rand(1000, 9999) . $ext; // 生成新的文件名
    $temp = $file['tmp_name']; // 临时文件路径
    // 将来使用这个路径, 用来存文件
    $newFileUrl = "../../uploads/" . $newName; 
    // 转存文件
    move_uploaded_file( $temp, $newFileUrl );

    // 收集文件路径, 需要收集的是相对于页面来进行访问的路径
    $feature = "../uploads/" . $newName;
  }


  // 3. 编写 sql 语句
  // insert into  表名 (字段1, 字段2, 字段3, ....)  values (值1, 值2, 值3, ....)
  // 注意: 外双内单
  $sql = "insert into posts (slug, title, feature, created, content, status, user_id, category_id)
          values ('$slug', '$title', '$feature', '$created', '$content', '$status', $userid, $category )";

  // 4. 执行 sql 语句, 跳转到文章列表页
  $res = my_exec( $sql );

  if ( $res ) {
    echo "添加成功";
    // 添加成功, 跳转到文章列表页
    header("location: ../posts.php");
  }
  else {
    echo "添加失败";
  }

  
?>