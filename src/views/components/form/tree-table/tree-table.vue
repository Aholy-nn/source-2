<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-07 19:33:54
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
    <z-card bordered dis-hover class="m-t-15">
        <z-tree-table expand-key="sex" :expand-type="false" :selectable="false" :columns="columns"
            :data="data">
            <template slot="likes" slot-scope="scope">
                <z-button @click="handle(scope)">123</z-button>
            </template>
        </z-tree-table>
        <div class="m-t-15">
           <z-code-editor :content="demo1"></z-code-editor>
        </div>
   </z-card>
   <z-card bordered dis-hover class="m-t-15">
      <div class="demo-api">
        <div class="anchor">
            <h3>API</h3>
        </div>
        <div class="anchor">
            <h3>Table Attributes</h3>
        </div>
        <table>
            <thead>
                <tr>
                    <th>属性</th>
                    <th>说明</th>
                    <th>类型</th>
                    <th>参数</th>
                    <th>默认值</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>data</td>
                    <td>表格各行的数据</td>
                    <td>Array</td>
                    <td>-</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>empty-text</td>
                    <td>表格数据为空时显示的文字</td>
                    <td>String</td>
                    <td>-</td>
                    <td>'暂无数据'</td>
                </tr>
                <tr>
                    <td>columns</td>
                    <td>表格各列的配置（具体见下文：Columns Configs）</td>
                    <td>Array</td>
                    <td>-</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>expand-key</td>
                    <td>需要显示展开按钮的列的key（columns列对象里的prop）</td>
                    <td>String</td>
                    <td>-</td>
                    <td>默认是第一列的prop</td>
                </tr>
                <tr>
                    <td>show-header</td>
                    <td>是否显示表头</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>show-index</td>
                    <td>是否显示数据索引</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>index-text</td>
                    <td>数据索引名称</td>
                    <td>String</td>
                    <td>-</td>
                    <td>'序号'</td>
                </tr>
                <tr>
                    <td>show-summary</td>
                    <td>是否显示表尾合计行</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>sum-text</td>
                    <td>表尾合计行首列名称</td>
                    <td>String</td>
                    <td>-</td>
                    <td>'合计'</td>
                </tr>
                <tr>
                    <td>summary-method</td>
                    <td>表尾合计行计算方法</td>
                    <td>Function</td>
                    <td>data, column, columnIndex</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>max-height</td>
                    <td>最大高度</td>
                    <td>[String, Number]</td>
                    <td>-</td>
                    <td>'auto'</td>
                </tr>
                <tr>
                    <td>stripe</td>
                    <td>是否显示间隔斑马纹</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>border</td>
                    <td>是否显示纵向边框</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>show-row-hover</td>
                    <td>鼠标悬停时，是否高亮当前行</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>tree-type</td>
                    <td>是否为树形表格</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>children-prop</td>
                    <td>树形表格中遍历的属性名称</td>
                    <td>String</td>
                    <td>-</td>
                    <td>'children'</td>
                </tr>
                <tr>
                    <td>is-fold</td>
                    <td>树形表格中父级是否默认折叠</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>expand-type</td>
                    <td>是否为展开行类型表格（为 True 时，需要添加名称为 '$expand' 的<a
                            href="https://cn.vuejs.org/v2/guide/components.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD"
                            rel="nofollow">作用域插槽</a>, 它可以获取到 row, rowIndex)</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>selectable</td>
                    <td>是否为多选类型表格</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>select-type</td>
                    <td>选择列渲染的形式, radio或checkbox</td>
                    <td>String</td>
                    <td>-</td>
                    <td>checkbox</td>
                </tr>
                <tr>
                    <td>row-key</td>
                    <td>行数据的 Key，用来优化 Table 的渲染</td>
                    <td>Function</td>
                    <td>row, rowIndex</td>
                    <td>rowIndex</td>
                </tr>
                <tr>
                    <td>row-class-name</td>
                    <td>额外的表格行的类名</td>
                    <td>String, Function</td>
                    <td>row, rowIndex</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>cell-class-name</td>
                    <td>额外的表格行的类名</td>
                    <td>String, Function</td>
                    <td>row, rowIndex, column, columnIndex</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>row-style</td>
                    <td>额外的表格行的样式</td>
                    <td>Object, Function</td>
                    <td>row, rowIndex</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>cell-style</td>
                    <td>额外的表格单元格的样式</td>
                    <td>Object, Function</td>
                    <td>row, rowIndex, column, columnIndex</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3>Columns Configs</h3>
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
                    <td>title</td>
                    <td>列标题名称</td>
                    <td>String</td>
                    <td>''</td>
                </tr>
                <tr>
                    <td>key</td>
                    <td>对应列内容的属性名</td>
                    <td>String</td>
                    <td>''</td>
                </tr>
                <tr>
                    <td>align</td>
                    <td>对应列内容的对齐方式，可选值有 'center', 'right'</td>
                    <td>String</td>
                    <td>'left'</td>
                </tr>
                <tr>
                    <td>headerAlign</td>
                    <td>对应列标题的对齐方式，可选值有 'center', 'right'</td>
                    <td>String</td>
                    <td>'left'</td>
                </tr>
                <tr>
                    <td>width</td>
                    <td>列宽度</td>
                    <td>[String, Number]</td>
                    <td>'auto'</td>
                </tr>
                <tr>
                    <td>minWidth</td>
                    <td>列最小宽度</td>
                    <td>[String, Number]</td>
                    <td>'80px'</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>列类型，可选值有 'template'(自定义列模板)</td>
                    <td>String</td>
                    <td>''</td>
                </tr>
                <tr>
                    <td>template</td>
                    <td>列类型为 'template'(自定义列模板) 时，对应的<a
                            href="https://cn.vuejs.org/v2/guide/components.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD"
                            rel="nofollow">作用域插槽</a>（它可以获取到 row, rowIndex, column, columnIndex）名称</td>
                    <td>String</td>
                    <td>''</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3>Table Events</h3>
        </div>
        <table>
            <thead>
                <tr>
                    <th>事件名</th>
                    <th>说明</th>
                    <th>参数</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>cell-click</td>
                    <td>单击某一单元格</td>
                    <td>row, rowIndex, column, columnIndex, $event</td>
                </tr>
                <tr>
                    <td>cell-dblclick</td>
                    <td>双击某一单元格</td>
                    <td>row, rowIndex, column, columnIndex, $event</td>
                </tr>
                <tr>
                    <td>cell-contextmenu</td>
                    <td>在某一单元格上点击鼠标右键</td>
                    <td>row, rowIndex, column, columnIndex, $event</td>
                </tr>
                <tr>
                    <td>cell-mouseenter</td>
                    <td>鼠标滑入某一单元格</td>
                    <td>row, rowIndex, column, columnIndex, $event</td>
                </tr>
                <tr>
                    <td>cell-mouseleave</td>
                    <td>鼠标滑出某一单元格</td>
                    <td>row, rowIndex, column, columnIndex, $event</td>
                </tr>
                <tr>
                    <td>row-click</td>
                    <td>单击某一行</td>
                    <td>row, rowIndex, $event</td>
                </tr>
                <tr>
                    <td>row-dblclick</td>
                    <td>双击某一行</td>
                    <td>row, rowIndex, $event</td>
                </tr>
                <tr>
                    <td>row-contextmenu</td>
                    <td>在某一行上点击鼠标右键</td>
                    <td>row, rowIndex, $event</td>
                </tr>
                <tr>
                    <td>row-mouseenter</td>
                    <td>鼠标滑入某一行</td>
                    <td>row, rowIndex, $event</td>
                </tr>
                <tr>
                    <td>row-mouseleave</td>
                    <td>鼠标滑出某一行</td>
                    <td>row, rowIndex, $event</td>
                </tr>
                <tr>
                    <td>checkbox-click</td>
                    <td>鼠标单击checkbox</td>
                    <td>row, rowIndex, $event</td>
                </tr>
                <tr>
                    <td>tree-icon-click</td>
                    <td>鼠标单击树形icon</td>
                    <td>row, rowIndex, $event</td>
                </tr>
                <tr>
                    <td>expand-cell-click</td>
                    <td>鼠标单击展开单元格</td>
                    <td>row, rowIndex, $event</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3>Table Methods</h3>
        </div>
        <table>
            <thead>
                <tr>
                    <th>方法名</th>
                    <th>说明</th>
                    <th>参数</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>getCheckedProp</td>
                    <td>当表格为多选类型表格时，用于获取当前所选项的属性，返回一个数组；属性默认为'index'。</td>
                    <td>prop</td>
                </tr>
            </tbody>
        </table>
        <a href="https://github.com/lison16/tree-table-vue">点击查看更多细节</a>
    </div>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpTreeTable',
  data: function () {
    return {
      columns: [
        {
          title: 'name',
          key: 'name',
          width: '400px'
        },
        {
          title: 'sex',
          key: 'sex',
          minWidth: '50px'
        },
        {
          title: 'score',
          key: 'score'
        },
        {
          title: 'likes',
          key: 'likes',
          minWidth: '200px',
          type: 'template',
          template: 'likes'
        }
      ],
      data: [
        {
          name: 'Jack',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 10,
          children: [
            {
              name: 'Ashley',
              sex: 'female',
              likes: ['football', 'basketball'],
              score: 20,
              children: [
                {
                  name: 'Ashley',
                  sex: 'female',
                  likes: ['football', 'basketball'],
                  score: 20
                },
                {
                  name: 'Taki',
                  sex: 'male',
                  likes: ['football', 'basketball'],
                  score: 10,
                  children: [
                    {
                      name: 'Ashley',
                      sex: 'female',
                      likes: ['football', 'basketball'],
                      score: 20
                    },
                    {
                      name: 'Taki',
                      sex: 'male',
                      likes: ['football', 'basketball'],
                      score: 10,
                      children: [
                        {
                          name: 'Ashley',
                          sex: 'female',
                          likes: ['football', 'basketball'],
                          score: 20
                        },
                        {
                          name: 'Taki',
                          sex: 'male',
                          likes: ['football', 'basketball'],
                          score: 10
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: 'Taki',
              sex: 'male',
              likes: ['football', 'basketball'],
              score: 10
            }
          ]
        },
        {
          name: 'Tom',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 20,
          children: [
            {
              name: 'Ashley',
              sex: 'female',
              likes: ['football', 'basketball'],
              score: 20,
              children: [
                {
                  name: 'Ashley',
                  sex: 'female',
                  likes: ['football', 'basketball'],
                  score: 20
                },
                {
                  name: 'Taki',
                  sex: 'male',
                  likes: ['football', 'basketball'],
                  score: 10
                }
              ]
            },
            {
              name: 'Taki',
              sex: 'male',
              likes: ['football', 'basketball'],
              score: 10,
              children: [
                {
                  name: 'Ashley',
                  sex: 'female',
                  likes: ['football', 'basketball'],
                  score: 20
                },
                {
                  name: 'Taki',
                  sex: 'male',
                  likes: ['football', 'basketball'],
                  score: 10
                }
              ]
            }
          ]
        },
        {
          name: 'Tom',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 20
        },
        {
          name: 'Tom',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 20,
          children: [
            {
              name: 'Ashley',
              sex: 'female',
              likes: ['football', 'basketball'],
              score: 20
            },
            {
              name: 'Taki',
              sex: 'male',
              likes: ['football', 'basketball'],
              score: 10
            }
          ]
        }
      ],
      demo1: '<z-tree-table expand-key="sex" :expand-type="false" :selectable="false" :columns="columns" :data="data">\r' +
              '    <template slot="likes" slot-scope="scope">\r' +
              '        <z-button @click="handle(scope)">123</z-button>\r' +
              '    </template>\r' +
              '</z-tree-table>\r' +
              ' <script>\r' +
              '    export default {\r' +
              '        data:function() {\r' +
              '            return {\r' +
              '              columns: [\r' +
              '                {\r' +
              '                  title: "name",\r' +
              '                  key: "name",\r' +
              '                  width: "400px"\r' +
              '                },\r' +
              '                {\r' +
              '                  title: "sex",\r' +
              '                  key: "sex",\r' +
              '                  minWidth: "50px"\r' +
              '                },\r' +
              '                {\r' +
              '                  title: "score",\r' +
              '                  key: "score"\r' +
              '                },\r' +
              '               {\r' +
              '                  title: "likes",\r' +
              '                  key: "likes",\r' +
              '                  minWidth: "200px",\r' +
              '                  type: "template",\r' +
              '                  template: "likes"\r' +
              '                }\r' +
              '              ],\r' +
              '              data: [\r' +
              '                {\r' +
              '                  name: "Jack",\r' +
              '                  sex: "male",\r' +
              '                  likes: ["football", "basketball"],\r' +
              '                  score: 10,\r' +
              '                  children: [\r' +
              '                    {\r' +
              '                      name: "Ashley",\r' +
              '                      sex: "female",\r' +
              '                      likes: ["football", "basketball"],\r' +
              '                      score: 20,\r' +
              '                      children: [\r' +
              '                        {\r' +
              '                          name: "Ashley",\r' +
              '                          sex: "female",\r' +
              '                          likes: ["football", "basketball"],\r' +
              '                         score: 20\r' +
              '                        },\r' +
              '                       {\r' +
              '                          name: "Taki",\r' +
              '                          sex: "male",\r' +
              '                          likes: ["football", "basketball"],\r' +
              '                          score: 10,\r' +
              '                         children: [\r' +
              '                            {\r' +
              '                              name: "Ashley",\r' +
              '                              sex: "female",\r' +
              '                              likes: ["football", "basketball"],\r' +
              '                              score: 20\r' +
              '                            },\r' +
              '                           {\r' +
              '                              name: "Taki",\r' +
              '                              sex: "male",\r' +
              '                             likes: ["football", "basketball"],\r' +
              '                              score: 10,\r' +
              '                             children: [\r' +
              '                                {\r' +
              '                                  name: "Ashley",\r' +
              '                                  sex: "female",\r' +
              '                                  likes: ["football", "basketball"],\r' +
              '                                  score: 20\r' +
              '                                },\r' +
              '                                {\r' +
              '                                  name: "Taki",\r' +
              '                                  sex: "male",\r' +
              '                                  likes: ["football", "basketball"],\r' +
              '                                 score: 10\r' +
              '                                }\r' +
              '                              ]\r' +
              '                            }\r' +
              '                          ]\r' +
              '                        }\r' +
              '                      ]\r' +
              '                    },\r' +
              '                    {\r' +
              '                      name: "Taki",\r' +
              '                      sex: "male",\r' +
              '                      likes: ["football", "basketball"],\r' +
              '                      score: 10\r' +
              '                     }\r' +
              '                  ]\r' +
              '                }\r' +
              '              ]\r' +
              '            }\r' +
              '        },\r' +
              '       methods: {\r' +
              '           handleClearCurrentRow() {\r' +
              '            this.$refs.currentRowTable.clearCurrentRow();\r' +
              '          },\r' +
              '          handle(scope) {\r' +
              '            console.log(scope);\r' +
              '          }\r' +
              '        }\r' +
              '    }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r'
    }
  },
  methods: {
    handleClearCurrentRow () {
      this.$refs.currentRowTable.clearCurrentRow()
    },
    handle (scope) {
      console.log(scope)
    }
  }
}
</script>
<style scoped>
</style>
