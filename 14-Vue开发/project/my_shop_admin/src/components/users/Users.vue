<template>
  <div>
    <el-row>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="users-breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input placeholder="请输入用户名" v-model="usernameKeyWords" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="getUsersList()"></el-button>
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="success" plain @click="addUserDialogVisible = true">添加用户</el-button>
      </el-col>
    </el-row>
    <el-row>
       <el-table
        :data="usersList"
        stripe
        style="width: 100%">
        <el-table-column
          prop="username"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          width="180">
        </el-table-column>
        <el-table-column
          prop="mobile"
          label="电话"
          width="180">
        </el-table-column>
        <el-table-column
          label="用户状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.mg_state"
              @change="changeUserState(scope.row)"
              >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini" plain @click="showUserUpdateDialog(scope.row)"></el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini" plain @click="delUserById(scope.row.id)"></el-button>
            <el-button type="success" icon="el-icon-check" size="mini" plain>分配角色</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        v-show="showPagination"
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="pageSize"
        :current-page="curPage"
        @current-change="curPageChange">
      </el-pagination>
    </el-row>

    <el-dialog title="添加用户" :visible.sync="addUserDialogVisible" @close="closeAddUserDialog">
      <el-form :model="addUserForm" :rules="addUserRules" ref="addUserForm">
        <el-form-item label="用户名" label-width="120px" prop="username">
          <el-input v-model="addUserForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="120px" prop="password">
          <el-input v-model="addUserForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" label-width="120px" prop="email">
          <el-input v-model="addUserForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机" label-width="120px" prop="mobile">
          <el-input v-model="addUserForm.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addUserDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="编辑用户" :visible.sync="updateUserDialogVisible">
      <el-form :model="updateUserForm" ref="updateUserForm">
        <el-form-item label="用户名" label-width="120px" prop="username">
          <el-input disabled v-model="updateUserForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" label-width="120px" prop="email">
          <el-input v-model="updateUserForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机" label-width="120px" prop="mobile">
          <el-input v-model="updateUserForm.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="updateUserDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateUser">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usernameKeyWords: '',
      usersList: [],
      curPage: 1,
      pageSize: 3,
      total: 0,
      showPagination: false,
      addUserDialogVisible: false,
      addUserForm: {
        username: '',
        password: '',
        email: '',
        mobile: ''
      },
      addUserRules: {
        username: [
          { required: true, message: '用户名为必填', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码为必填', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ]
      },
      updateUserDialogVisible: false,
      updateUserForm: {
        id: '',
        username: '',
        email: '',
        mobile: ''
      }

    }
  },
  created () {
    this.getUsersList()
  },
  methods: {
    async getUsersList (curPage = 1) {
      const res = await this.$http.get('/users', {
        params: {
          query: this.usernameKeyWords,
          pagenum: curPage,
          pagesize: this.pageSize
        }
      })
      const { data, meta } = res.data
      if (meta.status === 200) {
        this.usersList = data.users
        this.total = data.total
        this.curPage = data.pagenum
        this.usersList.length > 0 ? this.showPagination = true : this.showPagination = false
      }
    },
    curPageChange (val) {
      this.getUsersList(val)
    },
    async changeUserState (userInfo) {
      console.log(userInfo)
      const res = await this.$http.put(`/users/${userInfo.id}/state/${userInfo.mg_state}`)
      const { data, meta } = res.data
      if (meta.status === 200) {
        const msg = data.mg_state === 1 ? '启用成功' : '禁用成功'
        this.$message({
          message: msg,
          type: 'success'
        })
      }
    },
    async addUser () {
      this.$refs.addUserForm.validate(async valid => {
        if (valid) {
          const res = await this.$http.post('/users', this.addUserForm)
          const { meta } = res.data
          if (meta.status === 201) {
            this.$message({
              message: '添加成功',
              type: 'success'
            })
            this.addUserDialogVisible = false
            const curPage = Math.ceil((this.total + 1) / this.pageSize)
            this.getUsersList(curPage)
          } else {
            this.$message({
              message: meta.msg,
              type: 'error'
            })
          }
        } else {
          return false
        }
      })
    },
    closeAddUserDialog () {
      this.$refs.addUserForm.resetFields()
    },
    async delUserById (userId) {
      // 改造
      try {
        await this.$confirm('确认删除该用户吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        const res = await this.$http.delete(`/users/${userId}`)
        const { meta } = res.data
        if (meta.status === 200) {
          const maxPage = Math.ceil((this.total - 1) / this.pageSize)
          if (this.curPage > maxPage) {
            this.curPage = maxPage
          }
          this.getUsersList(this.curPage)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }
      } catch (err) {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      }

      // =================================
      // this.$confirm('确认删除该用户吗?', '提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   type: 'warning'
      // }).then(async () => {
      //   const res = await this.$http.delete(`/users/${userId}`)
      //   const { meta } = res.data
      //   if (meta.status === 200) {
      //     const maxPage = Math.ceil((this.total - 1) / this.pageSize)
      //     if (this.curPage > maxPage) {
      //       this.curPage = maxPage
      //     }
      //     this.getUsersList(this.curPage)
      //     this.$message({
      //       type: 'success',
      //       message: '删除成功!'
      //     })
      //   }
      // }).catch(() => {
      //   this.$message({
      //     type: 'info',
      //     message: '已取消删除'
      //   })
      // })
    },
    showUserUpdateDialog (userInfo) {
      for (const key in this.updateUserForm) {
        this.updateUserForm[key] = userInfo[key]
      }
      this.updateUserDialogVisible = true
    },
    async updateUser () {
      const { email, mobile } = this.updateUserForm
      const res = await this.$http.put(`/users/${this.updateUserForm.id}`, {
        email,
        mobile
      })
      const { data, meta } = res.data
      if (meta.status === 200) {
        this.$message({
          message: '编辑成功',
          type: 'success'
        })
        const updateUser = this.usersList.find(item => item.id === data.id)
        updateUser.email = data.email
        updateUser.mobile = data.mobile
        this.updateUserDialogVisible = false
      }
    }
  }
}
</script>

<style scoped lang="less">
  .users-breadcrumb {
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    background-color: #D4DAE0;
  }
</style>
