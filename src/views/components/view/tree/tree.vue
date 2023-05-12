<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-03-17 16:31:11
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
         <z-col span="12">
            <z-tree :data="data1"></z-tree>
            <div class="example-desc">
                <header class="example-header"><span>基础用法</span></header>
                <p>最简单的用法，展示可选中，默认展开功能。</p>
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
            <z-tree :data="data2" show-checkbox></z-tree>
            <div class="example-desc">
                <header class="example-header"><span>可勾选</span></header>
                <p>设置属性 show-checkbox 可以对节点进行勾选。</p>
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
            <z-tree :data="data3" :load-data="loadData" show-checkbox></z-tree>
            <div class="example-desc">
                <header class="example-header"><span>异步加载子节点</span></header>
                <div>
                    <p>使用 <code>load-data</code> 属性可以异步加载子节点，需要给数据增加 <code>loading</code> 来标识当前是否在加载中。</p>
                    <p>load-data 第一个参数为当前节点信息；执行 load-data 的第二个参数，将需要添加的数据传入。</p>
                    <p>如果某节点不包含 <code>loading</code> 和 <code>children</code> 字段，则不会应用异步加载效果。</p>
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
          <z-tree :data="data4" show-checkbox multiple></z-tree>
          <div class="example-desc">
              <header class="example-header"><span>默认展开、选中、勾选和禁用</span></header>
              <div>
                  <p>给节点设置 <code>expand</code>、<code>selected</code>、<code>checked</code> 和
                      <code>disabled</code> 可以将节点设置为展开、选中、勾选和禁用。</p>
                  <p>设置属性 <code>multiple</code> 可进行多选。</p>
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
            <z-tree :data="data5" :render="renderContent"></z-tree>
            <div class="example-desc">
                <header class="example-header"><span>自定义节点内容</span></header>
                <div>
                    <p>使用强大的 Render 函数可以自定义节点显示内容和交互，比如添加图标，按钮等。</p>
                    <p>Render 函数的第二个参数，包含三个字段：</p>
                    <ul>
                        <li><strong>root</strong> &lt;Array&gt;：树的根节点</li>
                        <li><strong>node</strong> &lt;Object&gt;：当前节点</li>
                        <li><strong>data</strong> &lt;Object&gt;：当前节点的数据</li>
                    </ul>
                    <p>通过合理地使用 root、node 和 data 可以实现各种效果，其中，zView 给每个节点都设置了一个 <code>nodeKey</code>
                        字段，用来标识节点的 id。</p>
                    <p>Render 函数分两种，一种是给当前树的每个节点都设置同样的渲染内容，此 render 通过 Tree 组件的属性 <code>render</code>
                        传递；另一种是单独给某个节点设置，在该节点的 <code>render</code> 字段内设置；同时设置时，会优先使用当前节点的 Render 函数。</p>
                    <p><span><a href="https://segmentfault.com/ls/1650000011074057" target="_blank"><i
                                    class="zvu-icon zvu-icon-social-youtube-outline"></i> <span> 学习 Render
                                    函数的内容</span></a>

                        </span></p>
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
            <h3 id="Tree_props">Tree props</h3>
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
                    <td>data</td>
                    <td>可嵌套的节点属性的数组，生成 tree 的数据</td>
                    <td>Array</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>multiple</td>
                    <td>是否支持多选</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>show-checkbox</td>
                    <td>是否显示多选框</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>empty-text</td>
                    <td>没有数据时的提示</td>
                    <td>String</td>
                    <td>暂无数据</td>
                </tr>
                <tr>
                    <td>load-data</td>
                    <td>异步加载数据的方法，见示例</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>render</td>
                    <td>自定义渲染内容，见示例</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>children-key</td>
                    <td>定义子节点键</td>
                    <td>String</td>
                    <td>children</td>
                </tr>
                <tr>
                    <td>check-strictly</td>
                    <td>在显示复选框的情况下，是否严格的遵循父子不互相关联的做法</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>check-directly</td>
                    <td>开启后，在 show-checkbox 模式下，select 的交互也将转为 check</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="Tree_events">Tree events</h3>
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
                    <td>on-select-change</td>
                    <td>点击树节点时触发</td>
                    <td>当前已选中的节点数组、当前项</td>
                </tr>
                <tr>
                    <td>on-check-change</td>
                    <td>点击复选框时触发</td>
                    <td>当前已勾选节点的数组、当前项</td>
                </tr>
                <tr>
                    <td>on-toggle-expand</td>
                    <td>展开和收起子列表时触发</td>
                    <td>当前节点的数据</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="Tree_methods">Tree methods</h3>
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
                    <td>getCheckedNodes</td>
                    <td>获取被勾选的节点</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>getSelectedNodes</td>
                    <td>获取被选中的节点</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>getCheckedAndIndeterminateNodes</td>
                    <td>获取选中及半选节点</td>
                    <td>无</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="children">children</h3>
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
                    <td>标题</td>
                    <td>String | Element String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>expand</td>
                    <td>是否展开直子节点</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>禁掉响应</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>disableCheckbox</td>
                    <td>禁掉 checkbox</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>selected</td>
                    <td>是否选中子节点</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>checked</td>
                    <td>是否勾选(如果勾选，子节点也会全部勾选)</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>children</td>
                    <td>子节点属性数组</td>
                    <td>Array</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>render</td>
                    <td>自定义当前节点渲染内容，见示例</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    </div>
   </z-card>
