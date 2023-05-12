<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-09 17:21:09
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
     <z-alert type="error" v-if="errorMsg">{{errorMsg}}</z-alert>
     <z-form ref="editUserModel" :model="editUserModel" :label-width="100" label-position="left" class="ilead-modal-form per-center" :rules="ruleValidate" @on-validate="onValidate">
        <z-form-item :label="$t('userManage.title.userName')"  prop="userName">
            <z-input v-model="editUserModel.userName" :maxlength="54" :placeholder="$t('common.placeholder.input')" clearable></z-input>
        </z-form-item>
        <z-form-item :label="$t('userManage.title.userCode')"  prop="userCode">
            <z-input v-model="editUserModel.userCode" :maxlength="32" :placeholder="$t('common.placeholder.input')" :disabled="isNotAble" clearable></z-input>
        </z-form-item>
        <z-form-item :label="$t('userManage.title.orgName')" prop="orgName">
            <z-input v-model="editUserModel.orgName" v-show="showOrgName" style="width: 80%" readonly></z-input>
            <z-input v-model="editUserModel.posName" v-show="showPosName" style="width: 80%" readonly></z-input>
            <z-input v-model="editUserModel.editOrgId"  v-show="false"></z-input>
            <z-input v-model="editUserModel.orgId"  v-show="false"></z-input>
            <z-input v-model="editUserModel.type"  v-show="false"></z-input>
            <z-button type="warning" v-show="modelType == 'edit'" @click="editOrg">{{$t('common.button.edit')}}</z-button>
            <z-button type="primary" ghost icon="ios-search" v-show="modelType == 'add'" @click="openOrgModal"></z-button>
        </z-form-item>
        <z-form-item :label="$t('userManage.title.expireTime')" prop="expireTime">
            <z-date-picker type="date" :placeholder="$t('common.placeholder.dateChoose')" format="yyyy-MM-dd" v-model.trim="editUserModel.expireTime" :options="dateOption" @on-change="editUserModel.expireTime=$event" transfer clearable></z-date-picker>
        </z-form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit('formItem')">{{$t('common.button.submit')}}</z-button>
        <z-button type="primary" ghost icon="refresh" @click="handleReset()" style="margin-left: 8px">{{$t('common.button.reset')}}</z-button>
    </div>
     <!-- 弹出 -->
  <add-search-group ref="addSearchOrg" @orgName="addOrgName"></add-search-group>
