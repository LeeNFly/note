<?php

  // 1. 接收数据
  // 2. 准备 sql
  // 3. 执行 sql

  include_once "../../fn.php";

  $name = $_GET['name'];  // 分类名称
  $slug = $_GET['slug'];  // 别名

  // 准备 sql   insert into 表名 (字段1, 字段2, 字段3) values (值1, 值2, 值3)
  $sql = "insert into categories (slug, name) values ('$slug', '$name')";

  // 执行 sql
  my_exec( $sql );

?>