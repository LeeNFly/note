<?php

  // php 中需要指定字符集
  header('content-type:text/html; charset=utf-8');

  // php是一门后端语言
  
  // 1. php 中的注释和 js 中的一样
  // 2. 所有的 php 代码都要用 php 标签包裹, php语法要写在php标签内才生效
  // 3. 必须要通过 服务器的方式, 访问 php 文件, php 代码才会进行解析
  // 4. 服务器 会对 php 代码进行解析执行, 并将结果输出给浏览器
  // 5. php 中必须以 分号 结尾, 最后一个语句, 可以省略
  // 6. php文件, 文件名以.php结尾


  // ps: 所有的 php 后缀的文件, 文件名不能出现中文, 文件路径也不能出现中文

  // console.log( 123 );
  // echo 输出的内容;

  echo "123";

  echo 1 + 1;

  echo "哈哈";

?>