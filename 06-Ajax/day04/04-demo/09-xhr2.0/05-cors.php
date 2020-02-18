<?php
  // 1. CORS定义:
  //    新版本的XMLHttpRequest对象，可以向不同域名的服务器发出HTTP请求。
  //    这叫做"跨域资源共享"（Cross-origin resource sharing，简称CORS）。

  // 2. CORS解决的问题:
  //    由定义知道, CORS是XMLHttpRequest对象, 可以向不同域名的服务器发出HTTP请求,
  //    ★ CORS是用来解决ajax无法跨域请求数据的问题, 使用CORS可以使得ajax也可以跨域请求数据了, CORS需要在服务器端设置
  //    由于是ajax请求跨域, 所以支持get方式和post方式

  // 3. 跨域资源共享（CORS）的前提:
  //    1) 浏览器支持这个功能( 兼容性IE10+ )
  //    2) 服务器必须允许这种跨域
  //    ps: ★ CORS是在服务器端设置的, 支持post和get方式

  // 4. CORS允许跨域的具体流程:
  //    1) 浏览器发送跨域请求
  //    2) 服务器端收到一个跨域请求后, 查看服务器自己是否有设置CORS允许跨域, 并且查看发起请求的地址是否是CORS允许跨域的地址
  //       如果允许跨域并且发起请求的地址是CORS允许的地址, 则在响应头中添加Access-Control-Allow-Origin Header资源权限配置。发送响应给浏览器
  //    3) 浏览器收到响应后，查看响应头是否设置了header('Access-Control-Allow-Origin:请求源域名或者*');
  //        1> 如果没有, 则浏览器忽略此次响应, 前端拿不到数据 (数据是响应回来了的, 但是被浏览器忽略了)
  //        2> 如果有, 查看当前域是否和响应回来的响应头的Access-Control-Allow-Origin: 域名中的域名是否一致,
  //            如果一致, 则将结果返回给JavaScript, 前端可以拿到数据, 否则, 浏览器忽略此次响应(数据是响应回来了的, 但是被浏览器忽略了), 前端拿不到数据

  // 5. 结论总结:
  //    1) 跨域行为是浏览器行为，响应是回来了的(数据是响应回来了的), 只是浏览器安全机制做了限制, 对于跨域响应内容进行了忽略。
  //    2) 服务器与服务器之间是不存在跨域的问题的

  // cors 跨域资源共享, 允许所有的网站能够访问数据
  // header("Access-Control-Allow-Origin: *");

  // 只允许 www.pp.com 访问该网站的数据
  // ps: 网站是发起跨域请求的那个网站, 允许该网站跨域请求本服务器的数据
  //     可以是域名, 也可以是ip地址, 总之和当前网站要匹配, 要带上协议
  //     如果配置发起请求的地址的域名映射的ip地址, 则也无法跨域, 即要和发起请求的地址的域名要完全一致
  // header("Access-Control-Allow-Origin: http://www.pp.com");

  // 注意: header("Access-Control-Allow-Origin: http://www.pp.com"); 后设置的会覆盖之前设置的

  echo "hello cors";

?>