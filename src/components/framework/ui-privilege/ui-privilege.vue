<!--
 * @Author: your name
 * @Date: 2019-11-25 14:16:45
 * @LastEditTime: 2020-05-28 12:21:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ilead-ui\ilead4admin-ui\src\components\ui-privilege\ui-privilege.vue
 -->
<template>
  <span v-if="isshow"><slot v-if="isshow"></slot></span>
</template>
<script>
import fAPI from '@/api/framework/index'
import {commonUtils} from 'ilead-utils'
import i18n from '@/locale'
export default {
  name: 'ui-privilege',
  props: {
    url: {}
  },
  data: function () {
    return {
      isshow: false
    }
  },
  mounted () {
    var that = this
    var param = {}
    if (commonUtils.isString(this.url)) {
      param = {'privilegeUrl': [this.url]}
    } else if (commonUtils.isArray(this.url)) {
      param = {'privilegeUrl': this.url}
    } else {
      console.log(i18n.t('framework.message.uiPriFailForUrlTypeError'))
    }
    setTimeout(function () {
      if (that.url) {
        fAPI.checkPrivileges(param).then(function (response) {
          var flag = response.data.data[that.url]
          if (flag === 'true') {
            that.isshow = true
          } else {
            that.isshow = false
          }
        }).catch(function (error) {
          console.log(error)
        })
      } else {
        console.log(i18n.t('framework.message.uiPriFailForLackUrlError'))
      }
    }, 500)
  }
}
</script>
