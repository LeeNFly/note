<?php

header("content-type:text/html;charset=utf-8");

$results = array(
  "吃药了没?",
  "不约。。",
  "爱过",
  "你今天长的真帅!",
  "这你也信",
  "曾经有一份真挚的爱情摆在我面前，我却没有珍惜",
  "情不知所以，一往而深",
  "陪伴是最长情的告白",
  "死鬼, 一般去~",
  "流氓!"
);

// array_rand: 随机获取数组的一个下标
$random = array_rand( $results, 1 );
// sleep 模拟网络延迟
sleep(1);
echo $results[$random];

?>