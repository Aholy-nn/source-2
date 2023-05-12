<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-07 16:12:47
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-transfer :data="data1" :target-keys="targetKeys1" :render-format="render1"
              @on-change="handleChange1">
          </z-transfer>
          <div class="example-desc">
              <header class="example-header"><span>基础用法</span></header>
              <div>
                  <p>基本用法，展示了 <code>data</code>、<code>target-keys</code>、每行的渲染函数
                      <code>render-format</code> 以及回调函数 <code>on-change</code> 的用法。</p>
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
           <z-transfer :data="data2" :target-keys="targetKeys2" filterable
                :filter-method="filterMethod" @on-change="handleChange2">
            </z-transfer>
            <div class="example-desc">
                <header class="example-header"><span>搜索</span></header>
                <div>
                    <p>通过设置属性 <code>filterable</code> 可以进行搜索，可以自定义搜索函数。</p>
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
           <z-transfer :data="data3" :target-keys="targetKeys3" :list-style="listStyle"
                :render-format="render3" :operations="['To left','To right']" filterable
                @on-change="handleChange3">
                <div :style="{float: 'right', margin: '5px'}">
                    <z-button type="primary" ghost size="small" @click="reloadMockData">Refresh</z-button>
                </div>
            </z-transfer>
            <div class="example-desc">
                <header class="example-header"><span>高级用法</span></header>
                <p>穿梭框高级用法，可以自定义两列的宽高、操作文案，以及底部自定义操作，更多配置见 API。</p>
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
          <z-transfer :data="data4" :target-keys="targetKeys4" :render-format="render4"
              @on-change="handleChange4">
          </z-transfer>
          <div class="example-desc">
              <header class="example-header"><span>自定义渲染行数据</span></header>
              <div>
                  <p>可以通过 <code>render-format</code> 来渲染复杂的数据。</p>
              </div>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo4"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <div class="demo-api">
        <div class="anchor">
            <h2 id="API">API</h2>
        </div>
        <div class="anchor">
            <h3 id="Transfer_props">Transfer props</h3>
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
                    <td>数据源，其中的数据将会被渲染到左边一栏中，<code>targetKeys</code> 中指定的除外。</td>
                    <td>Array</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>targetKeys</td>
                    <td>显示在右侧框数据的key集合</td>
                    <td>Array</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>render-format</td>
                    <td>每行数据渲染函数，该函数的入参为 <code>data</code> 中的项</td>
                    <td>Function</td>
                    <td>默认显示label，没有时显示key</td>
                </tr>
                <tr>
                    <td>selected-keys</td>
                    <td>设置哪些项应该被选中</td>
                    <td>Array</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>list-style</td>
                    <td>两个穿梭框的自定义样式</td>
                    <td>Object</td>
                    <td>{}</td>
                </tr>
                <tr>
                    <td>titles</td>
                    <td>标题集合，顺序从左至右</td>
                    <td>Array</td>
                    <td>['源列表', '目的列表']</td>
                </tr>
                <tr>
                    <td>operations</td>
                    <td>操作文案集合，顺序从上至下</td>
                    <td>Array</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>filterable</td>
                    <td>是否显示搜索框</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>filter-placeholder</td>
                    <td>搜索框的占位</td>
                    <td>String</td>
                    <td>请输入搜索内容</td>
                </tr>
                <tr>
                    <td>filter-method</td>
                    <td>自定义搜索函数，入参为 data 和 query，data 为项，query 为当前输入的搜索词</td>
                    <td>Function</td>
                    <td>默认搜索label</td>
                </tr>
                <tr>
                    <td>not-found-text</td>
                    <td>当列表为空时显示的内容</td>
                    <td>String</td>
                    <td>列表为空</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="Transfer_events">Transfer events</h3>
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
                    <td>选项在两栏之间转移时的回调函数</td>
                    <td>targetKeys, direction, moveKeys</td>
                </tr>
                <tr>
                    <td>on-selected-change</td>
                    <td>选中项发生变化时触发</td>
                    <td>sourceSelectedKeys, targetSelectedKeys</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="Transfer_slot">Transfer slot</h3>
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
                    <td>无</td>
                    <td>自定义底部内容</td>
                </tr>
            </tbody>
        </table>
    </div>
   </z-card>
</div>
</template>

