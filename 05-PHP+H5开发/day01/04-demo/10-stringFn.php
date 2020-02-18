<?php
  header('content-type:text/html;charset=utf-8');

  // str_replace(查找的值，替换的值，执行替换操作的字符) 字符串替换   **
  // trim(字符串); 去除首尾空白字符
  // explode(分割符，执行分割的字符串); 使用一个字符串分割另一个字符串  **   类似于 split
  // implode(连接符，执行连接的数组); 将数组根据连接符拼接成字符串   **    类似于  join
  // substr( 字符串，起始索引，截取长度 ); 截取字符串
  // strchr(字符串，标识字符); 从左向右找标识字符，返回第一次出现该字符及其后的全部字符(包括该字符) 
  // strrchr(字符串，标识字符); 从右向左找标识字符，返回第一次出现该字符及其后的全部字符(包括该字符)  **  后面上传文件, 获取扩展名要用

  // 1. str_replace 字符串替换
  // $str = "炎炎夏日, 两支香蕉在散步, 一只曰: 好热啊! 遂脱衣, 另一只遂倒!";
  // // 需求: 屏蔽敏感词, 屏蔽香蕉, 替换成 **
  // echo str_replace( '香蕉', '**', $str );

  // 2. trim 去除首尾空格
  // $str = " itcast ";
  // $str = trim( $str );
  // echo '|';
  // echo $str;
  // echo '|';

  // 3. explode 使用一个字符串分割另一个字符串, 得到一个数组  类似于 js 中的 split
  // $str = "www.baidu.com";
  // $arr = explode( ".", $str );
  // print_r( $arr );


  // 4. implode 将数组拼接成字串, 得到一个字符串    类似于 js 中的 join
  // $arr = [ 3, 4, 5, 6 ];
  // $str = implode( "-", $arr );
  // echo $str;


  // 5. substr 字符串截取, 中文占3个字节长度
  // $str = "helloworld";
  // $str = "你好啊";
  // echo substr( $str, 3, 3 );


  // 6. strchr(字符串，标识字符); 从左向右找标识字符，返回该字符后全部字符(包括该字符)   不用记
  // $str = "www.baidu.com";
  // echo strchr($str, '.');   // .baidu.com


  // 7. strrchr(字符串，标识字符); 从右向左找标识字符，返回该字符后全部字符(包括该字符)   要记
  // $str = "www.baidu.com";
  // echo strrchr($str, '.');  // .com

  // 作用: 可以用于获取扩展名
  // $str = "aa.bbb.cc.ddd.png";
  // echo strrchr( $str, '.' );

?>