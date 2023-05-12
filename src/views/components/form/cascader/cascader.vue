<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-07 16:02:15
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
            <div style="width: 40%">
                <z-cascader :data="data"></z-cascader>
            </div>
            <div class="example-desc">
                <header class="example-header"><span>基础用法</span></header>
                <div>
                    <p>级联选择对数据有较严格要求，请参照示例的格式使用data，每项数据至少包含 value、label 两项，子集为 children，以此类推。</p>
                    <p>value 为当前选择的数据的 value 值的数组，比如 ['beijing', 'gugong'] ，按照级联顺序依次排序，使用 v-model
                        进行双向绑定。
                    </p>
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
          <div style="width: 40%">
              <z-cascader :data="data" v-model="value2"></z-cascader>
          </div>
          <div class="example-desc">
              <header class="example-header"><span>默认值</span></header>
              <div>
                  <p>指定 value 默认值，组件会在初始化时选定数据。</p>
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
           <div style="width: 40%">
                <z-cascader :data="data" trigger="hover"></z-cascader>
            </div>
            <div class="example-desc">
                <header class="example-header"><span>移入展开</span></header>
                <div>
                    <p>设置属性 trigger 为 hover，当鼠标悬停时就会展开子集。</p>
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
           <div style="width: 40%">
                {{ text }}
                <z-cascader :data="data" @on-change="handleChange">
                    <a href="javascript:void(0)">选择</a>
                </z-cascader>
            </div>
            <div class="example-desc">
                <header class="example-header"><span>自定义显示</span></header>
                <div>
                    <p>通过设置 slot 可以自定义显示内容，不局限于输入框。</p>
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
            <div class="clearfix">
                <div style="width: 40%;float: left">
                    <z-cascader :data="data2" disabled></z-cascader>
                </div>
                <div style="width: 40%;float: left;margin-left: 20px">
                    <z-cascader :data="data2"></z-cascader>
                </div>
            </div>
            <div class="example-desc">
                <header class="example-header"><span>禁用</span></header>
                <div>
                    <p>设置属性 disabled 可以禁用组件。</p>
                    <p>给某项数据设置 disabled: true 可以禁用某一项。</p>
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
           <div style="width: 40%;">
                <z-cascader :data="data" change-on-select></z-cascader>
            </div>
            <div class="example-desc">
                <header class="example-header"><span>选择即改变</span></header>
                <div>
                    <p>设置属性 change-on-select 点任何一级都可以选择。</p>
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
           <div style="width: 40%;">
                <z-cascader :data="data3" :render-format="format"></z-cascader>
            </div>
            <div class="example-desc">
                <header class="example-header"><span>自定义已选项</span></header>
                <div>
                    <p>对于显示的结果，可以通过 render-format 接收一个函数来自定义。</p>
                    <p>其中第一个参数 labels 是当前选择的label的集合，第二个参数 selectedData 是当前选择的数据集合，可以利用它们组合出你想要显示的内容。
                    </p>
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
           <div style="width: 40%;">
                <z-cascader :data="data" size="large"></z-cascader>
                <br>
                <z-cascader :data="data"></z-cascader>
                <br>
                <z-cascader :data="data" size="small"></z-cascader>
            </div>
            <div class="example-desc">
                <header class="example-header"><span>尺寸</span></header>
                <div>
                    <p>通过设置size属性为large和small将输入框设置为大和小尺寸，不设置为默认（中）尺寸。</p>
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
           <div style="width: 40%;">
                <z-cascader :data="data4" :load-data="loadData"></z-cascader>
            </div>
            <div class="example-desc">
                <header class="example-header"><span>动态加载选项</span></header>
                <div>
                    <p>使用 load-data 属性可以异步加载子选项，需要给数据增加 loading 来标识当前是否在加载中。</p>
                    <p>load-data 的第二个参数为回调，如果执行，则会自动展开当前项的子列表。</p>
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
           <div style="width: 40%;">
              <z-cascader v-model="value3" :data="data" filterable></z-cascader>
          </div>
          <div class="example-desc">
              <header class="example-header"><span>搜索</span></header>
              <div>
                  <p>使用属性 filterable 可直接搜索选项并选择。</p>
                  <p>暂不支持服务端搜索。</p>
              </div>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo12"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
     <div class="demo-api">
      <div class="anchor">
          <h2 id="API">API</h2>
      </div>
      <div class="anchor">
          <h3 id="Cascader_props">Cascader props</h3>
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
                  <td>data</td>
                  <td>可选项的数据源，格式参照示例说明</td>
                  <td>Array</td>
                  <td>[]</td>
              </tr>
              <tr>
                  <td>value</td>
                  <td>当前已选项的数据，格式参照示例说明</td>
                  <td>Array</td>
                  <td>[]</td>
              </tr>
              <tr>
                  <td>render-format</td>
                  <td>选择后展示的函数，用于自定义显示格式</td>
                  <td>Function</td>
                  <td>label =&gt; label.join(' / ')</td>
              </tr>
              <tr>
                  <td>disabled</td>
                  <td>是否禁用选择器</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>clearable</td>
                  <td>是否支持清除</td>
                  <td>Boolean</td>
                  <td>true</td>
              </tr>
              <tr>
                  <td>placeholder</td>
                  <td>输入框占位符</td>
                  <td>String</td>
                  <td>请选择</td>
              </tr>
              <tr>
                  <td>trigger</td>
                  <td>次级菜单展开方式，可选值为 <code>click</code> 或 <code>hover</code></td>
                  <td>String</td>
                  <td>click</td>
              </tr>
              <tr>
                  <td>change-on-select</td>
                  <td>当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的示例</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>size</td>
                  <td>输入框大小，可选值为<code>large</code>和<code>small</code>或者不填</td>
                  <td>String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>load-data</td>
                  <td>动态获取数据，数据源需标识 loading</td>
                  <td>Function</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>filterable</td>
                  <td>是否支持搜索</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>not-found-text</td>
                  <td>当搜索列表为空时显示的内容</td>
                  <td>String</td>
                  <td>无匹配数据</td>
              </tr>
              <tr>
                  <td>transfer</td>
                  <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果
                  </td>
                  <td>Boolean</td>
                  <td>false</td>
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
          <h3 id="Cascader_events">Cascader events</h3>
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
                  <td>选择完成后的回调，返回值 value 即已选值 value，selectedData 为已选项的具体数据</td>
                  <td>value, selectedData</td>
              </tr>
              <tr>
                  <td>on-visible-change</td>
                  <td>展开和关闭弹窗时触发</td>
                  <td>显示状态，Boolean</td>
              </tr>
          </tbody>
      </table>
  </div>
   </z-card>
