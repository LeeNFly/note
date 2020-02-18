<?php 
  header('content-type:text/html;charset=utf-8');

  // php操作数据库步骤
  // 1. 连接数据库
  // 2. 准备 sql语句
  // 3. 执行 sql
  // 4. 分析 结果
  // 5. 关闭连接

// 1. 连接数据库, 成功返回连接对象, 失败返回布尔值false
  $link = @ mysqli_connect('127.0.0.1', 'root', 'root', 'z_stumanage');
  if (!$link) {
    die('连接失败');
  } 
// 2. 连接成功, 准备sql
  $id = 3;
  $sql = "delete from stu where id = $id";

// 3. 执行sql
  $res = mysqli_query($link, $sql);

// 4. 分析结果, 对于增删改, 成功返回true, 失败返回false
  if ($res) {
    echo '删除成功';
  } else {
    // 执行失败;
    // 打印错误信息
    echo mysqli_error($link);
    echo '删除失败';
  }


  // 5. 关闭连接
  mysqli_close($link);

?>