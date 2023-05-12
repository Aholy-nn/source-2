<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-01 14:32:50
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" title="配置资源" fixed max-height="500" width="600">
        <z-vtree ref="addResTree" :multiple="true" :option="options"  choose-mode="some" @choose="choose" v-model="value"></z-vtree>
   <div slot="footer" class="ilead-modal-footer">
    <z-button type="primary" icon="checkmark" @click="handleSubmit">提交</z-button>
    <z-button type="primary" ghost icon="close" @click="close" style="margin-left: 10px">关闭</z-button>
  </div>
</z-modal>
</template>
<script>
import akSkApi from '../api/api.js'
export default {
  name: 'addUser',
  data: function () {
    return {
      modelIsOpen: false,
      value: [],
      options: {
        keyName: 'id',
        parentName: 'pId',
        titleName: 'name',
        dataMode: 'list',
        datas: []
      },
      keyId: '',
      treeLoading: false
    }
  },
  methods: {
    query: function () {
      let that = this
      this.treeLoading = true
      var param = {'akskId': this.keyId}
      akSkApi.akSkResTree(param).then(function (response) {
        let data = response.data
        let value = []
        for (let i = 0; i < data.length; i++) {
          if (data[i].checked) {
            value.push(data[i].id)
          }
        }
        that.treeLoading = false
        that.value = value
        that.options.datas = data
      }).catch(function (error) {
        console.log(error)
      })
    },

    choose: function (val) {
    },
    reset: function () {
      this.value = []
      this.options.datas = []
    },
    handleSubmit: function () {
      let that = this
      let choose = this.$refs['addResTree'].getChoose()
      let ids = ''
      for (let i = 0; i < choose.length; i++) {
        ids += choose[i].id + ','
      }
      if (ids.length > 0) {
        ids = ids.substring(0, ids.length - 1)
      }
      var param = {'resIds': ids, 'akskId': this.keyId}
      akSkApi.saveAkResInfo(param).then(function (response) {
        if (response.data.code === '1') { // 保存成功
          that.$Message.success('提交成功')
          that.modelIsOpen = false
        } else { // 失败
          that.$Message.error(response.data.msg)
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    close: function () {
      this.modelIsOpen = false
    }
  }
}
</script>
