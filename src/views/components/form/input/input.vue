/* eslint-disable vue/no-parsing-error */
<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-03-17 16:31:43
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <z-input v-model="value" placeholder="Enter something..." style="width: 300px"></z-input>
            <div class="example-desc">
                <header class="example-header"><span>基础用法</span></header>
                <div>
                    <p>基本用法，可以使用 <code>v-model</code> 实现数据的双向绑定。</p>
                    <p>可以直接设置 style 来改变输入框的宽度，默认 100%。</p>
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
          <z-input v-model="value14" placeholder="Enter something..." clearable style="width: 200px">
          </z-input>
          <div class="example-desc">
              <header class="example-header"><span>可清空 </span></header>
              <div>
                  <p>开启属性 clearable 可显示清空按钮。</p>
              </div>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo9"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <z-input v-model="value1" size="large" style="width: 300px" placeholder="large size">
            </z-input>
            <br><br>
            <z-input v-model="value2" style="width: 300px" placeholder="default size"></z-input>
            <br><br>
            <z-input v-model="value3" size="small" style="width: 300px" placeholder="small size">
            </z-input>
             <div class="example-desc">
                <header class="example-header"><span>尺寸</span></header>
                <div>
                    <p>输入框有三种尺寸：大、默认（中）、小</p>
                    <p>通过设置<code>size</code>为<code>large</code>和<code>small</code>设置为大和小尺寸，不设置为默认（中）尺寸。
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
          <z-input v-model="value16" maxlength="10" show-word-limit placeholder="Enter something..."
              style="width: 200px"></z-input>
          <z-input v-model="value17" maxlength="100" show-word-limit type="textarea"
              placeholder="Enter something..." style="width: 200px"></z-input>
          <div class="example-desc">
              <header class="example-header"><span>输入长度限制</span></header>
              <div>
                  <p>开启属性 show-word-limit 可以显示字数统计，需配合 maxlength 属性来限制输入长度。</p>
              </div>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo10"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <z-input v-model="value18" type="password" password placeholder="Enter something..."
                style="width: 200px"></z-input>
            <div class="example-desc">
                <header class="example-header"><span>密码框</span></header>
                <div>
                    <p>在 type="password" 时，开启属性 password 可以切换显示隐藏密码。</p>
                </div>
            </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo11"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <div>
              Props：<br>
              <z-input prefix="ios-contact" placeholder="Enter name" style="width: auto"></z-input>
              <z-input suffix="ios-search" placeholder="Enter text" style="width: auto"></z-input>
          </div>
          <div style="margin-top: 6px">
              Slots：<br>
              <z-input placeholder="Enter name" style="width: auto">
                  <z-icon type="ios-contact" slot="prefix"></z-icon>
              </z-input>
              <z-input placeholder="Enter text" style="width: auto">
                  <z-icon type="ios-search" slot="suffix"></z-icon>
              </z-input>
          </div>
          <div class="example-desc">
              <header class="example-header"><span>前缀和后缀图标</span></header>
              <div>
                  <p>除了设置 icon，也可以通过设置 prefix 和 suffix 及同名 slot 设置前缀及后缀图标。</p>
              </div>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo12"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <div>
              <z-input search placeholder="Enter something..."></z-input>
              <z-input search enter-button placeholder="Enter something..."></z-input>
              <z-input search enter-button="Search" placeholder="Enter something..."></z-input>
          </div>
          <div class="example-desc">
              <header class="example-header"><span>搜索框</span></header>
              <div>
                  <p>开启 search 属性，可以设置为搜索型输入框。</p>
              </div>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo13"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-input v-model="value4" icon="ios-clock-outline" placeholder="Enter something..."
              style="width: 300px"></z-input>
          <div class="example-desc">
              <header class="example-header"><span>带Icon的输入框</span></header>
              <div>
                  <p>通过 <code>icon</code> 属性可以在输入框右边加一个图标。</p>
                  <p>点击图标，会触发 <code>on-click</code> 事件。</p>
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
          <z-input v-model="value5" type="textarea" placeholder="Enter something..."></z-input>
            <br><br>
            <z-input v-model="value6" type="textarea" :rows="4" placeholder="Enter something...">
            </z-input>
            <div class="example-desc">
                <header class="example-header"><span>文本域</span></header>
                <div>
                    <p>通过设置属性 <code>type</code> 为 <code>textarea</code> 来使用文本域，用于多行输入。</p>
                    <p>通过设置属性 <code>rows</code> 控制文本域默认显示的行数。</p>
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
           <z-input v-model="value7" type="textarea" :autosize="true" placeholder="Enter something...">
            </z-input>
            <br><br>
            <z-input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                placeholder="Enter something..."></z-input>
            <div class="example-desc">
                <header class="example-header"><span>适应文本高度的文本域</span></header>
                <div>
                    <p>设置属性 <code>autosize</code>，文本域会自动适应高度的变化。</p>
                    <p><code>autosize</code>也可以设定为一个对象，指定最小行数和最大行数。</p>
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
           <z-input v-model="value9" disabled placeholder="Enter something..."></z-input>
            <br><br>
            <z-input v-model="value10" disabled type="textarea" placeholder="Enter something...">
            </z-input>
            <div class="example-desc">
                <header class="example-header"><span>禁用状态</span></header>
                <div>
                    <p>通过添加<code>disabled</code>属性可设置为不可用状态。</p>
                </div>
            </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo6"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-input v-model="value11">
                <span slot="prepend">http://</span>
                <span slot="append">.com</span>
            </z-input>
            <br>
            <z-input v-model="value12">
                <z-select v-model="select1" slot="prepend" style="width: 80px">
                    <z-option value="http">http://</z-option>
                    <z-option value="https">https://</z-option>
                </z-select>
                <z-select v-model="select2" slot="append" style="width: 70px">
                    <z-option value="com">.com</z-option>
                    <z-option value="org">.org</z-option>
                    <z-option value="io">.io</z-option>
                </z-select>
            </z-input>
            <br>
            <z-input v-model="value13">
                <z-select v-model="select3" slot="prepend" style="width: 80px">
                    <z-option value="day">Day</z-option>
                    <z-option value="month">Month</z-option>
                </z-select>
                <z-button slot="append" icon="ios-search"></z-button>
            </z-input>
            <div class="example-desc">
                <header class="example-header"><span>复合型输入框</span></header>
                <div>
                    <p>通过前置和后置的 slot 可以实现复合型的输入框。</p>
                </div>
            </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo7"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-input v-model="input" placeholder="请输入内容" pwdstrength></z-input>
          <div class="example-desc">
              <header class="example-header"><span>密码强度</span></header>
              <div>
                  <p>添加pwdstrength组件</p>
              </div>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo8"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-poptip trigger="focus">
              <z-input v-model="value15" prefix="heart" placeholder="Enter number"
                  style="width: 120px"></z-input>
              <div slot="content">{{ formatNumber }}</div>
          </z-poptip>
          <div class="example-desc">
              <header class="example-header"><span>输入时格式化展示</span></header>
              <div>
                  <p>结合 Poptip 组件，实现一个数值输入框，方便内容超长时的全量展现。</p>
              </div>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo14"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
   <z-card bordered dis-hover class="m-t-15">
    <div class="demo-api">
      <div class="anchor">
          <h2 id="API">API</h2>
      </div>
      <div class="anchor">
          <h3 id="Input_props">Input props</h3>
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
                  <td>type</td>
                  <td>输入框类型，可选值为
                      <code>text</code>、<code>password</code>、<code>textarea</code>、<code>url</code>、<code>email</code>、<code>date</code>、<code>number</code>、<code>tel</code>
                  </td>
                  <td>String</td>
                  <td>text</td>
              </tr>
              <tr>
                  <td>value</td>
                  <td>绑定的值，可使用 v-model 双向绑定</td>
                  <td>String | Number</td>
                  <td>空</td>
              </tr>
              <tr>
                  <td>size</td>
                  <td>输入框尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置
                  </td>
                  <td>String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>placeholder</td>
                  <td>占位文本</td>
                  <td>String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>clearable</td>
                  <td>是否显示清空按钮</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>disabled</td>
                  <td>设置输入框为禁用状态</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>readonly</td>
                  <td>设置输入框为只读</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>maxlength</td>
                  <td>最大输入长度</td>
                  <td>Number</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>show-word-limit</td>
                  <td>是否显示输入字数统计，可以配合 maxlength 使用</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>password </td>
                  <td>是否显示切换密码图标</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>icon</td>
                  <td>输入框尾部图标，仅在 text 类型下有效</td>
                  <td>String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>prefix</td>
                  <td>输入框头部图标</td>
                  <td>String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>suffix</td>
                  <td>输入框尾部图标</td>
                  <td>String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>search</td>
                  <td>是否显示为搜索型输入框</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>enter-button</td>
                  <td>开启 search 时可用，是否有确认按钮，可设为按钮文字</td>
                  <td>Boolean | String</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>rows</td>
                  <td>文本域默认行数，仅在 textarea 类型下有效</td>
                  <td>Number</td>
                  <td>2</td>
              </tr>
              <tr>
                  <td>autosize</td>
                  <td>自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }</td>
                  <td>Boolean | Object</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>number</td>
                  <td>将用户的输入转换为 Number 类型</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>autofocus</td>
                  <td>自动获取焦点</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>autocomplete</td>
                  <td>原生的自动完成功能</td>
                  <td>String</td>
                  <td>off</td>
              </tr>
              <tr>
                  <td>element-id</td>
                  <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td>
                  <td>String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>spellcheck</td>
                  <td>原生的 spellcheck 属性</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>wrap</td>
                  <td>原生的 wrap 属性，可选值为 hard 和 soft，仅在 textarea 下生效</td>
                  <td>String</td>
                  <td>soft</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3 id="Input_events">Input events</h3>
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
                  <td>on-enter</td>
                  <td>按下回车键时触发</td>
                  <td>无</td>
              </tr>
              <tr>
                  <td>on-click</td>
                  <td>设置 icon 属性后，点击图标时触发</td>
                  <td>无</td>
              </tr>
              <tr>
                  <td>on-change</td>
                  <td>数据改变时触发</td>
                  <td>event</td>
              </tr>
              <tr>
                  <td>on-focus</td>
                  <td>输入框聚焦时触发</td>
                  <td>无</td>
              </tr>
              <tr>
                  <td>on-blur</td>
                  <td>输入框失去焦点时触发</td>
                  <td>无</td>
              </tr>
              <tr>
                  <td>on-keyup</td>
                  <td>原生的 keyup 事件</td>
                  <td>event</td>
              </tr>
              <tr>
                  <td>on-keydown</td>
                  <td>原生的 keydown 事件</td>
                  <td>event</td>
              </tr>
              <tr>
                  <td>on-keypress</td>
                  <td>原生的 keypress 事件</td>
                  <td>event</td>
              </tr>
              <tr>
                  <td>on-search</td>
                  <td>开启 search 时可用，点击搜索或按下回车键时触发</td>
                  <td>value</td>
              </tr>
              <tr>
                  <td>on-clear
                  </td>
                  <td>开启 clearable 时可用，点击清空按钮时触发</td>
                  <td>无</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3 id="Input_slot">Input slot</h3>
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
                  <td>prepend</td>
                  <td>前置内容，仅在 text 类型下有效</td>
              </tr>
              <tr>
                  <td>append</td>
                  <td>后置内容，仅在 text 类型下有效</td>
              </tr>
              <tr>
                  <td>prefix</td>
                  <td>输入框头部图标</td>
              </tr>
              <tr>
                  <td>suffix</td>
                  <td>输入框尾部图标</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3 id="Input_methods">Input methods</h3>
      </div>
      <table>
          <thead>
              <tr>
                  <th>方法名</th>
                  <th>说明</th>
                  <th>参数</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>focus</td>
                  <td>手动聚焦输入框</td>
                  <td>无</td>
              </tr>
          </tbody>
      </table>
    </div>
   </z-card>
