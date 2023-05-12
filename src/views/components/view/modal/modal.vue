<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-08 11:19:19
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
      <z-row :gutter="15">
        <z-col span="12">
           <z-button type="primary" @click="modal1 = true">显示对话框</z-button>
              <z-modal v-model="modal1" title="Common z-modal dialog box title" @on-ok="ok"
                  @on-cancel="cancel">
                  <p>Content of dialog</p>
                  <p>Content of dialog</p>
                  <p>Content of dialog</p>
              </z-modal>
              <div class="example-desc">
                  <header class="example-header"><span>基础用法</span></header>
                  <div>
                      <p>最简单的使用方法，通过控制属性visible来显示 / 隐藏对话框。</p>
                      <p>可以使用 v-model 实现双向绑定。</p>
                      <p>默认按键盘ESC键也可以关闭。</p>
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
        <z-button @click="modal2 = true">自定义页头和页脚</z-button>
        <z-modal v-model="modal2" width="360">
            <p slot="header" style="color:#f60;text-align:center">
                <z-icon type="information-circled"></z-icon>
                <span>Delete confirmation</span>
            </p>
            <div style="text-align:center">
                <p>After this task is deleted, the downstream 10 tasks will not be implemented.</p>
                <p>Will you delete it?</p>
            </div>
            <div slot="footer">
                <z-button type="error" size="large" long :loading="modal_loading" @click="del">
                    Delete</z-button>
            </div>
        </z-modal>
        <z-button @click="modal3 = true">不带标题栏</z-button>
        <z-modal v-model="modal3">
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
        </z-modal>
        <z-button @click="modal4 = true">国际化</z-button>
        <z-modal v-model="modal4" title="z-modal Title" ok-text="OK" cancel-text="Cancel">
            <p>Something...</p>
            <p>Something...</p>
            <p>Something...</p>
        </z-modal>
        <z-button @click="modal5 = true">设置宽度</z-button>
        <z-modal v-model="modal5" title="Custom width" width="300">
            <p>Customize width, unit px, default 520px.</p>
            <p>The width of the dialog box is responsive, and the width becomes <code>auto</code>
                when the screen size is less than 768px.</p>
        </z-modal>
        <div class="example-desc">
            <header class="example-header"><span>自定义样式</span></header>
            <div>
                <p>z-modal 组件提供了灵活的自定义样式 API 和 Slot，可以自由控制整个 z-modal 的各个组成部分，比如页头、页脚、关闭按钮。</p>
                <p>通过和其它组件的交互，能实现更复杂的功能，满足了大多业务场景。</p>
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
         <z-button type="primary" @click="modal6 = true">显示对话框</z-button>
          <z-modal v-model="modal6" title="Title" :loading="loading" @on-ok="asyncOK">
              <p>After you click ok, the dialog box will close in 2 seconds.</p>
          </z-modal>
          <div class="example-desc">
              <header class="example-header"><span>异步关闭</span></header>
              <div>
                  <p>给z-modal添加属性loading后，点击确定按钮对话框不会自动消失，并显示 loading 状态，需要手动关闭对话框，常用于表单提交。</p>
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
          <z-button @click="modal7 = true">禁用右上角关闭（含esc键）</z-button>
          <z-modal title="Title" v-model="modal7" :closable="false">
              <p>Content of dialog</p>
              <p>Content of dialog</p>
              <p>Content of dialog</p>
          </z-modal>
          <z-button @click="modal8 = true">禁用遮罩层关闭</z-button>
          <z-modal title="Title" v-model="modal8" :mask-closable="false">
              <p>Content of dialog</p>
              <p>Content of dialog</p>
              <p>Content of dialog</p>
          </z-modal>
          <div class="example-desc">
              <header class="example-header"><span>禁用关闭</span></header>
              <div>
                  <p>可以禁用关闭和遮罩层关闭。</p>
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
        <z-button @click="modal9 = true">距离顶部20px</z-button>
        <z-modal title="Title" v-model="modal9" :styles="{top: '20px'}">
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
        </z-modal>
        <z-button @click="modal10 = true">垂直居中</z-button>
        <z-modal title="Title" v-model="modal10" class-name="vertical-center-modal">
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
        </z-modal>
        <div class="example-desc">
            <header class="example-header"><span>自定义位置</span></header>
            <div>
                <p>可以自定义 Modal 的对话框样式 以及 对话框 Wrap 的 class 名称，从而实现更多自定义的样式，比如垂直居中。</p>
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
        <z-button @click="modal11 = true">Open a fullscreen modal</z-button>
        <z-modal v-model="modal11" fullscreen title="Fullscreen z-modal">
            <div>This is a fullscreen modal</div>
        </z-modal>
        <div class="example-desc">
            <header class="example-header"><span>全屏</span></header>
            <div>
                <p>可以自定义 Modal 的对话框样式 以及 对话框 Wrap 的 class 名称，从而实现更多自定义的样式，比如垂直居中。</p>
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
          <z-button @click="modal12 = true">Open the first modal</z-button>
          <z-button @click="modal13 = true">Open the second modal</z-button>
          <z-modal v-model="modal12" draggable scrollable title="Modal 1">
              <div>This is the first modal</div>
          </z-modal>
          <z-modal v-model="modal13" draggable scrollable title="Modal 2">
              <div>This is the second modal</div>
          </z-modal>
          <div class="example-desc">
              <header class="example-header"><span>拖拽移动</span></header>
              <div>
                  <p>可以自定义 Modal 的对话框样式 以及 对话框 Wrap 的 class 名称，从而实现更多自定义的样式，比如垂直居中。</p>
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
          <z-button @click="instance('info')">消息</z-button>
          <z-button @click="instance('success')">成功</z-button>
          <z-button @click="instance('warning')">警告</z-button>
          <z-button @click="instance('error')">错误</z-button>
          <div class="example-desc">
              <header class="example-header"><span>基础用法</span></header>
              <div>
                  <p>四种基本的对话框，只提供一个确定按钮。</p>
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
        <z-button @click="confirm">标准</z-button>
        <z-button @click="custom">自定义按钮文字</z-button>
        <z-button @click="async">异步关闭</z-button>
        <div class="example-desc">
            <header class="example-header"><span>确认对话框</span></header>
            <div>
                <p>快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。</p>
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
        <p> Name: {{ value }}</p>
        <z-button @click="handleRender">自定义内容</z-button>
        <div class="example-desc">
            <header class="example-header"><span>自定义内容</span></header>
            <div>
                <p>使用 render 字段可以基于 Render 函数来自定义内容。</p>
                <p>使用 render 后，将不再限制类型，content 也将无效。</p>
            </div>
        </div>
      </z-col>
        <z-col span="12">
          <z-code-editor :content="demo8"></z-code-editor>
      </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
     <div class="demo-api">
      <div class="anchor">
          <h2 id="API">API</h2>
      </div>
      <div class="anchor">
          <h3 id="Modal_props">Modal props</h3>
      </div>
      <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>value</td> <td>对话框是否显示，可使用 v-model 双向绑定数据。</td> <td>Boolean</td> <td>false</td></tr> <tr><td>title</td> <td>对话框标题，如果使用 slot 自定义了页头，则 title 无效</td> <td>String</td> <td>-</td></tr> <tr><td>closable</td> <td>是否显示右上角的关闭按钮，关闭后 Esc 按键也将关闭</td> <td>Boolean</td> <td>true</td></tr> <tr><td>mask-closable</td> <td>是否允许点击遮罩层关闭</td> <td>Boolean</td> <td>true</td></tr> <tr><td>loading</td> <td>点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置<code>value</code>来关闭对话框</td> <td>Boolean</td> <td>false</td></tr> <tr><td>scrollable</td> <td>页面是否可以滚动</td> <td>Boolean</td> <td>false</td></tr> <tr><td>fullscreen</td> <td>是否全屏显示</td> <td>Boolean</td> <td>false</td></tr> <tr><td>draggable</td> <td>是否可以拖拽移动</td> <td>Boolean</td> <td>false</td></tr> <tr><td>mask</td> <td>是否显示遮罩层，开启 draggable 时，强制不显示</td> <td>Boolean</td> <td>true</td></tr> <tr><td>ok-text</td> <td>确定按钮文字</td> <td>String</td> <td>确定</td></tr> <tr><td>cancel-text</td> <td>取消按钮文字</td> <td>String</td> <td>取消</td></tr> <tr><td>width</td> <td>对话框宽度，对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动<code>auto</code>。当其值不大于 100 时以百分比显示，大于 100 时为像素</td> <td>Number | String</td> <td>520</td></tr> <tr><td>footer-hide</td> <td>不显示底部</td> <td>Boolean</td> <td>false</td></tr> <tr><td>styles</td> <td>设置浮层样式，调整浮层位置等，该属性设置的是<code>.zvu-modal</code>的样式</td> <td>Object</td> <td>-</td></tr> <tr><td>class-name</td> <td>设置对话框容器<code>.zvu-modal-wrap</code>的类名，可辅助实现垂直居中等自定义效果</td> <td>String</td> <td>-</td></tr> <tr><td>z-index</td> <td>层级</td> <td>Number</td> <td>1000</td></tr> <tr><td>transition-names</td> <td>自定义显示动画，第一项是模态框，第二项是背景</td> <td>Array</td> <td>['ease', 'fade']</td></tr> <tr><td>transfer</td> <td>是否将弹层放置于 body 内</td> <td>Boolean</td> <td>true</td></tr></tbody></table>
      <div class="anchor">
          <h3 id="Modal_events">Modal events</h3>
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
                  <td>on-ok</td>
                  <td>点击确定的回调</td>
                  <td>无</td>
              </tr>
              <tr>
                  <td>on-cancel</td>
                  <td>点击取消的回调</td>
                  <td>无</td>
              </tr>
              <tr>
                  <td>on-visible-change</td>
                  <td>显示状态发生变化时触发</td>
                  <td>true / false</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3 id="Modal_slot">Modal slot</h3>
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
                  <td>header</td>
                  <td>自定义页头</td>
              </tr>
              <tr>
                  <td>footer</td>
                  <td>自定义页脚内容</td>
              </tr>
              <tr>
                  <td>close</td>
                  <td>自定义右上角关闭内容</td>
              </tr>
              <tr>
                  <td>无</td>
                  <td>对话框主体内容</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3 id="Modal_instance">Modal instance</h3>
      </div>
      <p>通过直接调用以下方法来使用：</p>
      <ul>
          <li><code>this.$Modal.info(config)</code></li>
          <li><code>this.$Modal.success(config)</code></li>
          <li><code>this.$Modal.warning(config)</code></li>
          <li><code>this.$Modal.error(config)</code></li>
          <li><code>this.$Modal.confirm(config)</code></li>
      </ul>
      <p>以上方法隐式地创建及维护Vue组件。参数 config 为对象，具体说明如下：</p>
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
                  <td>title</td>
                  <td>标题</td>
                  <td>String | Element String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>content</td>
                  <td>内容</td>
                  <td>String | Element String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>render</td>
                  <td>自定义内容，使用后不再限制类型， content 也无效。<span><a
                              href="https://segmentfault.com/l/1500000008892728" target="_blank">
                              <span> 学习 Render 函数的内容</span></a>
                      </span></td>
                  <td>Function</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>width</td>
                  <td>宽度，单位 px</td>
                  <td>Number | String</td>
                  <td>416</td>
              </tr>
              <tr>
                  <td>okText</td>
                  <td>确定按钮的文字</td>
                  <td>String</td>
                  <td>确定</td>
              </tr>
              <tr>
                  <td>cancelText</td>
                  <td>取消按钮的文字，只在<code>Modal.confirm()</code>下有效</td>
                  <td>String</td>
                  <td>取消</td>
              </tr>
              <tr>
                  <td>loading</td>
                  <td>点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动调用<code>Modal.remove()</code>来关闭对话框</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>scrollable</td>
                  <td>页面是否可以滚动</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>closable</td>
                  <td>是否可以按 Esc 键关闭</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>onOk</td>
                  <td>点击确定的回调</td>
                  <td>Function</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>onCancel</td>
                  <td>点击取消的回调，只在<code>Modal.confirm()</code>下有效</td>
                  <td>Function</td>
                  <td>-</td>
              </tr>
          </tbody>
      </table>
      <p>另外提供了全局关闭对话框的方法：</p>
      <ul>
          <li><code>this.$Modal.remove()</code></li>
      </ul>
  </div>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpModal',
  data: function () {
    return {
      modal1: false,
      modal2: false,
      modal_loading: false,
      modal3: false,
      modal4: false,
      modal5: false,
      modal6: false,
      loading: true,
      modal7: false,
      modal8: false,
      modal9: false,
      modal10: false,
      modal11: false,
      modal12: false,
      modal13: false,
      value: '',
      demo1: '<z-button type="primary" @click="modal1 = true">显示对话框</z-button>\r' +
                '<z-modal v-model="modal1" title="Common z-modal dialog box title" @on-ok="ok" @on-cancel="cancel">\r' +
                '    <p>Content of dialog</p>\r' +
                '    <p>Content of dialog</p>\r' +
                '    <p>Content of dialog</p>\r' +
                '</z-modal>\r' +
                'export default {\r' +
                '    data () {\r' +
                '        return {\r' +
                '           modal1: false\r' +
                '        }\r' +
                '    },\r' +
                '    methods: {\r' +
                '        ok:function() {\r' +
                '            this.$Message.info(\'Clicked ok\');\r' +
                '        },\r' +
                '        cancel:function() {\r' +
                '            this.$Message.info(\'Clicked cancel\');\r' +
                '        }\r' +
                '   }\r' +
                '}\r',
      demo2: '<z-button @click="modal2 = true">自定义页头和页脚</z-button>\r' +
                '<z-modal v-model="modal2" width="360">\r' +
                '    <p slot="header" style="color:#f60;text-align:center">\r' +
                '        <z-icon type="information-circled"></z-icon>\r' +
                '        <span>Delete confirmation</span>\r' +
                '    </p>\r' +
                '    <div style="text-align:center">\r' +
                '        <p>After this task is deleted, the downstream 10 tasks will not be implemented.</p>\r' +
                '        <p>Will you delete it?</p>\r' +
                '    </div>\r' +
                '    <div slot="footer">\r' +
                '        <z-button type="error" size="large" long :loading="modal_loading" @click="del">Delete</z-button>\r' +
                '    </div>\r' +
                '</z-modal>\r' +
                '<z-button @click="modal3 = true">不带标题栏</z-button>\r' +
                '<z-modal v-model="modal3">\r' +
                '    <p>Content of dialog</p>\r' +
                '    <p>Content of dialog</p>\r' +
                '    <p>Content of dialog</p>\r' +
                '</z-modal>\r' +
                '<z-button @click="modal4 = true">国际化</z-button>\r' +
                '<z-modal v-model="modal4" title="z-modal Title" ok-text="OK" cancel-text="Cancel">\r' +
                '    <p>Something...</p>\r' +
                '    <p>Something...</p>\r' +
                '    <p>Something...</p>\r' +
                '</z-modal>\r' +
                '<z-button @click="modal5 = true">设置宽度</z-button>\r' +
                '<z-modal v-model="modal5" title="Custom width" width="300">\r' +
                '    <p>Customize width, unit px, default 520px.</p>\r' +
                '    <p>The width of the dialog box is responsive, and the width becomes <code>auto</code>\r' +
                '        when the screen size is less than 768px.</p>\r' +
                '</z-modal>\r' +
                'export default {\r' +
                '    data () {\r' +
                '        return {\r' +
                '            modal2: false,\r' +
                '            modal_loading: false,\r' +
                '            modal3: false,\r' +
                '            modal4: false,\r' +
                '            modal5: false\r' +
                '        }\r' +
                '    },\r' +
                '    methods: {\r' +
                '        del:function() {\r' +
                '            this.modal_loading = true;\r' +
                '            setTimeout(() => {\r' +
                '                this.modal_loading = false;\r' +
                '                this.modal2 = false;\r' +
                '                this.$Message.success(\'Successfully delete\');\r' +
                '            }, 2000);\r' +
                '        }\r' +
                '   }\r' +
                '}\r',
      demo3: '<z-button type="primary" @click="modal6 = true">显示对话框</z-button>\r' +
                '<z-modal v-model="modal6" title="Title" :loading="loading" @on-ok="asyncOK">\r' +
                '    <p>After you click ok, the dialog box will close in 2 seconds.</p>\r' +
                '</z-modal>\r' +
                'export default {\r' +
                '    data () {\r' +
                '        return {\r' +
                '            modal6: false,\r' +
                '            loading: true,\r' +
                '        }\r' +
                '    },\r' +
                '    methods: {\r' +
                '        asyncOK: function () {\r' +
                '            setTimeout(() => {\r' +
                '                this.modal6 = false;\r' +
                '            }, 2000);\r' +
                '        },\r' +
                '   }\r' +
                '}\r',
      demo4: '<z-button @click="modal7 = true">禁用右上角关闭（含esc键）</z-button>\r' +
                '<z-modal title="Title" v-model="modal7" :closable="false">\r' +
                '    <p>Content of dialog</p>\r' +
                '    <p>Content of dialog</p>\r' +
                '    <p>Content of dialog</p>\r' +
                '</z-modal>\r' +
                '<z-button @click="modal8 = true">禁用遮罩层关闭</z-button>\r' +
                '<z-modal title="Title" v-model="modal8" :mask-closable="false">\r' +
                '    <p>Content of dialog</p>\r' +
                '    <p>Content of dialog</p>\r' +
                '    <p>Content of dialog</p>\r' +
                ' </z-modal>\r' +
                'export default {\r' +
                '    data () {\r' +
                '        return {\r' +
                '             modal7: false,\r' +
                '              modal8: false,\r' +
                '        }\r' +
                '    },\r' +
                '}\r',
      demo5: ' <z-button @click="modal9 = true">距离顶部20px</z-button>\r' +
                '<z-modal title="Title" v-model="modal9" :styles="{top: \'20px\'}">\r' +
                '    <p>Content of dialog</p>\r' +
                '    <p>Content of dialog</p>\r' +
                '    <p>Content of dialog</p>\r' +
                '</z-modal>\r' +
                '<z-button @click="modal10 = true">垂直居中</z-button>\r' +
                '<z-modal title="Title" v-model="modal10" class-name="vertical-center-modal">\r' +
                '    <p>Content of dialog</p>\r' +
                '    <p>Content of dialog</p>\r' +
                '    <p>Content of dialog</p>\r' +
                '</z-modal>\r' +
                'export default {\r' +
                '    data () {\r' +
                '        return {\r' +
                '             modal9: false,\r' +
                '              modal10: false,\r' +
                '        }\r' +
                '    },\r' +
                '}\r',
      demo6: '<z-button @click="instance(\'info\')">消息</z-button>\r' +
                '<z-button @click="instance(\'success\')">成功</z-button>\r' +
                '<z-button @click="instance(\'warning\')">警告</z-button>\r' +
                '<z-button @click="instance(\'error\')">错误</z-button>\r' +
                'export default {\r' +
                '    methods: {\r' +
                '        instance: function (type) {\r' +
                '            const title = \'Title\';\r' +
                '            const content = \'<p>Content of dialog</p><p>Content of dialog</p>\';\r' +
                '            switch (type) {\r' +
                '                case \'info\':\r' +
                '                    this.$Modal.info({\r' +
                '                        title: title,\r' +
                '                        content: content\r' +
                '                    });\r' +
                '                    break;\r' +
                '                case \'success\':\r' +
                '                    this.$Modal.success({\r' +
                '                        title: title,\r' +
                '                        content: content\r' +
                '                    });\r' +
                '                    break;\r' +
                '                case \'warning\':\r' +
                '                    this.$Modal.warning({\r' +
                '                        title: title,\r' +
                '                        content: content\r' +
                '                    });\r' +
                '                    break;\r' +
                '                case \'error\':\r' +
                '                    this.$Modal.error({\r' +
                '                        title: title,\r' +
                '                        content: content\r' +
                '                    });\r' +
                '                    break;\r' +
                '            }\r' +
                '        },\r' +
                '   }\r' +
                '}\r',
      demo7: '<z-button @click="confirm">标准</z-button>\r' +
                '<z-button @click="custom">自定义按钮文字</z-button>\r' +
                '<z-button @click="async">异步关闭</z-button>\r' +
                'export default {\r' +
                '    methods: {\r' +
                '        confirm: function () {\r' +
                '            this.$Modal.confirm({\r' +
                '                title: \'Title\',\r' +
                '                content: \'<p>Content of dialog</p><p>Content of dialog</p>\',\r' +
                '                onOk: () => {\r' +
                '                    this.$Message.info(\'Clicked ok\');\r' +
                '                },\r' +
                '                onCancel: () => {\r' +
                '                    this.$Message.info(\'Clicked cancel\');\r' +
                '                }\r' +
                '            });\r' +
                '        },\r' +
                '        custom: function () {\r' +
                '            this.$Modal.confirm({\r' +
                '                title: \'Title\',\r' +
                '                content: \'<p>Content of dialog</p><p>Content of dialog</p>\',\r' +
                '                okText: \'OK\',\r' +
                '                cancelText: \'Cancel\'\r' +
                '            });\r' +
                '        },\r' +
                '        async: function () {\r' +
                '            this.$Modal.confirm({\r' +
                '                title: \'Title\',\r' +
                '                content: \'<p>The dialog box will be closed after 2 seconds</p>\',\r' +
                '                loading: true,\r' +
                '                onOk: () => {\r' +
                '                    setTimeout(() => {\r' +
                '                        this.$Modal.remove();\r' +
                '                        this.$Message.info(\'Asynchronously close the dialog box\');\r' +
                '                    }, 2000);\r' +
                '                }\r' +
                '            });\r' +
                '        },\r' +
                '   }\r' +
                '}\r',
      demo8: '<p> Name: {{ value }}</p>\r' +
                '<z-button @click="handleRender">自定义内容</z-button>\r' +
                'export default {\r' +
                '    data () {\r' +
                '        return {\r' +
                '             value: \'\'\r' +
                '        }\r' +
                '    },\r' +
                '    methods: {\r' +
                '        handleRender: function () {\r' +
                '            this.$Modal.confirm({\r' +
                '                render: (h) => {\r' +
                '                    return h(\'Input\', {\r' +
                '                        props: {\r' +
                '                            value: this.value,\r' +
                '                            autofocus: true,\r' +
                '                           placeholder: \'Please enter your name...\'\r' +
                '                        },\r' +
                '                        on: {\r' +
                '                            input: (val) => {\r' +
                '                                this.value = val;\r' +
                '                            }\r' +
                '                        }\r' +
                '                    })\r' +
                '                }\r' +
                '            })\r' +
                '        }\r' +
                '   }\r' +
                '}\r',
      demo9: '<z-button @click="modal11 = true">Open a fullscreen modal</z-button>\r' +
                '<z-modal v-model="modal11" fullscreen title="Fullscreen z-modal">\r' +
                '    <div>This is a fullscreen modal</div>\r' +
                '</z-modal>\r' +
                '<script>\r' +
                '    export default {\r' +
                '        data () {\r' +
                '            return {\r' +
                '                modal11: false\r' +
                '            }\r' +
                '        }\r' +
                '    }\r' +
                // eslint-disable-next-line no-useless-escape
                '<\/script>\r',
      demo10: '<z-button @click="modal12 = true">Open the first modal</z-button>\r' +
                '<z-button @click="modal13 = true">Open the second modal</z-button>\r' +
                '<z-modal v-model="modal12" draggable scrollable title="Modal 1">\r' +
                '    <div>This is the first modal</div>\r' +
                '</z-modal>\r' +
                '<z-modal v-model="modal13" draggable scrollable title="Modal 2">\r' +
                '    <div>This is the second modal</div>\r' +
                '</z-modal>\r' +
                '<script>\r' +
                '    export default {\r' +
                '        data () {\r' +
                '            return {\r' +
                '                modal12: false,\r' +
                '                modal13: false\r' +
                '            }\r' +
                '        }\r' +
                '    }\r' +
                // eslint-disable-next-line no-useless-escape
                '<\/script>\r'
    }
  },
  methods: {
    ok: function () {
      this.$Message.info('Clicked ok')
    },
    cancel: function () {
      this.$Message.info('Clicked cancel')
    },
    del: function () {
      this.modal_loading = true
      setTimeout(() => {
        this.modal_loading = false
        this.modal2 = false
        this.$Message.success('Successfully delete')
      }, 2000)
    },
    asyncOK: function () {
      setTimeout(() => {
        this.modal6 = false
      }, 2000)
    },
    instance: function (type) {
      const title = 'Title'
      const content = '<p>Content of dialog</p><p>Content of dialog</p>'
      switch (type) {
        case 'info':
          this.$Modal.info({
            title: title,
            content: content
          })
          break
        case 'success':
          this.$Modal.success({
            title: title,
            content: content
          })
          break
        case 'warning':
          this.$Modal.warning({
            title: title,
            content: content
          })
          break
        case 'error':
          this.$Modal.error({
            title: title,
            content: content
          })
          break
      }
    },
    confirm: function () {
      this.$Modal.confirm({
        title: 'Title',
        content: '<p>Content of dialog</p><p>Content of dialog</p>',
        onOk: () => {
          this.$Message.info('Clicked ok')
        },
        onCancel: () => {
          this.$Message.info('Clicked cancel')
        }
      })
    },
    custom: function () {
      this.$Modal.confirm({
        title: 'Title',
        content: '<p>Content of dialog</p><p>Content of dialog</p>',
        okText: 'OK',
        cancelText: 'Cancel'
      })
    },
    async: function () {
      this.$Modal.confirm({
        title: 'Title',
        content: '<p>The dialog box will be closed after 2 seconds</p>',
        loading: true,
        onOk: () => {
          setTimeout(() => {
            this.$Modal.remove()
            this.$Message.info('Asynchronously close the dialog box')
          }, 2000)
        }
      })
    },
    handleRender: function () {
      this.$Modal.confirm({
        render: (h) => {
          return h('Input', {
            props: {
              value: this.value,
              autofocus: true,
              placeholder: 'Please enter your name...'
            },
            on: {
              input: (val) => {
                this.value = val
              }
            }
          })
        }
      })
    }

  }
}
</script>
<style scoped>
</style>
