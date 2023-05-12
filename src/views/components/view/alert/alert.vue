<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-08 15:30:59
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
      <z-row :gutter="15">
        <z-col span="12">
          <z-alert>An info prompt</z-alert>
          <z-alert type="success">A success prompt</z-alert>
          <z-alert type="warning">A warning prompt</z-alert>
          <z-alert type="error">An error prompt</z-alert>
          <div class="example-desc">
              <header class="example-header"><span>基础用法#</span></header>
              <div>
                  <p>基本使用方法，有四种样式可以选择info、success、warning、error。</p>
              </div>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo0"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
  <z-card bordered dis-hover class="m-t-15">
    <z-row :gutter="15">
      <z-col span="12">
          <z-alert>
              An info prompt
              <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt.
              </template>
          </z-alert>
          <z-alert type="success">
              A success prompt
              <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt.
              </template>
          </z-alert>
          <z-alert type="warning">
              A warning prompt
              <template slot="desc">
                  Content of prompt. Content of prompt. Content of prompt.
              </template>
          </z-alert>
          <z-alert type="error">
              An error prompt
              <span slot="desc">
                  Custom error description copywriting. <Icon type="help-circled" size="14"></Icon>
              </span>
          </z-alert>
          <div class="example-desc">
              <header class="example-header"><span>含描述信息</span></header>
              <div>
                  <p>自定义<code><slot name="desc"></slot></code>描述内容。</p>
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
            <z-alert show-icon>An info prompt</z-alert>
            <z-alert type="success" show-icon>A success prompt</z-alert>
            <z-alert type="warning" show-icon>A warning prompt</z-alert>
            <z-alert type="error" show-icon>An error prompt</z-alert>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo2"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <z-alert show-icon>
              An info prompt
              <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt.
              </template>
          </z-alert>
          <z-alert type="success" show-icon>
              A success prompt
              <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt.
                  </span>
          </z-alert>
          <z-alert type="warning" show-icon>
              A warning prompt
              <template slot="desc">
                  Content of prompt. Content of prompt. Content of prompt.
              </template>
          </z-alert>
          <z-alert type="error" show-icon>
              An error prompt
              <span slot="desc">
                  Custom error description copywriting.
              </span>
          </z-alert>
          <z-alert show-icon>
              Custom icon
              <Icon type="ios-lightbulb-outline" slot="icon"></Icon>
              <template slot="desc">Custom icon copywriting. Custom icon copywriting. Custom icon copywriting.
              </template>
          </z-alert>
          <div class="example-desc">
              <header class="example-header"><span>图标#</span></header>
              <div>
                  <p>根据 type 属性自动添加不同图标，或者自定义图标 slot 。</p>
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
           <z-alert closable>An info prompt</z-alert>
            <z-alert type="success" show-icon closable>
                A success prompt
                <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt.
                    </span>
            </z-alert>
            <z-alert type="warning" closable>
                Custom closing content
                <span slot="close">No longer prompt</span>
            </z-alert>
            <div class="example-desc">
                <header class="example-header"><span>可关闭#</span></header>
                <div>
                    <p>显示关闭按钮，点击可关闭提示，也可以自定义关闭 slot 。</p>
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
            <z-alert banner type="warning">Notice: notification contents...</z-alert>
            <z-alert banner closable type="warning">Notice: notification contents...</z-alert>
            <div class="example-desc">
                <header class="example-header"><span>顶部公告#</span></header>
                <div>
                    <p>可以应用顶部公告的样式。。</p>
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
              <h3 id="Alert_props">Alert props</h3>
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
                      <td>type</td>
                      <td>警告提示样式，可选值为<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code></td>
                      <td>String</td>
                      <td>info</td>
                  </tr>
                  <tr>
                      <td>closable</td>
                      <td>是否可关闭</td>
                      <td>Boolean</td>
                      <td>false</td>
                  </tr>
                  <tr>
                      <td>show-icon</td>
                      <td>是否显示图标</td>
                      <td>Boolean</td>
                      <td>false</td>
                  </tr>
              </tbody>
          </table>
          <div class="anchor">
              <h3 id="Alert_events">Alert events</h3>
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
                      <td>on-close</td>
                      <td>关闭时触发</td>
                      <td>event</td>
                  </tr>
              </tbody>
          </table>
          <div class="anchor">
              <h3 id="Alert_slot">Alert slot</h3>
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
                      <td>警告提示内容</td>
                  </tr>
                  <tr>
                      <td>desc</td>
                      <td>警告提示辅助性文字介绍</td>
                  </tr>
                  <tr>
                      <td>icon</td>
                      <td>自定义图标内容</td>
                  </tr>
                  <tr>
                      <td>close</td>
                      <td>自定义关闭内容</td>
                  </tr>
              </tbody>
          </table>
      </div>
   </z-card>
