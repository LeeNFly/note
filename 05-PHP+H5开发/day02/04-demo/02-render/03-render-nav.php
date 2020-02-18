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

  <ul>
    <?php
      // 遍历数组进行输出
      // $k 下标, $v 值
      // 通过字符串拼接, 输出 html 标签的方式, 进行渲染导航
      foreach( $arr as $k => $v ) {
        echo '<li><a href="#">' . $v . '</a></li>';
      }
    ?>
  </ul>
  
</body>
</html>