<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-07 15:57:09
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <z-input-number :max="10" :min="1" v-model="value1">
            </z-input-number>
            <div class="example-desc">
                <header class="example-header"><span>基础用法</span></header>
                <p>可以通过输入、鼠标点击或键盘的上下键来改变数值大小。</p>
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
            <z-input-number :max="10" :min="1" :step="1.2" v-model="value2">
            </z-input-number>
            <div class="example-desc">
                <header class="example-header"><span>小数</span></header>
                <p>通过设置step属性控制每次改变的精度</p>
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
           <z-input-number :max="10000" v-model="value9"
                :formatter="value => `$ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')"
                :parser="value => value.replace(/$s?|(,*)/g, '')">
            </z-input-number>
            <z-input-number :max="100" v-model="value10" :formatter="value => `${value}%`"
                :parser="value => value.replace('%', '')">
            </z-input-number>
            <div class="example-desc">
                <header class="example-header"><span>格式化展示</span></header>
                <p>通过 formatter 格式化数字，以展示具有具体含义的数据，往往需要配合 parser 一起使用。</p>
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
           <z-input-number v-model="value3" size="small"></z-input-number>
            <z-input-number v-model="value4"></z-input-number>
            <z-input-number v-model="value5" size="large"></z-input-number>
            <div class="example-desc">
                <header class="example-header"><span>尺寸</span></header>
                <p>通过设置size属性为large和small将输入框设置为大和小尺寸，不设置为默认（中）尺寸。</p>
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
           <z-input-number v-model="value6" :disabled="disabled"></z-input-number>
            <z-button type="primary" @click="disabled = !disabled">Toggle Disabled</z-button>
            <div class="example-desc">
                <header class="example-header"><span>不可用</span></header>
                <p>通过设置disabled属性禁用输入框，点击按钮切换状态。</p>
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
           <z-input-number v-model="value7" readonly></z-input-number>
            <div class="example-desc">
                <header class="example-header"><span>只读</span></header>
                <p>通过设置readonly属性开启只读。</p>
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
           <z-input-number v-model="value8" :editable="false"></z-input-number>
            <div class="example-desc">
                <header class="example-header"><span>不可编辑</span></header>
                <p>通过设置editable属性控制是否能编辑。</p>
            </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo7"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <div class="demo-api">
        <div class="anchor">
            <h2 id="API">API</h2>
        </div>
        <div class="anchor">
            <h3 id="InputNumber_props">InputNumber props</h3>
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
                    <td>max</td>
                    <td>最大值</td>
                    <td>Number</td>
                    <td>Infinity</td>
                </tr>
                <tr>
                    <td>min</td>
                    <td>最小值</td>
                    <td>Number</td>
                    <td>-Infinity</td>
                </tr>
                <tr>
                    <td>value</td>
                    <td>当前值，可以使用 v-model 双向绑定数据</td>
                    <td>Number</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>step</td>
                    <td>每次改变的步伐，可以是小数</td>
                    <td>Number</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>输入框尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不填
                    </td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>设置禁用状态</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>placeholder</td>
                    <td>占位文本</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>formatter</td>
                    <td>指定输入框展示值的格式</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>parser</td>
                    <td>指定从 formatter 里转换回数字的方式，和 formatter 搭配使用</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>readonly</td>
                    <td>是否设置为只读</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>editable</td>
                    <td>是否可编辑</td>
                    <td>Boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>precision</td>
                    <td>数值精度</td>
                    <td>Number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>element-id</td>
                    <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="InputNumber_events">InputNumber events</h3>
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
                    <td>数值改变时的回调，返回当前值</td>
                    <td>当前值</td>
                </tr>
                <tr>
                    <td>on-focus</td>
                    <td>聚焦时触发</td>
                    <td>event</td>
                </tr>
                <tr>
                    <td>on-blur</td>
                    <td>失焦时触发</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    </div>
   </z-card>
</div>
</template>

<script>
export default {
  name: 'cpInputNumber',
  data: function () {
    return {
      max: 100,
      min: 0,
      value1: 1,
      value2: 1,
      value3: 2,
      value4: 2,
      value5: 2,
      value9: 1000,
      value10: 100,
      value6: 1,
      value7: 1,
      value8: 1,
      step: 2,
      size: 'large',
      disabled: false,
      readonly: false,
      editable: true,
      precision: '',
      demo1: '<z-input-number :max="10" :min="1" v-model="value1">\r',
      demo2: '<z-input-number :max="10" :min="1" :step="1.2" v-model="value2">\r' +
                '</z-input-number>\r',
      demo3: '<z-input-number  :max="10000"\r' +
              '    v-model="value9"\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '    :formatter="value => `$ ${value}`.replace(/B(?=(d{3})+(?!d))/g, \',\')"\r' +
              '    :parser="value => value.replace(/$s?|(,*)/g, \'\')">\r' +
              '    </z-input-number>\r' +
              '    <z-input-number  :max="100"\r' +
              '   v-model="value10"\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '   :formatter="value => `${value}%`"\r' +
              '    :parser="value => value.replace(' % ', \'\')">\r' +
              '</z-input-number>\r',
      demo4: '<z-input-number v-model="value3" size="small"></z-input-number>\r' +
              '<z-input-number v-model="value4"></z-input-number>\r' +
              '<z-input-number v-model="value5" size="large"></z-input-number>\r',
      demo5: '<z-input-number v-model="value6" :disabled="disabled"></z-input-number>\r' +
              ' <z-button type="primary" @click="disabled = !disabled">Toggle Disabled</z-button> \r',
      demo6: '<z-input-number  v-model="value7" readonly></z-input-number>\r',
      demo7: '<z-input-number  v-model="value8" :editable="false"></z-input-number>\r'
    }
  },
  methods: {
    change: function () {
    }
  }
}
</script>
<style scoped>
</style>
