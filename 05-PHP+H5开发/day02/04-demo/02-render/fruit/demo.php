<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="./style.css">
</head>
<?php
  // arr是二维数组
  // 根据二维数组, 动态渲染下面的水果
  // include 导入文件
  // include "文件路径"  类似于 js 中的 script 标签引入
  include "fruit.php";
?>
<body>
  <div class="header">
    传智网上水果超市
  </div>
  <div class="container">
    <p>
      <a href="#">水果</a>
      <a href="#">干果</a>
      <a href="#">蔬菜</a>
    </p>
    <ul>
      <!-- $k 表示的是下标, $v 表示每一项 -->
      <?php foreach ( $arr as $k => $v ) { ?>
        <li>
          <img src="<?php echo $v['path']; ?>" alt="">
          <a href="#"><?php echo $v['name']; ?></a>
        </li>
      <?php } ?>
    </ul>

  </div>
  <div class="footer">
    传智播客 版权所有
  </div>
</body>

</html>