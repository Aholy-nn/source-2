<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-06 11:37:36
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
    <z-row :gutter="15">
      <z-col span="12">
          <z-button>Default</z-button>
          <z-button type="primary">Primary</z-button>
          <z-button type="primary" ghost>Ghost</z-button>
          <z-button type="dashed">Dashed</z-button>
          <z-button type="text">Text</z-button>
          <br><br>
          <z-button type="info">Info</z-button>
          <z-button type="success">Success</z-button>
          <z-button type="warning">Warning</z-button>
          <z-button type="error">Error</z-button>
          <div class="example-desc">
              <header class="example-header"><span>按钮类型</span></header>
              <div>
                  <p>按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。</p>
                  <p>通过设置<code>type</code>为<code>primary</code>、<code>ghost</code>、<code>dashed</code>、<code>text</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>创建不同样式的按钮，不设置为默认样式。
                  </p>
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
          <z-button type="primary" shape="circle" icon="ios-search"></z-button>
          <z-button type="primary" icon="ios-search">Search</z-button>
          <z-button type="primary" shape="circle" icon="ios-search">Search</z-button>
          <z-button type="primary" shape="circle">Circle</z-button>
          <br><br>
          <z-button type="primary" ghost shape="circle" icon="ios-search"></z-button>
          <z-button type="primary" ghost icon="ios-search">Search</z-button>
          <z-button type="primary" ghost shape="circle" icon="ios-search">Search</z-button>
          <z-button type="primary" ghost shape="circle">Circle</z-button>
          <div class="example-desc">
              <header class="example-header"><span>图标按钮及按钮形状 </span></header>
              <div>
                  <p>通过设置<code>icon</code>属性在<code>Button</code>内嵌入一个<code>Icon</code>，或者直接在<code>Button</code>内使用<code>Icon</code>组件。
                  </p>
                  <p>使用<code>Button</code>的<code>icon</code>属性，图标位置将在最左边，如果需要自定义位置，需使用<code>Icon</code>组件。
                  </p>
                  <p>通过设置<code>shape</code>属性为<code>circle</code>，可将按钮置为圆的形状。</p>
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
          <z-button type="primary" size="large">Large</z-button>
          <z-button type="primary">Default</z-button>
          <z-button type="primary" size="small">Small</z-button>
          <br><br>
          <z-button type="primary" shape="circle" size="large">Large</z-button>
          <z-button type="primary" shape="circle">Default</z-button>
          <z-button type="primary" shape="circle" size="small">Small</z-button>
          <div class="example-desc">
              <header class="example-header"><span>按钮尺寸 </span></header>
              <div>
                  <p>按钮有三种尺寸：大、默认（中）、小</p>
                  <p>通过设置<code>size</code>为<code>large</code>和<code>small</code>将按钮设置为大和小尺寸，不设置为默认（中）尺寸。
                  </p>
              </div>
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
        <z-button type="success" long>SUBMIT</z-button>
          <br><br>
          <z-button type="error" long>DELETE</z-button>
          <div class="example-desc">
              <header class="example-header"><span>长按钮 </span></header>
              <div>
                  <p>通过设置属性 <code>long</code> 可将按钮宽度设置为 100%，常用于弹窗内操作按钮。</p>
                  <p>使用者也可以直接通过给组件添加 <code>style</code> 来设置更细节的样式，比如定宽。</p>
              </div>
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
        <z-button>Default</z-button>
        <z-button disabled>Default(Disabled)</z-button>
        <br><br>
        <z-button type="primary">Primary</z-button>
        <z-button type="primary" disabled>Primary(Disabled)</z-button>
        <br><br>
        <z-button type="primary" ghost>Ghost</z-button>
        <z-button type="primary" ghost disabled>Ghost(Disabled)</z-button>
        <br><br>
        <z-button type="dashed">Dashed</z-button>
        <z-button type="dashed" disabled>Dashed(Disabled)</z-button>
        <br><br>
        <z-button type="text">Text</z-button>
        <z-button type="text" disabled>Text(Disabled)</z-button>
        <div class="example-desc">
            <header class="example-header"><span>不可用状态 </span></header>
            <div>
                <p>通过添加<code>disabled</code>属性可将按钮设置为不可用状态。</p>
            </div>
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
        <z-button type="primary" loading>Loading...</z-button>
        <z-button type="primary" :loading="loading" @click="toLoading">
            <span v-if="!loading">Click me!</span>
            <span v-else>Loading...</span>
        </z-button>
        <z-button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
            <span v-if="!loading2">Click me!</span>
            <span v-else>Loading...</span>
        </z-button>
        <div class="example-desc">
            <header class="example-header"><span>加载中状态 </span></header>
            <div>
                <p>通过添加<code>loading</code>属性可以让按钮处于加载中状态，后两个按钮在点击时进入加载状态。</p>
            </div>
        </div>
      </z-col>
      <z-col span="12">
          <z-code-editor :content="demo6"></z-code-editor>
      </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
    <z-row :gutter="15">
      <z-col span="12">
        <h4>Basic</h4>
        <br><br>
        <z-button-group>
            <z-button>Cancel</z-button>
            <z-button type="primary">Confirm</z-button>
        </z-button-group>
        <z-button-group>
            <z-button disabled>Yesterday</z-button>
            <z-button disabled>Today</z-button>
            <z-button disabled>Tomorrow</z-button>
        </z-button-group>
        <z-button-group>
            <z-button type="primary">L</z-button>
            <z-button>M</z-button>
            <z-button type="primary" ghost>M</z-button>
            <z-button type="dashed">R</z-button>
        </z-button-group>
        <br><br>
        <h4>Icons</h4>
        <br><br>
        <z-button-group>
            <z-button type="primary">
                <z-icon type="chevron-left"></z-icon>
                Backward
            </z-button>
            <z-button type="primary">
                Forward
                <z-icon type="chevron-right"></z-icon>
            </z-button>
        </z-button-group>
        <z-button-group>
            <z-button type="primary" icon="ios-skipbackward"></z-button>
            <z-button type="primary" icon="ios-skipforward"></z-button>
        </z-button-group>
        <z-button-group>
            <z-button type="primary" ghost icon="ios-color-wand-outline"></z-button>
            <z-button type="primary" ghost icon="ios-sunny-outline"></z-button>
            <z-button type="primary" ghost icon="ios-crop"></z-button>
            <z-button type="primary" ghost icon="ios-color-filter-outline"></z-button>
        </z-button-group>
        <br><br>
        <h4>Circle</h4>
        <br><br>
        <z-button-group shape="circle">
            <z-button type="primary">
                <Icon type="chevron-left"></Icon>
                Backward
            </z-button>
            <z-button type="primary">
                Forward
                <Icon type="chevron-right"></Icon>
            </z-button>
        </z-button-group>
        <z-button-group shape="circle">
            <z-button type="primary" icon="ios-skipbackward"></z-button>
            <z-button type="primary" icon="ios-skipforward"></z-button>
        </z-button-group>
        <z-button-group shape="circle">
            <z-button type="primary" ghost icon="ios-color-wand-outline"></z-button>
            <z-button type="primary" ghost icon="ios-sunny-outline"></z-button>
            <z-button type="primary" ghost icon="ios-crop"></z-button>
            <z-button type="primary" ghost icon="ios-color-filter-outline"></z-button>
        </z-button-group>
        <br><br>
        <h4>Size</h4>
        <br><br>
        <z-button-group size="large">
            <z-button type="primary" ghost>Large</z-button>
            <z-button type="primary" ghost>Large</z-button>
        </z-button-group>
        <z-button-group>
            <z-button type="primary" ghost>Default</z-button>
            <z-button type="primary" ghost>Default</z-button>
        </z-button-group>
        <z-button-group size="small">
            <z-button type="primary" ghost>Small</z-button>
            <z-button type="primary" ghost>Small</z-button>
        </z-button-group>
        <br><br>
        <z-button-group size="large" shape="circle">
            <z-button type="primary" ghost>Large</z-button>
            <z-button type="primary" ghost>Large</z-button>
        </z-button-group>
        <z-button-group shape="circle">
            <z-button type="primary" ghost>Default</z-button>
            <z-button type="primary" ghost>Default</z-button>
        </z-button-group>
        <z-button-group size="small" shape="circle">
            <z-button type="primary" ghost>Small</z-button>
            <z-button type="primary" ghost>Small</z-button>
        </z-button-group>
        <div class="example-desc">
            <header class="example-header"><span>按钮组合 </span></header>
            <div>
                <p>将多个<code>Button</code>放入<code>ButtonGroup</code>内，可实现按钮组合的效果。</p>
                <p>通过设置<code>ButtonGroup</code>的属性<code>size</code>为<code>large</code>和<code>small</code>，可将按钮组尺寸设置为大和小，不设置<code>size</code>，则为默认（中）尺寸。
                </p>
                <p>通过设置<code>ButtonGroup</code>的属性<code>shape</code>为<code>circle</code>，可将按钮组形状设置为圆角。
                </p>
            </div>
        </div>
      </z-col>
      <z-col span="12">
          <z-code-editor :content="demo7"></z-code-editor>
      </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
    <z-row :gutter="15">
      <z-col span="12">
        <z-button-group vertical>
            <z-button type="primary" ghost icon="social-facebook"></z-button>
            <z-button type="primary" ghost icon="social-twitter"></z-button>
            <z-button type="primary" ghost icon="social-googleplus"></z-button>
            <z-button type="primary" ghost icon="social-tumblr"></z-button>
        </z-button-group>
        <div class="example-desc">
            <header class="example-header"><span>按钮组纵向排列</span></header>
            <div>
                <p>通过设置<code>ButtonGroup</code>的属性<code>vertical</code>，可以使按钮组纵向排列。</p>
            </div>
        </div>
      </z-col>
      <z-col span="12">
          <z-code-editor :content="demo8"></z-code-editor>
      </z-col>
    </z-row>
  </z-card>

