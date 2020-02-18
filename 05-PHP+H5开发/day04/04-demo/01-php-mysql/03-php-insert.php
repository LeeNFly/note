<?php 
  header('content-type:text/html;charset=utf-8');

  // 步骤
  // 1. 连接
  // 2. 准备 sql
  // 3. 执行 sql
  // 4. 分析结果
  // 5. 关闭连接

  // 需求: 姓名: 小明明,  年纪: 20, 性别: 男
  $name = "小花花";
  $age = 100;
  $sex = "女";

  // 1. 建立连接
  // mysqli_connect 
  // 成功返回连接对象, 失败返回 false
  $link = mysqli_connect( '127.0.0.1', 'root', 'root', 'test01', 3306 );  // 建立连接

  if ( !$link ) {
    die( "连接失败" );
  }
  echo "连接成功";

  // 2. 准备 sql --> 插入操作
  //    写 sql 语句, 由于 sql 语句里面可能会有字符串, 字符串用 '' 包裹
  //    双引号会对变量进行解析, 外层双引号,  所以编写 sql => 外双内单 => '小花花' '女'
  $sql = "insert into stu (name, age, sex) values ('$name', $age, '$sex')"; 

  // 3. 执行 sql
  //    mysqli_query( 连接对象, 执行的sql语句 );
  //    增, 删, 改  都只有成功或者失败
  //    返回值 true 或者 false
  $res = mysqli_query( $link, $sql );

  // 4. 分析结果
  if ( $res ) {
    echo "插入成功";
  }
  else {
    echo "插入失败";
    echo mysqli_error( $link );
  }


  // 5. 关闭连接
  mysqli_close( $link );



?>