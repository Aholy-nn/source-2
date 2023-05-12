<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-07 16:21:27
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <z-rate show-text allow-half :count="count" :disabled="disabled"
              v-model="valueCustomText" @on-change="change">
              <span style="color: #f5a623">{{ valueCustomText }}</span>
          </z-rate>
          <div class="example-desc">
              <header class="example-header"><span>基础用法</span></header>
              <p>* 设置属性 count 可以这只星数，默认为5。</p>
              <p>* 设置属性 allow-half 可以选中半星。</p>
              <p>* 设置属性 show-text 可以显示提示文字。</p>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo1"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
    <div class="demo-api">
      <div class="anchor">
          <h2 id="API">API</h2>
      </div>
      <div class="anchor">
          <h3 id="Rate_props">Rate props</h3>
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
                  <td>count</td>
                  <td>star 总数</td>
                  <td>Number</td>
                  <td>5</td>
              </tr>
              <tr>
                  <td>value</td>
                  <td>当前 star 数，可以使用 v-model 双向绑定数据</td>
                  <td>Number</td>
                  <td>0</td>
              </tr>
              <tr>
                  <td>allow-half</td>
                  <td>是否允许半选</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>disabled</td>
                  <td>是否只读，无法进行交互</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>show-text</td>
                  <td>是否显示提示文字</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>clearable</td>
                  <td>是否可以取消选择</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3 id="Rate_events">Rate events</h3>
      </div>
      <table>
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
                  <td>评分改变时触发</td>
                  <td>value</td>
              </tr>
          </tbody>
      </table>
  </div>
   </z-card>
</div>
</template>

<script>
export default {
  name: 'cpRate',
  data: function () {
    return {
      count: 7,
      valueCustomText: 3.8,
      disabled: false,
      demo1: '<div>\r' +
              '    <z-rate show-text allow-half :count="count" :disabled="disabled" v-model="valueCustomText"\r' +
              '        @on-change="change">\r' +
              '        <span style="color: #f5a623">{ { valueCustomText } }</span>\r' +
              '    </z-rate>\r' +
              '</div>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '            count:7,\r' +
              '            valueCustomText: 3.8,\r' +
              '            disabled:false\r' +
              '        }\r' +
              '    },\r' +
              '    methods: {\r' +
              '        change:function () {\r' +
              '        }\r' +
              '    }\r' +
              '}\r'
    }
  },
  methods: {
    change: function () {}
  }
}
</script>
<style scoped>
</style>
