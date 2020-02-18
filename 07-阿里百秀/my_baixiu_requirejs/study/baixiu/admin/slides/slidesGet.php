<?php
  include_once '../../fn.php';
  $sql = "select * from options where id = 10";
  $res = my_query($sql)[0]['value'];
  echo $res;
?>