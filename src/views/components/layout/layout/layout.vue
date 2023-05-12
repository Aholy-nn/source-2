<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-03-17 16:30:58
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <z-card bordered dis-hover class="m-t-15">
      <div class="layout">
          <z-menu mode="horizontal" theme="dark" active-name="1">
              <div class="layout-logo"></div>
              <div class="layout-nav">
                  <z-menu-item name="1">
                      <z-icon type="ios-navigate"></z-icon>
                      Item 1
                  </z-menu-item>
                  <z-menu-item name="2">
                      <z-icon type="ios-keypad"></z-icon>
                      Item 2
                  </z-menu-item>
                  <z-menu-item name="3">
                      <z-icon type="ios-analytics"></z-icon>
                      Item 3
                  </z-menu-item>
              </div>
          </z-menu>
          <z-menu mode="horizontal" active-name="1">
              <div class="layout-assistant">
                  <z-menu-item name="1">Option 1</z-menu-item>
                  <z-menu-item name="2">Option 2</z-menu-item>
                  <z-menu-item name="3">Option 3</z-menu-item>
              </div>
          </z-menu>
          <div class="layout-breadcrumb">
              <z-breadcrumb>
                  <z-breadcrumb-item href="#">Home</z-breadcrumb-item>
                  <z-breadcrumb-item href="#">Projects</z-breadcrumb-item>
                  <z-breadcrumb-item>zView</z-breadcrumb-item>
              </z-breadcrumb>
          </div>
          <div class="layout-content">
              <div class="layout-content-main">Content</div>
          </div>
          <div class="layout-copy">
              2011-2016 &copy; TalkingData
          </div>
      </div>
      <div class="example-desc">
          <header class="example-header"><span>上中下布局</span></header>
          <div class="example-desc">
              <div>
                  <p>最基本的『上-中-下』布局。</p>
                  <p>一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。
                  </p>
              </div>
          </div>
      </div>
      <div class="m-t-15">
       <z-code-editor :content="demo1"></z-code-editor>
      </div>
    </z-card>
    <z-card bordered dis-hover class="m-t-15">
        <div class="layout">
          <z-menu mode="horizontal" theme="dark" active-name="1">
              <div class="layout-logo"></div>
              <div class="layout-nav">
                  <z-menu-item name="1">
                      <z-icon type="ios-navigate"></z-icon>
                      Item 1
                  </z-menu-item>
                  <z-menu-item name="2">
                      <z-icon type="ios-keypad"></z-icon>
                      Item 2
                  </z-menu-item>
                  <z-menu-item name="3">
                      <z-icon type="ios-analytics"></z-icon>
                      Item 3
                  </z-menu-item>
                  <z-menu-item name="4">
                      <z-icon type="ios-paper"></z-icon>
                      Item 4
                  </z-menu-item>
              </div>
          </z-menu>
          <z-menu mode="horizontal" active-name="1">
              <div class="layout-assistant">
                  <z-menu-item name="1">Option 1</z-menu-item>
                  <z-menu-item name="2">Option 2</z-menu-item>
                  <z-menu-item name="3">Option 3</z-menu-item>
              </div>
          </z-menu>
          <div class="layout-content">
              <z-row>
                  <z-col span="5">
                      <z-menu active-name="1-2" width="auto" :open-names="['1']">
                          <z-submenu name="1">
                              <template slot="title">
                                  <z-icon type="ios-navigate"></z-icon>
                                  Item 1
                              </template>
                              <z-menu-item name="1-1">Option 1</z-menu-item>
                              <z-menu-item name="1-2">Option 2</z-menu-item>
                              <z-menu-item name="1-3">Option 3</z-menu-item>
                          </z-submenu>
                          <z-submenu name="2">
                              <template slot="title">
                                  <z-icon type="ios-keypad"></z-icon>
                                  Item 2
                              </template>
                              <z-menu-item name="2-1">Option 1</z-menu-item>
                              <z-menu-item name="2-2">Option 2</z-menu-item>
                          </z-submenu>
                          <z-submenu name="3">
                              <template slot="title">
                                  <z-icon type="ios-analytics"></z-icon>
                                  Item 3
                              </template>
                              <z-menu-item name="3-1">Option 1</z-menu-item>
                              <z-menu-item name="3-2">Option 2</z-menu-item>
                          </z-submenu>
                      </z-menu>
                  </z-col>
                  <z-col span="19">
                      <div class="layout-content-main">Content</div>
                  </z-col>
              </z-row>
          </div>
          <div class="layout-copy">
              2011-2016 &copy; TalkingData
          </div>
      </div>
      <div class="example-desc">
          <header class="example-header"><span>顶部-侧边布局-通栏 </span></header>
          <div class="example-desc">
              <div>
                  <p>同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。</p>
              </div>
          </div>
      </div>
      <div class="m-t-15">
        <z-code-editor :content="demo2"></z-code-editor>
        </div>
    </z-card>
    <z-card bordered dis-hover class="m-t-15">
        <div class="layout">
          <z-row type="flex">
              <z-col span="5" class="layout-menu-left">
                  <z-menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                      <div class="layout-logo-left"></div>
                      <z-submenu name="1">
                          <template slot="title">
                              <z-icon type="ios-navigate"></z-icon>
                              Item 1
                          </template>
                          <z-menu-item name="1-1">Option 1</z-menu-item>
                          <z-menu-item name="1-2">Option 2</z-menu-item>
                          <z-menu-item name="1-3">Option 3</z-menu-item>
                      </z-submenu>
                      <z-submenu name="2">
                          <template slot="title">
                              <z-icon type="ios-keypad"></z-icon>
                              Item 2
                          </template>
                          <z-menu-item name="2-1">Option 1</z-menu-item>
                          <z-menu-item name="2-2">Option 2</z-menu-item>
                      </z-submenu>
                      <z-submenu name="3">
                          <template slot="title">
                              <z-icon type="ios-analytics"></z-icon>
                              Item 3
                          </template>
                          <z-menu-item name="3-1">Option 1</z-menu-item>
                          <z-menu-item name="3-2">Option 2</z-menu-item>
                      </z-submenu>
                  </z-menu>
              </z-col>
              <z-col span="19">
                  <div class="layout-header"></div>
                  <div class="layout-breadcrumb">
                      <z-breadcrumb>
                          <z-breadcrumb-item href="#">Home</z-breadcrumb-item>
                          <z-breadcrumb-item href="#">Projects</z-breadcrumb-item>
                          <z-breadcrumb-item>zView</z-breadcrumb-item>
                      </z-breadcrumb>
                  </div>
                  <div class="layout-content">
                      <div class="layout-content-main">Content</div>
                  </div>
                  <div class="layout-copy">
                      2011-2016 &copy; TalkingData
                  </div>
              </z-col>
          </z-row>
          </div>
          <div class="example-desc">
              <header class="example-header"><span>侧边布局 </span></header>
              <div>
                  <div>
                      <p>侧边两列式布局。页面横向空间有限时，侧边导航可收起。</p>
                      <p>侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部份。
                      </p>
                  </div>
              </div>
          </div>
      <div class="m-t-15">
        <z-code-editor :content="demo3"></z-code-editor>
      </div>
    </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
          <z-row type="flex">
              <z-col :span="spanLeft" class="layout-menu-left">
                  <z-menu active-name="1" theme="dark" width="auto">
                      <div class="layout-logo-left"></div>
                      <z-menu-item name="1">
                          <z-icon type="ios-navigate" :size="iconSize"></z-icon>
                          <span class="layout-text">Option 1</span>
                      </z-menu-item>
                      <z-menu-item name="2">
                          <z-icon type="ios-keypad" :size="iconSize"></z-icon>
                          <span class="layout-text">Option 2</span>
                      </z-menu-item>
                      <z-menu-item name="3">
                          <z-icon type="ios-analytics" :size="iconSize"></z-icon>
                          <span class="layout-text">Option 3</span>
                      </z-menu-item>
                  </z-menu>
              </z-col>
              <z-col :span="spanRight">
                  <div class="layout-header">
                      <z-button type="text" @click="toggleClick">
                          <z-icon type="navicon" size="32"></z-icon>
                      </z-button>
                  </div>
                  <div class="layout-breadcrumb">
                      <z-breadcrumb>
                          <z-breadcrumb-item href="#">Index</z-breadcrumb-item>
                          <z-breadcrumb-item href="#">Apps</z-breadcrumb-item>
                          <z-breadcrumb-item>App</z-breadcrumb-item>
                      </z-breadcrumb>
                  </div>
                  <div class="layout-content">
                      <div class="layout-content-main">Content</div>
                  </div>
                  <div class="layout-copy">
                      2011-2016 &copy; TalkingData
                  </div>
              </z-col>
          </z-row>

      </div>
      <div class="example-desc">
          <header class="example-header"><span>自定义触发器</span></header>
          <div>
              <div>
                  <p>要使用自定义触发器，可以设置hide-trigger属性来隐藏默认触发器，也可以通过slot替换默认触发器。</p>
              </div>
          </div>
      </div>
      <div class="m-t-15">
        <z-code-editor :content="demo5"></z-code-editor>
      </div>
    </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <div class="demo-api">
        <div class="anchor">
            <h2 id="API">API</h2>
            <div class="anchor">
                <h3 id="Sider_props">Sider props</h3>
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
                            <td>breakpoint</td>
                            <td>触发响应式布局的断点，可选值为<code>xs</code>,<code>sm</code>,<code>md</code>,<code>lg</code>,<code>xl</code>或<code>xxl</code>，若不设此属性则不会触发响应式布局。
                            </td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>侧边栏是否收起，可使用 v-model 双向绑定数据。</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>宽度</td>
                            <td>Number</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td>collapsible</td>
                            <td>是否可收起，设为<code>false</code>后，默认触发器会隐藏，且响应式布局不会触发</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>collapsed-width</td>
                            <td>收缩宽度，设置为 0 会出现特殊 trigger</td>
                            <td>Number</td>
                            <td>64</td>
                        </tr>
                        <tr>
                            <td>hide-trigger</td>
                            <td>隐藏默认触发器</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>default-collapsed</td>
                            <td>是否默认收起，设置了<code>collapsible</code>后设置此属性侧边栏仍会收起。</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>reverse-arrow</td>
                            <td>改变侧边栏触发器箭头方向，和改变侧边栏收起方向，当Sider在右边时可以使用。</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <div class="anchor">
                    <h3 id="Sider_events">Sider events</h3>
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
                                <td>on-collapse</td>
                                <td>展开-收起时的回调</td>
                                <td>true / false</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="anchor">
                        <h3 id="Sider_slot">Sider slot</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>名称</th>
                                    <th>说明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>trigger</td>
                                    <td>自定义触发器</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="anchor">
                            <h3 id="Sider_methods">Sider methods</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>方法名</th>
                                        <th>说明</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>toggleCollapse</td>
                                        <td>改变Sider展开-收起状态。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </z-card>
  </div>
