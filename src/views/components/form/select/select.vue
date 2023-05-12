<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-03-17 16:20:17
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
            <z-select v-model="model1" style="width:200px">
                <z-option v-for="item in cityList" :value="item.value" :key="item.value">
                    {{ item.label }}</z-option>
            </z-select>
            <div class="example-desc">
                <header class="example-header"><span>基础用法</span></header>
                <div>
                    <p>基本用法。可以使用 v-model 双向绑定数据。</p>
                    <p>单选时，value
                        只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据<code>Option</code>的<code>value</code>来返回选中的数据。
                    </p>
                    <p>可以给<code>Select</code>添加 style 样式，比如宽度。</p>
                    <p>在展开选择器后，可以使用键盘的<code>up</code>和<code>down</code>快速上下选择，按下<code>Enter</code>选择，按下<code>Esc</code>收起选择器。
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
          <z-select v-model="model2" size="small" style="width:100px">
              <z-option v-for="item in cityList" :value="item.value" :key="item.value">
                  {{ item.label }}</z-option>
          </z-select>
          <z-select v-model="model3" style="width:100px">
              <z-option v-for="item in cityList" :value="item.value" :key="item.value">
                  {{ item.label }}</z-option>
          </z-select>
          <z-select v-model="model4" size="large" style="width:100px">
              <z-option v-for="item in cityList" :value="item.value" :key="item.value">
                  {{ item.label }}</z-option>
          </z-select>
          <div class="example-desc">
              <header class="example-header"><span>尺寸</span></header>
              <div>
                  <p>通过设置<code>size</code>属性为<code>large</code>和<code>small</code>将输入框设置为大和小尺寸，不设置为默认（中）尺寸。
                  </p>
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
          <z-select v-model="model5" disabled style="width:200px">
              <z-option v-for="item in cityList" :value="item.value" :key="item.value">
                  {{ item.label }}</z-option>
          </z-select>
          <br>
          <z-select v-model="model6" style="width:200px">
              <z-option value="beijing">New York</z-option>
              <z-option value="shanghai" disabled>London</z-option>
              <z-option value="shenzhen">Sydney</z-option>
          </z-select>
          <div class="example-desc">
              <header class="example-header"><span>禁用</span></header>
              <div>
                  <p>通过给<code>Select</code>设置属性<code>disabled</code>禁用整个选择器。</p>
                  <p>通过给<code>Option</code>设置属性<code>disabled</code>可以禁用当前项。</p>
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
           <z-select v-model="model8" clearable style="width:200px">
                <z-option v-for="item in cityList" :value="item.value" :key="item.value">
                    {{ item.label }}</z-option>
            </z-select>
            <div class="example-desc">
                <header class="example-header"><span>可清空</span></header>
                <div>
                    <p>通过设置属性<code>clearable</code>可以清空已选项，仅适用于单选模式。</p>
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
          <z-select v-model="model7" style="width:200px">
              <z-option-group label="Hot Cities">
                  <z-option v-for="item in cityList1" :value="item.value" :key="item.value">
                      {{ item.label }}</z-option>
              </z-option-group>
              <z-option-group label="Other Cities">
                  <z-option v-for="item in cityList2" :value="item.value" :key="item.value">
                      {{ item.label }}</z-option>
              </z-option-group>
          </z-select>
          <div class="example-desc">
              <header class="example-header"><span>分组</span></header>
              <div>
                  <p>使用<code>OptionGroup</code>可将选项进行分组。</p>
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
           <z-select v-model="model9" style="width:200px">
                <z-option value="New York" label="New York">
                    <span>New York</span>
                    <span style="float:right;color:#ccc">America</span>
                </z-option>
                <z-option value="London" label="London">
                    <span>London</span>
                    <span style="float:right;color:#ccc">U.K.</span>
                </z-option>
                <z-option value="Sydney" label="Sydney">
                    <span>Sydney</span>
                    <span style="float:right;color:#ccc">Australian</span>
                </z-option>
            </z-select>
            <div class="example-desc">
                <header class="example-header"><span>自定义模板</span></header>
                <div>
                    <p>对选项内容可以进行自定义。注意在<code>Option</code>中使用<code>label</code>属性，可以让选择器优先读取该属性的值以显示，否则选中时显示的内容会和自定义的一样，这往往不是我们想要的。
                    </p>
                    <p>对于选项显示内容的逻辑：优先显示 slot 内容，如果没有定义 slot，则显示<code>label</code>的值，如果没有设置
                        label，则显示<code>value</code>的值。</p>
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
           <z-select v-model="model10" multiple style="width:260px" class="suspension-input">
                <z-option v-for="item in cityList" :value="item.value" :key="item.value">
                    {{ item.label }}</z-option>
            </z-select>
            <div class="example-desc">
                <header class="example-header"><span>多选</span></header>
                <div>
                    <p>通过设置属性<code>multiple</code>可以开启多选模式。多选模式下，model 接受数组类型的数据，所返回的也是数组。</p>
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
          <z-select v-model="model15" prefix="ios-home" style="width:200px">
              <z-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</z-option>
          </z-select>
          <z-select v-model="model15" style="width:200px">
              <z-avatar src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" slot="prefix" size="small" ></z-avatar>
              <z-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</z-option>
          </z-select>
          <div class="example-desc">
              <header class="example-header"><span>前缀图标</span></header>
              <div>
                  <p>设置 prefix 属性或 slot 可以在 Select 内显示前缀图标。</p>
              </div>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo10"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
     <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <z-select v-model="model16" multiple :max-tag-count="2">
                <z-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</z-option>
            </z-select>
            <z-select v-model="model16" multiple :max-tag-count="2" :max-tag-placeholder="maxTagPlaceholder">
                <z-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</z-option>
            </z-select>
            <div class="example-desc">
                <header class="example-header"><span>标签集合</span></header>
                <div>
                    <p>设置属性 max-tag-count 可指定最多显示的 tag 数量，超出后折叠。</p>
                    <p>设置属性 max-tag-placeholder 可以自定义 tag 超出后折叠的显示内容。</p>
                </div>
            </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo11"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
     <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-row>
            <z-col span="12" style="padding-right:10px">
                <z-select v-model="model11" filterable>
                    <z-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</z-option>
                </z-select>
            </z-col>
            <z-col span="12">
                <z-select v-model="model12" filterable multiple>
                    <z-option v-for="item in cityList" :value="item.value" :key="item.value">
                        {{ item.label }}</z-option>
                </z-select>
            </z-col>
        </z-row>
        <div class="example-desc">
            <header class="example-header"><span>可搜索</span></header>
            <div>
                <p>通过设置属性<code>filterable</code>可以开启搜索模式。单选和多选都支持搜索模式。多选搜索时，可以使用键盘<code>Delete</code>快捷删除最后一个已选项。
                </p>
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
              <z-col span="12" style="padding-right:10px">
                  <z-select v-model="model13" filterable remote :remote-method="remoteMethod1"
                      :loading="loading1">
                      <z-option v-for="(option, index) in options1" :value="option.value"
                          :key="index">{{option.label}}</z-option>
                  </z-select>
              </z-col>
              <z-col span="12">
                  <z-select v-model="model14" multiple filterable remote
                      :remote-method="remoteMethod2" :loading="loading2">
                      <z-option v-for="(option, index) in options2" :value="option.value"
                          :key="index">{{option.label}}</z-option>
                  </z-select>
              </z-col>
          </z-row>
          <div class="example-desc">
              <header class="example-header"><span>远程搜索</span></header>
              <div>
                  <p>远程搜索需同时设置
                      <code>filterable</code>、<code>remote</code>、<code>remote-method</code>、<code>loading</code>
                      四个 props，其中 loading 用于控制是否正在搜索中，remote-method 是远程搜索的方法。</p>
                  <p>注意：需要给 Option 设置 key。</p>
                  <p>设置初始显示值，需设置 <code>label</code> 属性。</p>
                  <p>本例为美国州名，尝试输入一些字母。</p>
              </div>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo9"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
     <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-row>
            <z-col span="12" style="padding-right:10px">
                <z-select v-model="model17" filterable allow-create @on-create="handleCreate1">
                    <z-option v-for="item in cityList3" :value="item.value" :key="item.value">{{ item.label }}</z-option>
                </z-select>
            </z-col>
            <z-col span="12">
                <z-select v-model="model18" filterable multiple allow-create @on-create="handleCreate2">
                    <z-option v-for="item in cityList4" :value="item.value" :key="item.value">{{ item.label }}</z-option>
                </z-select>
            </z-col>
        </z-row>
        <div class="example-desc">
            <header class="example-header"><span>创建条目 </span></header>
            <div>
                <p>在 filterable 模式下，开启属性 allow-create 可以通过在输入框中输入文字来创建新的条目。</p>
                <p>输入新条目后，按下回车键即可新建条目。</p>
                <p>需配合 @on-create 事件使用。</p>
            </div>
        </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo12"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
     <z-card bordered dis-hover class="m-t-15">
      <div class="demo-api">
        <div class="anchor">
            <h2 id="API">API</h2>
        </div>
        <div class="anchor">
            <h3 id="Select_props">Select props</h3>
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
                    <td>value</td>
                    <td>指定选中项目的 value 值，可以使用 v-model 双向绑定数据。单选时只接受 String 或 Number，多选时只接受 Array</td>
                    <td>String | Number | Array</td>
                    <td>空</td>
                </tr>
                <tr>
                    <td>multiple</td>
                    <td>是否支持多选</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>是否禁用</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>clearable</td>
                    <td>是否可以清空选项，只在单选时有效</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>filterable</td>
                    <td>是否支持搜索</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>remote</td>
                    <td>是否使用远程搜索</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>remote-method</td>
                    <td>远程搜索的方法</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>loading</td>
                    <td>当前是否正在远程搜索</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>loading-text</td>
                    <td>远程搜索中的文字提示</td>
                    <td>String</td>
                    <td>加载中</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>仅在 remote 模式下，初始化时使用。因为仅通过 value 无法得知选项的 label，需手动设置。</td>
                    <td>String | Number | Array</td>
                    <td>空</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>选择框大小，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不填
                    </td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>placeholder</td>
                    <td>选择框默认文字</td>
                    <td>String</td>
                    <td>请选择</td>
                </tr>
                <tr>
                    <td>not-found-text</td>
                    <td>当下拉列表为空时显示的内容</td>
                    <td>String</td>
                    <td>无匹配数据</td>
                </tr>
                <tr>
                    <td>label-in-value</td>
                    <td>在返回选项时，是否将 label 和 value 一并返回，默认只返回 value</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>placement</td>
                    <td>弹窗的展开方向，可选值为 <code>bottom</code> 和 <code>top</code></td>
                    <td>String</td>
                    <td>bottom</td>
                </tr>
                <tr>
                    <td>transfer</td>
                    <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果
                    </td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>element-id</td>
                    <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr><td>transfer-class-name</td> <td>开启 transfer 时，给浮层添加额外的 class 名称</td> <td>String</td> <td>-</td></tr>
                <tr><td>prefix</td> <td>在 Select 内显示图标</td> <td>String</td> <td>-</td></tr>
                <tr><td>max-tag-count</td> <td>多选时最多显示多少个 tag</td> <td>Number</td> <td>-</td></tr>
                <tr><td>max-tag-placeholder</td> <td>隐藏 tag 时显示的内容，参数是剩余项数量</td> <td>Function</td> <td>-</td></tr>
                <tr><td>allow-create</td> <td>是否允许用户创建新条目，需开启 filterable</td> <td>Boolean</td> <td>false</td></tr>
                <tr><td>capture</td> <td>是否开启 capture 模式，也可通过全局配置</td> <td>Boolean</td> <td>true</td></tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="Select_events">Select events</h3>
        </div>
        <table class="table">
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
                    <td>选中的<code>Option</code>变化时触发，默认返回 value，如需返回 label，详见 label-in-value 属性</td>
                    <td>当前选中项</td>
                </tr>
                <tr>
                    <td>on-query-change</td>
                    <td>搜索词改变时触发</td>
                    <td>query</td>
                </tr>
                <tr>
                    <td>on-clear</td>
                    <td>点击清空按钮时触发</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>on-open-change</td>
                    <td>下拉框展开或收起时触发</td>
                    <td>true / false</td>
                </tr>
                <tr><td>on-create</td> <td>新建条目时触发</td> <td>query</td></tr>
                <tr><td>on-select</td> <td>选择项目时触发</td> <td>当前选中项</td></tr>
            </tbody>
        </table>
        <div class="anchor">
            <!---->
            <!---->
            <h3 id="Select_methods">Select methods</h3>
            <!---->
            <!---->
            <!---->
        </div>
        <table>
            <thead>
                <tr>
                    <th>方法名</th>
                    <th>说明</th>
                    <th>参数</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>setQuery</td>
                    <td>设置搜索词，为空时清空，仅在 <code>filterable=&quot;true&quot;</code> 时有效</td>
                    <td>query</td>
                </tr>
                <tr>
                    <td>clearSingleSelect</td>
                    <td>清空单选项，仅在 <code>clearable=&quot;true&quot;</code> 时有效</td>
                    <td>无</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor"><!----> <!----> <h3 id="Select_slot">Select slot</h3> <!----> <!----> <!---->  <a href="#Select_slot">#</a></div>
        <table><thead><tr><th>名称</th> <th>说明</th></tr></thead> <tbody><tr><td>prefix</td> <td>自定义 Select 内头部图标</td></tr></tbody></table>
        <div class="anchor">
            <h3 id="Option_props">Option props</h3>
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
                    <td>value</td>
                    <td>选项值，默认根据此属性值进行筛选，必填</td>
                    <td>String | Number</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>选项显示的内容，默认会读取 slot，无 slot 时，优先读取该 label 值，无 label 时，读取 value。当选中时，选择器会显示
                        label 为已选文案。大部分情况不需要配置此项，直接写入 slot 即可，在自定义选项时，该属性非常有用。</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>是否禁用当前项</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr><td>tag</td> <td>设置后，在多选时，标签内容会优先显示设置的值</td> <td>String | Number</td> <td>-</td></tr>
            </tbody>
        </table>
        <div class="anchor">
            <!---->
            <!---->
            <h3 id="OptionGroup_props">OptionGroup props</h3>
            <!---->
            <!---->
            <!---->
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
                    <td>label</td>
                    <td>分组的组名</td>
                    <td>String</td>
                    <td>空</td>
                </tr>
            </tbody>
        </table>
    </div>
   </z-card>
