<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-03 11:46:49
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
    <z-form ref="editResModel" :model="editResModel" :label-width="120" label-position="left" class="ilead-modal-form per-center" :rules="ruleValidate">
        <form-item :label="$t('resType.label.resTypeCode')"  prop="resTypeCode" v-show="showFlag">
            <z-input v-model="editResModel.resTypeCode" :maxlength="32" :placeholder="$t('common.placeholder.input')"></z-input>
        </form-item>
        <form-item :label="$t('resType.label.resTypeName')"  prop="resTypeName">
            <z-input v-model="editResModel.resTypeName" :maxlength="22" :placeholder="$t('common.placeholder.input')"></z-input>
        </form-item>
        <form-item :label="$t('resType.label.invokeServiceType')" prop="invokeServiceType">
            <z-select v-model="editResModel.invokeServiceType" clearable :placeholder="$t('common.placeholder.choose')">
                <z-option value="01">{{$t('resType.option.invokeServiceType01')}}</z-option>
                <z-option value="02">{{$t('resType.option.invokeServiceType02')}}</z-option>
                <z-option value="03">{{$t('resType.option.invokeServiceType03')}}</z-option>
            </z-select>
        </form-item>
        <form-item :label="$t('resType.label.invokeServiceName')"  prop="invokeServiceName">
            <z-input v-model="editResModel.invokeServiceName" :maxlength="118" :placeholder="$t('common.placeholder.input')"></z-input>
        </form-item>
        <form-item :label="$t('resType.label.remarks')"  prop="remarks">
            <z-input v-model="editResModel.remarks" :maxlength="118" :placeholder="$t('common.placeholder.input')"></z-input>
        </form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit('editResModel')">{{$t('common.button.submit')}}</z-button>
        <z-button type="primary" ghost icon="refresh" @click="handleReset('editResModel')" style="margin-left: 8px">{{$t('common.button.reset')}}</z-button>
        <z-button type="dashed"  @click="handleClose('editResModel')" style="margin-left: 8px">{{$t('common.button.close')}}</z-button>
    </div>
</z-modal>
</template>
<script>
import resApi from '../api/api.js'
import Config from '@/config/index.js'
export default {
  name: 'editRes',
  components: {
  },
  data: function () {
    return {
      modelIsOpen: false,
      editResModel: {
        resTypeCode: '',
        resTypeName: '',
        invokeServiceType: '',
        invokeServiceName: '',
        remarks: ''
      },
      ruleValidate: {
        resTypeCode: [
          {required: true, message: this.$t('resType.tips.inuputResTypeCode'), trigger: 'blur'}
        ],
        resTypeName: [
          {required: true, message: this.$t('resType.tips.inuputResTypeName'), trigger: 'blur'}
        ],
        invokeServiceType: [
          {required: true, message: this.$t('resType.tips.chooseInvokeServiceType'), trigger: 'change'}
        ],
        invokeServiceName: [
          {required: true, message: this.$t('resType.tips.inuputInvokeServiceName'), trigger: 'blur'}
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
    handleSubmit: function (name) {
      let that = this
      this.$refs[name].validate(function (valid) {
        if (valid) {
          // 是否多应用
          if (Config.multiApp) {
            let appId = that.appModel.appId
            if (appId && appId !== '') {
              that.editResModel.appId = appId
            }
          }
          // 新增
          if (that.modelType === 'add') {
            resApi.resTypeInfoAdd(that.editResModel).then(function (response) {
              that.$parent.query()
              that.$Message.success(response.data.msg)
              that.modelIsOpen = false
            }).catch(function (error) {
              console.log(error)
            })
          } else {
            // 编辑
            resApi.resTypeInfoUpdate(that.editResModel).then(function (response) {
              that.$parent.query()
              that.$Message.success(response.data.msg)
              that.modelIsOpen = false
            }).catch(function (error) {
              console.log(error)
            })
          }
        } else {
          that.$Message.error(that.$t('resType.tips.saveFail'))
        }
      })
    },
    handleReset: function () {
      this.$refs['editResModel'].resetFields()
    },
    handleClose: function (name) {
      this.modelIsOpen = false
    }
  }

}
</script>
