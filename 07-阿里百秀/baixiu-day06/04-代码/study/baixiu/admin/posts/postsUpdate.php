<?php

  include_once "../../fn.php";

  // 1. 后台接收基本表单数据, 文件数据
  // 基本表单数据
  $id = $_POST['id'];
  $title = $_POST['title'];
  $content = $_POST['content'];
  $slug = $_POST['slug'];
  $category = $_POST['category'];
  $created = $_POST['created'];
  $status = $_POST['status'];

  // 文件数据    (如果有文件提交, 就是要修改, 如果没有文件提交, 就是保留原图片)

  // 转存文件
  // (1) 获取 $file
  // (2) 判断 error
  // (3) 动态创建一个文件名 (截取后缀名)
  // (4) 转存文件  move_uploaded_file(临时文件路径, 新的文件路径)
  $file = $_FILES['feature'];
  if ( $file['error'] === 0 ) {
    // 上传文件
    $ext = strrchr( $file['name'], "." );
    $newName = time().rand(1000, 9999).$ext;  // 生成文件名
    $temp = $file['tmp_name']; // 临时文件路径
    $newFileUrl = "../../uploads/" . $newName;  // 存文件的路径
    move_uploaded_file( $temp, $newFileUrl );  // 转存文件

    // 收集文件数据, 收集应该是基于将来页面的访问路径
    $feature = "../uploads/" . $newName;
  }


  // 2. 编写 sql 语句  update
  if ( empty( $feature ) ) {
    // 没有上传图片
    // update 表名 set 字段=值,字段2=值2, .... where 条件
    $sql = "update posts set title='$title', content='$content', slug='$slug', category_id=$category,
            created='$created', status='$status' where id = $id";
  }
  else {
    $sql = "update posts set title='$title', content='$content', slug='$slug', category_id=$category,
            created='$created', status='$status', feature='$feature' where id = $id";
  }

  // 3. 执行 sql 语句 
  my_exec( $sql );


?>