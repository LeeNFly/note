<?php
  //  hu8 + tab
  header('content-type:text/html;charset=utf-8');

  // 关联数组
  $arr = [
    "name" => "小花",
    "age" => 18
  ];

  // 打印 关联数组

  // print_r( $arr ); => 输出给浏览器的是：
  // Array
  // (
  //     [name] => 小花
  //     [age] => 18
  // )
  // 但是最后浏览器解析成 => Array ( [name] => 小花 [age] => 18 )
  // 因为浏览器把换行符和空格符解析成1个空格了
  

  // 加上pre标签, 让浏览器保留格式输出
  // echo "<pre>";
  // print_r( $arr );
  // echo "</pre>";
  // 再次输出关联数组, 输出如下
  // Array
  // (
  //     [name] => 小花
  //     [age] => 18
  // )


  // 代码段
  // 打印复杂数据类型
  echo '<pre>';
  print_r($arr);
  echo '</pre>';
  

?>