<?php

  $info = array(
    "name" => "pp",
    "age" => 18
  );

  $result = json_encode( $info );

  $callback = $_GET['callback'];

  // jsonp: json width padding, 给 json 数据打了个补丁, 给 json 套了一个函数调用

  echo "$callback($result)";

?>