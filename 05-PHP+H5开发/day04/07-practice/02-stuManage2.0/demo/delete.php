<?php

  include_once "fn.php";

  // 删除功能思路:
  // 1. 获取用户 id
  // 2. 准备 sql 语句
  // 3. 调用 封装好的 方法 执行 sql

  $id = $_GET['id']; // 需要删除的用户的 id

  $sql = "delete from stu where id=$id";  // 准备 sql

  if ( my_exec( $sql ) ) {
    echo "删除成功";
    // 跳转回到 list 列表页
    header("location: list.php");
  }
  else {
    echo "删除失败";
  }

?>