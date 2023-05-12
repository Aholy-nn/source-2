<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-03-17 16:28:44
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
    <z-row :gutter="15">
      <z-col span="12">
        <z-tabs value="name1">
            <z-tab-pane label="标签一" name="name1">标签一的内容</z-tab-pane>
            <z-tab-pane label="标签二" name="name2">标签二的内容</z-tab-pane>
            <z-tab-pane label="标签三" name="name3">标签三的内容</z-tab-pane>
        </z-tabs>
        <div class="example-desc">
            <header class="example-header"><span>基础用法</span></header>
            <div>
                <p>value 与 TabPane 的 name 对应，用于标识当前激活的是哪一项，name 值默认从 0 开始，默认激活第一项。可以使用 v-model
                    双向绑定数据。</p>
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
        <z-tabs>
            <z-tab-pane label="标签一">标签一的内容</z-tab-pane>
            <z-tab-pane label="标签二" disabled>标签二的内容</z-tab-pane>
            <z-tab-pane label="标签三">标签三的内容</z-tab-pane>
        </z-tabs>
        <div class="example-desc">
            <header class="example-header"><span>禁用</span></header>
            <div>
                <p>禁用某一项。</p>
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
        <z-tabs>
            <z-tab-pane label="macOS" icon="social-apple">标签一的内容</z-tab-pane>
            <z-tab-pane label="Windows" icon="social-windows">标签二的内容</z-tab-pane>
            <z-tab-pane label="Linux" icon="social-tux">标签三的内容</z-tab-pane>
        </z-tabs>
        <div class="example-desc">
            <header class="example-header"><span>图标</span></header>
            <div>
                通过设置属性 icon，可以显示一个图标。
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
        <z-tabs size="small">
            <z-tab-pane label="标签一">标签一的内容</z-tab-pane>
            <z-tab-pane label="标签二">标签二的内容</z-tab-pane>
            <z-tab-pane label="标签三">标签三的内容</z-tab-pane>
        </z-tabs>
        <div class="example-desc">
            <header class="example-header"><span>迷你型</span></header>
            <div>
                设置属性 size 为 small 可以显示为迷你型，只在 type 为 line 时有效。
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
        <z-tabs type="card">
            <z-tab-pane label="标签一">标签一的内容</z-tab-pane>
            <z-tab-pane label="标签二">标签二的内容</z-tab-pane>
            <z-tab-pane label="标签三">标签三的内容</z-tab-pane>
        </z-tabs>
        <div class="example-desc">
            <header class="example-header"><span>卡片样式</span></header>
            <div>
                设置属性 type 为 card 可以显示卡片样式，常用于容器顶部。
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
        <z-tabs type="card" closable @on-tab-remove="handleTabRemove">
            <z-tab-pane label="标签一" v-if="tab0">标签一的内容</z-tab-pane>
            <z-tab-pane label="标签二" v-if="tab1">标签二的内容</z-tab-pane>
            <z-tab-pane label="标签三" v-if="tab2">标签三的内容</z-tab-pane>
        </z-tabs>
        <div class="example-desc">
            <header class="example-header"><span>可关闭</span></header>
            <div>
                通过设置属性 closable 可以关闭某一项，仅在 type 为 card 时有效。
            </div>
            <div>需结合 @on-tab-remove 事件手动关闭标签页。</div>
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
        <z-tabs value="name1">
            <z-tab-pane :label="label" name="name1">标签一的内容</z-tab-pane>
            <z-tab-pane label="标签二" name="name2">标签二的内容</z-tab-pane>
            <z-tab-pane label="标签三" name="name3">标签三的内容</z-tab-pane>
        </z-tabs>
        <div class="example-desc">
            <header class="example-header"><span>自定义标签页</span></header>
            <div>
                设置 label 为 Render 函数后，可以自定义标签页的内容。
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
        <z-tabs type="card">
            <z-tab-pane v-for="tab in tabs" :key="tab" :label="'标签' + tab">标签{{ tab }}</z-tab-pane>
            <z-button type="primary" ghost @click="handleTabsAdd" size="small" slot="extra">增加</z-button>
        </z-tabs>
        <div class="example-desc">
            <header class="example-header"><span>附加内容</span></header>
            <div>
                设置 slot extra 可以在页签右边添加附加操作。
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
        <z-tabs :animated="false">
            <z-tab-pane label="标签一">标签一的内容</z-tab-pane>
            <z-tab-pane label="标签二">标签二的内容</z-tab-pane>
            <z-tab-pane label="标签三">标签三的内容</z-tab-pane>
        </z-tabs>
        <div class="example-desc">
            <header class="example-header"><span>不使用动画</span></header>
            <div>
                通过设置属性 animated 为 false 可以禁用动画。
            </div>
        </div>
      </z-col>
      <z-col span="12">
          <z-code-editor :content="demo9"></z-code-editor>
      </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
    <z-row :gutter="32">
        <z-col span="12" class="demo-tabs-style1" style="background: #e3e8ee;padding:16px;">
            <z-tabs type="card">
                <z-tab-pane label="标签一">标签一的内容</z-tab-pane>
                <z-tab-pane label="标签二">标签二的内容</z-tab-pane>
                <z-tab-pane label="标签三">标签三的内容</z-tab-pane>
            </z-tabs>
        </z-col>
        <z-col span="12" class="demo-tabs-style2">
            <z-tabs type="card">
                <z-tab-pane label="标签一">标签一的内容</z-tab-pane>
                <z-tab-pane label="标签二">标签二的内容</z-tab-pane>
                <z-tab-pane label="标签三">标签三的内容</z-tab-pane>
            </z-tabs>
        </z-col>
    </z-row>
    <div class="example-desc">
        <header class="example-header"><span>其它样式</span></header>
        <div>
            可以根据业务自定义 UI，需要一点额外的样式覆盖。
        </div>
    </div>
    <div class="m-t-15">
      <z-code-editor :content="demo10"></z-code-editor>
    </div>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
     <div class="demo-api">
        <div class="anchor">
            <h2 id="API">API</h2>
        </div>
        <div class="anchor">
            <h3 id="Tabs_props">Tabs props</h3>
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
                    <td>当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据</td>
                    <td>String</td>
                    <td>默认为第一项的 name</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>页签的基本样式，可选值为 <code>line</code> 和 <code>card</code></td>
                    <td>String</td>
                    <td>line</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>尺寸，可选值为 <code>default</code> 和 <code>small</code>，仅在
                        <code>type="line"</code>
                        时有效</td>
                    <td>String</td>
                    <td>default</td>
                </tr>
                <tr>
                    <td>closable</td>
                    <td>是否可以关闭页签，仅在 <code>type="card"</code> 时有效</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>animated</td>
                    <td>是否使用 CSS3 动画</td>
                    <td>Boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>capture-focus</td>
                    <td>Tabs 内的表单类组件是否自动获得焦点</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>before-remove</td>
                    <td>关闭前的函数，返回 Promise 可阻止标签关闭</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>当嵌套使用 Tabs，指定 name 区分层级</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="Tabs_events">Tabs events</h3>
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
                    <td>on-click</td>
                    <td>tab 被点击时触发</td>
                    <td>name</td>
                </tr>
                <tr>
                    <td>on-tab-remove</td>
                    <td>tab 被关闭时触发</td>
                    <td>name</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="Tabs_slot">Tabs slot</h3>
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
                    <td>extra</td>
                    <td>附加内容</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="TabPane_props">TabPane props</h3>
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
                    <td>name</td>
                    <td>用于标识当前面板，对应 value，默认为其索引值</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>选项卡头显示文字，支持 Render 函数。<span><a
                                href="https://segmentfault.com/l/1500000008892728"
                                target="_blank"><i
                                    class="zvu-icon zvu-icon-social-youtube-outline"></i>
                                <span> 学习 Render 函数的内容</span></a>

                        </span></td>
                    <td>String | Function</td>
                    <td>空</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>选项卡图标</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>是否禁用该选项卡</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>closable</td>
                    <td>是否可以关闭页签，仅在 <code>type="card"</code> 时有效</td>
                    <td>Boolean</td>
                    <td>null</td>
                </tr>
                <tr>
                    <td>tab</td>
                    <td>当嵌套使用 Tabs，设置该属性指向对应 Tabs 的 name 字段</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>index</td>
                    <td>在 TabPane 使用 v-if 时，并不会按照预先的顺序渲染，这时可设置 index，并从小到大排序(需大于 0)</td>
                    <td>Number</td>
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
  name: 'cpTabs',
  data: function () {
    return {
      // 可关闭增加TAB页数据
      tab0: true,
      tab1: true,
      tab2: true,
      label: (h) => {
        return h('div', [
          h('span', '标签一'),
          h('Badge', {
            props: {
              count: 3
            }
          })
        ])
      },
      tabs: 2,
      demo1: '<z-tabs value="name1">\r' +
              '    <z-tab-pane label="标签一" name="name1">标签一的内容</z-tab-pane>\r' +
              '    <z-tab-pane label="标签二" name="name2">标签二的内容</z-tab-pane>\r' +
              '    <z-tab-pane label="标签三" name="name3">标签三的内容</z-tab-pane>\r' +
              '</z-tabs>\r',
      demo2: ' <z-tabs value="name1">\r' +
              '   <z-tab-pane label="标签一">标签一的内容</z-tab-pane>\r' +
              '    <z-tab-pane label="标签二" disabled>标签二的内容</z-tab-pane>\r' +
              '    <z-tab-pane label="标签三" label="标签三">标签三的内容</z-tab-pane>\r' +
              '</z-tabs> \r',
      demo3: '  <z-tabs value="name1">\r' +
              '    <z-tab-pane label="macOS" icon="social-apple">标签一的内容</z-tab-pane>\r' +
              '    <z-tab-pane label="Windows" icon="social-windows">标签二的内容</z-tab-pane>\r' +
              '    <z-tab-pane label="Linux" icon="social-tux">标签三的内容</z-tab-pane>\r' +
              '</z-tabs>\r',
      demo4: '  <z-tabs size="small">\r' +
              '    <z-tab-pane label="标签一">标签一的内容</z-tab-pane>\r' +
              '    <z-tab-pane label="标签二">标签二的内容</z-tab-pane>\r' +
              '    <z-tab-pane label="标签三">标签三的内容</z-tab-pane>\r' +
              '</z-tabs>\r',
      demo5: ' <z-tabs type="card">\r' +
              '    <z-tab-pane label="标签一">标签一的内容</z-tab-pane>\r' +
              '    <z-tab-pane label="标签二">标签二的内容</z-tab-pane>\r' +
              '    <z-tab-pane label="标签三">标签三的内容</z-tab-pane>\r' +
              '</z-tabs>\r',
      demo6: ' <z-tabs type="card" closable @on-tab-remove="handleTabRemove">\r' +
              '    <z-tab-pane label="标签一" v-if="tab0">标签一的内容</z-tab-pane>\r' +
              '    <z-tab-pane label="标签二" v-if="tab1">标签二的内容</z-tab-pane>\r' +
              '    <z-tab-pane label="标签三" v-if="tab2">标签三的内容</z-tab-pane>\r' +
              '</z-tabs>\r' +
              'export default{\r' +
              '    data:function() {\r' +
              '         return {\r' +
              '              tab0: true,\r' +
              '              tab1: true,\r' +
              '              tab2: true\r' +
              '          }\r' +
              '    },\r' +
              '    methods: {\r' +
              '        handleTabRemove:function (name) {\r' +
              '            this[\'tab\'  + name] = false;\r' +
              '        }\r' +
              '   }\r' +
              '}\r',
      demo7: ' <z-tabs value="name1">\r' +
              '    <z-tab-pane :label="label" name="name1">标签一的内容</z-tab-pane>\r' +
              '    <z-tab-pane label="标签二" name="name2">标签二的内容</z-tab-pane>\r' +
              '    <z-tab-pane label="标签三" name="name3">标签三的内容</z-tab-pane>\r' +
              '</z-tabs>\r' +
              'export default{\r' +
              '    data:function() {\r' +
              '            return {\r' +
              '                label: (h) => {\r' +
              '                    return h(\'div\', [\r' +
              '                        h(\'span\', \'标签一\'),\r' +
              '                        h(\'Badge\', {\r' +
              '                            props: {\r' +
              '                                count: 3\r' +
              '                            }\r' +
              '                        })\r' +
              '                    ])\r' +
              '                }\r' +
              '            }\r' +
              '       }\r' +
              '}\r',
      demo8: ' <z-tabs type="card">\r' +
              '    <z-tab-pane v-for="tab in tabs" :key="tab" :label="\'标签\'  + tab">标签{{ tab }}</z-tab-pane>\r' +
              '    <z-button type="primary" ghost @click="handleTabsAdd" size="small" slot="extra">增加</z-button>\r' +
              '</z-tabs>\r' +
              'export default{\r' +
              '    methods: {\r' +
              '            handleTabsAdd () {\r' +
              '                this.tabs  + +;\r' +
              '            }\r' +
              '   }\r' +
              '}\r',
      demo9: ' <z-tabs :animated="false">\r' +
              '    <z-tab-pane label="标签一">标签一的内容</z-tab-pane>\r' +
              '    <z-tab-pane label="标签二">标签二的内容</z-tab-pane>\r' +
              '    <z-tab-pane label="标签三">标签三的内容</z-tab-pane>\r' +
              '</z-tabs>\r',
      demo10: '<z-row :gutter="32">\r' +
                ' <z-col span="12" class="demo-tabs-style1" style="background: #e3e8ee;padding:16px;">\r' +
              '    <z-tabs type="card">\r' +
              '        <z-tab-pane label="标签一">标签一的内容</z-tab-pane>\r' +
              '        <z-tab-pane label="标签二">标签二的内容</z-tab-pane>\r' +
              '        <z-tab-pane label="标签三">标签三的内容</z-tab-pane>\r' +
              '    </z-tabs>\r' +
              '</z-col>\r' +
              '<z-col span="12" class="demo-tabs-style2">\r' +
              '    <z-tabs type="card">\r' +
              '        <z-tab-pane label="标签一">标签一的内容</z-tab-pane>\r' +
              '        <z-tab-pane label="标签二">标签二的内容</z-tab-pane>\r' +
              '        <z-tab-pane label="标签三">标签三的内容</z-tab-pane>\r' +
              '    </z-tabs>\r' +
              '</z-col>\r' +
              '</z-row>\r'
    }
  },
  methods: {
    handleTabRemove: function (name) {
      this['tab' + name] = false
    },
    handleTabsAdd () {
      this.tabs++
    }
  }
}
</script>
<style scoped>
 /* 样式为demo10 */
  .demo-tabs-style1>.zvu-tabs-card>.zvu-tabs-content {
      height: 120px;
  }
  .demo-tabs-style1>.zvu-tabs-card>.zvu-tabs-content>.zvu-tabs-tabpane {
      background: #fff;
      padding: 16px;
  }
  .demo-tabs-style1>.zvu-tabs.zvu-tabs-card>.zvu-tabs-bar .zvu-tabs-tab {
      border-color: transparent;
  }
  .demo-tabs-style1>.zvu-tabs-card>.zvu-tabs-bar .zvu-tabs-tab-active {
      border-color: #fff;
  }
  .demo-tabs-style2>.zvu-tabs.zvu-tabs-card>.zvu-tabs-bar .zvu-tabs-tab {
      border-radius: 0;
      background: #fff;
  }
  .demo-tabs-style2>.zvu-tabs.zvu-tabs-card>.zvu-tabs-bar .zvu-tabs-tab-active {
      border-top: 1px solid #3399ff;
      color: #3399ff;
  }
  .demo-tabs-style2>.zvu-tabs.zvu-tabs-card>.zvu-tabs-bar .zvu-tabs-tab-active:before {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: #3399ff;
      position: absolute;
      top: 0;
      left: 0;
  }
  .zvu-tabs-tabpane {
      padding: 10px 0px;
  }
</style>
