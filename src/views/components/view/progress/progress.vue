<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-08 11:21:00
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
    <z-row :gutter="15">
      <z-col span="12">
        <z-progress :percent="25"></z-progress>
        <z-progress :percent="45" status="active"></z-progress>
        <z-progress :percent="65" status="wrong"></z-progress>
        <z-progress :percent="100"></z-progress>
        <z-progress :percent="25" hide-info></z-progress>
        <div class="example-desc">
            <header class="example-header"><span>基础用法</span></header>
            <p>处在不同状态下的进度条，当 percent 为 100 时，自动将状态置为 success。</p>
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
         <div style="height: 100px;">
            <z-progress vertical :percent="25"></z-progress>
            <z-progress vertical :percent="45" status="active"></z-progress>
            <z-progress vertical :percent="65" status="wrong"></z-progress>
            <z-progress vertical :percent="100"></z-progress>
            <z-progress vertical :percent="25" hide-info></z-progress>
        </div>
        <div class="example-desc">
            <header class="example-header"><span>垂直方向</span></header>
            <p>设置属性 vertical 将以垂直方向显示。</p>
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
         <div style="height: 100px;">
            <z-progress :percent="percent"></z-progress>
            <z-button-group size="large">
                <z-button icon="ios-plus-empty" @click="add"></z-button>
                <z-button icon="ios-minus-empty" @click="minus"></z-button>
            </z-button-group>
          </div>
          <div class="example-desc">
              <header class="example-header"><span>配合外部组件使用</span></header>
              <p>通过数据的联动和逻辑控制，实现动态效果。</p>
          </div>
      </z-col>
        <z-col span="12">
          <z-code-editor :content="demo3"></z-code-editor>
      </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
     <div class="demo-api">
      <div class="anchor">
          <h2 id="API">API</h2>
      </div>
      <div class="anchor">
          <h3 id="Progress_props">Progress props</h3>
      </div>
      <table>
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
                  <td>percent</td>
                  <td>百分比</td>
                  <td>Number</td>
                  <td>0</td>
              </tr>
              <tr>
                  <td>status</td>
                  <td>状态，可选值为<code>normal</code>、<code>active</code>、<code>wrong</code>、<code>success</code>
                  </td>
                  <td>String</td>
                  <td>normal</td>
              </tr>
              <tr>
                  <td>stroke-width</td>
                  <td>进度条的线宽，单位 px</td>
                  <td>Number</td>
                  <td>10</td>
              </tr>
              <tr>
                  <td>hide-info</td>
                  <td>隐藏数值或状态图标</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>vertical</td>
                  <td>是否在垂直方向显示</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3 id="Progress_slot">Progress slot</h3>
      </div>
      <table>
          <thead>
              <tr>
                  <th>名称</th>
                  <th>说明</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>无</td>
                  <td>自定义显示状态内容</td>
              </tr>
          </tbody>
      </table>
  </div>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpProgress',
  data: function () {
    return {
      percent: 0,
      demo1: '<z-progress :percent="25"></z-progress>\r' +
              '<z-progress :percent="45" status="active"></z-progress>\r' +
              '<z-progress :percent="65" status="wrong"></z-progress>\r' +
              '<z-progress :percent="100"></z-progress>\r' +
              '<z-progress :percent="25" hide-info></z-progress>\r',
      demo2: '<z-progress vertical :percent="25"></z-progress>\r' +
              '<z-progress vertical :percent="45" status="active"></z-progress>\r' +
              '<z-progress vertical :percent="65" status="wrong"></z-progress>\r' +
              '<z-progress vertical :percent="100"></z-progress>\r' +
              '<z-progress vertical :percent="25" hide-info></z-progress>\r',
      demo3: ' <z-progress :percent="percent"></z-progress>\r' +
              '<z-button-group size="large">\r' +
              '    <z-button icon="ios-plus-empty" @click="add"></z-button>\r' +
              '    <z-button icon="ios-minus-empty" @click="minus"></z-button>\r' +
              'export default {\r' +
              '    methods: {\r' +
              '   add:function() {\r' +
              '        if (this.percent >= 100) {\r' +
              '            return false;\r' +
              '        }\r' +
              '        this.percent += 10;\r' +
              '    },\r' +
              '    minus:function() {\r' +
              '        if (this.percent <= 0) {\r' +
              '            return false;\r' +
              '        }\r' +
              '        this.percent -= 10;\r' +
              '    }\r' +
              '   }\r' +
              '}\r' +
              '</z-button-group>\r',
      demo4: '<z-progress :percent="25" :stroke-width="5"></z-progress>\r' +
            '<z-progress :percent="100">\r' +
            '    <z-icon type="checkmark-circled"></z-icon>\r' +
            '    <span>成功</span>\r' +
            '</z-progress>\r'
    }
  },
  methods: {
    add: function () {
      if (this.percent >= 100) {
        return false
      }
      this.percent += 10
    },
    minus: function () {
      if (this.percent <= 0) {
        return false
      }
      this.percent -= 10
    }
  }
}
</script>
<style scoped>
</style>
