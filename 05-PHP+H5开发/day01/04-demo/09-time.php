<?php

  header('content-type:text/html;charset=utf-8');

  // 1. time();  返回 1970 年到 当前的时间戳, 单位秒数
  // 2. date(时间格式, 时间戳);

  $now = time();

  // 2018年07月05日17时07分00秒
  // Y 年
  // m 月
  // d 日
  // H 时
  // i 分
  // s 秒
  // 默认按照 零时区, 我们是东八区, 会相差八个小时
  // echo date( 'Y年m月d日 H时i分s秒', $now );
  echo date( 'Y年m月d日', $now );

?>