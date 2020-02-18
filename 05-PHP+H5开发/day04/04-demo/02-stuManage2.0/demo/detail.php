<?php

  header('content-type:text/html;charset=utf-8');

  include_once "fn.php";

  // 详情页面
  // 1. 需要获取 用户 id, 
  // 2. 准备sql 进行联合查询(还要获取班级信息)
  // 3. 根据数据进行页面渲染

  $id = $_GET['id'];  // 获取用户 id 

  // 需求: 学生表全部信息, class的classname
  $sql = "select stu.*, class.classname from stu join class
          on stu.classid = class.id
          where stu.id = $id";

  // 查询出来的用户信息
  $res = my_query( $sql )[0];
  
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
    <tr><th>序号</th><td><?php echo $res['id']?></td></tr>
    <tr><th>姓名</th><td><?php echo $res['name']?></td></tr>
    <tr><th>昵称</th><td><?php echo $res['nickname']?></td></tr>
    <tr><th>年龄</th><td><?php echo $res['ag e']?></td></tr>
    <tr><th>电话</th><td><?php echo $res['tel']?></td></tr>
    <tr><th>性别</th><td><?php echo $res['sex']==='m'?'男':'女';  ?></td></tr>
    <tr><th>班级</th><td><?php echo $res['classname']?></td></tr>
    <tr><th>图像</th><td><img src="<?php echo $res['photo']?>"></td></tr>
    <tr><th></th><td><a href="list.php">返回</a></td></tr>
  </table>    
  
</body>
</html>