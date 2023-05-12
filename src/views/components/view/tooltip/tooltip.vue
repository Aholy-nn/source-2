<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-08 11:21:19
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
    <z-row :gutter="15">
      <z-col span="12">
         <z-tooltip content="这里是提示文字">
              当鼠标经过这段文字时，会显示一个气泡框
          </z-tooltip>
          <div class="example-desc">
              <header class="example-header"><span>基础用法</span></header>
              <p>最简单的用法。</p>
              <p>注意 Tooltip 内的文本使用了 white-space: nowrap;，即不自动换行，如需展示很多内容并自动换行时，建议给内容 slot 增加样式
                  white-space:
                  normal;。</p>
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
         <div class="top">
            <z-tooltip content="Top Left 文字提示" placement="top-start">
                <z-button>上左</z-button>
            </z-tooltip>
            <z-tooltip content="Top Center 文字提示" placement="top">
                <z-button>上边</z-button>
            </z-tooltip>
            <z-tooltip content="Top Right 文字提示" placement="top-end">
                <z-button>上右</z-button>
            </z-tooltip>
        </div>
        <div class="center">
            <div class="center-left">
                <z-tooltip content="Left Top 文字提示" placement="left-start">
                    <z-button>左上</z-button>
                </z-tooltip><br><br>
                <z-tooltip content="Left Center 文字提示" placement="left">
                    <z-button>左边</z-button>
                </z-tooltip><br><br>
                <z-tooltip content="Left Bottom 文字提示" placement="left-end">
                    <z-button>左下</z-button>
                </z-tooltip>
            </div>
            <div class="center-right">
                <z-tooltip content="Right Top 文字提示" placement="right-start">
                    <z-button>右上</z-button>
                </z-tooltip><br><br>
                <z-tooltip content="Right Center 文字提示" placement="right">
                    <z-button>右边</z-button>
                </z-tooltip><br><br>
                <z-tooltip content="Right Bottom 文字提示" placement="right-end">
                    <z-button>右下</z-button>
                </z-tooltip>
            </div>
        </div>
        <div class="bottom">
            <z-tooltip content="Bottom Left 文字提示" placement="bottom-start">
                <z-button>下左</z-button>
            </z-tooltip>
            <z-tooltip content="Bottom Center 文字提示" placement="bottom">
                <z-button>下边</z-button>
            </z-tooltip>
            <z-tooltip content="Bottom Right 文字提示" placement="bottom-end">
                <z-button>下右</z-button>
            </z-tooltip>
        </div>
        <div class="example-desc">
            <header class="example-header"><span>位置</span></header>
            <p>组件提供了12个不同的方向显示Tooltip，具体配置可查看API。</p>
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
        <z-tooltip placement="top">
          <z-button>多行</z-button>
          <div slot="content">
              <p>显示多行信息</p>
              <p><i>可以自定义样式</i></p>
          </div>
        </z-tooltip>
        <div class="example-desc">
            <header class="example-header"><span>自定义内容</span></header>
            <p>通过自定义 slot 显示多行文本或更复杂的样式。</p>
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
          <z-tooltip placement="top" content="可以禁用文字提示" :disabled="disabled">
              <z-button @click="disabled = true">点击关闭提示</z-button>
          </z-tooltip>
          <div class="example-desc">
              <header class="example-header"><span>禁用</span></header>
              <p>通过设置属性disabled可以禁用文字提示。</p>
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
         <z-tooltip placement="top" content="Tooltip 文字提示" :delay="1000">
            <z-button @click="disabled = true">延时1秒显示</z-button>
        </z-tooltip>
        <div class="example-desc">
            <header class="example-header"><span>延时</span></header>
            <p>通过设置属性delay可以延时显示文字提示，单位毫秒。</p>
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
        <h2>API</h2>
    </div>
    <div class="anchor">
        <h3>Tooltip props</h3>
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
            <tr v-for="(tableName,index) in tableData" :key="index">
                <td>{{tableName.attribute}}</td>
                <td>{{tableName.explain}}</td>
                <td>{{tableName.type}}</td>
                <td>{{tableName.default}}</td>
            </tr>
        </tbody>
    </table>
    <div class="anchor">
        <h3>Tooltip events</h3>
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
                <td>on-popper-show</td>
                <td>在提示框显示时触发</td>
                <td>无</td>
            </tr>
            <tr>
                <td>on-popper-hide</td>
                <td>在提示框消失时触发</td>
                <td>无</td>
            </tr>
        </tbody>
    </table>
    <div class="anchor">
        <h3>Tooltip slot</h3>
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
                <td>主体内容</td>
            </tr>
            <tr>
                <td>content</td>
                <td>提示框的内容，定义此 slot 时，会覆盖 props content。</td>
            </tr>
        </tbody>
    </table>
