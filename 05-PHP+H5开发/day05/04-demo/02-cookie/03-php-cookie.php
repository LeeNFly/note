<?php

  // 注意: 空格, 等号, 分号, 存储的cookie值中不要出现以上特殊字符
  
  // 通过服务器端设置cookie - php  
  // 后端操作cookie:
  // 1. 设置cookie  默认是会话级别的, 关闭浏览器, 就会被销毁 (会话级别: 关闭整个浏览器才会被销毁, 关闭标签页不会被销毁)
  // ps: 设置cookie时, 如果key值已存在, 就会进行覆盖, 否则不会  
  //    setcookie(key, value)
  // setcookie( "desc", "hello_kitty" );

  // 2. 获取
  // $_COOKIE 超全局变量, 可以用于获取当前请求中所携带的所有的 cookie 信息
  // 返回一个关联数组
  // echo '<pre>';
  // print_r( $_COOKIE );
  // echo '</pre>';
  // echo $_COOKIE['desc'];

  // 3. 设置cookie过期时间 (如果不设置过期时间, 默认是会话级别的, 浏览器关闭就销毁) (会话级别: 关闭整个浏览器才会被销毁, 关闭标签页不会被销毁)
  // setcookie( key, value, 时间戳(什么时候到期, 以1970年开始的秒数) ) ps: 单位是秒
  // setcookie( "name", "pengpeng", time() + 7*24*3600 );

  // 4. 如果设置 cookie 为过去的时间, 就会删除, 销毁该 cookie
  // setcookie( "name", "ppp", time() - 1 );


  // setcookie( "name", "pp" );

  // ★ 浏览器在每次发起请求时, 都会自动将cookie中所有的数据进行携带, 携带在请求头中 ps: 跳转页面也会发起请求, 所以也会携带cookie
  // ps: $_COOKIE只能获取本次请求中携带的所有cookie数据
  //     对于上面设置的cookie, 由于代码执行到这里还没有响应给浏览器, 浏览器还没有为我们设置上cookie, 
  //     所以$_COOKIE拿不到上面setcookie刚刚设置的cookie, 有一个时间差
  // echo '<pre>';
  // print_r( $_COOKIE );
  // echo '</pre>';
  
  // 服务器端设置cookie原理:
  //  1). 服务器不能直接操作cookie, 但是可以设置响应头     ps: 前面通过js是直接操作浏览器里的cookie的
  //  2). 在响应头, Set-Cookie: name=ppp
  //  3). 将来浏览器端, 接收到请求, 查看响应头, 并根据 set-cookie 在浏览器端自动设置 cookie
  // 总结: 服务器端设置cookie, 是通过设置响应头, 将来响应给浏览器时, 由浏览器自己设置cookie, 来达到服务器端间接设置cookie的目的
  // setcookie( "name", "ppp" );




// 思考题:
// 1. cookie 的存储容量   4k

// 2. 同一个网站中可不可以共享 cookie  可以

// 3. cookie 是浏览器中 存储数据的 容器, 为什么服务器可以获取 cookie 中的数据 ?
//    因为 cookie 在请求时, 会将 cookie 中的数据, 携带在请求头中
//    服务器就可以读取请求头的内容, 从而间接的获取到 cookie 中的数据

// 4. cookie 是浏览器中 存储数据的 容器, 为什么服务器可以设置 cookie 中的数据 ?
//    setcookie 设置的是响应头, set-cookie: name=pp
//    将来通知浏览器进行设置 cookie

//    因为cookie的存储容量有限, 并且cookie会在请求时自动携带, 所以cookie一般配合session来实现会话保持, 用来存储sessionId, 当然也可以存一些普通数据





?>