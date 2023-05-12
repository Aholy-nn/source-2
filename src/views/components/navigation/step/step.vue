<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-03-17 16:25:45
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
    <z-row :gutter="15">
      <z-col span="12">
         <z-steps :current="1">
              <z-step title="已完成" content="这里是该步骤的描述信息"></z-step>
              <z-step title="进行中" content="这里是该步骤的描述信息"></z-step>
              <z-step title="待进行" content="这里是该步骤的描述信息"></z-step>
              <z-step title="待进行" content="这里是该步骤的描述信息"></z-step>
          </z-steps>
          <div class="example-desc">
              <header class="example-header"><span>基础用法</span></header>
              <p>基本用法，组件会根据current自动判断各步骤状态。</p>
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
        <z-steps :current="2" size="small">
            <z-step title="已完成"></z-step>
            <z-step title="进行中"></z-step>
            <z-step title="待进行"></z-step>
            <z-step title="待进行"></z-step>
        </z-steps>
        <div class="example-desc">
            <header class="example-header"><span>迷你版</span></header>
            <p>设置属性size为small启用迷你版。</p>
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
          <z-steps :current="1">
              <z-step title="注册" icon="ios-person"></z-step>
              <z-step title="上传头像" icon="ios-camera"></z-step>
              <z-step title="验证邮箱" icon="ios-mail"></z-step>
          </z-steps>
          <div class="example-desc">
              <header class="example-header"><span>带图标的步骤条</span></header>
              <p>通过设置Step的icon属性可以自定义图标。</p>
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
         <p>当前正在进行第 {{ current + 1 }} 步</p>
          <z-steps :current="current">
              <z-step title="步骤1"></z-step>
              <z-step title="步骤2"></z-step>
              <z-step title="步骤3"></z-step>
              <z-step title="步骤4"></z-step>
          </z-steps>
          <br><br>
          <z-button type="primary" @click="next">Next step</z-button>
          <div class="example-desc">
              <header class="example-header"><span>切换步骤 </span></header>
              <p>点击下一步按钮可以切换当前进度状态。</p>
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
            <z-steps :current="2" direction="vertical">
                <z-step title="已完成" content="这里是该步骤的描述信息"></z-step>
                <z-step title="已完成" content="这里是该步骤的描述信息"></z-step>
                <z-step title="进行中" content="这里是该步骤的描述信息"></z-step>
                <z-step title="待进行" content="这里是该步骤的描述信息"></z-step>
            </z-steps>
            <div class="example-desc">
                <header class="example-header"><span>垂直方向 </span></header>
                <p>设置属性direction为vertical在垂直方向展示。</p>
            </div>
        </z-col>
        <z-col span="12">
            <z-code-editor :content="demo5"></z-code-editor>
        </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
   <z-row>
      <z-col span="12">
          <z-steps :current="1" status="error">
              <z-step title="已完成" content="这里是该步骤的描述信息"></z-step>
              <z-step title="已完成" content="这里是该步骤的描述信息"></z-step>
              <z-step title="进行中" content="这里是该步骤的描述信息"></z-step>
              <z-step title="待进行" content="这里是该步骤的描述信息"></z-step>
          </z-steps>
          <div class="example-desc">
              <header class="example-header"><span>步骤运行错误  </span></header>
              <p>设置Steps的属性status为error指定当前步骤状态。</p>
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
          <h3 id="Steps_props">Steps props</h3>
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
                  <td>current</td>
                  <td>当前步骤，从 0 开始计数</td>
                  <td>Number</td>
                  <td>0</td>
              </tr>
              <tr>
                  <td>status</td>
                  <td>当前步骤的状态，可选值为<code>wait</code>、<code>process</code>、<code>finish</code>、<code>error</code>
                  </td>
                  <td>String</td>
                  <td>process</td>
              </tr>
              <tr>
                  <td>size</td>
                  <td>步骤条的尺寸，可选值为<code>small</code>或者不写</td>
                  <td>String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>direction</td>
                  <td>步骤条的方向，可选值为<code>horizontal</code>（水平）或<code>vertical</code>（垂直）
                  </td>
                  <td>String</td>
                  <td>horizontal</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3 id="Step_props">Step props</h3>
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
                  <td>status</td>
                  <td>步骤的状态，可选值为<code>wait</code>、<code>process</code>、<code>finish</code>、<code>error</code>，不设置时自动判断
                  </td>
                  <td>String</td>
                  <td>process</td>
              </tr>
              <tr>
                  <td>title</td>
                  <td>标题</td>
                  <td>String</td>
                  <td>空</td>
              </tr>
              <tr>
                  <td>content</td>
                  <td>步骤的详细描述，可选</td>
                  <td>String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>icon</td>
                  <td>步骤的图标，可选</td>
                  <td>String</td>
                  <td>-</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3 id="Step_slot">Step slot</h3><a href="#Step_slot"></a>
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
                  <td>title</td>
                  <td>自定义 title</td>
              </tr>
              <tr>
                  <td>content </td>
                  <td>自定义 content</td>
              </tr>
              <tr>
                  <td>icon</td>
                  <td>自定义 icon</td>
              </tr>
          </tbody>
      </table>
  </div>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpStep',
  data: function () {
    return {
      current: 0,
      demo1: '<z-steps :current="1">\r' +
              '    <z-step title="已完成" content="这里是该步骤的描述信息"></z-step>\r' +
              '    <z-step title="进行中" content="这里是该步骤的描述信息"></z-step>\r' +
              '    <z-step title="待进行" content="这里是该步骤的描述信息"></z-step>\r' +
              '    <z-step title="待进行" content="这里是该步骤的描述信息"></z-step>\r' +
              '</z-steps>\r',
      demo2: '<z-steps :current="2" size="small">\r' +
              '    <z-step title="已完成"></z-step>\r' +
              '    <z-step title="进行中"></z-step>\r' +
              '    <z-step title="待进行"></z-step>\r' +
              '    <z-step title="待进行"></z-step>\r' +
              '</z-steps>\r',
      demo3: '<z-steps :current="1">\r' +
              '    <z-step title="注册" icon="ios-person"></z-step>\r' +
              '    <z-step title="上传头像" icon="ios-camera"></z-step>\r' +
              '    <z-step title="验证邮箱" icon="ios-mail"></z-step>\r' +
              '</z-steps>\r',
      demo4: '<p>当前正在进行第 {{ current  + 1 }} 步</p>\r' +
              '<z-steps :current="current">\r' +
              '    <z-step title="步骤1"></z-step>\r' +
              '    <z-step title="步骤2"></z-step>\r' +
              '    <z-step title="步骤3"></z-step>\r' +
              '    <z-step title="步骤4"></z-step>\r' +
              '</z-steps>\r' +
              '<Button type="primary" @click="next">Next step</Button>\r' +
              '<script>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '            current: 0,\r' +
              '        }\r' +
              '    },\r' +
              'methods: {\r' +
              '    next:function() {\r' +
              '        if (this.current == 3) {\r' +
              '            this.current = 0;\r' +
              '        } else {\r' +
              '            this.current  += 1;\r' +
              '        }\r' +
              '    }\r' +
              '  }\r' +
              '}\r' +
              '<script>\r',
      demo5: '<z-steps :current="current" direction="vertical">\r' +
              '    <z-step title="已完成" content="这里是该步骤的描述信息"></z-step>\r' +
              '    <z-step title="已完成" content="这里是该步骤的描述信息"></z-step>\r' +
              '    <z-step title="进行中" content="这里是该步骤的描述信息"></z-step>\r' +
              '    <z-step title="待进行" content="这里是该步骤的描述信息"></z-step>\r' +
              '</z-steps>\r',
      demo6: '<z-steps :current="1" status="error">\r' +
              '    <z-step title="已完成" content="这里是该步骤的描述信息"></z-step>\r' +
              '    <z-step title="已完成" content="这里是该步骤的描述信息"></z-step>\r' +
              '    <z-step title="进行中" content="这里是该步骤的描述信息"></z-step>\r' +
              '    <z-step title="待进行" content="这里是该步骤的描述信息"></z-step>\r' +
              '</z-steps>\r'
    }
  },
  methods: {
    next: function () {
      if (this.current === 3) {
        this.current = 0
      } else {
        this.current += 1
      }
    }
  }
}
</script>
<style scoped>
</style>
