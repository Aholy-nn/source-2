<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-07 16:03:29
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-checkbox v-model="single">Checkbox</z-checkbox>
          <div class="example-desc">
              <header class="example-header"><span>单独使用</span></header>
              <div>
                  <p>使用 v-model 可以双向绑定数据。</p>
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
          <z-checkbox-group v-model="social">
            <z-checkbox label="twitter">
                <z-icon type="social-twitter"></z-icon>
                <span>Twitter</span>
            </z-checkbox>
            <z-checkbox label="facebook">
                <z-icon type="social-facebook"></z-icon>
                <span>Facebook</span>
            </z-checkbox>
            <z-checkbox label="github">
                <z-icon type="social-github"></z-icon>
                <span>Github</span>
            </z-checkbox>
            <z-checkbox label="snapchat">
                <z-icon type="social-snapchat"></z-icon>
                <span>Snapchat</span>
            </z-checkbox>
        </z-checkbox-group>
        <z-checkbox-group v-model="fruit">
            <z-checkbox label="香蕉"></z-checkbox>
            <z-checkbox label="苹果"></z-checkbox>
            <z-checkbox label="西瓜"></z-checkbox>
        </z-checkbox-group>
        <div class="example-desc">
            <header class="example-header"><span>组合使用</span></header>
            <div>
                <p>使用
                    <code>CheckboxGroup</code>配合数组来生成组合。在组合使用时，
                    <code>Checkbox</code> 使用
                    <code>label</code> 来自动判断选中状态。每个 Checkbox 的内容可以自定义，如不填写则默认使用 label 的值。
                </p>
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
          <z-checkbox v-model="disabledSingle" disabled>Checkbox</z-checkbox>
          <z-checkbox-group v-model="disabledGroup">
              <z-checkbox label="香蕉" disabled></z-checkbox>
              <z-checkbox label="苹果" disabled></z-checkbox>
              <z-checkbox label="西瓜"></z-checkbox>
          </z-checkbox-group>
          <div class="example-desc">
              <header class="example-header"><span>不可用</span></header>
              <div>
                  <p>通过设置<code>disabled</code>属性来禁用多选框。</p>
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
           <z-checkbox v-model="checked" :disabled="disabled">
              <span v-if="checked">Checked</span>
              <span v-else>Unchecked</span>
              -
              <span v-if="!disabled">Usable</span>
              <span v-else>Disabled</span>
          </z-checkbox>
          <br>
          <z-button type="primary" @click="checked = !checked">
              <span v-if="!checked">Checked</span>
              <span v-else>Unchecked</span>
          </z-button>
          <z-button type="primary" @click="disabled = !disabled">
              <span v-if="disabled">Usable</span>
              <span v-else>Disabled</span>
          </z-button>
          <div class="example-desc">
              <header class="example-header"><span>与其它组件通信</span></header>
              <div>
                  <p>与其它组件进行数据联动。</p>
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
           <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
                <z-checkbox :indeterminate="indeterminate" :value="checkAll"
                    @click.prevent.native="handleCheckAll">全选</z-checkbox>
            </div>
            <z-checkbox-group v-model="checkAllGroup" @on-change="checkAllGroupChange">
                <z-checkbox label="香蕉"></z-checkbox>
                <z-checkbox label="苹果"></z-checkbox>
                <z-checkbox label="西瓜"></z-checkbox>
            </z-checkbox-group>
            <div class="example-desc">
                <header class="example-header"><span>全选</span></header>
                <div>
                    <p>在实现全选效果时，你可能会用到 indeterminate 属性。示例代码只是一种写法，业务中可以用更多的方法，比如计算属性。</p>
                </div>
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
            <h2 id="API">API</h2>
        </div>
        <div class="anchor">
            <h3 id="Checkbox_props">z-checkbox props</h3>
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
                    <td>value</td>
                    <td>只在单独使用时有效。可以使用 v-model 双向绑定数据</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>只在组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中</td>
                    <td>String | Number | Boolean</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>是否禁用当前项</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>indeterminate</td>
                    <td>设置 indeterminate 状态，只负责样式控制</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>多选框的尺寸，可选值为 <code>large</code>、<code>small</code>、<code>default</code> 或者不设置
                    </td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>true-value</td>
                    <td>选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td>
                    <td>String, Number, Boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>false-value</td>
                    <td>没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td>
                    <td>String, Number, Boolean</td>
                    <td>false</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="Checkbox_events">Checkbox events</h3>
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
                    <td>只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发</td>
                    <td>true | false</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="CheckboxGroup_props">CheckboxGroup props</h3>
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
                    <td>value</td>
                    <td>指定选中项目的集合，可以使用 v-model 双向绑定数据</td>
                    <td>Array</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>多选框组的尺寸，可选值为 <code>large</code>、<code>small</code>、<code>default</code>
                        或者不设置</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="CheckboxGroup_events">CheckboxGroup events</h3>
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
                    <td>在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发</td>
                    <td>[...]</td>
                </tr>
            </tbody>
        </table>
    </div>
   </z-card>
