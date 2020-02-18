<?php
  include_once '../../fn.php';
  $id = $_GET['id'];
  $sql = "delete from posts where id = $id";
  my_exec($sql);
  $sql_total = "select count(*) as total from posts, users, categories 
                where posts.user_id = users.id and posts.category_id = categories.id";
  $res = my_query($sql_total)[0];
  echo json_encode($res);
?>