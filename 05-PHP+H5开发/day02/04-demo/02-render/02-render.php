<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    h1 {
      color: red;
      font-size: 100px;
    }
  </style>
</head>
<body>

  <?php $name='鹏鹏'; ?>

  <h1>今天天气不错</h1>
  <p><?php echo 11 + 20; ?></p>

  <h2><?php echo "呵呵"; ?></h2>

  <h1><?php echo $name; ?></h1>

  <!-- 
    1. 在 php 文件中可以任意编写 html, css, js, 因为放在 php 标签外, 会(在response响应体中)直接进行原文输出
    2. 将来由浏览器进行解析
    3. php文件中可以在任意位置编写多个php标签, 会按照顺序从上到下进行解析执行, ★ 上面声明的变量, 下面可以直接使用

    注意: php标签内写的东西, 只有通过echo, print_r, var_dump 才会(在response响应体中)输出给浏览器, 最后交给浏览器进行解析. php标签内如果没有echo, 则不会输出给浏览器解析. 
   -->

  <script>
  
    // alert("我来啦,你在哪?");

  </script>

</body>
</html>