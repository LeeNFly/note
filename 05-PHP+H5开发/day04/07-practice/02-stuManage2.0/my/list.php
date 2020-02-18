<?php
  header('content-type:text/html;charset=utf-8');
  include_once './fn.php';

  $sql = "select * from stu";

  $res = my_query($sql);

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="./css/list.css">
  <title>Document</title>
</head>

<body>
  <h4>用户信息列表 <a href="./add.html">添加数据</a></h4>
  <table>
    
    <tr>
      <th>用户名</th>
      <th>昵称</th>
      <th>性别</th>
      <th>年龄</th>
      <th>电话</th>
      <th>头像</th>
      <th>操作</th>
    </tr>
    <?php foreach($res as $k => $v) {?>
    <tr>
      <td><?php echo $v['name']?></td>
      <td><?php echo $v['nickname']?></td>
      <td><?php echo $v['sex'] === 'm' ? '男' : '女'?></td>
      <td><?php echo $v['age']?></td>
      <td><?php echo $v['tel']?></td>
      <td><img src="<?php echo $v['photo']?>"></td>
      <td>
        <a href="delete.php?id=<?php echo $v['id']?>">删除</a>
        <a href="detail.php?id=<?php echo $v['id']?>">详情</a>
        <a href="update.php?id=<?php echo $v['id']?>">编辑</a>
      </td>
    </tr>
    <?php }?>

  </table>
</body>

</html>