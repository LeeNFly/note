<?php
  header('content-type:text/html;charset=utf-8');
  // php 操作数据库
  // 1  连接数据库
  // 2. 准备 sql 语句
  // 3. 执行 sql 语句
  // 4. 分析 sql 执行的结果
  // 5. 关闭连接 (关闭连接) (只有连接数据库成功, 最后才需要关闭连接)

  // 需求: 连接数据库
  // mysqli_connect( ip地址, 用户名, 密码, 数据库名, 端口号(默认就是 3306) )
  // 返回值:
  //    (1) 连接成功, 返回一个连接对象
  //    (2) 连接失败, 返回 false    用户名密码输错了..

  // @ 错误抑制符, 可以抑制错误的输出
  $link = @ mysqli_connect('127.0.0.1', 'root', 'root', 'z_stumanage');
  if ($link) {
    echo '连接成功';
  } else {
    echo '连接失败';
  }

?>