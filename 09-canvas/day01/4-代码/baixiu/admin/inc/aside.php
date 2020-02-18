  <?php 
    // 显示当前登录用户图像 和昵称
    //在用户登录成功时，将当前用户id放在session中 ，
    $id = $_SESSION['user_id'];
    //准备sql
    $sql = "select * from users where id = $id";
    $data = my_query($sql)[0];

    echo '<pre>';
    print_r($data);
    echo '</pre>';
   ?>

  <div class="aside">
    <div class="profile">
      <img class="avatar" src="../<?php echo $data['avatar'] ?>">
      <h3 class="name"> <?php echo $data['nickname'] ?></h3>
    </div>
    <!-- 导航 -->
    <ul class="nav">
      <li>
        <a href="index1.php"><i class="fa fa-dashboard"></i>仪表盘</a>
      </li>
      <li class="active">
        <a href="#menu-posts" data-toggle="collapse">
          <i class="fa fa-thumb-tack"></i>文章<i class="fa fa-angle-right"></i>
        </a>
        <ul id="menu-posts" class="collapse in">
          <li><a href="posts.php">所有文章</a></li>
          <li><a href="post-add.php">写文章</a></li>
          <li class="active"><a href="categories.php">分类目录</a></li>
        </ul>
      </li>
      <li>
        <a href="comments.php"><i class="fa fa-comments"></i>评论</a>
      </li>
      <li>
        <a href="users.php"><i class="fa fa-users"></i>用户</a>
      </li>
      <li>
        <a href="#menu-settings" class="collapsed" data-toggle="collapse">
          <i class="fa fa-cogs"></i>设置<i class="fa fa-angle-right"></i>
        </a>
        <ul id="menu-settings" class="collapse">
          <li><a href="nav-menus.php">导航菜单</a></li>
          <li><a href="slides.php">图片轮播</a></li>
          <li><a href="settings.php">网站设置</a></li>
        </ul>
      </li>
    </ul>
  </div>