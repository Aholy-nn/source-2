<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-04-13 12:08:30
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
    <z-row :gutter="15">
      <z-col span="12">
         <z-spin></z-spin>
          <div class="example-desc">
              <header class="example-header"><span>基础用法</span></header>
              <div>最简单使用 Spin 的方法。</div>
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
        <z-row>
            <z-col span="8">
                <z-spin size="small"></z-spin>
            </z-col>
            <z-col span="8">
                <z-spin></z-spin>
            </z-col>
            <z-col span="8">
                <z-spin size="large"></z-spin>
            </z-col>
            <div class="example-desc">
                <header class="example-header"><span>各种尺寸</span></header>
                <div>通过设置size属性为large和small将 Spin 设置为大和小尺寸，不设置为默认（中）尺寸。</div>
            </div>
        </z-row>
      </z-col>
        <z-col span="12">
          <z-code-editor :content="demo2"></z-code-editor>
      </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
    <z-row :gutter="15">
      <z-col span="12">
          <Row>
            <z-col class="demo-spin-col" span="8">
                <z-spin fix>加载中...</z-spin>
            </z-col>
            <z-col class="demo-spin-col" span="8">
                <z-spin fix>
                    <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                    <div>Loading</div>
                </z-spin>
            </z-col>
            <z-col class="demo-spin-col" span="8">
                <z-spin fix>
                    <div class="loader">
                        <svg class="circular" viewBox="25 25 50 50">
                            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5"
                                stroke-miterlimit="10"></circle>
                        </svg>
                    </div>
                </z-spin>
            </z-col>
        </Row>
        <div class="example-desc">
            <header class="example-header"><span>自定义内容</span></header>
            <div>自定义 Spin 的内容，可以是简单的文字，也可以是很复杂的动画。</div>
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
        <div class="demo-spin-article">
            <h4>登金陵凤凰台</h4>
            <address>李白</address>
            <article>
                <p>凤凰台上凤凰游，凤去台空江自流。</p>
                <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
                <p>三山半落青天外，二水中分白鹭洲。</p>
                <p>总为浮云能蔽日，长安不见使人愁。</p>
            </article>
            <z-spin size="large" fix v-if="spinShow"></z-spin>
        </div>
        <br>
        切换显示状态：<z-switch @on-change="spinShow = !spinShow"></z-switch>
        <div class="example-desc">
            <header class="example-header"><span>状态切换</span></header>
            <div>控制 Spin 组件的显示和消失。</div>
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
        <div>
            <z-button type="primary" @click="handleSpinShow">整页显示，3秒后关闭</z-button>
            <z-button type="primary" @click="handleSpinCustom">自定义显示内容</z-button>
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
            <h2 id="API">API</h2>
        </div>
        <div class="anchor">
            <h3 id="Spin_props">Spin props</h3>
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
                    <td>size</td>
                    <td>Spin尺寸，可选值为<code>large</code>和<code>small</code>或者不设置</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>fix</td>
                    <td>是否固定，需要父级有<code>relative</code>或<code>absolute</code></td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                 <tr>
                    <td>icon-rotate</td>
                    <td>图标是否旋转，new</td>
                    <td>Boolean</td>
                    <td>true</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="Spin_slot">Spin slot</h3>
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
                    <td>自定义 Spin 的内容，设置slot后，默认的样式不生效</td>
                </tr>
            </tbody>
        </table>
    </div>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpSpin',
  data: function () {
    return {
      spinShow: true,
      demo1: '<z-spin></z-spin>',
      demo2: '<z-col span="8">\r' +
              '    <z-spin size="small"></z-spin>\r' +
              '</z-col>\r' +
              '<z-col span="8">\r' +
              '    <z-spin></z-spin>\r' +
              '</z-col>\r' +
              '<z-col span="8">\r' +
              '    <z-spin size="large"></z-spin>\r' +
              '</z-col>\r',
      demo3: '<z-spin fix></z-spin>',
      demo4: '<z-spin fix>加载中...</z-spin>\r' +
              '\r' +
              '<z-spin fix>\r' +
              '    <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>\r' +
              '    <div>Loading</div>\r' +
              '</z-spin>\r' +
              '\r' +
              '<z-spin fix>\r' +
              '    <div class="loader">\r' +
              '        <svg class="circular" viewBox="25 25 50 50">\r' +
              '            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>\r' +
              '        </svg>\r' +
              '    </div>\r' +
              '</z-spin>\r',
      demo5: '<div class="demo-spin-article">\r' +
              '    <h4>登金陵凤凰台</h4>\r' +
              '    <address>李白</address>\r' +
              '    <article>\r' +
              '        <p>凤凰台上凤凰游，凤去台空江自流。</p>\r' +
              '        <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>\r' +
              '        <p>三山半落青天外，二水中分白鹭洲。</p>\r' +
              '        <p>总为浮云能蔽日，长安不见使人愁。</p>\r' +
              '     </article>\r' +
              '    <z-spin size="large" fix v-if="spinShow"></z-spin>\r' +
              '</div>\r' +
              '<br>\r' +
              '切换显示状态：<z-switch @on-change="spinShow = !spinShow"></z-switch>\r',
      demo6: '<div class="js-ileadspin-demo">\r' +
              '    <z-button type="primary" @click="handleSpinShow">整页显示，3秒后关闭</z-button>\r' +
              '    <z-button type="primary" @click="handleSpinCustom">自定义显示内容</z-button>\r' +
              '</div>\r' +
              'export default{\r' +
              '    methods : {\r' +
              '        handleSpinShow:function() {\r' +
              '            this.$Spin.show();\r' +
              '            setTimeout(() => {\r' +
              '                this.$Spin.hide();\r' +
              '        }, 3000);\r' +
              '        },\r' +
              '        handleSpinCustom:function() {\r' +
              '            this.$Spin.show({\r' +
              '                    render: (h) => {\r' +
              '                    return h(\'div\', [\r' +
              '                        h(\'Icon\', {\r' +
              '                            \'class\': \'demo-spin-icon-load\',\r' +
              '                            props: {\r' +
              '                                type: \'load-c\',\r' +
              '                                size: 18\r' +
              '                            }\r' +
              '                        }),\r' +
              '                        h(\'div\', \'Loading\')\r' +
              '                    ])\r' +
              '                }\r' +
              '        });\r' +
              '            setTimeout(() => {\r' +
              '                this.$Spin.hide();\r' +
              '        }, 3000);\r' +
              '       }\r' +
              '    }\r' +
              '}\r'
    }
  },
  methods: {
    handleSpinShow: function () {
      this.$Spin.show()
      setTimeout(() => {
        this.$Spin.hide()
      }, 3000)
    },
    handleSpinCustom: function () {
      this.$Spin.show({
        render: (h) => {
          return h('div', [
            h('Icon', {
              'class': 'demo-spin-icon-load',
              props: {
                type: 'load-c',
                size: 18
              }
            }),
            h('div', 'Loading')
          ])
        }
      })
      setTimeout(() => {
        this.$Spin.hide()
      }, 3000)
    }
  }
}
</script>
<style scoped>
.demo-spin-article {
    width: 100%;
    position: relative;
    font-size: 12px;
}
.demo-spin-article address {
    margin: 10px 0px;
}
.demo-spin-container {
    display: inline-block;
    width: 200px;
    height: 100px;
    position: relative;
    border: 1px solid #eee;
}
.demo-spin-icon-load {
    animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
    from {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }

    to {
        transform: rotate(360deg);
    }
}
.demo-spin-col {
    height: 100px;
    position: relative;
    border: 1px solid #eee;
}
.path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
}
.loader {
    width: 30px;
    height: 30px;
    position: relative;
    margin: 0 auto;
}
.circular {
    -webkit-animation: rotate 2s linear infinite;
    animation: rotate 2s linear infinite;
    height: 100%;
    -webkit-transform-origin: center center;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
</style>
