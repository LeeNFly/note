<?php

  include_once "../../fn.php";

  // 专门用户批准的接口, 需要传评论的 id
  // 如果需要批准多个, 3,5,7  批量批准, 需要接收 3,5,7 这样的格式
  $id = $_GET['id'];

  // 编写 sql 语句 update
  // update 表名 set 字段=值 where 条件
  // update comments set status = 'approved' where id in (3)
  $sql = "update comments set status = 'approved' where id in ($id)";

  // 执行 sql
  my_exec( $sql )

?>