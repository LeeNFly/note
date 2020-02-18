<?php
  header('content-type:text/html;charset=utf-8');
  include_once './fn.php';

  $id = $_GET['id'];

  $sql = "delete from stu where id = $id";

  $res = my_exec($sql);

  if($res) {
    echo '删除成功';
    header('location: ./list.php');
  }
  else {
    echo '删除失败';
  }
?>