<?php
  include '../../fn.php';
  $id = $_GET['id'];
  $sql = "delete from comments where id in ($id)";
  my_exec($sql);
  $sql_total = "select count(*) as total from comments, posts where comments.post_id = posts.id";
  $res = my_query($sql_total)[0];
  echo json_encode($res);
?>