<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-08 11:23:24
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <p>值：{{value0}}</p>
            <p>
                <z-switch v-model="toggleOnSelect0">点击内容折叠内容</z-switch>
            </p>
            <p>
                <z-button @click="expandAll0">全部展开</z-button>
                <z-button @click="foldAll0">全部收起</z-button>
                <z-button @click="updateSelect0">设置选中值</z-button>
                <z-button @click="getSelect0">获得选中值</z-button>
            </p>
            <z-vtree :option="param0" ref="demo0" :toggleOnSelect="toggleOnSelect0" v-model="value0"
                @open="open0" @select="select0" @choose="choose0" is-right-menu :right-menu="rightMenu"></z-vtree>
            <div class="example-desc">
                <header class="example-header"><span>例一，基本调用</span></header>
                <p>在传递的param参数中，定义基本的数据字段：keyName, parentName, titleName。</p>
                <p>设定数据模式：dataMode, 当传递的数据为有key,parent字段的list，则传递list，组件会根据key,parent字段自动计算树模型(parent可以是数组对应)，如果传递的数据本身就是树模型，则传递tree。</p>
            </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo0"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <p>值：{{value1}}</p>
            <p>
                <z-button @click="updateChoose1">设置checkbox选中值</z-button>
                <z-button @click="getChoose1">获得checkbox选中值</z-button>
                <z-button @click="getFullChoose1">获得所有checkbox选中值</z-button>
                <z-button @click="chooseAll1">选中所有值</z-button>
            </p>
            <z-vtree :option="param1" ref="demo1" v-model="value1" :multiple="true" choose-mode="all"
                @choose="choose1"></z-vtree>
            <div class="example-desc">
                <header class="example-header"><span>例二，多选，选择模式为ALL</span></header>
                <p>chooseMode: all, 只有子集全选的时候，才会选中父级，如果父级选择，返回数据则只返回父级，子集不返回。</p>
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
          <p>{{value2}}</p>
          <p>
              <z-button @click="updateChoose2">设置checkbox选中值</z-button>
              <z-button @click="getChoose2">获得checkbox选中值</z-button>
              <z-button @click="getFullChoose2">获得所有checkbox选中值</z-button>
              <z-button @click="chooseAll2">选中所有值</z-button>
          </p>
          <z-vtree :option="param2" ref="demo2" :multiple="true" v-model="value2" choose-mode="some">
          </z-vtree>
          <div class="example-desc">
              <header class="example-header"><span>例三，多选，选择模式为SOME</span></header>
              <p>chooseMode: some, 只要子集选中，父级即选中，返回数据为所有选中数据。</p>
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
           <p>{{value3}}</p>
            <p>
                <z-button @click="updateChoose3">设置checkbox选中值</z-button>
                <z-button @click="getChoose3">获得checkbox选中值</z-button>
                <z-button @click="getFullChoose3">获得所有checkbox选中值</z-button>
                <z-button @click="chooseAll3">选中所有值</z-button>
            </p>
            <z-vtree :option="param3" ref="demo3" :multiple="true" v-model="value3"
                choose-mode="independent"></z-vtree>
            <div class="example-desc">
                <header class="example-header"><span>例四，多选，选择模式为INDEPENDENT</span></header>
                <div>independent, 父级子级的选择不相关，最终中返回已选择的数据。</div>
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
           <z-vtree :option="param4" ref="demo4" :filterable="true"></z-vtree>
            <div class="example-desc">
                <header class="example-header"><span>例五，搜索</span></header>
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
           <z-vtree :option="param5" ref="demo5"></z-vtree>
            <div class="example-desc">
                <header class="example-header"><span>例六，分步异步加载</span></header>
                <p>在传递的param参数中，定义字段：getDatas获取异步返回的数据，这里的数据属于每个层级返回。</p>
                <p>分步异步加载不推荐有multiple模式，分步异步加载请尽量使用在单个选择模式下。</p>
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
          <p>
              <z-button @click="refresh6">刷新</z-button>
          </p>
          <z-vtree :option="param6" ref="demo6" @loadDataSuccess="loadDataSuccess6"></z-vtree>
          <div class="example-desc">
              <header class="example-header"><span>例七，全部数据异步加载</span></header>
              <p>在传递的param参数中，定义字段：getTotalDatas获取异步返回的数据，这里的数据属于一次性返回。</p>
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
            <h2>Tree 参数</h2>
        </div>
        <table class="table">
            <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
            </tr>
            <tr>
                <td>chooseMode</td>
                <td>checkbox选择模式</td>
                <td>String</td>
                <td>all, some, independent</td>
                <td>all</td>
            </tr>
            <tr>
                <td>option</td>
                <td>配置项，详细参见下面的option说明</td>
                <td>Object</td>
                <td>-</td>
                <td></td>
            </tr>
            <tr>
                <td>multiple</td>
                <td>多选</td>
                <td>Boolean</td>
                <td>-</td>
                <td>false</td>
            </tr>
            <tr>
                <td>filterable</td>
                <td>是否可以搜索</td>
                <td>Boolean</td>
                <td>-</td>
                <td>false</td>
            </tr>
            <tr>
                <td>config</td>
                <td>使用全局配置的方法</td>
                <td>String</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>toggleOnSelect</td>
                <td>是否在选中文本的时候折叠内容</td>
                <td>Boolean</td>
                <td>-</td>
                <td>false</td>
            </tr>
            <tr>
                <td>is-right-menu</td>
                <td>是否显示右侧菜单</td>
                <td>Boolean</td>
                <td>-</td>
                <td>false</td>
            </tr>
            <tr>
                <td>right-menu</td>
                <td>右侧菜单内容</td>
                <td>Array</td>
                <td>-</td>
                <td> [{
                    text:'菜单1',
                    func:function(){
                      alert(111)
                    }
                  },{
                    text:'菜单2',
                    func:function(){
                      alert(222)
                    }
                  }]</td>
            </tr>
        </table>
        <div class="anchor">
            <h2>Tree 方法</h2>
        </div>
        <table class="table">
            <tr>
                <th>方法</th>
                <th>说明</th>
            </tr>
            <tr>
                <td>updateChoose</td>
                <td>更新选中值(多选)</td>
            </tr>
            <tr>
                <td>getChoose</td>
                <td>获取选中值(多选)</td>
            </tr>
            <tr>
                <td>updateSelect</td>
                <td>更新选中值(单选)</td>
            </tr>
            <tr>
                <td>getSelect</td>
                <td>获取选中值(单选)</td>
            </tr>
            <tr>
                <td>getFullChoose</td>
                <td>获取所有选中的值(多选)</td>
            </tr>
            <tr>
                <td>chooseAll</td>
                <td>选中所有值(多选)</td>
                <td></td>
            </tr>
            <tr>
                <td>expandAll</td>
                <td>打开所有的折叠</td>
                <td></td>
            </tr>
            <tr>
                <td>foldAll</td>
                <td>收起所有的折叠</td>
                <td></td>
            </tr>
            <tr>
                <td>refresh</td>
                <td>刷新数据</td>
                <td></td>
            </tr>
        </table>
        <div class="anchor">
            <h2>Tree 事件</h2>
        </div>
        <table class="table">
            <tr>
                <th>参数</th>
                <th>说明</th>
            </tr>
            <tr>
                <td>input</td>
                <td>v-model值变化</td>
            </tr>
            <tr>
                <td>choose</td>
                <td>checkbox选择变化</td>
            </tr>
            <tr>
                <td>select</td>
                <td>tree的select变化</td>
            </tr>
            <tr>
                <td>open</td>
                <td>当tree打开变化</td>
            </tr>
            <tr>
                <td>loadDataSuccess</td>
                <td>当异步数据加载成功的时候触发，应用与有一些数据按照tree加载的数据执行的场景</td>
            </tr>
        </table>
        <div class="anchor">
            <h2>option 配置</h2>
        </div>
        <table class="table">
            <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
            </tr>
            <tr>
                <td>keyName</td>
                <td>数据的key对应字段</td>
                <td>String</td>
                <td>-</td>
                <td>全局配置<code>tree.default.keyName</code></td>
            </tr>
            <tr>
                <td>titleName</td>
                <td>数据的title对应字段</td>
                <td>String</td>
                <td>-</td>
                <td>全局配置<code>tree.default.titleName</code></td>
            </tr>
            <tr>
                <td>parentName</td>
                <td>数据的parent对应字段，配合数据类型为list的数据</td>
                <td>String</td>
                <td>-</td>
                <td>全局配置<code>tree.default.parentName</code></td>
            </tr>
            <tr>
                <td>childrenName</td>
                <td>数据的children对应字段，配合数据类型为tree的数据</td>
                <td>String</td>
                <td>-</td>
                <td>全局配置<code>tree.default.childrenName</code></td>
            </tr>
            <tr>
                <td>dataMode</td>
                <td>提供的数据类型，是平铺需要解析的列表，还是已经生成好的tree数据</td>
                <td>String</td>
                <td>list, tree</td>
                <td>list</td>
            </tr>
            <tr>
                <td>datas</td>
                <td>用于tree展示的数据</td>
                <td>Array, Function</td>
                <td>-</td>
                <td>[]</td>
            </tr>
            <tr>
                <td>getTotalDatas</td>
                <td>异步获取用于tree展示的数据，一次性全部加载</td>
                <td>Function</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>getDatas</td>
                <td>异步获取用于tree展示的数据，每一次单击获取子集</td>
                <td>Function</td>
                <td>-</td>
                <td>-</td>
            </tr>
        </table>
    </div>
   </z-card>
