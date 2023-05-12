<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
     <z-alert type="error" v-if="errorMsg">{{errorMsg}}</z-alert>
     <z-form ref="editProducerMessage" :model="editProducerMessageModel" :label-width="100" label-position="left" class="ilead-modal-form per-center">
        <z-form-item label="发送状态"  prop="sendState">
               <z-select v-model="editProducerMessageModel.sendState" clearable :disabled="isStateDisable" transfer>
                <z-option value="0">未发送</z-option>
                <z-option value="1">发送成功</z-option>
                <z-option value="2">发送失败</z-option>
            </z-select>
        </z-form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
        <z-button type="primary" icon="checkmark" @click="handleSubmit()">提交</z-button>
    </div>
</z-modal>
</template>
<script>
import producerMessageApi from './api/api.js'
export default {
  name: 'editProducerMessage',
  data: function () {
    return {
      modelIsOpen: false,
      isStateDisable: '',
      editProducerMessageModel: {
        sendState: '',
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
      this.editProducerMessageModel.sendState = data.sendState
      this.editProducerMessageModel.messageId = data.messageId
    },
    handleSubmit: function (name) {
      let that = this
      producerMessageApi.producerMessageInfoUpdate(that.editProducerMessageModel).then(function (response) {
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
