<?php
  include_once '../../fn.php';
  $id = $_GET['id'];
  $sql = "delete from categories where id = $id";
  my_exec($sql);
?>