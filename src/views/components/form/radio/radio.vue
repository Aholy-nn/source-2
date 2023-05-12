<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-07 16:20:12
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-radio v-model="single">Radio</z-radio>
          <div class="example-desc">
              <header class="example-header"><span>基础用法</span></header>
              <div>
                  <p>使用 v-model 可以双向绑定数据。</p>
              </div>
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
          <z-radio-group v-model="phone">
            <z-radio label="apple">
                <z-icon type="social-apple"></z-icon>
                <span>Apple</span>
            </z-radio>
            <z-radio label="android">
                <z-icon type="social-android"></z-icon>
                <span>Android</span>
            </z-radio>
            <z-radio label="windows">
                <z-icon type="social-windows"></z-icon>
                <span>Windows</span>
            </z-radio>
        </z-radio-group>
        <z-radio-group v-model="animal">
            <z-radio label="金斑蝶"></z-radio>
            <z-radio label="爪哇犀牛"></z-radio>
            <z-radio label="印度黑羚"></z-radio>
        </z-radio-group>
        <div class="example-desc">
            <header class="example-header"><span>组合使用</span></header>
            <div>
                <p>使用<code>RadioGroup</code>实现一组互斥的选项组。在组合使用时，
                    <code>Radio</code> 使用
                    <code>label</code> 来自动判断。每个 Radio 的内容可以自定义，如不填写则默认使用 label 的值。
                </p>
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
          <z-radio v-model="disabledSingle" disabled>Radio</z-radio>
            <z-radio-group v-model="disabledGroup">
                <z-radio label="金斑蝶" disabled></z-radio>
                <z-radio label="爪哇犀牛"></z-radio>
                <z-radio label="印度黑羚"></z-radio>
            </z-radio-group>
            <div class="example-desc">
                <header class="example-header"><span>不可用</span></header>
                <div>
                    <p>通过设置<code>disabled</code>属性来禁用单选框。</p>
                </div>
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
          <z-radio-group v-model="vertical" vertical>
              <z-radio label="apple">
                  <z-icon type="social-apple"></z-icon>
                  <span>Apple</span>
              </z-radio>
              <z-radio label="android">
                  <z-icon type="social-android"></z-icon>
                  <span>Android</span>
              </z-radio>
              <z-radio label="windows">
                  <z-icon type="social-windows"></z-icon>
                  <span>Windows</span>
              </z-radio>
          </z-radio-group>
          <div class="example-desc">
              <header class="example-header"><span>垂直</span></header>
              <div>
                  <p>设置属性 <code>vertical</code> 可以垂直显示，按钮样式下无效。</p>
              </div>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo4"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-radio-group v-model="button1" type="button">
              <z-radio label="北京"></z-radio>
              <z-radio label="上海"></z-radio>
              <z-radio label="深圳"></z-radio>
              <z-radio label="杭州"></z-radio>
          </z-radio-group>
          <br><br>
          <z-radio-group v-model="button2" type="button">
              <z-radio label="北京"></z-radio>
              <z-radio label="上海" disabled></z-radio>
              <z-radio label="深圳"></z-radio>
              <z-radio label="杭州"></z-radio>
          </z-radio-group>
          <br><br>
          <z-radio-group v-model="button3" type="button">
              <z-radio label="北京" disabled></z-radio>
              <z-radio label="上海" disabled></z-radio>
              <z-radio label="深圳" disabled></z-radio>
              <z-radio label="杭州" disabled></z-radio>
          </z-radio-group>
          <div class="example-desc">
              <header class="example-header"><span>按钮样式</span></header>
              <div>
                  <p>组合使用时可以设置属性<code>type</code>为 button 来应用按钮的样式。</p>
              </div>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo5"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-radio-group v-model="button4" type="button" size="large">
              <z-radio label="北京"></z-radio>
              <z-radio label="上海"></z-radio>
              <z-radio label="深圳"></z-radio>
              <z-radio label="杭州"></z-radio>
          </z-radio-group>
          <br><br>
          <z-radio-group v-model="button5" type="button">
              <z-radio label="北京"></z-radio>
              <z-radio label="上海"></z-radio>
              <z-radio label="深圳"></z-radio>
              <z-radio label="杭州"></z-radio>
          </z-radio-group>
          <br><br>
          <z-radio-group v-model="button6" type="button" size="small">
              <z-radio label="北京"></z-radio>
              <z-radio label="上海"></z-radio>
              <z-radio label="深圳"></z-radio>
              <z-radio label="杭州"></z-radio>
          </z-radio-group>
          <div class="example-desc">
              <header class="example-header"><span>尺寸</span></header>
              <div>
                  <p>通过设置属性<code>size</code>为<code>large</code>或
                      <code>small</code>将按钮样式设置为大和小尺寸，不设置为默认(中)尺寸。
                  </p>
              </div>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo6"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <div class="demo-api">
        <div class="anchor">
            <h2 id="API">API</h2>
        </div>
        <div class="anchor">
            <h3 id="Radio_props">Radio props</h3>
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
            <tbody class="table">
                <tr>
                    <td>value</td>
                    <td>只在单独使用时有效。可以使用 <code>v-model</code> 双向绑定数据</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>label </td>
                    <td>只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目</td>
                    <td>String | Number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>是否禁用当前项</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>单选框的尺寸，可选值为 <code>large</code>、<code>small</code>、<code>default</code> 或者不设置
                    </td>
                    <td>String</td>
                    <td>-</td>
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
            <h3 id="Radio_events">Radio events</h3>
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
                    <td>在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发</td>
                    <td>...</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="RadioGroup_props">RadioGroup props</h3>
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
                    <td>指定当前选中的项目数据。可以使用 <code>v-model</code> 双向绑定数据</td>
                    <td>String | Number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>可选值为 button 或不填，为 button 时使用按钮样式</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>vertical</td>
                    <td>是否垂直排列，按钮样式下无效</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="RadioGroup_events">RadioGroup events</h3>
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
                    <td>在选项状态发生改变时触发，返回当前选中的项。通过修改外部的数据改变时不会触发</td>
                    <td>...</td>
                </tr>
            </tbody>
        </table>
    </div>
   </z-card>
