
<?php
  include_once './fn.php';
  is_login();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>

  <h1>我是萌萌哒的个人中心页</h1>
  <p>尊敬的<?php echo $_SESSION['username']?></p>
  <a href="logout.php">退出</a>

  
  
</body>
</html>