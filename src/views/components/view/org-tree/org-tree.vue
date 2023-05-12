<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-08 11:20:24
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
        <h4>基于Vue的组织架构树组件</h4>
        <z-row class="m-t-15">
            <z-col span="8">
              <z-checkbox v-model="horizontal">Horizontal</z-checkbox>
            </z-col>
           <z-col span="8">
              <z-checkbox v-model="collapsable">Collapsable</z-checkbox>
            </z-col>
            <z-col span="8">
              <z-checkbox @on-change="expandChange">Expand All</z-checkbox>
            </z-col>
             <z-col span="6" class="m-t-15">
                <label>labelClassName:</label>
                <z-select class="m-t-5" v-model="labelClassName">
                    <z-option value="bg-white">bg-white</z-option>
                    <z-option value="bg-orange">bg-orange</z-option>
                    <z-option value="bg-gold">bg-gold</z-option>
                    <z-option value="bg-gray">bg-gray</z-option>
                    <z-option value="bg-lightpink">bg-lightpink</z-option>
                    <z-option value="bg-chocolate">bg-chocolate</z-option>
                    <z-option value="bg-tomato">bg-tomato</z-option>
                </z-select>
            </z-col>
        </z-row>
        <div class="text-center m-t-15" style="position:relative;height: 400px;border: 1px solid #ddd;">
            <z-org-tree :data="data" :horizontal="horizontal" :collapsable="collapsable"
                :label-class-name="labelClassName" :right-menu="rightMenu" @on-expand="onExpand"
                @on-node-click="onNodeClick" :expand-all="expandAll" @on-menu-click="onMenuClick">
            </z-org-tree>
        </div>
        <div class="m-t-15">
            <z-code-editor :content="demo1"></z-code-editor>
        </div>
   </z-card>
  <z-card bordered dis-hover class="m-t-15">
      <div class="demo-api">
        <div class="anchor">
            <h3>API</h3>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>prop</th>
                    <th>descripton</th>
                    <th align="center">type</th>
                    <th align="center">default</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>data</td>
                    <td>传入的树状数据</td>
                    <td align="center"><code>Object</code></td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <td>horizontal</td>
                    <td>是否垂直</td>
                    <td align="center"><code>Boolean</code></td>
                    <td align="center">false</td>
                </tr>
                <tr>
                    <td>props</td>
                    <td>用来指明数据中几个重要字段的命名</td>
                    <td align="center"><code>Object</code></td>
                    <td align="center">
                        <code>{label: 'label', children: 'children', expand: 'expand'}</code></td>
                </tr>
                <tr>
                    <td>labelWidth</td>
                    <td>节点的宽度，不设则随文字宽度自适应</td>
                    <td align="center"><code>String</code> | <code>Number</code></td>
                    <td align="center"><code>auto</code></td>
                </tr>
                <tr>
                    <td>collapsable</td>
                    <td>是否可收缩</td>
                    <td align="center"><code>Boolean</code></td>
                    <td align="center"><code>true</code></td>
                </tr>
                <tr>
                    <td>label-class-name</td>
                    <td>节点自定义类名，可以是函数，参数是当前节点数据对象</td>
                    <td align="center"><code>Function</code> | <code>String</code></td>
                    <td align="center">-</td>
                </tr>
                <tr>
                    <td>expandAll</td>
                    <td>是否展开所有节点</td>
                    <td align="center">Boolean</td>
                    <td align="center">false</td>
                </tr>
                <tr>
                    <td>selectedKey</td>
                    <td>The key of the selected node</td>
                    <td align="center"><code>String</code></td>
                    <td align="center">-</td>
                </tr>
                <tr>
                    <td>selectedClassName</td>
                    <td>The className of the selected node</td>
                    <td align="center"><code>Function</code> | <code>String</code></td>
                    <td align="center">-</td>
                </tr>
                <tr>
                    <td>rightMenu</td>
                    <td>右侧菜单是否显示</td>
                    <td align="center">Boolean</td>
                    <td align="center">true</td>
                </tr>
                <tr>
                    <td>drag</td>
                    <td>是否可拖拽</td>
                    <td align="center">Boolean</td>
                    <td align="center">true</td>
                </tr>
                <tr>
                    <td>zoomController</td>
                    <td>是否需要放大缩小按钮</td>
                    <td align="center">Boolean</td>
                    <td align="center">true</td>
                </tr>
                <tr>
                    <td>zoomMin</td>
                    <td>缩小的最小值</td>
                    <td align="center">Number</td>
                    <td align="center">20</td>
                </tr>
                <tr>
                    <td>zoomMax</td>
                    <td>放大的最大值</td>
                    <td align="center">Number</td>
                    <td align="center">200</td>
                </tr>

            </tbody>
        </table>
        <div class="anchor">
            <h3>Events</h3>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>prop</th>
                    <th>descripton</th>
                    <th align="center">arguments</th>
                </tr>
            </thead>
            <tr>
                <td>on-expand</td>
                <td>当任一节点收缩状态改变时触发</td>
                <td align="center">data(当前节点数据), status(当前节点是否展开)</td>
            </tr>
            <tr>
                <td>on-node-click</td>
                <td>点击节点时触发</td>
                <td align="center">event(鼠标事件对象), data(当前节点数据), expand(是一个方法，如果点击该节点需要收缩，需要调用次方法)
                </td>
            </tr>
            <tr>
                <td>on-menu-click</td>
                <td>右侧菜单点击事件</td>
                <td align="center">参数data</td>
            </tr>
        </table>
        <a href="https://github.com/hukaibaihu/vue-org-tree">点击查看更多细节</a>
    </div>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpOrgTree',
  data: function () {
    return {
      data: {
        id: 0,
        label: 'XXX科技有限公司',
        children: [
          {
            id: 2,
            label: '产品研发部',
            children: [
              {
                id: 5,
                label: '研发-前端'
              },
              {
                id: 6,
                label: '研发-后端'
              },
              {
                id: 9,
                label: 'UI设计'
              },
              {
                id: 10,
                label: '产品经理'
              }
            ]
          },
          {
            id: 3,
            label: '销售部',
            children: [
              {
                id: 7,
                label: '销售一部'
              },
              {
                id: 8,
                label: '销售二部'
              }
            ]
          },
          {
            id: 4,
            label: '财务部'
          },
          {
            id: 9,
            label: 'HR人事'
          }
        ]
      },
      horizontal: false,
      collapsable: true,
      expandAll: false,
      labelClassName: 'bg-white',
      rightMenu: [
        {
          key: 'edit',
          label: '编辑部门'
        },
        {
          key: 'detail',
          label: '查看部门'
        },
        {
          key: 'new',
          label: '新增子部门'
        },
        {
          key: 'delete',
          label: '删除部门'
        }
      ],
      demo1:
                    '<div class="col-xs-4 form-group">\r' +
                    '    <div class="checkbox">\r' +
                    '       <label>\r' +
                    '            <input type="checkbox" v-model="horizontal" /> Horizontal\r' +
                    '        </label>\r' +
                    '    </div>\r' +
                    '</div>\r' +
                    '<div class="col-xs-4 form-group">\r' +
                    '    <div class="checkbox">\r' +
                    '        <label>\r' +
                    '            <input type="checkbox" v-model="collapsable" /> Collapsable\r' +
                    '        </label>\r' +
                    '    </div>\r' +
                    '</div>\r' +
                    '<div class="col-xs-4 form-group">\r' +
                    '    <div class="checkbox">\r' +
                    '        <label>\r' +
                    '           <input type="checkbox" @change="expandChange" /> Expand All\r' +
                    '       </label>\r' +
                    '    </div>\r' +
                    '</div>\r' +
                    '<div class="col-xs-6 form-group">\r' +
                    '    <label class="control-label col-xs-5">labelClassName:</label>\r' +
                    '    <div class="col-xs-7">\r' +
                    '        <select class="form-control" v-model="labelClassName">\r' +
                    '            <option value="bg-white">bg-white</option>\r' +
                    '           <option value="bg-orange">bg-orange</option>\r' +
                    '            <option value="bg-gold">bg-gold</option>\r' +
                    '            <option value="bg-gray">bg-gray</option>\r' +
                    '           <option value="bg-lightpink">bg-lightpink</option>\r' +
                    '            <option value="bg-chocolate">bg-chocolate</option>\r' +
                    '            <option value="bg-tomato">bg-tomato</option>\r' +
                    '        </select>\r' +
                    '    </div>\r' +
                    '</div>\r' +
                   ' <div class="col-xs-12">\r' +
                    '<div class="text-center" style="position:relative;height: 400px;border: 1px solid #999;">\r' +
                    '    <z-org-tree :data="data" :horizontal="horizontal" :collapsable="collapsable"\r' +
                    '        :label-class-name="labelClassName" :right-menu="rightMenu" @on-expand="onExpand"\r' +
                    '        @on-node-click="onNodeClick" :expand-all="expandAll" @on-menu-click="onMenuClick">\r' +
                    '    </z-org-tree>\r' +
                    '</div>\r' +
                    '</div>\r' +
                    'export default {\r' +
                    '    data: function () {\r' +
                    '        return {\r' +
                    '            data: {\r' +
                    '                id: 0,\r' +
                    '                label: "XXX科技有限公司",\r' +
                    '                children: [\r' +
                    '                  {\r' +
                    '                    id: 2,\r' +
                    '                    label: "产品研发部",\r' +
                    '                    children: [\r' +
                    '                      {\r' +
                    '                        id: 5,\r' +
                    '                        label: "研发-前端"\r' +
                    '                      },\r' +
                    '                      {\r' +
                    '                        id: 6,\r' +
                    '                        label: "研发-后端"\r' +
                    '                      },\r' +
                    '                      {\r' +
                    '                        id: 9,\r' +
                    '                        label: "UI设计"\r' +
                    '                      },\r' +
                    '                      {\r' +
                    '                        id: 10,\r' +
                    '                        label: "产品经理"\r' +
                    '                      }\r' +
                    '                    ]\r' +
                    '                  },\r' +
                    '                  {\r' +
                    '                    id: 3,\r' +
                    '                    label: "销售部",\r' +
                    '                    children: [\r' +
                    '                      {\r' +
                    '                        id: 7,\r' +
                    '                        label: "销售一部"\r' +
                    '                      },\r' +
                    '                      {\r' +
                    '                        id: 8,\r' +
                    '                        label: "销售二部"\r' +
                    '                      }\r' +
                    '                   ]\r' +
                    '                  },\r' +
                    '                  {\r' +
                    '                    id: 4,\r' +
                    '                    label: "财务部"\r' +
                    '                  },\r' +
                    '                  {\r' +
                    '                    id: 9,\r' +
                    '                    label: "HR人事"\r' +
                    '                  }\r' +
                    '                ]\r' +
                    '              },\r' +
                    '              horizontal: false,\r' +
                    '              collapsable: true,\r' +
                    '              expandAll: false,\r' +
                    '              labelClassName: "bg-white",\r' +
                    '              rightMenu: [\r' +
                    '                {\r' +
                    '                  key: "edit",\r' +
                    '                  label: "编辑部门"\r' +
                    '                },\r' +
                    '                {\r' +
                    '                  key: "detail",\r' +
                    '                  label: "查看部门"\r' +
                    '                },\r' +
                    '                {\r' +
                    '                  key: "new",\r' +
                    '                  label: "新增子部门"\r' +
                    '                },\r' +
                    '                {\r' +
                    '                  key: "delete",\r' +
                    '                  label: "删除部门"\r' +
                    '               }\r' +
                    '              ]\r' +
                    '        }\r' +
                    '    },\r' +
                    '    methods: {\r' +
                    '        onMenuClick: function(data) {\r' +
                    '            console.log(data.data.label+"的" + data.key);\r' +
                    '          },\r' +
                    '          onExpand(data, status) {\r' +
                    '            console.log("节点" + data + "是否展开" + status);\r' +
                    '          },\r' +
                    '          onNodeClick(e, data) {\r' +
                    '            console.log("点击节点触发");\r' +
                    '          },\r' +
                    '          expandChange() {\r' +
                    '            this.expandAll = !this.expandAll;\r' +
                    '          }\r' +
                    '    }\r' +
                    '}\r'
    }
  },
  methods: {
    onMenuClick: function (data) {
      console.log(data.data.label + '的' + data.key)
    },
    onExpand (data, status) {
      console.log('节点' + data + '是否展开' + status)
    },
    onNodeClick (e, data) {
      console.log('点击节点触发')
    },
    expandChange () {
      this.expandAll = !this.expandAll
    }
  }
}
</script>
<style scoped>
</style>
