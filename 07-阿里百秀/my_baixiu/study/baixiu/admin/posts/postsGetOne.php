<?php
  include_once '../../fn.php';
  $id = $_GET['id'];
  $sql = "select * from posts where id = $id";
  $res = my_query($sql)[0];
  echo json_encode($res);
?>