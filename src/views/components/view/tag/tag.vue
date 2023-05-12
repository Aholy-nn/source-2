<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-03-17 16:25:55
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-tag>标签一</z-tag>
          <z-tag>标签二</z-tag>
          <z-tag v-if="show" closable @on-close="handleClose">标签三</z-tag>
          <div class="example-desc">
              <header class="example-header"><span>基本用法</span></header>
              <div>
                  <p>简单的展示，添加属性<code>closable</code>可以关闭标签。</p>
                  <p>点击关闭标签时，会触发 on-close 事件，需自己实现关闭逻辑。</p>
              </div>
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
          <z-tag type="border">标签三</z-tag>
          <z-tag type="border" closable>标签四</z-tag>
          <z-tag type="dot">标签一</z-tag>
          <z-tag type="dot" closable>标签二</z-tag>
          <div class="example-desc">
              <header class="example-header"><span>样式类型</span></header>
              <div>
                  <p>通过设置 type 属性为 border 或 dot 来选择不同的样式类型。建议有关闭的某些场景下使用 border，图例的场景下使用 dot。</p>
              </div>
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
           <z-tag color="default">default</z-tag>
            <z-tag color="primary">primary</z-tag>
            <z-tag color="success">success</z-tag>
            <z-tag color="error">error</z-tag>
            <z-tag color="warning">warning</z-tag>
            <z-tag color="magenta">magenta</z-tag>
            <z-tag color="red">red</z-tag>
            <z-tag color="volcano">volcano</z-tag>
            <z-tag color="orange">orange</z-tag>
            <z-tag color="gold">gold</z-tag>
            <z-tag color="yellow">yellow</z-tag>
            <z-tag color="lime">lime</z-tag>
            <z-tag color="green">green</z-tag>
            <z-tag color="cyan">cyan</z-tag>
            <z-tag color="blue">blue</z-tag>
            <z-tag color="geekblue">geekblue</z-tag>
            <z-tag color="purple">purple</z-tag>
            <z-tag color="#FFA2D3">Custom Color</z-tag>
            <br><br>
            <z-tag type="border" closable color="primary">标签一</z-tag>
            <z-tag type="border" closable color="success">标签二</z-tag>
            <z-tag type="border" closable color="error">标签三</z-tag>
            <z-tag type="border" closable color="warning">标签四</z-tag>
            <br><br>
            <z-tag type="dot" closable color="primary">标签一</z-tag>
            <z-tag type="dot" closable color="success">标签二</z-tag>
            <z-tag type="dot" closable color="error">标签三</z-tag>
            <z-tag type="dot" closable color="warning">标签四</z-tag>
            <div class="example-desc">
                <header class="example-header"><span>各种颜色</span></header>
                <div>
                    <p>四种预设颜色，可自定义颜色</p>
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
          <z-tag checkable color="primary">标签一</z-tag>
          <z-tag checkable color="success">标签二</z-tag>
          <z-tag checkable color="error">标签三</z-tag>
          <z-tag checkable color="warning">标签四</z-tag>
          <div class="example-desc">
              <header class="example-header"><span>可选择</span></header>
              <div>
                  <p>设置属性 checkable，可以对标签进行选择，属性 checked 控制当前选择状态。</p>
              </div>
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
          <z-tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">标签{{
              item + 1 }}</z-tag>
          <z-button icon="android-add" type="dashed" size="small" @click="handleAdd">添加标签</z-button>
          <div class="example-desc">
              <header class="example-header"><span>动态添加和删除</span></header>
              <div>
                  <p>用数组生成一组标签，可以动态添加和删除。</p>
              </div>
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
          <z-tag>默认标签</z-tag>
          <z-tag size="medium">中号标签</z-tag>
          <z-tag size="large">大号标签</z-tag>
          <div class="example-desc">
              <header class="example-header"><span>尺寸</span></header>
              <div>
                  <p>设置属性 size 可以显示不同尺寸的标签。</p>
              </div>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo6"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <div class="demo-api">
        <div class="anchor">
            <h2 id="API">API</h2>
        </div>
        <div class="anchor">
            <h3 id="Tag_props">Tag props</h3>
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
                    <td>closable</td>
                    <td>标签是否可以关闭</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>checkable</td>
                    <td>标签是否可以选择</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>checked</td>
                    <td>标签的选中状态</td>
                    <td>Boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>标签的样式类型，可选值为 <code>border</code>、<code>dot</code>或不填</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>color</td>
                    <td>标签颜色，预设颜色值为<code>default</code>、<code>primary</code>、<code>success</code>、<code>warning</code>、<code>error</code>、<code>blue</code>、<code>green</code>、<code>red</code>、<code>yellow</code>、<code>pink</code>、<code>magenta</code>、<code>volcano</code>、<code>orange</code>、<code>gold</code>、<code>lime</code>、<code>cyan</code>、<code>geekblue</code>、<code>purple</code>，你也可以自定义颜色值。
                    </td>
                    <td>String</td>
                    <td>default</td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>当前标签的名称，使用 v-for，并支持关闭时，会比较有用</td>
                    <td>String | Number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>fade</td>
                    <td>是否在出现和消失时使用渐变的动画，动画时长可能会引起占位的闪烁</td>
                    <td>Boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>尺寸，可选值为 large、medium、default</td>
                    <td>String</td>
                    <td>default</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="Tag_events">Tag events</h3>
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
                    <td>on-close</td>
                    <td>关闭时触发</td>
                    <td>event, name</td>
                </tr>
                <tr>
                    <td>on-change</td>
                    <td>切换选中状态时触发</td>
                    <td>checked, name</td>
                </tr>
            </tbody>
        </table>
    </div>
   </z-card>
