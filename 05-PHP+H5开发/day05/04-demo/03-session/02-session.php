<?php
  // 清空用户的登录状态, 让用户是第一次访问
  // 1. 将cookie中的sessionId删除即可
  // session_start(); // 开启session机制

  // 开始了 session 机制后
  // 1. 如果当前用户, 是第一次访问该服务器, 会自动生成一个sessionid (随机字符串)
  // echo session_id(); // 获取session_id()

  // 2. 根据这个生成的 sessionid, 服务器就会为该用户开启一块session存储空间
  //    新建一个 session文件, 这个session文件的文件名就是 sessionid, 可以用来存数据
  // $_SESSION['name'] = 'pengpeng';

  // 3. 将 sessionid 传递回浏览器端, 
  //    通过设置响应头: Set-Cookie: PHPSESSID=e54nnd2r7ohgulbm7moq5pb736;
  //    将来由浏览器自动将 sessionid 设置 在 cookie 中, 设置的cookie级别是会话级别, 浏览器关闭后就销毁 (会话级别: 关闭整个浏览器才会被销毁, 关闭标签页不会被销毁)

  // 4. 浏览器端解析响应头, 设置 sessionId 到 cookie 中

  // 5. 第二次访问, cookie 里面存储的数据, 会在请求时携带, 把 sessionId 携带着了

  // 6. 后面服务器端根据 sessionId 就可以找到对应的 session 文件, 认识该用户了
  

  // ★ session_start()开启session机制工作原理, session_start()做了什么?:
  // 1. 浏览器请求服务器, 首先查看请求中携带的cookie是否含有sessionId, 如php的sessionId对应在cookie中的key就是PHPSESSID
  //    1) 如果请求中携带的cookie中有sessionId, 查看是否有该sessionId对应的session文件, 如果没有, 就新建一个空的session文件, 这个session文件的文件名就是sessionId, 用来用来存取数据
  //    2) 如果请求中携带的cookie中没有sessionId, 则会自动生成一个sessionId(随机字符串), 同时新建一个session文件, 这个session文件的文件名就是sessionId, 用来用来存取数据
        // ps: 通过session_id()可以获取sessionId
        // ps: 每个sessionId 对应 唯一一个session文件, 每个session文件也对应唯一一个sessionId, => sessionId和session文件一一唯一对应
  // 2. 可以在服务端通过$_SESSION来操作当前sessionId(cookie携带的或者是新生成的)对应的session文件里的数据
  // 3. 如果本次请求的sessionId是新生成的(请求中cookie没有携带sessionId), 则会自动在响应头设置 Set-Cookie: PHPSESSID=e54nnd2r7ohgulbm7moq5pb736(sessionId); 将来由浏览器自动将sessionId设置在cookie中, 设置的cookie级别是会话级别, 浏览器关闭后就销毁;  (会话级别: 关闭整个浏览器才会被销毁, 关闭标签页不会被销毁)
  
  // ps:  
  //      如果没有执行session_start(), 则没有开启session机制, 则以上1~3不会执行
  //      session 可以在服务器端多个页面进行共享 是因为 cookie可以在同一个网站的多个页面共享
  //      ★ session_start(), 开启session机制, 才可以操作session, 使用session相关的api
  //      session文件是在服务器的目录下创建的
  //      数据都是存储在session文件里的
  
  // $_SESSION:
  // 1. 用于获取, 操作当前sesssionId对应的session文件里的数据


?>