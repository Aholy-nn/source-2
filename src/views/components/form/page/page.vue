<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-03-17 16:19:20
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-page :total="100"></z-page>
          <div class="example-desc">
              <header class="example-header"><span>基础用法</span></header>
              <p>基本的分页，页数过多时会自动折叠。</p>
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
           <z-page :total="100" show-sizer></z-page>
            <div class="example-desc">
                <header class="example-header"><span>每页数量</span></header>
                <p>可以切换每页显示的数量。</p>
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
          <z-page :total="100" show-elevator></z-page>
          <div class="example-desc">
              <header class="example-header"><span>电梯</span></header>
              <p>快速跳转到某一页。</p>
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
          <z-page :total="100" show-total></z-page>
          <div class="example-desc">
              <header class="example-header"><span>总数</span></header>
              <p>显示总共多少条数据，接受 slot 来自定义内容，默认显示共{ { total } }条</p>
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
          <z-page :total="40" size="small"></z-page>
          <br>
          <z-page :total="40" size="small" show-elevator show-sizer></z-page>
          <br>
          <z-page :total="40" size="small" show-total></z-page>
          <div class="example-desc">
              <header class="example-header"><span>迷你型</span></header>
              <p>设置size为small使用迷你型，迷你型拥有普通的所有功能。</p>
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
          <z-page :current="2" :total="50" simple></z-page>
          <div class="example-desc">
              <header class="example-header"><span>简洁</span></header>
              <p>设置simple属性即可使用简洁版的分页，通过输入页码回车切换，或使用鼠标点击切换页码，或使用键盘的上下键来切换。简洁分页不能使用总数、电梯和切换数量。</p>
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
          <z-page :total="100" prev-text="Previous" next-text="Next"></z-page>
          <div class="example-desc">
              <header class="example-header"><span>上一页和下一页</span></header>
              <p>使用属性 prev-text 和 next-text，替代图标显示为文字。</p>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo7"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <div class="demo-api">
        <div class="anchor">
            <h2 id="API">API</h2>
        </div>
        <div class="anchor">
            <h3 id="Page_props">Page props</h3>
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
                    <td>current</td>
                    <td>当前页码，支持 .sync 修饰符</td>
                    <td>Number</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>total</td>
                    <td>数据总数</td>
                    <td>Number</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>page-size</td>
                    <td>每页条数</td>
                    <td>Number</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>page-size-opts</td>
                    <td>每页条数切换的配置</td>
                    <td>Array</td>
                    <td>[10, 20, 30, 40]</td>
                </tr>
                <tr>
                    <td>placement</td>
                    <td>条数切换弹窗的展开方向，可选值为 <code>bottom</code> 和 <code>top</code></td>
                    <td>String</td>
                    <td>bottom</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>可选值为<code>small</code>（迷你版）或不填（默认）</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>simple</td>
                    <td>简洁版</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>show-total</td>
                    <td>显示总数</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>show-elevator</td>
                    <td>显示电梯，可以快速切换到某一页</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>show-sizer</td>
                    <td>显示分页，用来改变<code>page-size</code></td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>class-name</td>
                    <td>自定义 class 名称</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>styles</td>
                    <td>自定义 style 样式</td>
                    <td>Object</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>transfer</td>
                    <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>prev-text</td>
                    <td>替代图标显示的上一页文字</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>next-text</td>
                    <td>替代图标显示的下一页文字</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>是否禁用</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="Page_events">Page events</h3>
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
                    <td>on-change</td>
                    <td>页码改变的回调，返回改变后的页码</td>
                    <td>页码</td>
                </tr>
                <tr>
                    <td>on-page-size-change</td>
                    <td>切换每页条数时的回调，返回切换后的每页条数</td>
                    <td>page-size</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="Page_slot">Page slot</h3>
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
                    <td>自定义显示总数的内容</td>
                </tr>
            </tbody>
        </table>
      </div>
   </z-card>
</div>
</template>

<script>
export default {
  name: 'cpPage',
  data: function () {
    return {
      visible: false,
      tableData: [
        {attribute: 'current', explain: '当前页码，支持 .sync 修饰符', type: 'Number', default: '1'},
        {attribute: 'total', explain: '数据总数', type: 'Number', default: '0'},
        {attribute: 'page-size-opts', explain: '每页条数切换的配置', type: 'Array', default: '[10, 20, 30, 40]'},
        {attribute: 'placement', explain: '条数切换弹窗的展开方向，可选值为 bottom 和 top', type: 'String', default: 'bottom'},
        {attribute: 'size', explain: '可选值为small（迷你版）或不填（默认）', type: 'String', default: '-'},
        {attribute: 'simple', explain: '简洁版', type: 'Boolean', default: 'false'},
        {attribute: 'show-total', explain: '显示总数', type: 'Boolean', default: 'false'},
        {attribute: 'show-elevator', explain: '显示电梯，可以快速切换到某一页', type: 'Boolean', default: 'false'},
        {attribute: 'show-sizer', explain: '显示分页，用来改变page-size', type: 'Boolean', default: 'false'},
        {attribute: 'class-name', explain: '自定义 class 名称', type: 'String', default: '-'},
        {attribute: 'styles', explain: '自定义 style 样式', type: 'String', default: '-'},
        {attribute: 'transfer', explain: '是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果', type: 'String', default: '-'}
      ],
      eventData: [
        {name: 'on-change', explain: '页码改变的回调，返回改变后的页码', back: '页码'},
        {name: 'on-page-size-change', explain: '切换每页条数时的回调，返回切换后的每页条数', back: 'page-size'}
      ],
      demo1: ' <z-page :total="100"></z-page>',
      demo2: ' <z-page :total="100" show-sizer></z-page>',
      demo3: ' <z-page :total="100" show-elevator></z-page>',
      demo4: ' <z-page :total="100" show-total></z-page>',
      demo5: ' <z-page :total="40" size="small"></z-page>' +
              ' <z-page :total="40" size="small" show-elevator show-sizer></z-page>' +
              ' <z-page :total="40" size="small" show-total></z-page>',
      demo6: ' <z-page :current="2" :total="50" simple></z-page>',
      demo7: '<z-page :total="100" prev-text="Previous" next-text="Next"></z-page>'
    }
  }
}
</script>
<style scoped>
</style>
