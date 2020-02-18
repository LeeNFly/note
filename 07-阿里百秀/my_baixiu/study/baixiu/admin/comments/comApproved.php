<?php
  include '../../fn.php';
  $id = $_GET['id'];
  $sql = "update comments set status = 'approved' where id in ($id)";
  my_exec($sql);
?>