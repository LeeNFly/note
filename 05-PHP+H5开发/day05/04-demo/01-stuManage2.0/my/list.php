<?php
  include_once "./fn.php";

  // 页面渲染功能实现
  // 1. 准备 sql 语句
  // 2. 执行 sql 语句, 得到数组
  // 3. 遍历数组

  // 思考: 让新添加的数据显示在最前面 ? => 降序排列
  $sql = "select * from stu order by id desc";   // 准备 sql
  $arr = my_query( $sql );      // 执行 sql 得到数组

  // echo '<pre>';
  // print_r( $arr );
  // echo '</pre>';
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
  <h4>用户信息列表 <a href="add.html">添加数据</a></h4>
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
    <?php foreach ( $arr as $k => $v ) { ?>
      <tr>
        <td><?php echo $v['name']?></td>
        <td><?php echo $v['nickname']?></td>
        <!-- 如果是 m 显示 男, 如果是 f 显示女 -->
        <td><?php echo $v['sex'] === 'm' ? '男' : '女' ?></td>
        <td><?php echo $v['age']?></td>
        <td><?php echo $v['tel']?></td>
        <td><img src="<?php echo $v['photo']?>"></td>
        <td>
          <a href="del.php?id=<?php echo $v['id']?>">删除</a>
          <a href="detail.php?id=<?php echo $v['id']?>">详情</a>
          <a href="update.php?id=<?php echo $v['id']?>">编辑</a>
        </td>
      </tr>
    <?php } ?>
  </table>
</body>

</html>