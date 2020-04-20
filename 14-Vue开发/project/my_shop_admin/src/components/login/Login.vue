<!--
 * @Author: Ling Hui Shi
 * @Date: 2020-03-31 10:16:09
 * @LastEditors: Ling Hui Shi
 * @LastEditTime: 2020-04-21 01:28:15
 * @Description:
 -->
<template>
  <div class="login-wrapper">
    <el-row class="loginForm-wrapper" type="flex" align="middle" justify="center">
      <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="4">
        <el-form class="loginForm" label-position="top" :model="loginForm" :rules="rules" ref="loginForm" label-width="80px">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">登录</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名为必填项', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码为必填项', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          const { username, password } = this.loginForm
          const res = await this.$http.post('/login', {
            username,
            password
          })
          const { data, meta } = res.data
          if (meta.status === 400) {
            this.$message.error(meta.msg)
          } else {
            localStorage.setItem('shop_admin_token', data.token)
            this.$router.push('/home')
          }
        } else {
          return false
        }
      })
    },
    resetForm () {
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>

<style scoped lang="less">
  .login-wrapper {
    height: 100%;
    background-color: #2D434C;
    .loginForm-wrapper {
      height: 100%;
      .loginForm {
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        min-width: 240px;
      }
    }
  }
</style>
