<?php

  // 获取有效文章总条数 (联合用户表和分类表)
  include_once "../../fn.php";

  // 编写 sql
  $sql = "select count(*) as total from posts
          join users on posts.user_id = users.id    -- 联合用户表
          join categories on posts.category_id = categories.id  -- 联合分类表";

  // 执行 sql语句
  $res = my_query( $sql )[ 0 ];

  // 返回结果
  echo json_encode( $res );

?>