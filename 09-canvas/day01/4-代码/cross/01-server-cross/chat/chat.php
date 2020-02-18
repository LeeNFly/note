<?php


	$messages = array(
		'你说啥？',
		'你也好',
		'你找我有啥事？',
		'我在吃饭！'
	);

	// 通过array_rand()随机获取数组下标
	// var_dump(array_rand($messages));

	//echo array_rand($messages);
	//随机范湖数组中的一个元素
	echo $messages[  array_rand($messages)  ];
	//思考1秒
	sleep(1);
	
?>