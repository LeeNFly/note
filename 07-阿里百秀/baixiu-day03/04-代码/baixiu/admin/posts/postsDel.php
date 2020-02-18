<?php
  // 此接口, 用于删除文章, 删除完成返回有效的文章总条数
  // 1. 接收id
  // 2. 编写 sql
  // 3. 执行删除sql
  // 4. 返回总条数

  include_once "../../fn.php";
  $id = $_GET['id'];
  $sql = "delete from posts where id = $id";
  // 执行删除操作
  my_exec( $sql );

  // 返回总条数 (联合用户表和分类表)
  // 编写 sql
  $sqlTotal = "select count(*) as total from posts
              join users on posts.user_id = users.id    -- 联合用户表
              join categories on posts.category_id = categories.id  -- 联合分类表";

  // 执行 sql语句
  $res = my_query( $sqlTotal )[ 0 ];

  // 返回结果
  echo json_encode( $res );


?>