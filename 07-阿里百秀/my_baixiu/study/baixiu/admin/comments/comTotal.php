<?php
  include '../../fn.php';
  $sql = "select count(*) as total from comments, posts where comments.post_id = posts.id";
  $res = my_query($sql)[0];
  echo json_encode($res);
?>