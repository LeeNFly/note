<?php

  include_once "./fn.php";

  // 通过 $_GET 就可以获取到前端传递过来的 id
  echo '<pre>';
  print_r( $_GET );
  echo '</pre>';

  // 1. 接收前端传递过来的 id
  // 2. 编写删除的 sql 语句
  // 3. 执行 sql, 非查询语句 my_exec
  $id = $_GET['id'];

  $sql = "delete from stu where id = $id";

  $res = my_exec( $sql );  // 返回值 true / false

  if ( $res ) {
    echo "删除成功";
    // 跳转到 list.php
    header("location: list.php");
  }
  else {
    echo "删除失败";
  }


?>