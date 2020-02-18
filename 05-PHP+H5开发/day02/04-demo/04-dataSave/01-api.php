<?php
  header('content-type:text/html;charset=utf-8');

  // 1. 读取文件: file_get_contents
  //    file_get_contents( "文件路径" );  读取文件, 返回文件内容 字符串

  // $str = file_get_contents( "01-data.txt" );
  // echo $str;


  // 2. 文件写入 file_put_contents
  //    file_put_contents("文件路径", "写入的数据")  会进行覆盖写入, 写入的也是字符串, ps: 不会将字符串外层引号写入
  // $str = "hello kitty";
  // file_put_contents("01-data.txt", $str);

?>