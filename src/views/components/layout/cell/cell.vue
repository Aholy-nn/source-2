<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-03-17 16:23:20
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <div style="padding: 10px;background: #f8f8f9">
                <z-card title="Options" icon="android-options" :padding="0" shadow style="width: 300px;">
                    <z-cell-group>
                        <z-cell title="Only show titles" />
                        <z-cell title="Display label content" label="label content" />
                        <z-cell title="Display right content" extra="details" />
                        <z-cell title="Link" extra="details" to="" />
                        <z-cell title="Open link in new window" to="" target="_blank" />
                        <z-cell title="Disabled" disabled />
                        <z-cell title="Selected" selected />
                        <z-cell title="With Badge" to="">
                            <Badge :count="10" slot="extra" />
                        </z-cell>
                        <z-cell title="With Switch">
                            <z-switch v-model="switchValue" slot="extra"></z-switch>
                        </z-cell>
                    </z-cell-group>
                </z-card>
            </div>
            <div class="example-desc">
                <header class="example-header"><span>基础用法</span></header>
                <p>包含各类用法的综合示例。</p>
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
                <h3 id="CellGroup_events">CellGroup events</h3>
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
                        <td>on-click</td>
                        <td>点击单元格时触发</td>
                        <td>name</td>
                    </tr>
                </tbody>
            </table>
            <div class="anchor">
                <h3 id="Cell_props">Cell props</h3>
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
                        <td>name</td>
                        <td>用来标识这一项</td>
                        <td>String | Number</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>title</td>
                        <td>左侧标题</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>label</td>
                        <td>标题下方的描述信息</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>extra</td>
                        <td>右侧额外内容</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>禁用该项</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>selected</td>
                        <td>标记该项为选中状态</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>to</td>
                        <td>跳转的链接，支持 vue-router 对象</td>
                        <td>String | Object</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>replace</td>
                        <td>路由跳转时，开启 replace 将不会向 history 添加新记录</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>target</td>
                        <td>相当于 a 链接的 target 属性</td>
                        <td>String</td>
                        <td>_self</td>
                    </tr>
                    <tr>
                        <td>append</td>
                        <td>同 vue-router append</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                </tbody>
            </table>
            <div class="anchor">
                <h3 id="Cell_slot">Cell slot</h3>
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
                        <td>默认</td>
                        <td>相当于 title</td>
                    </tr>
                    <tr>
                        <td>icon</td>
                        <td>标题前的 Icon</td>
                    </tr>
                    <tr>
                        <td>label</td>
                        <td>相当于 label</td>
                    </tr>
                    <tr>
                        <td>extra</td>
                        <td>相当于 extra</td>
                    </tr>
                    <tr>
                        <td>arrow</td>
                        <td>有链接时，可自定义右侧箭头</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </z-card>
  </div>
</template>

<script>
export default {
  name: 'cpCell',
  data: function () {
    return {
      switchValue: true,
      demo1: '<div style="padding: 10px;background: #f8f8f9">\r' +
              '     <z-card title="Options" icon="android-options" :padding="0" shadow style="width: 300px;">\r' +
              '        <z-cell-group>\r' +
              '            <z-cell title="Only show titles" />\r' +
              '            <z-cell title="Display label content" label="label content" />\r' +
              '             <z-cell title="Display right content" extra="details" />\r' +
              '            <z-cell title="Link" extra="details" to="" />\r' +
              '             <z-cell title="Open link in new window" to="" target="_blank" />\r' +
              '             <z-cell title="Disabled" disabled />\r' +
              '             <z-cell title="Selected" selected />\r' +
              '             <z-cell title="With Badge" to="">\r' +
              '                 <Badge :count="10" slot="extra" />\r' +
              '             </z-cell>\r' +
              '             <z-cell title="With Switch">\r' +
              '                 <z-switch v-model="switchValue" slot="extra"></z-switch>\r' +
              '             </z-cell>\r' +
              '         </z-cell-group>\r' +
              '     </z-card>\r' +
              ' </div>\r' +
              '<script>\r' +
              '    export default {\r' +
              '         data () {\r' +
              '             return {\r' +
              '                  switchValue: true\r' +
              '             }\r' +
              '         }\r' +
              '     }\r' +
              // eslint-disable-next-line no-useless-escape
              ' <\/script>\r'
    }
  }
}
</script>
<style scoped>
</style>
