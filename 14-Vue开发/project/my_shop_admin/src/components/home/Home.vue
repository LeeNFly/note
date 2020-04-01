<template>
  <el-container class="home-wrapper">
    <el-header>
      <el-row class="home-header">
        <el-col :span="8" class="logo">
          <img src="@/assets/logo.png" alt="黑马25期">
        </el-col>
        <el-col :span="8" class="title">
          <h1>电商后台管理系统</h1>
        </el-col>
        <el-col :span="8" class="welcome">
          <div>
            <span>欢迎上海前端25期星曜会员</span>
            <a href="#" @click.prevent="logout">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="/home/users"
          class="home-menu"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/home/users">
              <template>
                <i class="el-icon-menu"></i>
                <span>用户列表</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="/home/roles">
              <template>
                <i class="el-icon-menu"></i>
                <span>角色列表</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/home/rights">
              <template>
                <i class="el-icon-menu"></i>
                <span>权限列表</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  // data () {
  //   return {

  //   }
  // },
  methods: {
    logout () {
      this.$confirm('您是否确认退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        localStorage.removeItem('shop_admin_token')
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style scoped lang="less">
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .home-wrapper {
    height: 100%;
    .home-header {
      height: 100%;
      line-height: 60px;
      .logo {
        text-align: left;
      }
      .title {
        h1 {
          height: 100%;
          margin: 0;
          font-size: 30px;
          color: #fff;
        }
      }
      .welcome {
        text-align: right;
        font-weight: bold;
        a {
          color: #b07a17;
          text-decoration: none;
        }
      }
    }
    .home-menu {
      height: 100%;
    }
  }
</style>
