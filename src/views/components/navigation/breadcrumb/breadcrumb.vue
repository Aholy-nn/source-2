<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-06 16:24:24
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
    <z-row :gutter="15">
      <z-col span="12">
         <Breadcrumb>
              <breadcrumb-item to="/">Home</breadcrumb-item>
              <breadcrumb-item to="/components/breadcrumb">Components</breadcrumb-item>
              <breadcrumb-item>Breadcrumb</breadcrumb-item>
          </Breadcrumb>
          <div class="example-desc">
              <header class="example-header"><span>基础用法</span></header>
              <div>
                  <p>最基础的用法，通过设置to属性添加链接。</p>
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
         <z-breadcrumb>
            <z-breadcrumb-item to="/">
                <z-icon type="ios-home-outline"></z-icon> Home
            </z-breadcrumb-item>
            <z-breadcrumb-item to="/components/breadcrumb">
                <z-icon type="social-buffer-outline"></z-icon> Components
            </z-breadcrumb-item>
            <z-breadcrumb-item>
                <z-icon type="pound"></z-icon> Breadcrumb
            </z-breadcrumb-item>
        </z-breadcrumb>
        <div class="example-desc">
            <header class="example-header"><span>带图标的</span></header>
            <div>
                <p>可自定义每项的内容，比如带有一个图标。</p>
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
        <z-breadcrumb separator=">">
            <z-breadcrumb-item to="/">Home</z-breadcrumb-item>
            <z-breadcrumb-item to="/components/breadcrumb">Components</z-breadcrumb-item>
            <z-breadcrumb-item>Breadcrumb</z-breadcrumb-item>
        </z-breadcrumb>
        <z-breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
            <z-breadcrumb-item to="/">Home</z-breadcrumb-item>
            <z-breadcrumb-item to="/components/breadcrumb">Components</z-breadcrumb-item>
            <z-breadcrumb-item>Breadcrumb</z-breadcrumb-item>
        </z-breadcrumb>
        <div class="example-desc">
            <header class="example-header"><span>分隔符</span></header>
            <div>
                <p>通过设置separator属性来自定义分隔符，比如 > ，也可以接受自定义的HTML字符串。</p>
            </div>
        </div>
      </z-col>
      <z-col span="12">
          <z-code-editor :content="demo3"></z-code-editor>
      </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
    <div class="demo-api">
      <div class="anchor">
          <h2 id="API">API</h2>
      </div>
      <div class="anchor">
          <h3>Breadcrumb props</h3>
      </div>
      <table class="table">
          <thead>
              <tr>
                  <th style="padding: 10px 20px">属性</th>
                  <th style="padding: 10px 20px">说明</th>
                  <th style="padding: 10px 20px">类型</th>
                  <th style="padding: 10px 20px">默认值</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td style="padding: 10px 20px">separator</td>
                  <td style="padding: 10px 20px">自定义分隔符</td>
                  <td style="padding: 10px 20px">String | Element String</td>
                  <td style="padding: 10px 20px">/</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3>breadcrumb-item props</h3>
      </div>
      <table class="table">
          <thead>
              <tr>
                <th style="padding: 10px 20px">属性</th>
                <th style="padding: 10px 20px">说明</th>
                <th style="padding: 10px 20px">类型</th>
                <th style="padding: 10px 20px">默认值</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td style="padding: 10px 20px">to</td>
                  <td style="padding: 10px 20px">链接，不传则没有链接</td>
                  <td style="padding: 10px 20px">String | Object</td>
                  <td style="padding: 10px 20px">-</td>
              </tr>
              <tr>
                  <td style="padding: 10px 20px">href</td>
                  <td style="padding: 10px 20px">同 to，未来将废弃</td>
                  <td style="padding: 10px 20px">String | Object</td>
                  <td style="padding: 10px 20px">-</td>
              </tr>
              <tr>
                  <td style="padding: 10px 20px">replace</td>
                  <td style="padding: 10px 20px">路由跳转时，开启 replace 将不会向 history 添加新记录</td>
                  <td style="padding: 10px 20px">Boolean</td>
                  <td style="padding: 10px 20px">false</td>
              </tr>
          </tbody>
      </table>
  </div>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpBreadcrumb',
  data: function () {
    return {
      demo1: '<z-breadcrumb>\r' +
              '    <z-breadcrumb-item to="/">Home</z-breadcrumb-item>\r' +
              '    <z-breadcrumb-item to="/components/breadcrumb">Components</z-breadcrumb-item>\r' +
              '    <z-breadcrumb-item>Breadcrumb</z-breadcrumb-item>\r' +
              '</z-breadcrumb>\r',
      demo2: '<z-breadcrumb>\r' +
              '    <z-breadcrumb-item to="/">\r' +
              '        <z-icon type="ios-home-outline"></z-icon> Home\r' +
              '    </z-breadcrumb-item>\r' +
              '    <z-breadcrumb-item to="/components/breadcrumb">\r' +
              '        <z-icon type="social-buffer-outline"></z-icon> Components\r' +
              '    </z-breadcrumb-item>\r' +
              '    <z-breadcrumb-item>\r' +
              '        <z-icon type="pound"></z-icon> Breadcrumb\r' +
              '    </z-breadcrumb-item>\r' +
              '</z-breadcrumb>\r',
      demo3: '<z-breadcrumb separator=">">\r' +
              '    <z-breadcrumb-item to="/">Home</z-breadcrumb-item>\r' +
              '    <z-breadcrumb-item to="/components/breadcrumb">Components</z-breadcrumb-item>\r' +
              '    <z-breadcrumb-item>Breadcrumb</z-breadcrumb-item>\r' +
              '</z-breadcrumb>\r' +
              '<z-breadcrumb separator="<b class="demo-breadcrumb-separator">=></b>">\r' +
              '    <z-breadcrumb-item to="/">Home</z-breadcrumb-item>\r' +
              '    <z-breadcrumb-item to="/components/breadcrumb">Components</z-breadcrumb-item>\r' +
              '    <z-breadcrumb-item>Breadcrumb</z-breadcrumb-item>\r' +
              '</z-breadcrumb>\r'
    }
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
