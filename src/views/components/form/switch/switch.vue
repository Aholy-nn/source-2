<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-07 16:09:29
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-switch v-model="switch1" @on-change="change"></z-switch>
            <div class="example-desc">
                <header class="example-header"><span>基础用法</span></header>
                <div>基本用法，状态切换时会触发事件。</div>
            </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo1"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-switch size="large"></z-switch>
          <z-switch></z-switch>
          <z-switch size="small"></z-switch>
          <div class="example-desc">
              <header class="example-header"><span>尺寸</span></header>
              <div>
                  <p>设置<code>size</code>为 <code>large</code> 或 <code>small</code> 使用大号和小号的开关。</p>
              </div>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo2"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <z-switch>
                <span slot="open">开</span>
                <span slot="close">关</span>
            </z-switch>
            <z-switch>
                <Icon type="android-done" slot="open"></Icon>
                <Icon type="android-close" slot="close"></Icon>
            </z-switch>
            <br><br>
            <z-switch size="large">
                <span slot="open">开启</span>
                <span slot="close">关闭</span>
            </z-switch>
            <z-switch size="large">
                <span slot="open">ON</span>
                <span slot="close">OFF</span>
            </z-switch>
            <div class="example-desc">
                <header class="example-header"><span>文字和图标</span></header>
                <div>自定义内容，建议如果使用2个汉字，将开关尺寸设置为 large。</div>
            </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo3"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <z-switch :disabled="disabled"></z-switch>
            <z-button type="primary" @click="disabled = !disabled">Toggle Disabled</z-button>
            <div class="example-desc">
                <header class="example-header"><span>不可用</span></header>
                <div>禁用开关。</div>
            </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo4"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
    <div class="demo-api">
      <div class="anchor">
          <h2 id="API">API</h2>
      </div>
      <div class="anchor">
          <h3 id="Switch_props">Switch props</h3>
      </div>
      <table class="table">
          <thead>
              <tr>
                  <th>属性</th>
                  <th>说明</th>
                  <th>类型</th>
                  <th>默认值</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>value</td>
                  <td>指定当前是否选中，可以使用 v-model 双向绑定数据</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>size</td>
                  <td>开关的尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不写。建议开关如果使用了2个汉字的文字，使用
                      large。</td>
                  <td>String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>disabled</td>
                  <td>禁用开关</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>true-value</td>
                  <td>选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td>
                  <td>String, Number, Boolean</td>
                  <td>true</td>
              </tr>
              <tr>
                  <td>false-value</td>
                  <td>没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td>
                  <td>String, Number, Boolean</td>
                  <td>false</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3 id="Switch_events">Switch events</h3>
      </div>
      <table class="table">
          <thead>
              <tr>
                  <th>事件名</th>
                  <th>说明</th>
                  <th>返回值</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>on-change</td>
                  <td>开关变化时触发，返回当前的状态</td>
                  <td>true | false</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3 id="Switch_slot">Switch slot</h3>
      </div>
      <table class="table">
          <thead>
              <tr>
                  <th>名称</th>
                  <th>说明</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>open</td>
                  <td>自定义显示打开时的内容</td>
              </tr>
              <tr>
                  <td>close</td>
                  <td>自定义显示关闭时的内容</td>
              </tr>
          </tbody>
      </table>
    </div>
   </z-card>
</div>
</template>

<script>
export default {
  name: 'cpSwitch',
  data: function () {
    return {
      switch1: false,
      disabled: true,
      demo1: '<div>\r' +
              '    <z-switch v-model="switch1" @on-change="change"></z-switch>\r' +
              '</div>\r' +
              'export default {\r' +
              '    data: function () {\r' +
              '        return {\r' +
              '            switch1: false\r' +
              '       }\r' +
              '    },\r' +
              '    methods: {\r' +
              '        change: function (status) {\r' +
              '            this.$Message.info(\'开关状态：\' + status);\r' +
              '        }\r' +
              '    }\r' +
              '}\r',
      demo2: '<z-switch size="large"></z-switch>\r' +
              '<z-switch></z-switch>\r' +
              '<z-switch size="small"></z-switch>\r',
      demo3: '<z-switch>\r' +
              '    <span slot="open">开</span>\r' +
              '    <span slot="close">关</span>\r' +
              '</z-switch>\r' +
              '<z-switch>\r' +
              '    <Icon type="android-done" slot="open"></Icon>\r' +
              '    <Icon type="android-close" slot="close"></Icon>\r' +
              '</z-switch>\r' +
              '<br><br>\r' +
              '<z-switch size="large">\r' +
              '    <span slot="open">开启</span>\r' +
              '    <span slot="close">关闭</span>\r' +
              '</z-switch>\r' +
              '<z-switch size="large">\r' +
              '    <span slot="open">ON</span>\r' +
              '    <span slot="close">OFF</span>\r' +
              '</z-switch>\r',
      demo4: '<div>\r' +
              '    <z-switch :disabled="disabled"></z-switch>\r' +
              '    <z-button type="primary" @click="disabled = !disabled">Toggle Disabled</z-button>\r' +
              '</div>\r' +
              'export default {\r' +
              '    data:function () {\r' +
              '        return{\r' +
              '            disabled: true\r' +
              '        }\r' +
              '    }\r' +
              '}\r'
    }
  },
  methods: {
    change: function (status) {
      this.$Message.info('开关状态：' + status)
    }
  }
}
</script>
<style scoped>
</style>
