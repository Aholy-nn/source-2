<!--
 * @Description: editFilestorage
 * @Author: guochongjin
 * @Date: 2020-09-01 15:41:37
 * @LastEditTime: 2020-09-01 15:41:37
 * @LastEditors: guochongjin
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
     <z-alert type="error" v-if="errorMsg">{{errorMsg}}</z-alert>
     <z-form ref="editFileStorageModel" :model="editFileStorageModel" :label-width="100" label-position="left" class="ilead-modal-form per-center" :rules="ruleValidate">
        <z-form-item label="存储类型：" prop="storageType">
            <z-select v-model="editFileStorageModel.storageType" clearable placeholder="请输入" transfer>
              <z-option value="NFS">NFS</z-option>
              <z-option value="FTP">FTP</z-option>
              <z-option value="其他">其他</z-option>
            </z-select>
        </z-form-item>
        <z-form-item label="存储提供者"  prop="storageVendor">
            <z-input v-model="editFileStorageModel.storageVendor" :maxlength="20" placeholder="请输入..." clearable></z-input>
        </z-form-item>
        <z-form-item label="存储操作类"  prop="storageHandler">
            <z-input v-model="editFileStorageModel.storageHandler " :maxlength="50" placeholder="请输入..." clearable></z-input>
        </z-form-item>
        <z-form-item label="存储根路径"  prop="storageBaseUrl">
            <z-input v-model="editFileStorageModel.storageBaseUrl" :maxlength="50" placeholder="请输入..." clearable></z-input>
        </z-form-item>
        <z-form-item label="存储配置信息"  prop="storageSetting">
            <z-input v-model="editFileStorageModel.storageSetting" :maxlength="200" placeholder="请输入..." clearable></z-input>
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
import filesApi from './api/api.js'
export default {
  name: 'editFileStorage',
  data: function () {
    return {
      modelIsOpen: false,
      editFileStorageModel: {
        storageType: '',
        storageVendor: '',
        storageHandler: '',
        storageBaseUrl: '',
        storageSetting: '',
        id: ''
      },
      actionType: '',
      dateOption: {
        disabledDate: function (date) {
          return date && date.valueOf() < Date.now() - 86400000
        }
      },
      errorMsg: '',
      ruleValidate: {
        storageVendor: [
          {required: true, message: '请填写存储提供者'}
        ],
        storageHandler: [
          {required: true, message: '请填写存储操作类'}
        ],
        storageBaseUrl: [
          {required: true, message: '请填写存储基础路径'}
        ],
        storageType: [
          {required: true, message: '请填写存储类型'}
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
      this.editFileStorageModel.storageType = data.storageType
      this.editFileStorageModel.storageVendor = data.storageVendor
      this.editFileStorageModel.storageHandler = data.storageHandler
      this.editFileStorageModel.storageBaseUrl = data.storageBaseUrl
      this.editFileStorageModel.storageSetting = data.storageSetting
      this.editFileStorageModel.id = data.id
    },
    handleSubmit: function (name) {
      let that = this
      this.$refs['editFileStorageModel'].validate(function (valid) {
        if (valid) {
          if (that.modelType === 'add') {
            filesApi.fileStorageInfoAdd(that.editFileStorageModel).then(function (response) {
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
            filesApi.fileStorageInfoEdit(that.editFileStorageModel).then(function (response) {
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
        this.$refs['editFileStorageModel'].resetFields()
      } else {
        this.editFileStorageModel.storageType = ''
        this.editFileStorageModel.storageVendor = ''
        this.editFileStorageModel.storageHandler = ''
        this.editFileStorageModel.storageBaseUrl = ''
        this.editFileStorageModel.storageSetting = ''
      }
      this.errorMsg = ''
    }
  }

}
</script>