<z-card bordered dis-hover class="m-t-15">
  <div class="demo-api">
      <div class="anchor">
          <h2 id="API">API</h2>
      </div>
      <div class="anchor">
          <h3 id="Button_props">Button props</h3>
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
                  <td>type</td>
                  <td>按钮类型，可选值为<code>primary</code>、<code>ghost</code>、<code>dashed</code>、<code>text</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>或者不设置
                  </td>
                  <td>String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>size</td>
                  <td>按钮大小，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置
                  </td>
                  <td>String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>shape</td>
                  <td>按钮形状，可选值为<code>circle</code>或者不设置</td>
                  <td>String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>long</td>
                  <td>开启后，按钮的长度为 100%</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>html-type</td>
                  <td>设置<code>button</code>原生的<code>type</code>，可选值为<code>button</code>、<code>submit</code>、<code>reset</code>
                  </td>
                  <td>String</td>
                  <td>button</td>
              </tr>
              <tr>
                  <td>disabled</td>
                  <td>设置按钮为禁用状态</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>loading</td>
                  <td>设置按钮为加载中状态</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>icon</td>
                  <td>设置按钮的图标类型</td>
                  <td>String</td>
                  <td>-</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3 id="ButtonGroup_props">ButtonGroup props</h3>
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
                  <td>按钮组合大小，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置
                  </td>
                  <td>String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>shape</td>
                  <td>按钮组合形状，可选值为<code>circle</code>或者不设置</td>
                  <td>String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>vertical</td>
                  <td>是否纵向排列按钮组</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
          </tbody>
      </table>
  </div>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpButton',
  data: function () {
    return {
      loading: false,
      loading2: false,
      demo1: '<z-button>Default</z-button>\r' +
                '<z-button type="primary">Primary</z-button>\r' +
                '<z-button type="primary" ghost>Ghost</z-button>\r' +
                '<z-button type="dashed">Dashed</z-button>\r' +
                '<z-button type="text">Text</z-button>\r' +
                '<br><br>\r' +
                '<z-button type="info">Info</z-button>\r' +
                '<z-button type="success">Success</z-button>\r' +
                '<z-button type="warning">Warning</z-button>\r' +
                '<z-button type="error">Error</z-button>',
      demo2: '<z-button type="primary" shape="circle" icon="ios-search"></z-button>\r' +
                '<z-button type="primary" icon="ios-search">Search</z-button>\r' +
                '<z-button type="primary" shape="circle" icon="ios-search">Search</z-button>\r' +
                '<z-button type="primary" shape="circle">Circle</z-button>\r' +
                '<br><br>\r' +
                '<z-button type="primary" ghost shape="circle" icon="ios-search"></z-button>\r' +
                '<z-button type="primary" ghost icon="ios-search">Search</z-button>\r' +
                '<z-button type="primary" ghost shape="circle" icon="ios-search">Search</z-button>\r' +
                '<z-button type="primary" ghost shape="circle">Circle</z-button>',
      demo3: '<z-button type="primary" size="large">Large</z-button>\r' +
                '<z-button type="primary">Default</z-button>\r' +
                '<z-button type="primary" size="small">Small</z-button>\r' +
                '<br><br>\r' +
                '<z-button type="primary" shape="circle" size="large">Large</z-button>\r' +
                '<z-button type="primary" shape="circle">Default</z-button>\r' +
                '<z-button type="primary" shape="circle" size="small">Small</z-button>',
      demo4: '<z-button type="success" long>SUBMIT</z-button>\r' +
                '<br><br>\r' +
                '<z-button type="error" long>DELETE</z-button>',
      demo5: '<z-button>Default</z-button>\r' +
                '<z-button disabled>Default(Disabled)</z-button>\r' +
                '<br><br>\r' +
                '<z-button type="primary">Primary</z-button>\r' +
                '<z-button type="primary" disabled>Primary(Disabled)</z-button>\r' +
                '<br><br>\r' +
                '<z-button type="primary" ghost>Ghost</z-button>\r' +
                '<z-button type="primary" ghost disabled>Ghost(Disabled)</z-button>\r' +
                '<br><br>\r' +
                '<z-button type="dashed">Dashed</z-button>\r' +
                '<z-button type="dashed" disabled>Dashed(Disabled)</z-button>\r' +
                '<br><br>\r' +
                '<z-button type="text">Text</z-button>\r' +
                '<z-button type="text" disabled>Text(Disabled)</z-button>',
      demo6: '<div class="js-ileadbutton-demo">\r' +
                '    <z-button type="primary" loading>Loading...</z-button>\r' +
                '    <z-button type="primary" :loading="loading" @click="toLoading">\r' +
                '        <span v-if="!loading">Click me!</span>\r' +
                '        <span v-else>Loading...</span>\r' +
                '    </z-button>\r' +
                '    <z-button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">\r' +
                '        <span v-if="!loading2">Click me!</span>\r' +
                '        <span v-else>Loading...</span>\r' +
                '    </z-button>\r' +
                '</div>\r' +
                '<script>\r' +
                'export default {\r' +
                '    data:function () {\r' +
                '        return {\r' +
                '            loading: false,\r' +
                '            loading2: false\r' +
                '        }\r' +
                '    },\r' +
                '    methods: {\r' +
                '        toLoading:function() {\r' +
                '             this.loading = true;\r' +
                '        },\r' +
                '        toLoading2:function() {\r' +
                '            this.loading2 = true;\r' +
                '        }\r' +
                '    }\r' +
                '}\r' +
                // eslint-disable-next-line no-useless-escape
                '<\/script>\r',
      demo7: '<h4>Basic</h4>\r' +
                '<br><br>\r' +
                '<z-button-group>\r' +
                '    <z-button>Cancel</z-button>\r' +
                '    <z-button type="primary">Confirm</z-button>\r' +
                '</z-button-group>\r' +
                '<z-button-group>\r' +
                '    <z-button disabled>Yesterday</z-button>\r' +
                '    <z-button disabled>Today</z-button>\r' +
                '    <z-button disabled>Tomorrow</z-button>\r' +
                '</z-button-group>\r' +
                '<z-button-group>\r' +
                '    <z-button type="primary">L</z-button>\r' +
                '    <z-button>M</z-button>\r' +
                '    <z-button type="primary" ghost>M</z-button>\r' +
                '   <z-button type="dashed">R</z-button>\r' +
                '</z-button-group>\r' +
                '<br><br>\r' +
                '<h4>Icons</h4>\r' +
                '<br><br>\r' +
                '<z-button-group>\r' +
                '    <z-button type="primary">\r' +
                '        <Icon type="chevron-left"></Icon>\r' +
                '        Backward\r' +
                '    </z-button>\r' +
                '    <z-button type="primary">\r' +
                '        Forward\r' +
                '        <Icon type="chevron-right"></Icon>\r' +
                '    </z-button>\r' +
                '</z-button-group>\r' +
                '<z-button-group>\r' +
                '    <z-button type="primary" icon="ios-skipbackward"></z-button>\r' +
                '    <z-button type="primary" icon="ios-skipforward"></z-button>\r' +
                '</z-button-group>\r' +
                '<z-button-group>\r' +
                '    <z-button type="primary" ghost icon="ios-color-wand-outline"></z-button>\r' +
                '    <z-button type="primary" ghost icon="ios-sunny-outline"></z-button>\r' +
                '    <z-button type="primary" ghost icon="ios-crop"></z-button>\r' +
                '    <z-button type="primary" ghost icon="ios-color-filter-outline"></z-button>\r' +
                '</z-button-group>\r' +
                '<br><br>\r' +
                '<h4>Circle</h4>\r' +
                '<br><br>\r' +
                '<z-button-group shape="circle">\r' +
                '    <z-button type="primary">\r' +
                '        <z-icon type="chevron-left"></z-icon>\r' +
                '        Backward\r' +
                '    </z-button>\r' +
                '    <z-button type="primary">\r' +
                '        Forward\r' +
                '        <z-icon type="chevron-right"></z-icon>\r' +
                '    </z-button>\r' +
                '</z-button-group>\r' +
                '<z-button-group shape="circle">\r' +
                '    <z-button type="primary" icon="ios-skipbackward"></z-button>\r' +
                '    <z-button type="primary" icon="ios-skipforward"></z-button>\r' +
                '</z-button-group>\r' +
                '<z-button-group shape="circle">\r' +
                '    <z-button type="primary" ghost icon="ios-color-wand-outline"></z-button>\r' +
                '    <z-button type="primary" ghost icon="ios-sunny-outline"></z-button>\r' +
                '    <z-button type="primary" ghost icon="ios-crop"></z-button>\r' +
                '    <z-button type="primary" ghost icon="ios-color-filter-outline"></z-button>\r' +
                '</z-button-group>\r' +
                '<br><br>\r' +
                '<h4>Size</h4>\r' +
                '<br><br>\r' +
                '<z-button-group size="large">\r' +
                '    <z-button type="primary" ghost>Large</z-button>\r' +
                '    <z-button type="primary" ghost>Large</z-button>\r' +
                '</z-button-group>\r' +
                '<z-button-group>\r' +
                '    <z-button type="primary" ghost>Default</z-button>\r' +
                '    <z-button type="primary" ghost>Default</z-button>\r' +
                '</z-button-group>\r' +
                '<z-button-group size="small">\r' +
                '    <z-button type="primary" ghost>Small</z-button>\r' +
                '    <z-button type="primary" ghost>Small</z-button>\r' +
                '</z-button-group>\r' +
                '<br><br>\r' +
                '<z-button-group size="large" shape="circle">\r' +
                '    <z-button type="primary" ghost>Large</z-button>\r' +
                '    <z-button type="primary" ghost>Large</z-button>\r' +
                '</z-button-group>\r' +
                '<z-button-group shape="circle">\r' +
                '    <z-button type="primary" ghost>Default</z-button>\r' +
                '    <z-button type="primary" ghost>Default</z-button>\r' +
                '</z-button-group>\r' +
                '<z-button-group size="small" shape="circle">\r' +
                '    <z-button type="primary" ghost>Small</z-button>\r' +
                '    <z-button type="primary" ghost>Small</z-button>\r' +
                '</z-button-group>',
      demo8: '<z-button-group vertical>\r' +
                '    <z-button type="primary" ghost icon="social-facebook"></z-button>\r' +
                '    <z-button type="primary" ghost icon="social-twitter"></z-button>\r' +
                '    <z-button type="primary" ghost icon="social-googleplus"></z-button>\r' +
                '    <z-button type="primary" ghost icon="social-tumblr"></z-button>\r' +
                '</z-button-group>'
    }
  },
  methods: {
    toLoading: function () {
      this.loading = true
    },
    toLoading2: function () {
      this.loading2 = true
    }
  }
}
</script>
