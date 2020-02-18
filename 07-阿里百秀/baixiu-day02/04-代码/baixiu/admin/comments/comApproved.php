<?php

  include_once "../../fn.php";

  // 专门用户批准的接口, 需要传评论的 id
  $id = $_GET['id'];

  // 编写 sql 语句 update
  // update 表名 set 字段=值 where 条件
  $sql = "update comments set status = 'approved' where id = $id";

  // 执行 sql
  my_exec( $sql )


?>