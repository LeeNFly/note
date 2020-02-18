<?php
  // php 中需要指定字符集
  header('content-type:text/html; charset=utf-8');

  // php 中变量
  // 1. php 中不用声明变量, 变量在第一次进行赋值时创建
  // 2. 变量 以 $ 开头
  // 3. 命名规则, 不能以数字开头, 由字母数字下划线组成
  // 4. 变量要赋值以后才能使用
  
  // php中变量命名规则 以$开头, 由字母数字下划线组成

  // $name = 'pp';
  // echo $name;
  // $1name = '123';
  // echo $1name;
  // $name;
  // echo $name;

  // 变量如果没赋值, 直接使用会报错
  // 变量相关的方法:
  // 1. isset( $var );  作用判断变量是否进行了赋值
  //    如果变量未赋值, 或者 值为 null, 返回 false
  //    否则 返回 true

  // 2. empty( $var );  作用变量是否为空
  //    如果变量未赋值, 或者 值为 0, '', "0", null, false, []   认为为空,  返回 true
  //    否则 返回 false

  // 3. unset( $var ); 删除变量

  // $name = 0;
  // if ( isset( $name ) ) {
  //   echo "赋值了";
  //   echo $name;
  // }
  // else {
  //   echo "未赋值";
  // }

  // $str = 0;
  // if ( empty( $str ) ) {
  //   echo "为空";
  // }
  // else {
  //   echo "非空";
  // }

  // $name = 123;
  // unset( $name );  // 可以释放一些不需要使用的变量, 帮助优化系统
  // echo $name;


  // var obj = {
  //   name: 'pp',
  //   age: 18
  // };
  // obj = null;


?>