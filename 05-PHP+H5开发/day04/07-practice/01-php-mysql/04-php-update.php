<?php
  header('content-type:text/html;charset=utf-8');

  // 1. 连接
  // 2. 准备 sql
  // 3. 执行 sql
  // 4. 分析结果
  // 5. 关闭连接

  $link = mysqli_connect('127.0.0.1', 'root', 'root', 'test01', 3306);
   if(!$link) {
     die('连接失败');
   }
  $name = 'zs';
  $sql = "update stu set name = 'ls' where name = '$name'";

  $res = mysqli_query($link, $sql);

   if ($res) {
     echo '修改成功';
   }
   else {
     echo '修改失败';
     mysqli_error($link);
   }

   mysqli_close($link);

   

?>