</div>
</template>

<script>
export default {
  name: 'cpTree',
  data: function () {
    return {
      data1: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ],
      data2: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ],
      data3: [
        {
          title: 'parent',
          loading: false,
          children: []
        }
      ],
      data4: [
        {
          title: 'parent 1',
          expand: true,
          selected: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1',
                  disabled: true
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1',
                  checked: true
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ],
      data5: [
        {
          title: 'parent 1',
          expand: true,
          render: (h, { root, node, data }) => {
            return h('span', {
              style: {
                display: 'inline-block',
                width: '100%'
              }
            }, [
              h('span', [
                h('Icon', {
                  props: {
                    type: 'ios-folder-outline'
                  },
                  style: {
                    marginRight: '8px'
                  }
                }),
                h('span', data.title)
              ]),
              h('span', {
                style: {
                  display: 'inline-block',
                  float: 'right',
                  marginRight: '32px'
                }
              }, [
                h('Button', {
                  props: Object.assign({}, this.buttonProps, {
                    icon: 'android-add',
                    type: 'primary'
                  }),
                  style: {
                    width: '64px'
                  },
                  on: {
                    click: () => { this.append(data) }
                  }
                })
              ])
            ])
          },
          children: [
            {
              title: 'child 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1',
                  expand: true
                },
                {
                  title: 'leaf 1-1-2',
                  expand: true
                }
              ]
            },
            {
              title: 'child 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1',
                  expand: true
                },
                {
                  title: 'leaf 1-2-1',
                  expand: true
                }
              ]
            }
          ]
        }
      ],
      buttonProps: {
        type: 'default',
        size: 'small'
      },
      demo1: '<z-tree :data="data1"></z-tree>\r' +
                '<script>\r' +
                '  export default {\r' +
                '      data () {\r' +
                '          return {\r' +
                '              data1: [\r' +
                '                  {\r' +
                '                      title: \'parent 1\',\r' +
                '                      expand: true,\r' +
                '                      children: [\r' +
                '                          {\r' +
                '                              title: \'parent 1-1\',\r' +
                '                              expand: true,\r' +
                '                              children: [\r' +
                '                                  {\r' +
                '                                      title: \'leaf 1-1-1\'\r' +
                '                                  },\r' +
                '                                  {\r' +
                '                                      title: \'leaf 1-1-2\'\r' +
                '                                  }\r' +
                '                              ]\r' +
                '                          },\r' +
                '                         {\r' +
                '                             title: \'parent 1-2\',\r' +
                '                              expand: true,\r' +
                '                              children: [\r' +
                '                                  {\r' +
                '                                      title: \'leaf 1-2-1\'\r' +
                '                                  },\r' +
                '                                  {\r' +
                '                                      title: \'leaf 1-2-1\'\r' +
                '                                  }\r' +
                '                              ]\r' +
                '                          }\r' +
                '                      ]\r' +
                '                 }\r' +
                '              ]\r' +
                '          }\r' +
                '      }\r' +
                '  }\r' +
                // eslint-disable-next-line no-useless-escape
                '<\/script>\r',
      demo2: '<z-tree :data="data2" show-checkbox></z-tree>\r' +
                '<script>\r' +
                ' export default {\r' +
                '      data :function() {\r' +
                '          return {\r' +
                '              data2: [\r' +
                '                  {\r' +
                '                      title: \'parent 1\',\r' +
                '                      expand: true,\r' +
                '                     children: [\r' +
                '                          {\r' +
                '                              title: \'parent 1-1\',\r' +
                '                              expand: true,\r' +
                '                              children: [\r' +
                '                                  {\r' +
                '                                      title: \'leaf 1-1-1\'\r' +
                '                                  },\r' +
                '                                  {\r' +
                '                                      title: \'leaf 1-1-2\'\r' +
                '                                  }\r' +
                '                              ]\r' +
                '                          },\r' +
                '                          {\r' +
                '                              title: \'parent 1-2\',\r' +
                '                              expand: true,\r' +
                '                              children: [\r' +
                '                                  {\r' +
                '                                      title: \'leaf 1-2-1\'\r' +
                '                                  },\r' +
                '                                  {\r' +
                '                                      title: \'leaf 1-2-1\'\r' +
                '                                  }\r' +
                '                              ]\r' +
                '                          }\r' +
                '                      ]\r' +
                '                  }\r' +
                '              ]\r' +
                '          }\r' +
                '      }\r' +
                '    }\r' +
                // eslint-disable-next-line no-useless-escape
                '<\/script>\r',
      demo3: '<z-tree :data="data3" :load-data="loadData" show-checkbox></z-tree>\r' +
                '<script>\r' +
                '  export default {\r' +
                '    data () {\r' +
                '        return {\r' +
                '            data3: [\r' +
                '                {\r' +
                '                    title: \'parent\',\r' +
                '                    loading: false,\r' +
                '                    children: []\r' +
                '                }\r' +
                '            ]\r' +
                '        }\r' +
                '    },\r' +
                '    methods: {\r' +
                '        loadData (item, callback) {\r' +
                '            setTimeout(() => {\r' +
                '                const data = [\r' +
                '                    {\r' +
                '                        title: \'children\',\r' +
                '                        loading: false,\r' +
                '                       children: []\r' +
                '                    },\r' +
                '                    {\r' +
                '                        title: \'children\',\r' +
                '                       loading: false,\r' +
                '                        children: []\r' +
                '                    }\r' +
                '                ];\r' +
                '                callback(data);\r' +
                '            }, 1000);\r' +
                '        }\r' +
                '    }\r' +
                ' }\r' +
                // eslint-disable-next-line no-useless-escape
                ' <\/script>\r',
      demo4: '<z-tree :data="data4" show-checkbox multiple></z-tree>\r' +
                '<script>\r' +
                '    export default {\r' +
                '        data () {\r' +
                '            return {\r' +
                '                data4: [\r' +
                '                    {\r' +
                '                        title: \'parent 1\',\r' +
                '                        expand: true,\r' +
                '                        selected: true,\r' +
                '                        children: [\r' +
                '                            {\r' +
                '                                title: \'parent 1-1\',\r' +
                '                                expand: true,\r' +
                '                                children: [\r' +
                '                                    {\r' +
                '                                        title: \'leaf 1-1-1\',\r' +
                '                                        disabled: true\r' +
                '                                   },\r' +
                '                                    {\r' +
                '                                        title: \'leaf 1-1-2\'\r' +
                '                                    }\r' +
                '                                ]\r' +
                '                            },\r' +
                '                            {\r' +
                '                                title: \'parent 1-2\',\r' +
                '                                expand: true,\r' +
                '                                children: [\r' +
                '                                    {\r' +
                '                                        title: \'leaf 1-2-1\',\r' +
                '                                        checked: true\r' +
                '                                    },\r' +
                '                                    {\r' +
                '                                        title: \'leaf 1-2-1\'\r' +
                '                                    }\r' +
                '                                ]\r' +
                '                            }\r' +
                '                        ]\r' +
                '                    }\r' +
                '                ]\r' +
                '            }\r' +
                '        }\r' +
                '    }\r' +
                // eslint-disable-next-line no-useless-escape
                '<\/script>\r',
      demo5: '<z-tree :data="data5" :render="renderContent"></z-tree>\r' +
                '<script>\r' +
                '  export default {\r' +
                '      data () {\r' +
                '          return {\r' +
                '              data5: [\r' +
                '                  {\r' +
                '                      title: \'parent 1\',\r' +
                '                      expand: true,\r' +
                '                      render: (h, { root, node, data }) => {\r' +
                '                          return h(\'span\', {\r' +
                '                              style: {\r' +
                '                                  display: \'inline-block\',\r' +
                '                                  width: \'100%\'\r' +
                '                              }\r' +
                '                          }, [\r' +
                '                              h(\'span\', [\r' +
                '                                  h(\'Icon\', {\r' +
                '                                      props: {\r' +
                '                                          type: \'ios-folder-outline\'\r' +
                '                                      },\r' +
                '                                      style: {\r' +
                '                                          marginRight: \'8px\'\r' +
                '                                      }\r' +
                '                                  }),\r' +
                '                                  h(\'span\', data.title)\r' +
                '                              ]),\r' +
                '                              h(\'span\', {\r' +
                '                                  style: {\r' +
                '                                      display: \'inline-block\',\r' +
                '                                      float: \'right\',\r' +
                '                                      marginRight: \'32px\'\r' +
                '                                  }\r' +
                '                              }, [\r' +
                '                                  h(\'Button\', {\r' +
                '                                      props: Object.assign({}, this.buttonProps, {\r' +
                '                                          icon: \'ios-add\',\r' +
                '                                          type: \'primary\'\r' +
                '                                      }),\r' +
                '                                      style: {\r' +
                '                                          width: \'64px\'\r' +
                '                                      },\r' +
                '                                      on: {\r' +
                '                                          click: () => { this.append(data) }\r' +
                '                                     }\r' +
                '                                  })\r' +
                '                              ])\r' +
                '                         ]);\r' +
                '                      },\r' +
                '                      children: [\r' +
                '                          {\r' +
                '                              title: \'child 1-1\',\r' +
                '                              expand: true,\r' +
                '                              children: [\r' +
                '                                  {\r' +
                '                                      title: \'leaf 1-1-1\',\r' +
                '                                     expand: true\r' +
                '                                  },\r' +
                '                                  {\r' +
                '                                      title: \'leaf 1-1-2\',\r' +
                '                                      expand: true\r' +
                '                                  }\r' +
                '                              ]\r' +
                '                          },\r' +
                '                          {\r' +
                '                              title: \'child 1-2\',\r' +
                '                              expand: true,\r' +
                '                              children: [\r' +
                '                                  {\r' +
                '                                      title: \'leaf 1-2-1\',\r' +
                '                                      expand: true\r' +
                '                                  },\r' +
                '                                  {\r' +
                '                                      title: \'leaf 1-2-1\',\r' +
                '                                      expand: true\r' +
                '                                  }\r' +
                '                              ]\r' +
                '                          }\r' +
                '                      ]\r' +
                '                  }\r' +
                '              ],\r' +
                '               buttonProps: {\r' +
                '                  type: \'default\',\r' +
                '                  size: \'small\',\r' +
                '              }\r' +
                '          }\r' +
                '      },\r' +
                '      methods: {\r' +
                '          renderContent (h, { root, node, data }) {\r' +
                '              return h(\'span\', {\r' +
                '                  style: {\r' +
                '                      display: \'inline-block\',\r' +
                '                     width: \'100%\'\r' +
                '                  }\r' +
                '              }, [\r' +
                '                  h(\'span\', [\r' +
                '                      h(\'Icon\', {\r' +
                '                          props: {\r' +
                '                              type: \'ios-paper-outline\'\r' +
                '                          },\r' +
                '                         style: {\r' +
                '                              marginRight: \'8px\'\r' +
                '                          }\r' +
                '                      }),\r' +
                '                      h(\'span\', data.title)\r' +
                '                  ]),\r' +
                '                  h(\'span\', {\r' +
                '                      style: {\r' +
                '                          display: \'inline-block\',\r' +
                '                          float: \'right\',\r' +
                '                          marginRight: \'32px\'\r' +
                '                      }\r' +
                '                  }, [\r' +
                '                      h(\'Button\', {\r' +
                '                          props: Object.assign({}, this.buttonProps, {\r' +
                '                              icon: \'ios-add\'\r' +
                '                          }),\r' +
                '                          style: {\r' +
                '                              marginRight: \'8px\'\r' +
                '                          },\r' +
                '                          on: {\r' +
                '                              click: () => { this.append(data) }\r' +
                '                          }\r' +
                '                     }),\r' +
                '                      h(\'Button\', {\r' +
                '                          props: Object.assign({}, this.buttonProps, {\r' +
                '                              icon: \'ios-remove\'\r' +
                '                         }),\r' +
                '                          on: {\r' +
                '                              click: () => { this.remove(root, node, data) }\r' +
                '                          }\r' +
                '                      })\r' +
                '                  ])\r' +
                '              ]);\r' +
                '          },\r' +
                '          append (data) {\r' +
                '              const children = data.children || [];\r' +
                '              children.push({\r' +
                '                  title: \'appended node\',\r' +
                '                 expand: true\r' +
                '              });\r' +
                '             this.$set(data, \'children\', children);\r' +
                '         },\r' +
                '          remove (root, node, data) {\r' +
                '              const parentKey = root.find(el => el === node).parent;\r' +
                '             const parent = root.find(el => el.nodeKey === parentKey).node;\r' +
                '             const index = parent.children.indexOf(data);\r' +
                '              parent.children.splice(index, 1);\r' +
                '          }\r' +
                '      }\r' +
                '  }\r' +
                // eslint-disable-next-line no-useless-escape
                '<\/script>\r'
    }
  },
  methods: {
    loadData (item, callback) {
      setTimeout(() => {
        const data = [
          {
            title: 'children',
            loading: false,
            children: []
          },
          {
            title: 'children',
            loading: false,
            children: []
          }
        ]
        callback(data)
      }, 1000)
    },
    renderContent (h, { root, node, data }) {
      return h('span', {
        style: {
          display: 'inline-block',
          width: '100%'
        }
      }, [
        h('span', [
          h('Icon', {
            props: {
              type: 'ios-paper-outline'
            },
            style: {
              marginRight: '8px'
            }
          }),
          h('span', data.title)
        ]),
        h('span', {
          style: {
            display: 'inline-block',
            float: 'right',
            marginRight: '32px'
          }
        }, [
          h('Button', {
            props: Object.assign({}, this.buttonProps, {
              icon: 'android-add'
            }),
            style: {
              marginRight: '8px'
            },
            on: {
              click: () => { this.append(data) }
            }
          }),
          h('Button', {
            props: Object.assign({}, this.buttonProps, {
              icon: 'android-remove'
            }),
            on: {
              click: () => { this.remove(root, node, data) }
            }
          })
        ])
      ])
    },
    append (data) {
      const children = data.children || []
      children.push({
        title: 'appended node',
        expand: true
      })
      this.$set(data, 'children', children)
    },
    remove (root, node, data) {
      const parentKey = root.find(el => el === node).parent
      const parent = root.find(el => el.nodeKey === parentKey).node
      const index = parent.children.indexOf(data)
      parent.children.splice(index, 1)
    }
  }
}
</script>
<style scoped>
</style>
