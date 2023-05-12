<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-05-11 16:30:19
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
    <z-form ref="editTempRoleForm" :model="editTempRoleModel" :label-width="120" label-position="left" class="ilead-modal-form per-center" :rules="ruleValidate">
        <form-item label="角色名称"  prop="roleName">
            <z-input v-model="editTempRoleModel.roleName" placeholder="请输入..." :maxlength="54"></z-input>
        </form-item>
        <form-item label="角色代码"  prop="roleCode">
            <z-input v-model="editTempRoleModel.roleCode" placeholder="请输入..." :maxlength="32"></z-input>
        </form-item>
        <form-item label="是否有管理职责" prop="isAdminrole">
            <z-select v-model="editTempRoleModel.isAdminrole">
                <z-option value="1">是</z-option>
                <z-option value="0">否</z-option>
            </z-select>
        </form-item>
        <form-item label="上级角色"  prop="supRoleId">
            <z-cascader :data="tempRoleTreeList" :load-data="getTempRoleTrees" change-on-select transfer   @on-change="handleChange" @on-visible-change="handleChangeVisible"
                v-model="editTempRoleModel.supRoleId"></z-cascader>
        </form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit('editTempRoleForm')">提交</z-button>
        <z-button type="warning" icon="refresh" @click="handleReset('editTempRoleForm')" style="margin-left: 8px">重置</z-button>
    </div>
</z-modal>
</template>
<script>
import roleTempApi from '../api/api.js'
export default {
  name: 'editRoles',
  data: function () {
    return {
      modelIsOpen: false,
      flag: 'init',
      editTempRoleModel: {
        roleId: '',
        roleName: '',
        roleCode: '',
        isAdminrole: '',
        supRoleId: []
      },
      tempRoleTreeList: this.getTempRoleTreeList(),
      ruleValidate: {
        roleName: [
          {required: true, message: '请填写角色名称', trigger: 'blur'}
        ],
        roleCode: [
          {required: true, message: '请填写角色代码', trigger: 'blur'}
        ],
        isAdminrole: [
          {required: true, message: '请选择是否有管理职责', trigger: 'change'}
        ]
      },
      parentId: [],
      parentRoleNm: '',
      addOriginalId: '',
      editOriginalId: '',
      modelType: ''
    }
  },
  props: {
    title: {
      type: String
    }
  },
  watch: {
    modelIsOpen: function (val) {
      if (val) {
        if (this.modelType === 'add') {
          // 新增时赋予默认值
          let supRoleIdArr = []
          supRoleIdArr[0] = ''
          this.editTempRoleModel.parentId = supRoleIdArr
          this.editTempRoleModel.supRoleId = supRoleIdArr
        }
      }
    }
  },
  methods: {
    getData: function (data, supRoleId) {
      // 编辑
      if (data) {
        this.editTempRoleModel.id = data.roleId
        this.editTempRoleModel.roleName = data.roleName
        this.editTempRoleModel.roleCode = data.roleCode
        this.editTempRoleModel.isAdminrole = data.isAdminRole
        this.editTempRoleModel.parentId = supRoleId
        this.editTempRoleModel.supRoleId = supRoleId
      }
    },
    // 上级角色选择页面点选时触发
    handleChange: function (value, selectedData) {
      // 判断是否为初次加载页面
      if (this.flag === 'run') { // 非初次加载
        this.editTempRoleModel.supRoleId = value
      }
    },
    // 上级角色选择页面打开时先触发
    handleChangeVisible: function () {
      this.flag = 'run'
    },
    getTempRoleTreeList: function () {
      let that = this
      let param = ''
      let originalId = ''
      if (this.modelType === 'edit') {
        param = 'editInit'
        originalId = this.editOriginalId
      } else {
        param = 'newInit'
        originalId = this.addOriginalId
      }
      roleTempApi.getTempRoleTree(param, originalId).then(function (response) {
        that.tempRoleTreeList = response.data
      }).catch(function (error) {
        console.log(error)
      })
      return []
    },
    getTempRoleTrees: function (item, callback) {
      item.loading = true
      let that = this
      let originalId = ''
      if (this.modelType === 'edit') {
        originalId = this.editOriginalId
      } else {
        originalId = this.addOriginalId
      }
      roleTempApi.getTempRoleTree(item.value, originalId).then(function (response) {
        item.children = response.data
        let supRoleId = that.editTempRoleModel.parentId
        let array = []
        if (supRoleId != null && supRoleId.length > 0) {
          for (let i = 0; i < supRoleId.length; i++) {
            array[i] = supRoleId[i]
          }
        }
        that.$nextTick(function () {
          that.editTempRoleModel.supRoleId = array
        })
        item.loading = false
        callback()
      }).catch(function (error) {
        console.log(error)
      })
    },
    handleSubmit: function (name) {
      let that = this
      // 数据传递
      this.$refs[name].validate(function (valid) {
        if (valid) {
          let supRoleIds = that.editTempRoleModel.supRoleId
          // 新增
          if (that.modelType === 'add') {
            let param = {
              roleId: that.editTempRoleModel.roleId,
              roleName: that.editTempRoleModel.roleName,
              roleCode: that.editTempRoleModel.roleCode,
              isAdminrole: that.editTempRoleModel.isAdminrole,
              supRoleId: supRoleIds[supRoleIds.length - 1],
              originalId: that.addOriginalId
            }
            roleTempApi.rolesTempInfoAdd(param).then(function (response) {
              if (response.data.code === '00') {
                that.$Message.error('存在相同的角色代码，请重新输入角色代码!')
              } else {
                that.$Message.success('保存成功!')
                that.modelIsOpen = false
                that.$parent.$parent.query()
              }
            }).catch(function (error) {
              console.log(error)
            })
          } else {
            // 校验
            if (that.editTempRoleModel.supRoleId === that.editTempRoleModel.id) {
              that.$Message.error('上级角色不能为自己，请选择其他角色作为上级角色！')// 不允许选取自己的角色为上级角色
              that.editTempRoleModel.supRoleId = that.editTempRoleModel.parentId
              return false
            }
            // 编辑
            let param = {
              roleId: that.editTempRoleModel.id,
              roleName: that.editTempRoleModel.roleName,
              roleCode: that.editTempRoleModel.roleCode,
              isAdminrole: that.editTempRoleModel.isAdminrole,
              supRoleId: supRoleIds[supRoleIds.length - 1],
              originalId: that.editOriginalId
            }
            roleTempApi.rolesTempInfoUpdate(param).then(function (response) {
              if (response.data.code === '0') {
                that.$Message.error('存在相同的角色代码，请重新输入角色代码!')
              } else {
                that.$Message.success('保存成功!')
                that.$parent.$parent.query()
                that.modelIsOpen = false
              }
            }).catch(function (error) {
              console.log(error)
            })
          }
        } else {
          that.$Message.error('保存失败，请检查信息是否完整!')
        }
      })
    },
    handleReset: function (name) {
      this.$refs['editTempRoleForm'].resetFields()
      if (this.editTempRoleModel !== 'add' || this.editTempRoleModel.parentId) {
        this.editTempRoleModel.supRoleId = this.editTempRoleModel.parentId
      }
    }
  }
}
</script>
