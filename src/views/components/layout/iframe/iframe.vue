<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-06 14:44:42
 * @LastEditors  : Please set LastEditors
 -->
<template>
  <div>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-iframe :name="name" height="400px" width="100%" url="https://cn.vuejs.org/">
          </z-iframe>
        </z-col>
        <z-col span="12">
            <z-code-editor :content="demo1"></z-code-editor>
        </z-col>
      </z-row>
    </z-card>
  </div>
</template>

<script>
export default {
  name: 'cpIframe',
  data: function () {
    return {
      name: 'zIframeTest',
      demo1: '<z-iframe :name="name" height="400px" width="100%" url="https://www.iviewui.com/"></z-iframe>\r' +
              '<script>\r' +
              'export default{\r' +
              '    data: function(){\r' +
              '        return {\r' +
              '            name:\'zIframeTest\'\r' +
              '        }\r' +
              '    }\r' +
              ')\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r'
    }
  },
  computed: {
  }
}
</script>
<style scoped>
</style>
