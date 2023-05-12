<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-03 11:46:49
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
    <z-form ref="editDictModel" :model="editDictModel" :label-width="120" label-position="left" class="tata-modal-form per-center" :rules="ruleValidate">
        <form-item :label="$t('dictManage.label.dictCode')"  prop="dictCode" :readonly="isReadOnly">
            <z-input v-model="editDictModel.dictCode" :maxlength="32" :placeholder="$t('common.placeholder.input')"></z-input>
        </form-item>
        <form-item :label="$t('dictManage.label.dictName')"  prop="dictName" >
            <z-input v-model="editDictModel.dictName" :maxlength="64" :placeholder="$t('common.placeholder.input')"></z-input>
        </form-item>
        <form-item :label="$t('dictManage.label.itemCode')"  prop="itemCode" :readonly="isReadOnly">
            <z-input v-model="editDictModel.itemCode" :maxlength="32" :placeholder="$t('common.placeholder.input')"></z-input>
        </form-item>
        <form-item :label="$t('dictManage.label.itemValue')"  prop="itemValue" >
            <z-input v-model="editDictModel.itemValue" :maxlength="32" :placeholder="$t('common.placeholder.input')"></z-input>
        </form-item>
        <form-item :label="$t('dictManage.label.supDictCode')"  prop="supDictCode" :readonly="isReadOnly">
            <z-input v-model="editDictModel.supDictCode" :maxlength="32" :placeholder="$t('common.placeholder.input')"></z-input>
        </form-item>
        <form-item :label="$t('dictManage.label.supItemCode')"  prop="supItemCode" :readonly="isReadOnly">
            <z-input v-model="editDictModel.supItemCode" :maxlength="32" :placeholder="$t('common.placeholder.input')"></z-input>
        </form-item>
        <form-item :label="$t('dictManage.label.itemSortOrder')"  prop="itemSortOrder" >
            <z-input-number v-model="editDictModel.itemSortOrder" :max="1000" :min="1" ></z-input-number>
        </form-item>
        <form-item :label="$t('dictManage.label.dictDesc')"  prop="dictDesc">
            <z-input v-model="editDictModel.dictDesc" :maxlength="255" :placeholder="$t('common.placeholder.input')"></z-input>
        </form-item>
        <form-item :label="$t('dictManage.label.dictStatus')" prop="dictStatus">
            <z-select v-model="editDictModel.dictStatus" clearable :placeholder="$t('common.placeholder.choose')">
                <z-option value="0">{{$t('dictManage.option.dictStatus0')}}</z-option>
                <z-option value="1">{{$t('dictManage.option.dictStatus1')}}</z-option>
                <z-option value="2">{{$t('dictManage.option.dictStatus2')}}</z-option>
            </z-select>
        </form-item>
        <form-item :label="$t('dictManage.label.dictType')"  prop="dictType">
            <z-select v-model="editDictModel.dictType" clearable :placeholder="$t('common.placeholder.choose')">
                <z-option value="0">{{$t('dictManage.option.dictType0')}}</z-option>
                <z-option value="1">{{$t('dictManage.option.dictType1')}}</z-option>
            </z-select>
        </form-item>
    </z-form>
    <div slot="footer" class="tata-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit('editDictModel')">{{$t('common.button.submit')}}</z-button>
        <z-button type="primary" ghost icon="refresh" @click="handleReset('editDictModel')" style="margin-left: 8px">{{$t('common.button.reset')}}</z-button>
        <z-button type="dashed"  @click="handleClose('editDictModel')" style="margin-left: 8px">{{$t('common.button.close')}}</z-button>
    </div>
</z-modal>
</template>
<script>
import dictApi from '../api/api.js'
import Config from '@/config/index.js'
export default {
  name: 'editDict',
  components: {
  },
  data: function () {
    return {
      modelIsOpen: false,
      isReadOnly: false,
      editDictModel: {
        dictId: '',
        dictCode: '',
        dictName: '',
        itemCode: '',
        itemValue: '',
        supDictCode: '',
        supItemCode: '',
        itemSortOrder: 1,
        dictDesc: '',
        dictStatus: '',
        dictVersion: '',
        dictType: '',
        appId: ''
      },
      ruleValidate: {
        dictCode: [
          {required: true, message: this.$t('dictManage.tips.inputDictCode'), trigger: 'blur'}
        ],
        dictName: [
          {required: true, message: this.$t('dictManage.tips.inputDictName'), trigger: 'blur'}
        ],
        itemCode: [
          {required: true, message: this.$t('dictManage.tips.inputItemCode'), trigger: 'blur'}
        ],
        itemValue: [
          {required: true, message: this.$t('dictManage.tips.inputItemValue'), trigger: 'blur'}
        ]
      },
      appModel: {
        appId: ''
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
    getData: function (data) {
      this.editDictModel.dictId = data.dictId
      this.editDictModel.dictCode = data.dictCode
      this.editDictModel.dictName = data.dictName
      this.editDictModel.itemCode = data.itemCode
      this.editDictModel.itemValue = data.itemValue
      this.editDictModel.supDictCode = data.supDictCode
      this.editDictModel.supItemCode = data.supItemCode
      this.editDictModel.itemSortOrder = data.itemSortOrder
      this.editDictModel.dictDesc = data.dictDesc
      this.editDictModel.dictStatus = data.dictStatus
      this.editDictModel.dictVersion = data.dictVersion
      this.editDictModel.dictType = data.dictType
    },
    handleSubmit: function (name) {
      let that = this
      this.$refs[name].validate(function (valid) {
        if (valid) {
          // 是否多应用
          if (Config.multiApp) {
            let appId = that.appModel.appId
            if (appId && appId !== '') {
              that.editDictModel.appId = appId
            }
          } else {
            that.editDictModel.appId = '1'
          }
          // 新增
          if (that.modelType === 'add') {
            dictApi.addDict(that.editDictModel).then(function (response) {
              if (response.data.code === '01') {
                that.$parent.query()
                that.$Message.success(response.data.msg)
              } else {
                that.$Message.error(response.data.msg)
              }
              that.modelIsOpen = false
            }).catch(function (error) {
              console.log(error)
            })
          } else {
            // 编辑
            dictApi.updateDict(that.editDictModel).then(function (response) {
              if (response.data.code === '01') {
                that.$parent.query()
                that.$Message.success(response.data.msg)
              } else {
                that.$Message.error(response.data.msg)
              }
              that.modelIsOpen = false
            }).catch(function (error) {
              console.log(error)
            })
          }
        } else {
          that.$Message.error(that.$t('dictManage.message.saveFail'))
        }
      })
    },
    handleReset: function () {
      this.editDictModel.dictId = ''
      this.editDictModel.dictCode = ''
      this.editDictModel.dictName = ''
      this.editDictModel.itemCode = ''
      this.editDictModel.itemValue = ''
      this.editDictModel.supDictCode = ''
      this.editDictModel.supItemCode = ''
      this.editDictModel.itemSortOrder = 1
      this.editDictModel.dictDesc = ''
      this.editDictModel.dictStatus = ''
      this.editDictModel.dictVersion = ''
      this.editDictModel.dictType = ''
      this.editDictModel.appId = ''
    },
    handleClose: function (name) {
      this.modelIsOpen = false
    }
  }

}
</script>
