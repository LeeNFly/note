<?php 
	
	//定义常量
	define('HOST', '127.0.0.1');
	define('UNAME', 'root');
	define('PWD', 'root');
	define('DB', 'z_baixiu');

	//1-封装执行非查询 语句方法
	//参数：sql语句
	//返回值： 成功 true  失败 false 
	function my_exec($sql) {
		//1-连接数据库
		$link = @mysqli_connect(HOST, UNAME, PWD, DB);
		//连接失败，程序到此结束
		if (!$link) {
			echo '数据库连接失败！';
			return false;
		}
		//2-执行sql语句
		if (!mysqli_query($link, $sql)){
			echo '操作失败';
			mysqli_close($link); //关闭数据库
			return false;
		}
		mysqli_close($link); //关闭数据库
		return  true; //执行成功
	}

	// $sql = "delete from posts where id = 63";
	// my_exec($sql);
	
	//2-封装执行查询 语句方法
	//参数：sql语句
	//返回值： 成功 查询的数据   失败 false 
	function my_query($sql) {
		//1-连接数据库
		$link = @mysqli_connect(HOST, UNAME, PWD, DB);
		//连接失败，程序到此结束
		if (!$link) {
			echo '数据库连接失败！';
			return false;
		}

		//2- 执行sql语句
		$res = mysqli_query($link, $sql);
		//判断是否获取到数据
		if (!$res || mysqli_num_rows($res) == 0) {
			echo '未获取到数据!';
			mysqli_close($link); //关闭数据库
			return false;
		}

		//有数据，保持获取的数据并返回
		while ( $row = mysqli_fetch_assoc($res) ){ 
			$data[] = $row;
		}
		mysqli_close($link); //关闭数据库
		return $data;
	}

	// $sql = "select * from posts";
	// $data = my_query($sql);
	// echo '<pre>';
	// print_r($data);
	// echo '</pre>';
	// 
	// 
	//判断用户之前是否登录过
	function isLogin () {
	  //1 - 先判断用户cookie中是否携带了PHPSESSID 数据 
	   if (isset($_COOKIE['PHPSESSID'])) {
	      //有秘钥
	      //2 - 根据用户传递PHPSESSID 去找 用户ID
	      session_start(); //开启session
	      if (!isset($_SESSION['user_id'])) {
	        //去登录
	        header('location: login.php');
	      }
	   } else {
	      //去登录
	      header('location: login.php');
	   }
	}

 ?>