<?php
  include_once '../../fn.php';
  $id = $_GET['id'];
  $slug = $_GET['slug'];
  $name = $_GET['name'];
  $sql = "update categories set slug = '$slug', name = '$name' where id = $id";
  my_exec($sql);
?>