<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-03-17 16:21:13
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
    <z-row :gutter="15">
      <z-col span="12">
          <z-slider v-model="value1"></z-slider>
          <z-slider v-model="value2" range></z-slider>
          <z-slider v-model="value3" range disabled></z-slider>
          <div class="example-desc">
              <header class="example-header"><span>基础用法</span></header>
              <div>
                  <p>滑块的基本用法，可以使用 v-model 双向绑定数据。</p>
                  <p>通过设置属性 <code>range</code> 开启双滑块，通过设置属性
                      <code>disabled</code> 禁用滑块。</p>
                  <p>注意，单滑块时，<code>value</code>
                      格式为数字，当开启双滑块时，<code>value</code> 为长度是2的数组，且每项为数字。</p>
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
        <z-slider v-model="value4" :step="10"></z-slider>
        <z-slider v-model="value5" :step="10" range></z-slider>
        <div class="example-desc">
            <header class="example-header"><span>离散值</span></header>
            <div>
                <p>通过设置属性 <code>step</code> 可以控制每次滑动的间隔。</p>
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
        <z-slider v-model="value6" :step="10" show-stops></z-slider>
        <z-slider v-model="value7" :step="10" show-stops range></z-slider>
        <div class="example-desc">
            <header class="example-header"><span>显示间断点</span></header>
            <div>
                <p>通过设置属性 <code>show-stops</code> 可以显示间断点，建议在
                    <code>step</code> 间隔不密集时使用。</p>
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
         <z-slider v-model="value8" show-input></z-slider>
          <div class="example-desc">
              <header class="example-header"><span>带有输入框</span></header>
              <div>
                  <p>通过设置属性 <code>show-input</code>
                      可以显示数字输入框，配合使用，仅在单滑块模式下有效。</p>
              </div>
          </div>
          <z-slider v-model="value9" :tip-format="format"></z-slider>
          <z-slider v-model="value10" :tip-format="hideFormat"></z-slider>
          <div class="example-desc">
              <header class="example-header"><span>自定义提示</span></header>
              <div>
                  <p>Slider 会把当前值传给 <code>tip-format</code>，并在
                      Tooltip
                      中显示 tip-format 的返回值，若为 null，则隐藏 Tooltip。</p>
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
         <z-slider v-model="value11" range :marks="marks"></z-slider>
          <div class="example-desc" style="margin-top:40px">
              <header class="example-header"><span>展示标记</span></header>
              <div>
                  <p>通过设置属性 <code>show-input</code>
                      可以显示数字输入框，配合使用，仅在单滑块模式下有效。</p>
              </div>
          </div>
      </z-col>
        <z-col span="12">
          <z-code-editor :content="demo5"></z-code-editor>
      </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
     <div class="demo-api">
        <div class="anchor">
            <h2 id="API">API</h2>
        </div>
        <div class="anchor">
            <h3 id="Slider_props">Slider props</h3>
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
                    <td>value</td>
                    <td>滑块选定的值，可以使用 v-model
                        双向绑定数据。普通模式下，数据格式为数字，在双滑块模式下，数据格式为长度是2的数组，且每项都为数字</td>
                    <td>Number | Array</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>min</td>
                    <td>最小值</td>
                    <td>Number</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>max</td>
                    <td>最大值</td>
                    <td>Number</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>step</td>
                    <td>步长，取值建议能被（max - min）整除</td>
                    <td>Number</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>是否禁用滑块</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>range</td>
                    <td>是否开启双滑块模式</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>show-input</td>
                    <td>是否显示数字输入框，仅在单滑块模式下有效</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>show-stops</td>
                    <td>是否显示间断点，建议在 step 不密集时使用</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>show-tip</td>
                    <td>提示的显示控制，可选值为 <code
                           >hover</code>（悬停，默认）、<code
                           >always</code>（总是可见）、<code
                           >never</code>（不可见）</td>
                    <td>String</td>
                    <td>hover</td>
                </tr>
                <tr>
                    <td>tip-format</td>
                    <td>Slider 会把当前值传给 <code
                           >tip-format</code>，并在 Tooltip 中显示 tip-format
                        的返回值，若为 null，则隐藏 Tooltip</td>
                    <td>Function</td>
                    <td>value</td>
                </tr>
                <tr>
                    <td>input-size</td>
                    <td>数字输入框的尺寸，可选值为<code>large</code>、<code
                           >small</code>、<code
                           >default</code>或者不填，仅在开启 show-input 时有效</td>
                    <td>String</td>
                    <td>default</td>
                </tr>
                <tr><td>active-change</td> <td>同 InputNumber 的 active-change</td> <td>Boolean</td> <td>true</td></tr>
                <tr><td>marks</td> <td>标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式</td> <td>Object</td> <td>-</td></tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="Slider_events">Slider events</h3>
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
                    <td>在松开滑动时触发，返回当前的选值，在滑动过程中不会触发</td>
                    <td>value</td>
                </tr>
                <tr>
                    <td>on-input</td>
                    <td>滑动条数据变化时触发，返回当前的选值，在滑动过程中实时触发</td>
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
  name: 'cpSlider',
  data: function () {
    return {
      value1: 25,
      value2: [20, 50],
      value3: [20, 50],
      value4: 30,
      value5: [20, 50],
      value6: 30,
      value7: [20, 50],
      value8: 25,
      value9: 25,
      value10: 25,
      value11: [25, 65],
      marks: {
        0: '0°C',
        12: '12°C',
        32: '32°C',
        55: {
          style: {
            color: '#ff0000'
          },
          label: this.$createElement('strong', '55°C')
        }
      },
      demo1: '<div>\r' +
              '    <z-slider v-model="value1"></z-slider>\r' +
              '    <z-slider v-model="value2" range></z-slider>\r' +
              '    <z-slider v-model="value3" range disabled></z-slider>\r' +
              '</div>\r' +
              'export default {\r' +
            '   data:function () {\r' +
              '    return{\r' +
              '        value1: 25,\r' +
              '        value2: [20, 50],\r' +
              '        value3: [20, 50]\r' +
              '      }\r' +
              '   }\r' +
              ' }\r',
      demo2: '<div>\r' +
              '    <z-slider v-model="value4" :step="10"></z-slider>\r' +
              '    <z-slider v-model="value5" :step="10" range></z-slider>\r' +
              '</div>\r' +
              'export default {\r' +
              '    data: function () {\r' +
              '        return {\r' +
              '            value4: 30,\r' +
              '            value5: [20, 50],\r' +
              '       }\r' +
              '    }\r' +
              '}\r',
      demo3: '<div>\r' +
              '     <z-slider v-model="value6" :step="10" show-stops></z-slider>\r' +
              '    <z-slider v-model="value7" :step="10" show-stops range></z-slider>\r' +
              '</div>\r' +
              'export default {\r' +
              '    data:function () {\r' +
              '        return{\r' +
              '            value6: 30,\r' +
              '            value7: [20, 50]\r' +
              '        }\r' +
              '    }\r' +
              '}\r',
      demo4: '<div>\r' +
              '    <z-slider v-model="value8" show-input></z-slider>\r' +
              '    <z-slider v-model="value9" :tip-format="format"></z-slider>\r' +
              '    <z-slider v-model="value10" :tip-format="hideFormat"></z-slider>\r' +
              '</div>\r' +
              'export default {\r' +
              '    data: function () {\r' +
              '        return {\r' +
              '            value8: 25,\r' +
              '            value9: 25,\r' +
              '            value10: 25\r' +
              '        }\r' +
              '    }\r' +
              '}\r',
      demo5: '<z-slider v-model="value11" range :marks="marks"></z-slider>\r' +
              '    export default {\r' +
              '        data () {\r' +
              '            return {\r' +
              '                value11: [25, 65],\r' +
              '                marks: {\r' +
              '                    0: \'0°C\',\r' +
              '                    12: \'12°C\',\r' +
              '                    32: \'32°C\',\r' +
              '                    55: {\r' +
              '                        style: {\r' +
              '                            color: \'#ff0000\'\r' +
              '                        },\r' +
              '                        label: this.$createElement(\'strong\', \'55°C\')\r' +
              '                    }\r' +
              '                }\r' +
              '            }\r' +
              '        }\r' +
              '    }\r'
    }
  },
  methods: {
    format: function (val) {
      return 'Progress: ' + val + '%'
    },
    hideFormat: function () {
      return null
    },
    change: function () {
      alert(1)
    }
  }
}
</script>
<style scoped>
</style>
