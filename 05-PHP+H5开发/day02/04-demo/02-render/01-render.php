<?php

  header('content-type:text/html;charset=utf-8');

  // 必须是 php文件, 才会被服务器解析, php文件以.php为后缀名
  // 1. php 代码必须要放在服务器才能执行 
  // 2. php 代码要放在 php 标签内部才能解析和执行, php语法要写在php标签内才生效
  // 3. 对于 php 标签外面的内容, 会(在response响应体中)进行原文输出 
  // 4. 最终交给浏览器进行解析和渲染 (浏览器可以解析html,css,js)
  // 5. php文件必须通过服务器访问, 才能被解析和渲染

  // 请求到达服务器 php文件后, 服务器对php文件进行解析, 并将解析结果返回给浏览器; 如果不是php文件, 则直接将文件原文输出给浏览器, 浏览器进行解析
    // 解析php文件：
    // 1. 只会解析和执行php标签内的代码, php标签可以在php文件内任意位置
    // 2. 如果是php标签外的任何代码,包括html,js,css等, (在response响应体中)原文输出给浏览器, 最终交由浏览器进行解析和渲染 (在response响应体中响应给浏览器, 最终由浏览器进行解析和渲染)
    // 3. 对于引入的外部文件, 浏览器解析的时候也会 根据路径去引入文件, 然后解析和渲染

  // 注意: php标签内 写的东西, 只有通过echo, print_r, var_dump 才会(在response响应体中)(在对应输出位置)输出给浏览器, 最后交给浏览器进行解析. php标签内 如果没有echo, print_r, var_dump 输出语句, 则不会输出东西给浏览器.
  
  // 浏览器输入网址向 ★ 服务器 发送请求的过程
  // 1. 输入网址, 先进行 dns 解析, 得到 ip地址, 通过 ip 请求服务器
  // 2. 如果请求的是静态资源文件(js, png, html, css等), 不需要服务器进行解析, 直接原文输出到响应体返回
  // 3. 如果请求的是php等动态文件, 会先进行服务器端的解析, 再将输出的结果, 返回给浏览器 (具体参考上述通过服务器请求php文件处理步骤)
  // 4. 浏览器接收响应, 通过渲染引擎进行渲染
  echo 10 + 12;

?>

echo 22 + 40;

<h1>哈哈</h1>