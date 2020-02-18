<?php
  include_once "./fn.php";

  // 1. 获取 id
  // 2. 编写 sql
  $id = $_GET['id'];
  $sql = "select * from stu where id = $id";
  // 3. 执行 sql
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
  <!-- 引入样式 -->
  <link rel="stylesheet" href="./css/form.css">
</head>

<body>
  <!-- action method name -->
  <!-- 文件
       1. 请求方式 post
       2. 给 file 指定 name
       3. enctype="multipart/form-data"
  -->
  <form action="updateSave.php" method="post" enctype="multipart/form-data">
    <!-- 隐藏域: type="hidden", 也是表单标签, 一般用于向后台传递一些不希望被用户修改的值 -->
    <input type="hidden" name="id" value="<?php echo $data['id'] ?>">
    
    姓名：<input type="text" name="username" value="<?php echo $data['name'] ?>"> 
    昵称：<input type="text" name="nickname" value="<?php echo $data['nickname'] ?>"> 
    年龄：<input type="text" name="age" value="<?php echo $data['age'] ?>"> 
    电话：<input type="text" name="tel" value="<?php echo $data['tel'] ?>"> 
    性别：
      <input type="radio" name="sex" value="m"
        <?php echo $data['sex'] === 'm' ? 'checked' : '' ?>
      >男
      <input type="radio" name="sex" value="f"
        <?php echo $data['sex'] === 'f' ? 'checked' : '' ?>
      >女
    <br> 
    班级：
      <select name="class">
        <!-- php 从数据库中取出的所有字段值, 都是字符串类型的 (小坑) -->
        <option value="1" <?php echo $data['classid'] === '1' ? 'selected' : '' ?>>黑马24期</option>
        <option value="2" <?php echo $data['classid'] === '2' ? 'selected' : '' ?>>黑马25期</option>
        <option value="3" <?php echo $data['classid'] === '3' ? 'selected' : '' ?>>黑马26期</option>
        <option value="4" <?php echo $data['classid'] === '4' ? 'selected' : '' ?>>黑马27期</option>
        <option value="5" <?php echo $data['classid'] === '5' ? 'selected' : '' ?>>黑马28期</option>
      </select>
    头像：
      <input type="file" name="photo">
      <img src="<?php echo $data['photo']?>" style="width: 100%; " alt="">
      <input type="submit" value="保存信息">
  </form>

</body>

</html>