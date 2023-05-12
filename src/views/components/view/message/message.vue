<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-08 11:19:50
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-button type="primary" @click="info">显示普通提示</z-button>
          <div class="example-desc">
              <header class="example-header"><span>普通提示</span></header>
              <div>
                  <p>最基本的提示，默认在1.5秒后消失。</p>
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
           <z-button @click="success">显示成功提示</z-button>
            <z-button @click="warning">显示警告提示</z-button>
            <z-button @click="error">显示错误提示</z-button>
            <div class="example-desc">
                <header class="example-header"><span>提示类型</span></header>
                <div>
                    <p>不同的提示状态：成功、警告、错误。</p>
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
          <z-button @click="loading">显示加载中...</z-button>
          <div class="example-desc">
              <header class="example-header"><span>加载中 </span></header>
              <div>
                  <p>Loading 的状态，并异步在某个时机移除。</p>
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
           <z-button @click="time">显示10s提示</z-button>
            <div class="example-desc">
                <header class="example-header"><span>自定义时长 </span></header>
                <div>
                    <p>自定义时长，也可以在Message.config()中全局配置，详见API。</p>
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
           <z-button @click="closable">显示一个可关闭的提示</z-button>
            <div class="example-desc">
                <header class="example-header"><span>可关闭 </span></header>
                <div>
                    <p>将参数设置为一个对象，并指定 closable 为 true 后可以手动关闭提示，完整参数详见API。</p>
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
           <z-button @click="closable">显示一个可关闭的提示</z-button>
          <div class="example-desc">
              <header class="example-header"><span>可关闭 </span></header>
              <div>
                  <p>将参数设置为一个对象，并指定 closable 为 true 后可以手动关闭提示，完整参数详见API。</p>
              </div>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo6"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <div class="demo-api">
        <div class="anchor">
            <h2 id="API">API</h2>
        </div>
        <div class="anchor">
            <h3 id="Message_instance">Message instance</h3>
        </div>
        <p>通过直接调用以下方法来使用组件：</p>
        <ul>
            <li><code>this.$Message.info(config)</code></li>
            <li><code>this.$Message.success(config)</code></li>
            <li><code>this.$Message.warning(config)</code></li>
            <li><code>this.$Message.error(config)</code></li>
            <li><code>this.$Message.loading(config)</code></li>
        </ul>
        <p>以上方法隐式的创建及维护 Vue 组件。参数 config 可以是字符串或对象，当为字符串时，直接显示内容，当为对象时，具体说明如下：</p>
        <br>
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
                    <td>content</td>
                    <td>提示内容</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>render</td>
                    <td>自定义描述内容，使用 Vue 的 Render 函数</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>duration</td>
                    <td>自动关闭的延时，单位秒，不关闭可以写 0</td>
                    <td>Number</td>
                    <td>1.5</td>
                </tr>
                <tr>
                    <td>onClose</td>
                    <td>关闭时的回调</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>closable</td>
                    <td>是否显示关闭按钮</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
            </tbody>
        </table>
        <p>另外提供了全局配置和全局销毁的方法：</p>
        <ul>
            <li><code>this.$Message.config(options)</code></li>
            <li><code>this.$Message.destroy()</code></li>
        </ul> <br>
        <div data-v-c2ff9106="">
            <pre data-v-c2ff9106="" class="bg"><code data-v-c2ff9106="" class="javascript hljs"><span class="hljs-keyword">this</span>.$Message.config({
                    top: <span class="hljs-number">50</span>,
                    duration: <span class="hljs-number">3</span>
                });</code>
            </pre>
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
                    <td>提示组件距离顶端的距离，单位像素</td>
                    <td>Number</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>duration</td>
                    <td>默认自动关闭的延时，单位秒</td>
                    <td>Number</td>
                    <td>1.5</td>
                </tr>
            </tbody>
        </table>
    </div>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpMessage',
  data: function () {
    return {
      type: 'success',
      demo1: '<z-button type="primary" @click="info">显示普通提示</z-button>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '        }\r' +
              '    },\r' +
              '    methods: {\r' +
              '        info:function(){\r' +
              '            this.$Message.info(\'This is a info tip\')\r' +
              '        }\r' +
              '   }\r' +
              '}\r',
      demo2: '<z-button @click="success">显示成功提示</z-button>\r' +
                '<z-button @click="warning">显示警告提示</z-button>\r' +
                '<z-button  @click="error">显示错误提示</z-button> \r' +
                'export default {\r' +
                '    methods: {\r' +
                '        success:function(){\r' +
                '            this.$Message.success(\'显示成功提示\')\r' +
                '        },\r' +
                '        warning:function(){\r' +
                '            this.$Message.warning(\'显示警告提示\')\r' +
                '        },\r' +
                '        error:function(){\r' +
                '            this.$Message.error(\'显示错误提示\')\r' +
                '        },\r' +
                '   }\r' +
                '}\r',
      demo3: '<z-button @click="loading">显示加载中...</z-button>\r' +
                'export default {\r' +
                '    methods: {\r' +
                '        loading:function(){\r' +
                '            const msg = this.$Message.loading({\r' +
                '                content: \'Loading...\',\r' +
                '                duration: 0\r' +
                '            })\r' +
                '            setTimeout(msg, 3000)\r' +
                '        }\r' +
                '   }\r' +
                '}\r',
      demo4: '<z-button @click="time">显示10s提示</z-button>\r' +
                'export default {\r' +
                '    methods: {\r' +
                '        time:function(){\r' +
                '            this.$Message.info({\r' +
                '                content: \'显示10s提示\',\r' +
                '                duration: 10\r' +
                '            })\r' +
                '        }\r' +
                '   }\r' +
                '}\r',
      demo5: '<z-button @click="closable">显示一个可关闭的提示</z-button>\r' +
                'export default {\r' +
                '    methods: {\r' +
                '        closable:function(){\r' +
                '            this.$Message.info({\r' +
                '                content: \'显示一个可关闭提示\',\r' +
                '                duration: 10,\r' +
                '                closable: true\r' +
                '            })\r' +
                '        },\r' +
                '   }\r' +
                '}\r',
      demo6: '<z-button @click="renderFunc">显示render函数创建的内容</z-button>\r' +
                'export default {\r' +
                '    methods: {\r' +
                '        renderFunc:function(){\r' +
                '            this.$Message.info({\r' +
                '                render: h => {\r' +
                '                    return h(\'span\', [\r' +
                '                        \'This is created by \',\r' +
                '                        h(\'a\', \'render\'),\r' +
                '                        \' function\'\r' +
                '                    ])\r' +
                '                }\r' +
                '            })\r' +
                '        }\r' +
                '   }\r' +
                '}\r'
    }
  },
  methods: {
    info: function () {
      this.$Message.info('这是一条普通提示')
    },
    success: function () {
      this.$Message.success('显示成功提示')
    },
    warning: function () {
      this.$Message.warning('显示警告提示')
    },
    error: function () {
      this.$Message.error('显示错误提示')
    },
    loading: function () {
      const msg = this.$Message.loading({
        content: 'Loading...',
        duration: 0
      })
      setTimeout(msg, 3000)
    },
    time: function () {
      this.$Message.info({
        content: '显示10s提示',
        duration: 10
      })
    },
    closable: function () {
      this.$Message.info({
        content: '显示一个可关闭提示',
        duration: 10,
        closable: true
      })
    },
    renderFunc: function () {
      this.$Message.info({
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
