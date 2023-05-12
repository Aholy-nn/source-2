<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-04-17 12:29:18
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
   <z-form ref="editAppModel" :model="editAppModel" :label-width="120" label-position="right" class="ilead-modal-form per-center" :rules="ruleValidate">
        <z-form-item label="应用代码:"  prop="appCode" v-show="showFlag">
            <z-input v-model="editAppModel.appCode" :maxlength="32" placeholder="请输入..."></z-input>
        </z-form-item>
        <z-form-item label="应用名称:"  prop="appName">
            <z-input v-model="editAppModel.appName" :maxlength="118" placeholder="请输入..."></z-input>
        </z-form-item>
        <z-form-item label="应用域名:"  prop="appDomain">
            <z-input v-model="editAppModel.appDomain" :maxlength="2048" placeholder="请输入..."></z-input>
        </z-form-item>
        <z-form-item label="应用根地址"  prop="appPath">
            <z-input v-model="editAppModel.appPath" :maxlength="256" placeholder="请输入..."></z-input>
        </z-form-item>
        <z-form-item label="应用地址类型" prop="appPathType">
            <z-select v-model="editAppModel.appPathType" :transfer="true">
                <z-option value="1">默认类型</z-option>
                <z-option value="2">域名类型</z-option>
            </z-select>
        </z-form-item>
        <z-form-item label="应用IP"  prop="appIp">
            <z-input v-model="editAppModel.appIp" :maxlength="256" placeholder="请输入..."></z-input>
        </z-form-item>
        <z-form-item label="应用描述"  prop="appDesc">
            <z-input v-model="editAppModel.appDesc" :maxlength="246" placeholder="请输入..."></z-input>
        </z-form-item>
        <z-form-item label="状态" prop="state">
            <z-select v-model="editAppModel.state" :transfer="true">
                <z-option value="1">可用</z-option>
                <z-option value="0">不可用</z-option>
            </z-select>
        </z-form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit('editAppModel')">提交</z-button>
        <z-button type="primary" ghost icon="refresh" @click="handleReset('editAppModel')" style="margin-left: 8px">重置</z-button>
        <z-button type="dashed"  @click="handleClose('editAppModel')" style="margin-left: 8px">关闭</z-button>
    </div>
</z-modal>
</template>
<script>
import sysAppApi from '../api/api.js'
export default {
  name: 'editSysInfo',
  components: {
  },
  data: function () {
    return {
      modelIsOpen: false,
      editAppModel: {
        appCode: '',
        appName: '',
        appDomain: '',
        appPath: '',
        appPathType: '',
        appIp: '',
        appDesc: '',
        state: '',
        appId: ''
      },
      ruleValidate: {
        appCode: [
          {required: true, message: '请填写应用代码', trigger: 'blur'}
        ],
        appName: [
          {required: true, message: '请填写应用名称', trigger: 'blur'}
        ],
        appPathType: [
          {required: true, message: '请选择地址类型', trigger: 'change'}
        ],
        state: [
          {required: true, message: '请选择状态', trigger: 'change'}
        ]

      }
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
  computed: {
    showFlag: function () {
      // 新增
      if (this.modelType === 'add') {
        return true
      } else { // 编辑
        return false
      }
    }
  },
  methods: {
    handleSubmit: function (name) {
      let that = this
      this.$refs[name].validate(function (valid) {
        if (valid) {
        // 新增
          if (that.modelType === 'add') {
            sysAppApi.sysAppInfoAdd(that.editAppModel).then(function (response) {
              if (response.data.code === '0') { // 应用代码和应用地址校验重复返回错误信息
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
            sysAppApi.sysAppInfoUpdate(that.editAppModel).then(function (response) {
              if (response.data.code === '0') { // 应用地址校验重复返回错误信息
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
      this.$refs['editAppModel'].resetFields()
    },
    handleClose: function (name) {
      this.modelIsOpen = false
    }
  }

}
</script>
