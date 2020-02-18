<?php
  header('content-type:text/html;charset=utf-8');
  define('HOST', '127.0.0.1');
  define('USERNAME', 'root');
  define('PASSWORD', 'root');
  define('DB', 'z_stumanage');
  define('PORT', 3306);

  function my_exec($sql) {
    $link = mysqli_connect(HOST, USERNAME, PASSWORD, DB, PORT);
    if (!$link) {
      echo '连接失败';
      return false;
    }

    $res = mysqli_query($link, $sql);

    if ($res) {
      mysqli_close($link);
      return true;
    }
    else {
      mysqli_error($link);
      mysqli_close($link);
      return false;
    }
  }

  function my_query($sql) {
    $link = mysqli_connect(HOST, USERNAME, PASSWORD, DB, PORT);
    if(!$link) {
      echo '连接失败';
      return false;
    }

    $res = mysqli_query($link, $sql);

    if (!$res) {
      echo mysqli_error($link);
      mysqli_close($link);
      return false;
    }

    $arr = [];
    while ($row = mysqli_fetch_assoc($res)) {
      $arr[] = $row;
    }

     mysqli_close($link);
    return $arr;
  }

  // echo my_exec("update stu set name = 'zl' where name = 'ww'");
  // echo '<pre>';
  // print_r(my_query("select * from stu"));
  // echo '</pre>';
?>