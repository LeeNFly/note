<?php 
  header('content-type:text/html;charset=utf-8');

  // 步骤
  // 1. 连接
  // 2. 准备 sql
  // 3. 执行 sql
  // 4. 分析结果
  // 5. 关闭连接

  // 需求: 姓名: 小明明,  年纪: 20, 性别: 男
  $name = "小花花";
  $age = 100;
  $sex = "女";

  // 1. 建立连接
  // mysqli_connect 
  // 成功返回连接对象, 失败返回 false
  $link = @ mysqli_connect('127.0.0.1', 'root', 'root', 'test01');

  if (!$link) {
    var_dump ($link);
    die('连接失败');
  }
  $name = 'zs';
  $age = 18;
  $sql = "insert into stu (name, age) value ('$name', $age)";
  $res = mysqli_query($link, $sql);

  if ($res) {
    echo '执行成功';
  } 
  else {
    echo '执行失败';
    echo mysqli_error($link);
  }

  mysqli_close($link);





?>