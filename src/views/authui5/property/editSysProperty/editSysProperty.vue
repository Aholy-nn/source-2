<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-03 10:48:14
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
   <z-form ref="editPropertyModel" :model="editPropertyModel" :label-width="120" label-position="right" class="ilead-modal-form per-center" :rules="ruleValidate">
        <z-form-item label="系统属性编码:"  prop="propertyCode">
            <z-input v-model="editPropertyModel.propertyCode" placeholder="请输入..."></z-input>
        </z-form-item>
        <z-form-item label="系统属性类型:"  prop="propertyType">
            <z-select v-model="editPropertyModel.propertyType" @on-change="proTypeChange" clearable placeholder="请选择" >
                <z-option value="0">默认</z-option>
                <z-option value="1">密码</z-option>
            </z-select>
        </z-form-item>
        <z-form-item label="系统属性值:"  prop="propertyValue">
            <z-input v-model="editPropertyModel.propertyValue" ref="pwdlevel" :maxlength="128" placeholder="请输入..." pwdstrength></z-input>
        </z-form-item>
        <z-form-item label="备注"  prop="remarks">
            <z-input v-model="editPropertyModel.remarks" placeholder="请输入..."></z-input>
        </z-form-item>
        <z-form-item label="租户标识" prop="tenantId" v-if="ifTenant">
            <z-select v-model="editPropertyModel.tenantId" transfer>
                <z-option v-for="item in tenantList" :value="item.code" :key="item.code">{{ item.name }}</z-option>
            </z-select>
        </z-form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit('editPropertyModel')">提交</z-button>
        <z-button type="primary" ghost icon="refresh" @click="handleReset('editPropertyModel')" style="margin-left: 8px">重置</z-button>
        <z-button type="dashed"  @click="handleClose('editPropertyModel')" style="margin-left: 8px">关闭</z-button>
    </div>
</z-modal>
</template>
<script>
import sysPropertyApi from '../api/api.js'
import Config from '@/config/index.js'
export default {
  name: 'editSysProperty',
  data: function () {
    return {
      modelIsOpen: false,
      input: '',
      editPropertyModel: {
        propertyCode: '',
        propertyValue: '',
        propertyType: '',
        remarks: '',
        tenantId: ''
      },
      tenantList: this.getTenantList(),
      ruleValidate: {
        propertyCode: [
          {required: true, message: '请填写系统属性编码', trigger: 'blur'}
        ],
        propertyValue: [
          {required: true, message: '请填写系统属性值', trigger: 'blur'}
        ],
        propertyType: [
          {required: true, message: '请选择系统属性类型', trigger: 'change'}
        ],
        tenantId: [
          {validator: this.validateTenantId}
        ]
      },
      // 是否多应用
      ifTenant: Config.ifTenant
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
  methods: {
    getTenantList: function () {
      var that = this
      setTimeout(function () {
        sysPropertyApi.tenantListQuery().then(function (response) {
          console.log(response)
          that.tenantList = response.data.data
          if (that.editPropertyModel.tenantId === '' || that.editPropertyModel.tenantId === undefined) {
            that.editPropertyModel.tenantId = response.data.data[0].code
          }
        }).catch(function (error) {
          console.log(error)
        })
      }, 500)

      return []
    },
    proTypeChange: function () {
      if (this.editPropertyModel.propertyType === '1') {
        this.pswCheckShow = true
      } else if (this.editPropertyModel.propertyType === '0') {
        this.pswCheckShow = false
      }
    },
    handleSubmit: function (name) {
      var that = this
      this.$refs[name].validate(function (valid) {
        if (valid) {
          if (that.editPropertyModel.propertyType === '1') {
            // 从缓存中获取密码策略
            var userPswRule = that.$store.state.userPswRule
            // 根据输入的密码判断密码的强度
            var pwdLevel = that.$refs.pwdlevel.getPwdLevel()
            if (userPswRule === '1' && pwdLevel === '1') {
              that.$Modal.error({
                title: '密码不符合安全要求',
                content: '密码强度太弱！密码应至少包含英文大写、小写、数字、特殊字符中的两种'
              })
              return
            } else if (userPswRule === '2' && pwdLevel <= 2) {
              that.$Modal.error({
                title: '密码不符合安全要求',
                content: '密码强度太弱！密码应至少包含英文大写、小写、数字、特殊字符中的三种'
              })
              return
            } else if (userPswRule === '3' && pwdLevel <= 3) {
              that.$Modal.error({
                title: '密码不符合安全要求',
                content: '密码强度太弱！密码应至少包含英文大写、小写、数字、特殊字符中的三种且大于12位'
              })
              return
            }
          }
          // 新增
          if (that.modelType === 'add') {
            sysPropertyApi.propertyInfoAdd(that.editPropertyModel).then(function (response) {
              if (response.data.code === '0') { // 属性编码校验重复返回错误信息
                that.$Message.error(response.data.msg)
              } else {
                that.$parent.query()
                that.$Message.success(response.data.msg)
                that.modelIsOpen = false
              }
            }).catch(function (error) {
              console.log(error)
            })
          } else {
            // 编辑
            sysPropertyApi.propertyInfoUpdate(that.editPropertyModel).then(function (response) {
              if (response.data.code === '0') { // 属性编码校验重复返回错误信息
                that.$Message.error(response.data.msg)
              } else {
                that.$parent.query()
                that.$Message.success(response.data.msg)
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
    handleReset: function () {
      this.$refs['editPropertyModel'].resetFields()
    },
    handleClose: function (name) {
      this.modelIsOpen = false
    },
    validateTenantId (rule, value, callback) {
      if (this.ifTenant && value === '') {
        callback(new Error('请填写租户标识'))
      }
      callback()
    }
  }

}
</script>
