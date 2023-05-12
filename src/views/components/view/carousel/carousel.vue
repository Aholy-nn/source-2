<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-03-17 16:27:53
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <z-carousel v-model="value1" loop>
              <z-carousel-item>
                  <div class="demo-carousel">1</div>
              </z-carousel-item>
              <z-carousel-item>
                  <div class="demo-carousel">2</div>
              </z-carousel-item>
              <z-carousel-item>
                  <div class="demo-carousel">3</div>
              </z-carousel-item>
              <z-carousel-item>
                  <div class="demo-carousel">4</div>
              </z-carousel-item>
          </z-carousel>
          <div class="example-desc">
              <header class="example-header"><span>基础用法</span></header>
              <div>
                  <p>最基本的用法。</p>
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
           <z-carousel autoplay v-model="value2" loop>
                <z-carousel-item>
                    <div class="demo-carousel">1</div>
                </z-carousel-item>
                <z-carousel-item>
                    <div class="demo-carousel">2</div>
                </z-carousel-item>
                <z-carousel-item>
                    <div class="demo-carousel">3</div>
                </z-carousel-item>
                <z-carousel-item>
                    <div class="demo-carousel">4</div>
                </z-carousel-item>
            </z-carousel>
            <div class="example-desc">
                <header class="example-header"><span>自动切换</span></header>
                <div>
                    <p>设置属性 autoplay 可以自动轮播，同时可以设置属性 autoplay-speed 改变自动播放的速度。</p>
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
           <z-form :model="setting" :label-width="100">
              <z-form-item label="Automatic switching">
                  <z-switch v-model="setting.autoplay">
                      <span slot="open">On</span>
                      <span slot="close">Off</span>
                  </z-switch>
              </z-form-item>
              <z-form-item label="Circular indicator">
                  <z-switch v-model="setting.radiusDot">
                      <span slot="open">On</span>
                      <span slot="close">Off</span>
                  </z-switch>
              </z-form-item>
              <z-form-item label="Automatic switching speed">
                  <z-slider v-model="setting.autoplaySpeed" :min="300" :max="10000" :step="100"></z-slider>
              </z-form-item>
              <z-form-item label="Indicator position">
                  <z-radio-group v-model="setting.dots" type="button">
                      <z-radio label="inside">interior</z-radio>
                      <z-radio label="outside">exterior</z-radio>
                      <z-radio label="none">Don't show</z-radio>
                  </z-radio-group>
              </z-form-item>
              <z-form-item label="Switch the arrow">
                  <z-radio-group v-model="setting.arrow" type="button">
                      <z-radio label="hover">Hover displayed when</z-radio>
                      <z-radio label="always">Always show</z-radio>
                      <z-radio label="never">Don't show</z-radio>
                  </z-radio-group>
              </z-form-item>
              <z-form-item label="Indicator trigger mode">
                  <z-radio-group v-model="setting.trigger" type="button">
                      <z-radio label="click">Click</z-radio>
                      <z-radio label="hover">Hover</z-radio>
                  </z-radio-group>
              </z-form-item>
          </z-form>
          <z-carousel v-model="value3" :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed" :dots="setting.dots" :radius-dot="setting.radiusDot"
              :trigger="setting.trigger" :arrow="setting.arrow">
              <z-carousel-item>
                  <div class="demo-carousel">1</div>
              </z-carousel-item>
              <z-carousel-item>
                  <div class="demo-carousel">2</div>
              </z-carousel-item>
              <z-carousel-item>
                  <div class="demo-carousel">3</div>
              </z-carousel-item>
              <z-carousel-item>
                  <div class="demo-carousel">4</div>
              </z-carousel-item>
          </z-carousel>
          <div class="example-desc">
              <header class="example-header"><span>综合设置</span></header>
              <div>
                  <p>动态调整各配置。</p>
              </div>
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
            <h3>Carousel events</h3>
        </div>
        <table>
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
            <h3>breadcrumb-item props</h3>
        </div>
        <table>
            <thead>
                <tr style="border-bottom: 1px solid #e5e5e5;background: #eee;">
                    <td style="padding: 10px 20px">事件名</td>
                    <td style="padding: 10px 20px">说明</td>
                    <td style="padding: 10px 20px">返回值</td>
                </tr>
            </thead>
            <tbody>
                <tr style="border-bottom: 1px solid #e5e5e5">
                    <td style="padding: 10px 20px">on-change</td>
                    <td style="padding: 10px 20px">幻灯片切换时触发，目前激活的幻灯片的索引，原幻灯片的索引</td>
                    <td style="padding: 10px 20px">oldValue, value</td>
                </tr>
                <tr><td>on-click</td> <td>点击幻灯片时触发，返回索引值</td> <td>index</td></tr>
            </tbody>
        </table>
    </div>
   </z-card>
