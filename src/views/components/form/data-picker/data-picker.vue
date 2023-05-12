<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-03-17 16:18:55
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
    <z-row :gutter="20">
      <z-col span="12">
          <z-row :gutter="20">
              <z-col span="12">
                  <z-date-picker type="date" :options="options1" placeholder="Select date"
                      style="width: 200px">
                  </z-date-picker>
              </z-col>
              <z-col span="12">
                  <z-date-picker type="daterange" :options="options2" placement="bottom-end"
                      placeholder="Select date" style="width: 200px"></z-date-picker>
              </z-col>
          </z-row>
          <div class="example-desc">
              <header class="example-header"><span>快捷方式</span></header>
              <div>
                  <p>设置属性 <code>options</code> 对象中的 <code>shortcuts</code> 可以设置快捷选项，详见示例代码。</p>
                  <p>其中 <strong>value</strong> 为函数，必须返回一个日期，如果是 daterange 类型，需要返回一个数组。</p>
                  <p>value 接收任何正确的日期格式，比如 2016-12-24 或 12/24/16 都是正确的。</p>
              </div>
          </div>
      </z-col>
      <z-col span="12">
          <z-code-editor :content="demo2"></z-code-editor>
      </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
     <z-row :gutter="20">
        <z-col span="12">
            <z-date-picker type="daterange" split-panels placeholder="Select date" style="width: 200px">
            </z-date-picker>
            <div class="example-desc">
                <header class="example-header"><span>面板不联动</span></header>
                <div>
                    <p>开启属性 split-panels 后，左右两面板在切换年、月时不联动。</p>
                    <p>2.10.0 版本开始支持。</p>
                </div>
            </div>
        </z-col>
        <z-col span="12">
            <z-code-editor :content="demo10"></z-code-editor>
        </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
     <z-row :gutter="20">
        <z-col span="12">
            <z-date-picker type="date" multiple placeholder="Select date" style="width: 300px">
            </z-date-picker>
            <div class="example-desc">
                <header class="example-header"><span>多选</span></header>
                <div>
                    <p>开启属性 multiple 后，可以多选。</p>
                    <p>2.10.0 版本开始支持。</p>
                </div>
            </div>
        </z-col>
        <z-col span="12">
            <z-code-editor :content="demo11"></z-code-editor>
        </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
     <z-row :gutter="20">
      <z-col span="12">
          <z-row :gutter="20">
              <z-col span="12">
                  <z-date-picker type="date" show-week-numbers placeholder="Select date"
                      style="width: 200px">
                  </z-date-picker>
              </z-col>
              <z-col span="12">
                  <z-date-picker type="daterange" show-week-numbers placement="bottom-end"
                      placeholder="Select date" style="width: 200px"></z-date-picker>
              </z-col>
          </z-row>
          <div class="example-desc">
              <header class="example-header"><span>显示星期数</span></header>
              <div>
                  <p>开启属性 multiple 后，可以多选。</p>
                  <p>2.10.0 版本开始支持。</p>
              </div>
          </div>
      </z-col>
      <z-col span="12">
          <z-code-editor :content="demo12"></z-code-editor>
      </z-col>
  </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
     <z-row :gutter="20">
        <z-col span="12">
            <z-row :gutter="20">
                <z-col span="12">
                    <z-date-picker type="date" :start-date="new Date(1991, 4, 14)" placeholder="Select date"
                        style="width: 200px"></z-date-picker>
                </z-col>
                <z-col span="12">
                    <z-date-picker type="daterange" :start-date="new Date(1991, 4, 14)"
                        placement="bottom-end" placeholder="Select date" style="width: 200px">
                    </z-date-picker>
                </z-col>
            </z-row>
            <div class="example-desc">
                <header class="example-header"><span>起始日期</span></header>
                <div>
                    <p>设置属性 start-date 后，可以将默认显示的日期面板设置为指定日期。</p>
                    <p>2.10.0 版本开始支持。</p>
                </div>
            </div>
        </z-col>
        <z-col span="12">
            <z-code-editor :content="demo13"></z-code-editor>
        </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
    <z-row :gutter="20">
      <z-col span="12">
          <z-row :gutter="20">
              <z-col span="12">
                  <z-date-picker :value="value1" format="yyyy年MM月dd日" type="date"
                      placeholder="Select date" style="width: 200px"></z-date-picker>
              </z-col>
              <z-col span="12">
                  <z-date-picker :value="value2" format="yyyy/MM/dd" type="daterange"
                      placement="bottom-end" placeholder="Select date" style="width: 200px">
                  </z-date-picker>
              </z-col>
          </z-row>
          <div class="example-desc">
              <header class="example-header"><span>日期格式</span></header>
              <div>
                  <p>设置属性 <code>format</code> 可以改变日期的显示格式，详见 <a href="javascript:void(0)"><i
                              class="zvu-icon zvu-icon-information-circled"></i>
                          Date</a>。</p>
                  <p>注意，format 只是改变显示的格式，并非改变 value 值。</p>
              </div>
          </div>
      </z-col>
      <z-col span="12">
          <z-code-editor :content="demo3"></z-code-editor>
      </z-col>
   </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
     <z-row :gutter="20">
        <z-col span="12">
            <z-date-picker type="datetime" placeholder="Select date and time" style="width: 200px">
            </z-date-picker>
            <br><br>
            <z-date-picker type="datetime" format="yyyy-MM-dd HH:mm"
                placeholder="Select date and time(Excluding seconds)" style="width: 200px">
            </z-date-picker>
            <br><br>
            <z-date-picker type="datetimerange" placeholder="Select date and time" style="width: 300px">
            </z-date-picker>
            <br><br>
            <z-date-picker type="datetimerange" format="yyyy-MM-dd HH:mm"
                placeholder="Select date and time(Excluding seconds)" style="width: 300px">
            </z-date-picker>
            <div class="example-desc">
                <header class="example-header"><span>日期时间选择</span></header>
                <div>
                    <p>设置属性 <code>type</code> 为 <code>datetime</code> 或 <code>datetimerange</code>
                        可以选择时间。</p>
                    <p>设置 format 并且忽略秒，可以只设置小时和分钟维度。</p>
                </div>
            </div>
        </z-col>
        <z-col span="12">
            <z-code-editor :content="demo4"></z-code-editor>
        </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
     <z-row :gutter="20">
      <z-col span="12">
          <z-row :gutter="20">
              <z-col span="12">
                  <z-date-picker type="year" placeholder="Select year" style="width: 200px">
                  </z-date-picker>
              </z-col>
              <z-col span="12">
                  <z-date-picker type="month" placeholder="Select month" style="width: 200px">
                  </z-date-picker>
              </z-col>
          </z-row>
          <div class="example-desc">
              <header class="example-header"><span>年和月</span></header>
              <div>
                  <p>设置属性 <code>type</code> 为 <code>year</code> 或 <code>month</code> 可以使用选择年或月的功能。</p>
              </div>
          </div>
      </z-col>
      <z-col span="12">
          <z-code-editor :content="demo5"></z-code-editor>
      </z-col>
   </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
     <z-row :gutter="20">
        <z-col span="12">
            <z-row :gutter="20">
                <z-col span="12">
                    <z-date-picker type="date" :options="options3" placeholder="Select date"
                        style="width: 200px">
                    </z-date-picker>
                </z-col>
                <z-col span="12">
                    <z-date-picker type="date" :options="options4" placeholder="Select date"
                        style="width: 200px">
                    </z-date-picker>
                </z-col>
            </z-row>
            <div class="example-desc">
                <header class="example-header"><span>不可选日期</span></header>
                <div>
                    <p>设置属性 <code>options</code> 对象中的 <code>disabledDate</code> 可以设置不可选择的日期。</p>
                    <p>disabledDate 是函数，参数为当前的日期，需要返回 Boolean 是否禁用这天。</p>
                </div>
            </div>
        </z-col>
        <z-col span="12">
            <z-code-editor :content="demo6"></z-code-editor>
        </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
     <z-row :gutter="20">
        <z-col span="12">
            <z-row :gutter="20">
                <z-col span="12">
                    <z-date-picker type="date" confirm placeholder="Select date" style="width: 200px">
                    </z-date-picker>
                </z-col>
                <z-col span="12">
                    <z-date-picker type="daterange" confirm placement="bottom-end" placeholder="Select date"
                        style="width: 200px"></z-date-picker>
                </z-col>
            </z-row>
            <div class="example-desc">
                <header class="example-header"><span>带有确认操作</span></header>
                <div>
                    <p>设置属性 <code>confirm</code>，选择日期后，选择器不会主动关闭，需用户确认后才可关闭。</p>
                    <p>确认按钮并没有影响日期的正常选择。</p>
                </div>
            </div>
        </z-col>
        <z-col span="12">
            <z-code-editor :content="demo7"></z-code-editor>
        </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
    <z-row :gutter="20">
        <z-col span="12">
            <z-date-picker :open="open" :value="value3" confirm type="date" @on-change="handleChange"
                @on-clear="handleClear" @on-ok="handleOk">
                <a href="javascript:void(0)" @click="handleClick">
                    <z-icon type="ios-calendar-outline"></z-icon>
                    <template v-if="value3 === ''">Select date</template>
                    <template v-else>{{ value3 }}</template>
                </a>
            </z-date-picker>
            <div class="example-desc">
                <header class="example-header"><span>手动控制组件</span></header>
                <div>
                    <p>对于一些定制化的场景，可以使用 slot 配合参数 <code>open</code> 及事件来手动控制组件的显示状态，详见示例和 API。</p>
                </div>
            </div>
        </z-col>
        <z-col span="12">
            <z-code-editor :content="demo8"></z-code-editor>
        </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
     <z-row :gutter="20">
        <z-col span="12">
            <z-row :gutter="20">
                <z-col span="8">
                    <z-date-picker size="small" type="date" placeholder="Select date"></z-date-picker>
                </z-col>
                <z-col span="8">
                    <z-date-picker type="date" placeholder="Select date"></z-date-picker>
                </z-col>
                <z-col span="8">
                    <z-date-picker size="large" type="date" placeholder="Select date"></z-date-picker>
                </z-col>
            </z-row>
            <div class="example-desc">
                <header class="example-header"><span>尺寸</span></header>
                <div>
                    <p>通过设置属性 <code>size</code> 为 <code>large</code> 或 <code>small</code>
                        可以调整选择器尺寸为大或小，默认不填为中。</p>
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
          <h3 id="DatePicker_props">DatePicker props</h3>
      </div>
      <table>
          <colgroup>
              <col>
              <col>
              <col>
              <col width="200">
          </colgroup>
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
                  <td>显示类型，可选值为
                      <code>date</code>、<code>daterange</code>、<code>datetime</code>、<code>datetimerange</code>、<code>year</code>、<code>month</code>
                  </td>
                  <td>String</td>
                  <td>date</td>
              </tr>
              <tr>
                  <td>value</td>
                  <td>
                      日期，可以是 JavaScript 的 Date，例如 <strong>new Date()</strong>，也可以是标准的日期格式，点击右边查看<br>
                      注意：value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用
                  </td>
                  <td><a href="javascript:void(0)"><i class="zvu-icon zvu-icon-information-circled"></i>
                          Date</a></td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>format</td>
                  <td>展示的日期格式</td>
                  <td><a href="javascript:void(0)"><i class="zvu-icon zvu-icon-information-circled"></i>
                          Date</a></td>
                  <td>
                      <ul>
                          <li><strong>date | daterange</strong>：<br>yyyy-MM-dd</li>
                          <li><strong>datetime | datetimerange</strong>：<br>yyyy-MM-dd HH:mm:ss</li>
                          <li><strong>year</strong>：yyyy</li>
                          <li><strong>month</strong>：yyyy-MM</li>
                      </ul>
                  </td>
              </tr>
              <tr>
                  <td>placement</td>
                  <td>日期选择器出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>，2.12.0
                      版本开始支持自动识别</td>
                  <td>String</td>
                  <td>bottom-start</td>
              </tr>
              <tr>
                  <td>placeholder</td>
                  <td>占位文本</td>
                  <td>String</td>
                  <td>空</td>
              </tr>
              <tr>
                  <td>options</td>
                  <td>选择器额外配置，比如不可选日期与快捷选项，具体项详见下表</td>
                  <td>Object</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>split-panels</td>
                  <td>开启后，左右面板不联动，仅在 <code>daterange</code> 和 <code>datetimerange</code> 下可用。</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>multiple</td>
                  <td>开启后，可以选择多个日期，仅在 <code>date</code> 下可用。</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>show-week-numbers</td>
                  <td>开启后，可以显示星期数。</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>start-date</td>
                  <td>设置默认显示的起始日期。</td>
                  <td>Date</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>confirm</td>
                  <td>是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>open</td>
                  <td>手动控制日期选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用
                  </td>
                  <td>Boolean</td>
                  <td>null</td>
              </tr>
              <tr>
                  <td>size</td>
                  <td>尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
                  <td>String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>disabled</td>
                  <td>是否禁用选择器</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>clearable</td>
                  <td>是否显示清除按钮</td>
                  <td>Boolean</td>
                  <td>true</td>
              </tr>
              <tr>
                  <td>readonly</td>
                  <td>完全只读，开启后不会弹出选择器，只在没有设置 open 属性下生效</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>editable</td>
                  <td>文本框是否可以输入，只在没有使用 slot 时有效</td>
                  <td>Boolean</td>
                  <td>true</td>
              </tr>
              <tr>
                  <td>transfer</td>
                  <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
                  <td>Boolean</td>
                  <td>false</td>
              </tr>
              <tr>
                  <td>element-id</td>
                  <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td>
                  <td>String</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>time-picker-options</td>
                  <td>可以在 type 为 datetime 和 datetimerange 下，配置 TimePicker 的属性，比如时间间隔
                      steps：<code>:time-picker-options="{steps: [1, 10, 10]}"</code></td>
                  <td>Object</td>
                  <td>{}</td>
              </tr>
              <tr>
                  <td>separator</td>
                  <td>两个日期间的分隔符</td>
                  <td>String</td>
                  <td> - </td>
              </tr>
              <tr>
                  <td>capture</td>
                  <td>是否开启 capture 模式，也可通过全局配置</td>
                  <td>Boolean</td>
                  <td>true</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3 id="options">options</h3>
      </div>
      <p>选择器额外配置</p>
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
                  <td>shortcuts</td>
                  <td>
                      设置快捷选项，每项内容：
                      <ul>
                          <li><strong>text | String</strong>：显示的文案</li>
                          <li><strong>value | Function</strong>：返回指定的日期，如需自己控制逻辑，可不设置，并使用 onClick 回调</li>
                          <li><strong>onClick | Function</strong>：点击时的回调，参数为当前日期选择器的 Vue
                              实例，当需要自定义复杂操作时，可以使用
                          </li>
                      </ul>
                  </td>
                  <td>Array</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>disabledDate</td>
                  <td>设置不可选择的日期，参数为当前的日期，需要返回 Boolean 是否禁用这天</td>
                  <td>Function</td>
                  <td>-</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3 id="DatePicker_events">DatePicker events</h3>
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
                  <td>日期发生变化时触发</td>
                  <td>返回两个值，已经格式化后的日期，比如 2016-01-01，和当前的日期类型，比如 date</td>
              </tr>
              <tr>
                  <td>on-open-change</td>
                  <td>弹出日历和关闭日历时触发</td>
                  <td>true | false</td>
              </tr>
              <tr>
                  <td>on-ok</td>
                  <td>在 confirm 模式下有效，点击确定按钮时触发</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>on-clear</td>
                  <td>在 confirm 模式或 clearable = true 时有效，在清空日期时触发</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>on-clickoutside</td>
                  <td>点击外部关闭下拉菜单时触发</td>
                  <td>event</td>
              </tr>
          </tbody>
      </table>
      <div class="anchor">
          <h3 id="DatePicker_slot">DatePicker slot</h3>
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
                  <td>自定义选择器的显示内容，建议与 open 等参数一起使用，详见示例</td>
              </tr>
          </tbody>
      </table>
  </div>
  </z-card>
