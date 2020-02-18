<?php

  // 准备用于删除的接口, 一般都会返回剩余的有效的总条数
  // 1. 接收 id
  // 2. 根据 id 编写 sql语句, delete from 表名 where id = $id
  // 3. 执行 sql
  // 4. 将剩余的总条数返回

  include_once "../../fn.php";

  // 准备 删除 sql
  $id = $_GET['id'];
  $sql = "delete from comments where id = $id";
  // 执行了删除操作
  my_exec( $sql );


  // 将剩余的总条数返回 (联合查询)
  $sql_total = "select count(*) as total from comments join posts on comments.post_id = posts.id";
  // 执行sql
  $res = my_query( $sql_total )[0];
  echo json_encode( $res );



?>