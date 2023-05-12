<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-08 14:17:50
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
    <z-row :gutter="15">
      <z-col span="12">
          <div class="demo-block">
              <z-badge :count="3">
                  <a href="#" class="demo-badge"></a>
              </z-badge>
              <z-badge dot>
                  <a href="#" class="demo-badge"></a>
              </z-badge>
          </div>
          <div class="demo-block">
              <z-badge dot>
                  <z-icon type="ios-bell-outline" size="26"></z-icon>
              </z-badge>
              <z-badge dot>
                  <a href="#">可以是一个链接</a>
              </z-badge>
          </div>
          <div class="demo-block">
              <z-badge :count="100">
                  <a href="#" class="demo-badge"></a>
              </z-badge>
              <z-badge :count="1000" overflow-count="999">
                  <a href="#" class="demo-badge"></a>
              </z-badge>
          </div>
          <div class="demo-block">
              <z-badge :count="10"></z-badge>
              <z-badge :count="20" class-name="demo-badge-alone"></z-badge>
          </div>

          <div class="example-desc">
              <p>* 通过设置overflow-count属性设置一个封顶值，当超过时，会显示${overflowCount}+</p>
              <p>* 独立使用及自定义样式 </p>
              <p>* 强迫症患者慎用！</p>
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
                  <td>count</td>
                  <td>显示的数字，大于overflowCount时，显示${overflowCount}+，为 0 时隐藏</td>
                  <td>Number | String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>overflow-count</td>
                  <td>展示封顶的数字值</td>
                  <td>Number | String</td>
                  <td>99</td>
              </tr>
              <tr>
                  <td>dot</td>
                  <td>不展示数字，只有一个小红点，如需隐藏 dot ，需要设置count为 0</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>class-name</td>
                  <td>自定义的class名称，dot 模式下无效</td>
                  <td>String</td>
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
  name: 'cpBadge',
  data: function () {
    return {
      demo1: '<div class="demo-block">\r' +
            '    <z-badge :count="3+0">\r' +
            '        <a href="#" class="demo-badge"></a>\r' +
            '     </z-badge>\r' +
            '     <z-badge dot>\r' +
            '        <a href="#" class="demo-badge"></a>\r' +
            '    </z-badge>\r' +
            '</div>\r' +
            '<div class="demo-block">\r' +
            '    <z-badge dot>\r' +
            '        <z-icon type="ios-bell-outline" size="26"></z-icon>\r' +
            '    </z-badge>\r' +
            '    <z-badge dot>\r' +
            '        <a href="#">可以是一个链接</a>\r' +
            '    </z-badge>\r' +
            '</div>\r' +
            '<div class="demo-block">\r' +
            '    <z-badge :count="100">\r' +
            '        <a href="#" class="demo-badge"></a>\r' +
            '    </z-badge>\r' +
            '    <z-badge :count="1000" overflow-count="999">\r' +
            '        <a href="#" class="demo-badge"></a>\r' +
            '    </z-badge>\r' +
            '</div>\r' +
            '<div class="demo-block">\r' +
            '    <z-badge :count="10"></z-badge>\r' +
            '    <z-badge :count="20" class-name="demo-badge-alone"></z-badge>\r' +
            '</div>\r'
    }
  }
}
</script>
<style scoped>
.demo-block {
    margin-bottom: 25px;
}
.demo-badge {
    width: 42px;
    height: 42px;
    background: #eee;
    border-radius: 6px;
    display: inline-block;
}
</style>
