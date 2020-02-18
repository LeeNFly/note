<?php
  include_once "./fn.php";

  // 1. 获取 id
  // 2. 编写 sql 语句 - 联合查询
  $id = $_GET['id'];
  $sql = "select stu.*, class.classname from stu
          join class on stu.classid = class.id 
          where stu.id = $id";   // 双层写双引号, 可以解析变量
  // 3. 执行 sql 语句
  $data = my_query( $sql )[0];

  // echo '<pre>';
  // print_r( $data );
  // echo '</pre>';
  
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="./css/table.css">
</head>
<body>

  <table>
    <tr><th>序号</th><td><?php echo $data['id']?></td></tr>
    <tr><th>姓名</th><td><?php echo $data['name']?></td></tr>
    <tr><th>昵称</th><td><?php echo $data['nickname']?></td></tr>
    <tr><th>年龄</th><td><?php echo $data['age']?></td></tr>
    <tr><th>电话</th><td><?php echo $data['tel']?></td></tr>
    <tr><th>性别</th><td><?php echo $data['sex'] === 'm' ? '男' : '女' ?></td></tr>
    <tr><th>班级</th><td><?php echo $data['classname']?></td></tr>
    <tr><th>图像</th><td><img src="<?php echo $data['photo']?>"></td></tr>
    <tr><th></th><td><a href="list.php">返回</a></td></tr>
  </table>    
  
</body>
</html>