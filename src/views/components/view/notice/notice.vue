<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-08 11:20:07
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
      <z-row :gutter="15">
        <z-col span="12">
          <Row :gutter="32">
              <z-col class="demo-tabs-style1">
                  <z-button type="primary" @click="open(false)">Open notice</z-button>
                  <z-button @click="open(true)">Open notice(only title)</z-button>
                  <div class="example-desc">
                      <header class="example-header"><span>基础用法</span></header>
                      <div>
                          <p>基本用法，默认在 4.5秒后关闭。如果 desc 参数为空或不填，则自动应用仅标题模式下的样式。</p>
                          <p>建议标题言简意赅，例如"删除成功"，更详细的内容可以放在描述信息里。</p>
                      </div>
                  </div>
              </z-col>
          </Row>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo1"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <Row :gutter="32">
                <z-col class="demo-tabs-style1">
                    <p>带描述信息</p>
                    <z-button @click="info(false)">Info</z-button>
                    <z-button @click="success(false)">Success</z-button>
                    <z-button @click="warning(false)">warning</z-button>
                    <z-button @click="error(false)">error</z-button>
                    <p>仅标题</p>
                    <z-button @click="info(true)">info</z-button>
                    <z-button @click="success(true)">success</z-button>
                    <z-button @click="warning(true)">warning</z-button>
                    <z-button @click="error(true)">error</z-button>
                    <div class="example-desc">
                        <header class="example-header"><span>提醒类型</span></header>
                        <div>
                            <p>带有状态图标的提醒。</p>
                        </div>
                    </div>
                </z-col>
            </Row>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo2"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <Row :gutter="32">
              <z-col class="demo-tabs-style1">
                  <z-button type="primary" @click="time">打开提醒</z-button>
                  <div class="example-desc">
                      <header class="example-header"><span>自定义时长 </span></header>
                      <div>
                          <p>自定义时长，为 0 则不自动关闭。也可以在Notice.config()中全局配置，详见API。</p>
                      </div>
                  </div>
              </z-col>
            </Row>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo3"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <Row :gutter="32">
              <z-col class="demo-tabs-style1">
                  <z-button type="primary" @click="renderFunc">Render 函数</z-button>
                  <div class="example-desc">
                      <header class="example-header"><span>自定义时长 </span></header>
                      <div>
                          <p>你可以自定义 Render 函数来替代 desc</p>
                      </div>
                  </div>
              </z-col>
          </Row>
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
            <h3 id="Notice_instance">Notice instance</h3>
        </div>
        <p>通过直接调用以下方法来使用组件：</p>
        <ul>
            <li><code>this.$Notice.open(config)</code></li>
            <li><code>this.$Notice.info(config)</code></li>
            <li><code>this.$Notice.success(config)</code></li>
            <li><code>this.$Notice.warning(config)</code></li>
            <li><code>this.$Notice.error(config)</code></li>
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
                    <td>通知提醒的标题</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>desc</td>
                    <td>通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>render</td>
                    <td>自定义描述内容，使用 Vue 的 Render 函数，如果同时设置了 render 和 desc，则只显示 render 的内容</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>duration</td>
                    <td>自动关闭的延时，单位秒，不关闭可以写 0</td>
                    <td>Number</td>
                    <td>4.5</td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>当前通知的唯一标识</td>
                    <td>String</td>
                    <td>自动</td>
                </tr>
                <tr>
                    <td>onClose</td>
                    <td>关闭时的回调</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
        <p>另外提供了全局配置、全局关闭某个通知和全局销毁的方法：</p>
        <ul>
            <li><code>this.$Notice.config(options)</code></li>
            <li><code>this.$Notice.close(name)</code></li>
            <li><code>this.$Notice.destroy()</code></li>
        </ul> <br>
        <div data-v-c2ff9106="">
            <pre data-v-c2ff9106="" class="bg"><code data-v-c2ff9106="" class="javascript hljs"><span class="hljs-keyword">this</span>.$Notice.config({
                top: <span class="hljs-number">50</span>,
                duration: <span class="hljs-number">3</span>
            });
            </code></pre>
            <span data-v-c2ff9106="" class="scale">
                <div data-v-c2ff9106="" class="zvu-tooltip">
                    <div class="zvu-tooltip-rel"><i data-v-c2ff9106=""
                            class="zvu-icon zvu-icon-qr-scanner" style="font-size: 18px;"></i></div>

                </div>
            </span> <span data-v-c2ff9106="" class="copy">
                <div data-v-c2ff9106="" class="zvu-tooltip">
                    <div class="zvu-tooltip-rel"><i data-v-c2ff9106=""
                            class="zvu-icon zvu-icon-clipboard" style="font-size: 18px;"></i>
                        <i data-v-c2ff9106="" class="zvu-icon zvu-icon-checkmark"
                            style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i>
                    </div>
                </div>
            </span>
        </div> <br>
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
                    <td>top</td>
                    <td>通知组件距离顶端的距离，单位像素</td>
                    <td>Number</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>duration</td>
                    <td>默认自动关闭的延时，单位秒</td>
                    <td>Number</td>
                    <td>4.5</td>
                </tr>
            </tbody>
        </table>
    </div>
   </z-card>
