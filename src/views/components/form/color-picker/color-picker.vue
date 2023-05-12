/* eslint-disable space-before-blocks */
<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-07 16:40:18
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
      <z-row :gutter="15">
        <z-col span="12">
          <z-color-picker v-model="color3" alpha :colors="colors" size="large" @on-change="change" />
          <div class="example-desc">
              <p>* 基本用法，可以使用 v-model 实现数据的双向绑定。</p>
              <p>* 开启属性 alpha，可以选择带 Alpha 通道的颜色。</p>
              <p>* 开启属性 recommend 可以显示推荐的颜色预设，或设置属性 colors 来自定义预设颜色。</p>
              <p>* 选择器有三种尺寸：大、默认（中）、小。</p>
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
            <h3 id="ColorPicker_props">ColorPicker props</h3>
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
                    <td>绑定的值，可使用 v-model 双向绑定</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>是否禁用</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>alpha</td>
                    <td>是否支持透明度选择</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>hue</td>
                    <td>是否支持色彩选择</td>
                    <td>Boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>recommend</td>
                    <td>是否显示推荐的颜色预设</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>colors</td>
                    <td>自定义颜色预设</td>
                    <td>Array</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>format</td>
                    <td>颜色的格式，可选值为 hsl、hsv、hex、rgb</td>
                    <td>String</td>
                    <td>开启 alpha 时为 rgb，其它为 hex</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="ColorPicker_events">ColorPicker events</h3>
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
                    <td>当绑定值变化时触发</td>
                    <td>当前值</td>
                </tr>
                <tr>
                    <td>on-active-change</td>
                    <td>面板中当前显示的颜色发生改变时触发</td>
                    <td>当前显示的颜色值</td>
                </tr>
                <tr>
                    <td>on-open-change</td>
                    <td>下拉框展开或收起时触发</td>
                    <td>true / false</td>
                </tr>
            </tbody>
        </table>
    </div>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpColorPicker',
  data: function () {
    return {
      color3: 'rgba(25, 190,107, .5)',
      colors: ['#311B92', '#512DA8', '#673AB7', '#9575CD', '#D1C4E9'],
      demo1: '<div class ="js-ileadcolorpk-demo">\r' +
              '        <z-color-picker v-model="color3" alpha  :colors="colors" size="large" @on-change="change"/>\r' +
              '</div>\r' +
              '\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '            color3: \'rgba(25, 190,107, .5)\',\r' +
              '            colors: [\'#311B92\', \'#512DA8\', \'#673AB7\', \'#9575CD\', \'#D1C4E9\']\r' +
              '        }\r' +
              '    },\r' +
              '    methods: {\r' +
              '        change:function () {\r' +
              '        }\r' +
              '    }\r' +
              '}'
    }
  },
  methods: {
    change: function () {

    }
  }
}
</script>
<style scoped>
</style>