</template>

<script>
export default {
  name: 'cpLayout',
  data: function () {
    return {
      spanLeft: 5,
      spanRight: 19,
      isCollapsed: false,
      demo1: '<div class="layout">\r' +
                '    <z-menu mode="horizontal" theme="dark" active-name="1">\r' +
                '        <div class="layout-logo"></div>\r' +
                '        <div class="layout-nav">\r' +
                '            <z-menu-item name="1">\r' +
                '                <z-icon type="ios-navigate"></z-icon>\r' +
                '                Item 1\r' +
                '            </z-menu-item>\r' +
                '            <z-menu-item name="2">\r' +
                '                <z-icon type="ios-keypad"></z-icon>\r' +
                '                Item 2\r' +
                '            </z-menu-item>\r' +
                '            <z-menu-item name="3">\r' +
                '                <z-icon type="ios-analytics"></z-icon>\r' +
                '                Item 3\r' +
                '            </z-menu-item>\r' +
                '        </div>\r' +
                '    </z-menu>\r' +
                '    <z-menu mode="horizontal" active-name="1">\r' +
                '        <div class="layout-assistant">\r' +
                '            <z-menu-item name="1">Option 1</z-menu-item>\r' +
                '            <z-menu-item name="2">Option 2</z-menu-item>\r' +
                '            <z-menu-item name="3">Option 3</z-menu-item>\r' +
                '       </div>\r' +
                '    </z-menu>\r' +
                '    <div class="layout-breadcrumb">\r' +
                '        <z-breadcrumb>\r' +
                '            <z-breadcrumb-item href="#">Home</z-breadcrumb-item>\r' +
                '            <z-breadcrumb-item href="#">Projects</z-breadcrumb-item>\r' +
                '            <z-breadcrumb-item>zView</z-breadcrumb-item>\r' +
                '        </z-breadcrumb>\r' +
                '    </div>\r' +
                '    <div class="layout-content">\r' +
                '        <div class="layout-content-main">Content</div>\r' +
                '    </div>\r' +
                '   <div class="layout-copy">\r' +
                '        2011-2016 &copy; TalkingData\r' +
                '    </div>\r' +
                '</div>\r',
      demo2: '<div class="layout">\r' +
                '<z-menu mode="horizontal" theme="dark" active-name="1">\r' +
                '    <div class="layout-logo"></div>\r' +
                '    <div class="layout-nav">\r' +
                '        <z-menu-item name="1">\r' +
                '            <z-icon type="ios-navigate"></z-icon>\r' +
                '            Item 1\r' +
                '        </z-menu-item>\r' +
                '        <z-menu-item name="2">\r' +
                '            <z-icon type="ios-keypad"></z-icon>\r' +
                '            Item 2\r' +
                '        </z-menu-item>\r' +
                '        <z-menu-item name="3">\r' +
                '            <z-icon type="ios-analytics"></z-icon>\r' +
                '            Item 3\r' +
                '        </z-menu-item>\r' +
                '        <z-menu-item name="4">\r' +
                '            <z-icon type="ios-paper"></z-icon>\r' +
                '            Item 4\r' +
                '        </z-menu-item>\r' +
                '    </div>\r' +
                '</z-menu>\r' +
                '<z-menu mode="horizontal" active-name="1">\r' +
                '    <div class="layout-assistant">\r' +
                '        <z-menu-item name="1">Option 1</z-menu-item>\r' +
                '        <z-menu-item name="2">Option 2</z-menu-item>\r' +
                '        <z-menu-item name="3">Option 3</z-menu-item>\r' +
                '    </div>\r' +
                '</z-menu>\r' +
                '<div class="layout-content">\r' +
                '    <z-row>\r' +
                '        <z-col span="5">\r' +
                '            <z-menu active-name="1-2" width="auto" :open-names="[\'1\']">\r' +
                '                <z-submenu name="1">\r' +
                '                    <template slot="title">\r' +
                '                        <z-icon type="ios-navigate"></z-icon>\r' +
                '                        Item 1\r' +
                '                    </template>\r' +
                '                    <z-menu-item name="1-1">Option 1</z-menu-item>\r' +
                '                    <z-menu-item name="1-2">Option 2</z-menu-item>\r' +
                '                    <z-menu-item name="1-3">Option 3</z-menu-item>\r' +
                '                </z-submenu>\r' +
                '                <z-submenu name="2">\r' +
                '                    <template slot="title">\r' +
                '                        <z-icon type="ios-keypad"></z-icon>\r' +
                '                        Item 2\r' +
                '                    </template>\r' +
                '                    <z-menu-item name="2-1">Option 1</z-menu-item>\r' +
                '                    <z-menu-item name="2-2">Option 2</z-menu-item>\r' +
                '                </z-submenu>\r' +
                '                <z-submenu name="3">\r' +
                '                    <template slot="title">\r' +
                '                        <z-icon type="ios-analytics"></z-icon>\r' +
                '                        Item 3\r' +
                '                    </template>\r' +
                '                    <z-menu-item name="3-1">Option 1</z-menu-item>\r' +
                '                    <z-menu-item name="3-2">Option 2</z-menu-item>\r' +
                '                </z-submenu>\r' +
                '            </z-menu>\r' +
                '        </z-col>\r' +
                '        <z-col span="19">\r' +
                '            <div class="layout-content-main">Content</div>\r' +
                '        </z-col>\r' +
                '    </z-row>\r' +
                '</div>\r' +
                '<div class="layout-copy">\r' +
                '    2011-2016 &copy; TalkingData\r' +
                '</div>\r' +
                '</div>\r',
      demo3: '<div class="layout">\r' +
                '    <z-row type="flex">\r' +
                '        <z-col span="5" class="layout-menu-left">\r' +
                '        <z-menu active-name="1-2" theme="dark" width="auto" :open-names="[\'1\']">\r' +
                '            <div class="layout-logo-left"></div>\r' +
                '            <z-submenu name="1">\r' +
                '                <template slot="title">\r' +
                '                    <z-icon type="ios-navigate"></z-icon>\r' +
                '                    Item 1\r' +
                '                </template>\r' +
                '                <z-menu-item name="1-1">Option 1</z-menu-item>\r' +
                '                <z-menu-item name="1-2">Option 2</z-menu-item>\r' +
                '                <z-menu-item name="1-3">Option 3</z-menu-item>\r' +
                '            </z-submenu>\r' +
                '            <z-submenu name="2">\r' +
                '                <template slot="title">\r' +
                '                   <z-icon type="ios-keypad"></z-icon>\r' +
                '                    Item 2\r' +
                '                </template>\r' +
                '                <z-menu-item name="2-1">Option 1</z-menu-item>\r' +
                '                <z-menu-item name="2-2">Option 2</z-menu-item>\r' +
                '            </z-submenu>\r' +
                '            <z-submenu name="3">\r' +
                '                <template slot="title">\r' +
                '                    <z-icon type="ios-analytics"></z-icon>\r' +
                '                    Item 3\r' +
                '               </template>\r' +
                '                <z-menu-item name="3-1">Option 1</z-menu-item>\r' +
                '                <z-menu-item name="3-2">Option 2</z-menu-item>\r' +
                '            </z-submenu>\r' +
                '        </z-menu>\r' +
                '        </z-col>\r' +
                '        <z-col span="19">\r' +
                '        <div class="layout-header"></div>\r' +
                '        <div class="layout-breadcrumb">\r' +
                '            <z-breadcrumb>\r' +
                '                <z-breadcrumb-item href="#">Home</z-breadcrumb-item>\r' +
                '                <z-breadcrumb-item  href="#">Projects</z-breadcrumb-item >\r' +
                '                <z-breadcrumb-item >zView</z-breadcrumb-item >\r' +
                '            </z-breadcrumb>\r' +
                '        </div>\r' +
                '        <div class="layout-content">\r' +
                '            <div class="layout-content-main">Content</div>\r' +
                '        </div>\r' +
                '        <div class="layout-copy">\r' +
                '            2011-2016 &copy; TalkingData\r' +
                '        </div>\r' +
                '        </z-col>\r' +
                '    </z-row>\r' +
                '</div>\r',
      demo4: '<div class="layout">\r' +
                '    <div class="layout-ceiling">\r' +
                '        <div class="layout-ceiling-main">\r' +
                '            <a href="#">Sign up</a> |\r' +
                '            <a href="#">Help Center</a> |\r' +
                '            <a href="#">Security</a> |\r' +
                '            <a href="#">Service</a>\r' +
                '        </div>\r' +
                '    </div>\r' +
                '    <div class="layout-header">\r' +
                '        <div class="layout-logo"></div>\r' +
                '    </div>\r' +
                '    <div style="height: 200px"></div>\r' +
                '    <div class="layout-copy">\r' +
                '        2011-2016 &copy; TalkingData\r' +
                '    </div>\r' +
                '</div>\r',
      demo5: '<div class="layout" :class="{\'layout-hide-text\': spanLeft < 5}">\r' +
                '    <z-row type="flex">\r' +
                '        <z-col :span="spanLeft" class="layout-menu-left">\r' +
                '            <z-menu active-name="1" theme="dark" width="auto">\r' +
                '                <div class="layout-logo-left"></div>\r' +
                '                <z-menu-item name="1">\r' +
                '                    <z-icon type="ios-navigate" :size="iconSize"></z-icon>\r' +
                '                    <span class="layout-text">Option 1</span>\r' +
                '                </z-menu-item>\r' +
                '                <z-menu-item name="2">\r' +
                '                    <z-icon type="ios-keypad" :size="iconSize"></z-icon>\r' +
                '                    <span class="layout-text">Option 2</span>\r' +
                '                </z-menu-item>\r' +
                '                <z-menu-item name="3">\r' +
                '                    <z-icon type="ios-analytics" :size="iconSize"></z-icon>\r' +
                '                    <span class="layout-text">Option 3</span>\r' +
                '                </z-menu-item>\r' +
                '           </z-menu>\r' +
                '        </z-col>\r' +
                '         <z-col :span="spanRight">\r' +
                '            <div class="layout-header">\r' +
                '                <z-button type="text" @click="toggleClick">\r' +
                '                    <z-icon type="navicon" size="32"></z-icon>\r' +
                '                </z-button>\r' +
                '            </div>\r' +
                '            <div class="layout-breadcrumb">\r' +
                '                <z-breadcrumb>\r' +
                '                    <z-breadcrumb-item href="#">Index</z-breadcrumb-item>\r' +
                '                    <z-breadcrumb-item href="#">Apps</z-breadcrumb-item>\r' +
                '                    <z-breadcrumb-item>App</z-breadcrumb-item>\r' +
                '                </z-breadcrumb>\r' +
                '            </div>\r' +
                '            <div class="layout-content">\r' +
                '               <div class="layout-content-main">Content</div>\r' +
                '            </div>\r' +
                '            <div class="layout-copy">\r' +
                '                2011-2016 &copy; TalkingData\r' +
                '            </div>\r' +
                '        </z-col>\r' +
                '    </z-row>\r' +
                '</div>\r'
    }
  },
  computed: {
    iconSize: function () {
      return this.spanLeft === 5 ? 14 : 24
    }
  },
  methods: {
    toggleClick: function () {
      if (this.spanLeft === 5) {
        this.spanLeft = 2
        this.spanRight = 22
      } else {
        this.spanLeft = 5
        this.spanRight = 19
      }
    },
    menuitemClasses: function () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  }
}
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
}

.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}

.layout-nav {
  width: 420px;
  margin: 0 auto;
}

.layout-assistant {
  width: 400px;
  margin: 0 auto;
  height: inherit;
}

.layout-breadcrumb {
  padding: 10px 15px 0;
}

.layout-content {
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}

.layout-content-main {
  padding: 10px;
}

.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}

.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
}

.layout-menu-left {
  background: #464c5b;
}

.layout-header {
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}

.layout-ceiling {
  background: #464c5b;
  padding: 10px 0;
  overflow: hidden;
}

.layout-ceiling-main {
  float: right;
  margin-right: 15px;
}

.layout-ceiling-main a {
  color: #9ba7b5;
}

.layout-hide-text .layout-text {
  display: none;
}

.zvu-col {
  transition: width 0.2s ease-in-out;
}

.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.layout-footer-center {
  text-align: center;
}
</style>
