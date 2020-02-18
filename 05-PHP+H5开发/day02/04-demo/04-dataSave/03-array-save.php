<?php

  // 关联数组
  $info = [
    "name" => "翠花",
    "age" => 180,
    "desc" => 'mei'
  ];

  // 需求: 将关联数组的信息, 存储到文件中, 进行持久化保存
  // file_put_contents( 文件路径, 写入的内容 )

  // 注意: file_put_contents 只能存储字符串, 如果强行存储数组, 会造成数据丢失, key值丢失, 只会存储value值
  // 解决方案: 存储一个 有格式的字符串 即可 (json字符串), json字符串可以很方便转换成 数组

  // json_encode 将php数组转换成 json字符串
  // 参数1数组,
  // 参数2, JSON_UNESCAPED_UNICODE, 选填, 将数组转为json字符串的过程中, 默认将中文转成unicode编码, 加上此参数, 则直接输出中文, 不对中文进行转unicode码处理
  // json 字符串, 是一个字符串
  // {"name":"cuihua","age":180,"desc":"mei"} // 对象格式
  // [{"name":"cuihua","age":180,"desc":"mei"}, {"name":"cuihua","age":180,"desc":"mei"}] // 数组格式 多条数据
  // 特点:
  // 1. 键值对组成, 每个键值对 逗号隔开
  // 2. 所有的键都要用双引号包裹, 不能用单引号, 值如果是字符串, 也需要用双引号, 否则不需要 
  //    ps: json字符串是字符串, 所以最外层也需要引号包裹, 可以用单引号
  // 3. 除了可以是 js 对象的格式, 也可以 js 数组的格式 (多条数据)

  $str = json_encode( $info );  // 得到一个有格式的字符串

  echo $str;
  
  file_put_contents( "03-array-save.txt", $str );



  // 1. file_put_contents
  // 2. file_get_contents
  // 遇到复杂数据类型, 需要转换成 json格式 (有格式的字符串)
  // 3. json_encode( $arr )  将数组转换成 json字符串
  // 4. json_decode( $jsonStr, true )  将json字符串 转成回数组



?>