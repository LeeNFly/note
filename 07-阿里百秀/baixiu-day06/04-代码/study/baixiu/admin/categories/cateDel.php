<?php

  // 接口说明: 此接口用于 根据 id 删除分类
  // 1. 接收 id
  // 2. 编写 sql
  // 3. 执行 sql

  include_once "../../fn.php";
  $id = $_GET['id'];
  $sql = "delete from categories where id = $id";
  my_exec( $sql );

?>