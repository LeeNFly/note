<?php
  header('content-type:text/html;charset=utf-8');

  // 1. 连接
  // 2. 准备 sql
  // 3. 执行 sql
  // 4. 分析结果
  // 5. 关闭连接

  // 还需要用户的 id
  $id = 37;
  // 李芳芳,  88,  女
  $name = '李芳芳';
  $age = 88;
  $sex = '女';

  // 1. 连接
  $link = mysqli_connect( "127.0.0.1", 'root', 'root', 'test01', 3306 );
  if ( !$link ) {
    // die 了以后, 下面的代码就终止了, 不在执行了, 并输出一句话
    die( "连接失败" ); 
  }

  // 2. 准备 sql
  $sql = "update stu set name='$name', age=$age, sex='$sex' where id=$id";
  echo $sql;

  // 3. 执行 sql
  $res = mysqli_query( $link, $sql );

  // 4. 分析结果
  if ( $res ) {
    echo "修改成功";
  }
  else {
    echo "修改失败";
    echo mysqli_error( $link );
  }

  // 5. 关闭连接
  mysqli_close( $link );

?>