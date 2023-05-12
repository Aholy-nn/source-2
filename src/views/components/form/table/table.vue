<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-03-17 16:27:02
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <z-table :columns="columns1" :data="data1"></z-table>
            <div class="example-desc">
                <header class="example-header"><span>基础用法</span></header>
                <div>
                    <p>表格的最简单用法。</p>
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
            <z-table stripe :columns="columns1" :data="data1"></z-table>
            <div class="example-desc">
                <header class="example-header"><span>斑马纹</span></header>
                <div>
                    <p>设置属性 stripe ，表格会间隔显示不同颜色，用于区分不同行数据。</p>
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
           <z-table border :columns="columns1" :data="data1"></z-table>
            <div class="example-desc">
                <header class="example-header"><span>带边框</span></header>
                <div>
                    <p>添加表格的边框线。</p>
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
           <z-table :row-class-name="rowClassName" :columns="columns1" :data="data1"></z-table>
            <div class="example-desc">
                <header class="example-header"><span>特定样式</span></header>
                <div>
                    <p><strong>行</strong>：通过属性 <code>row-class-name</code> 可以给某一行指定一个样式名称。</p>
                    <p><strong>列</strong>：通过给列 columns 设置字段 <code>className</code> 可以给某一列指定一个样式。</p>
                    <p><strong>单元格</strong>：通过给数据 data 设置字段 <code>cellClassName</code> 可以给任意一个单元格指定样式。
                    </p>
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
            <z-table height="200" :columns="columns1" :data="data2"></z-table>
            <div class="example-desc">
                <header class="example-header"><span>固定表头</span></header>
                <div>
                    <p>通过设置属性 height 给表格指定高度后，会自动固定表头。当纵向内容过多时可以使用。</p>
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
           <z-table border :columns="columns2" :data="data3"></z-table>
            <div class="example-desc">
                <header class="example-header"><span>固定列</span></header>
                <div>
                    <p>通过给数据 columns 的项设置 fixed 为 left 或 right，可以左右固定需要的列。当横向内容过多时可以使用。</p>
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
          <z-table width="550" height="200" border :columns="columns2" :data="data4"></z-table>
          <div class="example-desc">
              <header class="example-header"><span>固定表头和列</span></header>
              <div>
                  <p>同时应用上述两个属性，可以同时固定表头和列。</p>
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
           <z-table highlight-row ref="currentRowTable" :columns="columns3" :data="data1"></z-table>
          <z-button @click="handleClearCurrentRow">Clear</z-button>
          <div class="example-desc">
              <header class="example-header"><span>单选</span></header>
              <div>
                  <p>通过设置属性 <code>highlight-row</code>，可以选中某一行。</p>
                  <p>当选择时，触发事件 <code>@on-current-change</code>，可以自定义操作，事件返回两个值 <code>currentRow</code>
                      和 <code>oldCurrentRow</code>，分别为当前行的数据和上一次选择的数据。</p>
                  <p>通过给 <code>columns</code> 数据设置一项，指定 <code>type: 'index'</code>，可以自动显示一个从 1
                      开始的索引列。</p>
                  <p>给 data 项设置特殊 key <code>_highlight: true</code> 可以默认选中当前项。</p>
                  <p>调用 <code>clearCurrentRow</code> 方法可以手动清除选中项。</p>
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
           <z-table border ref="selection" :columns="columns4" :data="data1"></z-table>
            <z-button @click="handleSelectAll(true)">Set all selected</z-button>
            <z-button @click="handleSelectAll(false)">Cancel all selected</z-button>
            <div class="example-desc">
                <header class="example-header"><span>多选</span></header>
                <div>
                    <p>通过给 <code>columns</code> 数据设置一项，指定 <code>type: 'selection'</code>，即可自动开启多选功能。</p>
                    <p>给 data 项设置特殊 key <code>_checked: true</code> 可以默认选中当前项。</p>
                    <p>给 data 项设置特殊 key <code>_disabled: true</code> 可以禁止选择当前项。</p>
                    <p>正确使用好以下事件，可以达到需要的效果：</p>
                    <ul>
                        <li><code>@on-select</code>，选中某一项触发，返回值为 <code>selection</code> 和
                            <code>row</code>，分别为已选项和刚选择的项。</li>
                        <li><code>@on-select-all</code>，点击全选时触发，返回值为 <code>selection</code>，已选项。</li>
                        <li><code>@on-selection-change</code>，只要选中项发生变化时就会触发，返回值为
                            <code>selection</code>，已选项。</li>
                    </ul>
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
           <z-table border :columns="columns5" :data="data5"></z-table>
            <div class="example-desc">
                <header class="example-header"><span>排序</span></header>
                <div>
                    <p>通过给 <code>columns</code> 数据的项，设置 <code>sortable: true</code>，即可对该列数据进行排序。</p>
                    <p>排序默认使用升序和降序，也可以通过设置属性 <code>sortMethod</code> 指定一个自定义排序函数，接收三个参数 a 、 b 和 type。
                    </p>
                    <p>通过给某一列设置 <code>sortType</code> 可以在初始化时使用排序。</p>
                    <p>如果使用远程排序，可以设置 <code>sortable： 'custom'</code>，然后在触发排序事件
                        <code>@on-sort-change</code>后，进行远程排序，并手动设置新的
                        data，详见
                        API。</p>
                    <p>注意，排序并不会影响到源数据 data。</p>
                </div>
            </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo10"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <div class="demo-api">
        <div class="anchor">
            <h2 id="API">API</h2>
        </div>
        <div class="anchor">
            <h3 id="Table_props">Table props</h3>
        </div>
        <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>data</td> <td>显示的结构化数据，其中，字段 cellClassName 用于设置任意单元格的样式名称，因此数据不能使用该字段，详见示例<strong>特定样式</strong>。</td> <td>Array</td> <td>[]</td></tr> <tr><td>columns</td> <td>表格列的配置描述，具体项见后文</td> <td>Array</td> <td>[]</td></tr> <tr><td>stripe</td> <td>是否显示间隔斑马纹</td> <td>Boolean</td> <td>false</td></tr> <tr><td>border</td> <td>是否显示纵向边框</td> <td>Boolean</td> <td>false</td></tr> <tr><td>show-header</td> <td>是否显示表头</td> <td>Boolean</td> <td>true</td></tr> <tr><td>width</td> <td>表格宽度，单位 px</td> <td>Number | String</td> <td>自动</td></tr> <tr><td>height</td> <td>表格高度，单位 px，设置后，如果表格内容大于此值，会固定表头</td> <td>Number | String</td> <td>-</td></tr> <tr><td>max-height</td> <td>表格最大高度，单位 px，设置后，如果表格内容大于此值，会固定表头</td> <td>Number | String</td> <td>-</td></tr> <tr><td>loading</td> <td>表格是否加载中</td> <td>Boolean</td> <td>false</td></tr> <tr><td>disabled-hover</td> <td>禁用鼠标悬停时的高亮</td> <td>Boolean</td> <td>false</td></tr> <tr><td>highlight-row</td> <td>是否支持高亮选中的行，即单选</td> <td>Boolean</td> <td>false</td></tr> <tr><td>row-class-name</td> <td>
                行的 className 的回调方法，传入参数：
                <ul><li><code>row</code>：当前行数据</li> <li><code>index</code>：当前行的索引</li></ul></td> <td>Function</td> <td>-</td></tr> <tr><td>size</td> <td>表格尺寸，可选值为 <code>large</code>、<code>small</code>、<code>default</code> 或者不填</td> <td>String</td> <td>-</td></tr> <tr><td>no-data-text</td> <td>数据为空时显示的提示内容</td> <td>String</td> <td>暂无数据</td></tr> <tr><td>no-filtered-data-text</td> <td>筛选数据为空时显示的提示内容</td> <td>String</td> <td>暂无筛选结果</td></tr> <tr><td>draggable</td> <td>是否开启拖拽调整行顺序，需配合 @on-drag-drop 事件使用</td> <td>Boolean</td> <td>false</td></tr> <tr><td>tooltip-theme</td> <td>列使用 tooltip 时，配置它的主题，可选值为 dark 或 light</td> <td>String</td> <td>dark</td></tr> <tr><td>row-key</td> <td>是否强制使用内置的 row-key，开启后可能会影响性能</td> <td>Boolean</td> <td>false</td></tr> <tr><td>span-method</td> <td>合并行或列的计算方法</td> <td>Function</td> <td>-</td></tr> <tr><td>show-summary</td> <td>是否在表尾显示合计行</td> <td>Boolean</td> <td>false</td></tr> <tr><td>sum-text</td> <td>合计行第一列的文本</td> <td>String</td> <td>合计</td></tr>
                <tr><td>summary-method</td> <td>自定义的合计计算方法</td> <td>Function</td> <td>-</td></tr>
                <tr><td>indent-size</td> <td>树形数据缩进宽度，单位 px</td> <td>Number</td> <td>16</td></tr>
                <tr><td>load-data</td> <td>异步加载树形数据的方法，详见示例</td> <td>Function</td> <td>-</td></tr>
                <tr><td>context-menu</td> <td>当前行点击右键是否会阻止默认行为</td> <td>Boolean</td> <td>false</td></tr>
                </tbody></table>
        <div class="anchor">
            <h3 id="Table_events">Table events</h3>
        </div>
        <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-current-change</td> <td>开启 <code>highlight-row</code> 后有效，当表格的当前行发生变化的时候会触发</td> <td><ul><li><code>currentRow</code>：当前高亮行的数据</li> <li><code>oldCurrentRow</code>：上一次高亮的数据</li></ul></td></tr> <tr><td>on-select</td> <td>在多选模式下有效，选中某一项时触发</td> <td><ul><li><code>selection</code>：已选项数据</li> <li><code>row</code>：刚选择的项数据</li></ul></td></tr> <tr><td>on-select-cancel</td> <td>在多选模式下有效，取消选中某一项时触发</td> <td><ul><li><code>selection</code>：已选项数据</li> <li><code>row</code>：取消选择的项数据</li></ul></td></tr> <tr><td>on-select-all</td> <td>在多选模式下有效，点击全选时触发</td> <td><ul><li><code>selection</code>：已选项数据</li></ul></td></tr> <tr><td>on-select-all-cancel</td> <td>在多选模式下有效，点击取消全选时触发</td> <td><ul><li><code>selection</code>：已选项数据</li></ul></td></tr> <tr><td>on-selection-change</td> <td>在多选模式下有效，只要选中项发生变化时就会触发</td> <td><ul><li><code>selection</code>：已选项数据</li></ul></td></tr> <tr><td>on-sort-change</td> <td>排序时有效，当点击排序时触发</td> <td><ul><li><code>column</code>：当前列数据</li> <li><code>key</code>：排序依据的指标</li> <li><code>order</code>：排序的顺序，值为 <code>asc</code> 或 <code>desc</code></li></ul></td></tr> <tr><td>on-filter-change</td> <td>筛选时有效，筛选条件发生变化时触发</td> <td>当前列数据</td></tr> <tr><td>on-row-click</td> <td>单击某一行时触发</td> <td><ul><li>当前行的数据</li> <li>index</li></ul></td></tr> <tr><td>on-row-dblclick</td> <td>双击某一行时触发</td> <td><ul><li>当前行的数据</li> <li>index</li></ul></td></tr> <tr><td>on-expand</td> <td>展开或收起某一行时触发</td> <td><ul><li><code>row</code>：当前行的数据</li> <li><code>status</code>：当前的状态</li></ul></td></tr> <tr><td>on-drag-drop</td> <td>拖拽排序松开时触发，返回置换的两行数据索引</td> <td>index1, index2</td></tr>
        <tr><td>on-column-width-resize</td> <td>拖拽调整列宽时触发</td> <td>newWidth, oldWidth, column, event</td></tr>
        <tr><td>on-contextmenu</td> <td>当前行点击右键时触发</td> <td>row, event</td></tr>
        </tbody></table>
        <div class="anchor">
            <h3 id="Table_slot">Table slot</h3>
        </div>
        <table><thead><tr><th>名称</th> <th>说明</th></tr></thead> <tbody><tr><td>header</td> <td>表头</td></tr> <tr><td>footer</td> <td>页脚</td></tr> <tr><td>loading</td> <td>加载中</td></tr></tbody></table>
        <div class="anchor">
            <h3 id="Table_methods">Table methods</h3>
        </div>
        <table><thead><tr><th>方法名</th> <th>说明</th> <th>参数</th></tr></thead> <tbody><tr><td>exportCsv</td> <td>
                将数据导出为 <code>.csv</code> 文件，说明：
                <ul><li>支持IE9~IE11、Edge、Chrome、Safari、Firefox 全系列浏览器。</li> <li>IE9、Safari 需要手动修改后缀名为 <code>.csv</code>。</li> <li>IE9暂时只支持英文，中文会显示为乱码。</li></ul></td> <td>
                params(Object):
                <ul><li><strong>filename</strong>
                        文件名，默认为 table.csv
                    </li> <li><strong>original</strong>
                        是否导出为原始数据，默认为 true
                    </li> <li><strong>noHeader</strong>
                        不显示表头，默认为 false
                    </li> <li><strong>columns</strong>
                        自定义导出的列数据
                    </li> <li><strong>data</strong>
                        自定义导出的行数据
                    </li> <li><strong>callback</strong>
                        添加此函数后，不会下载，而是返回数据
                    </li> <li><strong>separator</strong>
                        数据分隔符，默认是逗号(,)
                    </li> <li><strong>quoted</strong>
                        每项数据是否加引号，默认为 false
                    </li></ul>
                说明：columns 和 data 需同时声明，声明后将导出指定的数据，建议列数据有自定义render时，可以根据需求自定义导出内容
            </td></tr> <tr><td>clearCurrentRow</td> <td>清除高亮项，仅在开启 <code>highlight-row</code> 时可用</td> <td>无</td></tr></tbody></table>
        <div class="anchor">
            <h3 id="column">column</h3>
        </div>
        <p>列描述数据对象，是 columns 中的一项</p>
        <table><thead><tr><th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th></tr></thead> <tbody><tr><td>type</td> <td>列类型，可选值为 index、selection、expand、html</td> <td>String</td> <td>-</td></tr> <tr><td>title</td> <td>列头显示文字</td> <td>String</td> <td>#</td></tr> <tr><td>key</td> <td>对应列内容的字段名</td> <td>String</td> <td>-</td></tr> <tr><td>width</td> <td>列宽</td> <td>Number</td> <td>-</td></tr> <tr><td>minWidth</td> <td>最小列宽</td> <td>Number</td> <td>-</td></tr> <tr><td>maxWidth</td> <td>最大列宽</td> <td>Number</td> <td>-</td></tr> <tr><td>align</td> <td>对齐方式，可选值为 <code>left</code> 左对齐、<code>right</code> 右对齐和 <code>center</code> 居中对齐</td> <td>String</td> <td>left</td></tr> <tr><td>className</td> <td>列的样式名称</td> <td>String</td> <td>-</td></tr> <tr><td>fixed</td> <td>列是否固定在左侧或者右侧，可选值为 <code>left</code> 左侧和 <code>right</code> 右侧</td> <td>String</td> <td>-</td></tr> <tr><td>ellipsis</td> <td>开启后，文本将不换行，超出部分显示为省略号</td> <td>Boolean</td> <td>false</td></tr> <tr><td>tooltip</td> <td>开启后，文本将不换行，超出部分显示为省略号，并用 Tooltip 组件显示完整内容</td> <td>Boolean</td> <td>false</td></tr> <tr><td>render</td> <td>自定义渲染列，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 row、column 和 index，分别指当前行数据，当前列数据，当前行索引，详见示例。<span><a href="https://segmentfault.com/ls/1650000011074057" target="_blank"><i class="zvu-icon zvu-icon-social-youtube-outline"></i> <span> 学习 Render 函数的内容</span></a> <!----> <!----></span></td> <td>Function</td> <td>-</td></tr> <tr><td>renderHeader</td> <td>自定义列头显示内容，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 <code>column</code> 和 <code>index</code>，分别为当前列数据和当前列索引。</td> <td>Function</td> <td>-</td></tr> <tr><td>indexMethod</td> <td>type 为 index 时可用，自定义序号</td> <td>Function，参数 row 为当前行内容</td> <td>-</td></tr> <tr><td>sortable</td> <td>对应列是否可以排序，如果设置为 <code>custom</code>，则代表用户希望远程排序，需要监听 Table 的 on-sort-change 事件</td> <td>Boolean | 'custom'</td> <td>false</td></tr> <tr><td>sortMethod</td> <td>自定义排序使用的方法，接收三个参数 a 、 b 和 type，当设置 <code>sortable: true</code> 时有效。type 值为 asc 和 desc</td> <td>Function</td> <td>-</td></tr> <tr><td>sortType</td> <td>设置初始化排序。值为 asc 和 desc</td> <td>String</td> <td>-</td></tr> <tr><td>filters</td> <td>过滤数据的选项，格式为数组，数组中每项包含 <code>label</code> 和 <code>value</code> 属性，使用过滤，必须同时配置 filterMethod</td> <td>Array</td> <td>-</td></tr> <tr><td>filterMethod</td> <td>数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示</td> <td>Function</td> <td>-</td></tr> <tr><td>filterMultiple</td> <td>数据过滤的选项是否多选</td> <td>Boolean</td> <td>true</td></tr> <tr><td>filteredValue</td> <td>在初始化时使用过滤，数组，值为需要过滤的 value 集合</td> <td>Array</td> <td>-</td></tr> <tr><td>filterRemote</td> <td>使用远程过滤</td> <td>Function</td> <td>-</td></tr> <tr><td>children</td> <td>表头分组</td> <td>Array</td> <td>-</td></tr> <tr><td>resizable</td> <td>该列是否允许拖拽调整宽度，需开启 border 属性，且设置 width</td> <td>Boolean</td> <td>false</td></tr>
        <tr><td>tree</td> <td>指定该列为显示展开/收起图标，树形数据时使用</td> <td>Boolean</td> <td>-</td></tr>
        </tbody></table>
    </div>
   </z-card>
