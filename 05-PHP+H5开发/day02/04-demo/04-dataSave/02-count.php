<?php
  // 变量是存在内存中, 一旦页面关闭, 变量就没了
  // 数据持久化: 就是将数据写入到文件中, 进行持久化保存


  // 需求: 进行站点统计, 每访问一次, 让数字 + 1
  // 思路: 
  // 1. 从文件中读出, 已经访问了多少次了
  // 2. 在访问的次数基础上 + 1
  // 3. 写入到文件中

  // file_get_contents(文件路径) 文件读取
  // file_put_contents(文件路径, 写入的内容) 文件写入

  $num = file_get_contents("02-count.txt"); // 0
  $num++; // 会自动将字符串转为数字后再+1
  file_put_contents("02-count.txt", $num);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>

  <h1> 您是当前第 <?php echo $num ?> 个访问的用户 </h1>
  
</body>
</html>