</div>
</template>
<script>
export default {
  name: 'cpCarousel',
  data: function () {
    return {
      value1: 0,
      value2: 0,
      value3: 0,
      setting: {
        autoplay: false,
        autoplaySpeed: 2000,
        dots: 'inside',
        radiusDot: false,
        trigger: 'click',
        arrow: 'hover'
      },
      tableData: [
        {attribute: 'trigger', explain: '指示器的触发方式，可选值为 click（点击），hover（悬停）', type: 'String', default: 'click'},
        {attribute: 'value', explain: '显示的标题', type: 'Number', default: '0'},
        {attribute: 'height', explain: '走马灯的高度，可填 auto 或具体高度数值，单位 px', type: 'String | Number', default: 'auto'},
        {attribute: 'loop', explain: '是否开启循环', type: 'Boolean', default: 'false'},
        {attribute: 'autoplay', explain: '是否自动切换', type: 'Boolean', default: 'false'},
        {attribute: 'autoplay-speed', explain: '自动切换的时间间隔，单位为毫秒', type: 'Number', default: '2000'},
        {attribute: 'dots', explain: '指示器的位置，可选值为 inside （内部），outside（外部），none（不显示）', type: 'String', default: 'inside'},
        {attribute: 'radius-dot', explain: '是否显示圆形指示器', type: 'Boolean', default: 'false'},
        {attribute: 'arrow', explain: '切换箭头的显示时机，可选值为 hover（悬停），always（一直显示），never（不显示）', type: 'String', default: 'hover'},
        {attribute: 'easing', explain: '动画效果', type: 'String', default: 'ease'}
      ],
      demo1: '<z-carousel v-model="value1" loop>\r' +
                        '    <z-carousel-item>\r' +
                        '        <div class="demo-carousel">1</div>\r' +
                        '    </z-carousel-item>\r' +
                        '    <z-carousel-item>\r' +
                        '        <div class="demo-carousel">2</div>\r' +
                        '    </z-carousel-item>\r' +
                        '    <z-carousel-item>\r' +
                        '        <div class="demo-carousel">3</div>\r' +
                        '    </z-carousel-item>\r' +
                        '    <z-carousel-item>\r' +
                        '        <div class="demo-carousel">4</div>\r' +
                        '    </z-carousel-item>\r' +
                        '</z-carousel>\r' +
                        '\r' +
                        'export default {\r' +
                        '    data () {\r' +
                        '        return {\r' +
                        '            value1: 0\r' +
                        '        }\r' +
                        '    }\r' +
                        '}',
      demo2: '<z-carousel autoplay v-model="value2" loop>\r' +
                        '    <z-carousel-item>\r' +
                        '        <div class="demo-carousel">1</div>\r' +
                        '    </z-carousel-item>\r' +
                        '    <z-carousel-item>\r' +
                        '        <div class="demo-carousel">2</div>\r' +
                        '    </z-carousel-item>\r' +
                        '    <z-carousel-item>\r' +
                        '        <div class="demo-carousel">3</div>\r' +
                        '    </z-carousel-item>\r' +
                        '    <z-carousel-item>\r' +
                        '        <div class="demo-carousel">4</div>\r' +
                        '    </z-carousel-item>\r' +
                        '</z-carousel>\r' +
                        'export default {\r' +
                        '    data () {\r' +
                        '        return {\r' +
                        '            value2: 0\r' +
                        '        }\r' +
                        '    }\r' +
                        '}',
      demo3: '<z-form :model="setting" :label-width="100">\r' +
                        '    <z-form-item label="Automatic switching">\r' +
                        '        <z-switch v-model="setting.autoplay">\r' +
                        '            <span slot="open">On</span>\r' +
                        '            <span slot="close">Off</span>\r' +
                        '        </z-switch>\r' +
                        '    </z-form-item>\r' +
                        '    <z-form-item label="Circular indicator">\r' +
                        '        <z-switch v-model="setting.radiusDot">\r' +
                        '            <span slot="open">On</span>\r' +
                        '            <span slot="close">Off</span>\r' +
                        '        </z-switch>\r' +
                        '    </z-form-item>\r' +
                        '    <z-form-item label="Automatic switching speed">\r' +
                        '        <z-slider v-model="setting.autoplaySpeed" :min="300" :max="10000" :step="100"></z-slider>\r' +
                        '    </z-form-item>\r' +
                        '    <z-form-item label="Indicator position">\r' +
                        '        <z-radio-group v-model="setting.dots" type="button">\r' +
                        '           <z-radio label="inside">interior</z-radio>\r' +
                        '            <z-radio label="outside">exterior</z-radio>\r' +
                        '           <z-radio label="none">Don\'t show</z-radio>\r' +
                        '         </z-radio-group>\r' +
                        '    </z-form-item>\r' +
                        '    <z-form-item label="Switch the arrow">\r' +
                        '        <z-radio-group v-model="setting.arrow" type="button">\r' +
                        '            <z-radio label="hover">Hover displayed when</z-radio>\r' +
                        '            <z-radio label="always">Always show</z-radio>\r' +
                        '            <z-radio label="never">Don\'t show</z-radio>\r' +
                        '        </z-radio-group>\r' +
                        '    </z-form-item>\r' +
                        '    <z-form-item label="Indicator trigger mode">\r' +
                        '        <z-radio-group v-model="setting.trigger" type="button">\r' +
                        '            <z-radio label="click">Click</z-radio>\r' +
                        '            <z-radio label="hover">Hover</z-radio>\r' +
                        '        </z-radio-group>\r' +
                        '    </z-form-item>\r' +
                        '</z-form>\r' +
                        '<z-carousel v-model="value3" :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed" :dots="setting.dots" :radius-dot="setting.radiusDot"\r' +
                        '    :trigger="setting.trigger" :arrow="setting.arrow">\r' +
                        '    <z-carousel-item>\r' +
                        '        <div class="demo-carousel">1</div>\r' +
                        '    </z-carousel-item>\r' +
                        '    <z-carousel-item>\r' +
                        '        <div class="demo-carousel">2</div>\r' +
                        '    </z-carousel-item>\r' +
                        '    <z-carousel-item>\r' +
                        '        <div class="demo-carousel">3</div>\r' +
                        '    </z-carousel-item>\r' +
                        '    <z-carousel-item>\r' +
                        '        <div class="demo-carousel">4</div>\r' +
                        '    </z-carousel-item>\r' +
                        '</z-carousel>\r' +
                        '\r' +
                        'export default {\r' +
                        '    data () {\r' +
                        '        return {\r' +
                        '            value3: 0,\r' +
                        '            setting: {\r' +
                        '                autoplay: false,\r' +
                        '                autoplaySpeed: 2000,\r' +
                        '                dots: \'inside\',\r' +
                        '                radiusDot: false,\r' +
                        '                trigger: \'click\',\r' +
                        '                arrow: \'hover\'\r' +
                        '            }\r' +
                        '        }\r' +
                        '    },\r' +
                        '    methods: {\r' +
                        '        close () {\r' +
                        '            this.visible = false;\r' +
                        '        }\r' +
                        '    }\r' +
                        '}'

    }
  },
  methods: {
    close: function () {
      this.visible = false
    },
    ok: function () {
      this.$Message.info('点击了确定')
    },
    cancel: function () {
      this.$Message.info('点击了取消')
    }
  }
}
</script>
<style scoped>
 .demo-carousel {
        background: #d0defb;
        height: 200px;
    }
</style>
