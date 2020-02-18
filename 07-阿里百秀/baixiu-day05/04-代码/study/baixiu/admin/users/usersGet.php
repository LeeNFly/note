<?php

  // 接口: 此接口用于获取所有的用户信息
  // 1. 准备 sql
  // 2. 执行 sql
  // 3. 返回结果

  include_once "../../fn.php";
  $sql = "select * from users";
  $res = my_query( $sql );

  echo json_encode( $res );

?>