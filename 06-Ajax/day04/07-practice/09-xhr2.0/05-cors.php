<?php

  // cors 跨域资源共享, 允许所有的网站能够访问数据
  // header("Access-Control-Allow-Origin: *");

  // 只允许 www.pp.com 访问该网站的数据
  header("Access-Control-Allow-Origin: http://www.pp.com,http://127.0.0.1");
  // header("Access-Control-Allow-Origin: http://127.0.0.1");

  echo "hello cors";

?>