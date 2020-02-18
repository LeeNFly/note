<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="./nav-style.css">
</head>
<body>
  <!-- 
    导航应该不是写死的, 应该通过数据库的数据, 进行动态渲染
    通过数组模拟数据库
  -->
  <?php
    $arr = ['大前端', '小前端', '大php', 'js操作挖掘机'];
  ?>

  <!-- html 和 php 混编模式  -->
  <ul>
    <?php foreach ( $arr as $k => $v ) { ?>

      <li><a href="#"><?php echo $v; ?></a></li>

    <?php } ?>
  </ul>
  
</body>
</html>