</div>
  </z-card>

</div>
</template>

<script>
export default {
  name: 'cpTooltip',
  data: function () {
    return {
      disabled: false,
      tableData: [
        {attribute: 'content', explain: '显示的内容', type: 'String | Number', default: '空'},
        {attribute: 'placement', explain: '提示框出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end', type: 'String', default: 'bottom'},
        {attribute: 'disabled', explain: '是否禁用提示框', type: 'Boolean', default: 'false'},
        {attribute: 'slot', explain: '显示多行文本或复杂样式', type: 'function', default: '-'},
        {attribute: 'delay', explain: '延迟显示，单位毫秒', type: 'Number', default: '0'},
        {attribute: 'always', explain: '是否总是可见', type: 'Boolean', default: 'false'},
        {attribute: 'transfer', explain: '是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果', type: 'Boolean', default: 'false'}
      ],
      demo1: '<z-tooltip content="这里是提示文字">\r' +
              '    当鼠标经过这段文字时，会显示一个气泡框\r' +
              '</z-tooltip>\r',
      demo2: '<div class="top">\r' +
              '    <z-tooltip content="Top Left 文字提示" placement="top-start">\r' +
              '        <z-button>上左</z-button>\r' +
              '    </z-tooltip>\r' +
              '    <z-tooltip content="Top Center 文字提示" placement="top">\r' +
              '        <z-button>上边</z-button>\r' +
              '    </z-tooltip>\r' +
              '    <z-tooltip content="Top Right 文字提示" placement="top-end">\r' +
              '        <z-button>上右</z-button>\r' +
              '    </z-tooltip>\r' +
              '</div>\r' +
              '<div class="center">\r' +
              '    <div class="center-left">\r' +
              '        <z-tooltip content="Left Top 文字提示" placement="left-start">\r' +
              '            <z-button>左上</z-button>\r' +
              '        </z-tooltip><br><br>\r' +
              '        <z-tooltip content="Left Center 文字提示" placement="left">\r' +
              '            <z-button>左边</z-button>\r' +
              '        </z-tooltip><br><br>\r' +
              '        <z-tooltip content="Left Bottom 文字提示" placement="left-end">\r' +
              '            <z-button>左下</z-button>\r' +
              '        </z-tooltip>\r' +
              '    </div>\r' +
              '    <div class="center-right">\r' +
              '        <z-tooltip content="Right Top 文字提示" placement="right-start">\r' +
              '            <z-button>右上</z-button>\r' +
              '        </z-tooltip><br><br>\r' +
              '        <z-tooltip content="Right Center 文字提示" placement="right">\r' +
              '            <z-button>右边</z-button>\r' +
              '        </z-tooltip><br><br>\r' +
              '        <z-tooltip content="Right Bottom 文字提示" placement="right-end">\r' +
              '            <z-button>右下</z-button>\r' +
              '         </z-tooltip>\r' +
              '    </div>\r' +
              '</div>\r' +
              '<div class="bottom">\r' +
              '    <z-tooltip content="Bottom Left 文字提示" placement="bottom-start">\r' +
              '       <z-button>下左</z-button>\r' +
              '    </z-tooltip>\r' +
              '    <z-tooltip content="Bottom Center 文字提示" placement="bottom">\r' +
              '        <z-button>下边</z-button>\r' +
              '    </z-tooltip>\r' +
              '    <z-tooltip content="Bottom Right 文字提示" placement="bottom-end">\r' +
              '        <z-button>下右</z-button>\r' +
              '    </z-tooltip>\r' +
              '</div>\r',
      demo3: '<z-tooltip placement="top">\r' +
              '    <z-button>多行</z-button>\r' +
              '    <div slot="content">\r' +
              '        <p>显示多行信息</p>\r' +
              '        <p><i>可以自定义样式</i></p>\r' +
              '    </div>\r' +
              '</z-tooltip>\r',
      demo4: '<z-tooltip placement="top" content="可以禁用文字提示" :disabled="disabled">\r' +
              '    <z-button @click="disabled = true">点击关闭提示</z-button>\r' +
              '</z-tooltip>\r' +
              '<script>\r' +
              'export default {\r' +
              '        data () {\r' +
              '            return {\r' +
              '                disabled: false\r' +
              '            }\r' +
              '        }\r' +
              ' }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo5: '<z-tooltip placement="top" content="Tooltip 文字提示" :delay="1000">\r' +
              '    <z-button @click="disabled = true">延时1秒显示</z-button>\r' +
              '</z-tooltip>\r'
    }
  }
}
</script>
<style scoped>
.top,
.bottom {
    text-align: center;
}
.center {
    width: 300px;
    margin: 10px auto;
    overflow: hidden;
}
.center-left {
    float: left;
}
.center-right {
    float: right;
}
</style>
