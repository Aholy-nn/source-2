<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-03-17 16:27:13
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
     <z-row>
        <z-col span="12">
            <z-button @click="value1 = true" type="primary">Open</z-button>
            <z-drawer title="Basic Drawer" :closable="false" v-model="value1">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </z-drawer>
            <div class="example-desc">
                <header class="example-header"><span>基础用法</span></header>
                <div>
                    <p>基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。</p>
                </div>
            </div>
        </z-col>
        <z-col span="12">
            <z-code-editor :content="demo1"></z-code-editor>
        </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
     <z-row>
        <z-col span="12">
            <z-button @click="value2 = true" type="primary">Open</z-button>
            <z-drawer title="Basic Drawer" placement="left" :closable="false" v-model="value2">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </z-drawer>
            <div class="example-desc">
                <header class="example-header"><span>左侧滑出</span></header>
                <div>
                    <p>基础抽屉，点击触发按钮抽屉从左滑出，点击遮罩区关闭。</p>
                </div>
            </div>
        </z-col>
        <z-col span="12">
            <z-code-editor :content="demo2"></z-code-editor>
        </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
     <z-row>
        <z-col span="12">
            <z-button @click="value3 = true" type="primary">Create</z-button>
            <z-drawer
                title="Create"
                v-model="value3"
                width="720"
                :mask-closable="false"
                :styles="styles"
            >
                <z-form :model="formData">
                    <z-row :gutter="32">
                        <z-col span="12">
                            <z-form-item label="Name" label-position="top">
                                <z-input v-model="formData.name" placeholder="please enter user name" ></z-input>
                            </z-form-item>
                        </z-col>
                        <z-col span="12">
                            <z-form-item label="Url" label-position="top">
                                <z-input v-model="formData.url" placeholder="please enter url">
                                    <span slot="prepend">http://</span>
                                    <span slot="append">.com</span>
                                </z-input>
                            </z-form-item>
                        </z-col>
                    </z-row>
                    <z-row :gutter="32">
                        <z-col span="12">
                            <z-form-item label="Owner" label-position="top">
                                <z-select v-model="formData.owner" placeholder="please select an owner">
                                    <z-option value="jobs">Steven Paul Jobs</z-option>
                                    <z-option value="ive">Sir Jonathan Paul Ive</z-option>
                                </z-select>
                            </z-form-item>
                        </z-col>
                        <z-col span="12">
                            <z-form-item label="Type" label-position="top">
                                <z-select v-model="formData.type" placeholder="please choose the type">
                                    <z-option value="private">Private</z-option>
                                    <z-option value="public">Public</z-option>
                                </z-select>
                            </z-form-item>
                        </z-col>
                    </z-row>
                    <z-row :gutter="32">
                        <z-col span="12">
                            <z-form-item label="Approver" label-position="top">
                                <z-select v-model="formData.approver" placeholder="please choose the approver">
                                    <z-option value="jobs">Steven Paul Jobs</z-option>
                                    <z-option value="ive">Sir Jonathan Paul Ive</z-option>
                                </z-select>
                            </z-form-item>
                        </z-col>
                        <z-col span="12">
                            <z-form-item label="DateTime" label-position="top">
                                <z-date-picker v-model="formData.date" type="daterange" placeholder="please select the date" style="display: block" placement="bottom-end"></z-date-picker>
                            </z-form-item>
                        </z-col>
                    </z-row>
                    <z-form-item label="Description" label-position="top">
                        <z-input type="textarea" v-model="formData.desc" :rows="4" placeholder="please enter the description" />
                    </z-form-item>
                </z-form>
                <div class="demo-drawer-footer">
                    <z-button style="margin-right: 8px" @click="value3 = false">Cancel</z-button>
                    <z-button type="primary" @click="value3 = false">Submit</z-button>
                </div>
            </z-drawer>
            <div class="example-desc">
                <header class="example-header"><span>对象编辑</span></header>
                <div>
                    <p>用于承载编辑相关操作，需要点击关闭按钮关闭。</p>
                </div>
            </div>
        </z-col>
        <z-col span="12">
            <z-code-editor :content="demo3"></z-code-editor>
        </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
    <z-row>
      <z-col span="12">
          <z-button @click="value4 = true" type="primary">View Profile</z-button>
          <z-drawer :closable="false" width="640" v-model="value4">
              <p :style="pStyle">User Profile</p>
              <p :style="pStyle">Personal</p>
              <div class="demo-drawer-profile">
                  <z-row>
                      <z-col span="12">
                          Full Name: Aresn
                      </z-col>
                      <z-col span="12">
                          Account: aresn@aresn.com
                      </z-col>
                  </z-row>
                  <z-row>
                      <z-col span="12">
                          City: BeiJing
                      </z-col>
                      <z-col span="12">
                          Country: China
                      </z-col>
                  </z-row>
                  <z-row>
                      <z-col span="12">
                          Birthday: May 14, 1991
                      </z-col>
                      <z-col span="12">
                          Website: <a href="https://dev.iviewui.com" target="_blank">https://dev.iviewui.com</a>
                          </z-col>
                  </z-row>
                  Message: Hello, Developer
              </div>
              <Divider />
              <p :style="pStyle">Company</p>
              <div class="demo-drawer-profile">
                  <z-row>
                      <z-col span="12">
                          Position: Programmer
                      </z-col>
                      <z-col span="12">
                          Responsibilities:Coding
                      </z-col>
                  </z-row>
                  <z-row>
                      <z-col span="12">
                          Department: Map visualization
                      </z-col>
                  </z-row>
                  Skills:C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc.
              </div>
              <Divider />
              <p :style="pStyle">Contacts</p>
              <div class="demo-drawer-profile">
                  <z-row>
                      <z-col span="12">
                          Email: admin@aresn.com
                      </z-col>
                      <z-col span="12">
                          Phone Number: +86 18888888888
                      </z-col>
                  </z-row>
                  <z-row>
                      <z-col span="12">
                          GitHub: <a href="https://github.com/view-design/ViewUI" target="_blank">https://github.com/view-design/ViewUI</a>
                      </z-col>
                  </z-row>
              </div>
          </z-drawer>
          <div class="example-desc">
              <header class="example-header"><span>信息预览抽屉</span></header>
              <div>
                  <p>需要快速预览对象概要时使用，点击遮罩区关闭。</p>
              </div>
          </div>
      </z-col>
      <z-col span="12">
          <z-code-editor :content="demo4"></z-code-editor>
      </z-col>
  </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
    <z-row>
        <z-col span="12">
            <z-button @click="value5 = true" type="primary">Open Drawer</z-button>
            <z-drawer title="Multi-level drawer" width="512" :closable="false" v-model="value5">
                <z-button @click="value6 = true" type="primary">Two-level Drawer</z-button>
            </z-drawer>
            <z-drawer title="Two-level Drawer" :closable="false" v-model="value6">
                This is two-level drawer.
            </z-drawer>
            <div class="example-desc">
                <header class="example-header"><span>多层抽屉 </span></header>
                <div>
                    <p>在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。</p>
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
          <h3 id="Drawer_props">Drawer props</h3>
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
                  <td>抽屉是否显示，可使用 v-model 双向绑定数据</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>title</td>
                  <td>抽屉标题，如果使用 slot 自定义了页头，则 title 无效</td>
                  <td>String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>width</td>
                  <td>抽屉宽度。当其值不大于 100 时以百分比显示，大于 100 时为像素</td>
                  <td>Number | String</td>
                  <td>256</td>
              </tr>
              <tr>
                  <td>closable</td>
                  <td>是否显示右上角的关闭按钮</td>
                  <td>Boolean</td>
                  <td>true</td>
              </tr>
              <tr>
                  <td>mask-closable</td>
                  <td>是否允许点击遮罩层关闭</td>
                  <td>Boolean</td>
                  <td>true</td>
              </tr>
              <tr>
                  <td>mask</td>
                  <td>是否显示遮罩层</td>
                  <td>Boolean</td>
                  <td>true</td>
              </tr>
              <tr>
                  <td>mask-style</td>
                  <td>遮罩层样式</td>
                  <td>Object</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>styles</td>
                  <td>抽屉中间层的样式</td>
                  <td>Object</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>scrollable</td>
                  <td>页面是否可以滚动</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>placement</td>
                  <td>抽屉的方向，可选值为 left 或 right</td>
                  <td>String</td>
                  <td>right</td>
              </tr>
              <tr>
                  <td>transfer</td>
                  <td>是否将抽屉放置于 body 内</td>
                  <td>Boolean</td>
                  <td>true</td>
              </tr>
              <tr>
                  <td>class-name</td>
                  <td>设置抽屉容器.zvu-drawer-wrap的类名</td>
                  <td>String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>inner</td>
                  <td>是否设置抽屉在某个元素内打开，开启此属性时，应当关闭 transfer 属性</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>draggable</td>
                  <td>是否开启拖拽调整宽度</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>before-close</td>
                  <td>返回 Promise 可以阻止关闭</td>
                  <td>Function</td>
                  <td>-</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3 id="Drawer_events">Drawer events</h3>
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
                  <td>关闭抽屉时触发</td>
                  <td>无</td>
              </tr>
              <tr>
                  <td>on-visible-change</td>
                  <td>显示状态发生变化时触发</td>
                  <td>true / false</td>
              </tr>
              <tr>
                  <td>on-resize-width</td>
                  <td>调整宽度时触发</td>
                  <td>width</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3 id="Drawer_slot">Drawer slot</h3>
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
                  <td>header</td>
                  <td>自定义标题栏</td>
              </tr>
              <tr>
                  <td>close</td>
                  <td>自定义右上角关闭内容</td>
              </tr>
              <tr>
                  <td>trigger</td>
                  <td>自定义调整宽度节点</td>
              </tr>
              <tr>
                  <td>默认</td>
                  <td>抽屉主体内容</td>
              </tr>
          </tbody>
      </table>
    </div>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpDrawer',
  data: function () {
    return {
      value1: false,
      value2: false,
      value3: false,
      styles: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        paddingBottom: '53px',
        position: 'static'
      },
      formData: {
        name: '',
        url: '',
        owner: '',
        type: '',
        approver: '',
        date: '',
        desc: ''
      },
      value4: false,
      pStyle: {
        fontSize: '16px',
        color: 'rgba(0,0,0,0.85)',
        lineHeight: '24px',
        display: 'block',
        marginBottom: '16px'
      },
      value5: false,
      value6: false,
      demo1: '<z-button @click="value1 = true" type="primary">Open</z-button>\r' +
                  '<z-drawer title="Basic Drawer" :closable="false" v-model="value1">\r' +
                  '    <p>Some contents...</p>\r' +
                  '    <p>Some contents...</p>\r' +
                  '    <p>Some contents...</p>\r' +
                  '</z-drawer>\r' +
                  '<div class="example-desc">\r' +
                  '   <header class="example-header"><span>基础用法</span></header>\r' +
                  '    <div>\r' +
                  '        <p>基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。</p>\r' +
                  '    </div>\r' +
                  '</div>\r' +
                  '<script>\r' +
                  '   export default {\r' +
                  '     data () {\r' +
                  '            return {\r' +
                  '                value1: false\r' +
                  '            }\r' +
                  '        }\r' +
                  '   }\r' +
                  // eslint-disable-next-line no-useless-escape
                  '<\/script>\r',
      demo2: ' <z-button @click="value2 = true" type="primary">Open</z-button>\r' +
                  '<z-drawer title="Basic Drawer" placement="left" :closable="false" v-model="value2">\r' +
                  '    <p>Some contents...</p>\r' +
                  '    <p>Some contents...</p>\r' +
                  '   <p>Some contents...</p>\r' +
                  '</z-drawer>\r' +
                  '<script>\r' +
                  '    export default {\r' +
                  '        data () {\r' +
                  '            return {\r' +
                  '                value2: false\r' +
                  '            }\r' +
                  '        }\r' +
                  '    }\r' +
                  // eslint-disable-next-line no-useless-escape
                  '<\/script>\r',
      demo3: ' <z-button @click="value3 = true" type="primary">Create</z-button>\r' +
                  '    <z-drawer\r' +
                  '        title="Create"\r' +
                  '        v-model="value3"\r' +
                  '        width="720"\r' +
                  '        :mask-closable="false"\r' +
                  '        :styles="styles"\r' +
                  '    >\r' +
                  '        <z-form :model="formData">\r' +
                  '           <z-row :gutter="32">\r' +
                  '               <z-col span="12">\r' +
                  '                   <z-form-item label="Name" label-position="top">\r' +
                  '                       <z-input v-model="formData.name" placeholder="please enter user name" ></z-input>\r' +
                  '                    </z-form-item>\r' +
                  '               </z-col>\r' +
                  '               <z-col span="12">\r' +
                  '                    <z-form-item label="Url" label-position="top">\r' +
                  '                       <z-input v-model="formData.url" placeholder="please enter url">\r' +
                  '                            <span slot="prepend">http://</span>\r' +
                  '                            <span slot="append">.com</span>\r' +
                  '                        </z-input>\r' +
                  '                    </z-form-item>\r' +
                  '                </z-col>\r' +
                  '            </z-row>\r' +
                  '            <z-row :gutter="32">\r' +
                  '                <z-col span="12">\r' +
                  '                    <z-form-item label="Owner" label-position="top">\r' +
                  '                        <z-select v-model="formData.owner" placeholder="please select an owner">\r' +
                  '                            <z-option value="jobs">Steven Paul Jobs</z-option>\r' +
                  '                            <z-option value="ive">Sir Jonathan Paul Ive</z-option>\r' +
                  '                        </z-select>\r' +
                  '                    </z-form-item>\r' +
                  '                </z-col>\r' +
                  '                <z-col span="12">\r' +
                  '                    <z-form-item label="Type" label-position="top">\r' +
                  '                        <z-select v-model="formData.type" placeholder="please choose the type">\r' +
                  '                            <z-option value="private">Private</z-option>\r' +
                  '                            <z-option value="public">Public</z-option>\r' +
                  '                        </z-select>\r' +
                  '                    </z-form-item>\r' +
                  '                </z-col>\r' +
                  '            </z-row>\r' +
                  '           <z-row :gutter="32">\r' +
                  '                <z-col span="12">\r' +
                  '                    <z-form-item label="Approver" label-position="top">\r' +
                  '                        <z-select v-model="formData.approver" placeholder="please choose the approver">\r' +
                  '                            <z-option value="jobs">Steven Paul Jobs</z-option>\r' +
                  '                            <z-option value="ive">Sir Jonathan Paul Ive</z-option>\r' +
                  '                       </z-select>\r' +
                  '                    </z-form-item>\r' +
                  '                </z-col>\r' +
                  '                <z-col span="12">\r' +
                  '                    <z-form-item label="DateTime" label-position="top">\r' +
                  '                        <z-date-picker v-model="formData.date" type="daterange" placeholder="please select the date" style="display: block" placement="bottom-end"></z-date-picker>\r' +
                  '                   </z-form-item>\r' +
                  '                </z-col>\r' +
                  '            </z-row>\r' +
                  '            <z-form-item label="Description" label-position="top">\r' +
                  '                <z-input type="textarea" v-model="formData.desc" :rows="4" placeholder="please enter the description" />\r' +
                  '            </z-form-item>\r' +
                  '        </z-form>\r' +
                  '        <div class="demo-drawer-footer">\r' +
                  '            <z-button style="margin-right: 8px" @click="value3 = false">Cancel</z-button>\r' +
                  '           <z-button type="primary" @click="value3 = false">Submit</z-button>\r' +
                  '        </div>\r' +
                  '    </z-drawer>\r' +
                  '<script>\r' +
                  '    export default {\r' +
                  '        data () {\r' +
                  '            return {\r' +
                  '                value3: false,\r' +
                  '                styles: {\r' +
                  '                    height: \'calc(100% - 55px)\',\r' +
                  '                    overflow: \'auto\',\r' +
                  '                    paddingBottom: \'53px\',\r' +
                  '                    position: \'static\'\r' +
                  '               },\r' +
                  '                formData: {\r' +
                  '                    name: \'\',\r' +
                  '                    url: \'\',\r' +
                  '                   owner: \'\',\r' +
                  '                   type: \'\',\r' +
                  '                   approver: \'\',\r' +
                  '                    date: \'\',\r' +
                  '                    desc: \'\'\r' +
                  '               }\r' +
                  '            }\r' +
                  '        }\r' +
                  '    }\r' +
                  // eslint-disable-next-line no-useless-escape
                  '<\/script>\r',
      demo4: '<z-button @click="value4 = true" type="primary">View Profile</z-button>\r' +
                  '<z-drawer :closable="false" width="640" v-model="value4">\r' +
                  '    <p :style="pStyle">User Profile</p>\r' +
                  '    <p :style="pStyle">Personal</p>\r' +
                  '    <div class="demo-drawer-profile">\r' +
                  '        <z-row>\r' +
                  '            <z-col span="12">\r' +
                  '                Full Name: Aresn\r' +
                  '            </z-col>\r' +
                  '            <z-col span="12">\r' +
                  '                Account: aresn@aresn.com\r' +
                  '            </z-col>\r' +
                  '        </z-row>\r' +
                  '        <z-row>\r' +
                  '            <z-col span="12">\r' +
                  '                City: BeiJing\r' +
                  '           </z-col>\r' +
                  '           <z-col span="12">\r' +
                  '                Country: China\r' +
                  '            </z-col>\r' +
                  '        </z-row>\r' +
                  '        <z-row>\r' +
                  '            <z-col span="12">\r' +
                  '                Birthday: May 14, 1991\r' +
                  '            </z-col>\r' +
                  '            <z-col span="12">\r' +
                  '                Website: <a href="https://dev.iviewui.com" target="_blank">https://dev.iviewui.com</a>\r' +
                  '                </z-col>\r' +
                  '        </z-row>\r' +
                  '        Message: Hello, Developer\r' +
                  '    </div>\r' +
                  '    <Divider />\r' +
                  '     <p :style="pStyle">Company</p>\r' +
                  '    <div class="demo-drawer-profile">\r' +
                  '        <z-row>\r' +
                  '           <z-col span="12">\r' +
                  '               Position: Programmer\r' +
                  '            </z-col>\r' +
                  '            <z-col span="12">\r' +
                  '               Responsibilities:Coding\r' +
                  '            </z-col>\r' +
                  '       </z-row>\r' +
                  '        <z-row>\r' +
                  '           <z-col span="12">\r' +
                  '                Department: Map visualization\r' +
                  '            </z-col>\r' +
                  '        </z-row>\r' +
                  '        Skills:C / C  +  +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc.\r' +
                  '    </div>\r' +
                  '    <Divider />\r' +
                  '    <p :style="pStyle">Contacts</p>\r' +
                  '    <div class="demo-drawer-profile">\r' +
                  '       <z-row>\r' +
                  '            <z-col span="12">\r' +
                  '                Email: admin@aresn.com\r' +
                  '            </z-col>\r' +
                  '           <z-col span="12">\r' +
                  '                Phone Number:  +86 18888888888\r' +
                  '            </z-col>\r' +
                  '        </z-row>\r' +
                  '        <z-row>\r' +
                  '           <z-col span="12">\r' +
                  '                GitHub: <a href="https://github.com/view-design/ViewUI" target="_blank">https://github.com/view-design/ViewUI</a>\r' +
                  '            </z-col>\r' +
                  '        </z-row>\r' +
                  '    </div>\r' +
                  '</z-drawer>\r' +
                    '<script>\r' +
                    '    export default {\r' +
                    '        data () {\r' +
                    '            return {\r' +
                    '                   value4: false,\r' +
                    '                   pStyle: {\r' +
                    '                       fontSize: \'16px\',\r' +
                    '                       color: \'rgba(0,0,0,0.85)\',\r' +
                    '                       lineHeight: \'24px\',\r' +
                    '                       display: \'block\',\r' +
                    '                       marginBottom: \'16px\'\r' +
                    '                   }\r' +
                    '            }\r' +
                    '        }\r' +
                    '    }\r' +
                    // eslint-disable-next-line no-useless-escape
                    '<\/script>\r',
      demo5: '<z-button @click="value5 = true" type="primary">Open Drawer</z-button>\r' +
                  '<z-drawer title="Multi-level drawer" width="512" :closable="false" v-model="value5">\r' +
                  '   <z-button @click="value6 = true" type="primary">Two-level Drawer</z-button>\r' +
                  '</z-drawer>\r' +
                  '<z-drawer title="Two-level Drawer" :closable="false" v-model="value6">\r' +
                  '    This is two-level drawer.\r' +
                  '</z-drawer>\r' +
                  '<script>\r' +
                  '    export default {\r' +
                  '        data () {\r' +
                  '            return {\r' +
                  '                value5: false,\r' +
                  '                value6: false\r' +
                  '            }\r' +
                  '        }\r' +
                  '    }\r' +
                  // eslint-disable-next-line no-useless-escape
                  '<\/script>\r'
    }
  },
  methods: {
    handleClick: function () {
      this.open = !this.open
    },
    handleChange: function (date) {
      this.value3 = date
    },
    handleClear: function () {
      this.open = false
    },
    handleOk: function () {
      this.open = false
    }
  }
}
</script>
<style scoped>
.demo-drawer-profile{
    font-size: 14px;
}
.demo-drawer-profile .zvu-col{
    margin-bottom: 12px;
}
.demo-drawer-footer{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    text-align: right;
    background: #fff;
}
</style>