</div>
</template>

<script>
export default {
  name: 'cpInput',
  data: function () {
    return {
      value: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: '',
      value11: '',
      value12: '',
      value13: '',
      value14: '',
      value15: '',
      value16: '',
      value17: '',
      value18: '',
      select1: 'http',
      select2: 'com',
      select3: 'day',
      input: '',
      demo1: '<div>\r' +
              '    <z-input v-model="value" placeholder="Enter something..." style="width: 300px"></z-input>\r' +
              '</div>\r' +
              '<script>\r' +
              '    export default {\r' +
              '       data:function () {\r' +
              '         return{\r' +
              '              value: \'\'\r' +
              '          }\r' +
              '        }\r' +
              '    }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo2: '<div>\r' +
              '    <z-input v-model="value1" size="large" style="width: 300px" placeholder="large size"></z-input>\r' +
              '    <br><br>\r' +
              '    <z-input v-model="value2" style="width: 300px" placeholder="default size"></z-input>\r' +
              '    <br><br>\r' +
              '    <z-input v-model="value3" style="width: 300px" size="small" placeholder="small size"></z-input>\r' +
              '</div>\r' +
              '<script>\r' +
              '    export default {\r' +
              '       data:function () {\r' +
              '            return{\r' +
              '               value1: \'\',\r' +
              '               value2: \'\',\r' +
              '               value3: \'\'\r' +
              '            }\r' +
              '         }\r' +
              '    }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo3: '<div>\r' +
              '    <z-input v-model="value4" icon="ios-clock-outline" placeholder="Enter something..." style="width: 300px"></z-input>' +
              '</div>\r' +
              '<script>\r' +
              '    export default {\r' +
              '        data:function () {\r' +
              '           return{\r' +
              '               value4: \'\'\r' +
              '          }\r' +
              '        }\r' +
              '    }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo4: '<div>\r' +
              '    <z-input v-model="value5" type="textarea" placeholder="Enter something..."></z-input>\r' +
              '    <br><br>\r' +
              '    <z-input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..."></z-input>\r' +
              '</div>\r' +
              '<script>\r' +
              '    export default {\r' +
              '        data:function () {\r' +
              '            return{\r' +
              '               value5: \'\'\r' +
              '               value6: \'\'\r' +
              '            }\r' +
              '         }\r' +
              '    }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo5: '<div>\r' +
              '    <z-input v-model="value7" type="textarea" :autosize="true" placeholder="Enter something..."></z-input>\r' +
              '    <br><br>\r' +
              '    <z-input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></z-input>\r' +
              '</div>\r' +
              '<script>\r' +
              '   export default {\r' +
              '        data:function () {\r' +
              '             return{\r' +
              '                value7: \'\'\r' +
              '                value8: \'\'\r' +
              '              }\r' +
              '        }\r' +
              '    }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo6: '<div>\r' +
              '    <z-input v-model="value9" disabled placeholder="Enter something..."></z-input>\r' +
              '    <br><br>\r' +
              '    <z-input v-model="value10" disabled type="textarea" placeholder="Enter something..."></z-input>\r' +
              '</div>\r' +
              '<script>\r' +
              '    export default {\r' +
              '       data:function () {\r' +
              '            return{\r' +
              '                value9: \'\'\r' +
              '                value10: \'\'\r' +
              '           }\r' +
              '        }\r' +
              '   }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo7: '<div>\r' +
              '    <z-input v-model="value11">\r' +
              '        <span slot="prepend">http://</span>\r' +
              '        <span slot="append">.com</span>\r' +
              '    </z-input>\r' +
              '    <br>\r' +
              '    <z-input v-model="value12">\r' +
              '        <z-select v-model="select1" slot="prepend" style="width: 80px">\r' +
              '            <z-option value="http">http://</z-option>\r' +
              '            <z-option value="https">https://</z-option>\r' +
              '        </z-select>\r' +
              '        <z-select v-model="select2" slot="append" style="width: 70px">\r' +
              '            <z-option value="com">.com</z-option>\r' +
              '            <z-option value="org">.org</z-option>\r' +
              '            <z-option value="io">.io</z-option>\r' +
              '        </z-select>\r' +
              '    </z-input>\r' +
              '    <br>\r' +
              '    <z-input v-model="value13">\r' +
              '        <z-select v-model="select3" slot="prepend" style="width: 80px">\r' +
              '            <z-option value="day">Day</z-option>\r' +
              '            <z-option value="month">Month</z-option>\r' +
              '        </z-select>\r' +
              '        <z-button slot="append" icon="ios-search"></z-button>\r' +
              '    </z-input>\r' +
              '</div>\r' +
              '<script>\r' +
              '    export default {\r' +
              '       data:function () {\r' +
              '            return{\r' +
              '                value11: \'\'\r' +
              '                value12: \'\'\r' +
              '                value13: \'\'\r' +
              '                select1: \'http\'\r' +
              '                select2: \'com\'\r' +
              '                select3: \'day\'\r' +
              '             }\r' +
              '        }\r' +
              '    }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo8: '<z-input v-model="input" placeholder="请输入内容" pwdstrength></z-input>\r',
      demo9: '<z-input v-model="value14" placeholder="Enter something..." clearable style="width: 200px"></z-input>\r' +
              '<script>\r' +
              '   export default {\r' +
              '      data:function () {\r' +
              '         return{\r' +
              '              value14: \'\'\r' +
              '          }\r' +
              '        }\r' +
              '   }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo10: '<z-input v-model="value16" maxlength="10" show-word-limit placeholder="Enter something..." style="width: 200px" ></z-input>\r' +
              '<z-input v-model="value17" maxlength="100" show-word-limit type="textarea" placeholder="Enter something..." style="width: 200px" ></z-input>\r' +
              '<script>\r' +
              '   export default {\r' +
              '      data:function () {\r' +
              '         return{\r' +
              '                value16: \'\',\r' +
              '                value17: \'\'\r' +
              '          }\r' +
              '        }\r' +
              '   }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo11: '<z-input v-model="value18" type="password" password placeholder="Enter something..." style="width: 200px"></z-input>\r' +
              '<script>\r' +
              '  export default {\r' +
              '      data:function () {\r' +
              '         return{\r' +
              '                value18: \'\',\r' +
              '          }\r' +
              '        }\r' +
              '   }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo12: '<div>\r' +
              '        Props：<br>\r' +
              '        <z-input prefix="ios-contact" placeholder="Enter name" style="width: auto"></z-input>\r' +
              '        <z-input suffix="ios-search" placeholder="Enter text" style="width: auto"></z-input>\r' +
              ' </div>\r' +
              '<div style="margin-top: 6px">\r' +
              '        Slots：<br>\r' +
              '        <z-input placeholder="Enter name" style="width: auto">\r' +
              '        <z-icon type="ios-contact" slot="prefix"></z-icon>\r' +
              '        </z-input>\r' +
              '        <z-input placeholder="Enter text" style="width: auto">\r' +
              '        <z-icon type="ios-search" slot="suffix"></z-icon>\r' +
              '        </z-input>\r' +
              '</div>\r',
      demo13: ' <div>\r' +
              '        <z-input search placeholder="Enter something..."></z-input>\r' +
              '        <z-input search enter-button placeholder="Enter something..."></z-input>\r' +
              '        <z-input search enter-button="Search" placeholder="Enter something..."></z-input>\r' +
              '</div>\r',
      demo14: '<z-poptip trigger="focus">\r' +
              '        <z-input v-model="value15" prefix="heart" placeholder="Enter number" style="width: 120px" ></z-input>\r' +
              '        <div slot="content">{{ formatNumber }}</div>\r' +
              '</z-poptip>\r' +
              '<script>\r' +
              '   export default {\r' +
              '      data:function () {\r' +
              '         return{\r' +
              '                value15: \'\',\r' +
              '          }\r' +
              '        },\r' +
              '      computed: {\r' +
              '              formatNumber () {\r' +
              '              if (this.value15 === \'\') return \'Enter number\';\r' +
              '              function parseNumber(str) {\r' +
              // eslint-disable-next-line vue/no-parsing-error
              '                      const re = /(?=(?!)(d{3})+$)/g;\r' +
              '                      return str.replace(re, \',\');\r' +
              '              }\r' +
              '              return parseNumber(this.value15);\r' +
              '              }\r' +
              '      }\r' +
              '   }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r'
    }
  },
  computed: {
    formatNumber () {
      if (this.value15 === '') return 'Enter number'
      function parseNumber (str) {
        // eslint-disable-next-line vue/no-parsing-error
        // const re = /(?=(?!)(d{3})+$)/g
        const re = ''
        return str.replace(re, ',')
      }
      return parseNumber(this.value15)
    }
  }
}
</script>
