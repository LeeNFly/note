<?php
  include_once '../../fn.php';
  $sql = "select * from categories";
  $res = my_query($sql);
  echo json_encode($res);
?>