<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-10 14:16:26
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
    <z-alert type="error" v-if="errorMsg">{{errorMsg}}</z-alert>
    <z-form ref="editRoleForm" :model="editRoleModel" :label-width="120" label-position="left" class="ilead-modal-form per-center" :rules="ruleValidate" @on-validate="onValidate">
        <form-item :label="$t('roleManage.title.roleName')"  prop="roleName">
            <z-input v-model="editRoleModel.roleName" :placeholder="$t('common.placeholder.input')" :maxlength="54" clearable></z-input>
        </form-item>
        <form-item :label="$t('roleManage.title.roleCode')"  prop="roleCode">
            <z-input v-model="editRoleModel.roleCode" :placeholder="$t('common.placeholder.input')" :maxlength="32" clearable></z-input>
        </form-item>
        <form-item :label="$t('roleManage.title.isAdminRole')" prop="isAdminrole">
            <z-select v-model="editRoleModel.isAdminrole">
                <z-option value="1">{{$t('common.option.yes')}}</z-option>
                <z-option value="0">{{$t('common.option.no')}}</z-option>
            </z-select>
        </form-item>
        <form-item :label="$t('roleManage.title.parentId')" prop="supRoleId">
            <z-cascader :data="roleTreeList" :load-data="getRoleTrees" change-on-select transfer @on-change="handleChange" @on-visible-change="handleChangeVisible"
                v-model="editRoleModel.supRoleId"></z-cascader>
        </form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit('editRoleForm')">{{$t('common.button.submit')}}</z-button>
        <z-button type="warning" icon="refresh" @click="handleReset('editRoleForm')" style="margin-left: 8px">{{$t('common.button.reset')}}</z-button>
    </div>
