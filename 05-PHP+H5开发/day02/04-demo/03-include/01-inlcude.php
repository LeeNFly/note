<?php


  // include 导入文件
  // include "文件路径";
  // 1. 导入 php 文件, 类似于 js 中 script 标签导入, 可以用于函数复用
  // 2. 还可以导入 html 结构, 实现 html 结构复用
  // 3. 可以进行重复引入, 如果希望对于同一路径的文件, 希望防止重复引入, include_once
  //    include_once 对于同一路径的文件只会引入一次

  include_once "fn.php";
  include_once "fn.php";
  include_once "fn.php";
  echo add( 1, 2 );

?>