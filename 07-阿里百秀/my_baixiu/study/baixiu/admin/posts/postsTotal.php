<?php
  include_once '../../fn.php';
  $sql = "select count(*) as total from posts, users, categories 
          where posts.user_id = users.id and posts.category_id = categories.id";
  $res = my_query($sql)[0];
  echo json_encode($res);
?>