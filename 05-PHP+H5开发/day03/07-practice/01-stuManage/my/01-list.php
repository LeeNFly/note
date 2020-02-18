<?php
	$jsonStr = file_get_contents('data.txt'); //取出本地数据, 是一个json字符串
	$arr = json_decode($jsonStr, true); // 将json字符串转为关联数组
	// echo '<pre>';
	// print_r($arr);
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
	<h4>用户信息列表 <a href="01-add.html">添加用户</a></h4>
	<table>
		<tr>
			<th>用户名</th>
			<th>昵称</th>
			<th>性别</th>
			<th>年龄</th>
			<th>电话</th>
			<th>班级</th>
			<th>头像</th>
			<th>操作</th>
		</tr>
	<?php foreach($arr as $k => $v) {?>
		<tr>
			<td><?php echo $v['username']?></td>
			<td><?php echo $v['nickname']?></td>
			<td><?php echo $v['age']?></td>
			<td><?php echo $v['tel']?></td>
			<td><?php echo $v['sex'] === 'm' ? '男' : '女'?></td>
			<td><?php echo $v['class']?></td>
			<td>
				<img src="<?php echo $v['photo']?>">
			</td>
			<td>
				<a href="delete.php?index=<?php echo $k?>">删除</a>
			</td>
		</tr>
	<?php }?>
	</table>
</body>

</html>