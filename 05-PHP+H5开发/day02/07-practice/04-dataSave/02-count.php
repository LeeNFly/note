<?php
  $count = file_get_contents('04-count.txt');
  $count++;
  file_put_contents('04-count.txt', $count);
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
  你是本站第<?php echo $count?>个访问的用户
</body>
</html>