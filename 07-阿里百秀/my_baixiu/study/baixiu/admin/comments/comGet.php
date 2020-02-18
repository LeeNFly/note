<?php
  include '../../fn.php';
  $page = $_GET['page'];
  $pageSize = $_GET['pageSize'];
  $start = ($page - 1) * $pageSize;
  $sql = "select comments.*, posts.title from comments, posts where comments.post_id = posts.id limit $start, $pageSize";
  $res = my_query($sql);
  echo json_encode($res);
?>