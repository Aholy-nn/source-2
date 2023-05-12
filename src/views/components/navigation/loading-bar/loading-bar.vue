<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-07 16:11:34
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
    <div class="example-desc">
        <header class="example-header"><span>说明</span></header>
        <div>
            <p>LoadingBar
                只会在全局创建一个，因此在任何位置调用的方法都会控制这同一个组件。主要使用场景是路由切换和Ajax，因为这两者都不能拿到精确的进度，LoadingBar
                会模拟进度，当然也可以通过update()方法来传入一个精确的进度，比如在文件上传时会很有用，具体见API。</p>
        </div>
    </div>
  </z-card>
   <z-card bordered dis-hover class="m-t-15">
      <h5>在路由中使用</h5>
      <z-code-editor :content="demo1" style="border:1px solid #eee"></z-code-editor>
  </z-card>
   <z-card bordered dis-hover class="m-t-15">
      <h5>在异步请求中使用</h5>
      <z-code-editor :content="demo2" style="border:1px solid #eee"></z-code-editor>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
    <z-row :gutter="15">
      <z-col span="12">
        <z-button @click="start">Start</z-button>
        <z-button @click="finish">Finish</z-button>
        <z-button @click="error">Error</z-button>
        <div class="example-desc">
            <header class="example-header"><span>基础用法</span></header>
            <div>
                <p>点击 Start 开始进度，点击 Finish
                    结束。在调用start()方法后，组件会自动模拟进度，当调用finish()或error()时，补全进度并自动消失。</p>
            </div>
        </div>
      </z-col>
      <z-col span="12">
          <z-code-editor :content="demo3"></z-code-editor>
      </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
     <div class="api">
        <div class="anchor">
            <h2>Api</h2>
        </div>
        <div class="anchor">
            <h3>LoadingBar instance</h3>
        </div>
        <div class="anchor">
            <h5>通过直接调用以下方法来使用组件：</h5>
            <ul>
                <li>this.$Loading.start()</li>
                <li style="margin-top: 10px">this.$Loading.finish()</li>
                <li style="margin-top: 10px">this.$Loading.error()</li>
                <li style="margin-top: 10px">this.$Loading.update(percent)</li>
            </ul>
        </div>
        <div class="anchor">
            <h5>以上方法隐式的创建及维护Vue组件。函数及参数说明如下：</h5>
        </div>
        <table style="    width: 100%;border: 1px solid #e5e5e5;">
            <thead>
                <tr style="border-bottom: 1px solid #e5e5e5;background: #eee;">
                    <td style="padding: 10px 20px">函数名</td>
                    <td style="padding: 10px 20px">说明</td>
                    <td style="padding: 10px 20px">参数</td>
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
            <h5>另外提供了全局配置和全局销毁的方法：</h5>
            <ul>
                <li style="margin-top: 10px">this.$Loading.config(options)</li>
                <li style="margin-top: 10px">this.$Loading.destroy()</li>
            </ul>
            <div>
                <p>this.$Loading.config({</p>
                <p style="padding-left: 20px">color: '#5cb85c',</p>
                <p style="padding-left: 20px">failedColor: '#f0ad4e',</p>
                <p style="padding-left: 20px">height: 5</p>
                <p>});</p>
            </div>
        </div>
        <table style="    width: 100%;border: 1px solid #e5e5e5;">
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

    </div>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpLoadingBar',
  data: function () {
    return {
      tableData: [
        {attribute: 'color', explain: '进度条的颜色，默认为 zView 主色', type: 'String', default: 'primary'},
        {attribute: 'failedColor', explain: '失败时的进度条颜色，默认为 zView 主色', type: 'String', default: 'error'},
        {attribute: 'height', explain: '进度条高度，单位 px', type: 'Number', default: '2'}
      ],
      eventData: [
        {name: 'start', explain: '开始从 0 显示进度条，并自动加载进度', back: '无'},
        {name: 'finish', explain: '结束进度条，自动补全剩余进度', back: '无'},
        {name: 'error', explain: '以错误的类型结束进度条，自动补全剩余进度', back: '无'},
        {name: 'update', explain: '精确加载到指定的进度', back: 'percent，指定的进度百分比'}
      ],
      demo3: '<z-button @click="start">Start</z-button>\r' +
              '<z-button @click="finish">Finish</z-button>\r' +
              '<z-button @click="error">Error</z-button>\r' +
              'export default {\r' +
              '    methods: {\r' +
              '        start() {\r' +
              '            this.$Loading.start();\r' +
              '        },\r' +
              '        finish() {\r' +
              '            this.$Loading.finish();\r' +
              '        },\r' +
              '        error() {\r' +
              '            this.$Loading.error();\r' +
              '        }\r' +
              '    }\r' +
              '})\r',
      demo1: '// 部分代码省略\r' +
              'router.beforeEach((to, from, next) => {\r' +
              '    zView.LoadingBar.start();\r' +
              '    next();\r' +
              '}\r' +
              'router.afterEach(route => {\r' +
              '    zView.LoadingBar.finish();\r' +
              '});\r',
      demo2: // 以jQuery的Ajax为例，部分代码省略
              'import $ from \'jquery\';\r' +
              'export default {\r' +
              '    methods: {\r' +
              '        getData() {\r' +
              '            this.$Loading.start();\r' +
              '            $.ajax({\r' +
              '                url: \'/api/someurl\',\r' +
              '                type: \'get\',\r' +
              '                success: function () {\r' +
              '                    this.$Loading.finish();\r' +
              '                },\r' +
              '                error: function () {\r' +
              '                    this.$Loading.error();\r' +
              '                }\r' +
              '            });\r' +
              '        }\r' +
              '    }\r' +
              '};\r'
    }
  },
  methods: {
    start: function () {
      this.$Loading.start()
    },
    finish: function () {
      this.$Loading.finish()
    },
    error: function () {
      this.$Loading.error()
    }
  }
}
</script>
<style scoped>
.loddingbar_portlet {
    padding-bottom: 15px !important;
}

.loddingbar_portlet h5 {
    margin-bottom: 15px;
    color: #555;
}

.anchor h5 {
    font-weight: bold;
    font-size: 14px;
    margin-top: 15px;
    margin-bottom: 10px;
}
</style>
