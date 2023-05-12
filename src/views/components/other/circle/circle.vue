<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-08 13:19:29
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
    <z-row :gutter="15">
      <z-col span="12">
        <z-circle :percent="80">
            <span class="demo-Circle-inner" style="font-size:24px">80%</span>
        </z-circle>
        <z-circle :percent="100" stroke-color="#5cb85c">
            <z-icon type="ios-checkmark-empty" size="60" style="color:#5cb85c"></z-icon>
        </z-circle>
        <z-circle :percent="35" stroke-color="#ff5500">
            <span class="demo-Circle-inner">
                <z-icon type="ios-close-empty" size="50" style="color:#ff5500"></z-icon>
            </span>
        </z-circle>
        <div class="example-desc">
            <header class="example-header"><span>基础用法</span></header>
            <div>圆形进度环有一系列的参数可配置，具体可以查看下面的API文档。</div>
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
        <z-circle :percent="percent" :stroke-color="color">
            <z-icon v-if="percent == 100" type="ios-checkmark-empty" size="60"
                style="color:#5cb85c"></z-icon>
            <span v-else style="font-size:24px">{{ percent }}%</span>
        </z-circle>
        <button-group size="large">
            <z-button icon="ios-plus-empty" @click="add"></z-button>
            <z-button icon="ios-minus-empty" @click="minus"></z-button>
        </button-group>
        <div class="example-desc">
            <header class="example-header"><span>配合外部组件使用</span></header>
            <div>通过数据的联动和逻辑控制，实现交互效果。</div>
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
        <z-circle :size="150" :trail-width="4" :stroke-width="5" :percent="75"
            stroke-linecap="square" stroke-color="#43a3fb">
            <div class="demo-Circle-custom">
                <h1>42,001,776</h1>
                <p>消费人群规模</p>
                <span>总占人数<i>75%</i></span>
            </div>
        </z-circle>
        <div class="example-desc">
            <header class="example-header"><span>自定义更多样式</span></header>
            <div>通过自定义slot和丰富的配置，可以组合出很多统计效果。</div>
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
          <h2 id="API">API</h2>
      </div>
      <div class="anchor">
          <h3 id="Circle_props">Circle props</h3>
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
                  <td>percent</td>
                  <td>百分比</td>
                  <td>Number</td>
                  <td>0</td>
              </tr>
              <tr>
                  <td>size</td>
                  <td>图表的宽度和高度，单位 px</td>
                  <td>Number</td>
                  <td>120</td>
              </tr>
              <tr>
                  <td>stroke-linecap</td>
                  <td>进度环顶端的形状，可选值为<code>square</code>（方）和<code>round</code>（圆）</td>
                  <td>String</td>
                  <td>round</td>
              </tr>
              <tr>
                  <td>stroke-width</td>
                  <td>进度环的线宽，单位 px</td>
                  <td>Number</td>
                  <td>6</td>
              </tr>
              <tr>
                  <td>stroke-color</td>
                  <td>进度环的颜色</td>
                  <td>String</td>
                  <td>#2db7f5</td>
              </tr>
              <tr>
                  <td>trail-width</td>
                  <td>进度环背景的线宽，单位 px</td>
                  <td>Number</td>
                  <td>5</td>
              </tr>
              <tr>
                  <td>trail-color</td>
                  <td>进度环背景的颜色</td>
                  <td>String</td>
                  <td>#eaeef2</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3 id="Circle_slot">Circle slot</h3>
      </div>
      <table class="table">
          <thead>
              <tr>
                  <th>名称</th>
                  <th>说明</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>无</td>
                  <td>自定义显示中间内容，内容默认垂直居中</td>
              </tr>
          </tbody>
      </table>
  </div>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpCircle',
  data: function () {
    return {
      percent: 0,
      demo1: '<z-circle :percent="80">\r' +
                        '    <span class="demo-Circle-inner" style="font-size:24px">80%</span>\r' +
                        '</z-circle>\r' +
                        '<z-circle :percent="100" stroke-color="#5cb85c">\r' +
                        '    <z-icon type="ios-checkmark-empty" size="60" style="color:#5cb85c"></z-icon>\r' +
                        '</z-circle>\r' +
                        '<z-circle :percent="35" stroke-color="#ff5500">\r' +
                        '    <span class="demo-Circle-inner">\r' +
                        '        <z-icon type="ios-close-empty" size="50" style="color:#ff5500"></z-icon>\r' +
                        '    </span>\r' +
                        '</z-circle>\r',
      demo2: '<div class="js-ileadcircle-demo">\r' +
                        '    <z-circle :percent="percent" :stroke-color="color">\r' +
                        '        <z-icon v-if="percent === 100" type="ios-checkmark-empty" size="60" style="color:#5cb85c"></z-icon>\r' +
                        '        <span v-else style="font-size:24px">{{ percent }}%</span>\r' +
                        '    </z-circle>\r' +
                        '    <button-group size="large">\r' +
                        '        <z-button icon="ios-plus-empty" @click="add"></z-button>\r' +
                        '        <z-button icon="ios-minus-empty" @click="minus"></z-button>\r' +
                        '    </button-group>\r' +
                        '</div>\r' +
                        '<script>\r' +
                        'export default{\r' +
                        '    data:function () {\r' +
                        '        return{\r' +
                        '            percent: 0\r' +
                        '        }\r' +
                        '    },\r' +
                        '    computed: {\r' +
                        '        color:function() {\r' +
                        '            let color = \'#2db7f5\';\r' +
                        '            if (this.percent === 100) {\r' +
                        '                color = \'#5cb85c\';\r' +
                        '            }\r' +
                        '            return color;\r' +
                        '       }\r' +
                        '    },\r' +
                        '    methods : {\r' +
                        '        add:function() {\r' +
                        '            if (this.percent >= 100) {\r' +
                        '                return false;\r' +
                        '            }\r' +
                        '            this.percent += 10;\r' +
                        '        },\r' +
                        '        minus:function() {\r' +
                        '            if (this.percent <= 0) {\r' +
                        '                return false;\r' +
                        '            }\r' +
                        '           this.percent -= 10;\r' +
                        '        }\r' +
                        '    }\r' +
                        '}\r' +
                        // eslint-disable-next-line no-useless-escape
                        '<\/script>\r',
      demo3: ' <z-circle\r' +
                        '            :size="150"\r' +
                        '            :trail-width="4"\r' +
                        '            :stroke-width="5"\r' +
                        '            :percent="75"\r' +
                        '            stroke-linecap="square"\r' +
                        '            stroke-color="#43a3fb">\r' +
                        '        <div class="demo-Circle-custom">\r' +
                        '            <h1>42,001,776</h1>\r' +
                        '            <p>消费人群规模</p>\r' +
                        '            <span>总占人数<i>75%</i></span>\r' +
                        '        </div>\r' +
                        '</z-circle>\r'
    }
  },
  computed: {
    color: function () {
      var color = '#2db7f5'
      if (this.percent === 100) {
        color = '#5cb85c'
      }
      return color
    }
  },
  methods: {
    add: function () {
      if (this.percent >= 100) {
        return false
      }
      this.percent += 10
    },
    minus: function () {
      if (this.percent <= 0) {
        return false
      }
      this.percent -= 10
    }
  }
}
</script>
<style scoped>
</style>
