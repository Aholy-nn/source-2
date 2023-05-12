<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-08 10:21:28
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <div class="demo-avatar">
              <z-timeline pending>
                  <z-timeline-item color="green">
                      <Icon type="trophy" slot="dot"></Icon>
                      <p class="time">1976年</p>
                      <p class="content">Apple I 问世</p>
                  </z-timeline-item>
                  <z-timeline-item color="red">
                      <p class="time">1984年</p>
                      <p class="content">发布 Macintosh</p>
                  </z-timeline-item>
                  <z-timeline-item>
                      <p class="time">2007年</p>
                      <p class="content">发布 iPhone</p>
                  </z-timeline-item>
                  <z-timeline-item>
                      <p class="time">2010年</p>
                      <p class="content">发布 iPad</p>
                  </z-timeline-item>
                  <z-timeline-item>
                      <p class="time">2011年10月5日</p>
                      <p class="content">史蒂夫·乔布斯去世</p>
                  </z-timeline-item>
                  <z-timeline-item><a href="#">查看更多</a></z-timeline-item>
              </z-timeline>
          </div>
          <div class="example-desc">
              <header class="example-header"><span>顶部导航</span></header>
              <p>* 用各种颜色来标识不同状态，可以使用green、red、blue或自定义的颜色，默认是 blue 。</p>
              <p>* 通过添加pending属性来标记最后一个为幽灵节点，标识还未完成。</p>
              <p>* 接受一个 slot 来自定义轴点的内容，比如一个图标。</p>
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
          <div class="anchor">
              <h3 id="Timeline_props">Timeline props</h3>
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
                      <td>pending</td>
                      <td>指定是否最后一个节点为幽灵节点</td>
                      <td>Boolean</td>
                      <td>false</td>
                  </tr>
              </tbody>
          </table>
          <div class="anchor">
              <h3 id="TimelineItem_props">TimelineItem props</h3>
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
                      <td>color</td>
                      <td>圆圈颜色，可选值为<code>blue</code>、<code>red</code>、<code>green</code>，或自定义色值</td>
                      <td>String</td>
                      <td>blue</td>
                  </tr>
              </tbody>
          </table>
          <div class="anchor">
              <h3 id="TimelineItem_slot">TimelineItem slot</h3>
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
                      <td>dot</td>
                      <td>自定义时间轴点内容</td>
                  </tr>
                  <tr>
                      <td>无</td>
                      <td>基本内容</td>
                  </tr>
              </tbody>
          </table>
      </div>
   </z-card>
</div>
</template>

<script>
export default {
  name: 'cpTimeline',
  data: function () {
    return {
      demo1: '<z-timeline pending>\r' +
                        '    <z-timeline-item color="green">\r' +
                        '        <Icon type="trophy" slot="dot"></Icon>\r' +
                        '        <p class="time">1976年</p>\r' +
                        '        <p class="content">Apple I 问世</p>\r' +
                        '    </z-timeline-item>\r' +
                        '     <z-timeline-item>\r' +
                        '        <p class="time">1984年</p>\r' +
                        '        <p class="content">发布 Macintosh</p>\r' +
                        '    </z-timeline-item>\r' +
                        '    <z-timeline-item>\r' +
                        '        <p class="time">2007年</p>\r' +
                        '        <p class="content">发布 iPhone</p>\r' +
                        '    </z-timeline-item>\r' +
                        '    <z-timeline-item>\r' +
                        '        <p class="time">2010年</p>\r' +
                        '        <p class="content">发布 iPad</p>\r' +
                        '    </z-timeline-item>\r' +
                        '    <z-timeline-item>\r' +
                        '        <p class="time">2011年10月5日</p>\r' +
                        '        <p class="content">史蒂夫·乔布斯去世</p>\r' +
                        '    </z-timeline-item>\r' +
                        '    <z-timeline-item><a href="#">查看更多</a></z-timeline-item>\r' +
                        '</z-timeline>\r'
    }
  }
}
</script>
<style scoped>
</style>
