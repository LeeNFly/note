<?php
  header('content-type:text/html;charset=utf-8');

  /* 
	js中函数
    function sayHi( name ) {
      name = name || '默认值';
      console.log( name + "说: 你好" );
    }
    sayHi( "鹏鹏" );
  */

  // 函数:
  // 1. 可以设置默认值  
  // 2. 函数名不区分大小写

  // 函数的声明
  // function sayhi( $name="大熊", $age=18 ) {
  //   echo $name . "说: 你好哇!!!" . $age;
  // }
  // // 调用
  // sayhi( "鹏鹏" );



  // php中的对象 (了解)

  // 定义一个类（类似js的构造函数）
  class Person {
    public $name = "小明";  // 公有的
    public $age = 12;     
    private $sex = "男";   // 私有的
  }
  $p = new Person;

  // 如果拿到一个对象, 通过 -> 访问对象的值  (需要知道的)
  echo $p -> name;
  echo $p -> age;
  echo $p -> sex;
  // print_r( $p );

?>