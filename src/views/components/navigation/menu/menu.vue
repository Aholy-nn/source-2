<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-06 15:57:32
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
     <div style="background: #eaf4fe;border-radius: 5px;padding: 10px 15px">!注意：非 template/render 模式下，需使用
                        z-menu。</div>
    <z-row :gutter="15">
      <z-col span="12">
         <z-menu mode="horizontal" :theme="theme1" active-name="1">
            <z-menu-item name="1">
                <z-icon type="ios-paper"></z-icon>
                内容管理
            </z-menu-item>
            <z-menu-item name="2">
                <z-icon type="ios-people"></z-icon>
                用户管理
            </z-menu-item>
            <z-submenu name="3">
                <template slot="title">
                    <z-icon type="stats-bars"></z-icon>
                    统计分析
                </template>
                <z-menu-group title="使用">
                    <z-menu-item name="3-1">新增和启动</z-menu-item>
                    <z-menu-item name="3-2">活跃分析</z-menu-item>
                    <z-menu-item name="3-3">时段分析</z-menu-item>
                </z-menu-group>
                <z-menu-group title="留存">
                    <z-menu-item name="3-4">用户留存</z-menu-item>
                    <z-menu-item name="3-5">流失用户</z-menu-item>
                </z-menu-group>
            </z-submenu>
            <z-menu-item name="4">
                <z-icon type="settings"></z-icon>
                综合设置
            </z-menu-item>
        </z-menu>
        <br>
        <p>Change theme</p>
        <z-radio-group v-model="theme1">
            <z-radio label="light"></z-radio>
            <z-radio label="dark"></z-radio>
            <z-radio label="primary"></z-radio>
        </z-radio-group>
        <div class="example-desc">
            <header class="example-header"><span>顶部导航</span></header>
            <p>水平的顶部导航菜单。</p>
            <p>通过设置属性 theme 为 light、dark、primary 可以选择主题。</p>
            <p>通过事件 on-select 可以得到点击菜单的 name 值，从而控制页面路由或自定义操作。</p>
        </div>
      </z-col>
      <z-col span="12">
          <z-code-editor :content="demo1"></z-code-editor>
      </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
    <z-row>
      <z-col span="8">
          <z-menu :theme="theme2">
              <z-submenu name="1">
                  <template slot="title">
                      <z-icon type="ios-paper"></z-icon>
                      内容管理
                  </template>
                  <z-menu-item name="1-1">文章管理</z-menu-item>
                  <z-menu-item name="1-2">评论管理</z-menu-item>
                  <z-menu-item name="1-3">举报管理</z-menu-item>
              </z-submenu>
              <z-submenu name="2">
                  <template slot="title">
                      <z-icon type="ios-people"></z-icon>
                      用户管理
                  </template>
                  <z-menu-item name="2-1">新增用户</z-menu-item>
                  <z-menu-item name="2-2">活跃用户</z-menu-item>
              </z-submenu>
              <z-submenu name="3">
                  <template slot="title">
                      <z-icon type="stats-bars"></z-icon>
                      统计分析
                  </template>
                  <z-menu-group title="使用">
                      <z-menu-item name="3-1">新增和启动</z-menu-item>
                      <z-menu-item name="3-2">活跃分析</z-menu-item>
                      <z-menu-item name="3-3">时段分析</z-menu-item>
                  </z-menu-group>
                  <z-menu-group title="留存">
                      <z-menu-item name="3-4">用户留存</z-menu-item>
                      <z-menu-item name="3-5">流失用户</z-menu-item>
                  </z-menu-group>
              </z-submenu>
          </z-menu>
      </z-col>
      <z-col span="8">
          <z-menu :theme="theme2" active-name="1-2" :open-names="['1']">
              <z-submenu name="1">
                  <template slot="title">
                      <z-icon type="ios-paper"></z-icon>
                      内容管理
                  </template>
                  <z-menu-item name="1-1">文章管理</z-menu-item>
                  <z-menu-item name="1-2">评论管理</z-menu-item>
                  <z-menu-item name="1-3">举报管理</z-menu-item>
              </z-submenu>
              <z-submenu name="2">
                  <template slot="title">
                      <z-icon type="ios-people"></z-icon>
                      用户管理
                  </template>
                  <z-menu-item name="2-1">新增用户</z-menu-item>
                  <z-menu-item name="2-2">活跃用户</z-menu-item>
              </z-submenu>
              <z-submenu name="3">
                  <template slot="title">
                      <z-icon type="stats-bars"></z-icon>
                      统计分析
                  </template>
                  <z-menu-group title="使用">
                      <z-menu-item name="3-1">新增和启动</z-menu-item>
                      <z-menu-item name="3-2">活跃分析</z-menu-item>
                      <z-menu-item name="3-3">时段分析</z-menu-item>
                  </z-menu-group>
                  <z-menu-group title="留存">
                      <z-menu-item name="3-4">用户留存</z-menu-item>
                      <z-menu-item name="3-5">流失用户</z-menu-item>
                  </z-menu-group>
              </z-submenu>
          </z-menu>
      </z-col>
      <z-col span="8">
          <z-menu :theme="theme2" :open-names="['1']" accordion>
              <z-submenu name="1">
                  <template slot="title">
                      <z-icon type="ios-paper"></z-icon>
                      内容管理
                  </template>
                  <z-menu-item name="1-1">文章管理</z-menu-item>
                  <z-menu-item name="1-2">评论管理</z-menu-item>
                  <z-menu-item name="1-3">举报管理</z-menu-item>
              </z-submenu>
              <z-submenu name="2">
                  <template slot="title">
                      <z-icon type="ios-people"></z-icon>
                      用户管理
                  </template>
                  <z-menu-item name="2-1">新增用户</z-menu-item>
                  <z-menu-item name="2-2">活跃用户</z-menu-item>
              </z-submenu>
              <z-submenu name="3">
                  <template slot="title">
                      <z-icon type="stats-bars"></z-icon>
                      统计分析
                  </template>
                  <z-menu-group title="使用">
                      <z-menu-item name="3-1">新增和启动</z-menu-item>
                      <z-menu-item name="3-2">活跃分析</z-menu-item>
                      <z-menu-item name="3-3">时段分析</z-menu-item>
                  </z-menu-group>
                  <z-menu-group title="留存">
                      <z-menu-item name="3-4">用户留存</z-menu-item>
                      <z-menu-item name="3-5">流失用户</z-menu-item>
                  </z-menu-group>
              </z-submenu>
          </z-menu>
      </z-col>
    </z-row>
    <br>
    <p>Change theme</p>
    <z-radio-group v-model="theme2">
      <z-radio label="light"></z-radio>
      <z-radio label="dark"></z-radio>
    </z-radio-group>
    <div class="example-desc">
      <header class="example-header"><span>侧栏导航</span></header>
      <p>垂直导航菜单，可以内嵌子菜单。</p>
      <p>设置 active-name 可以选中指定的菜单，设置 open-names 可以展开指定的子菜单。</p>
      <p>设置属性 accordion 可以开启手风琴模式，每次只能展开一个子菜单。</p>
      <p>通过设置属性 theme 为 light、dark 可以选择主题，侧栏菜单不支持 primary 主题。</p>
    </div>
    <div class="m-t-15">
      <z-code-editor :content="demo2"></z-code-editor>
    </div>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
    <z-row :gutter="15">
      <z-col span="12">
         <z-menu :theme="theme3" active-name="1">
            <z-menu-group title="内容管理">
                <z-menu-item name="1">
                    <z-icon type="document-text"></z-icon>
                    文章管理
                </z-menu-item>
                <z-menu-item name="2">
                    <z-icon type="chatbubbles"></z-icon>
                    评论管理
                </z-menu-item>
            </z-menu-group>
            <z-menu-group title="统计分析">
                <z-menu-item name="3">
                    <z-icon type="heart"></z-icon>
                    用户留存
                </z-menu-item>
                <z-menu-item name="4">
                    <z-icon type="heart-broken"></z-icon>
                    流失用户
                </z-menu-item>
            </z-menu-group>
        </z-menu>
        <br>
        <p>Change theme</p>
        <z-radio-group v-model="theme3">
            <z-radio label="light"></z-radio>
            <z-radio label="dark"></z-radio>
        </z-radio-group>
        <div class="example-desc">
            <header class="example-header"><span>分组</span></header>
            <p>使用 z-menu-group 组件进行分组，注意：</p>
            <ul style="list-style: disc">
                <li>z-menu-group 只能用在 Menu 和 z-submenu 内。</li>
                <li>z-submenu 只能用在 Menu 内，不能用在 z-menu-group 和 z-menu-item 内。</li>
            </ul>
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
          <h2>Api</h2>
      </div>
      <div class="anchor">
          <h3>Menu props</h3>
      </div>
      <table class="table">
          <thead>
              <tr style="border-bottom: 1px solid #e5e5e5;background: #eee;">
                  <td style="padding: 10px 20px">属性</td>
                  <td style="padding: 10px 20px">说明</td>
                  <td style="padding: 10px 20px">类型</td>
                  <td style="padding: 10px 20px">默认值</td>
              </tr>
          </thead>
          <tbody>
              <tr style="border-bottom: 1px solid #e5e5e5" v-for="(tableName,index) in tableData" :key="index">
                  <td style="padding: 10px 20px">{{tableName.attribute}}</td>
                  <td style="padding: 10px 20px">{{tableName.explain}}</td>
                  <td style="padding: 10px 20px">{{tableName.type}}</td>
                  <td style="padding: 10px 20px">{{tableName.default}}</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3>Menu events</h3>
      </div>
      <table class="table">
          <thead>
              <tr style="border-bottom: 1px solid #e5e5e5;background: #eee;">
                  <td style="padding: 10px 20px">事件名</td>
                  <td style="padding: 10px 20px">说明</td>
                  <td style="padding: 10px 20px">返回值</td>
              </tr>
          </thead>
          <tbody>
              <tr style="border-bottom: 1px solid #e5e5e5" v-for="(eventName,index) in eventData" :key="index">
                  <td style="padding: 10px 20px">{{eventName.name}}</td>
                  <td style="padding: 10px 20px">{{eventName.explain}}</td>
                  <td style="padding: 10px 20px">{{eventName.back}}</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3>Menu methods</h3>
      </div>
      <table class="table">
          <thead>
              <tr style="border-bottom: 1px solid #e5e5e5;background: #eee;">
                  <td style="padding: 10px 20px">方法名</td>
                  <td style="padding: 10px 20px">说明</td>
                  <td style="padding: 10px 20px"> 参数</td>
              </tr>
          </thead>
          <tbody>
              <tr style="border-bottom: 1px solid #e5e5e5">
                  <td style="padding: 10px 20px">updateOpened</td>
                  <td style="padding: 10px 20px">手动更新展开的子目录，注意要在 $nextTick 里调用</td>
                  <td style="padding: 10px 20px">无</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e5e5">
                  <td style="padding: 10px 20px">updateActiveName</td>
                  <td style="padding: 10px 20px">手动更新当前选择项，注意要在 $nextTick 里调用</td>
                  <td style="padding: 10px 20px">无</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3>z-menu-item props</h3>
      </div>
      <table class="table">
          <thead>
              <tr style="border-bottom: 1px solid #e5e5e5;background: #eee;">
                  <td style="padding: 10px 20px">属性</td>
                  <td style="padding: 10px 20px">说明</td>
                  <td style="padding: 10px 20px">类型</td>
                  <td style="padding: 10px 20px">默认值</td>
              </tr>
          </thead>
          <tbody>
              <tr style="border-bottom: 1px solid #e5e5e5">
                  <td style="padding: 10px 20px">name</td>
                  <td style="padding: 10px 20px">菜单项的唯一标识，必填</td>
                  <td style="padding: 10px 20px">String | Number</td>
                  <td style="padding: 10px 20px">-</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3>z-submenu props</h3>
      </div>
      <table class="table">
          <thead>
              <tr style="border-bottom: 1px solid #e5e5e5;background: #eee;">
                  <td style="padding: 10px 20px">属性</td>
                  <td style="padding: 10px 20px">说明</td>
                  <td style="padding: 10px 20px">类型</td>
                  <td style="padding: 10px 20px">默认值</td>
              </tr>
          </thead>
          <tbody>
              <tr style="border-bottom: 1px solid #e5e5e5">
                  <td style="padding: 10px 20px">name</td>
                  <td style="padding: 10px 20px">子菜单的唯一标识，必填</td>
                  <td style="padding: 10px 20px">String | Number</td>
                  <td style="padding: 10px 20px">-</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3>z-submenu props</h3>
      </div>
      <table class="table">
          <thead>
              <tr style="border-bottom: 1px solid #e5e5e5;background: #eee;">
                  <td style="padding: 10px 20px">名称</td>
                  <td style="padding: 10px 20px">说明</td>
              </tr>
          </thead>
          <tbody>
              <tr style="border-bottom: 1px solid #e5e5e5">
                  <td style="padding: 10px 20px">无</td>
                  <td style="padding: 10px 20px">菜单项</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e5e5">
                  <td style="padding: 10px 20px">title</td>
                  <td style="padding: 10px 20px">子菜单标题</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3>MenuGroup props</h3>
      </div>
      <table class="table">
          <thead>
              <tr style="border-bottom: 1px solid #e5e5e5;background: #eee;">
                  <td style="padding: 10px 20px">属性</td>
                  <td style="padding: 10px 20px">说明</td>
                  <td style="padding: 10px 20px">类型</td>
                  <td style="padding: 10px 20px">默认值</td>
              </tr>
          </thead>
          <tbody>
              <tr style="border-bottom: 1px solid #e5e5e5">
                  <td style="padding: 10px 20px">title</td>
                  <td style="padding: 10px 20px">分组标题</td>
                  <td style="padding: 10px 20px">String</td>
                  <td style="padding: 10px 20px">空</td>
              </tr>
          </tbody>
      </table>
  </div>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpMenu',
  data: function () {
    return {
      theme1: 'light',
      theme2: 'light',
      theme3: 'light',
      tableData: [
        {attribute: 'mode', explain: '菜单类型，可选值为 horizontal（水平） 和 vertical（垂直）', type: 'String', default: 'vertical'},
        {attribute: 'theme', explain: "主题，可选值为 light、dark、primary，其中 primary 只适用于 mode='horizontal'", type: 'String', default: 'light'},
        {attribute: 'active-name', explain: '激活菜单的 name 值', type: 'String | Number', default: '-'},
        {attribute: 'open-names', explain: '展开的 z-submenu 的 name 集合', type: 'Array', default: '[ ]'},
        {attribute: 'accordion', explain: '是否开启手风琴模式，开启后每次至多展开一个子菜单', type: 'Boolean', default: 'false'},
        {attribute: 'width', explain: "导航菜单的宽度，只在 mode='vertical' 时有效，如果使用 Col 等布局，建议设置为 auto", type: 'String', default: '240px'}
      ],
      eventData: [
        {name: 'on-select', explain: '选择菜单（MenuItem）时触发', back: 'name'},
        {name: 'on-open-change', explain: '当 展开/收起 子菜单时触发', back: '当前展开的 z-submenu 的 name 值数组'}
      ],
      demo1: '<z-menu mode="horizontal" :theme="theme1" active-name="1">\r' +
              '    <z-menu-item name="1">\r' +
              '        <z-icon type="ios-paper"></z-icon>\r' +
              '        内容管理\r' +
              '    </z-menu-item>\r' +
              '    <z-menu-item name="2">\r' +
              '        <z-icon type="ios-people"></z-icon>\r' +
              '        用户管理\r' +
              '   </z-menu-item>\r' +
              '   <z-submenu name="3">\r' +
              '        <div slot="title">\r' +
              '            <z-icon type="stats-bars"></z-icon>\r' +
              '           统计分析\r' +
              '        </div>\r' +
              '        <z-menu-group title="使用">\r' +
              '           <z-menu-item name="3-1">新增和启动</z-menu-item>\r' +
              '            <z-menu-item name="3-2">活跃分析</z-menu-item>\r' +
              '            <z-menu-item name="3-3">时段分析</z-menu-item>\r' +
              '       </z-menu-group>\r' +
              '       <z-menu-group title="留存">\r' +
              '            <z-menu-item name="3-4">用户留存</z-menu-item>\r' +
              '           <z-menu-item name="3-5">流失用户</z-menu-item>\r' +
              '       </z-menu-group>\r' +
              '    </z-submenu>\r' +
              '   <z-menu-item name="4">\r' +
              '        <z-icon type="settings"></z-icon>\r' +
              '        综合设置\r' +
              '    </z-menu-item>\r' +
              '</z-menu>\r' +
              '<br>\r' +
              '<p>Change theme</p>\r' +
              '<z-radio-group v-model="theme1">\r' +
              '    <z-radio label="light"></z-radio>\r' +
              '    <z-radio label="dark"></z-radio>\r' +
              '    <z-radio label="primary"></z-radio>\r' +
              '</z-radio-group>\r' +
              'export default{\r' +
              '     data:function() {\r' +
              '        return {\r' +
              '            theme1: \'light\'\r' +
              '        }\r' +
              '    }\r' +
              '}\r',
      demo2: '   <z-row>\r' +
              '   <z-col span="8">\r' +
              '        <z-menu :theme="theme2">\r' +
              '            <z-submenu name="1">\r' +
              '                <template slot="title">\r' +
              '                    <z-icon type="ios-paper"></z-icon>\r' +
              '                    内容管理\r' +
              '               </template>\r' +
              '                <z-menu-item name="1-1">文章管理</z-menu-item>\r' +
              '               <z-menu-item name="1-2">评论管理</z-menu-item>\r' +
              '               <z-menu-item name="1-3">举报管理</z-menu-item>\r' +
              '            </z-submenu>\r' +
              '            <z-submenu name="2">\r' +
              '               <template slot="title">\r' +
              '                    <z-icon type="ios-people"></z-icon>\r' +
              '                    用户管理\r' +
              '                </template>\r' +
              '               <z-menu-item name="2-1">新增用户</z-menu-item>\r' +
              '                <z-menu-item name="2-2">活跃用户</z-menu-item>\r' +
              '            </z-submenu>\r' +
              '            <z-submenu name="3">\r' +
              '                <template slot="title">\r' +
              '                   <z-icon type="stats-bars"></z-icon>\r' +
              '                    统计分析\r' +
              '                </template>\r' +
              '                <z-menu-group title="使用">\r' +
              '                    <z-menu-item name="3-1">新增和启动</z-menu-item>\r' +
              '                   <z-menu-item name="3-2">活跃分析</z-menu-item>\r' +
              '                   <z-menu-item name="3-3">时段分析</z-menu-item>\r' +
              '                </z-menu-group>\r' +
              '               <z-menu-group title="留存">\r' +
              '                    <z-menu-item name="3-4">用户留存</z-menu-item>\r' +
              '                    <z-menu-item name="3-5">流失用户</z-menu-item>\r' +
              '               </z-menu-group>\r' +
              '           </z-submenu>\r' +
              '        </z-menu>\r' +
              '    </z-col>\r' +
              '    <z-col span="8">\r' +
              '       <z-menu :theme="theme2" active-name="1-2" :open-names="[\'1\']">\r' +
              '            <z-submenu name="1">\r' +
              '                <template slot="title">\r' +
              '                    <z-icon type="ios-paper"></z-icon>\r' +
              '                    内容管理\r' +
              '               </template>\r' +
              '                <z-menu-item name="1-1">文章管理</z-menu-item>\r' +
              '                <z-menu-item name="1-2">评论管理</z-menu-item>\r' +
              '               <z-menu-item name="1-3">举报管理</z-menu-item>\r' +
              '            </z-submenu>\r' +
              '            <z-submenu name="2">\r' +
              '                <template slot="title">\r' +
              '                    <z-icon type="ios-people"></z-icon>\r' +
              '                    用户管理\r' +
              '                </template>\r' +
              '                <z-menu-item name="2-1">新增用户</z-menu-item>\r' +
              '               <z-menu-item name="2-2">活跃用户</z-menu-item>\r' +
              '            </z-submenu>\r' +
              '           <z-submenu name="3">\r' +
              '               <template slot="title">\r' +
              '                    <z-icon type="stats-bars"></z-icon>\r' +
              '                    统计分析\r' +
              '                </template>\r' +
              '                <z-menu-group title="使用">\r' +
              '                   <z-menu-item name="3-1">新增和启动</z-menu-item>\r' +
              '                    <z-menu-item name="3-2">活跃分析</z-menu-item>\r' +
              '                    <z-menu-item name="3-3">时段分析</z-menu-item>\r' +
              '                </z-menu-group>\r' +
              '                <z-menu-group title="留存">\r' +
              '                    <z-menu-item name="3-4">用户留存</z-menu-item>\r' +
              '                    <z-menu-item name="3-5">流失用户</z-menu-item>\r' +
              '                </z-menu-group>\r' +
              '            </z-submenu>\r' +
              '        </z-menu>\r' +
              '    </z-col>\r' +
              '    <z-col span="8">\r' +
              '        <z-menu :theme="theme2" :open-names="[\'1\']" accordion>\r' +
              '            <z-submenu name="1">\r' +
              '                <template slot="title">\r' +
              '                    <z-icon type="ios-paper"></z-icon>\r' +
              '                    内容管理\r' +
              '                </template>\r' +
              '                <z-menu-item name="1-1">文章管理</z-menu-item>\r' +
              '                <z-menu-item name="1-2">评论管理</z-menu-item>\r' +
              '                <z-menu-item name="1-3">举报管理</z-menu-item>\r' +
              '            </z-submenu>\r' +
              '            <z-submenu name="2">\r' +
              '                <template slot="title">\r' +
              '                    <z-icon type="ios-people"></z-icon>\r' +
              '                   用户管理\r' +
              '                </template>\r' +
              '                <z-menu-item name="2-1">新增用户</z-menu-item>\r' +
              '                <z-menu-item name="2-2">活跃用户</z-menu-item>\r' +
              '            </z-submenu>\r' +
              '             <z-submenu name="3">\r' +
              '               <template slot="title">\r' +
              '                    <z-icon type="stats-bars"></z-icon>\r' +
              '                    统计分析\r' +
              '                </template>\r' +
              '                <z-menu-group title="使用">\r' +
              '                    <z-menu-item name="3-1">新增和启动</z-menu-item>\r' +
              '                    <z-menu-item name="3-2">活跃分析</z-menu-item>\r' +
              '                    <z-menu-item name="3-3">时段分析</z-menu-item>\r' +
              '                </z-menu-group>\r' +
              '               <z-menu-group title="留存">\r' +
              '                    <z-menu-item name="3-4">用户留存</z-menu-item>\r' +
              '                    <z-menu-item name="3-5">流失用户</z-menu-item>\r' +
              '                </z-menu-group>\r' +
              '            </z-submenu>\r' +
              '        </z-menu>\r' +
              '    </z-col>\r' +
              '</z-row>\r' +
              '<br>\r' +
              '<p>Change theme</p>\r' +
              '<z-radio-group v-model="theme2">\r' +
              '    <z-radio label="light"></z-radio>\r' +
              '    <z-radio label="dark"></z-radio>\r' +
              '</z-radio-group>\r' +
              'export default{\r' +
              '    data:function() {\r' +
              '        return {\r' +
              '            theme2: \'light\'\r' +
              '        }\r' +
              '    }\r' +
              '}\r',
      demo3: '<z-menu :theme="theme3" active-name="1">\r' +
              '    <z-menu-group title="内容管理">\r' +
              '        <z-menu-item name="1">\r' +
              '            <z-icon type="document-text"></z-icon>\r' +
              '            文章管理\r' +
              '        </z-menu-item>\r' +
              '        <z-menu-item name="2">\r' +
              '           <z-icon type="chatbubbles"></z-icon>\r' +
              '            评论管理\r' +
              '        </z-menu-item>\r' +
              '    </z-menu-group>\r' +
              '    <z-menu-group title="统计分析">\r' +
              '        <z-menu-item name="3">\r' +
              '            <z-icon type="heart"></z-icon>\r' +
              '            用户留存\r' +
              '        </z-menu-item>\r' +
              '        <z-menu-item name="4">\r' +
              '            <z-icon type="heart-broken"></z-icon>\r' +
              '            流失用户\r' +
              '        </z-menu-item>\r' +
              '    </z-menu-group>\r' +
              '</z-menu>\r' +
              '<br>\r' +
              ' <p>Change theme</p>\r' +
              '<z-radio-group v-model="theme3">\r' +
              '    <z-radio label="light"></z-radio>\r' +
              '    <z-radio label="dark"></z-radio>\r' +
              '</z-radio-group>\r' +
              'export default{\r' +
              '    data:function() {\r' +
              '        return {\r' +
              '            theme3: \'light\'\r' +
              '        }\r' +
              '    }\r' +
              '}\r'
    }
  }
}
</script>
<style scoped>
</style>
