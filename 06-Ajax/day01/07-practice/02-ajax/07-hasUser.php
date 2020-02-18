<?php

  $username = $_GET['username']; // 获取到前端传递过来的用户名

  // 模拟数据库, 假设数据库中只有这些人的名字
  $dbArr = [ 'pp', 'dapp', 'pengpeng', "peng" ];

  // in_array( $content, $arr )
  // 作用: 判断 $content 在 $arr 中是否存在
  //      如果存在, 返回 true, 如果不存在, 返回false
  // $result = in_array( 'asdfsdafa', $dbArr );
  // var_dump( $result );


  // 需求: 如果 $username 在 $dbArr 中存在, 用户已存在,  返回 yes
  //      如果 $username 不在 $dbArr 中, 用户名不存在, 返回 no

  if ( in_array( $username, $dbArr ) ) {
    // 用户名已存在
    echo "yes";
  }
  else {
    // 用户名不存在
    echo "no";
  }




?>