
/*
 * @Author: your name
 * @Date: 2020-06-12 16:21:57
 * @LastEditTime: 2020-06-15 09:17:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\components\framework\vxe-table-extend\index.js
 */
export default {
  methods: {
    onTableRefresh: function () {
      this.$emit('on-table-refresh')
    }
  },
  mounted: function () {
  }
}