</div>
</template>

<script>
export default {
  name: 'cpAlert',
  data: function () {
    return {
      demo0: ' <z-alert>An info prompt</z-alert>\r' +
              ' <z-alert type="success">A success prompt</z-alert>\r' +
              ' <z-alert type="warning">A warning prompt</z-alert>\r' +
              ' <z-alert type="error">An error prompt</z-alert>\r',
      demo1: '<z-alert>\r' +
              '   An info prompt\r' +
              '   <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>\r' +
              '</z-alert>\r' +
              '<z-alert type="success">\r' +
              '   A success prompt\r' +
              '   <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>\r' +
              '</z-alert>\r' +
              '<z-alert type="warning">\r' +
              '   A warning prompt\r' +
              '   <template slot="desc">\r' +
              '       Content of prompt. Content of prompt. Content of prompt.\r' +
              '   </template>\r' +
              '</z-alert>\r' +
              '<z-alert type="error">\r' +
              '   An error promp\r' +
              '   <span slot="desc">\r' +
              '       Custom error description copywriting. <Icon type="help-circled" size="14"></Icon>\r' +
              '   </span>\r' +
              '</z-alert>',
      demo2: '<z-alert show-icon>An info prompt</z-alert>\r' +
                '<z-alert type="success" show-icon>A success prompt</z-alert>\r' +
                '<z-alert type="warning" show-icon>A warning prompt</z-alert>\r' +
                '<z-alert type="error" show-icon>An error prompt</z-alert>\r',
      demo3: '<z-alert show-icon>\r' +
                '    An info prompt\r' +
                '    <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt.\r' +
                '    </template>\r' +
                '</z-alert>\r' +
                '<z-alert type="success" show-icon>\r' +
                '    A success prompt\r' +
                '    <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>\r' +
                '</z-alert>\r' +
                '<z-alert type="warning" show-icon>\r' +
                '    A warning prompt\r' +
                '    <template slot="desc">\r' +
                '        Content of prompt. Content of prompt. Content of prompt.\r' +
                '    </template>\r' +
                '</z-alert>\r' +
                '<z-alert type="error" show-icon>\r' +
                '    An error prompt\r' +
                '    <span slot="desc">\r' +
                '        Custom error description copywriting.\r' +
                '    </span>\r' +
                '</z-alert>\r' +
                '<z-alert show-icon>\r' +
                '    Custom icon\r' +
                '    <Icon type="ios-lightbulb-outline" slot="icon"></Icon>\r' +
                '    <template slot="desc">\r' +
                '       Custom icon copywriting. Custom icon copywriting. Custom icon copywriting.\r' +
                '    </template>\r' +
                '</z-alert>\r',
      demo4: '<z-alert closable>An info prompt</z-alert>\r' +
                '<z-alert type="success" show-icon closable>\r' +
                '    A success prompt\r' +
                '    <span slot="desc">\r' +
                '        Content of prompt. Content of prompt. Content of prompt. Content of prompt.\r' +
                '    </span>\r' +
                '</z-alert>\r' +
                '<z-alert type="warning" closable>\r' +
                '    Custom closing content\r' +
                '    <span slot="close">No longer prompt</span>\r' +
                ' </z-alert>\r',
      demo5: '<z-alert banner type="warning">Notice: notification contents...</z-alert>\r' +
                '<z-alert banner closable type="warning">Notice: notification contents...</z-alert>\r'

    }
  }
}
</script>
<style scoped>
</style>
