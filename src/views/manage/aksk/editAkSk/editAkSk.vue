<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-03 10:48:25
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" title="编辑" fixed max-height="500" width="600">
    <z-form ref="formItem" :model="formItem" :label-width="80" label-position="left" class="ilead-modal-form per-center" :rules="ruleValidate">
        <form-item label="说明"  prop="remark">
            <z-input v-model="formItem.remark" placeholder="请输入说明..."></z-input>
        </form-item>
        <form-item label="到期时间"  prop="expiresDate">
             <z-date-picker type="date" placeholder="请选择日期..." v-model="formItem.expiresDate"  format="yyyy-MM-dd HH:mm:ss" @on-change="formItem.expiresDate=$event" transfer></z-date-picker>
        </form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="save()">提交</z-button>
        <z-button type="warning" icon="close" @click="close()" style="margin-left: 8px">关闭</z-button>
    </div>
</z-modal>
</template>
<script>
import akSkApi from '../api/api.js'
export default {
  name: 'editAkSk',
  data: function () {
    return {
      modelIsOpen: false,
      formItem: {
        remark: '',
        expiresDate: ''
      },
      ruleValidate: {
        expiresDate: [
          { required: true, message: '到期时间不能为空', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    save: function () {
      let that = this
      // 数据传递
      this.$refs['formItem'].validate(function (valid) {
        if (valid) {
          akSkApi.update(that.formItem).then(function (response) {
            console.log(response)
            that.$parent.query()
            that.modelIsOpen = false
            that.$Message.success('保存成功!')
          }).catch(function (error) {
            console.log(error)
          })
        } else {
          that.$Message.error('保存失败，请检查信息是否完整!')
        }
      })
    },
    close: function () {
      this.modelIsOpen = false
    }
  }
}
</script>
