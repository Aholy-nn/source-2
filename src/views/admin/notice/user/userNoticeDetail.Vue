<template>
<z-modal v-model="modelIsOpen" :title="title" fixed max-height="500" width="600">
     <z-form ref="noticeDetail" :model="noticeDetail" :label-width="100" label-position="left" class="ilead-modal-form per-center">
        <z-form-item label="公告标题"  prop="noticeTitle">
            <z-input v-model="noticeDetail.noticeTitle" :maxlength="40" readonly clearable></z-input>
        </z-form-item>
        <z-form-item label="公告内容"  prop="noticeContent">
            <z-input v-model="noticeDetail.noticeContent" type="textarea" :autosize="{minRows: 2,maxRows: 5}" readonly clearable></z-input>
        </z-form-item>
        <z-form-item label="发送人"  prop="sendBy">
            <z-input v-model="noticeDetail.sendBy" :maxlength="40" readonly clearable></z-input>
        </z-form-item>
        <z-form-item label="发送时间"  prop="sendDate">
            <z-input v-model="noticeDetail.sendDate" readonly clearable></z-input>
        </z-form-item>
        <z-form-item label="失效时间"  prop="expireTime">
            <z-input v-model="noticeDetail.expireTime" readonly clearable></z-input>
        </z-form-item>
        <z-form-item label="公告状态"  prop="noticeStatus">
            <z-input v-model="noticeDetail.noticeStatus" readonly clearable></z-input>
        </z-form-item>
    </z-form>
    <div slot="footer" class="ilead-modal-footer">
    </div>
     <!-- 弹出 -->
</z-modal>
</template>
<script>
export default {
  name: 'adminNoticeDetail',
  data: function () {
    return {
      modelIsOpen: false,
      title: '公告详情',
      noticeDetail: {
        noticeTitle: '',
        noticeContent: '',
        sendBy: '',
        sendDate: '',
        expireTime: '',
        noticeStatus: ''
      }
    }
  },
  created: function () {
  },
  methods: {
    // 获取父数据
    getData: function (data) {
      this.noticeDetail.noticeTitle = data.noticeTitle
      this.noticeDetail.noticeContent = data.noticeContent
      this.noticeDetail.sendBy = data.sendBy
      this.noticeDetail.sendDate = data.sendDate
      this.noticeDetail.expireTime = data.expireTime
      switch (data.noticeStatus) {
        case '0':
          this.noticeDetail.noticeStatus = '未读'
          break
        case '1':
          this.noticeDetail.noticeStatus = '已读'
          break
      }
    }
  }
}
</script>
