<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-03-17 16:19:09
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
    <z-row :gutter="15">
      <z-col span="12">
        <z-dropdown>
          <a href="javascript:void(0)">下拉菜单<z-icon type="arrow-down-b"></z-icon>
          </a>
          <z-dropdown-menu slot="list">
              <z-dropdown-item>驴打滚</z-dropdown-item>
              <z-dropdown-item>炸酱面</z-dropdown-item>
              <z-dropdown-item disabled>豆汁儿</z-dropdown-item>
              <z-dropdown-item>冰糖葫芦</z-dropdown-item>
              <z-dropdown-item divided>北京烤鸭</z-dropdown-item>
          </z-dropdown-menu>
      </z-dropdown>
      <z-dropdown style="margin-left: 20px">
          <z-button type="primary">下拉菜单<z-icon type="arrow-down-b"></z-icon>
          </z-button>
          <z-dropdown-menu slot="list">
              <z-dropdown-item>驴打滚</z-dropdown-item>
              <z-dropdown-item>炸酱面</z-dropdown-item>
              <z-dropdown-item disabled>豆汁儿</z-dropdown-item>
              <z-dropdown-item>冰糖葫芦</z-dropdown-item>
              <z-dropdown-item divided>北京烤鸭</z-dropdown-item>
          </z-dropdown-menu>
      </z-dropdown>
      <div class="example-desc">
          <header class="example-header"><span>基础用法</span></header>
          <div>
              <p>需要配合 <code>DropdownMenu</code> 和 <code>DropdownItem</code> 两个组件来使用，并且给列表设置具名
                  slot 为 <code>list</code>。</p>
              <p>触发对象可以是链接、按钮等各种元素。</p>
              <p>本例还展示了禁用项和分隔线。</p>
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
         <z-dropdown>
            <a href="javascript:void(0)">
                hover 触发
                <z-icon type="arrow-down-b"></z-icon>
            </a>
            <dropdown-menu slot="list">
                <dropdown-item>驴打滚</dropdown-item>
                <dropdown-item>炸酱面</dropdown-item>
                <dropdown-item>豆汁儿</dropdown-item>
                <dropdown-item>冰糖葫芦</dropdown-item>
                <dropdown-item>北京烤鸭</dropdown-item>
            </dropdown-menu>
        </z-dropdown>
        <z-dropdown trigger="click" style="margin-left: 20px">
            <a href="javascript:void(0)">
                click 触发
                <z-icon type="arrow-down-b"></z-icon>
            </a>
            <dropdown-menu slot="list">
                <dropdown-item>驴打滚</dropdown-item>
                <dropdown-item>炸酱面</dropdown-item>
                <dropdown-item>豆汁儿</dropdown-item>
                <dropdown-item>冰糖葫芦</dropdown-item>
                <dropdown-item>北京烤鸭</dropdown-item>
            </dropdown-menu>
        </z-dropdown>
        <z-dropdown trigger="custom" :visible="visible" style="margin-left: 20px">
            <a href="javascript:void(0)" @click="handleOpen">
                custom 触发
                <z-icon type="arrow-down-b"></z-icon>
            </a>
            <dropdown-menu slot="list">
                <p>常用于各种自定义下拉内容的场景。</p>
                <div style="text-align: right;margin:10px;">
                    <z-button type="primary" @click="handleClose">关闭</z-button>
                </div>
            </dropdown-menu>
        </z-dropdown>
        <div class="example-desc">
            <header class="example-header"><span>触发方式</span></header>
            <div>
                <p>通过设置属性 trigger 可以更改触发方式，可选项为 click 、 hover(默认) 或 custom(自定义)。</p>
                <p>触发方式设置为 custom 自定义时，需手动设置 visible 属性来控制下拉框的显示。</p>
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
        <z-dropdown placement="bottom-start">
          <a href="javascript:void(0)">
              菜单(左)
              <z-icon type="arrow-down-b"></z-icon>
          </a>
          <dropdown-menu slot="list">
              <dropdown-item>驴打滚</dropdown-item>
              <dropdown-item>炸酱面</dropdown-item>
              <dropdown-item>豆汁儿</dropdown-item>
              <dropdown-item>冰糖葫芦</dropdown-item>
              <dropdown-item>北京烤鸭</dropdown-item>
          </dropdown-menu>
        </z-dropdown>
        <z-dropdown style="margin-left: 20px">
            <a href="javascript:void(0)">
                菜单(居中)
                <z-icon type="arrow-down-b"></z-icon>
            </a>
            <dropdown-menu slot="list">
                <dropdown-item>驴打滚</dropdown-item>
                <dropdown-item>炸酱面</dropdown-item>
                <dropdown-item>豆汁儿</dropdown-item>
                <dropdown-item>冰糖葫芦</dropdown-item>
                <dropdown-item>北京烤鸭</dropdown-item>
            </dropdown-menu>
        </z-dropdown>
        <z-dropdown style="margin-left: 20px" placement="bottom-end">
            <a href="javascript:void(0)">
                菜单(右)
                <z-icon type="arrow-down-b"></z-icon>
            </a>
            <dropdown-menu slot="list">
                <dropdown-item>驴打滚</dropdown-item>
                <dropdown-item>炸酱面</dropdown-item>
                <dropdown-item>豆汁儿</dropdown-item>
                <dropdown-item>冰糖葫芦</dropdown-item>
                <dropdown-item>北京烤鸭</dropdown-item>
            </dropdown-menu>
        </z-dropdown>
        <div class="example-desc">
            <header class="example-header"><span>对齐方向</span></header>
            <div>
                <p>通过设置属性 placement 可以更改下拉菜单出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。</p>
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
        <z-dropdown>
            <a href="javascript:void(0)">
                北京小吃
                <z-icon type="arrow-down-b"></z-icon>
            </a>
            <dropdown-menu slot="list">
                <dropdown-item>驴打滚</dropdown-item>
                <dropdown-item>炸酱面</dropdown-item>
                <dropdown-item>豆汁儿</dropdown-item>
                <z-dropdown placement="right-start">
                    <dropdown-item>
                        北京烤鸭
                        <z-icon type="ios-arrow-right"></z-icon>
                    </dropdown-item>
                    <dropdown-menu slot="list">
                        <dropdown-item>挂炉烤鸭</dropdown-item>
                        <dropdown-item>焖炉烤鸭</dropdown-item>
                    </dropdown-menu>
                </z-dropdown>
                <dropdown-item>冰糖葫芦</dropdown-item>
            </dropdown-menu>
        </z-dropdown>
        <div class="example-desc">
            <header class="example-header"><span>嵌套用法</span></header>
            <div>
                <p>下拉菜单可以进行嵌套实现级联的效果，嵌套时注意设置子集的展开方向。</p>
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
            <h3 id="Dropdown_props">Dropdown props</h3>
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
                    <td>trigger</td>
                    <td>触发方式，可选值为
                        <code>hover</code>（悬停）<code>click</code>（点击）<code>custom</code>（自定义），使用
                        custom 时，需配合
                        visible 一起使用</td>
                    <td>String</td>
                    <td>hover</td>
                </tr>
                <tr>
                    <td>visible</td>
                    <td>手动控制下拉框的显示，在 trigger = 'custom' 时使用</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>placement</td>
                    <td>下拉菜单出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>,
                        2.12.0 版本开始支持自动识别</td>
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
                <tr><td>transfer-class-name</td> <td>开启 transfer 时，给浮层添加额外的 class 名称</td> <td>String</td> <td>-</td></tr>
                <tr><td>stop-propagation</td> <td>是否开启 stop-propagation</td> <td>Boolean</td> <td>false</td></tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="Dropdown_events">Dropdown events</h3>
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
                    <td>点击菜单项时触发</td>
                    <td>DropdownItem 的 name 值</td>
                </tr>
                <tr>
                    <td>on-visible-change</td>
                    <td>菜单显示状态改变时调用</td>
                    <td>visible</td>
                </tr>
                <tr>
                    <td>on-clickoutside</td>
                    <td>点击外部关闭下拉菜单时触发</td>
                    <td>event</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="Dropdown_slot">Dropdown slot</h3>
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
                    <td>主体内容</td>
                </tr>
                <tr>
                    <td>list</td>
                    <td>列表内容，一般由 <code>DropdownMenu</code> 承担</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="DropdownItem_props">DropdownItem props</h3>
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
                    <td>用来标识这一项</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>禁用该项</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>divided</td>
                    <td>显示分割线</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>selected</td>
                    <td>标记该项为选中状态</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
            </tbody>
        </table>
    </div>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpDropdown',
  data: function () {
    return {
      visible: false,
      demo1: ' <z-dropdown>\r' +
              '    <a href="javascript:void(0)">下拉菜单<z-icon type="arrow-down-b"></z-icon>\r' +
              '    </a>\r' +
              '    <z-dropdown-menu slot="list">\r' +
              '        <z-dropdown-item>驴打滚</z-dropdown-item>\r' +
              '        <z-dropdown-item>炸酱面</z-dropdown-item>\r' +
              '        <z-dropdown-item disabled>豆汁儿</z-dropdown-item>\r' +
              '        <z-dropdown-item>冰糖葫芦</z-dropdown-item>\r' +
              '        <z-dropdown-item divided>北京烤鸭</z-dropdown-item>\r' +
              '    </z-dropdown-menu>\r' +
              '</z-dropdown>\r' +
              '<z-dropdown style="margin-left: 20px">\r' +
              '    <z-button type="primary">下拉菜单<z-icon type="arrow-down-b"></z-icon>\r' +
              '    </z-button>\r' +
              '    <z-dropdown-menu slot="list">\r' +
              '        <z-dropdown-item>驴打滚</z-dropdown-item>\r' +
              '        <z-dropdown-item>炸酱面</z-dropdown-item>\r' +
              '        <z-dropdown-item disabled>豆汁儿</z-dropdown-item>\r' +
              '        <z-dropdown-item>冰糖葫芦</z-dropdown-item>\r' +
              '        <z-dropdown-item divided>北京烤鸭</z-dropdown-item>\r' +
              '     </z-dropdown-menu>\r' +
              '</z-dropdown>\r',
      demo2: '<z-dropdown>\r' +
              '    <a href="javascript:void(0)">\r' +
              '        hover 触发\r' +
              '        <z-icon type="arrow-down-b"></z-icon>\r' +
              '    </a>\r' +
              '    <dropdown-menu slot="list">\r' +
              '        <dropdown-item>驴打滚</dropdown-item>\r' +
              '        <dropdown-item>炸酱面</dropdown-item>\r' +
              '        <dropdown-item>豆汁儿</dropdown-item>\r' +
              '        <dropdown-item>冰糖葫芦</dropdown-item>\r' +
              '        <dropdown-item>北京烤鸭</dropdown-item>\r' +
              '    </dropdown-menu>\r' +
              '</z-dropdown>\r' +
              '<z-dropdown trigger="click" style="margin-left: 20px">\r' +
              '    <a href="javascript:void(0)">\r' +
              '        click 触发\r' +
              '        <z-icon type="arrow-down-b"></z-icon>\r' +
              '    </a>\r' +
              '    <dropdown-menu slot="list">\r' +
              '        <dropdown-item>驴打滚</dropdown-item>\r' +
              '        <dropdown-item>炸酱面</dropdown-item>\r' +
              '        <dropdown-item>豆汁儿</dropdown-item>\r' +
              '        <dropdown-item>冰糖葫芦</dropdown-item>\r' +
              '        <dropdown-item>北京烤鸭</dropdown-item>\r' +
              '    </dropdown-menu>\r' +
              '</z-dropdown>\r' +
              '<z-dropdown trigger="custom" :visible="visible" style="margin-left: 20px">\r' +
              '    <a href="javascript:void(0)" @click="handleOpen">\r' +
              '        custom 触发\r' +
              '        <z-icon type="arrow-down-b"></z-icon>\r' +
              '    </a>\r' +
              '   <dropdown-menu slot="list">\r' +
              '        <p>常用于各种自定义下拉内容的场景。</p>\r' +
              '        <div style="text-align: right;margin:10px;">\r' +
              '            <z-button type="primary" @click="handleClose">关闭</z-button>\r' +
              '        </div>\r' +
              '    </dropdown-menu>\r' +
              '</z-dropdown>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '             visible: false\r' +
              '        }\r' +
              '    },\r' +
              '    methods: {\r' +
              '        handleOpen:function() {\r' +
              '            this.visible = true;\r' +
              '        },\r' +
              '        handleClose:function () {\r' +
              '            this.visible = false;\r' +
              '        }\r' +
              '   }\r' +
              '}\r',
      demo3: '<z-dropdown placement="bottom-start">\r' +
              '    <a href="javascript:void(0)">\r' +
              '        菜单(左)\r' +
              '        <z-icon type="arrow-down-b"></z-icon>\r' +
              '    </a>\r' +
              '    <dropdown-menu slot="list">\r' +
              '        <dropdown-item>驴打滚</dropdown-item>\r' +
              '        <dropdown-item>炸酱面</dropdown-item>\r' +
              '       <dropdown-item>豆汁儿</dropdown-item>\r' +
              '        <dropdown-item>冰糖葫芦</dropdown-item>\r' +
              '        <dropdown-item>北京烤鸭</dropdown-item>\r' +
              '    </dropdown-menu>\r' +
              '</z-dropdown>\r' +
              '<z-dropdown style="margin-left: 20px">\r' +
              '   <a href="javascript:void(0)">\r' +
              '        菜单(居中)\r' +
              '        <z-icon type="arrow-down-b"></z-icon>\r' +
              '   </a>\r' +
              '    <dropdown-menu slot="list">\r' +
              '        <dropdown-item>驴打滚</dropdown-item>\r' +
              '       <dropdown-item>炸酱面</dropdown-item>\r' +
              '        <dropdown-item>豆汁儿</dropdown-item>\r' +
              '        <dropdown-item>冰糖葫芦</dropdown-item>\r' +
              '        <dropdown-item>北京烤鸭</dropdown-item>\r' +
              '    </dropdown-menu>\r' +
              '</z-dropdown>\r' +
              '<z-dropdown style="margin-left: 20px" placement="bottom-end">\r' +
              '    <a href="javascript:void(0)">\r' +
              '        菜单(右)\r' +
              '        <z-icon type="arrow-down-b"></z-icon>\r' +
              '    </a>\r' +
              '    <dropdown-menu slot="list">\r' +
              '       <dropdown-item>驴打滚</dropdown-item>\r' +
              '        <dropdown-item>炸酱面</dropdown-item>\r' +
              '        <dropdown-item>豆汁儿</dropdown-item>\r' +
              '        <dropdown-item>冰糖葫芦</dropdown-item>\r' +
              '        <dropdown-item>北京烤鸭</dropdown-item>\r' +
              '    </dropdown-menu>\r' +
              '</z-dropdown>\r',
      demo4: '<z-dropdown>\r' +
              '    <a href="javascript:void(0)">\r' +
              '       北京小吃\r' +
              '        <z-icon type="arrow-down-b"></z-icon>\r' +
              '    </a>\r' +
              '    <dropdown-menu slot="list">\r' +
              '       <dropdown-item>驴打滚</dropdown-item>\r' +
              '        <dropdown-item>炸酱面</dropdown-item>\r' +
              '        <dropdown-item>豆汁儿</dropdown-item>\r' +
              '        <z-dropdown placement="right-start">\r' +
              '            <dropdown-item>\r' +
              '                北京烤鸭\r' +
              '               <z-icon type="ios-arrow-right"></z-icon>\r' +
              '            </dropdown-item>\r' +
              '            <dropdown-menu slot="list">\r' +
              '                <dropdown-item>挂炉烤鸭</dropdown-item>\r' +
              '                <dropdown-item>焖炉烤鸭</dropdown-item>\r' +
              '            </dropdown-menu>\r' +
              '        </z-dropdown>\r' +
              '        <dropdown-item>冰糖葫芦</dropdown-item>\r' +
              '    </dropdown-menu>\r' +
              '</z-dropdown>\r'
    }
  },
  methods: {
    handleOpen: function () {
      this.visible = true
    },
    handleClose: function () {
      this.visible = false
    }
  }
}
</script>
<style scoped>
</style>
