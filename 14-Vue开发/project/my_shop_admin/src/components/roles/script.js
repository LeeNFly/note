export default {
  data () {
    return {
      rolesList: [],
      updateRoleDialogVisible: false,
      updateRoleForm: {
        id: '',
        roleName: '',
        roleDesc: ''
      },
      updateRightsDialogVisible: false,
      rightsList: [],
      defaultProps: {
        children: 'children',
        label: 'authName'
      },
      curRoleId: -1
    }
  },
  created () {
    this.getRolesList()
  },
  methods: {
    async getRolesList () {
      const res = await this.$http.get('/roles')
      const { data, meta } = res.data
      if (meta.status === 200) {
        this.rolesList = data
      }
    },
    async delRoleById (roleId) {
      try {
        await this.$confirm('确认删除该角色吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        const res = await this.$http.delete(`/roles/${roleId}`)
        console.log(res)
        const { meta } = res.data
        if (meta.status === 200) {
          const idx = this.rolesList.findIndex(item => item.id === roleId)
          this.rolesList.splice(idx, 1)
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
    },
    showUpdateRoleDialog (roleInfo) {
      for (const key in this.updateRoleForm) {
        this.updateRoleForm[key] = roleInfo[key]
      }
      this.updateRoleDialogVisible = true
    },
    async updateRole () {
      const { id, roleName, roleDesc } = this.updateRoleForm
      const res = await this.$http.put(`roles/${id}`, { roleName, roleDesc })
      const { data, meta } = res.data
      if (meta.status === 200) {
        const updateRole = this.rolesList.find(item => item.id === data.roleId)
        updateRole.roleName = data.roleName
        updateRole.roleDesc = data.roleDesc
      }
      this.updateRoleDialogVisible = false
    },
    async delRights (roleId, rightsId) {
      const res = await this.$http.delete(`roles/${roleId}/rights/${rightsId}`)
      const { data, meta } = res.data
      if (meta.status === 200) {
        const role = this.rolesList.find(item => item.id === roleId)
        role.children = data
      }
    },
    async showUpdateRightsDialog (roleInfo) {
      this.curRoleId = roleInfo.id
      const res = await this.$http.get(`/rights/tree`)
      const { data, meta } = res.data
      if (meta.status === 200) {
        this.rightsList = data
        this.$nextTick(() => {
          const roleRights = []
          roleInfo.children.forEach(item => {
            item.children.forEach(item => {
              item.children.forEach(item => roleRights.push(item.id))
            })
          })
          this.$refs.rightsTree.setCheckedKeys(roleRights)
        })
      }
      this.updateRightsDialogVisible = true
    },
    async updateRoleRights () {
      const checkRights = this.$refs.rightsTree.getCheckedKeys()
      const halfCheckRights = this.$refs.rightsTree.getHalfCheckedKeys()
      const rids = [ ...checkRights, ...halfCheckRights ].join(',')
      const res = await this.$http.post(`/roles/${this.curRoleId}/rights`, {rids})
      const { meta } = res.data
      if (meta.status === 200) {
        this.updateRightsDialogVisible = false
        this.getRolesList()
      }
    }
  }
}
