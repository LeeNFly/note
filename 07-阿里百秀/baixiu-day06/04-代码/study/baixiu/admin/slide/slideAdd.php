<?php

  include_once "../../fn.php";

  // 1. 接收前端提交的数据  基本表单数据  文件数据
  // 基本表单数据
  $info['text'] = $_POST['text'];
  $info['link'] = $_POST['link'];

  // 文件转存, 收集地址
  // (1) 通过 name 获取 $file
  // (2) 判断 error === 0
  // (3) 生成新的文件名  (截取后缀名)
  // (4) 转存文件 move_uploaded_file(临时文件路径, 新的文件路径)
  $file = $_FILES['image'];
  if ( $file['error'] === 0 ) {
    // 上传了图片
    $ext = strrchr( $file['name'], '.' ); // 后缀名
    $newName = time() . rand(1000, 9999) . $ext; // 新文件名
    $temp = $file['tmp_name'];  // 临时文件路径
    $newFileUrl = "../../uploads/" . $newName; // 新路径
    move_uploaded_file( $temp, $newFileUrl ); 

    // 收集地址, 收集的是相对于页面的路径
    $info['image'] = "../uploads/" . $newName;
  }

  // $info = [
  //   'image' => '../uploads/slide_1.jpg',
  //   'text' => 'aaa',
  //   'link' => 'https://zce.me',
  // ]
  // 得到了一维数组

  // 在上传了图片的情况下, 进行入库
  if ( isset( $info['image'] ) ) {

    // 2. 从数据库中读取所有的轮播数据 (jsonStr)
    $sql = "select value from options where id = 10";
    $jsonStr = my_query( $sql )[0]['value'];

    // 3. 将jsonStr 转成 数组
    $arr = json_decode( $jsonStr, true );

    // 4. 将 $info 追加到数组中
    $arr[] = $info;   // 类似于 js 中的 push

    // 5. 转成 json, 默认会把json转为unicode编码形式, 这样存入数据库时, \会漏掉, 导致取出时中文不能显示
    //    JSON_UNESCAPED_UNICODE: 转json时候, 不对中文进行转unicode码处理, 直接把中文原文输出到json字符串, 直接将中文存入数据库, 不会导致中文丢失
    $str = json_encode( $arr, JSON_UNESCAPED_UNICODE );

    // 6. 存入数据库 (update)
    $updateSql = "update options set value='$str' where id=10";
    my_exec( $updateSql );
  }

?>