</div>
</template>

<script>
export default {
  name: 'cpVtree',
  data: function () {
    let list0 = [
      { id: 1, title: '一级', treeIcon: 'zvu-icon zvu-icon-android-person' },
      { id: 2, title: '二级', treeIcon: 'zvu-icon zvu-icon-android-person' },
      { id: 3, title: '三级', disabled: true, treeIcon: 'zvu-icon zvu-icon-android-person' },
      { id: 10, title: '一级-0', parent: 1 },
      { id: 11, title: '一级-1', parent: 1 },
      { id: 12, title: '一级-2', parent: 1 },
      { id: 13, title: '一级-3', parent: 1 },
      { id: 14, title: '一级-4', parent: 1 },
      { id: 20, title: '二级-0', parent: 2 },
      { id: 21, title: '二级-1', parent: 2 },
      { id: 22, title: '二级-2', parent: 2 },
      { id: 23, title: '二级-3', parent: 2 },
      { id: 24, title: '二级-4', parent: 2 },
      { id: 30, title: '三级-0', parent: 3 },
      { id: 31, title: '三级-1', parent: 3 },
      { id: 32, title: '三级-2', parent: 3 },
      { id: 33, title: '三级-3', parent: 3 },
      { id: 34, title: '三级-4', parent: 3 }
    ]
    let list1 = [
      {
        id: 1,
        title: '一级',
        children: [
          { id: 10, title: '一级-0' },
          { id: 11, title: '一级-1' },
          { id: 12, title: '一级-2' },
          { id: 13, title: '一级-3' },
          { id: 14, title: '一级-4' }
        ]
      },
      {
        id: 2,
        title: '二级',
        children: [
          {
            id: 20,
            title: '二级-0',
            children: [
              { id: 201, title: '二级-0-1' },
              { id: 202, title: '二级-0-2' },
              { id: 203, title: '二级-0-3' }
            ]
          },
          { id: 21, title: '二级-1' },
          { id: 22, title: '二级-2' },
          { id: 23, title: '二级-3' },
          { id: 24, title: '二级-4' }
        ]
      },
      {
        id: 3,
        title: '三级',
        checkable: false,
        children: [
          { id: 30, title: '三级-0' },
          { id: 31, title: '三级-1' },
          { id: 32, title: '三级-2' },
          { id: 33, title: '三级-3' },
          { id: 34, title: '三级-4' }
        ]
      }
    ]
    let list2 = [
      { id: 1, title: '一级' },
      { id: 2, title: '二级' },
      { id: 3, title: '三级', disabled: true },
      { id: 10, title: '一级-0', parent: '1' },
      { id: 11, title: '一级-1', parent: '1' },
      { id: 12, title: '一级-2', parent: '1' },
      { id: 13, title: '一级-3', parent: '1' },
      { id: 14, title: '一级-4', parent: '1' },
      { id: 20, title: '二级-0', parent: '2' },
      { id: 21, title: '二级-1', parent: '2' },
      { id: 22, title: '二级-2', parent: '2' },
      { id: 23, title: '二级-3', parent: '2' },
      { id: 24, title: '二级-4', parent: '2' },
      { id: 30, title: '三级-0', parent: '3' },
      { id: 31, title: '三级-1', parent: '3' },
      { id: 32, title: '三级-2', parent: '3' },
      { id: 33, title: '三级-3', parent: '3' },
      { id: 34, title: '三级-4', parent: '3' }
    ]
    let list3 = [
      { id: 1, title: '一级' },
      { id: 2, title: '二级' },
      { id: 3, title: '三级', disabled: true },
      { id: 10, title: '一级-0', parent: '1' },
      { id: 11, title: '一级-1', parent: '1' },
      { id: 12, title: '一级-2', parent: '1' },
      { id: 13, title: '一级-3', parent: '1' },
      { id: 14, title: '一级-4', parent: '1' },
      { id: 20, title: '二级-0', parent: '2' },
      { id: 21, title: '二级-1', parent: '2' },
      { id: 22, title: '二级-2', parent: '2' },
      { id: 23, title: '二级-3', parent: '2' },
      { id: 24, title: '二级-4', parent: '2' },
      { id: 30, title: '三级-0', parent: '3' },
      { id: 31, title: '三级-1', parent: '3' },
      { id: 32, title: '三级-2', parent: '3' },
      { id: 33, title: '三级-3', parent: '3' },
      { id: 34, title: '三级-4', parent: '3' }
    ]
    let list4 = [
      { id: 1, title: '一级' },
      { id: 2, title: '二级' },
      { id: 3, title: '三级', disabled: true },
      { id: 10, title: '一级-0', parent: '1' },
      { id: 11, title: '一级-1', parent: '1' },
      { id: 12, title: '一级-2', parent: '1' },
      { id: 13, title: '一级-3', parent: '1' },
      { id: 14, title: '一级-4', parent: '1' },
      { id: 20, title: '二级-0', parent: '2' },
      { id: 21, title: '二级-1', parent: '2' },
      { id: 22, title: '二级-2', parent: '2' },
      { id: 23, title: '二级-3', parent: '2' },
      { id: 24, title: '二级-4', parent: '2' },
      { id: 30, title: '三级-0', parent: '3' },
      { id: 31, title: '三级-1', parent: '3' },
      { id: 32, title: '三级-2', parent: '3' },
      { id: 33, title: '三级-3', parent: '3' },
      { id: 34, title: '三级-4', parent: '3' }
    ]
    return {
      value0: [],
      toggleOnSelect0: true,
      // value0: null,
      param0: {
        keyName: 'id',
        parentName: 'parent',
        titleName: 'title',
        dataMode: 'list',
        datas: list0
      },
      value1: [202],
      param1: {
        keyName: 'id',
        titleName: 'title',
        dataMode: 'tree',
        datas: list1
      },
      value2: [],
      param2: {
        keyName: 'id',
        parentName: 'parent',
        titleName: 'title',
        dataMode: 'list',
        datas: list2
      },
      value3: [],
      param3: {
        keyName: 'id',
        parentName: 'parent',
        titleName: 'title',
        dataMode: 'list',
        datas: list3
      },
      param4: {
        keyName: 'id',
        parentName: 'parent',
        titleName: 'title',
        dataMode: 'list',
        datas: list4
      },
      param5: {
        keyName: 'id',
        titleName: 'title',
        dataMode: 'list',
        getDatas: (parent, resolve) => {
          setTimeout(() => {
            if (!parent) {
              resolve([
                { id: 1, title: '一级', disabled: true },
                { id: 2, title: '二级' },
                { id: 3, title: '三级' }
              ])
            } else if (parent.id % 2 === 0) {
              resolve([])
            } else {
              // eslint-disable-next-line no-undef
              resolve(genList(parent.title, parent.id, 5, 'id', 'title'))
            }
          }, 100)
        }
      },
      param6: {
        keyName: 'id',
        parentName: 'parent',
        titleName: 'title',
        dataMode: 'list',
        getTotalDatas: resolve => {
          setTimeout(() => {
            // param中的dataMode同样对这里的数据有效
            let list = [
              { id: 1, title: '一级' },
              { id: 2, title: '二级' },
              { id: 3, title: '三级', disabled: true },
              { id: 10, title: '一级-0', parent: '1' },
              { id: 11, title: '一级-1', parent: '1' },
              { id: 12, title: '一级-2', parent: '1' },
              { id: 13, title: '一级-3', parent: '1' },
              { id: 14, title: '一级-4', parent: '1' },
              { id: 20, title: '二级-0', parent: '2' },
              { id: 21, title: '二级-1', parent: '2' },
              { id: 22, title: '二级-2', parent: '2' },
              { id: 23, title: '二级-3', parent: '2' },
              { id: 24, title: '二级-4', parent: '2' },
              { id: 30, title: '三级-0', parent: '3' },
              { id: 31, title: '三级-1', parent: '3' },
              { id: 32, title: '三级-2', parent: '3' },
              { id: 33, title: '三级-3', parent: '3' },
              { id: 34, title: '三级-4', parent: '3' }
            ]
            resolve(list)
          }, 1000)
        }
      },
      rightMenu: [
        {
          text: '菜单11',
          func: function () { alert(111) }
        }, {
          text: '菜单22',
          func: function () { alert(222) }
        }],
      demo0: '<p>值：{{value0}}</p>\r' +
              '<p>\r' +
              '    <z-switch v-model="toggleOnSelect0">点击内容折叠内容</z-switch>\r' +
              '</p>\r' +
              '<p>\r' +
              '    <z-button @click="expandAll0">全部展开</z-button>\r' +
              '    <z-button @click="foldAll0">全部收起</z-button>\r' +
              '   <z-button @click="updateSelect0">设置选中值</z-button>\r' +
              '    <z-button @click="getSelect0">获得选中值</z-button>\r' +
              '</p>\r' +
              '<z-vtree :option="param0" ref="demo0" :toggleOnSelect="toggleOnSelect0" v-model="value0"\r' +
              '    @open="open0" @select="select0" @choose="choose0"></z-vtree>\r' +
              '<script>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        let list0 = [\r' +
              '            { id: 1, title: "一级", treeIcon: "zvu-icon zvu-icon-android-person" },\r' +
              '            { id: 2, title: "二级", treeIcon: "zvu-icon zvu-icon-android-person" },\r' +
              '            { id: 3, title: "三级", disabled: true, treeIcon: "zvu-icon zvu-icon-android-person" },\r' +
              '            { id: 10, title: "一级-0", parent: 1 },\r' +
              '            { id: 11, title: "一级-1", parent: 1 },\r' +
              '            { id: 12, title: "一级-2", parent: 1 },\r' +
              '            { id: 13, title: "一级-3", parent: 1 },\r' +
              '            { id: 14, title: "一级-4", parent: 1 },\r' +
              '            { id: 20, title: "二级-0", parent: 2 },\r' +
              '            { id: 21, title: "二级-1", parent: 2 },\r' +
              '            { id: 22, title: "二级-2", parent: 2 },\r' +
              '            { id: 23, title: "二级-3", parent: 2 },\r' +
              '            { id: 24, title: "二级-4", parent: 2 },\r' +
              '            { id: 30, title: "三级-0", parent: 3 },\r' +
              '            { id: 31, title: "三级-1", parent: 3 },\r' +
              '            { id: 32, title: "三级-2", parent: 3 },\r' +
              '            { id: 33, title: "三级-3", parent: 3 },\r' +
              '            { id: 34, title: "三级-4", parent: 3 }]\r' +
              '        return {\r' +
              '           value0: [],\r' +
              '            toggleOnSelect0: true,\r' +
              '            value0: null,\r' +
              '            param0: {\r' +
              '                keyName: "id",\r' +
              '                parentName: "parent",\r' +
              '                titleName: "title",\r' +
              '                dataMode: "list",\r' +
              '                datas: list0\r' +
              '            }\r' +
              '        }\r' +
              '    },\r' +
              '     methods: {\r' +
              '        expandAll0:function() {\r' +
              '            this.$refs.demo0.expandAll();\r' +
              '        },\r' +
              '        foldAll0:function() {\r' +
              '            this.$refs.demo0.foldAll();\r' +
              '        },\r' +
              '        updateSelect0:function() {\r' +
              '            // 两种方法都可以\r' +
              '            this.$refs.demo0.updateSelect(21);\r' +
              '            this.value = 21;\r' +
              '           this.$Message.info("选中二级-1");\r' +
              '       },\r' +
              '        getSelect0:function() {\r' +
              '            let option = this.$refs.demo0.getSelect();\r' +
              '            if (option == null) {\r' +
              '                this.$Message.info(`当前未选中`);\r' +
              '            } else {\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '                this.$Message.info(`当前选中: ${option.title}`);\r' +
              '            }\r' +
              '        },\r' +
              '        choose0:function(data){\r' +
              '            console.log(data);\r' +
              '        },\r' +
              '        select0:function(data){\r' +
              '            console.log(data);\r' +
              '        }\r' +
              '     }\r' +
              '}\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo1: '<p>值：{{value1}}</p>\r' +
              '<p>\r' +
              '    <z-button @click="updateChoose1">设置checkbox选中值</z-button>\r' +
              '    <z-button @click="getChoose1">获得checkbox选中值</z-button>\r' +
              '    <z-button @click="getFullChoose1">获得所有checkbox选中值</z-button>\r' +
              '   <z-button @click="chooseAll1">选中所有值</z-button>\r' +
              '</p>\r' +
              '<z-vtree :option="param1" ref="demo1" v-model="value1" :multiple="true" choose-mode="all"\r' +
              '    @choose="choose1"></z-vtree>\r' +
              '<script>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        let list1 = [\r' +
              '        {\r' +
              '            id: 1,\r' +
              '            title: "一级",\r' +
              '            children: [\r' +
              '                { id: 10, title: "一级-0" },\r' +
              '               { id: 11, title: "一级-1" },\r' +
              '                { id: 12, title: "一级-2" },\r' +
              '                { id: 13, title: "一级-3" },\r' +
              '                { id: 14, title: "一级-4" }\r' +
              '            ]\r' +
              '        },\r' +
              '        {\r' +
              '            id: 2,\r' +
              '            title: "二级",\r' +
              '            children: [\r' +
              '                {\r' +
              '                    id: 20,\r' +
              '                    title: "二级-0",\r' +
              '                    children: [\r' +
              '                        { id: 201, title: "二级-0-1" },\r' +
              '                        { id: 202, title: "二级-0-2" },\r' +
              '                        { id: 203, title: "二级-0-3" }\r' +
              '                    ]\r' +
              '               },\r' +
              '                { id: 21, title: "二级-1" },\r' +
              '                { id: 22, title: "二级-2" },\r' +
              '                { id: 23, title: "二级-3" },\r' +
              '                { id: 24, title: "二级-4" }\r' +
              '            ]\r' +
              '        },\r' +
              '        {\r' +
              '            id: 3,\r' +
              '            title: "三级",\r' +
              '            checkable: false,\r' +
              '            children: [\r' +
              '                { id: 30, title: "三级-0" },\r' +
              '                { id: 31, title: "三级-1" },\r' +
              '                { id: 32, title: "三级-2" },\r' +
              '                { id: 33, title: "三级-3" },\r' +
              '                { id: 34, title: "三级-4" }\r' +
              '            ]\r' +
              '       }\r' +
              '    ];\r' +
              '        return {\r' +
              '            value1: [202],\r' +
              '            param1: {\r' +
              '                keyName: "id",\r' +
              '                titleName: "title",\r' +
              '                dataMode: "tree",\r' +
              '                datas: list1\r' +
              '            }\r' +
              '        }\r' +
              '    },\r' +
              '     methods: {\r' +
              '        choose1:function(data){\r' +
              '            console.log(data);\r' +
              '        },\r' +
              '        chooseAll1:function(){\r' +
              '            this.$refs.demo1.chooseAll();\r' +
              '        },\r' +
              '        updateChoose1:function(){\r' +
              '            // 两种方法都可以\r' +
              '            this.$refs.demo1.updateChoose([1, 23, 31]);\r' +
              '            this.value = [11, 23, 201, 202, 203];\r' +
              '        },\r' +
              '        getChoose1:function(){\r' +
              '            let options = this.$refs.demo1.getChoose();\r' +
              '            if (options.length == 0) {\r' +
              '                this.$Message.info(`当前未选中`);\r' +
              '            } else {\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '                this.$Message.info(`当前选中: ${options.length}个`);\r' +
              '            }\r' +
              '        },\r' +
              '        getFullChoose1:function(){\r' +
              '            let options = this.$refs.demo1.getFullChoose();\r' +
              '            console.log(options);\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '             this.$Message.info(`当前选中: ${options.length}个`);\r' +
              '        }\r' +
              '     }\r' +
              '}\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo2: ' <p>{{value2}}</p>\r' +
              ' <p>\r' +
              '    <z-button @click="updateChoose2">设置checkbox选中值</z-button>\r' +
              '    <z-button @click="getChoose2">获得checkbox选中值</z-button>\r' +
              '    <z-button @click="getFullChoose2">获得所有checkbox选中值</z-button>\r' +
              '    <z-button @click="chooseAll2">选中所有值</z-button>\r' +
              '</p>\r' +
              '<z-vtree :option="param2" ref="demo2" :multiple="true" v-model="value2" choose-mode="some"></z-vtree>\r' +
              '<script>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        let list2 = [\r' +
              '            { id: 1, title: "一级" },\r' +
              '            { id: 2, title: "二级" },\r' +
              '            { id: 3, title: "三级", disabled: true },\r' +
              '            { id: 10, title: "一级-0", parent: "1" },\r' +
              '            { id: 11, title: "一级-1", parent: "1" },\r' +
              '            { id: 12, title: "一级-2", parent: "1" },\r' +
              '            { id: 13, title: "一级-3", parent: "1" },\r' +
              '            { id: 14, title: "一级-4", parent: "1" },\r' +
              '            { id: 20, title: "二级-0", parent: "2" },\r' +
              '            { id: 21, title: "二级-1", parent: "2" },\r' +
              '            { id: 22, title: "二级-2", parent: "2" },\r' +
              '            { id: 23, title: "二级-3", parent: "2" },\r' +
              '            { id: 24, title: "二级-4", parent: "2" },\r' +
              '            { id: 30, title: "三级-0", parent: "3" },\r' +
              '            { id: 31, title: "三级-1", parent: "3" },\r' +
              '            { id: 32, title: "三级-2", parent: "3" },\r' +
              '            { id: 33, title: "三级-3", parent: "3" },\r' +
              '            { id: 34, title: "三级-4", parent: "3" }\r' +
              '        ];\r' +
              '        return {\r' +
              '               value2: [],\r' +
              '                param2: {\r' +
              '                    keyName: "id",\r' +
              '                    parentName: "parent",\r' +
              '                    titleName: "title",\r' +
              '                    dataMode: "list",\r' +
              '                    datas: list2\r' +
              '                }\r' +
              '        }\r' +
              '    },\r' +
              '     methods: {\r' +
              '       chooseAll2:function(){\r' +
              '            this.$refs.demo2.chooseAll();\r' +
              '       },\r' +
              '        updateChoose2:function() {\r' +
              '            this.$refs.demo2.updateChoose([1, 23, 31]);\r' +
              '        },\r' +
              '        getChoose2:function(){\r' +
              '            let options = this.$refs.demo2.getChoose();\r' +
              '            if (options.length == 0) {\r' +
              '                this.$Message.info(`当前未选中`);\r' +
              '           } else {\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '                this.$Message.info(`当前选中: ${options.length}个`);\r' +
              '            }\r' +
              '        },\r' +
              '       getFullChoose2:function(){\r' +
              '            let options = this.$refs.demo2.getFullChoose();\r' +
              '            console.log(options);\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '            this.$Message.info(`当前选中: ${options.length}个`);\r' +
              '        }\r' +
              '     }\r' +
              '}\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo3: '<p>{{value3}}</p>\r' +
              '<p>\r' +
              '    <z-button @click="updateChoose3">设置checkbox选中值</z-button>\r' +
              '    <z-button @click="getChoose3">获得checkbox选中值</z-button>\r' +
              '    <z-button @click="getFullChoose3">获得所有checkbox选中值</z-button>\r' +
              '    <z-button @click="chooseAll3">选中所有值</z-button>\r' +
              '</p>\r' +
              '<z-vtree :option="param3" ref="demo3" :multiple="true" v-model="value3" choose-mode="independent"></z-vtree>\r' +
              '<script>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        let list3 = [\r' +
              '            { id: 1, title: "一级" },\r' +
              '            { id: 2, title: "二级" },\r' +
              '            { id: 3, title: "三级", disabled: true },\r' +
              '            { id: 10, title: "一级-0", parent: "1" },\r' +
              '            { id: 11, title: "一级-1", parent: "1" },\r' +
              '            { id: 12, title: "一级-2", parent: "1" },\r' +
              '            { id: 13, title: "一级-3", parent: "1" },\r' +
              '            { id: 14, title: "一级-4", parent: "1" },\r' +
              '            { id: 20, title: "二级-0", parent: "2" },\r' +
              '            { id: 21, title: "二级-1", parent: "2" },\r' +
              '            { id: 22, title: "二级-2", parent: "2" },\r' +
              '            { id: 23, title: "二级-3", parent: "2" },\r' +
              '            { id: 24, title: "二级-4", parent: "2" },\r' +
              '            { id: 30, title: "三级-0", parent: "3" },\r' +
              '            { id: 31, title: "三级-1", parent: "3" },\r' +
              '            { id: 32, title: "三级-2", parent: "3" },\r' +
              '            { id: 33, title: "三级-3", parent: "3" },\r' +
              '            { id: 34, title: "三级-4", parent: "3" }\r' +
              '       ];\r' +
              '        return {\r' +
              '            value3: [],\r' +
              '            param3: {\r' +
              '                keyName: "id",\r' +
              '                parentName: "parent",\r' +
              '                titleName: "title",\r' +
              '                dataMode: "list",\r' +
              '                datas: list3\r' +
              '            }\r' +
              '        }\r' +
              '    },\r' +
              '     methods: {\r' +
              '        chooseAll3:function(){\r' +
              '            this.$refs.demo3.chooseAll();\r' +
              '        },\r' +
              '        updateChoose3:function(){\r' +
              '            this.$refs.demo3.updateChoose([1, 23, 31]);\r' +
              '        },\r' +
              '        getChoose3:function(){\r' +
              '            let options = this.$refs.demo3.getChoose();\r' +
              '            if (options.length == 0) {\r' +
              '                this.$Message.info(`当前未选中`);\r' +
              '            } else {\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '                this.$Message.info(`当前选中: ${options.length}个`);\r' +
              '            }\r' +
              '        },\r' +
              '        getFullChoose3:function(){\r' +
              '            let options = this.$refs.demo3.getFullChoose();\r' +
              '            console.log(options);\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '            this.$Message.info(`当前选中: ${options.length}个`);\r' +
              '        }\r' +
              '     }\r' +
              '}\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo4: '<z-vtree :option="param4" ref="demo4" :filterable="true"></z-vtree>\r' +
              '<script>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        let list4 = [\r' +
              '            { id: 1, title: "一级" },\r' +
              '            { id: 2, title: "二级" },\r' +
              '            { id: 3, title: "三级", disabled: true },\r' +
              '            { id: 10, title: "一级-0", parent: "1" },\r' +
              '            { id: 11, title: "一级-1", parent: "1" },\r' +
              '            { id: 12, title: "一级-2", parent: "1" },\r' +
              '            { id: 13, title: "一级-3", parent: "1" },\r' +
              '            { id: 14, title: "一级-4", parent: "1" },\r' +
              '            { id: 20, title: "二级-0", parent: "2" },\r' +
              '            { id: 21, title: "二级-1", parent: "2" },\r' +
              '            { id: 22, title: "二级-2", parent: "2" },\r' +
              '            { id: 23, title: "二级-3", parent: "2" },\r' +
              '            { id: 24, title: "二级-4", parent: "2" },\r' +
              '            { id: 30, title: "三级-0", parent: "3" },\r' +
              '            { id: 31, title: "三级-1", parent: "3" },\r' +
              '            { id: 32, title: "三级-2", parent: "3" },\r' +
              '            { id: 33, title: "三级-3", parent: "3" },\r' +
              '            { id: 34, title: "三级-4", parent: "3" }\r' +
              '       ];\r' +
              '        return {\r' +
              '            param4: {\r' +
              '                keyName: "id",\r' +
              '                parentName: "parent",\r' +
              '                titleName: "title",\r' +
              '                dataMode: "list",\r' +
              '                datas: list4\r' +
              '           }\r' +
              '        }\r' +
              '    },\r' +
              '}\r',
      demo5: ' <z-vtree :option="param5" ref="demo5"></z-vtree>\r' +
              '<script>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '           param5: {\r' +
              '                keyName: "id",\r' +
              '                titleName: "title",\r' +
              '                dataMode: "list",\r' +
              '                getDatas: (parent, resolve) => {\r' +
              '                    setTimeout(() => {\r' +
              '                        if (!parent) {\r' +
              '                            resolve([\r' +
              '                                { id: 1, title: "一级", disabled: true },\r' +
              '                                { id: 2, title: "二级" },\r' +
              '                                { id: 3, title: "三级" }\r' +
              '                            ]);\r' +
              '                        } else if (parent.id % 2 == 0) {\r' +
              '                            resolve([]);\r' +
              '                        } else {\r' +
              '                            resolve(genList(parent.title, parent.id, 5, "id", "title"));\r' +
              '                        }\r' +
              '                    }, 100);\r' +
              '                }\r' +
              '            }\r' +
              '        }\r' +
              '    },\r' +
              '}\r',
      demo6: '<p>\r' +
              '    <z-button @click="refresh6">刷新</z-button>\r' +
              '</p>\r' +
              '<z-vtree :option="param6" ref="demo6" @loadDataSuccess="loadDataSuccess6"></z-vtree>\r' +
              '<script>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '            param6: {\r' +
              '                keyName: "id",\r' +
              '                parentName: "parent",\r' +
              '                titleName: "title",\r' +
              '                dataMode: "list",\r' +
              '                getTotalDatas: resolve => {\r' +
              '                    setTimeout(() => {\r' +
              '                        //param中的dataMode同样对这里的数据有效\r' +
              '                        let list = [\r' +
              '                            { id: 1, title: "一级" },\r' +
              '                            { id: 2, title: "二级" },\r' +
              '                            { id: 3, title: "三级", disabled: true },\r' +
              '                            { id: 10, title: "一级-0", parent: "1" },\r' +
              '                            { id: 11, title: "一级-1", parent: "1" },\r' +
              '                            { id: 12, title: "一级-2", parent: "1" },\r' +
              '                            { id: 13, title: "一级-3", parent: "1" },\r' +
              '                            { id: 14, title: "一级-4", parent: "1" },\r' +
              '                            { id: 20, title: "二级-0", parent: "2" },\r' +
              '                            { id: 21, title: "二级-1", parent: "2" },\r' +
              '                            { id: 22, title: "二级-2", parent: "2" },\r' +
              '                            { id: 23, title: "二级-3", parent: "2" },\r' +
              '                            { id: 24, title: "二级-4", parent: "2" },\r' +
              '                            { id: 30, title: "三级-0", parent: "3" },\r' +
              '                            { id: 31, title: "三级-1", parent: "3" },\r' +
              '                            { id: 32, title: "三级-2", parent: "3" },\r' +
              '                            { id: 33, title: "三级-3", parent: "3" },\r' +
              '                            { id: 34, title: "三级-4", parent: "3" }\r' +
              '                        ];\r' +
              '                        resolve(list);\r' +
              '                    }, 1000);\r' +
              '                }\r' +
              '            }\r' +
              '        }\r' +
              '    },\r' +
              '     methods: {\r' +
              '        getFullChoose3:function(){\r' +
              '            let options = this.$refs.demo3.getFullChoose();\r' +
              '            console.log(options);\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '           this.$Message.info(`当前选中: ${options.length}个`);\r' +
              '        },\r' +
              '        loadDataSuccess6:function(){\r' +
              '            this.$Message.success("数据加载成功");\r' +
              '        },\r' +
              '        refresh6:function(){\r' +
              '            this.$refs.demo6.refresh();\r' +
              '        }\r' +
              '     }\r' +
              '}\r'
    }
  },
  methods: {
    expandAll0: function () {
      this.$refs.demo0.expandAll()
    },
    foldAll0: function () {
      this.$refs.demo0.foldAll()
    },
    updateSelect0: function () {
      // 两种方法都可以
      this.$refs.demo0.updateSelect(21)
      this.value = 21
      this.$Message.info('选中二级-1')
    },
    getSelect0: function () {
      let option = this.$refs.demo0.getSelect()
      if (option == null) {
        this.$Message.info(`当前未选中`)
      } else {
        this.$Message.info(`当前选中: ${option.title}`)
      }
    },
    choose0: function (data) {
      console.log(data)
    },
    select0: function (data) {
      console.log(data)
    },
    open0: function (data) {
      console.log(data)
    },
    choose1: function (data) {
      console.log(data)
    },
    chooseAll1: function () {
      this.$refs.demo1.chooseAll()
    },
    updateChoose1: function () {
      // 两种方法都可以
      this.$refs.demo1.updateChoose([1, 23, 31])
      this.value = [11, 23, 201, 202, 203]
    },
    getChoose1: function () {
      let options = this.$refs.demo1.getChoose()
      if (options.length === 0) {
        this.$Message.info(`当前未选中`)
      } else {
        this.$Message.info(`当前选中: ${options.length}个`)
      }
    },
    getFullChoose1: function () {
      let options = this.$refs.demo1.getFullChoose()
      console.log(options)
      this.$Message.info(`当前选中: ${options.length}个`)
    },
    chooseAll2: function () {
      this.$refs.demo2.chooseAll()
    },
    updateChoose2: function () {
      this.$refs.demo2.updateChoose([1, 23, 31])
    },
    getChoose2: function () {
      let options = this.$refs.demo2.getChoose()
      if (options.length === 0) {
        this.$Message.info(`当前未选中`)
      } else {
        this.$Message.info(`当前选中: ${options.length}个`)
      }
    },
    getFullChoose2: function () {
      let options = this.$refs.demo2.getFullChoose()
      console.log(options)
      this.$Message.info(`当前选中: ${options.length}个`)
    },
    chooseAll3: function () {
      this.$refs.demo3.chooseAll()
    },
    updateChoose3: function () {
      this.$refs.demo3.updateChoose([1, 23, 31])
    },
    getChoose3: function () {
      let options = this.$refs.demo3.getChoose()
      if (options.length === 0) {
        this.$Message.info(`当前未选中`)
      } else {
        this.$Message.info(`当前选中: ${options.length}个`)
      }
    },
    getFullChoose3: function () {
      let options = this.$refs.demo3.getFullChoose()
      console.log(options)
      this.$Message.info(`当前选中: ${options.length}个`)
    },
    loadDataSuccess6: function () {
      this.$Message.success('数据加载成功')
    },
    refresh6: function () {
      this.$refs.demo6.refresh()
    }
  }
}
</script>
<style scoped>
</style>