<script>
export default {
  name: 'cpTransfer',
  data: function () {
    return {
      data1: this.getMockData(),
      targetKeys1: this.getTargetKeys(),
      data2: this.getMockData(),
      targetKeys2: this.getTargetKeys(),
      data3: this.getMockData(),
      targetKeys3: this.getTargetKeys(),
      listStyle: {
        width: '180px',
        height: '300px'
      },
      data4: this.getMockData(),
      targetKeys4: this.getTargetKeys(),
      demo1: '<z-transfer\r' +
              '     :data="data1"\r' +
              '     :target-keys="targetKeys1"\r' +
              '     :render-format="render1"\r' +
              '     @on-change="handleChange1">\r' +
              '</z-transfer>\r' +
              '<script>\r' +
              'export default {\r' +
              '   data:function () {\r' +
              '       return{\r' +
              '           data1: this.getMockData(),\r' +
              '           targetKeys1: this.getTargetKeys(),\r' +
              '       }\r' +
              '   }\r' +
              '   methods: {\r' +
              '       getMockData:function() {\r' +
              '           var mockData = [];\r' +
              '           for (var i = 1; i <= 20; i++) {\r' +
              '               mockData.push({\r' +
              '                   key: i.toString(),\r' +
              '                   label: \'Content\' + i,\r' +
              '                   description: \'The desc of content\' + i,\r' +
              '                   disabled: Math.random() * 3 < 1\r' +
              '               });\r' +
              '           }\r' +
              '           return mockData;\r' +
              '       },\r' +
              '       getTargetKeys:function() {\r' +
              '           return this.getMockData()\r' +
              '                   .filter(function () {\r' +
              '                       Math.random() * 2 > 1\r' +
              '                   })\r' +
              '       .map(function(item){\r' +
              '           return  item.key\r' +
              '       });\r' +
              '       },\r' +
              '       render1:function(item) {\r' +
              '            return item.label;\r' +
              '       },\r' +
              '       handleChange1:function(newTargetKeys, direction, moveKeys) {\r' +
              '           this.targetKeys1 = newTargetKeys;\r' +
              '       }\r' +
              '   }\r' +
              '}\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo2: '<z-transfer\r' +
                '     :data="data2"\r' +
                '     filterable\r' +
                '     :filter-method="filterMethod"\r' +
                '     @on-change="handleChange2">\r' +
                '</z-transfer>\r' +
                '<script>\r' +
                'export default {\r' +
                '   data:function () {\r' +
                '       return{\r' +
                '           data2: this.getMockData(),\r' +
                '           targetKeys2: this.getTargetKeys(),\r' +
                '       }\r' +
                '   },\r' +
                '   methods: {\r' +
                '       getMockData:function() {\r' +
                '           var mockData = [];\r' +
                '           for (var i = 1; i <= 20; i++) {\r' +
                '               mockData.push({\r' +
                '                   key: i.toString(),\r' +
                '                   label: \'Content\' + i,\r' +
                '                   description: \'The desc of content\' + i,\r' +
                '                   disabled: Math.random() * 3 < 1\r' +
                '               });\r' +
                '           }\r' +
                '           return mockData;\r' +
                '       },\r' +
                '       getTargetKeys:function() {\r' +
                '           return this.getMockData()\r' +
                '                   .filter(function () {\r' +
                '                       Math.random() * 2 > 1\r' +
                '                   })\r' +
                '       .map(function(item){\r' +
                '           return  item.key\r' +
                '       });\r' +
                '       },\r' +
                '        handleChange2:function(newTargetKeys) {\r' +
                '            this.targetKeys2 = newTargetKeys;\r' +
                '        },\r' +
                '        filterMethod:function(data, query) {\r' +
                '            return data.label.indexOf(query) > -1;\r' +
                '        }\r' +
                '   }\r' +
                '}\r' +
                // eslint-disable-next-line no-useless-escape
                '<\/script>\r',
      demo3: '<z-transfer :data="data3" :target-keys="targetKeys3" :list-style="listStyle" :render-format="render3" :operations="[\'To left\',\'To right\']"\r' +
                '    filterable @on-change="handleChange3">\r' +
                '    <div :style="{float: \'right\', margin: \'5px\'}">\r' +
                '        <z-button type="primary" ghost size="small" @click="reloadMockData">Refresh</z-button>\r' +
                '    </div>\r' +
                '</z-transfer>\r' +
                '<script>\r' +
                'export default {\r' +
                '   data:function () {\r' +
                '       return{\r' +
                '           data3: this.getMockData(),\r' +
                '           targetKeys3: this.getTargetKeys(),\r' +
                '            listStyle: {\r' +
                '                width: \'250px\',\r' +
                '                height: \'300px\'\r' +
                '            }\r' +
                '       }\r' +
                '   },\r' +
                'methods:{\r' +
                '       getMockData:function() {\r' +
                '           var mockData = [];\r' +
                '           for (var i = 1; i <= 20; i++) {\r' +
                '               mockData.push({\r' +
                '                   key: i.toString(),\r' +
                '                   label: \'Content\' + i,\r' +
                '                   description: \'The desc of content\' + i,\r' +
                '                   disabled: Math.random() * 3 < 1\r' +
                '               });\r' +
                '           }\r' +
                '           return mockData;\r' +
                '       },\r' +
                '       getTargetKeys:function() {\r' +
                '           return this.getMockData()\r' +
                '                   .filter(function () {\r' +
                '                       Math.random() * 2 > 1\r' +
                '                   })\r' +
                '       .map(function(item){\r' +
                '           return  item.key\r' +
                '           });\r' +
                '       },\r' +
                '       handleChange3:function(newTargetKeys) {\r' +
                '           this.targetKeys3 = newTargetKeys;\r' +
                '       },\r' +
                '       render3:function(item) {\r' +
                '           return item.label + \' - \' + item.description;\r' +
                '        },\r' +
                '       reloadMockData:function() {\r' +
                '            this.data3 = this.getMockData();\r' +
                '            this.targetKeys3 = this.getTargetKeys();\r' +
                '         }\r' +
                '   }\r' +
                '}\r' +
                // eslint-disable-next-line no-useless-escape
                '<\/script>\r',
      demo4: '<z-transfer\r' +
                '        :data="data4"\r' +
                '        :target-keys="targetKeys4"\r' +
                '        :render-format="render4"\r' +
                '        @on-change="handleChange4">\r' +
                '</z-transfer>\r' +
                '<script>\r' +
                'export default {\r' +
                '   data:function () {\r' +
                '       return{\r' +
                '            data4: this.getMockData(),\r' +
                '            targetKeys4: this.getTargetKeys()\r' +
                '       }\r' +
                '   },\r' +
                'methods:{\r' +
                '       getMockData:function() {\r' +
                '           var mockData = [];\r' +
                '           for (var i = 1; i <= 20; i++) {\r' +
                '               mockData.push({\r' +
                '                   key: i.toString(),\r' +
                '                   label: \'Content\' + i,\r' +
                '                   description: \'The desc of content\' + i,\r' +
                '                   disabled: Math.random() * 3 < 1\r' +
                '               });\r' +
                '           }\r' +
                '           return mockData;\r' +
                '       },\r' +
                '       getTargetKeys:function() {\r' +
                '           return this.getMockData()\r' +
                '                   .filter(function () {\r' +
                '                       Math.random() * 2 > 1\r' +
                '                   })\r' +
                '       .map(function(item){\r' +
                '           return  item.key\r' +
                '        });\r' +
                '       },\r' +
                '       handleChange4: function(newTargetKeys) {\r' +
                '            this.targetKeys4 = newTargetKeys;\r' +
                '        },\r' +
                '       render4: function (item) {\r' +
                '           return item.label + \' - \' + item.description;\r' +
                '        }\r' +
                '   }\r' +
                '}\r' +
                // eslint-disable-next-line no-useless-escape
                '<\/script>\r'
    }
  },
  methods: {
    getMockData: function () {
      var mockData = []
      for (var i = 1; i <= 20; i++) {
        mockData.push({
          key: i.toString(),
          label: 'Content ' + i,
          description: 'The desc of content  ' + i,
          disabled: Math.random() * 3 < 1
        })
      }
      return mockData
    },
    getTargetKeys: function () {
      return this.getMockData().filter(function () {
        return Math.random() * 2 > 1
      }).map(function (item) {
        return item.key
      })
    },
    render1: function (item) {
      return item.label
    },
    handleChange1: function (newTargetKeys, direction, moveKeys) {
      this.targetKeys1 = newTargetKeys
    },
    handleChange2: function (newTargetKeys) {
      this.targetKeys2 = newTargetKeys
    },
    filterMethod: function (data, query) {
      return data.label.indexOf(query) > -1
    },
    handleChange3: function (newTargetKeys) {
      this.targetKeys3 = newTargetKeys
    },
    render3: function (item) {
      return item.label + ' - ' + item.description
    },
    reloadMockData: function () {
      this.data3 = this.getMockData()
      this.targetKeys3 = this.getTargetKeys()
    },
    handleChange4: function (newTargetKeys) {
      this.targetKeys4 = newTargetKeys
    },
    render4: function (item) {
      return item.label + ' - ' + item.description
    }
  }
}
</script>
<style scoped>
</style>