</div>
</template>

<script>
export default {
  name: 'cpRadio',
  data: function () {
    return {
      single: false,
      phone: 'apple',
      animal: '爪哇犀牛',
      disabledSingle: true,
      disabledGroup: '爪哇犀牛',
      vertical: 'apple',
      button1: '北京',
      button2: '北京',
      button3: '北京',
      button4: '北京',
      button5: '北京',
      button6: '北京',
      demo1: '<div>\r' +
              '        <z-radio v-model="single">Radio</z-radio>\r' +
              '    </div>\r' +
              'export default {\r' +
              '    data:function () {\r' +
              '        return{\r' +
              '            single: false\r' +
              '        }\r' +
              '    }\r' +
              '}\r',
      demo2: '<div>\r' +
              '    <z-radio-group v-model="phone">\r' +
              '    <z-radio label="apple">\r' +
              '       <z-icon type="social-apple"></z-icon>\r' +
              '        <span>Apple</span>\r' +
              '    </z-radio>\r' +
              '    <z-radio label="android">\r' +
              '        <z-icon type="social-android"></z-icon>\r' +
              '        <span>Android</span>\r' +
              '    </z-radio>\r' +
              '    <z-radio label="windows">\r' +
              '        <z-icon type="social-windows"></z-icon>\r' +
              '        <span>Windows</span>\r' +
              '    </z-radio>\r' +
              '</z-radio-group>\r' +
              '<z-radio-group  v-model="animal">\r' +
              '    <z-radio label="金斑蝶"></z-radio>\r' +
              '    <z-radio label="爪哇犀牛"></z-radio>\r' +
              '    <z-radio label="印度黑羚"></z-radio>\r' +
              '</z-radio-group>\r' +
              '</div>\r' +
              'export default {\r' +
              '    data:function () {\r' +
              '        return{\r' +
              '            phone: \'apple\',\r' +
              '            animal: \'爪哇犀牛\'\r' +
              '        }\r' +
              '    }\r' +
              '}\r',
      demo3: '<div>\r' +
              '    <z-radio v-model="disabledSingle" disabled>Radio</z-radio>\r' +
              '<z-radio-group v-model="disabledGroup">\r' +
              '    <z-radio label="金斑蝶" disabled></z-radio>\r' +
              '    <z-radio label="爪哇犀牛"></z-radio>\r' +
              '    <z-radio label="印度黑羚"></z-radio>\r' +
              '</z-radio-group>\r' +
              '</div>\r' +
              'export default {\r' +
              '    data:function () {\r' +
              '        return{\r' +
              '            disabledSingle: true,\r' +
              '            disabledGroup: \'爪哇犀牛\'\r' +
              '        }\r' +
              '     }\r' +
              '}\r',
      demo4: '<div>\r' +
              '        <z-radio-group v-model="vertical" vertical>\r' +
              '        <z-radio label="apple">\r' +
              '            <z-icon type="social-apple"></z-icon>\r' +
              '            <span>Apple</span>\r' +
              '        </z-radio>\r' +
              '        <z-radio label="android">\r' +
              '            <z-icon type="social-android"></z-icon>\r' +
              '            <span>Android</span>\r' +
              '        </z-radio>\r' +
              '        <z-radio label="windows">\r' +
              '            <z-icon type="social-windows"></z-icon>\r' +
              '            <span>Windows</span>\r' +
              '        </z-radio>\r' +
              '    </z-radio-group>\r' +
              ' </div>\r' +
              'export default {\r' +
              '    data:function () {\r' +
              '        return{\r' +
              '            vertical: \'apple\'\r' +
              '        }\r' +
              '    }\r' +
              '}\r',
      demo5: '<div>\r' +
              '        <z-radio-group v-model="button1" type="button">\r' +
              '        <z-radio label="北京"></z-radio>\r' +
              '        <z-radio label="上海"></z-radio>\r' +
              '        <z-radio label="深圳"></z-radio>\r' +
              '        <z-radio label="杭州"></z-radio>\r' +
              '    </z-radio-group>\r' +
              '    <br><br>\r' +
              '    <z-radio-group v-model="button2" type="button">\r' +
              '        <z-radio label="北京"></z-radio>\r' +
              '        <z-radio label="上海" disabled></z-radio>\r' +
              '        <z-radio label="深圳"></z-radio>\r' +
              '        <z-radio label="杭州"></z-radio>\r' +
              '    </z-radio-group>\r' +
              '    <br><br>\r' +
              '    <z-radio-group v-model="button3" type="button">\r' +
              '        <z-radio label="北京" disabled></z-radio>\r' +
              '        <z-radio label="上海" disabled></z-radio>\r' +
              '        <z-radio label="深圳" disabled></z-radio>\r' +
              '        <z-radio label="杭州" disabled></z-radio>\r' +
              '    </z-radio-group>\r' +
              '</div>\r' +
              'export default {\r' +
              '    data:function () {\r' +
              '        return{\r' +
              '                button1: \'北京\',\r' +
              '                button2: \'北京\',\r' +
              '                button3: \'北京\'\r' +
              '        }\r' +
              '    }\r' +
              '}\r',
      demo6: '<div>\r' +
              '    <z-radio-group v-model="button4" type="button" size="large">\r' +
              '        <z-radio label="北京"></z-radio>\r' +
              '        <z-radio label="上海"></z-radio>\r' +
              '        <z-radio label="深圳"></z-radio>\r' +
              '       <z-radio label="杭州"></z-radio>\r' +
              '   </z-radio-group>\r' +
              '    <br><br>\r' +
              '    <z-radio-group v-model="button5" type="button">\r' +
              '        <z-radio label="北京"></z-radio>\r' +
              '        <z-radio label="上海"></z-radio>\r' +
              '        <z-radio label="深圳"></z-radio>\r' +
              '        <z-radio label="杭州"></z-radio>\r' +
              '   </z-radio-group>\r' +
              '    <br><br>\r' +
              '    <z-radio-group v-model="button6" type="button" size="small">\r' +
              '        <z-radio label="北京"></z-radio>\r' +
              '        <z-radio label="上海"></z-radio>\r' +
              '        <z-radio label="深圳"></z-radio>\r' +
              '        <z-radio label="杭州"></z-radio>\r' +
              '    </z-radio-group>\r' +
              '</div>\r' +
              'export default {\r' +
              '    data:function () {\r' +
              '        return{\r' +
              '            button4: \'北京\',\r' +
              '            button5: \'北京\',\r' +
              '            button6: \'北京\'\r' +
              '        }\r' +
              '    }\r' +
              '}\r'
    }
  }
}
</script>
<style scoped>
</style>
