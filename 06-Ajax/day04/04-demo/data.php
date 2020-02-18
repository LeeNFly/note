<?php

  // 一个人信息, 关联数组
  $info = array(
    "name" => "zs",
    "age" => 18
  );

  // 需要转成 json 数据
  $result = json_encode( $info );

  // 接收到前端传递过来的需要调用的函数名
  $callback = $_GET['callback'];

  // jsonp: json width padding  
  echo "$callback($result)";

  sleep(20);

?>