</div>
</template>

<script>
export default {
  name: 'cpNotice',
  data: function () {
    return {
      type: 'success',
      demo1: '<z-button type="primary" @click="open(false)">Open notice</z-button>\r' +
                '<z-button  @click="open(true)">Open notice(only title)</z-button>\r' +
                'export default {\r' +
                '    methods: {\r' +
                '    open:function(nodesc) {\r' +
                '        this.$Notice.open({\r' +
                '            title: \'Notification title\',\r' +
                '            desc: nodesc ? \'\' : \'Here is the notification description. Here is the notification description. \'\r' +
                '        });\r' +
                '    }\r' +
                '   }\r' +
                '}\r',
      demo2: '<p>带描述信息</p>\r' +
                '<z-button @click="info(false)">Info</z-button>\r' +
                '<z-button  @click="success(false)">Success</z-button>\r' +
                '<z-button  @click="warning(false)">warning</z-button>\r' +
                '<z-button  @click="error(false)">error</z-button>\r' +
                '<p>仅标题</p>\r' +
                '<z-button  @click="info(true)">info</z-button>\r' +
                '<z-button  @click="success(true)">success</z-button>\r' +
                '<z-button  @click="warning(true)">warning</z-button>\r' +
                '<z-button  @click="error(true)">error</z-button>\r' +
                'export default {\r' +
                '    methods: {\r' +
                '    info:function(nodesc) {\r' +
                '        this.$Notice.info({\r' +
                '            title: \'Notification title\',\r' +
                '            desc: nodesc ? \'\' : \'Here is the notification description. Here is the notification description. \'\r' +
                '        });\r' +
                '    },\r' +
                '    success:function(nodesc) {\r' +
                '        this.$Notice.success({\r' +
                '            title: \'Notification title\',\r' +
                '            desc: nodesc ? \'\' : \'Here is the notification description. Here is the notification description. \'\r' +
                '        });\r' +
                '    },\r' +
                '    warning:function(nodesc) {\r' +
                '        this.$Notice.warning({\r' +
                '            title: \'Notification title\',\r' +
                '            desc: nodesc ? \'\' : \'Here is the notification description. Here is the notification description. \'\r' +
                '        });\r' +
                '    },\r' +
                '    error:function(nodesc) {\r' +
                '        this.$Notice.error({\r' +
                '            title: \'Notification title\',\r' +
                '            desc: nodesc ? \'\' : \'Here is the notification description. Here is the notification description. \'\r' +
                '        });\r' +
                '    },\r' +
                '   }\r' +
                '}\r',
      demo3: '<z-button type="primary" @click="time">打开提醒</z-button>\r' +
                'export default {\r' +
                '    methods: {\r' +
                '        time:function() {\r' +
                '            this.$Notice.open({\r' +
                '                title: \'Notification title\',\r' +
                '                desc: \'This notification does not automatically close, and you need to click the close button to close.\',\r' +
                '                duration: 0\r' +
                '            });\r' +
                '        }\r' +
                '   }\r' +
                '}\r',
      demo4: '<z-button type="primary" @click="renderFunc">Render 函数</z-button>\r' +
                'export default {\r' +
                '    methods: {\r' +
                '    renderFunc:function() {\r' +
                '       this.$Notice.success({\r' +
                '         title: \'Notification title\',\r' +
                '         desc: \'The desc will hide when you set render.\',\r' +
                '           render: h => {\r' +
                '               return h(\'span\', [\r' +
                '                    \'This is created by \',\r' +
                '                    h(\'a\', \'render\'),\r' +
                '                    \' function\'\r' +
                '             ])\r' +
                '          }\r' +
                '       });\r' +
                '       }\r' +
                '   }\r' +
                '}\r'
    }
  },
  methods: {
    open: function (nodesc) {
      this.$Notice.open({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      })
    },
    info: function (nodesc) {
      this.$Notice.info({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      })
    },
    success: function (nodesc) {
      this.$Notice.success({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      })
    },
    warning: function (nodesc) {
      this.$Notice.warning({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      })
    },
    error: function (nodesc) {
      this.$Notice.error({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      })
    },
    time: function () {
      this.$Notice.open({
        title: 'Notification title',
        desc: 'This notification does not automatically close, and you need to click the close button to close.',
        duration: 0
      })
    },
    renderFunc: function () {
      this.$Notice.success({
        title: 'Notification title',
        desc: 'The desc will hide when you set render.',
        render: h => {
          return h('span', [
            'This is created by ',
            h('a', 'render'),
            ' function'
          ])
        }
      })
    }
  }
}
</script>
<style scoped>
</style>
