<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-08 14:15:45
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
    <z-row :gutter="15">
      <z-col span="12">
        <z-poptip trigger="hover" title="提示标题" content="提示内容">
            <z-button>hover 激活</z-button>
        </z-poptip>
        <z-poptip title="提示标题" content="提示内容">
            <z-button>click 激活</z-button>
        </z-poptip>
        <z-poptip trigger="focus" title="提示标题" content="提示内容">
            <z-button>focus 激活</z-button>
        </z-poptip>
        <z-poptip trigger="focus" title="提示标题" content="提示内容">
            <z-input placeholder="输入框的 focus"></z-input>
        </z-poptip>
        <div class="example-desc">
            <header class="example-header"><span>基础用法</span></header>
            <p>支持三种触发方式：鼠标悬停、点击、聚焦。默认是点击。</p>
            <p>注意 Poptip 内的文本使用了 white-space: nowrap;，即不自动换行，如需展示很多内容并自动换行时，建议给内容 slot 增加样式
                white-space: normal;。</p>
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
         <div class="top">
            <z-poptip title="提示标题" content="提示内容" placement="top-start">
                <z-button>上左</z-button>
            </z-poptip>
            <z-poptip title="提示标题" content="提示内容" placement="top">
                <z-button>上边</z-button>
            </z-poptip>
            <z-poptip title="提示标题" content="提示内容" placement="top-end">
                <z-button>上右</z-button>
            </z-poptip>
        </div>
        <div class="center">
            <div class="center-left">
                <z-poptip title="提示标题" content="提示内容" placement="left-start">
                    <z-button>左上</z-button>
                </z-poptip><br><br>
                <z-poptip title="提示标题" content="提示内容" placement="left">
                    <z-button>左边</z-button>
                </z-poptip><br><br>
                <z-poptip title="提示标题" content="提示内容" placement="left-end">
                    <z-button>左下</z-button>
                </z-poptip>
            </div>
            <div class="center-right">
                <z-poptip title="提示标题" content="提示内容" placement="right-start">
                    <z-button>右上</z-button>
                </z-poptip><br><br>
                <z-poptip title="提示标题" content="提示内容" placement="right">
                    <z-button>右边</z-button>
                </z-poptip><br><br>
                <z-poptip title="提示标题" content="提示内容" placement="right-end">
                    <z-button>右下</z-button>
                </z-poptip>
            </div>
        </div>
        <div class="bottom">
            <z-poptip title="提示标题" content="提示内容" placement="bottom-start">
                <z-button>下左</z-button>
            </z-poptip>
            <z-poptip title="提示标题" content="提示内容" placement="bottom">
                <z-button>下边</z-button>
            </z-poptip>
            <z-poptip title="提示标题" content="提示内容" placement="bottom-end">
                <z-button>下右</z-button>
            </z-poptip>
        </div>
        <div class="example-desc">
            <header class="example-header"><span>位置</span></header>
            <p>组件提供了12个不同的方向显示Poptip，具体配置可查看API。</p>
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
        <z-poptip v-model="visible">
            <a>click 激活</a>
            <div slot="title"><i>自定义标题</i></div>
            <div slot="content">
                <a @click="close">关闭提示框</a>
            </div>
        </z-poptip>
        <div class="example-desc">
            <header class="example-header"><span>从浮层内关闭</span></header>
            <p>通过v-model来控制提示框的显示和隐藏。</p>
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
        <z-poptip placement="right" width="400">
          <z-button type="primary" ghost>click 激活</z-button>
          <div class="api" slot="content">
              <table>
                  <thead>
                      <tr>
                          <th>版本号</th>
                          <th>更新时间</th>
                          <th>说明</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>0.9.5</td>
                          <td>2016-10-26</td>
                          <td>新增信息提示组件 <code>Tooltip</code>和<code>Poptip</code></td>
                      </tr>
                      <tr>
                          <td>0.9.4</td>
                          <td>2016-10-25</td>
                          <td>新增对话框组件 <code>Modal</code></td>
                      </tr>
                      <tr>
                          <td>0.9.2</td>
                          <td>2016-09-28</td>
                          <td>新增选择器组件 <code>Select</code></td>
                      </tr>
                  </tbody>
              </table>
          </div>
        </z-poptip>
        <div class="example-desc">
            <header class="example-header"><span>嵌套复杂内容</span></header>
            <p>通过自定义 slot 来实现复杂的内容。</p>
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
          <h3 id="Poptip_props">Poptip props</h3>
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
                  <td>触发方式，可选值为<code>hover</code>（悬停）<code>click</code>（点击）<code>focus</code>（聚焦）,在
                      confirm 模式下，只有
                      click 有效</td>
                  <td>String</td>
                  <td>click</td>
              </tr>
              <tr>
                  <td>title</td>
                  <td>显示的标题</td>
                  <td>String | Number</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>content</td>
                  <td>显示的正文内容，只在非 confirm 模式下有效</td>
                  <td>String | Number</td>
                  <td>空</td>
              </tr>
              <tr>
                  <td>placement</td>
                  <td>提示框出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>，2.12.0
                      版本开始支持自动识别</td>
                  <td>String</td>
                  <td>top</td>
              </tr>
              <tr>
                  <td>width</td>
                  <td>宽度，最小宽度为 150px，在 confirm 模式下，默认最大宽度为 300px</td>
                  <td>String | Number</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>confirm</td>
                  <td>是否开启对话框模式</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>ok-text</td>
                  <td>确定按钮的文字，只在 confirm 模式下有效</td>
                  <td>String</td>
                  <td>确定</td>
              </tr>
              <tr>
                  <td>cancel-text</td>
                  <td>取消按钮的文字，只在 confirm 模式下有效</td>
                  <td>String</td>
                  <td>取消</td>
              </tr>
              <tr>
                  <td>transfer</td>
                  <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果
                  </td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>popper-class</td>
                  <td>给 Poptip 设置 class-name，在使用 transfer 时会很有用</td>
                  <td>String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>options</td>
                  <td>自定义 popper.js 的配置项，具体配置见 <a
                          href="https://popper.js.org/popper-documentation.html"
                          target="_blank">popper.js
                          文档</a></td>
                  <td>Object</td>
                  <td>
                      <div style="width:200px">
                          {modifiers: {
                          computeStyle:{
                          gpuAcceleration: <span class="hljs-literal">false</span>,
                          },
                          preventOverflow :{
                          boundariesElement: <span class="hljs-string">'window'</span>
                          }
                          }
                          }

                          <span class="scale">
                              <div class="zvu-tooltip">
                                  <div class="zvu-tooltip-rel"><i
                                          class="zvu-icon zvu-icon-qr-scanner"
                                          style="font-size: 18px;"></i></div>
                              </div>
                          </span> <span class="copy">
                              <div class="zvu-tooltip">
                                  <div class="zvu-tooltip-rel"><i
                                          class="zvu-icon zvu-icon-clipboard"
                                          style="font-size: 18px;"></i> <i
                                          class="zvu-icon zvu-icon-checkmark"
                                          style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i>
                                  </div>
                              </div>
                          </span>
                      </div>
                  </td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3 id="Poptip_events">Poptip events</h3>
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
                  <td>on-popper-show</td>
                  <td>在提示框显示时触发</td>
                  <td>无</td>
              </tr>
              <tr>
                  <td>on-popper-hide</td>
                  <td>在提示框消失时触发</td>
                  <td>无</td>
              </tr>
              <tr>
                  <td>on-ok</td>
                  <td>点击确定的回调，只在 confirm 模式下有效</td>
                  <td>无</td>
              </tr>
              <tr>
                  <td>on-cancel</td>
                  <td>点击取消的回调，只在 confirm 模式下有效</td>
                  <td>无</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3 id="Poptip_slot">Poptip slot</h3>
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
                  <td>title</td>
                  <td>提示框标题，定义此 slot 时，会覆盖 props <code>title</code></td>
              </tr>
              <tr>
                  <td>content</td>
                  <td>提示框内容，定义此 slot 时，会覆盖 props <code>content</code>，只在非 confirm 模式下有效</td>
              </tr>
          </tbody>
      </table>
    </div>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpPoptip',
  data: function () {
    return {
      visible: false,
      tableData: [
        {attribute: 'trigger', explain: '显示的内容', type: 'String', default: 'click'},
        {attribute: 'title', explain: '显示的标题', type: 'String | Number', default: '-'},
        {attribute: 'content', explain: '显示的正文内容，只在非 confirm 模式下有效', type: 'String | Number', default: '空'},
        {attribute: 'placement', explain: '提示框出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end`', type: 'String', default: 'top'},
        {attribute: 'slot', explain: '显示多行文本或复杂样式', type: 'function', default: '-'},
        {attribute: 'width', explain: '宽度，最小宽度为 150px，在 confirm 模式下，默认最大宽度为 300px', type: 'String | Number', default: '-'},
        {attribute: 'confirm', explain: '是否开启对话框模式', type: 'Boolean', default: 'false'},
        {attribute: 'ok-text', explain: '确定按钮的文字，只在 confirm 模式下有效', type: 'String', default: '确定'},
        {attribute: 'cancel-text', explain: '取消按钮的文字，只在 confirm 模式下有效', type: 'String', default: '取消'},
        {attribute: 'transfer', explain: '是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果', type: 'Boolean', default: 'false'}
      ],
      eventData: [
        {name: 'on-popper-show', explain: '在提示框显示时触发', back: '无'},
        {name: 'on-popper-hide', explain: '在提示框消失时触发', back: '无'},
        {name: 'on-ok', explain: '点击确定的回调，只在 confirm 模式下有效', back: '无'},
        {name: 'on-cancel', explain: '点击取消的回调，只在 confirm 模式下有效', back: '无'}
      ],
      demo1: '<z-poptip trigger="hover" title="提示标题" content="提示内容">\r' +
            '    <z-button>hover 激活</z-button>\r' +
            '</z-poptip>\r' +
            '<z-poptip title="提示标题" content="提示内容">\r' +
            '    <z-button>click 激活</z-button>\r' +
            '</z-poptip>\r' +
            '<z-poptip trigger="focus" title="提示标题" content="提示内容">\r' +
            '    <z-button>focus 激活</z-button>\r' +
            '</z-poptip>\r' +
            '<z-poptip trigger="focus" title="提示标题" content="提示内容">\r' +
            '    <z-input placeholder="输入框的 focus"></z-input>\r' +
            '</z-poptip>\r',
      demo2: ' <div class="top">\r' +
            '    <z-poptip title="提示标题" content="提示内容" placement="top-start">\r' +
            '        <z-button>上左</z-button>\r' +
            '    </z-poptip>\r' +
            '    <z-poptip title="提示标题" content="提示内容" placement="top">\r' +
            '        <z-button>上边</z-button>\r' +
            '    </z-poptip>\r' +
            '    <z-poptip title="提示标题" content="提示内容" placement="top-end">\r' +
            '        <z-button>上右</z-button>\r' +
            '    </z-poptip>\r' +
            '</div>\r' +
            '<div class="center">\r' +
            '    <div class="center-left">\r' +
            '       <z-poptip title="提示标题" content="提示内容" placement="left-start">\r' +
            '            <z-button>左上</z-button>\r' +
            '         </z-poptip><br><br>\r' +
            '        <z-poptip title="提示标题" content="提示内容" placement="left">\r' +
            '           <z-button>左边</z-button>\r' +
            '        </z-poptip><br><br>\r' +
            '        <z-poptip title="提示标题" content="提示内容" placement="left-end">\r' +
            '            <z-button>左下</z-button>\r' +
            '        </z-poptip>\r' +
            '    </div>\r' +
            '    <div class="center-right">\r' +
            '        <z-poptip title="提示标题" content="提示内容" placement="right-start">\r' +
            '            <z-button>右上</z-button>\r' +
            '        </z-poptip><br><br>\r' +
            '        <z-poptip title="提示标题" content="提示内容" placement="right">\r' +
            '            <z-button>右边</z-button>\r' +
            '        </z-poptip><br><br>\r' +
            '        <z-poptip title="提示标题" content="提示内容" placement="right-end">\r' +
            '            <z-button>右下</z-button>\r' +
            '        </z-poptip>\r' +
            '    </div>\r' +
            '</div>\r' +
            '<div class="bottom">\r' +
            '    <z-poptip title="提示标题" content="提示内容" placement="bottom-start">\r' +
            '        <z-button>下左</z-button>\r' +
            '   </z-poptip>\r' +
            '    <z-poptip title="提示标题" content="提示内容" placement="bottom">\r' +
            '        <z-button>下边</z-button>\r' +
            '    </z-poptip>\r' +
            '    <z-poptip title="提示标题" content="提示内容" placement="bottom-end">\r' +
            '         <z-button>下右</z-button>\r' +
            '    </z-poptip>\r' +
            '</div>\r',
      demo3: '<z-poptip v-model="visible">\r' +
            '    <a>click 激活</a>\r' +
            '    <div slot="title"><i>自定义标题</i></div>\r' +
            '    <div slot="content">\r' +
            '        <a @click="close">关闭提示框</a>\r' +
            '    </div>\r' +
            '</z-poptip>\r' +
            'export default {\r' +
            '    data:function() {\r' +
            '        return {\r' +
            '            visible: false\r' +
            '        }\r' +
            '    },\r' +
            '    methods: {\r' +
            '        close () {\r' +
            '            this.visible = false;\r' +
            '        }\r' +
            '    }\r' +
            '}\r',
      demo4: '<z-poptip placement="right" width="400">\r' +
            '<z-button type="primary" ghost>click 激活</z-button>\r' +
            '<div class="api" slot="content">\r' +
            '    <table>\r' +
            '        <thead>\r' +
            '            <tr>\r' +
            '                <th>版本号</th>\r' +
            '                <th>更新时间</th>\r' +
            '                <th>说明</th>\r' +
            '            </tr>\r' +
            '        </thead>\r' +
            '        <tbody>\r' +
            '            <tr>\r' +
            '                <td>0.9.5</td>\r' +
            '                <td>2016-10-26</td>\r' +
            '                <td>新增信息提示组件 <code>Tooltip</code>和<code>Poptip</code></td>\r' +
            '            </tr>\r' +
            '            <tr>\r' +
            '                <td>0.9.4</td>\r' +
            '                <td>2016-10-25</td>\r' +
            '                <td>新增对话框组件 <code>Modal</code></td>\r' +
            '            </tr>\r' +
            '            <tr>\r' +
            '                <td>0.9.2</td>\r' +
            '                <td>2016-09-28</td>\r' +
            '                <td>新增选择器组件 <code>Select</code></td>\r' +
            '            </tr>\r' +
            '        </tbody>\r' +
            '    </table>\r' +
            '</div>\r' +
            '</z-poptip>\r' +
            'export default {\r' +
            '    data:function() {\r' +
            '        return {\r' +
            '            disabled: false\r' +
            '        }\r' +
            '    }\r' +
            '}\r',
      demo5: '<z-poptip\r' +
            '        confirm\r' +
            '        title="您确认删除这条内容吗？"\r' +
            '        @on-ok="ok"\r' +
            '        @on-cancel="cancel">\r' +
            '    <z-button>删除</z-button>\r' +
            '</z-poptip>\r' +
            '<z-poptip\r' +
            '        confirm\r' +
            '        title="Are you sure delete this task?"\r' +
            '        @on-ok="ok"\r' +
            '        @on-cancel="cancel"\r' +
            '        ok-text="yes"\r' +
            '        cancel-text="no">\r' +
            '    <z-button>国际化</z-button>\r' +
            '</z-poptip>\r' +
            'export default {\r' +
            '    methods: {\r' +
            '        ok () {\r' +
            '            this.$Message.info(\'点击了确定\');\r' +
            '        },\r' +
            '        cancel () {\r' +
            '            this.$Message.info(\'点击了取消\');\r' +
            '        }\r' +
            '    }\r' +
            '}\r'

    }
  },
  methods: {
    close: function () {
      this.visible = false
    },
    ok: function () {
      this.$Message.info('点击了确定')
    },
    cancel: function () {
      this.$Message.info('点击了取消')
    }
  }
}
</script>
<style scoped>
.top,
.bottom {
    text-align: center;
}
.center {
    width: 300px;
    margin: 10px auto;
    overflow: hidden;
}
.center-left {
    float: left;
}
.center-right {
    float: right;
}
</style>
