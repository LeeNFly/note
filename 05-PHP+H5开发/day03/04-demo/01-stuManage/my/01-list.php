<?php
	header('content-type:text/html;charset=utf-8');

	// 渲染功能
	// 1. 获取本地学生数据, jsonStr
	// 2. 转成数组
	// 3. 遍历数组进行渲染

	$jsonStr = file_get_contents("data.txt");  // 得到 jsonStr
	$arr = json_decode( $jsonStr, true ); // 得到数组

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
	<h4>用户信息列表 <a href="01-add.html?name=pp&age=18">添加数据</a></h4>
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

		<!-- 遍历学生数组, 动态渲染 -->
		<?php foreach( $arr as $k => $v ) { ?>
			<tr>
				<td><?php echo $v['username']; ?></td>
				<td><?php echo $v['nickname']; ?></td>
				<td><?php echo $v['sex']; ?></td>
				<td><?php echo $v['age']; ?></td>
				<td><?php echo $v['tel']; ?></td>
				<td>黑马<?php echo $v['class']; ?>期</td>
				<td>
					<img src="<?php echo $v['photo']; ?>">
				</td>
				<td>
					<a href="delete.php?index=<?php echo $k; ?>">删除</a>
				</td>
			</tr>
		<?php } ?>
		

	</table>
</body>

</html>