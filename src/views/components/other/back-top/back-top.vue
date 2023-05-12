<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-08 11:43:39
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
    <z-row :gutter="15">
      <z-col span="12">
        <z-back-top></z-back-top>
        <div class="example-desc">
            <div>向下滚动页面，灰色的按钮为默认效果。</div>
            <header class="example-header"><span>基础用法</span></header>
            <div>默认位置距离页面右部和底部 30px，滚动至距顶端 400px 时显示。</div>
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
          <z-back-top :height="100" :bottom="200">
              <div class="top">返回顶端</div>
          </z-back-top>
          <div class="example-desc">
              <div>向下滚动页面，灰色的按钮为默认效果。</div>
              <header class="example-header"><span>自定义样式 </span></header>
              <div>自定义了位置在页面底部 200px,滚动至距顶端 200px 时显示。</div>
          </div>
      </z-col>
        <z-col span="12">
          <z-code-editor :content="demo2"></z-code-editor>
      </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
    <div  class="demo-api">
      <div  class="anchor">
          <h2 id="API">API</h2>
      </div>
      <div  class="anchor">
          <h3 id="BackTop_props">BackTop props</h3>
      </div>
      <table class="table">
          <thead >
          <tr >
              <th >属性</th>
              <th >说明</th>
              <th >类型</th>
              <th >默认值</th>
          </tr>
          </thead>
          <tbody >
          <tr >
              <td >height</td>
              <td >页面滚动高度达到该值时才显示<code >BackTop</code>组件</td>
              <td >Number</td>
              <td >400</td>
          </tr>
          <tr >
              <td >bottom</td>
              <td >组件距离底部的距离</td>
              <td >Number</td>
              <td >30</td>
          </tr>
          <tr >
              <td >right</td>
              <td >组件距离右部的距离</td>
              <td >Number</td>
              <td >30</td>
          </tr>
          <tr >
              <td >duration</td>
              <td >滚动动画持续时间，单位 毫秒</td>
              <td >Number</td>
              <td >1000</td>
          </tr>
          </tbody>
      </table>
      <div  class="anchor">
          <h3 id="BackTop_events">BackTop events</h3>
      </div>
      <table class="table">
          <thead >
          <tr >
              <th >事件名</th>
              <th >说明</th>
              <th >返回值</th>
          </tr>
          </thead>
          <tbody >
          <tr >
              <td >on-click</td>
              <td >点击按钮时触发</td>
              <td >无</td>
          </tr>
          </tbody>
      </table>
  </div>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpBackTop',
  data: function () {
    return {
      demo1: '<z-back-top></z-back-top>',
      demo2: ' <z-back-top :height="100" :bottom="200">\r' +
                   '    <div class="top">返回顶端</div>\r' +
                   ' </z-back-top>\r'
    }
  }
}
</script>
<style scoped>
</style>
