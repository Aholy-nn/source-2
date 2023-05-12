<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-06 15:01:06
 * @LastEditors  : Please set LastEditors
 -->
<template>
  <div>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <div class="demo-split">
              <z-split v-model="split1">
                  <div slot="left" class="demo-split-pane">
                      Left Pane
                  </div>
                  <div slot="right" class="demo-split-pane">
                      Right Pane
                  </div>
              </z-split>
          </div>
          <div class="example-desc">
              <header class="example-header"><span>左右分割</span></header>
              <p>左右分割用法。</p>
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
          <div class="demo-split">
              <z-split v-model="split2" mode="vertical">
                  <div slot="top" class="demo-split-pane">
                      Top Pane
                  </div>
                  <div slot="bottom" class="demo-split-pane">
                      Bottom Pane
                  </div>
              </z-split>
          </div>
          <div class="example-desc">
              <header class="example-header"><span>上下分割</span></header>
              <p>上下分割用法。</p>
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
            <div class="demo-split">
                <z-split v-model="split3">
                    <div slot="left" class="demo-split-pane no-padding">
                        <z-split v-model="split4" mode="vertical">
                            <div slot="top" class="demo-split-pane">
                                Top Pane
                            </div>
                            <div slot="bottom" class="demo-split-pane">
                                Bottom Pane
                            </div>
                        </z-split>
                    </div>
                    <div slot="right" class="demo-split-pane">
                        Right Pane
                    </div>
                </z-split>
            </div>
            <div class="example-desc">
                <header class="example-header"><span>嵌套使用</span></header>
                <p>可以嵌套使用。</p>
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
            <h3 id="Split_props">Split props</h3>
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
                    <td>value</td>
                    <td>面板位置，可以是 0~1 代表百分比，或具体数值的像素，可用 v-model 双向绑定</td>
                    <td>Number | String</td>
                    <td>0.5</td>
                </tr>
                <tr>
                    <td>mode</td>
                    <td>类型，可选值为 horizontal 或 vertical</td>
                    <td>String</td>
                    <td>horizontal</td>
                </tr>
                <tr>
                    <td>min</td>
                    <td>最小阈值</td>
                    <td>Number | String</td>
                    <td>40px</td>
                </tr>
                <tr>
                    <td>max</td>
                    <td>最大阈值</td>
                    <td>Number | String</td>
                    <td>40px</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="Split_events">Split events</h3>
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
                    <td>on-move-start</td>
                    <td>拖拽开始</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>on-moving</td>
                    <td>拖拽中</td>
                    <td>event</td>
                </tr>
                <tr>
                    <td>on-move-end</td>
                    <td>拖拽结束</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="Split_slot">Split slot</h3>
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
                    <td>left</td>
                    <td>mode 为 horizontal 时可用，左边面板</td>
                </tr>
                <tr>
                    <td>right</td>
                    <td>mode 为 horizontal 时可用，右边面板</td>
                </tr>
                <tr>
                    <td>top</td>
                    <td>mode 为 vertical 时可用，上边面板</td>
                </tr>
                <tr>
                    <td>bottom</td>
                    <td>mode 为 vertical 时可用，下边面板</td>
                </tr>
                <tr>
                    <td>trigger</td>
                    <td>自定义分割拖拽节点</td>
                </tr>
            </tbody>
        </table>
    </div>
    </z-card>
  </div>
</template>

<script>
export default {
  name: 'cpSplit',
  data: function () {
    return {
      split1: 0.5,
      split2: 0.5,
      split3: 0.5,
      split4: 0.5,
      demo1: '<div class="demo-split">\r' +
              '     <z-split v-model="split1">\r' +
              '         <div slot="left" class="demo-split-pane">\r' +
              '             Left Pane\r' +
              '         </div>\r' +
              '        <div slot="right" class="demo-split-pane">\r' +
              '            Right Pane\r' +
              '         </div>\r' +
              '     </z-split>\r' +
              ' </div>\r' +
              '<script>\r' +
              '    export default {\r' +
              '         data () {\r' +
              '             return {\r' +
              '                 split1: 0.5\r' +
              '             }\r' +
              '         }\r' +
              '     }\r' +
              // eslint-disable-next-line no-useless-escape
              ' <\/script>\r' +
              ' <style>\r' +
              '     .demo-split{\r' +
              '         height: 200px;\r' +
              '         border: 1px solid #dcdee2;\r' +
              '     }\r' +
              '     .demo-split-pane{\r' +
              '         padding: 10px;\r' +
              '     }\r' +
              ' </style>\r',
      demo2: ' <z-split v-model="split2" mode="vertical">\r' +
              '    <div slot="top" class="demo-split-pane">\r' +
              '        Top Pane\r' +
              '    </div>\r' +
              '    <div slot="bottom" class="demo-split-pane">\r' +
              '        Bottom Pane\r' +
              '    </div>\r' +
              '</z-split>\r' +
              '<script>\r' +
              '    export default {\r' +
              '         data () {\r' +
              '             return {\r' +
              '                 split2: 0.5\r' +
              '             }\r' +
              '         }\r' +
              '     }\r' +
              // eslint-disable-next-line no-useless-escape
              ' <\/script>\r' +
              ' <style>\r' +
              '     .demo-split{\r' +
              '         height: 200px;\r' +
              '         border: 1px solid #dcdee2;\r' +
              '     }\r' +
              '     .demo-split-pane{\r' +
              '         padding: 10px;\r' +
              '     }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo3: ' <div class="demo-split">\r' +
              '    <z-split v-model="split3">\r' +
              '        <div slot="left" class="demo-split-pane no-padding">\r' +
              '            <z-split v-model="split4" mode="vertical">\r' +
              '                <div slot="top" class="demo-split-pane">\r' +
              '                    Top Pane\r' +
              '                </div>\r' +
              '                <div slot="bottom" class="demo-split-pane">\r' +
              '                    Bottom Pane\r' +
              '                </div>\r' +
              '            </z-split>\r' +
              '        </div>\r' +
              '        <div slot="right" class="demo-split-pane">\r' +
              '            Right Pane\r' +
              '         </div>\r' +
              '    </z-split>\r' +
              '</div>\r' +
              '<script>\r' +
              '    export default {\r' +
              '        data () {\r' +
              '            return {\r' +
              '                split3: 0.5,\r' +
              '                split4: 0.5\r' +
              '            }\r' +
              '        }\r' +
              '    }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r' +
              '<style>\r' +
              '    .demo-split{\r' +
              '        height: 200px;\r' +
              '        border: 1px solid #dcdee2;\r' +
              '     }\r' +
              '    .demo-split-pane{\r' +
              '        padding: 10px;\r' +
              '    }\r' +
              '    .demo-split-pane.no-padding{\r' +
              '        height: 200px;\r' +
              '        padding: 0;\r' +
              '    }\r' +
              '</style>\r'
    }
  }
}
</script>
<style scoped>
 .demo-split {
      height: 200px;
      border: 1px solid #dcdee2;
  }

  .demo-split-pane {
      padding: 10px;
  }

  .demo-split-pane.no-padding {
      height: 200px;
      padding: 0;
  }
</style>
