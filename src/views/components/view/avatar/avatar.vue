<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-03-17 16:27:42
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <div class="demo-block">
                <z-avatar icon="person" size="large" />
                <z-avatar icon="person" />
                <z-avatar icon="person" size="small" />
            </div>
            <div class="demo-block">
                <z-avatar shape="square" icon="person" size="large" />
                <z-avatar shape="square" icon="person" />
                <z-avatar shape="square" icon="person" size="small" />
            </div>
            <div class="demo-block">
                <z-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                <z-avatar style="color: #f56a00;background-color: #fde3cf">U</z-avatar>
                <z-avatar style="background-color: #87d068" icon="person" />
                <z-badge :count="1">
                    <z-avatar shape="square" icon="person" />
                </z-badge>
            </div>
            <div class="example-desc">
                <p>* 头像有三种尺寸，两种形状可选。</p>
                <p>* 支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色</p>
                <p>* 带徽标的头像</p>
            </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo1"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
   <z-card bordered dis-hover class="m-t-15">
     <div class="demo-api">
      <div class="anchor">
          <h2 id="API">API</h2>
      </div>
      <table class="table">
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
                  <td>shape</td>
                  <td>指定头像的形状，可选值为 circle、square</td>
                  <td>String</td>
                  <td>circle</td>
              </tr>
              <tr>
                  <td>size</td>
                  <td>设置头像的大小，可选值为 large、small、default</td>
                  <td>String</td>
                  <td>default</td>
              </tr>
              <tr>
                  <td>src</td>
                  <td>图片类头像的资源地址</td>
                  <td>String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>icon</td>
                  <td>设置头像的图标类型，参考 Icon 组件</td>
                  <td>String</td>
                  <td>-</td>
              </tr>
              <tr><td>custom-icon</td> <td>自定义图标</td> <td>String</td> <td>-</td></tr>
          </tbody>
      </table>
      <div class="anchor"><h3 id="Avatar_events">Avatar events</h3><a href="#Avatar_events">#</a></div>
      <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-error</td> <td>在设置 src 且图片加载不成功时触发</td> <td>event</td></tr></tbody></table>
  </div>
   </z-card>
</div>
</template>

<script>
export default {
  name: 'cpAvatar',
  data: function () {
    return {
      demo1: '<div class="demo-block">\r' +
                        '    <z-avatar icon="person" size="large" />\r' +
                        '    <z-avatar icon="person" />\r' +
                        '    <z-avatar icon="person" size="small" />\r' +
                        '</div>\r' +
                        '<div class="demo-block">\r' +
                        '    <z-avatar shape="square" icon="person" size="large" />\r' +
                        '    <z-avatar shape="square" icon="person" />\r' +
                        '    <z-avatar shape="square" icon="person" size="small" />\r' +
                        '</div>\r' +
                        '<div class="demo-block">\r' +
                        '    <z-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />\r' +
                        '    <z-avatar style="color: #f56a00;background-color: #fde3cf">U</z-avatar>\r' +
                        '    <z-avatar style="background-color: #87d068" icon="person" />\r' +
                        '    <z-badge count="1">\r' +
                        '        <z-avatar shape="square" icon="person" />\r' +
                        '    </z-badge>\r' +
                        '</div>'
    }
  }
}
</script>
<style scoped>
</style>
