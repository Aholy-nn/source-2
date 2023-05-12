<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-03-17 16:27:22
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
    <z-row :gutter="15">
      <z-col span="12">
          <z-affix>
              <span class="demo-affix">固定在最顶部</span>
          </z-affix>
          <div class="example-desc">
              <header class="example-header"><span>基础用法</span></header>
              <div>简单使用，当元素不可见时，直接固定在最顶端。</div>
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
        <z-affix :offset-top="50">
            <span class="demo-affix">固定在距离顶部 50px 的位置</span>
        </z-affix>
        <div class="example-desc">
            <header class="example-header"><span>偏移</span></header>
            <div>当滚动到一定距离时再固定。</div>
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
          <z-affix :offset-bottom="20">
              <span class="demo-affix">固定在距离底部 20px 的位置</span>
          </z-affix>
          <div class="example-desc">
              <header class="example-header"><span>固定在底部</span></header>
              <div>
                  <p>在屏幕下方固定，可以通过缩小浏览器窗口高度来查看效果。</p>
                  <p>注意，<code>offset-top</code>和<code>offset-bottom</code>
                      只可以设置一个，如果都设置，会使用<code>offset-top</code>。
                  </p>
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
        <z-affix :offset-top="100" @on-change="change">
            <span class="demo-affix">固定在距离顶部 100px 的位置</span>
        </z-affix>
        <div class="example-desc">
            <header class="example-header"><span>固定状态改变时的回调</span></header>
            <div>当固定状态发生改变时，会触发事件。</div>
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
          <h3 id="Affix_props">Affix props</h3>
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
                  <td>offset-top</td>
                  <td>距离窗口顶部达到指定偏移量后触发</td>
                  <td>Number</td>
                  <td>0</td>
              </tr>
              <tr>
                  <td>offset-bottom</td>
                  <td>距离窗口底部达到指定偏移量后触发</td>
                  <td>Number</td>
                  <td>-</td>
              </tr>
              <tr><td>use-capture</td> <td>addEventListener 原生的 useCapture 选项</td> <td>Boolean</td> <td>false</td></tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3 id="Affix_events">Affix events</h3>
      </div>
      <table class="table">
          <thead>
              <tr>
                  <th>事件名</th>
                  <th>说明</th>
                  <th>返回值</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>on-change</td>
                  <td>在固定状态发生改变时触发</td>
                  <td>true | false</td>
              </tr>
          </tbody>
      </table>
    </div>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpAffix',
  data: function () {
    return {
      demo1: '<z-affix>\r' +
            '   <span class="demo-affix">Fixed at the top</span>\r' +
            '</z-affix>',
      demo2: '<z-affix :offset-top="50">\r' +
            '   <span class="demo-affix">Fixed at the top 50px from the top</span>\r' +
            '</z-affix>',
      demo3: '<z-affix :offset-bottom="20">\r' +
            '   <span class="demo-affix">Fix at the bottom 20px</span>\r' +
            '</z-affix>',
      demo4: '<z-affix :offset-top="100" @on-change="change">\r' +
            '   <span class="demo-affix">Fix the position at the top of 100px at the top</span>\r' +
            '</z-affix>'
    }
  },
  methods: {
    change: function (status) {
      this.$Message.info(`Status: ${status}`)
    }
  }
}
</script>
<style scoped>
 .demo-affix {
    display: inline-block;
    color: #fff;
    padding: 10px 30px;
    font-size: 12px;
    text-align: center;
    background: rgba(0, 153, 229, .9);
}
.offset-top-demo {
    width: 143px;
    height: 40px;
    border-radius: 5px;
    background: antiquewhite;
    text-align: center;
    line-height: 40px;
    background: #4c9efd;
    color: #fff;
}
</style>
