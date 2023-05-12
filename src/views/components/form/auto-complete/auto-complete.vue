<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-03-16 15:03:11
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <z-auto-complete v-model="value1" :data="data1" @on-search="handleSearch1"
              placeholder="input here" element-id="auto" style="width:200px">
          </z-auto-complete>
          <div class="example-desc">
              <header class="example-header"><span>基础用法</span></header>
              <div>
                  <p>基本用法，通过 data 设置自动完成的数据源。</p>
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
           <z-auto-complete v-model="value2" @on-search="handleSearch2" placeholder="input here"
                style="width:200px">
                <z-option v-for="item in data2" :value="item" :key="item">{{ item }}</z-option>
            </z-auto-complete>
            <div class="example-desc">
                <header class="example-header"><span>自定义选项</span></header>
                <div>
                    <p>除了使用 data，还可以直接传入 <code>Option</code> 组件作为 slot 使用，这样可以自定义显示效果。</p>
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
           <z-auto-complete v-model="value3" :data="data3" :filter-method="filterMethod"
                placeholder="input here" style="width:200px">
            </z-auto-complete>
            <div class="example-desc">
                <header class="example-header"><span>不区分大小写</span></header>
                <div>不区分大小写的 AutoComplete，及过滤的用法。</div>
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
          <z-auto-complete v-model="value4" icon="ios-search" placeholder="input here"
            style="width:300px">
            <div class="demo-auto-complete-item" v-for="(item,index) in data4" :key="index">
                <div class="demo-auto-complete-group">
                    <span>{{ item.title }}</span>
                    <a href="https://www.google.com/search?q=zView" target="_blank">更多</a>
                </div>
                <z-option v-for="option in item.children" :value="option.title" :key="option.title">
                    <span class="demo-auto-complete-title">{{ option.title }}</span>
                    <span class="demo-auto-complete-count">{{ option.count }} 人关注</span>
                </z-option>
            </div>
            <a href="https://www.google.com/search?q=zView" target="_blank"
                class="demo-auto-complete-more">查看所有结果</a>
        </z-auto-complete>
        <div class="example-desc">
            <header class="example-header"><span>查询模式</span></header>
            <div>
                <p>完全自定义 Option，显示复杂的布局。</p>
            </div>
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
            <h3 id="AutoComplete_props">AutoComplete props</h3>
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
                    <td>绑定的值，可使用 v-model 双向绑定</td>
                    <td>String | Number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>data</td>
                    <td>自动完成的数据源</td>
                    <td>Array</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>clearable</td>
                    <td>是否可以清空选项</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>是否禁用</td>
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
                    <td>size</td>
                    <td>输入框尺寸，可选值为 <code>large</code>、<code>small</code>、<code>default</code> 或者不设置
                    </td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>输入框尾部图标</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>filter-method</td>
                    <td>是否根据输入项进行筛选。当其为一个函数时，会接收 <code>value</code> 和 <code>option</code> 两个参数，当
                        option 符合筛选条件时，应返回
                        true，反之则返回 false</td>
                    <td>Function | Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>placement</td>
                    <td>弹窗的展开方向，可选值为 <code>bottom</code> 和 <code>top</code>，2.12.0 版本开始支持自动识别</td>
                    <td>String</td>
                    <td>bottom</td>
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
            <h3 id="AutoComplete_events">AutoComplete events</h3>
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
                    <td>选中 option，或 input 的 value 变化时，调用此函数</td>
                    <td>value</td>
                </tr>
                <tr>
                    <td>on-select</td>
                    <td>被选中时调用，参数为选中项的 value 值</td>
                    <td>value</td>
                </tr>
                <tr>
                    <td>on-search</td>
                    <td>搜索补全项的时候调用</td>
                    <td>query</td>
                </tr>
                <tr>
                    <td>on-focus</td>
                    <td>聚焦时触发</td>
                    <td>event</td>
                </tr>
                <tr>
                    <td>on-blur</td>
                    <td>失焦时触发</td>
                    <td>event</td>
                </tr>
                <tr><td>on-clear</td> <td>清空时触发</td> <td>无</td></tr>
            </tbody>
        </table>
      </div>
    </z-card>
  </div>
</template>

