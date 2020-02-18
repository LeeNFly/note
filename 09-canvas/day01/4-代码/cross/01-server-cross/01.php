<?php 
	//后台 只要开放权限，用于其他用户来跨域访问；
	//header('Access-Control-Allow-Origin:*'); //允许所有人访问这个服务器
	header('Access-Control-Allow-Origin:http://localhost'); //指定的用户可以访问我们服务器
	echo 'server cross';
	
 ?>