</div>
</template>

<script>
export default {
  name: 'cpSelect',
  data: function () {
    return {
      cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      cityList1: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        }
      ],
      cityList2: [
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      cityList3: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      cityList4: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      model1: '',
      model2: '',
      model3: '',
      model4: '',
      model5: '',
      model6: '',
      model8: '',
      model7: '',
      model9: '',
      model10: [],
      model11: '',
      model12: [],
      model13: '',
      loading1: false,
      options1: [],
      model14: [],
      model15: '',
      model16: [],
      model17: '',
      model18: [],
      loading2: false,
      options2: [],
      list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'],
      demo1: '<z-select v-model="model1" style="width:200px">\r' +
              '    <z-option v-for="item in cityList" :value="item.value" :key="item.value">{ {item.label} }</z-option>\r' +
              '</z-select>\r',
      demo2: '<z-select v-model="model2" size="small" style="width:100px">\r' +
              '    <z-option v-for="item in cityList" :value="item.value" :key="item.value">{ {item.label} }</z-option>\r' +
              '</z-select>\r' +
              '<z-select v-model="model3" style="width:100px">\r' +
              '    <z-option  v-for="item in cityList" :value="item.value" :key="item.value">{ {item.label} }</z-option >\r' +
              '</z-select>\r' +
              '<z-select v-model="model4" size="large" style="width:100px">\r' +
              '    <z-option  v-for="item in cityList" :value="item.value" :key="item.value">{ {item.label} }</z-option >\r' +
              '</z-select> \r',
      demo3: ' <z-select v-model="model5" disabled style="width:200px">\r' +
              '    <z-option v-for="item in cityList" :value="item.value" :key="item.value">{ { item.label } }</z-option>\r' +
              '</z-select>\r' +
              '<z-select v-model="model6" style="width:200px">\r' +
              '    <z-option value="beijing">New York</z-option>\r' +
              '    <z-option value="shanghai" disabled>London</z-option>\r' +
              '    <z-option value="shenzhen">Sydney</z-option>\r' +
              '</z-select> \r',
      demo4: ' <z-select v-model="model8" clearable style="width:200px">\r' +
              '    <z-option v-for="item in cityList" :value="item.value" :key="item.value">{ { item.label } }</z-option>\r' +
              '</z-select>\r',
      demo5: '<z-select v-model="model7" style="width:200px">\r' +
              '    <z-option-group label="Hot Cities">\r' +
              '        <z-option v-for="item in cityList1" :value="item.value" :key="item.value">{ { item.label } }</z-option>\r' +
              '    </z-option-group>\r' +
              '    <z-option-group label="Other Cities">\r' +
              '        <z-option v-for="item in cityList2" :value="item.value" :key="item.value">{ { item.label } }</z-option>\r' +
              '    </z-option-group>\r' +
              '</z-select>\r',
      demo6: '<z-select v-model="model9" style="width:200px">\r' +
              '    <z-option value="New York" label="New York">\r' +
              '        <span>New York</span>\r' +
              '        <span style="float:right;color:#ccc">America</span>\r' +
              '    </z-option>\r' +
              '    <z-option value="London" label="London">\r' +
              '        <span>London</span>\r' +
              '        <span style="float:right;color:#ccc">U.K.</span>\r' +
              '    </z-option>\r' +
              '    <z-option value="Sydney" label="Sydney">\r' +
              '        <span>Sydney</span>\r' +
              '        <span style="float:right;color:#ccc">Australian</span>\r' +
              '    </z-option>\r' +
              '</z-select>\r',
      demo7: '<z-select v-model="model10" multiple style="width:260px">\r' +
              '    <z-option v-for="item in cityList" :value="item.value" :key="item.value">{ { item.label } }</z-option>\r' +
              '</z-select>\r',
      demo8: ' <z-row>\r' +
              '    <z-col span="12" style="padding-right:10px">\r' +
              '    <z-select v-model="model11" filterable>\r' +
              '        <z-option v-for="item in cityList" :value="item.value" :key="item.value">{ { item.label } }</z-option>\r' +
              '    </z-select>\r' +
              '    </z-col>\r' +
              '    <z-col span="12">\r' +
              '    <z-select v-model="model12" filterable multiple>\r' +
              '        <z-option v-for="item in cityList" :value="item.value" :key="item.value">{ { item.label } }</z-option>\r' +
              '    </z-select>\r' +
              '    </z-col>\r' +
              '</z-row>\r',
      demo9: '<z-row>\r' +
              '    <z-col span="12" style="padding-right:10px">\r' +
              '    <z-select\r' +
              '            v-model="model13"\r' +
              '            filterable\r' +
              '            remote\r' +
              '            :remote-method="remoteMethod1"\r' +
              '            :loading="loading1">\r' +
              '        <z-option v-for="(option, index) in options1" :value="option.value" :key="index">{ {option.label} }</z-option>\r' +
              '    </z-select>\r' +
              '    </z-col>\r' +
              '    <z-col span="12">\r' +
              '    <z-select\r' +
              '            v-model="model14"\r' +
              '            multiple\r' +
              '            filterable\r' +
              '            remote\r' +
              '            :remote-method="remoteMethod2"\r' +
              '            :loading="loading2">\r' +
              '        <z-option v-for="(option, index) in options2" :value="option.value" :key="index">{ {option.label} }</z-option>\r' +
              '    </z-select>\r' +
              '    </z-col>\r' +
              '</z-row>\r',
      demo10: '<z-select v-model="model15" prefix="ios-home" style="width:200px">\r' +
              '    <z-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</z-option>\r' +
              '</z-select>\r' +
              '<z-select v-model="model15" style="width:200px">\r' +
              '    <z-avatar src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" slot="prefix" size="small" ></z-avatar>\r' +
              '    <z-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</z-option>\r' +
              '</z-select>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '            cityList: [\r' +
              '                {\r' +
              '                    value: \'New York\',\r' +
              '                    label: \'New York\'\r' +
              '                },\r' +
              '                {\r' +
              '                    value: \'London\',\r' +
              '                    label: \'London\'\r' +
              '                },\r' +
              '                {\r' +
              '                    value: \'Sydney\',\r' +
              '                    label: \'Sydney\'\r' +
              '                },\r' +
              '                {\r' +
              '                    value: \'Ottawa\',\r' +
              '                    label: \'Ottawa\'\r' +
              '                },\r' +
              '               {\r' +
              '                    value: \'Paris\',\r' +
              '                    label: \'Paris\'\r' +
              '                },\r' +
              '                {\r' +
              '                    value: \'Canberra\',\r' +
              '                    label: \'Canberra\'\r' +
              '                }\r' +
              '            ],\r' +
              '            model15: \'\'\r' +
              '        }\r' +
              '    }\r',
      demo11: '<z-select v-model="model15" prefix="ios-home" style="width:200px">\r' +
              '    <z-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</z-option>\r' +
              '</z-select>\r' +
              '<z-select v-model="model15" style="width:200px">\r' +
              '    <z-avatar src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" slot="prefix" size="small" ></z-avatar>\r' +
              '    <z-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</z-option>\r' +
              '</z-select>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '            cityList: [\r' +
              '                {\r' +
              '                    value: \'New York\',\r' +
              '                    label: \'New York\'\r' +
              '                },\r' +
              '                {\r' +
              '                    value: \'London\',\r' +
              '                    label: \'London\'\r' +
              '                },\r' +
              '                {\r' +
              '                    value: \'Sydney\',\r' +
              '                    label: \'Sydney\'\r' +
              '                },\r' +
              '                {\r' +
              '                    value: \'Ottawa\',\r' +
              '                    label: \'Ottawa\'\r' +
              '                },\r' +
              '               {\r' +
              '                    value: \'Paris\',\r' +
              '                    label: \'Paris\'\r' +
              '                },\r' +
              '                {\r' +
              '                    value: \'Canberra\',\r' +
              '                    label: \'Canberra\'\r' +
              '                }\r' +
              '            ],\r' +
              '            model16: \'\'\r' +
              '        }\r' +
              '    },\r' +
              'methods: {\r' +
              '    maxTagPlaceholder (num) {\r' +
              '        return \'more \' + num;\r' +
              '    }\r' +
              '}\r',
      demo12: ' <z-row>\r' +
              '    <z-col span="12" style="padding-right:10px">\r' +
              '        <z-select v-model="model17" filterable allow-create @on-create="handleCreate1">\r' +
              '            <z-option v-for="item in cityList3" :value="item.value" :key="item.value">{{ item.label }}</z-option>\r' +
              '        </z-select>\r' +
              '    </z-col>\r' +
              '    <z-col span="12">\r' +
              '        <z-select v-model="model18" filterable multiple allow-create @on-create="handleCreate2">\r' +
              '            <z-option v-for="item in cityList4" :value="item.value" :key="item.value">{{ item.label }}</z-option>\r' +
              '        </z-select>\r' +
              '    </z-col>\r' +
              '</z-row>       \r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '            cityList3: [\r' +
              '                {\r' +
              '                    value: \'New York\',\r' +
              '                    label: \'New York\'\r' +
              '                 },\r' +
              '                 {\r' +
              '                    value: \'London\',\r' +
              '                    label: \'London\'\r' +
              '                },\r' +
              '                {\r' +
              '                    value: \'Sydney\',\r' +
              '                    label: \'Sydney\'\r' +
              '                },\r' +
              '                {\r' +
              '                    value: \'Ottawa\',\r' +
              '                    label: \'Ottawa\'\r' +
              '                },\r' +
              '                {\r' +
              '                    value: \'Paris\',\r' +
              '                    label: \'Paris\'\r' +
              '                },\r' +
              '                {\r' +
              '                    value: \'Canberra\',\r' +
              '                    label: \'Canberra\'\r' +
              '                }\r' +
              '            ],\r' +
              '            cityList4: [\r' +
              '                {\r' +
              '                    value: \'New York\',\r' +
              '                    label: \'New York\'\r' +
              '                },\r' +
              '                {\r' +
              '                    value: \'London\',\r' +
              '                    label: \'London\'\r' +
              '                },\r' +
              '                {\r' +
              '                    value: \'Sydney\',\r' +
              '                    label: \'Sydney\'\r' +
              '                 },\r' +
              '                {\r' +
              '                    value: \'Ottawa\',\r' +
              '                    label: \'Ottawa\'\r' +
              '                },\r' +
              '                {\r' +
              '                    value: \'Paris\',\r' +
              '                    label: \'Paris\'\r' +
              '               },\r' +
              '                {\r' +
              '                    value: \'Canberra\',\r' +
              '                    label: \'Canberra\'\r' +
              '                }\r' +
              '            ],\r' +
              '            model17: \'\',\r' +
              '            model18: []\r' +
              '        }\r' +
              '    },\r' +
              '    methods: {\r' +
              '        handleCreate1 (val) {\r' +
              '            this.cityList3.push({\r' +
              '                value: val,\r' +
              '                label: val\r' +
              '            });\r' +
              '       },\r' +
              '        handleCreate2 (val) {\r' +
              '            this.cityList4.push({\r' +
              '                value: val,\r' +
              '                label: val\r' +
              '            });\r' +
              '        }\r' +
              '    }\r'
    }
  },
  methods: {
    remoteMethod1: function (query) {
      if (query !== '') {
        this.loading1 = true
        setTimeout(function () {
          this.loading1 = false
          const list = this.list.map(function (item) {
            return {
              value: item,
              label: item
            }
          })
          this.options1 = list.filter(function (item) {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options1 = []
      }
    },
    remoteMethod2: function (query) {
      if (query !== '') {
        this.loading2 = true
        setTimeout(function () {
          this.loading2 = false
          const list = this.list.map(function (item) {
            return {
              value: item,
              label: item
            }
          })
          this.options2 = list.filter(function (item) {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options2 = []
      }
    },
    maxTagPlaceholder (num) {
      return 'more ' + num
    },
    handleCreate1 (val) {
      this.cityList3.push({
        value: val,
        label: val
      })
    },
    handleCreate2 (val) {
      this.cityList4.push({
        value: val,
        label: val
      })
    }
  }
}
</script>
<style scoped>
</style>
