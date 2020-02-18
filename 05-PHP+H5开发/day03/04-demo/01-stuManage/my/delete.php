<?php 
  // $arr = ["张三", "李四", "王五", "赵六", "天气", "王八"];
  // $index = 2;
  // array_splice( 数组, 从哪开始删, 删几个, 替换的项1 )
  // array_splice( 数组, 从哪开始删, 删几个, 替换的数组 )
  // 会改变原数组, 返回值是删除的项
  // array_splice( $arr, 1, 1, "小红" );
  // echo '<pre>';
  // print_r( $arr );
  // echo '</pre>';

  // 根据索引 删除一个项
  // $arr = ["张三", "李四", "王五", "赵六", "天气", "王八"];
  // $index = 2;
  // array_splice( $arr, $index, 1 );
  // echo '<pre>';
  // print_r( $arr );
  // echo '</pre>';


  header('content-type:text/html;charset=utf-8');


  // echo '<pre>';
  // print_r( $_GET );
  // echo '</pre>';

  // 1. 获取前端传递过来的索引, 将来用于删除
  // 2. 从本地读取数组, 读出来 jsonStr
  // 3. 转换成 数组
  // 4. 从数组中删除对应项, array_splice( 数组, 从哪开始删, 删几个, 替换的项 )
  // 5. 数组转换成 jsonStr
  // 6. 写入到本地文件中
  $index = $_GET['index'];  // 拿到索引

  $jsonStr = file_get_contents("data.txt"); // 得到 jsonStr

  $arr = json_decode( $jsonStr, true ); // 得到已有的数组

  // 删除对应项
  array_splice( $arr, $index, 1 );

  $str = json_encode( $arr ); // 转成 json 字符串

  file_put_contents( "data.txt", $str );

  // 跳转回列表页
  header("location: 01-list.php");


?>