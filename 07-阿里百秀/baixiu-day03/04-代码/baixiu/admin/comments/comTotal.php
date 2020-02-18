<?php
  // comTotal作用: 获取所有有效的评论的总数 (联合文章表)
  // 1. 准备sql
  // 2. 执行sql
  // 3. 返回结果
  include_once "../../fn.php";

  $sql = "select count(*) as total from comments join posts on comments.post_id = posts.id";
  
  // 执行sql
  $res = my_query( $sql )[0];

  echo json_encode( $res );

?>