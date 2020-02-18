<?php
  header('content-type:text/html;charset=utf-8');
  include_once './fn.php';
  $id = $_GET['id'];
  $sql = "select s.id, s.name, s.nickname, s.age, s.tel, s.sex, c.classname, s.photo from stu s, class c where s.classid = c.id AND s.id = $id";
  $res = my_query($sql)[0];
  // echo '<pre>';
  // print_r($res);
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
    <tr><th>序号</th><td><?php echo $res['id']?></td></tr>
    <tr><th>姓名</th><td><?php echo $res['name']?></td></tr>
    <tr><th>昵称</th><td><?php echo $res['nickname']?></td></tr>
    <tr><th>年龄</th><td><?php echo $res['age']?></td></tr>
    <tr><th>电话</th><td><?php echo $res['tel']?></td></tr>
    <tr><th>性别</th><td><?php echo $res['sex'] === 'm' ? '男' : '女'?></td></tr>
    <tr><th>班级</th><td><?php echo $res['classname']?></td></tr>
    <tr><th>图像</th><td><img src="<?php echo $res['photo']?>"></td></tr>
    <tr><th></th><td><a href="./list.php">返回</a></td></tr>
  </table>    
  
</body>
</html>