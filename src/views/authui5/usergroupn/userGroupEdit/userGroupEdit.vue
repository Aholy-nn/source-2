<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-11 14:34:11
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
     <z-form ref="editModel" :model="editModel" :label-width="100" label-position="left" class="ilead-modal-form per-center" :rules="validate">
        <z-form-item :label="$t('userGroupn.label.groupCode')"  prop="groupCode">
            <z-input v-model="editModel.groupCode" :maxlength="32" :placeholder="$t('common.placeholder.input')" clearable></z-input>
        </z-form-item>
        <z-form-item :label="$t('userGroupn.label.groupName')"  prop="groupName">
            <z-input v-model="editModel.groupName" :maxlength="22" :placeholder="$t('common.placeholder.input')" clearable></z-input>
        </z-form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit('editModel')">{{$t('common.button.submit')}}</z-button>
        <z-button type="primary" ghost icon="refresh" @click="handleReset()" style="margin-left: 8px">{{$t('common.button.reset')}}</z-button>
    </div>
</z-modal>
</template>
<script>

import userGroupAPI from '../api/api.js'
export default {
  name: 'userGroupEdit',
  components: {
  },
  data: function () {
    return {
      modelIsOpen: false,
      editModel: {
        groupId: '', // 用户组主键
        groupCode: '', // 用户组编码
        groupName: '', // 用户组名称
        parentGroupId: '****'
      },
      validate: {
        groupCode: [
          {required: true, message: this.$t('userGroupn.tips.inuputGroupCode'), trigger: 'blur'}
        ],
        groupName: [
          {required: true, message: this.$t('userGroupn.tips.inuputGroupName'), trigger: 'blur'}
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
  methods: {
    handleSubmit: function (name) {
      let that = this
      this.$refs[name].validate(function (valid) {
        if (valid) {
          // 新增
          userGroupAPI.userGroupEdit(that.modelType, that.editModel).then(function (response) {
            if (response.data.code === '01') {
              that.$parent.refreshTable()
              that.$Message.success('操作成功')
              that.modelIsOpen = false
            } else {
              that.$Message.error(response.data.msg)
            }
          }).catch(function (error) {
            console.log(error)
          })
        } else {
          that.$Message.error(that.$t('userGroupn.tips.saveFail'))
        }
      })
    },
    handleReset: function () {
      this.$refs['editModel'].resetFields()
    }
  }
}
</script>