</div>
</template>

<script>
export default {
  name: 'cpTag',
  data: function () {
    return {
      show: true,
      count: [0, 1, 2],
      demo1: '<z-tag>标签一</z-tag>\r' +
                        '<z-tag>标签二</z-tag>\r' +
                        '<z-tag v-if="show" closable @on-close="handleClose">标签三</z-tag>\r' +
                        '<script>\r' +
                        '    export default {\r' +
                        '        data () {\r' +
                        '            return {\r' +
                        '                show: true\r' +
                        '            }\r' +
                        '        },\r' +
                        '       methods: {\r' +
                        '            handleClose () {\r' +
                        '                this.show = false;\r' +
                        '            }\r' +
                        '        }\r' +
                        '    }\r' +
                        // eslint-disable-next-line no-useless-escape
                        '<\/script>\r',
      demo2: '<z-tag type="border">标签三</z-tag>\r' +
                        '<z-tag type="border" closable>标签四</z-tag>\r' +
                        '<z-tag type="dot">标签一</z-tag>\r' +
                        '<z-tag type="dot" closable>标签二</z-tag>\r',
      demo3: '<z-tag color="default">default</z-tag>\r' +
                        '<z-tag color="primary">primary</z-tag>\r' +
                        '<z-tag color="success">success</z-tag>\r' +
                        '<z-tag color="error">error</z-tag>\r' +
                        '<z-tag color="warning">warning</z-tag>\r' +
                        '<z-tag color="magenta">magenta</z-tag>\r' +
                        '<z-tag color="red">red</z-tag>\r' +
                        '<z-tag color="volcano">volcano</z-tag>\r' +
                        '<z-tag color="orange">orange</z-tag>\r' +
                        '<z-tag color="gold">gold</z-tag>\r' +
                        '<z-tag color="yellow">yellow</z-tag>\r' +
                        '<z-tag color="lime">lime</z-tag>\r' +
                        '<z-tag color="green">green</z-tag>\r' +
                        '<z-tag color="cyan">cyan</z-tag>\r' +
                        '<z-tag color="blue">blue</z-tag>\r' +
                        '<z-tag color="geekblue">geekblue</z-tag>\r' +
                        '<z-tag color="purple">purple</z-tag>\r' +
                        '<z-tag color="#FFA2D3">Custom Color</z-tag>\r' +
                        '<br><br>\r' +
                        '<z-tag type="border" closable color="primary">标签一</z-tag>\r' +
                        '<z-tag type="border" closable color="success">标签二</z-tag>\r' +
                        '<z-tag type="border" closable color="error">标签三</z-tag>\r' +
                        '<z-tag type="border" closable color="warning">标签四</z-tag>\r' +
                        '<br><br>\r' +
                        '<z-tag type="dot" closable color="primary">标签一</z-tag>\r' +
                        '<z-tag type="dot" closable color="success">标签二</z-tag>\r' +
                        '<z-tag type="dot" closable color="error">标签三</z-tag>\r' +
                        '<z-tag type="dot" closable color="warning">标签四</z-tag>\r',
      demo4: '<z-tag checkable color="primary">标签一</z-tag>\r' +
                        '<z-tag checkable color="success">标签二</z-tag>\r' +
                        '<z-tag checkable color="error">标签三</z-tag>\r' +
                        '<z-tag checkable color="warning">标签四</z-tag>\r',
      demo5: '<z-tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">标签{{ item + 1 }}</z-tag>\r' +
                        '<z-button icon="android-add" type="dashed" size="small" @click="handleAdd">添加标签</z-button>\r' +
                        '<script>\r' +
                        '    export default {\r' +
                        '        data () {\r' +
                        '            return {\r' +
                        '                count: [0, 1, 2]\r' +
                        '            }\r' +
                        '        },\r' +
                        '        methods: {\r' +
                        '            handleAdd () {\r' +
                        '                if (this.count.length) {\r' +
                        '                    this.count.push(this.count[this.count.length - 1] + 1);\r' +
                        '                } else {\r' +
                        '                    this.count.push(0);\r' +
                        '                }\r' +
                        '            },\r' +
                        '            handleClose2 (event, name) {\r' +
                        '                const index = this.count.indexOf(name);\r' +
                        '                this.count.splice(index, 1);\r' +
                        '            }\r' +
                        '        }\r' +
                        '    }\r' +
                        // eslint-disable-next-line no-useless-escape
                        '<\/script>\r',
      demo6: '<z-tag>默认标签</z-tag>\r' +
                        '<z-tag size="medium">中号标签</z-tag>\r' +
                        '<z-tag size="large">大号标签</z-tag>\r'
    }
  },
  methods: {
    handleClose () {
      this.show = false
    },
    handleAdd () {
      if (this.count.length) {
        this.count.push(this.count[this.count.length - 1] + 1)
      } else {
        this.count.push(0)
      }
    },
    handleClose2 (event, name) {
      const index = this.count.indexOf(name)
      this.count.splice(index, 1)
    }
  }
}
</script>
<style scoped>
</style>
