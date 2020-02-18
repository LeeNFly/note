<?php


  // $info = [
  //   "name" => "路人甲",
  //   "sex" => "未知",
  //   "age" => 18,
  //   "desc" => "丑"
  // ];
  
  // php 中的二维数组, js 不认识, 需要转换成 json 格式, 进行传输
  $infos = [
    [
      "name" => "路人甲1",
      "sex" => "未知",
      "age" => 18,
      "desc" => "丑1"
    ],
    [
      "name" => "路人甲2",
      "sex" => "未知",
      "age" => 18,
      "desc" => "丑2"
    ],
    [
      "name" => "路人甲3",
      "sex" => "未知",
      "age" => 18,
      "desc" => "丑3"
    ],
    [
      "name" => "路人甲4",
      "sex" => "未知",
      "age" => 18,
      "desc" => "丑4"
    ]
  ];

  $jsonStr = json_encode( $infos ); // 转成 jsonStr

  echo $jsonStr;

?>