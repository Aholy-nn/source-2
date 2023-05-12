<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-01 16:14:05
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" title="添加证书" fixed max-height="500" width="600">
    <z-form ref="certManageEdit" :model="formItem" :label-width="80" label-position="left" class="ilead-modal-form per-center" :rules="ruleValidate">
        <form-item label="证书名称"  prop="certName">
            <z-input v-model="formItem.certName" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="长度限制为1-65个字符，以字母开头，只允许包含字母、数字及 - _ . /"></z-input>
        </form-item>
        <form-item label="服务器证书"  prop="certServerData">
            <z-input v-model="formItem.certServerData" id="idCertServerData" type="textarea" :autosize="{minRows: 2,maxRows: 5}"></z-input>
            <a href="javascript:void(0);" onclick='certServerDataPla()'>
                            查看参考样例
            </a>
            <i class="cert-exp-tip">(pem编码)</i>
        </form-item>
        <form-item label="私钥"  prop="certPrivateData">
            <z-input v-model="formItem.certPrivateData" id="idCertPrivateData" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></z-input>
            <a href="javascript:void(0);" onclick='certPrivateDataPla()'>
                            查看参考样例
            </a>
            <i class="cert-exp-tip">(pem编码)</i>
        </form-item>
        <form-item label="公用名称"  prop="certCommonName">
            <z-input v-model="formItem.certCommonName" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></z-input>
        </form-item>
        <form-item label="证书有效期"  prop="certIndate">
            <Row>
                <z-col span="11">
                    <z-date-picker type="date" placeholder="选择日期" format="yyyy-MM-dd" placement="top-start" transfer v-model="formItem.certStartTime"></z-date-picker>
                </z-col>
                <z-col span="2" style="text-align: center">至</z-col>
                <z-col span="11">
                    <z-date-picker type="date" placeholder="选择日期" format="yyyy-MM-dd" placement="top-start" transfer v-model="formItem.certStopTime"></z-date-picker>
                </z-col>
            </Row>
        </form-item>
        <form-item label="证书状态"  prop="state">
            <z-select v-model="formItem.state" clearable placeholder="请选择" transfer>
                <z-option value="2">使用</z-option>
                <z-option value="1">未使用</z-option>
            </z-select>
        </form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit('certManageEdit')">提交</z-button>
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
        certServerData: '',
        certPrivateData: '',
        certLinkData: '',
        certCommonName: '',
        state: '',
        certIndate: ''
      },
      ruleValidate: {
        certName: [
          {required: true, message: '请填写证书名称', trigger: 'change'}
        ],
        certServerData: [
          {required: true, message: '请填写服务器证书', trigger: 'change'}
        ],
        certPrivateData: [
          {required: true, message: '请填写私钥', trigger: 'change'}
        ],
        state: [
          {required: true, message: '请填写状态', trigger: 'change'}
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
          CertManageListAPI.save(that.formItem).then(function (response) {
            that.$parent.query()
            that.$Message.success(response.data.msg)
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
      this.$refs['certManageEdit'].resetFields()
    },
    handleClose: function () {
      this.modelIsOpen = false
    }
  }
}
</script>
