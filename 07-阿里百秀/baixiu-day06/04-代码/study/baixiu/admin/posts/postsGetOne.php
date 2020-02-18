<?php
  include_once "../../fn.php";

  // 此接口: 可以根据传递的文章id, 将该文章数据返回
  $id = $_GET['id'];

  // 查询sql语句
  $sql = "select * from posts where id = $id";

  // 执行
  $res = my_query( $sql )[ 0 ];

  // 输出给前端
  echo json_encode( $res );

?>