<script>
export default {
  name: 'cpAutoComplete',
  data: function () {
    return {
      value1: '',
      data1: [],
      value2: '',
      data2: [],
      value3: '',
      data3: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive'],
      value4: '',
      data4: [
        {
          title: '话题',
          children: [
            {
              title: 'zView',
              count: 10000
            },
            {
              title: 'zView UI',
              count: 10600
            }
          ]
        },
        {
          title: '问题',
          children: [
            {
              title: 'zView UI 有多好',
              count: 60100
            },
            {
              title: 'zView 是啥',
              count: 30010
            }
          ]
        },
        {
          title: '文章',
          children: [
            {
              title: 'zView 是一个设计语言',
              count: 100000

            }
          ]
        }
      ],
      demo1: '<z-auto-complete\r' +
              '      v-model="value1"\r' +
              '      :data="data1"\r' +
              '      @on-search="handleSearch1"\r' +
              '      placeholder="input here"\r' +
              '       style="width:200px">\r' +
              '</z-auto-complete>\r' +
              '\r' +
              '<script>\r' +
              '    export default {\r' +
              '        data () {\r' +
              '           return {\r' +
              '                value1:"",\r' +
              '                data1: []\r' +
              '            }\r' +
              '        },\r' +
              '        methods: {\r' +
              '            handleSearch1 (value) {\r' +
              '                this.data1 = !value ? [] : [\r' +
              '                    value,\r' +
              '                    value + value,\r' +
              '                    value + value + value\r' +
              '                ];\r' +
              '           }\r' +
              '         }\r' +
              '    }\r' +
              // eslint-disable-next-line no-useless-escape
              ' <\/script>',
      demo2: '<z-auto-complete\r' +
              '       v-model="value2"\r' +
              '       @on-search="handleSearch2"\r' +
              '       placeholder="input here"\r' +
              '       style="width:200px">\r' +
              '       <z-option v-for="item in data2" :value="item" :key="item">{{ item }}</z-option>' +
              '</z-auto-complete>\r' +
              '\r' +
              '<script>\r' +
              '    export default {\r' +
              '        data () {\r' +
              '           return {\r' +
              '                value2:"",\r' +
              '                data2: []\r' +
              '            }\r' +
              '        },\r' +
              '        methods: {\r' +
              '            handleSearch2 (value) {\r' +
              '                this.data2 = !value || value.indexOf(\'@\') >= 0 ? [] : [\r' +
              '                    value + \'@qq.com\',\r' +
              '                    value + \'@sina.com\',\r' +
              '                    value + \'@163.com\'\r' +
              '                ];\r' +
              '           }\r' +
              '         }\r' +
              '    }\r' +
              // eslint-disable-next-line no-useless-escape
              ' <\/script>',
      demo3: '<z-auto-complete\r' +
              '       v-model="value3"\r' +
              '       :data="data3"\r' +
              '       :filter-method="filterMethod"\r' +
              '       placeholder="input here"\r' +
              '       style="width:200px">\r' +
              '</z-auto-complete>\r' +
              '\r' +
              '<script>\r' +
              '    export default {\r' +
              '        data () {\r' +
              '           return {\r' +
              '                value3:"",\r' +
              '                data3: [\'Steve Jobs\', \'Stephen Gary Wozniak\', \'Jonathan Paul Ive\']\r' +
              '            }\r' +
              '        },\r' +
              '        methods: {\r' +
              '            filterMethod (value, option){\r' +
              '                return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;\r' +
              '           }\r' +
              '         }\r' +
              '    }\r' +
              // eslint-disable-next-line no-useless-escape
              ' <\/script>',
      demo4: '<z-auto-complete\r' +
              '       v-model="value4"\r' +
              '       icon="ios-search"\r' +
              '       placeholder="input here"\r' +
              '       style="width:300px">\r' +
              '<div class="demo-auto-complete-item" v-for="item in data4">\r' +
              '<div class="demo-auto-complete-group">\r' +
              '        <span>{{ item.title }}</span>\r' +
              '        <a href="https://www.google.com/search?q=zView" target="_blank">更多</a>\r' +
              '    </div>\r' +
              '    <z-option v-for="option in item.children" :value="option.title" :key="option.title">\r' +
              '        <span class="demo-auto-complete-title">{{ option.title }}</span>\r' +
              '        <span class="demo-auto-complete-count">{{ option.count }} 人关注</span>\r' +
              '    </z-option>\r' +
              '</div>\r' +
                '<a href="https://www.google.com/search?q=zView" target="_blank" class="demo-auto-complete-more">查看所有结果</a>\r' +
              '</z-auto-complete>\r' +
              '\r' +
              '<script>\r' +
              '    export default {\r' +
              '        data () {\r' +
              '           return {\r' +
              '               value4: \'\',\r' +
              '                data4: [\r' +
              '                    {\r' +
              '                        title: \'话题\',\r' +
              '                        children: [\r' +
              '                            {\r' +
              '                                title: \'zView\',\r' +
              '                                count: 10000,\r' +
              '                            },\r' +
              '                            {\r' +
              '                                 title: \'zView UI\',\r' +
              '                                 count: 10600,\r' +
              '                            }\r' +
              '                        ]\r' +
              '                    },\r' +
              '                    {\r' +
              '                        title: \'问题\',\r' +
              '                        children: [\r' +
              '                            {\r' +
              '                                title: \'zView UI 有多好\',\r' +
              '                                count: 60100,\r' +
              '                            },\r' +
              '                            {\r' +
              '                                title: \'zView 是啥\',\r' +
              '                                count: 30010,\r' +
              '                            }\r' +
              '                        ]\r' +
              '                    },\r' +
              '                    {\r' +
              '                        title: \'文章\',\r' +
              '                        children: [\r' +
              '                            {\r' +
              '                                title: \'zView 是一个设计语言\',\r' +
              '                                count: 100000,\r' +
              '                            }\r' +
              '                        ]\r' +
              '                    }\r' +
              '                ]\r' +
              '            }\r' +
              '        },\r' +
              '    }\r' +
              // eslint-disable-next-line no-useless-escape
              ' <\/script>'
    }
  },
  methods: {
    handleSearch1: function (value) {
      this.data1 = !value ? [] : [
        value,
        value + value,
        value + value + value
      ]
    },
    handleSearch2: function (value) {
      this.data2 = !value || value.indexOf('@') >= 0 ? [] : [
        value + '@qq.com',
        value + '@sina.com',
        value + '@163.com'
      ]
    },
    filterMethod: function (value, option) {
      return option.toUpperCase().indexOf(value.toUpperCase()) !== -1
    }
  }
}
</script>
<style scoped>
.demo-auto-complete-item {
    padding: 4px 0;
    border-bottom: 1px solid #f6f6f6;
}

.demo-auto-complete-group {
    font-size: 12px;
    padding: 4px 6px;
}

.demo-auto-complete-more {
    display: block;
    margin: 0 auto;
    padding: 4px;
    text-align: center;
    font-size: 12px;
}

.demo-auto-complete-group a {
    float: right;
}
</style>
