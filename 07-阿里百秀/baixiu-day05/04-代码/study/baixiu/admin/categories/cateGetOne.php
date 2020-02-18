<?php

  // 此接口: 根据 id 返回 单条分类的数据
  // 1. 获取 id
  // 2. 编写sql
  // 3. 执行sql
  // 4. 返回结果

  include_once "../../fn.php";
  $id = $_GET['id'];
  // 准备sql
  $sql = "select * from categories where id = $id";
  $res = my_query($sql)[0];

  // 转成 json 返回给前端
  echo json_encode( $res );

?>