</div>
</template>

<script>
export default {
  name: 'cpCheckbox',
  data: function () {
    return {
      single: false,
      social: ['facebook', 'github'],
      fruit: ['苹果'],
      disabledSingle: true,
      disabledGroup: ['苹果'],
      checked: true,
      disabled: false,
      indeterminate: true,
      checkAll: false,
      checkAllGroup: ['香蕉', '西瓜'],
      demo1: '<z-checkbox v-model="single">Checkbox</z-checkbox>\r' +
              'export default {\r' +
              '    data:function () {\r' +
              '        return{\r' +
              '            single: false\r' +
              '        }\r' +
              '     }\r' +
              '}\r',
      demo2: '<z-checkbox-group v-model="social">\r' +
              '    <z-checkbox label="twitter">\r' +
              '        <z-icon type="social-twitter"></z-icon>\r' +
              '        <span>Twitter</span>\r' +
              '    </z-checkbox>\r' +
              '    <z-checkbox label="facebook">\r' +
              '        <z-icon type="social-facebook"></z-icon>\r' +
              '        <span>Facebook</span>\r' +
              '    </z-checkbox>\r' +
              '    <z-checkbox label="github">\r' +
              '        <z-icon type="social-github"></z-icon>\r' +
              '        <span>Github</span>\r' +
              '    </z-checkbox>\r' +
              '    <z-checkbox label="snapchat">\r' +
              '        <z-icon type="social-snapchat"></z-icon>\r' +
              '        <span>Snapchat</span>\r' +
              '    </z-checkbox>\r' +
              '</z-checkbox-group>\r' +
              '<z-checkbox-group v-model="fruit">\r' +
              '    <z-checkbox label="香蕉"></z-checkbox>\r' +
              '    <z-checkbox label="苹果"></z-checkbox>\r' +
              '    <z-checkbox label="西瓜"></z-checkbox>\r' +
              '</z-checkbox-group>\r' +
              'export default {\r' +
              '    data:function () {\r' +
              '        return{\r' +
              '            social: [\'facebook\', \'github\'],\r' +
              '            fruit: [\'苹果\']\r' +
              '        }\r' +
              '     }\r' +
              '}\r',
      demo3: '<z-checkbox v-model="disabledSingle" disabled>Checkbox</z-checkbox>\r' +
              '<z-checkbox-group v-model="disabledGroup">\r' +
              '    <z-checkbox label="香蕉" disabled></z-checkbox>\r' +
              '    <z-checkbox label="苹果" disabled></z-checkbox>\r' +
              '    <z-checkbox label="西瓜"></z-checkbox>\r' +
              '</z-checkbox-group>\r' +
              'export default {\r' +
              '    data:function () {\r' +
              '        return{\r' +
              '            disabledSingle: true,\r' +
              '            disabledGroup: [\'苹果\']\r' +
              '        }\r' +
              '     }\r' +
              '}\r',
      demo4: '<z-checkbox v-model="checked" :disabled="disabled">\r' +
              '    <span v-if="checked">Checked</span>\r' +
              '    <span v-else>Unchecked</span>\r' +
              '    -\r' +
              '    <span v-if="!disabled">Usable</span>\r' +
              '    <span v-else>Disabled</span>\r' +
              '</z-checkbox>\r' +
              '\r' +
              '<z-button type="primary" @click="checked = !checked">\r' +
              '     <span v-if="!checked">Checked</span>\r' +
              '    <span v-else>Unchecked</span>\r' +
              '</z-button>\r' +
              '<z-button type="primary" @click="disabled = !disabled">\r' +
              '    <span v-if="disabled">Usable</span>\r' +
              '    <span v-else>Disabled</span>\r' +
              '</z-button>\r' +
              '\r' +
              'export default {\r' +
              '    data:function () {\r' +
              '        return{\r' +
              '            checked: true,\r' +
              '            disabled: false\r' +
              '        }\r' +
              '     }\r' +
              '}\r',
      demo5: '<div>\r' +
              '    <z-checkbox \r' +
              '            :indeterminate="indeterminate" \r' +
              '            :value="checkAll" \r' +
              '            @click.prevent.native="handleCheckAll">\r' +
              '            全选\r' +
              '    </z-checkbox>\r' +
              '</div>\r' +
              '<z-checkbox-group v-model="checkAllGroup" @on-change="checkAllGroupChange">\r' +
              '    <z-checkbox label="香蕉"></z-checkbox>\r' +
              '    <z-checkbox label="苹果"></z-checkbox>\r' +
              '    <z-checkbox label="西瓜"></z-checkbox>\r' +
              ' </z-checkbox-group>\r' +
              '\r' +
              'export default {\r' +
              '    data:function () {\r' +
              '        return{\r' +
              '           single: false,\r' +
              '            social: [\'facebook\', \'github\'],\r' +
              '            fruit: [\'苹果\'],\r' +
              '            disabledSingle: true,\r' +
              '            disabledGroup: [\'苹果\'],\r' +
              '            checked: true,\r' +
              '            disabled: false,\r' +
              '            indeterminate: true,\r' +
              '            checkAll: false,\r' +
              '            checkAllGroup: [\'香蕉\', \'西瓜\']\r' +
              '        }\r' +
              '     }\r' +
              '\r' +
              '    methods: {\r' +
              '        handleCheckAll:function() {\r' +
              '            if (this.indeterminate) {\r' +
              '                this.checkAll = false;\r' +
              '            } else {\r' +
              '                this.checkAll = !this.checkAll;\r' +
              '            }\r' +
              '            this.indeterminate = false;\r' +
              '            if (this.checkAll) {\r' +
              '                this.checkAllGroup = [\'香蕉\', \'苹果\', \'西瓜\'];\r' +
              '            } else {\r' +
              '                this.checkAllGroup = [];\r' +
              '            }\r' +
              '        },\r' +
              '        checkAllGroupChange:function(data) {\r' +
              '            if (data.length === 3) {\r' +
              '                this.indeterminate = false;\r' +
              '                this.checkAll = true;\r' +
              '            } else if (data.length > 0) {\r' +
              '                this.indeterminate = true;\r' +
              '                this.checkAll = false;\r' +
              '            } else {\r' +
              '                this.indeterminate = false;\r' +
              '                this.checkAll = false;\r' +
              '            }\r' +
              '        }\r' +
              '    }\r' +
              '}\r'
    }
  },
  methods: {
    handleCheckAll: function () {
      if (this.indeterminate) {
        this.checkAll = false
      } else {
        this.checkAll = !this.checkAll
      }
      this.indeterminate = false

      if (this.checkAll) {
        this.checkAllGroup = ['香蕉', '苹果', '西瓜']
      } else {
        this.checkAllGroup = []
      }
    },
    checkAllGroupChange: function (data) {
      if (data.length === 3) {
        this.indeterminate = false
        this.checkAll = true
      } else if (data.length > 0) {
        this.indeterminate = true
        this.checkAll = false
      } else {
        this.indeterminate = false
        this.checkAll = false
      }
    }
  }
}
</script>
<style scoped>
</style>