</z-modal>
</template>
<script>
import rolesApi from '../api/api.js'
export default {
  name: 'editRoles',
  data: function () {
    return {
      modelIsOpen: false,
      flag: 'init',
      editRoleModel: {
        roleId: '',
        roleName: '',
        roleCode: '',
        isAdminrole: '',
        supRoleId: []
      },
      roleTreeList: this.getRoleTreeList(),
      ruleValidate: {
        roleName: [
          {required: true, message: this.$t('roleManage.tips.inputRoleName')}
        ],
        roleCode: [
          {required: true, message: this.$t('roleManage.tips.inputRoleCode')}
        ],
        isAdminrole: [
          {required: true, message: this.$t('roleManage.tips.inputIsAdminrole')}
        ],
        supRoleId: [
          {required: true, validator: this.validateSupRoleId, type: 'array', min: 1}
        ]
      },
      ifShow: false,
      errorMsg: ''
    }
  },
  props: {
    title: {
      type: String
    },
    modelType: {
      type: String
    }
  },
  watch: {
    modelIsOpen: function (val) {
      if (val) {
        if (this.modelType === 'add') {
          // 新增时赋予默认值
          let supRoleIdArr = []
          supRoleIdArr[0] = this.$store.state.currentAdminRoleId + ''
          this.editRoleModel.parentId = supRoleIdArr
          this.editRoleModel.supRoleId = supRoleIdArr
        }
        this.errorMsg = ''
        this.getRoleTreeList()
      }
    }
  },
  methods: {
    getData: function (data, supRoleId) {
      this.editRoleModel.id = data.roleId
      this.editRoleModel.roleName = data.roleName
      this.editRoleModel.roleCode = data.roleCode
      this.editRoleModel.isAdminrole = data.isAdminRole
      this.editRoleModel.parentId = supRoleId
      this.editRoleModel.supRoleId = supRoleId
    },
    // 取消错误提示
    onValidate: function () {
      this.errorMsg = ''
    },
    // 上级角色选择页面打开时先触发
    handleChangeVisible: function () {
      this.flag = 'run'
    },
    // 上级角色选择页面点选时触发
    handleChange: function (value, selectedData) {
      // 判断是否为初次加载页面
      if (this.flag === 'run') { // 非初次加载
        this.editRoleModel.supRoleId = value
      }
      this.$refs.editRoleForm.validateField('supRoleId')
    },
    // 自定义校验
    validateSupRoleId: function (rule, value, callback) {
      if (!(value && value.length > 0)) {
        callback(new Error(this.$t('roleManage.tips.inputSupRoleId')))
      } else if (this.modelType && value.indexOf(this.editRoleModel.id) >= 0) {
        callback(new Error(this.$t('roleManage.tips.supRoleInvalid')))
      } else {
        callback()
      }
    },
    getRoleTreeList: function () {
      if (this.modelIsOpen) {
        let that = this
        let param = ''
        if (this.modelType === 'edit') {
          param = 'editInit'
        } else {
          param = 'newInit'
        }
        rolesApi.getRoleTree(param).then(function (response) {
          that.roleTreeList = response.data
        }).catch(function (error) {
          console.log(error)
        })
      }
      return []
    },
    getRoleTrees: function (item, callback) {
      item.loading = true
      let that = this
      rolesApi.getRoleTree(item.value).then(function (response) {
        setTimeout(() => {
          item.children = response.data
          let supRoleId = that.editRoleModel.parentId
          let array = []
          if (supRoleId != null && supRoleId.length > 0) {
            for (let i = 0; i < supRoleId.length; i++) {
              array[i] = supRoleId[i]
            }
          }

          that.editRoleModel.supRoleId = array
          item.loading = false
          callback()
        })
      }).catch(function (error) {
        console.log(error)
      })
    },
    handleSubmit: function (name) {
      let that = this
      // 数据传递
      this.$refs[name].validate(function (valid) {
        if (valid) {
          let supRoleIds = that.editRoleModel.supRoleId
          // 新增
          if (that.modelType === 'add') {
            let param = {
              roleId: that.editRoleModel.roleId,
              roleName: that.editRoleModel.roleName,
              roleCode: that.editRoleModel.roleCode,
              isAdminrole: that.editRoleModel.isAdminrole,
              parentId: that.editRoleModel.parentId,
              supRoleId: supRoleIds[supRoleIds.length - 1]
            }
            rolesApi.rolesInfoAdd(param).then(function (response) {
              if (response.data.code === '0') {
                that.errorMsg = that.$t('roleManage.tips.duplicateRoleCode')
                // that.$Message.error('存在相同的角色代码，请重新输入角色代码!')
              } else {
                that.$Message.success(that.$t('roleManage.message.saveSuccess'))
                that.$parent.query()
                that.getRoleTreeList()
                that.modelIsOpen = false
              }
            }).catch(function (error) {
              console.log(error)
            })
          } else {
            // 校验
            if (that.editRoleModel.supRoleId === that.editRoleModel.id) {
              that.$Message.error(that.$t('roleManage.tips.supRoleCanNotBeSelf'))// 不允许选取自己的角色为上级角色
              that.editRoleModel.supRoleId = that.editRoleModel.parentId
              return false
            }
            // 编辑
            let param = {
              roleId: that.editRoleModel.id,
              roleName: that.editRoleModel.roleName,
              roleCode: that.editRoleModel.roleCode,
              isAdminrole: that.editRoleModel.isAdminrole,
              supRoleId: supRoleIds[supRoleIds.length - 1]
            }
            rolesApi.rolesInfoUpdate(param).then(function (response) {
              if (response.data.code === '0') {
                that.$Message.error(that.$t('roleManage.tips.duplicateRoleCode'))
              } else {
                that.$Message.success(that.$t('roleManage.message.saveSuccess'))
                that.$parent.query()
                that.getRoleTreeList()
                that.modelIsOpen = false
              }
            }).catch(function (error) {
              console.log(error)
            })
          }
        } else {
          that.$Message.error(that.$t('roleManage.tips.saveFail'))
        }
      })
    },
    handleReset: function (name) {
      this.$refs['editRoleForm'].resetFields()
      if (this.modelType !== 'add' || this.editRoleModel.parentId) {
        this.editRoleModel.supRoleId = this.editRoleModel.parentId
      }
    }
  }
}
</script>
