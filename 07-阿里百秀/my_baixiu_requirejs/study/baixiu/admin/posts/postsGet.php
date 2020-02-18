<?php
  include '../../fn.php';
  $page = $_GET['page'];
  $pageSize = $_GET['pageSize'];
  $start = ($page - 1) * $pageSize;
  $sql = "select posts.*, users.nickname, categories.name from posts, users, categories
          where posts.user_id = users.id and posts.category_id = categories.id order by id desc limit $start, $pageSize";
  $res = my_query($sql);
  echo json_encode($res);
?>