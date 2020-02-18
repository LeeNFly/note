<?php

  session_start();

  session_destroy(); // 销毁当前sessionId对应的session文件, 会导致session文件丢失, 即数据丢失

  $_SESSION = []; // 清空session文件中的所有内容, 但是不会删除session文件


?>