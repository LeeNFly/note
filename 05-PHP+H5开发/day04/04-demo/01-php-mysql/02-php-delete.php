<?php 
  header('content-type:text/html;charset=utf-8');

  // php操作数据库步骤
  // 1. 连接数据库
  // 2. 准备 sql语句
  // 3. 执行 sql
  // 4. 分析 结果
  // 5. 关闭连接

  // 1. 连接数据库
  // mysqli_connect 成功返回一个连接对象, 失败返回 false
  $link = @ mysqli_connect( '127.0.0.1', 'root', 'root', 'test01', 3306 );
  if( !$link ) {
    // die: 结束程序的运行, 并输出一句话
    // ps: die之后, 结束程序的运行, 代码不会再往下执行了
    die( "连接失败" );
  }

  // 2. 准备 sql 语句 -- 进行删除操作
  $id = 32;
  $sql = "delete from stu where id = $id";  // sql 语句外层一般是双引号, 双引号会解析变量

  // 3. 执行 sql
  // mysqli_query( 连接对象, sql语句 )
  // 对于执行非查询语句(增,删,改), 返回值: 执行成功返回布尔值true 或者 执行失败返回布尔值false
  // ps: 执行sql 失败, 不会阻塞程序的运行, 程序后面的代码会继续执行
  $res = mysqli_query( $link, $sql );

  // 4. 分析结果
  if ( $res ) {
    echo "删除成功";
  }
  else {
    // 输出错误信息
    // mysqli_error( 连接对象 )   返回错误信息字符串
    echo mysqli_error( $link );
    echo "删除失败";
  }

  // 5. 关闭连接
  mysqli_close( $link );


?>