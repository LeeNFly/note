<?php

  // 此接口, 用于获取文章数据   支持分页, 且要求联合查询 (联合用户表和分类表)

  include_once "../../fn.php";

  $page = $_GET['page']; // 页码
  $pageSize = $_GET['pageSize']; // 每页条数

  // 起始索引
  $start = ($page - 1) * $pageSize;

  // 编写 sql
  $sql = "select posts.*, users.nickname, categories.name from posts
          join users on posts.user_id = users.id    -- 联合用户表, 查询用户昵称
          join categories on posts.category_id = categories.id  -- 联合分类表, 查询分类名
          order by id desc  -- 按照 id 进行倒序排序, 可以让新添加的数据显示在最前面
          limit $start, $pageSize";

  // 执行 sql
  $res = my_query( $sql );

  // 返回结果, 需要转成 json 数据
  echo json_encode( $res ); 

?>