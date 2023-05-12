<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-03 16:33:11
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" title="生成证书" fixed max-height="500" width="600">
    <z-form ref="certGenerate" :model="formItem" :label-width="80" label-position="left" class="ilead-modal-form per-center" :rules="ruleValidate">
        <z-form-item label="证书名称"  prop="certName">
            <z-input v-model="formItem.certName"  placeholder="长度限制为1-65个字符，以字母开头，只允许包含字母、数字及 - _ . /"></z-input>
        </z-form-item>
        <z-form-item label="两位国家代码"  prop="countryName">
           <z-input v-model="formItem.countryName"  placeholder="请输入..."></z-input>
        </z-form-item>
        <z-form-item label="州或省份名称"  prop="province">
            <z-input v-model="formItem.province"  placeholder="请输入..."></z-input>
        </z-form-item>
        <z-form-item label="城市或区域名称"  prop="cityName">
            <z-input v-model="formItem.cityName"  placeholder="请输入..."></z-input>
        </z-form-item>
        <z-form-item label="组织单位名称"  prop="companyName">
            <z-input v-model="formItem.companyName"  placeholder="请输入..."></z-input>
        </z-form-item>
        <z-form-item label="组织名称"  prop="orgName">
            <z-input v-model="formItem.orgName"  placeholder="请输入..."></z-input>
        </z-form-item>
        <z-form-item label="目标ip地址/域名"  prop="certCommonName">
            <z-input v-model="formItem.certCommonName"  placeholder="请输入..."></z-input>
        </z-form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit('certGenerate')">提交</z-button>
        <z-button type="primary" ghost icon="close" @click="handleReset()" style="margin-left: 8px">重置</z-button>
        <z-button type="primary" ghost icon="close" @click="handleClose()" style="margin-left: 8px">关闭</z-button>
    </div>
</z-modal>
</template>
<script>
import CertManageListAPI from '../api/api.js'
export default {
  name: 'certEdit',
  data: function () {
    return {
      modelIsOpen: false,
      formItem: {
        certName: '',
        countryName: '',
        province: '',
        cityName: '',
        companyName: '',
        orgName: '',
        certCommonName: ''
      },
      ruleValidate: {
        certName: [
          {required: true, message: '请填写证书名称', trigger: 'change'}
        ],
        countryName: [
          {required: true, message: '请填写国家代码', trigger: 'change'}
        ],
        province: [
          {required: true, message: '请填写州或省份名称', trigger: 'change'}
        ],
        cityName: [
          {required: true, message: '请填写城市或区域名称', trigger: 'change'}
        ],
        companyName: [
          {required: true, message: '请填写组织单位名称', trigger: 'change'}
        ],
        orgName: [
          {required: true, message: '请填写组织名称', trigger: 'change'}
        ],
        certCommonName: [
          {required: true, message: '请填写目标ip地址/域名', trigger: 'change'}
        ]
      }
    }
  },
  methods: {
    // 校验证书名称格式
    checkCertName: function () {
      var sCertName = this.formItem.certName
      // eslint-disable-next-line no-useless-escape
      if (!sCertName.match(/^[A-Za-z][A-Za-z0-9_.\-\/]{0,65}$/)) {
        return false
      }
      return true
    },
    handleSubmit: function (name) {
      var that = this
      if (!this.checkCertName()) {
        that.$Message.error('证书名称输入错误,只允许输入1-65个字符，以字母开头，只允许包含字母、数字、‘-’、‘/’、‘.’、‘_’')
        return
      }
      this.$refs[name].validate(function (valid) {
        if (valid) {
          CertManageListAPI.generateCert(that.formItem).then(function (response) {
            that.$parent.query()
            that.$Message.success('生成成功!')
            that.modelIsOpen = false
          }).catch(function (error) {
            console.log(error)
          })
        } else {
          that.$Message.error('表单验证失败!')
        }
      })
    },
    handleReset () {
      this.$refs['certGenerate'].resetFields()
    },
    handleClose: function () {
      this.modelIsOpen = false
    }
  }
}
</script>
