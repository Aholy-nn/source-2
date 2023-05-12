<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-06 13:09:44
 * @LastEditors  : Please set LastEditors
 -->
<template>
  <div>
    <z-card bordered dis-hover class="m-t-15">
      <z-row>
        <z-col span="24" class="demo-col">24：100%</z-col>
      </z-row>
      <z-row class="m-t-5">
        <z-col span="12" class="demo-col">12：50%</z-col>
        <z-col span="12" class="demo-col light">12：50%</z-col>
      </z-row>
      <z-row class="m-t-5">
        <z-col span="8" class="demo-col">8：33.33%</z-col>
        <z-col span="8" class="demo-col light">8：33.33%</z-col>
        <z-col span="8" class="demo-col">8：33.33%</z-col>
      </z-row>
      <z-row class="m-t-5">
        <z-col span="6" class="demo-col">6：25%</z-col>
        <z-col span="6" class="demo-col light">6：25%</z-col>
        <z-col span="6" class="demo-col">6：25%</z-col>
        <z-col span="6" class="demo-col light">6：25%</z-col>
      </z-row>
      <z-row class="m-t-5">
        <z-col span="16" class="demo-col">16：66.66%</z-col>
        <z-col span="8" class="demo-col light">8：33.33%</z-col>
      </z-row>
      <div class="example-desc">
        <p>我们采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页布局，可以使页面排版美观、舒适。</p>
        <p>我们定义了两个概念，行row和列col，具体使用方法如下：</p>
        <p>使用row在水平方向创建一行</p>
        <p>将一组col插入在row中</p>
        <p>在每个col中，键入自己的内容</p>
        <p>通过设置col的span参数，指定跨越的范围，其范围是1到24</p>
        <p>每个row中的col总和应该为24</p>
      </div>
    </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-row>
            <z-col span="12">
              <div class="demo-col">col-12</div>
            </z-col>
            <z-col span="12">
              <div class="demo-col light">col-12</div>
            </z-col>
          </z-row>
          <br />
          <z-row>
            <z-col span="8">
              <div class="demo-col">col-8</div>
            </z-col>
            <z-col span="8">
              <div class="demo-col light">col-8</div>
            </z-col>
            <z-col span="8">
              <div class="demo-col">col-8</div>
            </z-col>
          </z-row>
          <br />
          <z-row>
            <z-col span="6">
              <div class="demo-col">col-6</div>
            </z-col>
            <z-col span="6">
              <div class="demo-col light">col-6</div>
            </z-col>
            <z-col span="6">
              <div class="demo-col">col-6</div>
            </z-col>
            <z-col span="6">
              <div class="demo-col light">col-6</div>
            </z-col>
          </z-row>
          <div class="example-desc">
            <header class="example-header">
              <span>基础用法</span>
            </header>
            <div>
              <p>水平排列的布局。</p>
              <p>
                <code>col</code>必须放在
                <code>row</code>里面。
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
          <z-row :gutter="16">
              <z-col span="6">
                  <div class="demo-col">col-6</div>
              </z-col>
              <z-col span="6">
                  <div class="demo-col">col-6</div>
              </z-col>
              <z-col span="6">
                  <div class="demo-col">col-6</div>
              </z-col>
              <z-col span="6">
                  <div class="demo-col">col-6</div>
              </z-col>
          </z-row>
          <div class="example-desc">
              <header class="example-header"><span>区块间隔</span></header>
              <div>
                  <p>通过给 <code>row</code> 添加 <code
                          >gutter</code> 属性，可以给下属的 <code
                          >col</code> 添加间距，推荐使用 <code
                          >(16+8n)px</code> 作为栅格间隔。</p>
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
          <z-row type="flex">
                <z-col span="6" order="4">
                    <div class="demo-col">1 | order-4</div>
                </z-col>
                <z-col span="6" order="3">
                    <div class="demo-col light">2 | order-3</div>
                </z-col>
                <z-col span="6" order="2">
                    <div class="demo-col">3 | order-2</div>
                </z-col>
                <z-col span="6" order="1">
                    <div class="demo-col light">4 | order-1</div>
                </z-col>
            </z-row>
            <div class="example-desc">
                <header class="example-header"><span>栅格顺序(Flex) </span></header>
                <div>
                    <p>通过 Flex 布局的<code>order</code>来改变栅格的顺序。</p>
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
          <z-row>
              <z-col span="18" push="6">
                  <div class="demo-col">col-18 | push-6</div>
              </z-col>
              <z-col span="6" pull="18">
                  <div class="demo-col light">col-6 | pull-18</div>
              </z-col>
          </z-row>
          <div class="example-desc">
              <header class="example-header"><span>栅格排序</span></header>
              <div>
                  <p>通过设置<code>push</code>和<code
                          >pull</code>来改变栅格的顺序。</p>
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
            <z-row>
                <z-col span="8">
                    <div class="demo-col">col-8</div>
                </z-col>
                <z-col span="8" offset="8">
                    <div class="demo-col light">col-8 | offset-8</div>
                </z-col>
            </z-row>
            <br>
            <z-row>
                <z-col span="6" offset="8">
                    <div class="demo-col">col-6 | offset-8</div>
                </z-col>
                <z-col span="6" offset="4">
                    <div class="demo-col light">col-6 | offset-4</div>
                </z-col>
            </z-row>
            <br>
            <z-row>
                <z-col span="12" offset="8">
                    <div class="demo-col">col-12 | offset-8</div>
                </z-col>
            </z-row>
            <div class="example-desc">
                <header class="example-header"><span>左右偏移</span></header>
                <div>
                    <p>通过设置<code
                            >offset</code>属性，将列进行左右偏移，偏移栅格数为offset的值。</p>
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
          <p class="demo-p">子元素向左排列</p>
          <z-row type="flex" justify="start" class="code-row-bg">
              <z-col span="4">
                  <div class="demo-col">col-4</div>
              </z-col>
              <z-col span="4">
                  <div class="demo-col light">col-4</div>
              </z-col>
              <z-col span="4">
                  <div class="demo-col">col-4</div>
              </z-col>
              <z-col span="4">
                  <div class="demo-col light">col-4</div>
              </z-col>
          </z-row>
          <p class="demo-p">子元素向右排列</p>
          <z-row type="flex" justify="end" class="code-row-bg">
              <z-col span="4">
                  <div class="demo-col">col-4</div>
              </z-col>
              <z-col span="4">
                  <div class="demo-col light">col-4</div>
              </z-col>
              <z-col span="4">
                  <div class="demo-col">col-4</div>
              </z-col>
              <z-col span="4">
                  <div class="demo-col light">col-4</div>
              </z-col>
          </z-row>
          <p class="demo-p">子元素居中排列</p>
          <z-row type="flex" justify="center" class="code-row-bg">
              <z-col span="4">
                  <div class="demo-col">col-4</div>
              </z-col>
              <z-col span="4">
                  <div class="demo-col light">col-4</div>
              </z-col>
              <z-col span="4">
                  <div class="demo-col">col-4</div>
              </z-col>
              <z-col span="4">
                  <div class="demo-col light">col-4</div>
              </z-col>
          </z-row>
          <p class="demo-p">子元素等宽排列</p>
          <z-row type="flex" justify="space-between" class="code-row-bg">
              <z-col span="4">
                  <div class="demo-col">col-4</div>
              </z-col>
              <z-col span="4">
                  <div class="demo-col light">col-4</div>
              </z-col>
              <z-col span="4">
                  <div class="demo-col">col-4</div>
              </z-col>
              <z-col span="4">
                  <div class="demo-col light">col-4</div>
              </z-col>
          </z-row>
          <p class="demo-p">子元素分散排列</p>
          <z-row type="flex" justify="space-around" class="code-row-bg">
              <z-col span="4">
                  <div class="demo-col">col-4</div>
              </z-col>
              <z-col span="4">
                  <div class="demo-col light">col-4</div>
              </z-col>
              <z-col span="4">
                  <div class="demo-col">col-4</div>
              </z-col>
              <z-col span="4">
                  <div class="demo-col light">col-4</div>
              </z-col>
          </z-row>
          <div class="example-desc">
              <header class="example-header"><span>Flex布局</span></header>
              <div>
                  <p>通过给<code>row</code>设置参数<code
                          >justify</code>为不同的值，来定义子元素的排布方式。在<code
                          >flex</code>模式下有效。</p>
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
            <p class="demo-p">顶部对齐</p>
            <z-row type="flex" justify="center" align="top" class="code-row-bg">
                <z-col span="4" class="demo-col">
                  <p style="height: 80px">
                    col-4
                  </p>
                </z-col>
                <z-col span="4" class="demo-col">
                  <p style="height: 30px">
                    col-4
                  </p>
                </z-col>
                <z-col span="4" class="demo-col">
                  <p style="height: 100px">
                      col-4
                  </p>
                </z-col>
                <z-col span="4" class="demo-col">
                  <p style="height: 60px">
                      col-4
                  </p>
                </z-col>
            </z-row>
            <p class="demo-p">底部对齐</p>
            <z-row type="flex" justify="center" align="bottom" class="code-row-bg">
                <z-col span="4" class="demo-col">
                  <p style="height: 80px">
                      col-4
                  </p>
                </z-col>
                <z-col span="4" class="demo-col">
                  <p style="height: 30px">
                      col-4
                  </p>
                </z-col>
                <z-col span="4" class="demo-col">
                  <p style="height: 100px">
                      col-4
                  </p>
                </z-col>
                <z-col span="4" class="demo-col">
                  <p style="height: 60px">
                      col-4
                  </p>
                </z-col>
            </z-row>
            <p class="demo-p">居中对齐</p>
            <z-row type="flex" justify="center" align="middle" class="code-row-bg">
                <z-col span="4" class="demo-col">
                  <p style="height: 80px">
                      col-4
                  </p>
                </z-col>
                <z-col span="4" class="demo-col">
                  <p style="height: 30px">
                      col-4
                  </p>
                </z-col>
                <z-col span="4" class="demo-col">
                  <p style="height: 100px">
                      col-4
                  </p>
                </z-col>
                <z-col span="4" class="demo-col">
                  <p style="height: 60px">
                      col-4
                  </p>
                </z-col>
            </z-row>
            <div class="example-desc">
                <header class="example-header"><span>Flex对齐</span></header>
                <div>
                    <p>通过给<code>row</code>设置参数<code
                            >align</code>为不同的值，来定义子元素在垂直方向上的排布方式。在<code
                            >flex</code>模式下有效。</p>
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
            <z-row>
              <z-col :xs="2" :sm="4" :md="6" :lg="8">
                  <div class="demo-col">Col</div>
              </z-col>
              <z-col :xs="20" :sm="16" :md="12" :lg="8">
                  <div class="demo-col light">Col</div>
              </z-col>
              <z-col :xs="2" :sm="4" :md="6" :lg="8">
                  <div class="demo-col">Col</div>
              </z-col>
          </z-row>
          <div class="example-desc">
              <header class="example-header"><span>响应式布局</span></header>
              <div>
                  <p>参照 Bootstrap 的 <a
                          href="http://getbootstrap.com/css/#grid-media-queries"
                          target="_blank">响应式设计</a>，预设四个响应尺寸：xs sm md lg，详见 API。</p>
                  <p>调整浏览器尺寸来查看效果。</p>
              </div>
          </div>
        </z-col>
        <z-col span="12">
            <z-code-editor :content="demo8"></z-code-editor>
        </z-col>
      </z-row>
    </z-card>
      <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
            <z-row>
              <z-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
                  <div class="demo-col">Col</div>
              </z-col>
              <z-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">
                  <div class="demo-col">Col</div>
              </z-col>
              <z-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
                  <div class="demo-col">Col</div>
              </z-col>
          </z-row>
          <div class="example-desc">
              <header class="example-header"><span>其它属性的响应式</span></header>
              <div>
                  <p><code>span</code> <code
                          >pull</code> <code>push</code> <code
                          >offset</code> <code>order</code>
                      属性可以通过内嵌到 <code>xs</code> <code>sm</code>
                      <code>md</code> <code>lg</code> 属性中来使用。
                  </p>
                  <p>其中 <code>:xs=&quot;6&quot;</code> 相当于 <code
                          >:xs=&quot;{ span: 6 }&quot;</code>。</p>
              </div>
          </div>
        </z-col>
        <z-col span="12">
            <z-code-editor :content="demo9"></z-code-editor>
        </z-col>
      </z-row>
    </z-card>
      <z-card bordered dis-hover class="m-t-15">
        <div class="demo-api">
          <div class="anchor">
              <h2 id="API">API</h2>
          </div>
          <div class="anchor">
              <h3 id="Row_props">Row props</h3>
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
                      <td>gutter</td>
                      <td>栅格间距，单位 px，左右平分</td>
                      <td>Number</td>
                      <td>0</td>
                  </tr>
                  <tr>
                      <td>type</td>
                      <td>布局模式，可选值为<code>flex</code>或不选，在现代浏览器下有效</td>
                      <td>String</td>
                      <td>-</td>
                  </tr>
                  <tr>
                      <td>align</td>
                      <td>flex 布局下的垂直对齐方式，可选值为<code>top</code>、<code>middle</code>、<code>bottom</code>
                      </td>
                      <td>String</td>
                      <td>-</td>
                  </tr>
                  <tr>
                      <td>justify</td>
                      <td>flex
                          布局下的水平排列方式，可选值为<code>start</code>、<code>end</code>、<code>center</code>、<code>space-around</code>、<code>space-between</code>
                      </td>
                      <td>String</td>
                      <td>-</td>
                  </tr>
                  <tr>
                      <td>class-name</td>
                      <td>自定义的class名称</td>
                      <td>String</td>
                      <td>-</td>
                  </tr>
              </tbody>
          </table>
          <div class="anchor">
              <h3 id="Col_props">Col props</h3>
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
                      <td>span</td>
                      <td>栅格的占位格数，可选值为0~24的整数，为 0 时，相当于<code>display:none</code></td>
                      <td>Number | String</td>
                      <td>-</td>
                  </tr>
                  <tr>
                      <td>order</td>
                      <td>栅格的顺序，在<code>flex</code>布局模式下有效</td>
                      <td>Number | String</td>
                      <td>-</td>
                  </tr>
                  <tr>
                      <td>offset</td>
                      <td>栅格左侧的间隔格数，间隔内不可以有栅格</td>
                      <td>Number | String</td>
                      <td>-</td>
                  </tr>
                  <tr>
                      <td>push</td>
                      <td>栅格向右移动格数</td>
                      <td>Number | String</td>
                      <td>-</td>
                  </tr>
                  <tr>
                      <td>pull</td>
                      <td>栅格向左移动格数</td>
                      <td>Number | String</td>
                      <td>-</td>
                  </tr>
                  <tr>
                      <td>class-name</td>
                      <td>自定义的class名称</td>
                      <td>String</td>
                      <td>-</td>
                  </tr>
                  <tr>
                      <td>xs</td>
                      <td><code>&lt;576px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
                      <td>Number | Object</td>
                      <td>-</td>
                  </tr>
                  <tr>
                      <td>sm</td>
                      <td><code>≥576px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
                      <td>Number | Object</td>
                      <td>-</td>
                  </tr>
                  <tr>
                      <td>md</td>
                      <td><code>≥768px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
                      <td>Number | Object</td>
                      <td>-</td>
                  </tr>
                  <tr>
                      <td>lg</td>
                      <td><code>≥992px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
                      <td>Number | Object</td>
                      <td>-</td>
                  </tr>
                  <tr>
                      <td>xl</td>
                      <td><code>≥1200px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
                      <td>Number | Object</td>
                      <td>-</td>
                  </tr>
                  <tr>
                      <td>xxl</td>
                      <td><code>≥1600px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
                      <td>Number | Object</td>
                      <td>-</td>
                  </tr>
              </tbody>
          </table>
      </div>
    </z-card>
  </div>
