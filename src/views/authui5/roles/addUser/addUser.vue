<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-05-27 12:18:29
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-modal v-model="modelIsOpen" title="配置用户" fixed max-height="500" width="600">
    <z-vtree ref="addUserTree" :multiple="true" :option="options" choose-mode="some" @choose ="choose" v-model="value"></z-vtree>
   <div slot="footer" class="ilead-modal-footer">
    <z-button type="primary" icon="checkmark" @click="handleSubmit">提交</z-button>
    <z-button type="primary" ghost icon="close" @click="close" style="margin-left: 10px">关闭</z-button>
  </div>
</z-modal>
</template>
<script>
import rolesApi from '../api/api.js'
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
        dataMode: 'tree',
        getDatas: this.getDatas
      },
      roleId: '',
      loading: false
    }
  },
  watch: {
    modelIsOpen: function (val) {
      if (val) {
        this.reset()
        this.$refs.addUserTree.refresh()
      }
    }
  },
  methods: {
    choose: function (array) {
      array.forEach(item => {
        let chooseEl = document.getElementById(item.id)
        let hasChild = chooseEl.querySelector('.zvu-tree-ul')
        // 没有子元素，则展开节点
        if (item.isParent && !hasChild) {
          chooseEl.querySelector('.zvu-tree-show-expand').children[0].click()
        }
      })
    },
    getDatas: function (parent, resolve) {
      if (!this.roleId) { return }
      let that = this
      setTimeout(() => {
        let params = {}
        if (!parent) {
          params = {roleId: that.roleId}
        } else {
          if (!parent.isParent) { return }
          params = {id: parent.id, name: parent.name, roleId: that.roleId}
        }
        rolesApi.getOrgUserTree(params).then(function (response) {
          let data = response.data
          for (let i = 0; i < data.length; i++) {
            if (data[i].checked) {
              that.value.push(data[i].id)
            }
          }
          that.$nextTick(function () {
            data.forEach((item) => {
              if (item.checked && item.isParent) {
                document.getElementById(item.id).children[0].children[0].children[0].click()
              }
            })
          })
          resolve(data)
        })
      }, 100)
    },
    reset: function () {
      this.value = []
    },
    handleSubmit: function () {
      let that = this
      let choose = this.$refs['addUserTree'].getChoose()
      let ids = ''
      for (let i = 0; i < choose.length; i++) {
        if (choose[i].type === 'user') {
          ids += choose[i].id.substring(3) + ','
        }
      }
      if (ids.length > 0) {
        ids = ids.substring(0, ids.length - 1)
      }
      this.loading = true
      rolesApi.saveUserRoleInfo({'userIds': ids, 'roleId': that.roleId}).then(function (response) {
        if (response.data.code === '1') {
          that.$Message.success('配置用户成功！')
          that.loading = false
          that.modelIsOpen = false
        } else {
          that.loading = false
          that.$Message.error('配置用户发生异常，请联系管理员！')
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