</div>
</template>

<script>
export default {
  name: 'cpCascader',
  data: function () {
    return {
      value1: [],
      value2: ['jiangsu', 'suzhou', 'zhuozhengyuan'],
      value3: [],
      text: '未选择',
      data: [{
        value: 'beijing',
        label: '北京',
        children: [
          { value: 'gugong', label: '故宫' },
          { value: 'tiantan', label: '天坛' },
          { value: 'wangfujing', label: '王府井' }
        ]
      }, {
        value: 'jiangsu',
        label: '江苏',
        children: [
          {
            value: 'nanjing',
            label: '南京',
            children: [
              {
                value: 'fuzimiao', label: '夫子庙'
              }
            ]
          },
          {
            value: 'suzhou',
            label: '苏州',
            children: [
              { value: 'zhuozhengyuan', label: '拙政园' },
              { value: 'shizilin', label: '狮子林' }
            ]
          }
        ]
      }],
      data2: [{
        value: 'zhejiang',
        label: '浙江',
        children: [{
          value: 'hangzhou',
          label: '杭州',
          children: [{
            value: 'xihu', label: '西湖'
          }]
        }]
      }, {
        value: 'jiangsu',
        label: '江苏',
        disabled: true,
        children: [{
          value: 'nanjing',
          label: '南京',
          children: [{ value: 'zhonghuamen', label: '中华门' }]
        }]
      }],
      data3: [{
        value: 'zhejiang',
        label: '浙江',
        children: [{
          value: 'hangzhou',
          label: '杭州',
          children: [{
            value: 'xihu', label: '西湖', code: 310000
          }]
        }]
      }, {
        value: 'jiangsu',
        label: '江苏',
        children: [{
          value: 'nanjing',
          label: '南京',
          children: [{ value: 'zhonghuamen', label: '中华门', code: 210000 }]
        }]
      }],
      data4: [
        { value: 'beijing', label: '北京', children: [], loading: false },
        { value: 'hangzhou', label: '杭州', children: [], loading: false }
      ],
      tableData: [
        { attribute: 'data', explain: '可选项的数据源，格式参照示例说明', type: 'Array', default: '[ ]' },
        { attribute: 'value', explain: '当前已选项的数据，格式参照示例说明', type: 'Array', default: '[ ]' },
        { attribute: 'render-format', explain: '选择后展示的函数，用于自定义显示格式', type: 'Function', default: "label => label.join(' / ')" },
        { attribute: 'disabled', explain: '是否禁用选择器', type: 'Boolean', default: 'false' },
        { attribute: 'clearable', explain: '是否支持清除', type: 'Array', default: 'true' },
        { attribute: 'placeholder', explain: '输入框占位符', type: 'String', default: '请选择' },
        { attribute: 'trigger', explain: '次级菜单展开方式，可选值为 click 或 hover', type: 'String', default: 'click' },
        { attribute: 'slot', explain: '自定义显示内容，不局限于输入框。', type: 'Function', default: '-' },
        { attribute: 'change-on-select', explain: '当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的示例', type: 'Function', default: 'value' },
        { attribute: 'size', explain: '输入框大小，可选值为large和small或者不填', type: 'String', default: '-' },
        { attribute: 'load-data', explain: '动态获取数据，数据源需标识 loading', type: 'Function', default: '-' },
        { attribute: 'filterable', explain: '是否支持搜索', type: 'Boolean', default: 'false' },
        { attribute: 'not-found-text', explain: '当搜索列表为空时显示的内容', type: 'String', default: '无匹配数据' },
        { attribute: 'transfer', explain: '是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果', type: 'Boolean', default: 'false' },
        { attribute: 'element-id', explain: '给元素设置 id', type: 'String', default: '-' }
      ],
      demo1: '<z-cascader :data="data" v-model="value1"></z-cascader>\r' +
          '\r' +
          'export default{\r' +
          '    data() {\r' +
          '        return {\r' +
          '            value1: [],\r' +
          '            data: [{\r' +
          '                value: \'beijing\',\r' +
          '                label: \'北京\',\r' +
          '                children: [\r' +
          '                    {\r' +
          '                        value: \'gugong\',\r' +
          '                        label: \'故宫\'\r' +
          '                    },\r' +
          '                    {\r' +
          '                        value: \'tiantan\',\r' +
          '                        label: \'天坛\'\r' +
          '                    },\r' +
          '                    {\r' +
          '                        value: \'wangfujing\',\r' +
          '                        label: \'王府井\'\r' +
          '                    }\r' +
          '                ]\r' +
          '           }, {\r' +
          '                value: \'jiangsu\',\r' +
          '                label: \'江苏\',\r' +
          '                children: [\r' +
          '                    {\r' +
          '                        value: \'nanjing\',\r' +
          '                        label: \'南京\',\r' +
          '                        children: [\r' +
          '                            {\r' +
          '                                value: \'fuzimiao\',\r' +
          '                                label: \'夫子庙\',\r' +
          '                            }\r' +
          '                        ]\r' +
          '                   },\r' +
          '                   {\r' +
          '                        value: \'suzhou\',\r' +
          '                        label: \'苏州\',\r' +
          '                        children: [\r' +
          '                            {\r' +
          '                                value: \'zhuozhengyuan\',\r' +
          '                                label: \'拙政园\',\r' +
          '                            },\r' +
          '                            {\r' +
          '                                value: \'shizilin\',\r' +
          '                                label: \'狮子林\',\r' +
          '                            }\r' +
          '                        ]\r' +
          '                    }\r' +
          '                ],\r' +
          '            }]\r' +
          '        }\r' +
          '    }\r' +
          '}',
      demo2: '<z-cascader :data="data" v-model="value2"></z-cascader>\r' +
            '\r' +
          'export default{\r' +
          '    data() {\r' +
          '        return {\r' +
          '            value2: [\'jiangsu\', \'suzhou\', \'zhuozhengyuan\'],\r' +
          '            data: [{\r' +
          '                value: \'beijing\',\r' +
          '                label: \'北京\',\r' +
          '                children: [\r' +
          '                    {\r' +
          '                        value: \'gugong\',\r' +
          '                        label: \'故宫\'\r' +
          '                    },\r' +
          '                    {\r' +
          '                        value: \'tiantan\',\r' +
          '                        label: \'天坛\'\r' +
          '                    },\r' +
          '                    {\r' +
          '                        value: \'wangfujing\',\r' +
          '                        label: \'王府井\'\r' +
          '                    }\r' +
          '                ]\r' +
          '           }, {\r' +
          '                value: \'jiangsu\',\r' +
          '                label: \'江苏\',\r' +
          '                children: [\r' +
          '                    {\r' +
          '                        value: \'nanjing\',\r' +
          '                        label: \'南京\',\r' +
          '                        children: [\r' +
          '                            {\r' +
          '                                value: \'fuzimiao\',\r' +
          '                                label: \'夫子庙\',\r' +
          '                            }\r' +
          '                        ]\r' +
          '                   },\r' +
          '                   {\r' +
          '                        value: \'suzhou\',\r' +
          '                        label: \'苏州\',\r' +
          '                        children: [\r' +
          '                            {\r' +
          '                                value: \'zhuozhengyuan\',\r' +
          '                                label: \'拙政园\',\r' +
          '                            },\r' +
          '                            {\r' +
          '                                value: \'shizilin\',\r' +
          '                                label: \'狮子林\',\r' +
          '                            }\r' +
          '                        ]\r' +
          '                    }\r' +
          '                ],\r' +
          '            }]\r' +
          '        }\r' +
          '    }\r' +
          '}',
      demo3: '<z-cascader :data="data" trigger="hover"></z-cascader>\r' +
          '\r' +
          'export default{\r' +
          '    data() {\r' +
          '        return {\r' +
          '            data: [{\r' +
          '                value: \'beijing\',\r' +
          '                label: \'北京\',\r' +
          '                children: [\r' +
          '                    {\r' +
          '                        value: \'gugong\',\r' +
          '                        label: \'故宫\'\r' +
          '                    },\r' +
          '                    {\r' +
          '                        value: \'tiantan\',\r' +
          '                        label: \'天坛\'\r' +
          '                    },\r' +
          '                    {\r' +
          '                        value: \'wangfujing\',\r' +
          '                        label: \'王府井\'\r' +
          '                    }\r' +
          '                ]\r' +
          '           }, {\r' +
          '                value: \'jiangsu\',\r' +
          '                label: \'江苏\',\r' +
          '                children: [\r' +
          '                    {\r' +
          '                        value: \'nanjing\',\r' +
          '                        label: \'南京\',\r' +
          '                        children: [\r' +
          '                            {\r' +
          '                                value: \'fuzimiao\',\r' +
          '                                label: \'夫子庙\',\r' +
          '                            }\r' +
          '                        ]\r' +
          '                   },\r' +
          '                   {\r' +
          '                        value: \'suzhou\',\r' +
          '                        label: \'苏州\',\r' +
          '                        children: [\r' +
          '                            {\r' +
          '                                value: \'zhuozhengyuan\',\r' +
          '                                label: \'拙政园\',\r' +
          '                            },\r' +
          '                            {\r' +
          '                                value: \'shizilin\',\r' +
          '                                label: \'狮子林\',\r' +
          '                            }\r' +
          '                        ]\r' +
          '                    }\r' +
          '                ],\r' +
          '            }]\r' +
          '        }\r' +
          '    }\r' +
          '}',
      demo4: '<z-cascader :data="data" :clearable="false"></z-cascader>\r' +
            '\r' +
          'export default{\r' +
          '    data() {\r' +
          '        return {\r' +
          '            data: [{\r' +
          '                value: \'beijing\',\r' +
          '                label: \'北京\',\r' +
          '                children: [\r' +
          '                    {\r' +
          '                        value: \'gugong\',\r' +
          '                        label: \'故宫\'\r' +
          '                    },\r' +
          '                    {\r' +
          '                        value: \'tiantan\',\r' +
          '                        label: \'天坛\'\r' +
          '                    },\r' +
          '                    {\r' +
          '                        value: \'wangfujing\',\r' +
          '                        label: \'王府井\'\r' +
          '                    }\r' +
          '                ]\r' +
          '           }, {\r' +
          '                value: \'jiangsu\',\r' +
          '                label: \'江苏\',\r' +
          '                children: [\r' +
          '                    {\r' +
          '                        value: \'nanjing\',\r' +
          '                        label: \'南京\',\r' +
          '                        children: [\r' +
          '                            {\r' +
          '                                value: \'fuzimiao\',\r' +
          '                                label: \'夫子庙\',\r' +
          '                            }\r' +
          '                        ]\r' +
          '                   },\r' +
          '                   {\r' +
          '                        value: \'suzhou\',\r' +
          '                        label: \'苏州\',\r' +
          '                        children: [\r' +
          '                            {\r' +
          '                                value: \'zhuozhengyuan\',\r' +
          '                                label: \'拙政园\',\r' +
          '                            },\r' +
          '                            {\r' +
          '                                value: \'shizilin\',\r' +
          '                                label: \'狮子林\',\r' +
          '                            }\r' +
          '                        ]\r' +
          '                    }\r' +
          '                ],\r' +
          '            }]\r' +
          '        }\r' +
          '    }\r' +
          '}',
      demo5: '<z-cascader :data="data" placeholder="看这里"></z-cascader>\r' +
          '\r' +
          'export default{\r' +
          '    data() {\r' +
          '        return {\r' +
          '            data: [{\r' +
          '                value: \'beijing\',\r' +
          '                label: \'北京\',\r' +
          '                children: [\r' +
          '                    {\r' +
          '                        value: \'gugong\',\r' +
          '                        label: \'故宫\'\r' +
          '                    },\r' +
          '                    {\r' +
          '                        value: \'tiantan\',\r' +
          '                        label: \'天坛\'\r' +
          '                    },\r' +
          '                    {\r' +
          '                        value: \'wangfujing\',\r' +
          '                        label: \'王府井\'\r' +
          '                    }\r' +
          '                ]\r' +
          '           }, {\r' +
          '                value: \'jiangsu\',\r' +
          '                label: \'江苏\',\r' +
          '                children: [\r' +
          '                    {\r' +
          '                        value: \'nanjing\',\r' +
          '                        label: \'南京\',\r' +
          '                        children: [\r' +
          '                            {\r' +
          '                                value: \'fuzimiao\',\r' +
          '                                label: \'夫子庙\',\r' +
          '                            }\r' +
          '                        ]\r' +
          '                   },\r' +
          '                   {\r' +
          '                        value: \'suzhou\',\r' +
          '                        label: \'苏州\',\r' +
          '                        children: [\r' +
          '                            {\r' +
          '                                value: \'zhuozhengyuan\',\r' +
          '                                label: \'拙政园\',\r' +
          '                            },\r' +
          '                            {\r' +
          '                                value: \'shizilin\',\r' +
          '                                label: \'狮子林\',\r' +
          '                            }\r' +
          '                        ]\r' +
          '                    }\r' +
          '                ],\r' +
          '            }]\r' +
          '        }\r' +
          '    }\r' +
          '}',
      demo6: '{{ text }}\r' +
          '<z-cascader :data="data" @on-change="handleChange">\r' +
          '    <a href="javascript:void(0)">选择</a>\r' +
          '</z-cascader>\r' +
          '\r' +
          'export default{\r' +
          '    data() {\r' +
          '        return {\r' +
          '            data: [{\r' +
          '                value: \'beijing\',\r' +
          '                label: \'北京\',\r' +
          '                children: [\r' +
          '                    {\r' +
          '                        value: \'gugong\',\r' +
          '                        label: \'故宫\'\r' +
          '                    },\r' +
          '                    {\r' +
          '                        value: \'tiantan\',\r' +
          '                        label: \'天坛\'\r' +
          '                    },\r' +
          '                    {\r' +
          '                        value: \'wangfujing\',\r' +
          '                        label: \'王府井\'\r' +
          '                    }\r' +
          '                ]\r' +
          '           }, {\r' +
          '                value: \'jiangsu\',\r' +
          '                label: \'江苏\',\r' +
          '                children: [\r' +
          '                    {\r' +
          '                        value: \'nanjing\',\r' +
          '                        label: \'南京\',\r' +
          '                        children: [\r' +
          '                            {\r' +
          '                                value: \'fuzimiao\',\r' +
          '                                label: \'夫子庙\',\r' +
          '                            }\r' +
          '                        ]\r' +
          '                   },\r' +
          '                   {\r' +
          '                        value: \'suzhou\',\r' +
          '                        label: \'苏州\',\r' +
          '                        children: [\r' +
          '                            {\r' +
          '                                value: \'zhuozhengyuan\',\r' +
          '                                label: \'拙政园\',\r' +
          '                            },\r' +
          '                            {\r' +
          '                                value: \'shizilin\',\r' +
          '                                label: \'狮子林\',\r' +
          '                            }\r' +
          '                        ]\r' +
          '                    }\r' +
          '                ],\r' +
          '            }]\r' +
          '        }\r' +
          '    }\r' +
          'methods: {\r' +
          '    handleChange (value, selectedData) {\r' +
          '        this.text = selectedData.map(o => o.label).join(\', \');\r' +
          '    }\r' +
          '}\r' +
          '}',
      demo7: '<z-cascader :data="data2" disabled></z-cascader>\r' +
              '<z-cascader :data="data2"></z-cascader>\r' +
              '\r' +
              'export default{\r' +
              '    data() {\r' +
              '        return {\r' +
              '              data2: [{\r' +
              '                  value: \'zhejiang\',\r' +
              '                  label: \'浙江\',\r' +
              '                  children: [{\r' +
              '                        value: \'hangzhou\',\r' +
              '                        label: \'杭州\',\r' +
              '                        children: [{\r' +
              '                            value: \'xihu\',\r' +
              '                            label: \'西湖\'\r' +
              '                        }]\r' +
              '                    }]\r' +
              '                }, {\r' +
              '                        value: \'jiangsu\',\r' +
              '                        label: \'江苏\',\r' +
              '                        disabled: true,\r' +
              '                        children: [{\r' +
              '                            value: \'nanjing\',\r' +
              '                            label: \'南京\',\r' +
              '                            children: [{\r' +
              '                                value: \'zhonghuamen\',\r' +
              '                                label: \'中华门\'\r' +
              '                            }]\r' +
              '                       }]\r' +
              '                  }]\r' +
              '           }\r' +
              '    }\r' +
              '}',
      demo8: '<z-cascader :data="data" change-on-select></z-cascader>\r' +
              '\r' +
              'export default{\r' +
              '    data() {\r' +
              '        return {\r' +
              '            data: [{\r' +
              '                value: \'beijing\',\r' +
              '                label: \'北京\',\r' +
              '                children: [\r' +
              '                    {\r' +
              '                        value: \'gugong\',\r' +
              '                        label: \'故宫\'\r' +
              '                    },\r' +
              '                    {\r' +
              '                        value: \'tiantan\',\r' +
              '                        label: \'天坛\'\r' +
              '                    },\r' +
              '                    {\r' +
              '                        value: \'wangfujing\',\r' +
              '                        label: \'王府井\'\r' +
              '                    }\r' +
              '                ]\r' +
              '           }, {\r' +
              '                value: \'jiangsu\',\r' +
              '                label: \'江苏\',\r' +
              '                children: [\r' +
              '                    {\r' +
              '                        value: \'nanjing\',\r' +
              '                        label: \'南京\',\r' +
              '                        children: [\r' +
              '                            {\r' +
              '                                value: \'fuzimiao\',\r' +
              '                                label: \'夫子庙\',\r' +
              '                            }\r' +
              '                        ]\r' +
              '                   },\r' +
              '                   {\r' +
              '                        value: \'suzhou\',\r' +
              '                        label: \'苏州\',\r' +
              '                        children: [\r' +
              '                            {\r' +
              '                                value: \'zhuozhengyuan\',\r' +
              '                                label: \'拙政园\',\r' +
              '                            },\r' +
              '                            {\r' +
              '                                value: \'shizilin\',\r' +
              '                                label: \'狮子林\',\r' +
              '                            }\r' +
              '                        ]\r' +
              '                    }\r' +
              '                ],\r' +
              '            }]\r' +
              '        }\r' +
              '    }\r' +
              '}',
      demo9: '<z-cascader :data="data3" :render-format="format"></z-cascader>\r' +
              '\r' +
              'export default{\r' +
              '    data() {\r' +
              '        return {\r' +
              '            data3: [{\r' +
              '                value: \'zhejiang\',\r' +
              '                label: \'浙江\',\r' +
              '                children: [{\r' +
              '                    value: \'hangzhou\',\r' +
              '                    label: \'杭州\',\r' +
              '                    children: [{\r' +
              '                        value: \'xihu\',\r' +
              '                        label: \'西湖\',\r' +
              '                        code: 310000\r' +
              '                    }]\r' +
              '                }]\r' +
              '            }, {\r' +
              '                value: \'jiangsu\',\r' +
              '                label: \'江苏\',\r' +
              '                children: [{\r' +
              '                    value: \'nanjing\',\r' +
              '                    label: \'南京\',\r' +
              '                    children: [{\r' +
              '                        value: \'zhonghuamen\',\r' +
              '                        label: \'中华门\',\r' +
              '                        code: 210000\r' +
              '                    }]\r' +
              '                }]\r' +
              '            }]\r' +
              '        }\r' +
              '    },\r' +
              'methods: {\r' +
              '    format(labels, selectedData) {\r' +
              '        const index = labels.length - 1;\r' +
              '       const data = selectedData[index] || false;\r' +
              '        if (data && data.code) {\r ' +
              '            return labels[index] + \' - \' + data.code;\r' +
              '        }\r' +
              '        return labels[index];\r' +
                '   }\r' +
              '}\r' +
              '}',
      demo10: '<z-cascader :data="data" size="large"></z-cascader>\r' +
              '<br>\r' +
              '<z-cascader :data="data"></z-cascader>\r' +
              '<br>\r' +
              '<z-cascader :data="data" size="small"></z-cascader>\r' +
              '\r' +
              'export default{\r' +
              '    data() {\r' +
              '        return {\r' +
              '            data: [{\r' +
              '                value: \'beijing\',\r' +
              '                label: \'北京\',\r' +
              '                children: [\r' +
              '                    {\r' +
              '                        value: \'gugong\',\r' +
              '                        label: \'故宫\'\r' +
              '                    },\r' +
              '                    {\r' +
              '                        value: \'tiantan\',\r' +
              '                        label: \'天坛\'\r' +
              '                    },\r' +
              '                    {\r' +
              '                        value: \'wangfujing\',\r' +
              '                        label: \'王府井\'\r' +
              '                    }\r' +
              '                ]\r' +
              '           }, {\r' +
              '                value: \'jiangsu\',\r' +
              '                label: \'江苏\',\r' +
              '                children: [\r' +
              '                    {\r' +
              '                        value: \'nanjing\',\r' +
              '                        label: \'南京\',\r' +
              '                        children: [\r' +
              '                            {\r' +
              '                                value: \'fuzimiao\',\r' +
              '                                label: \'夫子庙\',\r' +
              '                            }\r' +
              '                        ]\r' +
              '                   },\r' +
              '                   {\r' +
              '                        value: \'suzhou\',\r' +
              '                        label: \'苏州\',\r' +
              '                        children: [\r' +
              '                            {\r' +
              '                                value: \'zhuozhengyuan\',\r' +
              '                                label: \'拙政园\',\r' +
              '                            },\r' +
              '                            {\r' +
              '                                value: \'shizilin\',\r' +
              '                                label: \'狮子林\',\r' +
              '                            }\r' +
              '                        ]\r' +
              '                    }\r' +
              '                ],\r' +
              '            }]\r' +
              '        }\r' +
              '    }\r' +
              '}',
      demo11: '<z-cascader :data="data4" :load-data="loadData"></z-cascader>\r' +
              'export default {\r' +
              '    data() {\r' +
              '        return {\r' +
              '            data4: [\r' +
              '                {\r' +
              '                    value: \'beijing\',\r' +
              '                    label: \'北京\',\r' +
              '                    children: [],\r' +
              '                    loading: false\r' +
              '                },\r' +
              '                {\r' +
              '                    value: \'hangzhou\',\r' +
              '                    label: \'杭州\',\r' +
              '                    children: [],\r' +
              '                    loading: false\r' +
              '                }\r' +
              '            ]\r' +
              '        }\r' +
              '    },\r' +
              '    methods: {\r' +
              '        loadData(item, callback) {\r' +
              '            item.loading = true;\r' +
              '            setTimeout(function () {\r' +
              '                if(item.value === \'beijing\')\r' +
              '            {\r' +
              '                item.children = [\r' +
              '                    {\r' +
              '                        value: \'talkingdata\',\r' +
              '                        label: \'TalkingData\'\r' +
              '                    },\r' +
              '                    {\r' +
              '                        value: \'baidu\',\r' +
              '                        label: \'百度\'\r' +
              '                    },\r' +
              '                    {\r' +
              '                        value: \'sina\',\r' +
              '                        label: \'新浪\'\r' +
              '                    }\r' +
              '                ];\r' +
              '            }\r' +
              '        else if(item.value === \'hangzhou\') {\r' +
              '         item.children = [\r' +
              '            {\r' +
              '                value: \'ali\',\r' +
              '                label: \'阿里巴巴\'\r' +
              '            },\r' +
              '            {\r' +
              '                value: \'163\',\r' +
              '                label: \'网易\'\r' +
              '            }\r' +
              '         ];\r' +
              '       }\r' +
              '       item.loading = false;\r' +
              '       callback();\r' +
              '      },1000);\r' +
              '     }\r' +
              '   }\r' +
              '}',
      demo12: '<z-cascader v-model="value3" :data="data" filterable></z-cascader>\r' +
              '\r' +
              'export default {\r' +
              '    data() {\r' +
              '        return {\r' +
              '            data: [{\r' +
              '                value: \'beijing\',\r' +
              '                label: \'北京\',\r' +
              '                children: [\r' +
              '                    {\r' +
              '                        value: \'gugong\',\r' +
              '                        label: \'故宫\'\r' +
              '                    },\r' +
              '                    {\r' +
              '                        value: \'tiantan\',\r' +
              '                        label: \'天坛\'\r' +
              '                    },\r' +
              '                    {\r' +
              '                        value: \'wangfujing\',\r' +
              '                        label: \'王府井\'\r' +
              '                    }\r' +
              '                ]\r' +
              '           }, {\r' +
              '                value: \'jiangsu\',\r' +
              '                label: \'江苏\',\r' +
              '                children: [\r' +
              '                    {\r' +
              '                        value: \'nanjing\',\r' +
              '                        label: \'南京\',\r' +
              '                        children: [\r' +
              '                            {\r' +
              '                                value: \'fuzimiao\',\r' +
              '                                label: \'夫子庙\',\r' +
              '                            }\r' +
              '                        ]\r' +
              '                   },\r' +
              '                   {\r' +
              '                        value: \'suzhou\',\r' +
              '                        label: \'苏州\',\r' +
              '                        children: [\r' +
              '                            {\r' +
              '                                value: \'zhuozhengyuan\',\r' +
              '                                label: \'拙政园\',\r' +
              '                            },\r' +
              '                            {\r' +
              '                                value: \'shizilin\',\r' +
              '                                label: \'狮子林\',\r' +
              '                            }\r' +
              '                        ]\r' +
              '                    }\r' +
              '                ],\r' +
              '            }]\r' +
              '        }\r' +
              '    }\r' +
              '}',
      demo13: '<z-cascader v-model="value3" :data="data" transfer></z-cascader>\r' +
              '\r' +
              'export default {\r' +
              '    data() {\r' +
              '        return {\r' +
              '            data: [{\r' +
              '                value: \'beijing\',\r' +
              '                label: \'北京\',\r' +
              '                children: [\r' +
              '                    {\r' +
              '                        value: \'gugong\',\r' +
              '                        label: \'故宫\'\r' +
              '                    },\r' +
              '                    {\r' +
              '                        value: \'tiantan\',\r' +
              '                        label: \'天坛\'\r' +
              '                    },\r' +
              '                    {\r' +
              '                        value: \'wangfujing\',\r' +
              '                        label: \'王府井\'\r' +
              '                    }\r' +
              '                ]\r' +
              '           }, {\r' +
              '                value: \'jiangsu\',\r' +
              '                label: \'江苏\',\r' +
              '                children: [\r' +
              '                    {\r' +
              '                        value: \'nanjing\',\r' +
              '                        label: \'南京\',\r' +
              '                        children: [\r' +
              '                            {\r' +
              '                                value: \'fuzimiao\',\r' +
              '                                label: \'夫子庙\',\r' +
              '                            }\r' +
              '                        ]\r' +
              '                   },\r' +
              '                   {\r' +
              '                        value: \'suzhou\',\r' +
              '                        label: \'苏州\',\r' +
              '                        children: [\r' +
              '                            {\r' +
              '                                value: \'zhuozhengyuan\',\r' +
              '                                label: \'拙政园\',\r' +
              '                            },\r' +
              '                            {\r' +
              '                                value: \'shizilin\',\r' +
              '                                label: \'狮子林\',\r' +
              '                            }\r' +
              '                        ]\r' +
              '                    }\r' +
              '                ],\r' +
              '            }]\r' +
              '        }\r' +
              '    }\r' +
              '}',
      demo14: '<z-cascader v-model="value3" :data="data" not-found-text="无匹配数据"></z-cascader>\r' +
              '\r' +
              'export default {\r' +
              '    data() {\r' +
              '        return {\r' +
              '            data: [{\r' +
              '                value: \'beijing\',\r' +
              '                label: \'北京\',\r' +
              '                children: [\r' +
              '                    {\r' +
              '                        value: \'gugong\',\r' +
              '                        label: \'故宫\'\r' +
              '                    },\r' +
              '                    {\r' +
              '                        value: \'tiantan\',\r' +
              '                        label: \'天坛\'\r' +
              '                    },\r' +
              '                    {\r' +
              '                        value: \'wangfujing\',\r' +
              '                        label: \'王府井\'\r' +
              '                    }\r' +
              '                ]\r' +
              '           }, {\r' +
              '                value: \'jiangsu\',\r' +
              '                label: \'江苏\',\r' +
              '                children: [\r' +
              '                    {\r' +
              '                        value: \'nanjing\',\r' +
              '                        label: \'南京\',\r' +
              '                        children: [\r' +
              '                            {\r' +
              '                                value: \'fuzimiao\',\r' +
              '                                label: \'夫子庙\',\r' +
              '                            }\r' +
              '                        ]\r' +
              '                   },\r' +
              '                   {\r' +
              '                        value: \'suzhou\',\r' +
              '                        label: \'苏州\',\r' +
              '                        children: [\r' +
              '                            {\r' +
              '                                value: \'zhuozhengyuan\',\r' +
              '                                label: \'拙政园\',\r' +
              '                            },\r' +
              '                            {\r' +
              '                                value: \'shizilin\',\r' +
              '                                label: \'狮子林\',\r' +
              '                            }\r' +
              '                        ]\r' +
              '                    }\r' +
              '                ],\r' +
              '            }]\r' +
              '        }\r' +
              '    }\r' +
              '}',
      demo15: '<z-cascader :data="data" element-id="ddd"></z-cascader>\r' +
              '\r' +
              'export default {\r' +
              '    data() {\r' +
              '        return {\r' +
              '            data: [{\r' +
              '                value: \'beijing\',\r' +
              '                label: \'北京\',\r' +
              '                children: [\r' +
              '                    {\r' +
              '                        value: \'gugong\',\r' +
              '                        label: \'故宫\'\r' +
              '                    },\r' +
              '                    {\r' +
              '                        value: \'tiantan\',\r' +
              '                        label: \'天坛\'\r' +
              '                    },\r' +
              '                    {\r' +
              '                        value: \'wangfujing\',\r' +
              '                        label: \'王府井\'\r' +
              '                    }\r' +
              '                ]\r' +
              '           }, {\r' +
              '                value: \'jiangsu\',\r' +
              '                label: \'江苏\',\r' +
              '                children: [\r' +
              '                    {\r' +
              '                        value: \'nanjing\',\r' +
              '                        label: \'南京\',\r' +
              '                        children: [\r' +
              '                            {\r' +
              '                                value: \'fuzimiao\',\r' +
              '                                label: \'夫子庙\',\r' +
              '                            }\r' +
              '                        ]\r' +
              '                   },\r' +
              '                   {\r' +
              '                        value: \'suzhou\',\r' +
              '                        label: \'苏州\',\r' +
              '                        children: [\r' +
              '                            {\r' +
              '                                value: \'zhuozhengyuan\',\r' +
              '                                label: \'拙政园\',\r' +
              '                            },\r' +
              '                            {\r' +
              '                                value: \'shizilin\',\r' +
              '                                label: \'狮子林\',\r' +
              '                            }\r' +
              '                        ]\r' +
              '                    }\r' +
              '                ],\r' +
              '            }]\r' +
              '        }\r' +
              '    }\r' +
              '}'
    }
  },

  methods: {
    handleChange: function (value, selectedData) {
      this.text = selectedData.map(function (o) { return o.label }).join(', ')
    },
    format: function (labels, selectedData) {
      var index = labels.length - 1
      var data = selectedData[index] || false
      if (data && data.code) {
        return labels[index] + ' - ' + data.code
      }
      return labels[index]
    },
    loadData: function (item, callback) {
      item.loading = true
      setTimeout(function () {
        if (item.value === 'beijing') {
          item.children = [
            {
              value: 'talkingdata',
              label: 'TalkingData'
            },
            {
              value: 'baidu',
              label: '百度'
            },
            {
              value: 'sina',
              label: '新浪'
            }
          ]
        } else if (item.value === 'hangzhou') {
          item.children = [
            {
              value: 'ali',
              label: '阿里巴巴'
            },
            {
              value: '163',
              label: '网易'
            }
          ]
        }
        item.loading = false
        callback()
      }, 1000)
    }
  }
}
</script>
<style scoped>
</style>
