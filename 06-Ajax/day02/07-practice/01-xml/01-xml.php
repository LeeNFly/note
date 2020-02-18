<?php
  // header('content-type:text/html;charset=utf-8'); 
  // text/html, 以html的文本形式进行输出, file_get_contents只能读取到html标签里的内容, 读取不了html标签
  
  // 后台输出xml, 需要指定输出格式为 xml
  header('content-type:text/xml;charset=utf-8');

  // 编写一个php, 访问这个页面, 就会输出 xml 格式的数据
  // 将 xml 的内容进行读取, 将来输出给前端
  $result = file_get_contents("01-data.xml");

  echo $result;

?>