</div>
</template>
<script>
export default {
  name: 'cpDataPicker',
  data: function () {
    return {
      options1: {
        shortcuts: [
          {
            text: 'Today',
            value: function () {
              return new Date()
            },
            onClick: function (picker) {
              this.$Message.info('Click today')
            }
          },
          {
            text: 'Yesterday',
            value: function () {
              var date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              return date
            },
            onClick: function (picker) {
              this.$Message.info('Click yesterday')
            }
          },
          {
            text: 'One week',
            value: function () {
              var date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              return date
            },
            onClick: function (picker) {
              this.$Message.info('Click a week ago')
            }
          }
        ]
      },
      options2: {
        shortcuts: [
          {
            text: 'A week',
            value: function () {
              var end = new Date()
              var start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              return [start, end]
            }
          },
          {
            text: 'A month',
            value: function () {
              var end = new Date()
              var start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              return [start, end]
            }
          },
          {
            text: '3 month',
            value: function () {
              var end = new Date()
              var start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              return [start, end]
            }
          }
        ]
      },
      value1: '2016-01-01',
      value2: ['2016-01-01', '2016-02-15'],
      options3: {
        disabledDate: function (date) {
          return date && date.valueOf() < Date.now() - 86400000
        }
      },
      options4: {
        disabledDate: function (date) {
          var disabledDay = date.getDate()
          return disabledDay === 15
        }
      },
      open: false,
      value3: '',
      demo1: '<div>\r' +
              '    <z-row>\r' +
              '        <z-col span="12">\r' +
              '            <z-date-picker type="date" placeholder="Select date" style="width: 200px"></z-date-picker>\r' +
              '        </z-col>\r' +
              '        <z-col span="12">\r' +
              '            <z-date-picker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></z-date-picker>\r' +
              '        </z-col>\r' +
              '    </z-row>\r' +
              '</div>\r',
      demo2: '<div>\r' +
              '    <z-row>\r' +
              '        <z-col span="12">\r' +
              '            <z-date-picker type="date" :options="options1" placeholder="Select date" style="width: 200px"></z-date-picker>\r' +
              '        </z-col>\r' +
              '        <z-col span="12">\r' +
              '           <z-date-picker type="daterange" :options="options2" placement="bottom-end" placeholder="Select date" style="width: 200px"></z-date-picker>\r' +
              '        </z-col>\r' +
              '    </z-row>\r' +
              '</div>\r' +
              '\r' +
              'export default {\r' +
              '    data: function () {\r' +
              '        return {\r' +
              '            options1: {\r' +
              '                shortcuts: [\r' +
              '                    {\r' +
              '                        text: \'Today\',\r' +
              '                        value: function () {\r' +
              '                            return new Date();\r' +
              '                        },\r' +
              '                        onClick: (picker) => {\r' +
              '                            this.$Message.info(\'Click today\');\r' +
              '                        }\r' +
              '                    },\r' +
              '                    {\r' +
              '                        text: \'Yesterday\',\r' +
              '                        value: function () {\r' +
              '                            const date = new Date();\r' +
              '                            date.setTime(date.getTime() - 3600 * 1000 * 24);\r' +
              '                            return date;\r' +
              '                        },\r' +
              '                        onClick: (picker) => {\r' +
              '                            this.$Message.info(\'Click yesterday\');\r' +
              '                        }\r' +
              '                    },\r' +
              '                    {\r' +
              '                        text: \'One week\',\r' +
              '                        value: function () {\r' +
              '                            const date = new Date();\r' +
              '                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);\r' +
              '                            return date;\r' +
              '                        },\r' +
              '                        onClick: (picker) => {\r' +
              '                            this.$Message.info(\'Click a week ago\');\r' +
              '                        }\r' +
              '                    }\r' +
              '                ]\r' +
              '            },\r' +
              '            options2: {\r' +
              '                shortcuts: [\r' +
              '                    {\r' +
              '                        text: \'A week\',\r' +
              '                         value: function () {\r' +
              '                            const end = new Date();\r' +
              '                            const start = new Date();\r' +
              '                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);\r' +
              '                            return [start, end];\r' +
              '                        }\r' +
              '                    },\r' +
              '                    {\r' +
              '                        text: \'A month\',\r' +
              '                        value: function () {\r' +
              '                            const end = new Date();\r' +
              '                            const start = new Date();\r' +
              '                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);\r' +
              '                            return [start, end];\r' +
              '                        }\r' +
              '                    },\r' +
              '                    {\r' +
              '                        text: \'3 month\',\r' +
              '                        value: function () {\r' +
              '                            const end = new Date();\r' +
              '                            const start = new Date();\r' +
              '                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);\r' +
              '                            return [start, end];\r' +
              '                        }\r' +
              '                    }\r' +
              '                ]\r' +
              '            }\r' +
              '        }\r' +
              '    }\r' +
              '}\r',
      demo3: '<z-row>\r' +
              '    <z-col span="12">\r' +
              '        <z-date-picker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="Select date" style="width: 200px"></z-date-picker>\r' +
              '   </z-col>\r' +
              '   <z-col span="12">\r' +
              '       <z-date-picker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></z-date-picker>\r' +
              '    </z-col>\r' +
              '</z-row>\r' +
              '\r' +
              'export default {\r' +
              '    data:function(){\r' +
              '         return {\r' +
              '            value1: \'2016-01-01\',\r' +
              '            value2: [\'2016-01-01\', \'2016-02-15\']\r' +
              '        }\r' +
              '    }\r' +
              '}\r',
      demo4: '<div>\r' +
              '    <z-date-picker type="datetime" placeholder="Select date and time" style="width: 200px"></z-date-picker>\r' +
              '    <br>\r' +
              '    <z-date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="Select date and time(Excluding seconds)" style="width: 200px"></z-date-picker>\r' +
              '    <br>\r' +
              '    <z-date-picker type="datetimerange" placeholder="Select date and time" style="width: 300px"></z-date-picker>\r' +
              '    <br>\r' +
              '    <z-date-picker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="Select date and time(Excluding seconds)" style="width: 300px"></z-date-picker>\r' +
              '</div>\r',
      demo5: '<div>\r' +
              '    <z-row>\r' +
              '        <z-col span="12">\r' +
              '            <z-date-picker type="year" placeholder="Select year" style="width: 200px"></z-date-picker>\r' +
              '        </z-col>\r' +
              '       <z-col span="12">\r' +
              '           <z-date-picker type="month" placeholder="Select month" style="width: 200px"></z-date-picker>\r' +
              '       </z-col>\r' +
              '   </z-row>\r' +
              '</div>\r',
      demo6: '<div>\r' +
              '    <z-row>\r' +
              '        <z-col span="12">\r' +
              '           <z-date-picker type="date" :options="options3" placeholder="Select date" style="width: 200px"></z-date-picker>\r' +
              '        </z-col>\r' +
              '       <z-col span="12">\r' +
              '           <z-date-picker type="date" :options="options4" placeholder="Select date" style="width: 200px"></z-date-picker>\r' +
              '       </z-col>\r' +
              '   </z-row>\r' +
              '</div>\r' +
              'export default {\r' +
              '    data: function () {\r' +
              '        return {\r' +
              '            options3: {\r' +
              '                disabledDate: function (date) {\r' +
              '                    return date && date.valueOf() < Date.now() - 86400000;\r' +
              '                }\r' +
              '            },\r' +
              '            options4: {\r' +
              '                disabledDate: function (date) {\r' +
              '                    const disabledDay = date.getDate();\r' +
              '                    return disabledDay === 15;\r' +
              '                }\r' +
              '            }\r' +
              '        }\r' +
              '    }\r' +
              '}\r',
      demo7: '<div>\r' +
              '    <z-row>\r' +
              '        <z-col span="12">\r' +
              '            <z-date-picker type="date" confirm placeholder="Select date" style="width: 200px"></z-date-picker>\r' +
              '        </z-col>\r' +
              '       <z-col span="12">\r' +
              '          <z-date-picker type="daterange" confirm placement="bottom-end" placeholder="Select date" style="width: 200px"></z-date-picker>\r' +
              '       </z-col>\r' +
              '   </z-row>\r' +
              '</div>\r',
      demo8: '<div>\r' +
              '    <z-date-picker\r' +
              '            :open="open"\r' +
              '            :value="value3"\r' +
              '            confirm\r' +
              '            type="date"\r' +
              '            @on-change="handleChange"\r' +
              '            @on-clear="handleClear"\r' +
              '            @on-ok="handleOk">\r' +
              '       <a href="javascript:void(0)" @click="handleClick">\r' +
              '           <Icon type="ios-calendar-outline"></Icon>\r' +
              '           <template v-if="value3 === \'\'">Select date</template>\r' +
              '            <template v-else>{{ value3 }}</template>\r' +
              '       </a>\r' +
              '    </z-date-picker>\r' +
              ' </div>\r' +
              '\r' +
              'export default {\r' +
              '    data:function(){\r' +
              '     return {\r' +
              '            open: false,\r' +
              '            value3: \'\'\r' +
              '        }\r' +
              '    }\r' +
              '     methods: {\r' +
              '        handleClick:function() {\r' +
              '            this.open = !this.open;\r' +
              '        },\r' +
              '        handleChange:function(date) {\r' +
              '            this.value3 = date;\r' +
              '        },\r' +
              '        handleClear:function() {\r' +
              '            this.open = false;\r' +
              '        },\r' +
              '        handleOk:function() {\r' +
              '            this.open = false;\r' +
              '        }\r' +
              '    }\r' +
              '}\r',
      demo9: '<div>\r' +
              '    <z-row>\r' +
              '        <z-col span="8">\r' +
              '            <z-date-picker size="small" type="date" placeholder="Select date"></z-date-picker>\r' +
              '        </z-col>\r' +
              '       <z-col span="8">\r' +
              '          <z-date-picker type="date" placeholder="Select date"></z-date-picker>\r' +
              '       </z-col>\r' +
              '       <z-col span="8">\r' +
              '          <z-date-picker size="large" type="date" placeholder="Select date"></z-date-picker>\r' +
              '       </z-col>\r' +
              '   </z-row>\r' +
              '</div>\r',
      demo10: '<z-date-picker type="daterange" split-panels placeholder="Select date" style="width: 200px"></z-date-picker>',
      demo11: '<z-date-picker type="date" multiple placeholder="Select date" style="width: 300px"></z-date-picker>',
      demo12: '<z-row>\r' +
              '    <z-col span="12">\r' +
              '        <z-date-picker type="date" show-week-numbers placeholder="Select date" style="width: 200px"></z-date-picker>\r' +
              '    </z-col>\r' +
              '    <z-col span="12">\r' +
              '        <z-date-picker  type="daterange" show-week-numbers placement="bottom-end" placeholder="Select date" style="width: 200px"></z-date-picker>\r' +
              '    </z-col>\r' +
              '</z-row>\r',
      demo13: '<z-row>\r' +
              '    <z-col span="12">\r' +
              '        <z-date-picker type="date" :start-date="new Date(1991, 4, 14)" placeholder="Select date" style="width: 200px"></z-date-picker>\r' +
              '    </z-col>\r' +
              '    <z-col span="12">\r' +
              '        <z-date-picker  type="daterange" :start-date="new Date(1991, 4, 14)" placement="bottom-end" placeholder="Select date" style="width: 200px"></z-date-picker>\r' +
              '    </z-col>\r' +
              '</z-row>\r'
    }
  },
  methods: {
    handleClick: function () {
      this.open = !this.open
    },
    handleChange: function (date) {
      this.value3 = date
    },
    handleClear: function () {
      this.open = false
    },
    handleOk: function () {
      this.open = false
    }
  }
}
</script>
<style scoped>
</style>