</div>
</template>

<script>
export default {
  name: 'cpTable',
  data: function () {
    return {
      loading: true,
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ],
      data2: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ],
      data3: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          province: 'America',
          city: 'New York',
          zip: 100000
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'Washington, D.C. No. 1 Lake Park',
          province: 'America',
          city: 'Washington, D.C.',
          zip: 100000
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          province: 'Australian',
          city: 'Sydney',
          zip: 100000
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          province: 'Canada',
          city: 'Ottawa',
          zip: 100000
        }
      ],
      data4: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          province: 'America',
          city: 'New York',
          zip: 100000
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'Washington, D.C. No. 1 Lake Park',
          province: 'America',
          city: 'Washington, D.C.',
          zip: 100000
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          province: 'Australian',
          city: 'Sydney',
          zip: 100000
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          province: 'Canada',
          city: 'Ottawa',
          zip: 100000
        },
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          province: 'America',
          city: 'New York',
          zip: 100000
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'Washington, D.C. No. 1 Lake Park',
          province: 'America',
          city: 'Washington, D.C.',
          zip: 100000
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          province: 'Australian',
          city: 'Sydney',
          zip: 100000
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          province: 'Canada',
          city: 'Ottawa',
          zip: 100000
        }
      ],
      data5: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ],
      data6: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park'
        }
      ],
      data8: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park'
        },
        {
          name: 'Jim Green',
          age: 25,
          address: 'London No. 1 Lake Park',
          cellClassName: {
            age: 'demo-table-info-cell-age',
            address: 'demo-table-info-cell-address'
          }
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          cellClassName: {
            name: 'demo-table-info-cell-name'
          }
        }
      ],
      data10: [],
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      columns2: [
        {
          title: 'Name',
          key: 'name',
          width: 100,
          fixed: 'left'
        },
        {
          title: 'Age',
          key: 'age',
          width: 100
        },
        {
          title: 'Province',
          key: 'province',
          width: 100
        },
        {
          title: 'City',
          key: 'city',
          width: 100
        },
        {
          title: 'Address',
          key: 'address',
          width: 200
        },
        {
          title: 'Postcode',
          key: 'zip',
          width: 100
        },
        {
          title: 'Action',
          key: 'action',
          fixed: 'right',
          width: 120,
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, 'View'),
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, 'Edit')
            ])
          }
        }
      ],
      columns3: [
        {
          type: 'index',
          width: 60,
          align: 'center'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      columns4: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      columns5: [
        {
          title: 'Date',
          key: 'date',
          sortable: true
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age',
          sortable: true
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      columns9: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age',
          className: 'demo-table-info-column'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],

      demo1: ' <z-table :columns="columns1" :data="data1"></z-table>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '            columns1: [\r' +
              '                {\r' +
              '                    title: \'Name\',\r' +
              '                    key: \'name\'\r' +
              '               },\r' +
              '                {\r' +
              '                    title: \'Age\',\r' +
              '                    key: \'age\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Address\',\r' +
              '                    key: \'address\'\r' +
              '               }\r' +
              '            ],\r' +
              '            data1: [\r' +
              '                {\r' +
              '                    name: \'John Brown\',\r' +
              '                    age: 18,\r' +
              '                    address: \'New York No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-03\'\r' +
              '                },\r' +
              '               {\r' +
              '                    name: \'Jim Green\',\r' +
              '                    age: 24,\r' +
              '                    address: \'London No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-01\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Joe Black\',\r' +
              '                    age: 30,\r' +
              '                    address: \'Sydney No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-02\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jon Snow\',\r' +
              '                    age: 26,\r' +
              '                    address: \'Ottawa No. 2 Lake Park\',\r' +
              '                    date: \'2016-10-04\'\r' +
              '                }\r' +
              '            ]\r' +
              '        }\r' +
              '    },\r' +
              '}\r',
      demo2: '<z-table stripe :columns="columns1" :data="data1"></z-table>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '           columns1: [\r' +
              '                {\r' +
              '                    title: \'Name\',\r' +
              '                    key: \'name\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Age\',\r' +
              '                    key: \'age\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Address\',\r' +
              '                    key: \'address\'\r' +
              '                }\r' +
              '            ],\r' +
              '            data1: [\r' +
              '                {\r' +
              '                    name: \'John Brown\',\r' +
              '                    age: 18,\r' +
              '                    address: \'New York No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-03\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jim Green\',\r' +
              '                    age: 24,\r' +
              '                    address: \'London No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-01\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Joe Black\',\r' +
              '                    age: 30,\r' +
              '                    address: \'Sydney No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-02\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jon Snow\',\r' +
              '                    age: 26,\r' +
              '                    address: \'Ottawa No. 2 Lake Park\',\r' +
              '                    date: \'2016-10-04\'\r' +
              '                }\r' +
              '            ]\r' +
              '        }\r' +
              '    },\r' +
              '}\r',
      demo3: '<z-table border :columns="columns1" :data="data1"></z-table>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '           columns1: [\r' +
              '                {\r' +
              '                    title: \'Name\',\r' +
              '                    key: \'name\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Age\',\r' +
              '                    key: \'age\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Address\',\r' +
              '                    key: \'address\'\r' +
              '                }\r' +
              '            ],\r' +
              '            data1: [\r' +
              '                {\r' +
              '                    name: \'John Brown\',\r' +
              '                    age: 18,\r' +
              '                    address: \'New York No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-03\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jim Green\',\r' +
              '                    age: 24,\r' +
              '                    address: \'London No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-01\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Joe Black\',\r' +
              '                    age: 30,\r' +
              '                    address: \'Sydney No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-02\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jon Snow\',\r' +
              '                    age: 26,\r' +
              '                    address: \'Ottawa No. 2 Lake Park\',\r' +
              '                    date: \'2016-10-04\'\r' +
              '                }\r' +
              '            ]\r' +
              '        }\r' +
              '    },\r' +
              '}\r',
      demo4: '<p>Custom row styles:</p>\r' +
              ' <z-table :row-class-name="rowClassName" :columns="columns1" :data="data1"></z-table>\r' +
              '<p>Custom column styles:</p>\r' +
              '<z-table :columns="columns9" :data="data1"></z-table>\r' +
              '<p>Custom arbitrary cell styles:</p>\r' +
              '<z-table :columns="columns1" :data="data8"></z-table>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '           columns1: [\r' +
              '                {\r' +
              '                    title: \'Name\',\r' +
              '                    key: \'name\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Age\',\r' +
              '                    key: \'age\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Address\',\r' +
              '                    key: \'address\'\r' +
              '                }\r' +
              '            ],\r' +
              '                columns9: [\r' +
              '                    {\r' +
              '                        title: \'Name\',\r' +
              '                        key: \'name\'\r' +
              '                    },\r' +
              '                    {\r' +
              '                        title:\'Age\',\r' +
              '                        key: \'age\',\r' +
              '                        className: \'demo-table-info-column\'\r' +
              '                    },\r' +
              '                     {\r' +
              '                        title: \'Address\',\r' +
              '                        key: \'address\'\r' +
              '                    }\r' +
              '                ],\r' +
              '            data1: [\r' +
              '                {\r' +
              '                    name: \'John Brown\',\r' +
              '                    age: 18,\r' +
              '                    address: \'New York No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-03\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jim Green\',\r' +
              '                    age: 24,\r' +
              '                    address: \'London No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-01\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Joe Black\',\r' +
              '                    age: 30,\r' +
              '                    address: \'Sydney No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-02\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jon Snow\',\r' +
              '                    age: 26,\r' +
              '                    address: \'Ottawa No. 2 Lake Park\',\r' +
              '                    date: \'2016-10-04\'\r' +
              '                }\r' +
              '            ]\r' +
              '            data8: [\r' +
              '                {\r' +
              '                    name: \'John Brown\',\r' +
              '                    age: 18,\r' +
              '                    address: \'New York No. 1 Lake Park\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jim Green\',\r' +
              '                    age: 25,\r' +
              '                    address: \'London No. 1 Lake Park\',\r' +
              '                    cellClassName: {\r' +
              '                        age: \'demo-table-info-cell-age\',\r' +
              '                        address: \'demo-table-info-cell-address\'\r' +
              '                    }\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Joe Black\',\r' +
              '                    age: 30,\r' +
              '                    address: \'Sydney No. 1 Lake Park\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jon Snow\',\r' +
              '                    age: 26,\r' +
              '                    address: \'Ottawa No. 2 Lake Park\',\r' +
              '                    cellClassName: {\r' +
              '                        name: \'demo-table-info-cell-name\'\r' +
              '                    }\r' +
              '                }\r' +
              '            ]\r' +
              '        }\r' +
              '    },\r' +
              '        methods: {\r' +
              '            rowClassName:function(row, index) {\r' +
              '                if (index === 1) {\r' +
              '                    return \'demo-table-info-row\';\r' +
              '                } else if (index === 3) {\r' +
              '                    return \'demo-table-error-row\';\r' +
              '                }\r' +
              '                return \'\';\r' +
              '            }\r' +
              '        }\r' +
              '}\r',
      demo5: '<z-table height="200" :columns="columns1" :data="data2"></z-table>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '           columns1: [\r' +
              '                {\r' +
              '                    title: \'Name\',\r' +
              '                    key: \'name\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Age\',\r' +
              '                    key: \'age\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Address\',\r' +
              '                    key: \'address\'\r' +
              '                }\r' +
              '            ],\r' +
              '            data2: [\r' +
              '                {\r' +
              '                    name: \'John Brown\',\r' +
              '                    age: 18,\r' +
              '                    address: \'New York No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-03\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jim Green\',\r' +
              '                    age: 24,\r' +
              '                    address: \'London No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-01\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Joe Black\',\r' +
              '                    age: 30,\r' +
              '                    address: \'Sydney No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-02\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jon Snow\',\r' +
              '                    age: 26,\r' +
              '                    address: \'Ottawa No. 2 Lake Park\',\r' +
              '                    date: \'2016-10-04\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'John Brown\',\r' +
              '                    age: 18,\r' +
              '                    address: \'New York No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-03\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jim Green\',\r' +
              '                    age: 24,\r' +
              '                    address: \'London No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-01\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Joe Black\',\r' +
              '                    age: 30,\r' +
              '                    address: \'Sydney No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-02\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jon Snow\',\r' +
              '                    age: 26,\r' +
              '                    address: \'Ottawa No. 2 Lake Park\',\r' +
              '                    date: \'2016-10-04\'\r' +
              '                }\r' +
              '            ]\r' +
              '        }\r' +
              '    },\r' +
              '}\r',
      demo6: '<z-table width="550" border :columns="columns2" :data="data3"></z-table>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '            columns2: [\r' +
              '                {\r' +
              '                    title: \'Name\',\r' +
              '                    key: \'name\',\r' +
              '                    width: 100,\r' +
              '                    fixed: \'left\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Age\',\r' +
              '                    key: \'age\',\r' +
              '                    width: 100\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Province\',\r' +
              '                    key: \'province\',\r' +
              '                    width: 100\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'City\',\r' +
              '                    key: \'city\',\r' +
              '                    width: 100\r' +
              '                },\r' +
              '                {\r' +
              '                    title:\'Address\',\r' +
              '                    key: \'address\',\r' +
              '                    width: 200\r' +
              '                },\r' +
              '                {\r' +
              '                    title:\'Postcode\',\r' +
              '                    key: \'zip\',\r' +
              '                    width: 100\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Action\',\r' +
              '                    key: \'action\',\r' +
              '                    fixed: \'right\',\r' +
              '                    width: 120,\r' +
              '                    render: (h, params) => {\r' +
              '                        return h(\'div\', [\r' +
              '                            h(\'Button\', {\r' +
              '                                props: {\r' +
              '                                    type: \'text\',\r' +
              '                                    size: \'small\'\r' +
              '                                }\r' +
              '                            }, \'View\'),\r' +
              '                            h(\'Button\', {\r' +
              '                                props: {\r' +
              '                                    type: \'text\',\r' +
              '                                    size: \'small\'\r' +
              '                                }\r' +
              '                            }, \'Edit\')\r' +
              '                        ]);\r' +
              '                    }\r' +
              '                }\r' +
              '            ],\r' +
              '            data3: [\r' +
              '                {\r' +
              '                    name: \'John Brown\',\r' +
              '                    age: 18,\r' +
              '                    address: \'New York No. 1 Lake Park\',\r' +
              '                    province: \'America\',\r' +
              '                    city: \'New York\',\r' +
              '                    zip: 100000\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jim Green\',\r' +
              '                    age: 24,\r' +
              '                    address: \'Washington, D.C. No. 1 Lake Park\',\r' +
              '                    province: \'America\',\r' +
              '                    city: \'Washington, D.C.\',\r' +
              '                    zip: 100000\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Joe Black\',\r' +
              '                    age: 30,\r' +
              '                    address: \'Sydney No. 1 Lake Park\',\r' +
              '                    province: \'Australian\',\r' +
              '                    city: \'Sydney\',\r' +
              '                    zip: 100000\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jon Snow\',\r' +
              '                    age: 26,\r' +
              '                    address: \'Ottawa No. 2 Lake Park\',\r' +
              '                   province: \'Canada\',\r' +
              '                    city: \'Ottawa\',\r' +
              '                    zip: 100000\r' +
              '                }\r' +
              '            ]\r' +
              '        }\r' +
              '    },\r',
      demo7: '<z-table width="550" height="200" border :columns="columns2" :data="data4"></z-table>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '            columns2: [\r' +
              '                {\r' +
              '                    title: \'Name\',\r' +
              '                    key: \'name\',\r' +
              '                    width: 100,\r' +
              '                    fixed: \'left\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Age\',\r' +
              '                    key: \'age\',\r' +
              '                    width: 100\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Province\',\r' +
              '                    key: \'province\',\r' +
              '                    width: 100\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'City\',\r' +
              '                    key: \'city\',\r' +
              '                    width: 100\r' +
              '                },\r' +
              '                {\r' +
              '                    title:\'Address\',\r' +
              '                    key: \'address\',\r' +
              '                    width: 200\r' +
              '                },\r' +
              '                {\r' +
              '                    title:\'Postcode\',\r' +
              '                    key: \'zip\',\r' +
              '                    width: 100\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Action\',\r' +
              '                    key: \'action\',\r' +
              '                    fixed: \'right\',\r' +
              '                    width: 120,\r' +
              '                    render: (h, params) => {\r' +
              '                        return h(\'div\', [\r' +
              '                            h(\'Button\', {\r' +
              '                                props: {\r' +
              '                                    type: \'text\',\r' +
              '                                    size: \'small\'\r' +
              '                                }\r' +
              '                            }, \'View\'),\r' +
              '                            h(\'Button\', {\r' +
              '                                props: {\r' +
              '                                    type: \'text\',\r' +
              '                                    size: \'small\'\r' +
              '                                }\r' +
              '                            }, \'Edit\')\r' +
              '                        ]);\r' +
              '                    }\r' +
              '                }\r' +
              '            ],\r' +
              '            data4: [\r' +
              '                {\r' +
              '                    name: \'John Brown\',\r' +
              '                    age: 18,\r' +
              '                    address: \'New York No. 1 Lake Park\',\r' +
              '                    province: \'America\',\r' +
              '                    city: \'New York\',\r' +
              '                    zip: 100000\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jim Green\',\r' +
              '                    age: 24,\r' +
              '                    address: \'Washington, D.C. No. 1 Lake Park\',\r' +
              '                    province: \'America\',\r' +
              '                    city: \'Washington, D.C.\',\r' +
              '                    zip: 100000\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Joe Black\',\r' +
              '                    age: 30,\r' +
              '                    address: \'Sydney No. 1 Lake Park\',\r' +
              '                    province: \'Australian\',\r' +
              '                    city: \'Sydney\',\r' +
              '                    zip: 100000\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jon Snow\',\r' +
              '                    age: 26,\r' +
              '                    address: \'Ottawa No. 2 Lake Park\',\r' +
              '                    province: \'Canada\',\r' +
              '                    city: \'Ottawa\',\r' +
              '                    zip: 100000\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'John Brown\',\r' +
              '                    age: 18,\r' +
              '                    address: \'New York No. 1 Lake Park\',\r' +
              '                    province: \'America\',\r' +
              '                    city: \'New York\',\r' +
              '                    zip: 100000\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jim Green\',\r' +
              '                    age: 24,\r' +
              '                    address: \'Washington, D.C. No. 1 Lake Park\',\r' +
              '                    province: \'America\',\r' +
              '                    city: \'Washington, D.C.\',\r' +
              '                    zip: 100000\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Joe Black\',\r' +
              '                    age: 30,\r' +
              '                    address: \'Sydney No. 1 Lake Park\',\r' +
              '                    province: \'Australian\',\r' +
              '                    city: \'Sydney\',\r' +
              '                    zip: 100000\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jon Snow\',\r' +
              '                    age: 26,\r' +
              '                    address: \'Ottawa No. 2 Lake Park\',\r' +
              '                    province: \'Canada\',\r' +
              '                    city: \'Ottawa\',\r' +
              '                    zip: 100000\r' +
              '                }\r' +
              '           ]\r' +
              '        }\r' +
              '    },\r',
      demo8: '<z-table highlight-row ref="currentRowTable" :columns="columns3" :data="data1"></z-table>\r' +
                '<z-button @click="handleClearCurrentRow">Clear</z-button>\r' +
                'export default {\r' +
                '    data () {\r' +
                '        return {\r' +
                '               columns3: [\r' +
                '                   {\r' +
                '                       type: \'index\',\r' +
                '                       width: 60,\r' +
                '                       align: \'center\'\r' +
                '                   },\r' +
                '                   {\r' +
                '                       title: \'Name\',\r' +
                '                       key: \'name\'\r' +
                '                   },\r' +
                '                   {\r' +
                '                       title: \'Age\',\r' +
                '                       key: \'age\'\r' +
                '                  },\r' +
                '                   {\r' +
                '                       title: \'Address\',\r' +
                '                       key: \'address\'\r' +
                '                   }\r' +
                '               ],\r' +
                '            data1: [\r' +
                '                {\r' +
                '                    name: \'John Brown\',\r' +
                '                    age: 18,\r' +
                '                    address: \'New York No. 1 Lake Park\',\r' +
                '                    date: \'2016-10-03\'\r' +
                '                },\r' +
                '                {\r' +
                '                    name: \'Jim Green\',\r' +
                '                    age: 24,\r' +
                '                    address: \'London No. 1 Lake Park\',\r' +
                '                    date: \'2016-10-01\'\r' +
                '                },\r' +
                '                {\r' +
                '                    name: \'Joe Black\',\r' +
                '                    age: 30,\r' +
                '                    address: \'Sydney No. 1 Lake Park\',\r' +
                '                    date: \'2016-10-02\'\r' +
                '                },\r' +
                '                {\r' +
                '                    name: \'Jon Snow\',\r' +
                '                    age: 26,\r' +
                '                    address: \'Ottawa No. 2 Lake Park\',\r' +
                '                    date: \'2016-10-04\'\r' +
                '                }\r' +
                '            ]\r' +
                '        }\r' +
                '    },\r' +
                '}\r',
      demo9: '<z-table border ref="selection" :columns="columns4" :data="data1"></z-table>\r' +
              '<z-button @click="handleSelectAll(true)">Set all selected</z-button>\r' +
              '<z-button @click="handleSelectAll(false)">Cancel all selected</z-button>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '            columns4: [\r' +
              '                {\r' +
              '                    type: \'selection\',\r' +
              '                    width: 60,\r' +
              '                    align: \'center\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Name\',\r' +
              '                    key: \'name\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Age\',\r' +
              '                    key: \'age\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Address\',\r' +
              '                    key: \'address\'\r' +
              '                }\r' +
              '            ],\r' +
              '            data1: [\r' +
              '                {\r' +
              '                    name: \'John Brown\',\r' +
              '                    age: 18,\r' +
              '                    address: \'New York No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-03\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jim Green\',\r' +
              '                    age: 24,\r' +
              '                    address: \'London No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-01\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Joe Black\',\r' +
              '                    age: 30,\r' +
              '                    address: \'Sydney No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-02\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jon Snow\',\r' +
              '                    age: 26,\r' +
              '                    address: \'Ottawa No. 2 Lake Park\',\r' +
              '                    date: \'2016-10-04\'\r' +
              '                }\r' +
              '            ]\r' +
              '        }\r' +
              '    },\r' +
              '}\r',
      demo10: ' <z-table border :columns="columns5" :data="data5"></z-table>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '            columns5: [\r' +
              '                {\r' +
              '                    title: \'Date\',\r' +
              '                    key: \'date\',\r' +
              '                    sortable: true\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Name\',\r' +
              '                    key: \'name\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Age\',\r' +
              '                    key: \'age\',\r' +
              '                    sortable: true\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Address\',\r' +
              '                    key: \'address\'\r' +
              '                }\r' +
              '            ],\r' +
              '            data5: [\r' +
              '                {\r' +
              '                    name: \'John Brown\',\r' +
              '                    age: 18,\r' +
              '                    address: \'New York No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-03\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jim Green\',\r' +
              '                    age: 24,\r' +
              '                    address: \'London No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-01\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Joe Black\',\r' +
              '                    age: 30,\r' +
              '                   address: \'Sydney No. 1 Lake Park\',\r' +
              '                    date: \'2016-10-02\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jon Snow\',\r' +
              '                    age: 26,\r' +
              '                    address: \'Ottawa No. 2 Lake Park\',\r' +
              '                    date: \'2016-10-04\'\r' +
              '                }\r' +
              '            ]\r' +
              '        }\r' +
              '    },\r' +
              '});\r'
    }
  },
  methods: {
    handleClearCurrentRow: function () {
      this.$refs.currentRowTable.clearCurrentRow()
    },
    handleSelectAll: function (status) {
      this.$refs.selection.selectAll(status)
    },
    rowClassName: function (row, index) {
      if (index === 1) {
        return 'demo-table-info-row'
      } else if (index === 3) {
        return 'demo-table-error-row'
      }
      return ''
    },
    show: function (index) {
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
      })
    },
    remove: function (index) {
      this.data6.splice(index, 1)
    }
  },
  mounted () {
    const data = []
    for (let i = 0; i < 20; i++) {
      data.push({
        key: i,
        name: 'John Brown',
        age: i + 1,
        street: 'Lake Park',
        building: 'C',
        door: 2035,
        caddress: 'Lake Street 42',
        cname: 'SoftLake Co',
        gender: 'M'
      })
    }
    this.data10 = data
  }
}
</script>
<style scoped>
.zvu-table .demo-table-info-row td {
    background-color: #2db7f5;
    color: #fff;
}

.zvu-table .demo-table-error-row td {
    background-color: #ff6600;
    color: #fff;
}

.zvu-table td.demo-table-info-column {
    background-color: #2db7f5;
    color: #fff;
}

.zvu-table .demo-table-info-cell-name {
    background-color: #2db7f5;
    color: #fff;
}

.zvu-table .demo-table-info-cell-age {
    background-color: #ff6600;
    color: #fff;
}

.zvu-table .demo-table-info-cell-address {
    background-color: #187;
    color: #fff;
}
</style>
