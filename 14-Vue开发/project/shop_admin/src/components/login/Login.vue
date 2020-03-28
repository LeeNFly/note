<template>
  <div class="login-wrapper">
    <!-- 登录
    <el-button type="primary">成功按钮</el-button> -->
    <!--
    element-ui说明:
      element-ui 提供的每个标签, 都是一个组件,

      element-ui标签组件将来会被element-ui自动编译, 编译成普通标签, 然后将编译后的标签展示到页面上 (我们不需要关心编译的问题)

      ★ 修改element-ui标签组件的样式, 建议修改element-ui标签组件编译后, 页面生成的具体标签的样式

      element-ui组件标签, 也可以看作是一个标签, 也可以给组件标签添加类名, 属性等. 将来通过查看具体编译后的结果, 再对具体编译后的生成的标签进行添加样式操作

      element-ui组件标签添加类名class, 将来会在编译后生成的具体标签上添加对应类名, 然后就可以通过这个类名给编译生成的具体标签添加样式了

      element-ui标签可以和普通标签一起混合, 嵌套, 并列使用, element-ui标签需要编译后展示, 普通标签直接展示, 并且编译时会保持混合, 嵌套, 并列关系

      element-ui标签可以嵌套, 并列普通标签, 也可以嵌套 并列 element-ui标签, 普通标签也可以嵌套 并列 element-ui标签和普通标签, 并且将来编译的时候会保持标签的嵌套  并列 关系

      可以把element-ui标签就当作标签来使用, element-ui在组件的template中使用, 所以也可以使用/也拥有vue特性
    -->
    <!--
      el-form
        label-position="top" 设置label的位置
        :model 用来给表单设置数据模型（对象）, 即该表单对应哪个数据对象
        :rules 用来设置表单验证规则的
        ref 用来引用当前的表单组件, 之后通过vue实例.$refs.ref值 可以拿到该表单组件vue实例

      el-form-item
        label 当前表单项的名称
        prop 它的值是 el-form中 model属性对应数据对象中的一个属性
          当使用 ★ 表单验证 或者 ★ 表单重置 功能时，必须要提供该属性, 表示对应校验/重置的表单数据对象中的哪个属性

      el-input
        v-model 实现双向数据绑定
     -->

    <!-- row 表示一行 -->
    <el-row type="flex" class="loginForm" justify="center" align="middle">
      <!-- col 表示一列 span 表示占用几份（共24份） -->
      <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="4" class="login-content">
        <el-form label-position="top" :model="loginForm" :rules="rules" ref="loginForm">
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
// 导入 axios
import axios from 'axios'

export default {
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          // required 是否为必填项
          // message 当前规则校验失败时的提示
          // trigger 表单验证的触发时机，blur表示失去焦点时触发校验, change在表单值发生改变时触发校验
          // 如果需要在值改变或者失去焦点的时候，都触发验证，可以传递两个 trigger: 'change, blur'
          { required: true, message: '用户名为必填项', trigger: 'blur' },
          // min 最小长度
          // max 最大长度
          {
            min: 3,
            max: 6,
            message: '用户名长度在 3 到 6 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '密码为必填项', trigger: 'blur' },
          {
            min: 3,
            max: 6,
            message: '密码长度在 3 到 6 个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    // 登录功能的实现
    /* login() {
      // 使用 axios 发送请求
      // http://localhost:8888/api/private/v1/login
      axios
        .post('http://localhost:8888/api/private/v1/login', this.loginForm)
        .then(res => {
          // console.log(res)

          // const data = res.data.data
          // const meta = res.data.meta

          // ES6中的解构，意思就是从 res.data 中取出属性 data 和 meta
          const { data, meta } = res.data
          // console.log(data)
          if (meta.status === 200) {
            // console.log('登录成功')
            // 将登录成功的标识（token）存储到localStorage中
            localStorage.setItem('token', data.token)
            // 登录成功，需要跳转到 后台管理的首页
            this.$router.push('/home')
          } else {
            // console.log('登录失败', meta.msg)
            // this.$message.error(meta.msg)
            this.$message({
              type: 'error',
              message: meta.msg,
              duration: 1000
            })
          }
        })
    }, */

    async login() {
      // 使用 axios 发送请求
      // http://localhost:8888/api/private/v1/login
      const res = await axios.post(
        'http://localhost:8888/api/private/v1/login',
        this.loginForm
      )

      console.log(res)

      const { data, meta } = res.data
      // console.log(data)
      if (meta.status === 200) {
        // console.log('登录成功')
        // 将登录成功的标识（token）存储到localStorage中
        localStorage.setItem('token', data.token)
        // 登录成功，需要跳转到 后台管理的首页
        this.$router.push('/home')
      } else {
        // console.log('登录失败', meta.msg)
        // this.$message.error(meta.msg)
        this.$message({
          type: 'error',
          message: meta.msg,
          duration: 1000
        })
      }
    },

    submitForm() {
      // ref 用在组件中，就表示当前组件vue实例
      // this.$refs.loginForm 拿到el-form组件(loginForm)的vue实例, el-form的vue实例中提供了validate方法, 用于校验el-form内表单的
      this.$refs.loginForm.validate(valid => {
        // valid 表示是否校验成功，如果校验成功就为：true, 校验失败为false
        // 如果失败就为：false
        if (valid) {
          // 成功：调用登录接口
          // alert('submit!')

          // 获取到用户名和密码
          // console.log(this.loginForm)
          this.login()
        } else {
          // 校验失败
          return false
        }
      })
    },
    resetForm() {
      // this.$refs.loginForm 拿到el-form组件(loginForm)的vue实例, el-form的vue实例中提供了resetFields方法, 用于重置el-form内表单的
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>

<style>
.login-wrapper,
.loginForm {
  height: 100%;
}

.loginForm {
  background-color: #2d434c;
}

.login-content {
  min-width: 240px;
  padding: 20px 35px;
  border-radius: 10px;
  background-color: #fff;
}
</style>