</template>

<script>
export default {
  name: 'cpGrid',
  data: function () {
    return {
      demo1:
        '<z-row>\r' +
        '    <z-col span="12">col-12</z-col>\r' +
        '    <z-col span="12">col-12</z-col>\r' +
        '</z-row>\r' +
        '<br>\r' +
        '<z-row>\r' +
        '    <z-col span="8">col-8</z-col>\r' +
        '    <z-col span="8">col-8</z-col>\r' +
        '    <z-col span="8">col-8</z-col>\r' +
        '</z-row>\r' +
        '<br>\r' +
        '<z-row>\r' +
        '    <z-col span="6">col-6</z-col>\r' +
        '    <z-col span="6">col-6</z-col>\r' +
        '    <z-col span="6">col-6</z-col>\r' +
        '    <z-col span="6">col-6</z-col>\r' +
        '</z-row>\r',
      demo2:
        '<z-row :gutter="16">\r' +
        '    <z-col span="6">\r' +
        '        <div>col-6</div>\r' +
        '    </z-col>\r' +
        '    <z-col span="6">\r' +
        '        <div>col-6</div>\r' +
        '    </z-col>\r' +
        '    <z-col span="6">\r' +
        '        <div>col-6</div>\r' +
        '    </z-col>\r' +
        '     <z-col span="6">\r' +
        '        <div>col-6</div>\r' +
        '    </z-col>\r' +
        ' </z-row>\r',
      demo3:
        '<z-row type="flex">\r' +
        '    <z-col span="6" order="4">1 | order-4</z-col>\r' +
        '    <z-col span="6" order="3">2 | order-3</z-col>\r' +
        '    <z-col span="6" order="2">3 | order-2</z-col>\r' +
        '    <z-col span="6" order="1">4 | order-1</z-col>\r' +
        '</z-row>\r',
      demo4:
        '<z-row>\r' +
        '    <z-col span="18" push="6">col-18 | push-6</z-col>\r' +
        '    <z-col span="6" pull="18">col-6 | pull-18</z-col>\r' +
        '</z-row>\r',
      demo5:
        '<z-row>\r' +
        '    <z-col span="8">col-8</z-col>\r' +
        '    <z-col span="8" offset="8">col-8 | offset-8</z-col>\r' +
        '</z-row>\r' +
        '<br>\r' +
        '<z-row>\r' +
        '    <z-col span="6" offset="8">col-6 | offset-8</z-col>\r' +
        '    <z-col span="6" offset="4">col-6 | offset-4</z-col>\r' +
        '</z-row>\r' +
        '<br>\r' +
        '<z-row>\r' +
        '    <z-col span="12" offset="8">col-12 | offset-8</z-col>\r' +
        '</z-row>\r',
      demo6:
        '<p>子元素向左排列</p>\r' +
        '<z-row type="flex" justify="start" class="code-row-bg">\r' +
        '    <z-col span="4">col-4</z-col>\r' +
        '    <z-col span="4">col-4</z-col>\r' +
        '    <z-col span="4">col-4</z-col>\r' +
        '    <z-col span="4">col-4</z-col>\r' +
        '</z-row>\r' +
        '<p>子元素向右排列</p>\r' +
        '<z-row type="flex" justify="end" class="code-row-bg">\r' +
        '    <z-col span="4">col-4</z-col>\r' +
        '    <z-col span="4">col-4</z-col>\r' +
        '    <z-col span="4">col-4</z-col>\r' +
        '    <z-col span="4">col-4</z-col>\r' +
        '</z-row>\r' +
        '<p>子元素居中排列</p>\r' +
        '<z-row type="flex" justify="center" class="code-row-bg">\r' +
        '    <z-col span="4">col-4</z-col>\r' +
        '    <z-col span="4">col-4</z-col>\r' +
        '    <z-col span="4">col-4</z-col>\r' +
        '    <z-col span="4">col-4</z-col>\r' +
        '</z-row>\r' +
        '<p>子元素等宽排列</p>\r' +
        '<z-row type="flex" justify="space-between" class="code-row-bg">\r' +
        '    <z-col span="4">col-4</z-col>\r' +
        '    <z-col span="4">col-4</z-col>\r' +
        '    <z-col span="4">col-4</z-col>\r' +
        '    <z-col span="4">col-4</z-col>\r' +
        ' </z-row>\r' +
        '<p>子元素分散排列</p>\r' +
        '<z-row type="flex" justify="space-around" class="code-row-bg">\r' +
        '    <z-col span="4">col-4</z-col>\r' +
        '    <z-col span="4">col-4</z-col>\r' +
        '    <z-col span="4">col-4</z-col>\r' +
        '    <z-col span="4">col-4</z-col>\r' +
        '</z-row>\r',
      demo7:
        '<p>顶部对齐</p>\r' +
        '<z-row type="flex" justify="center" align="top" class="code-row-bg">\r' +
        '    <z-col span="4"><p style="height: 80px">col-4</p></z-col>\r' +
        '    <z-col span="4"><p style="height: 30px">col-4</p></z-col>\r' +
        '    <z-col span="4"><p style="height: 100px">col-4</p></z-col>\r' +
        '    <z-col span="4"><p style="height: 60px">col-4</p></z-col>\r' +
        '</z-row>\r' +
        '<p>底部对齐</p>\r' +
        '<z-row type="flex" justify="center" align="bottom" class="code-row-bg">\r' +
        '    <z-col span="4"><p style="height: 80px">col-4</p></z-col>\r' +
        '    <z-col span="4"><p style="height: 30px">col-4</p></z-col>\r' +
        '    <z-col span="4"><p style="height: 100px">col-4</p></z-col>\r' +
        '    <z-col span="4"><p style="height: 60px">col-4</p></z-col>\r' +
        '</z-row>\r' +
        '<p>居中对齐</p>\r' +
        '<z-row type="flex" justify="center" align="middle" class="code-row-bg">\r' +
        '    <z-col span="4"><p style="height: 80px">col-4</p></z-col>\r' +
        '    <z-col span="4"><p style="height: 30px">col-4</p></z-col>\r' +
        '    <z-col span="4"><p style="height: 100px">col-4</p></z-col>\r' +
        '    <z-col span="4"><p style="height: 60px">col-4</p></z-col>\r' +
        '</z-row>\r',
      demo8:
        '<z-row>\r' +
        '    <z-col :xs="2" :sm="4" :md="6" :lg="8">Col</z-col>\r' +
        '    <z-col :xs="20" :sm="16" :md="12" :lg="8">Col</z-col>\r' +
        '    <z-col :xs="2" :sm="4" :md="6" :lg="8">Col</z-col>\r' +
        '</z-row>\r',
      demo9:
        ' <z-row>\r' +
        '    <z-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</z-col>\r' +
        '    <z-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</z-col>\r' +
        '    <z-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</z-col>\r' +
        '</z-row>\r'
    }
  },
  methods: {}
}
</script>
<style scoped>
.demo-p{
  color: #666;
  padding: 10px 0px 5px;
}
.code-row-bg {
  background: rgba(0, 0, 0, 0.05);
}
.demo-row.light .demo-col.light {
  background: rgba(0, 153, 229, 0.3);
}
.demo-col.light {
  background: rgba(0, 153, 229, 0.5);
}
.demo-col {
  color: #fff;
  padding: 12px 0;
  text-align: center;
  background: rgba(0, 153, 229, 0.7);
}
</style>
