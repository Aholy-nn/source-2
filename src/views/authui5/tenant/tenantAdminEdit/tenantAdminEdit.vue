<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-05-27 12:19:34
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
     <z-form ref="editTenantAdminModel" :model="editTenantAdminModel" :label-width="110" label-position="left" class="ilead-modal-form per-center">
         <z-form-item label="管理员名称"  prop="userName">
            <z-input v-model="editTenantAdminModel.userName" :max-length="54" placeholder="请输入..."></z-input>
        </z-form-item>
        <z-form-item label="管理员代码"  prop="userCode">
            <z-input v-model="editTenantAdminModel.userCode" :max-length="32" v-bind:disabled="true"></z-input>
        </z-form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit('editTenantAdminModel')">提交</z-button>
        <z-button type="primary" ghost icon="refresh" @click="handleReset()" style="margin-left: 8px">重置</z-button>
        <z-button type="dashed"  @click="handleClose()" style="margin-left: 8px">关闭</z-button>
    </div>
</z-modal>
</template>
<script>
import tenantApi from '../api/api.js'
export default {
  name: 'tenantAdminEdit',
  components: {
  },
  data: function () {
    return {
      modelIsOpen: false,
      editTenantAdminModel: {
        userName: '',
        userCode: '',
        userId: '',
        tenantId: ''
      }
    }
  },
  props: {
    title: {
      type: String
    }
  },
  methods: {
    handleSubmit: function (name) {
      let that = this
      this.$refs[name].validate(function (valid) {
        if (valid) {
          tenantApi.tenantAdminInfoEdit(that.editTenantAdminModel).then(function (response) {
            if (response.data.code === '1') { // 模板编码校验重复返回错误信息
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
          that.$Message.error('保存失败，请检查信息是否完整!')
        }
      })
    },
    handleReset: function () {
      this.editTenantAdminModel.userName = ''
    },
    handleClose: function () {
      this.modelIsOpen = false
    }
  }
}
</script>
