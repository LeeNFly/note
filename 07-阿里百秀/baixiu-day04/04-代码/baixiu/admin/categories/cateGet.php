<?php

  // 此接口: 专门用于获取分类数据
  // 1. 准备 sql
  // 2. 执行 sql
  // 3. 返回结果
  include_once "../../fn.php";

  $sql = "select * from categories";

  // 执行
  $res = my_query( $sql );

  
  echo json_encode( $res );

?>