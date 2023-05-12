<!--
 * @Description: editSeq
 * @Author: guochongjin
 * @Date: 2020-09-01 15:41:37
 * @LastEditTime: 2020-09-01 15:41:37
 * @LastEditors: guochongjin
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
     <z-alert type="error" v-if="errorMsg">{{errorMsg}}</z-alert>
     <z-form ref="editSeqModel" :model="editSeqModel" :label-width="100" label-position="left" class="ilead-modal-form per-center" :rules="ruleValidate"  @on-validate="onValidate">
        <z-form-item label="序号名称"  prop="name">
            <z-input v-model="editSeqModel.name" :maxlength="40" :placeholder="namePlacholder" :disabled="isNameDisable" clearable></z-input>
        </z-form-item>
        <z-form-item label="序号下一值"  prop="nextid">
            <z-input v-model="editSeqModel.nextid" :maxlength="40" placeholder="请输入..." clearable></z-input>
        </z-form-item>
        <z-form-item label="版本"  prop="version">
            <z-input v-model="editSeqModel.version " :maxlength="40" :placeholder="versionPlacholder" :disabled="isVersionDisable" clearable></z-input>
        </z-form-item>
        <z-form-item label="状态"  prop="status">
               <z-select v-model="editSeqModel.status" clearable placeholder="请选择" transfer>
                <z-option value="01">可用</z-option>
                <z-option value="02">锁定</z-option>
            </z-select>
        </z-form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit('formItem')">提交</z-button>
        <z-button type="primary" ghost icon="refresh" @click="handleReset()" style="margin-left: 8px">重置</z-button>
    </div>
     <!-- 弹出 -->
</z-modal>
</template>
<script>
import seqApi from './api/api.js'
export default {
  name: 'editSeq',
  data: function () {
    return {
      modelIsOpen: false,
      isNameDisable: '',
      isVersionDisable: '',
      namePlacholder: '',
      versionPlacholder: '',
      editSeqModel: {
        name: '',
        nextid: '',
        version: '',
        status: ''
      },
      actionType: '',
      errorMsg: '',
      ruleValidate: {
        name: [
          {required: true, message: '请填写序号名称'}
        ],
        nextid: [
          {required: true, validator: this.validateNextid}
        ],
        status: [
          {required: true, message: '请选择状态'}
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
  created: function () {
  },
  methods: {
    // 获取父数据
    getData: function (data) {
      this.editSeqModel.name = data.name
      this.editSeqModel.nextid = data.nextid
      this.editSeqModel.version = data.version
      this.editSeqModel.status = data.status
    },
    onValidate: function () {
      this.errorMsg = ''
    },
    validateNextid (rule, value, callback) {
      let id = this.editSeqModel.nextid
      if (id === '') {
        callback(new Error('请输入序号下一值'))
      }
      let idRegExp = /^\d+$/
      let ok = idRegExp.test(id)
      if (ok) {
        let num = parseInt(id)
        if (num === parseInt('0')) {
          callback(new Error('序号值不合法'))
        } else {
          callback()
        }
      } else {
        callback(new Error('序号值不合法'))
      }
      callback()
    },
    handleSubmit: function (name) {
      let that = this
      this.$refs['editSeqModel'].validate(function (valid) {
        if (valid) {
          if (that.modelType === 'add') {
            seqApi.seqInfoAdd(that.editSeqModel).then(function (response) {
              if (response.data.code !== '01') {
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
            seqApi.seqInfoEdit(that.editSeqModel).then(function (response) {
              if (response.data.code !== '01') {
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
      }
      )
    },
    handleReset: function () {
      if (this.modelType === 'add') {
        this.$refs['editSeqModel'].resetFields()
      } else {
        this.editSeqModel.name = ''
        this.editSeqModel.nextid = ''
        this.editSeqModel.version = ''
        this.editSeqModel.status = ''
      }
      this.errorMsg = ''
    }
  }

}
</script>
