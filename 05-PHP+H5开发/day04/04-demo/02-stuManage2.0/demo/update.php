<?php
  include_once "fn.php";

  // 1. 获取用户 id, 查询用户信息, 进行渲染
  // 2. 将来用户点击保存按钮, 提交信息
  $id = $_GET['id'];

  $sql = "select * from stu where id = $id";   // 准备 sql 语句

  $res = my_query($sql)[0];  // 取得结果

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
  <!-- 引入样式 -->
  <link rel="stylesheet" href="./css/form.css">
</head>

<body>
  
  <!-- action method name -->
  <!-- 
    文件上传:
      1. method post
      2. 指定 enctype="multipart/form-data"
      3. input:file 指定 name
  -->
  <form action="updateSave.php" method="post" enctype="multipart/form-data">
    <!-- 隐藏域: 有些时候需要传递参数给后台, 但是这个参数又不希望用户看到, 不希望被修改, 可以用隐藏域 -->
    <input type="hidden" name="id" value="<?php echo $id;?>">
    姓名：<input type="text" name="username" value="<?php echo $res['name'];?>"> 
    昵称：<input type="text" name="nickname" value="<?php echo $res['nickname'];?>"> 
    年龄：<input type="text" name="age" value="<?php echo $res['age'];?>"> 
    电话：<input type="text" name="tel" value="<?php echo $res['tel'];?>"> 
    性别：
      <input type="radio" name="sex" value="m" <?php echo $res['sex']==='m'?'checked':''; ?>>男
      <input type="radio" name="sex" value="f" <?php echo $res['sex']==='f'?'checked':''; ?>>女
    <br> 
    班级：
      <select name="class">
        <option value="1" <?php echo $res['classid']==="1"?'selected':''; ?>>黑马24期</option>
        <option value="2" <?php echo $res['classid']==="2"?'selected':''; ?>>黑马25期</option>
        <option value="3" <?php echo $res['classid']==="3"?'selected':''; ?>>黑马26期</option>
        <option value="4" <?php echo $res['classid']==="4"?'selected':''; ?>>黑马27期</option>
        <option value="4" <?php echo $res['classid']==="5"?'selected':''; ?>>黑马28期</option>
      </select>
    头像：
      <input type="file" name="photo">
      <img src="<?php echo $res['photo'] ?>" alt="">
      <input type="submit" value="保存信息">
  </form>

</body>

</html>