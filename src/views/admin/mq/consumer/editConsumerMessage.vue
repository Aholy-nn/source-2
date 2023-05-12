<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
     <z-alert type="error" v-if="errorMsg">{{errorMsg}}</z-alert>
     <z-form ref="editConsumerMessage" :model="editConsumerMessageModel" :label-width="100" label-position="left" class="ilead-modal-form per-center">
        <z-form-item label="消费状态"  prop="processState">
               <z-select v-model="editConsumerMessageModel.processState" clearable :disabled="isStateDisable" transfer>
                <z-option value="0">状态未知</z-option>
                <z-option value="1">处理成功</z-option>
                <z-option value="2">处理失败</z-option>
            </z-select>
        </z-form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit()">提交</z-button>
    </div>
     <!-- 弹出 -->
</z-modal>
</template>
<script>
import consumerMessageApi from './api/api.js'
export default {
  name: 'editConsumerMessage',
  data: function () {
    return {
      modelIsOpen: false,
      isStateDisable: '',
      editConsumerMessageModel: {
        processState: '',
        messageId: ''
      },
      errorMsg: ''
    }
  },
  props: {
    title: {
      type: String
    }
  },
  created: function () {
  },
  methods: {
    // 获取父数据
    getData: function (data) {
      this.editConsumerMessageModel.processState = data.processState
      this.editConsumerMessageModel.messageId = data.messageId
    },
    handleSubmit: function (name) {
      let that = this
      consumerMessageApi.consumerMessageInfoUpdate(that.editConsumerMessageModel).then(function (response) {
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
</script>
