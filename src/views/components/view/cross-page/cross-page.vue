<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-08 11:18:11
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
            <z-cross-page ref="child" :items="items"></z-cross-page>
            <z-button type="primary" @click.native="add">add</z-button>
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
  name: 'cpCrossPage',
  data: function () {
    return {
      items: [
        { id: '0', text: '第一行' },
        { id: '0', text: '第二行' },
        { id: '0', text: '。。。' },
        { id: '0', text: '第N行' }
      ],
      demo1: '<z-cross-page ref="child" :items="items"></z-cross-page>\r' +
                        '<z-button type="primary" @click.native="add">add</z-button>\r' +
                        '<script>\r' +
                        'export default {\r' +
                        '    data : function(){\r' +
                        '        return {\r' +
                        '            items: [\r' +
                        '                { id: "0", text: \'第一行\' },\r' +
                        '                { id: "0", text: \'第二行\' },\r' +
                        '                { id: "0", text: \'。。。\' },\r' +
                        '                { id: "0", text: \'第N行\' }\r' +
                        '            ]\r' +
                        '        }\r' +
                        '    },\r' +
                        '    methods : {\r' +
                        '        add(){\r' +
                        '            this.items.push({id:\'1\',text:"NewRow"})\r' +
                        '            this.$refs.child.moveRight()\r' +
                        '        }\r' +
                        '    }\r' +
                        '}\r' +
                        // eslint-disable-next-line no-useless-escape
                        '<\/script>\r'
    }
  },
  methods: {
    add () {
      this.items.push({id: '1', text: 'NewRow'})
      this.$refs.child.moveRight()
    }
  }
}
</script>
<style scoped>
</style>