</z-modal>
</template>
<script>
import addSearchOrg from '../addSearchOrg/addSearchOrg'
import userApi from '../api/api.js'
export default {
  name: 'editUser',
  components: {
    'add-search-group': addSearchOrg
  },
  data: function () {
    return {
      modelIsOpen: false,
      isIdShow: true,
      isNameShow: false,
      isNotAble: false,
      showOrgName: true,
      showPosName: false,
      editUserModel: {
        userName: '',
        userCode: '',
        orgId: '',
        positionId: '',
        expireTime: '',
        userId: '',
        orgName: '',
        posName: '',
        type: ''
      },
      actionType: '',
      ruleValidate: {
        userName: [
          {required: true, message: '请填写用户名称', trigger: 'blur'}
        ],
        userCode: [
          {required: true, message: '请填写用户代码', trigger: 'blur'}
        ],
        orgName: [
          {required: true, validator: this.validateOrgName, trigger: 'blur'}
        ]
      },
      dateOption: {
        disabledDate: function (date) {
          return date && date.valueOf() < Date.now() - 86400000
        }
      },
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
  created: function () {
  },
  methods: {
    // 获取父数据
    getData: function (data) {
      this.editUserModel.userName = data.userName
      this.editUserModel.userCode = data.userCode
      this.editUserModel.orgName = data.orgName
      this.editUserModel.posName = data.posName
      this.editUserModel.editOrgId = data.orgId
      this.editUserModel.orgId = data.orgId
      this.editUserModel.positionId = data.positionId
      if (this.editUserModel.posName != null) {
        this.showOrgName = false
        this.showPosName = true
      }
      this.isIdShow = false
      this.isNameShow = true
      this.isNotAble = true
      if (data.expireTime != null) {
        data.expireTime = data.expireTime.toString().trim()
      }
      this.editUserModel.expireTime = data.expireTime
      this.editUserModel.userId = data.userId
      this.editUserModel.id = data.id
    },
    // 取消错误提示
    onValidate: function () {
      this.errorMsg = ''
    },
    // 打开组织树
    editOrg: function () {
      this.isIdShow = true
      this.isNameShow = false
      this.$refs.addSearchOrg.modelIsOpen = true
    },
    // 打开组织树
    openOrgModal: function () {
      this.$refs.addSearchOrg.modelIsOpen = true
    },
    addOrgName: function (orgName, orgId, type, pId) {
      if (orgId) {
        if (type === 'position') {
          this.showOrgName = false
          this.showPosName = true
          this.editUserModel.orgId = pId
          this.editUserModel.positionId = orgId
          this.editUserModel.posName = orgName
        } else {
          this.showOrgName = true
          this.showPosName = false
          this.editUserModel.orgId = orgId
          this.editUserModel.orgName = orgName
        }
      }
      // if (orgId) {
      //   this.editUserModel.orgId = orgId
      //   this.editUserModel.orgName = orgName
      //   this.editUserModel.type = type
      // }
    },
    // 校验
    validateOrgName (rule, value, callback) {
      let orgArray = this.editUserModel.orgId
      if (orgArray instanceof Array) {
        this.editUserModel.orgId = orgArray[orgArray.length - 1]
      } else {
        this.editUserModel.orgId = orgArray
      }

      if (this.isIdShow === false && this.editUserModel.editOrgId === '') { // 编辑
        callback(new Error('请选择所属组织！'))
      } else if (orgArray === '' || orgArray.length === 0) {
        callback(new Error('请选择所属组织！'))
      } else if (this.isIdShow === true && ((this.editUserModel.orgId[0] === '1' && this.editUserModel.orgId.length === 1) || this.editUserModel.orgId === '1')) {
        callback(new Error('所属组织不能是系统管理组！'))
      } else if (this.isIdShow === false && this.editUserModel.editOrgId && this.editUserModel.editOrgId === '1') {
        callback(new Error('所属组织不能是系统管理组！'))
      } else {
        callback()
      }
    },
    handleSubmit: function (name) {
      // noticefrontEndTest
      userApi.noticefrontEndTest('1').then(function (response) {
        console.log('noticefrontEndTest======')
        console.log(response)
        if (response.data.code === '1') { // noticefrontEndTest
          that.errorMsg = response.data.msg
        } else {
          that.$parent.refreshTable()
          that.$Message.success(response.data.msg)
          that.modelIsOpen = false
        }
      }).catch(function (error) {
        console.log(error)
      })
      let that = this
      this.$refs['editUserModel'].validate(function (valid) {
        if (valid) {
          if (that.isIdShow === false) {
            that.editUserModel.orgId = that.editUserModel.editOrgId
          }
          if (that.modelType === 'add') {
            userApi.userInfoAdd(that.editUserModel).then(function (response) {
              if (response.data.code === '1') { // 用户名和用户代码校验重复返回错误信息
                that.errorMsg = response.data.msg
              } else {
                that.$parent.refreshTable()
                that.$Message.success(response.data.msg)
                that.modelIsOpen = false
              }
            }).catch(function (error) {
              console.log(error)
            })
          } else {
            // 编辑
            userApi.userInfoEdit(that.editUserModel).then(function (response) {
              if (response.data.code === '1') { // 用户名和用户代码校验重复返回错误信息
                that.errorMsg = response.data.msg
              } else {
                that.$parent.refreshTable()
                that.$Message.success(response.data.msg)
                that.modelIsOpen = false
              }
            }).catch(function (error) {
              console.log(error)
            })
          }
        }
      })
    },
    handleReset: function () {
      if (this.modelType === 'add') {
        this.$refs['editUserModel'].resetFields()
        this.editUserModel.orgId = ''
      } else {
        this.editUserModel.userId = ''
        this.editUserModel.userName = ''
        this.editUserModel.userCode = ''
        this.editUserModel.orgName = ''
        this.editUserModel.posName = ''
        this.editUserModel.editOrgId = ''
        this.editUserModel.orgId = ''
        this.editUserModel.positionId = ''
        this.editUserModel.expireTime = ''
        this.editUserModel.type = ''
      }
      this.errorMsg = ''
    }
  }

}
</script>
