<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-03-17 16:29:12
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-table border :columns="columns6" :data="data5"></z-table>
            <div class="example-desc">
                <header class="example-header"><span>筛选</span></header>
                <div>
                    <p>通过给 <code>columns</code> 数据的项，设置 <code>filters</code>，可进行筛选，filters 接收一个数组，详见
                        Demo 和 API。</p>
                    <p>必须指定一个筛选函数 <code>filterMethod</code> 才可以进行筛选，filterMethod 传入两个参数 value 和 row，详见
                        Demo 和 API。</p>
                    <p>如果指定 <code>filterMultiple: false</code>，则使用单选，默认为多选。</p>
                    <p>注意，筛选并不会影响到源数据 data。</p>
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
          <z-table border :columns="columns12" :data="data6">
            <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <z-button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</z-button>
                <z-button type="error" size="small" @click="remove(index)">Delete</z-button>
            </template>
        </z-table>
        <div class="example-desc">
            <header class="example-header"><span>自定义列模板</span></header>
            <div>
                <p>开始支持 slot-scope 写法。</p>
                <p> 在 columns 的某列声明 slot 后，就可以在 Table 的 slot 中使用 slot-scope。</p>
                <p>slot-scope 的参数有 3 个：当前行数据 row，当前列数据 column，当前行序号 index。</p>
            </div>
        </div>
      </z-col>
        <z-col span="12">
          <z-code-editor :content="demo12"></z-code-editor>
      </z-col>
    </z-row>
  </z-card>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
            <z-table border :columns="columns7" :data="data6"></z-table>
            <div class="example-desc">
                <header class="example-header"><span>Render 写法 </span></header>
                <div>
                    <p>通过给 columns 数据的项，设置一个函数 render，可以自定义渲染当前列，包括渲染自定义组件，它基于 Vue 的 Render 函数。</p>
                    <p>render 函数传入两个参数，第一个是 h，第二个是对象，包含 row、column 和 index，分别指当前单元格数据，当前列数据，当前是第几行。</p>
                </div>
            </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo13"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
  <z-card bordered dis-hover class="m-t-15">
    <z-row :gutter="15">
        <z-col span="12">
            <z-table  row-key="id" :columns="columns16" :data="data12" border></z-table>
            <div class="example-desc">
               <header class="example-header"><span>树形数据</span></header>
               <p> 4.1.0 当数据中含有 <code>children</code> 字段，会以树形数据显示。</p>
               <p>使用树形数据时，必须指定 <code>row-key</code>，比如 id。</p>
               <p>在 column 开启属性 <code>tree</code>，则该列会显示展开/收起图标。</p>
               <p>属性 <code>indent-size</code> 可以设置缩进。</p>
               <p>设置 data 属性 <code>_showChildren</code>，默认会展开子数据。</p>
            </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo22"></z-code-editor>
        </z-col>
      </z-row>
  </z-card>
   <z-card bordered dis-hover class="m-t-15">
    <z-row :gutter="15">
        <z-col span="12">
            <z-table  row-key="id" :load-data="handleLoadData" :columns="columns16" :data="data13" border></z-table>
            <div class="example-desc">
               <header class="example-header"><span>异步树形数据</span></header>
               <p> 4.1.0
                在上述示例基础上，当 data 中 <code>children</code> 字段为空数组，且指定了
                <code>_loading</code>，通过属性 <code>load-data</code>可以实现异步加载树形数据。
              </p>
              <p>load-data 函数第一个参数为当前项数据，第二个参数为回调。</p>
            </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo23"></z-code-editor>
        </z-col>
      </z-row>
  </z-card>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-table :columns="columns10" :data="data9"></z-table>
            <div class="example-desc">
                <header class="example-header"><span>可展开</span></header>
                <div>
                    <p>当表格内容较多不能一次性完全展示时使用。</p>
                    <p>通过给 <code>columns</code> 数据设置一项，指定 <code>type: 'expand'</code>，即可开启扩展功能。</p>
                    <p>给行数据 data 的某项设置 <code>_expanded</code> 为 true，可以默认展开当前行，设置
                        <code>_disableExpand</code>
                        可以禁用当前行的展开功能。</p>
                    <p>渲染展开区域与自定义列模板方法类似，使用 render 函数。当内容较复杂时，可拆分为组件或使用 JSX。</p>
                </div>
            </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo21"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-table :columns="columns13" :data="data5" border :span-method="handleSpan"></z-table>
          <div class="example-desc">
              <header class="example-header"><span>拖拽调整列宽</span></header>
              <div>
                  <p>给某一列设置属性 resizable 为 true，可以拖拽调整该列的宽度，需开启 border 属性，且该列设置了 width 属性。
                      拖拽松开时，会触发 @on-column-width-resize 事件。</p>
              </div>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo18"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <z-table :columns="columns14" :data="data5" border :span-method="handleSpan"></z-table>
              <div class="example-desc">
                  <header class="example-header"><span>行/列合并</span></header>
                  <div>
                      <p>设置属性
                          <code>span-method</code> 可以指定合并行或列的算法。</p>
                      <p>该方法参数为 4 个对象：</p>
                      <ul>
                          <li><strong>row</strong>: 当前行</li>
                          <li><strong>column</strong>: 当前列</li>
                          <li><strong>rowIndex</strong>: 当前行索引</li>
                          <li><strong>columnIndex</strong>: 当前列索引</li>
                      </ul>
                      <p>该函数可以返回一个包含两个元素的数组，第一个元素代表 rowspan，第二个元素代表 colspan。 也可以返回一个键名为 rowspan 和 colspan 的对象。</p>
                  </div>
              </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo19"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <z-table :columns="columns15" :data="data11" border show-summary></z-table>
            <br>
            <z-table :columns="columns15" :data="data11" border show-summary :summary-method="handleSummary" height="200"></z-table>
            <div class="example-desc">
                <header class="example-header"><span>合计</span></header>
                <div><p>设置属性 <code>show-summary</code> 为 true 会在表格尾部展示合计行。</p> <p>默认第一列不进行计算，而是显示 <code>合计</code>，设置属性 <code>sum-text</code> 可以自定义文字。</p> <p>属性 <code>summary-method</code> 可以自定义合计行每列显示的内容，见示例2。</p></div>
            </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo20"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <z-table :columns="columns11" :data="data10" border height="500"></z-table>
            <div class="example-desc">
                <header class="example-header"><span>表头分组</span></header>
                <div>
                    <p>给 column 设置 children，可以渲染出分组表头。</p>
                </div>
            </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo14"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <div>
                <z-table :loading="loading" :columns="columns1" :data="data1"></z-table>
                <br>
                Change Loading Status <Switch v-model="loading"></Switch>
            </div>
            <div class="example-desc">
                <header class="example-header"><span>加载中 </span></header>
                <div>
                    <p>通过设置属性 loading 可以让表格处于加载中状态，在异步请求数据、分页时建议使用。</p>

                </div>
            </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo15"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <div>
                <z-table size="large" :columns="columns1" :data="data1"></z-table>
                <z-table size="small" :columns="columns1" :data="data1"></z-table>
            </div>
            <div class="example-desc">
                <header class="example-header"><span>尺寸 </span></header>
                <div>
                    <p>通过设置属性 size 为 large 或 small 可以调整表格尺寸为大或小，默认不填或填写 default 为中。</p>

                </div>
            </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo16"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <div>
              <z-table :columns="columns8" :data="data7" size="small" ref="table"></z-table>
              <br>
              <z-button type="primary" size="large" @click="exportData(1)">
                  <z-icon type="ios-download-outline"></z-icon> Export source data
              </z-button>
              <z-button type="primary" size="large" @click="exportData(2)">
                  <z-icon type="ios-download-outline"></z-icon> Export sorting and filtered data
              </z-button>
              <z-button type="primary" size="large" @click="exportData(3)">
                  <z-icon type="ios-download-outline"></z-icon> Export custom data
              </z-button>
          </div>
          <div class="example-desc">
              <header class="example-header"><span>导出csv </span></header>
              <div>
                  <p>通过调用 <code>exportCsv()</code> 方法，可以将数据导出为 <code>.csv</code> 的表格文件，详见 API。</p>
                  <p>说明：</p>
                  <ul>
                      <li>支持IE9~IE11、Edge、Chrome、Safari、Firefox 全系列浏览器。</li>
                      <li>IE9、Safari 需要手动修改后缀名为 <code>.csv</code>。</li>
                      <li>IE9暂时只支持英文，中文会显示为乱码。</li>
                  </ul>
              </div>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo17"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
</div>
</template>

<script>
export default {
  name: 'cpTable1',
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
      data7: [
        {
          'name': 'Name1',
          'fav': 0,
          'show': 7302,
          'weak': 5627,
          'signin': 1563,
          'click': 4254,
          'active': 1438,
          'day7': 274,
          'day30': 285,
          'tomorrow': 1727,
          'day': 558,
          'week': 4440,
          'month': 5610
        },
        {
          'name': 'Name2',
          'fav': 0,
          'show': 4720,
          'weak': 4086,
          'signin': 3792,
          'click': 8690,
          'active': 8470,
          'day7': 8172,
          'day30': 5197,
          'tomorrow': 1684,
          'day': 2593,
          'week': 2507,
          'month': 1537
        },
        {
          'name': 'Name3',
          'fav': 0,
          'show': 7181,
          'weak': 8007,
          'signin': 8477,
          'click': 1879,
          'active': 16,
          'day7': 2249,
          'day30': 3450,
          'tomorrow': 377,
          'day': 1561,
          'week': 3219,
          'month': 1588
        },
        {
          'name': 'Name4',
          'fav': 0,
          'show': 9911,
          'weak': 8976,
          'signin': 8807,
          'click': 8050,
          'active': 7668,
          'day7': 1547,
          'day30': 2357,
          'tomorrow': 7278,
          'day': 5309,
          'week': 1655,
          'month': 9043
        },
        {
          'name': 'Name5',
          'fav': 0,
          'show': 934,
          'weak': 1394,
          'signin': 6463,
          'click': 5278,
          'active': 9256,
          'day7': 209,
          'day30': 3563,
          'tomorrow': 8285,
          'day': 1230,
          'week': 4840,
          'month': 9908
        },
        {
          'name': 'Name6',
          'fav': 0,
          'show': 6856,
          'weak': 1608,
          'signin': 457,
          'click': 4949,
          'active': 2909,
          'day7': 4525,
          'day30': 6171,
          'tomorrow': 1920,
          'day': 1966,
          'week': 904,
          'month': 6851
        },
        {
          'name': 'Name7',
          'fav': 0,
          'show': 5107,
          'weak': 6407,
          'signin': 4166,
          'click': 7970,
          'active': 1002,
          'day7': 8701,
          'day30': 9040,
          'tomorrow': 7632,
          'day': 4061,
          'week': 4359,
          'month': 3676
        },
        {
          'name': 'Name8',
          'fav': 0,
          'show': 862,
          'weak': 6520,
          'signin': 6696,
          'click': 3209,
          'active': 6801,
          'day7': 6364,
          'day30': 6850,
          'tomorrow': 9408,
          'day': 2481,
          'week': 1479,
          'month': 2346
        },
        {
          'name': 'Name9',
          'fav': 0,
          'show': 567,
          'weak': 5859,
          'signin': 128,
          'click': 6593,
          'active': 1971,
          'day7': 7596,
          'day30': 3546,
          'tomorrow': 6641,
          'day': 1611,
          'week': 5534,
          'month': 3190
        },
        {
          'name': 'Name10',
          'fav': 0,
          'show': 3651,
          'weak': 1819,
          'signin': 4595,
          'click': 7499,
          'active': 7405,
          'day7': 8710,
          'day30': 5518,
          'tomorrow': 428,
          'day': 9768,
          'week': 2864,
          'month': 5811
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
      data9: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          job: 'Data engineer',
          interest: 'badminton',
          birthday: '1991-05-14',
          book: 'Steve Jobs',
          movie: 'The Prestige',
          music: 'I Cry'
        },
        {
          name: 'Jim Green',
          age: 25,
          address: 'London No. 1 Lake Park',
          job: 'Data Scientist',
          interest: 'volleyball',
          birthday: '1989-03-18',
          book: 'My Struggle',
          movie: 'Roman Holiday',
          music: 'My Heart Will Go On'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          job: 'Data Product Manager',
          interest: 'tennis',
          birthday: '1992-01-31',
          book: 'Win',
          movie: 'Jobs',
          music: 'Don’t Cry'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          job: 'Data Analyst',
          interest: 'snooker',
          birthday: '1988-7-25',
          book: 'A Dream in Red Mansions',
          movie: 'A Chinese Ghost Story',
          music: 'actor'
        }
      ],
      data10: [],
      data11: [
        {
          id: '100001',
          name: 'John Brown',
          amount1: '123',
          amount2: '1.2',
          amount3: 10
        }, {
          id: '100002',
          name: 'Jim Green',
          amount1: '234',
          amount2: '2.3',
          amount3: 11
        }, {
          id: '100003',
          name: 'Joe Black',
          amount1: '345',
          amount2: '3.4',
          amount3: 12
        }, {
          id: '100004',
          name: 'Jon Snow',
          amount1: '456',
          amount2: '4.5',
          amount3: 13
        }, {
          id: '100005',
          name: 'Jobs',
          amount1: '678',
          amount2: '5.6',
          amount3: 14
        }
      ],
      data12: [
        {
          id: '100',
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park'
        },
        {
          id: '101',
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          children: [
            {
              id: '10100',
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park'
            },
            {
              id: '10101',
              name: 'Joe Blackn',
              age: 30,
              address: 'Sydney No. 1 Lake Park'
            },
            {
              id: '10102',
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              children: [
                {
                  id: '1010200',
                  name: 'Jim Green',
                  age: 24,
                  address: 'New York No. 1 Lake Park'
                }
              ]
            }
          ]
        },
        {
          id: '102',
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park'
        },
        {
          id: '103',
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park'
        }
      ],
      data13: [
        {
          id: '100',
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park'
        },
        {
          id: '101',
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          _loading: false,
          children: []
        },
        {
          id: '102',
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park'
        },
        {
          id: '103',
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park'
        }
      ],
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
      columns6: [
        {
          title: 'Date',
          key: 'date'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age',
          filters: [
            {
              label: 'Greater than 25',
              value: 1
            },
            {
              label: 'Less than 25',
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod (value, row) {
            if (value === 1) {
              return row.age > 25
            } else if (value === 2) {
              return row.age < 25
            }
          }
        },
        {
          title: 'Address',
          key: 'address',
          filters: [
            {
              label: 'New York',
              value: 'New York'
            },
            {
              label: 'London',
              value: 'London'
            },
            {
              label: 'Sydney',
              value: 'Sydney'
            }
          ],
          filterMethod (value, row) {
            return row.address.indexOf(value) > -1
          }
        }
      ],
      columns7: [
        {
          title: 'Name',
          key: 'name',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.name)
            ])
          }
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, 'View'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, 'Delete')
            ])
          }
        }
      ],
      columns8: [
        {
          'title': 'Name',
          'key': 'name',
          'fixed': 'left',
          'width': 200
        },
        {
          'title': 'Show',
          'key': 'show',
          'width': 150,
          'sortable': true,
          filters: [
            {
              label: 'Greater than 4000',
              value: 1
            },
            {
              label: 'Less than 4000',
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod (value, row) {
            if (value === 1) {
              return row.show > 4000
            } else if (value === 2) {
              return row.show < 4000
            }
          }
        },
        {
          'title': 'Weak',
          'key': 'weak',
          'width': 150,
          'sortable': true
        },
        {
          'title': 'Signin',
          'key': 'signin',
          'width': 150,
          'sortable': true
        },
        {
          'title': 'Click',
          'key': 'click',
          'width': 150,
          'sortable': true
        },
        {
          'title': 'Active',
          'key': 'active',
          'width': 150,
          'sortable': true
        },
        {
          'title': '7, retained',
          'key': 'day7',
          'width': 150,
          'sortable': true
        },
        {
          'title': '30, retained',
          'key': 'day30',
          'width': 150,
          'sortable': true
        },
        {
          'title': 'The next day left',
          'key': 'tomorrow',
          'width': 150,
          'sortable': true
        },
        {
          'title': 'Day Active',
          'key': 'day',
          'width': 150,
          'sortable': true
        },
        {
          'title': 'Week Active',
          'key': 'week',
          'width': 150,
          'sortable': true
        },
        {
          'title': 'Month Active',
          'key': 'month',
          'width': 150,
          'sortable': true
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
      columns10: [
        {
          type: 'expand',
          width: 50,
          render: (h, params) => {
            return h('div', [
              h('z-button', {
                props: {
                  type: 'primary',
                  size: 'small'
                }
              }, 'View')
            ])
          }
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
      columns11: [
        {
          title: 'Name',
          key: 'name',
          align: 'center',
          width: 200,
          fixed: 'left',
          filters: [
            {
              label: 'Joe',
              value: 1
            },
            {
              label: 'John',
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod (value, row) {
            if (value === 1) {
              return row.name === 'Joe'
            } else if (value === 2) {
              return row.name === 'John Brown'
            }
          }
        },
        {
          title: 'Other',
          align: 'center',
          children: [
            {
              title: 'Age',
              key: 'age',
              align: 'center',
              width: 200,
              sortable: true
            },
            {
              title: 'Address',
              align: 'center',
              children: [
                {
                  title: 'Street',
                  key: 'street',
                  align: 'center',
                  width: 200
                },
                {
                  title: 'Block',
                  align: 'center',
                  children: [
                    {
                      title: 'Building',
                      key: 'building',
                      align: 'center',
                      width: 200,
                      sortable: true
                    },
                    {
                      title: 'Door No.',
                      key: 'door',
                      align: 'center',
                      width: 200
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Company',
          align: 'center',
          children: [
            {
              title: 'Company Address',
              key: 'caddress',
              align: 'center',
              width: 200
            },
            {
              title: 'Company Name',
              key: 'cname',
              align: 'center',
              width: 200
            }
          ]
        },
        {
          title: 'Gender',
          key: 'gender',
          align: 'center',
          width: 200,
          fixed: 'right'
        }
      ],
      columns12: [
        {
          title: 'Name',
          slot: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: 'Action',
          slot: 'action',
          width: 150,
          align: 'center'
        }
      ],
      columns13: [
        {
          title: 'Date',
          key: 'date',
          resizable: true,
          width: 60
        },
        {
          title: 'Name',
          key: 'name',
          resizable: true,
          width: 60
        },
        {
          title: 'Age',
          key: 'age',
          resizable: true,
          width: 60
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      columns14: [
        {
          title: 'Date',
          key: 'date'
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
      columns15: [
        {
          title: 'ID',
          key: 'id'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Amount1',
          key: 'amount1'
        },
        {
          title: 'Amount2',
          key: 'amount2'
        },
        {
          title: 'Amount3',
          key: 'amount3'
        }
      ],
      columns16: [
        {
          title: 'Name',
          key: 'name',
          tree: true
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
      demo11: '<z-table border :columns="columns6" :data="data5"></z-table>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '            columns6: [\r' +
              '                {\r' +
              '                    title: \'Date\',\r' +
              '                    key: \'date\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Name\',\r' +
              '                    key: \'name\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Age\',\r' +
              '                    key: \'age\',\r' +
              '                    filters: [\r' +
              '                        {\r' +
              '                            label: \'Greater than 25\',\r' +
              '                            value: 1\r' +
              '                        },\r' +
              '                        {\r' +
              '                            label: \'Less than 25\',\r' +
              '                            value: 2\r' +
              '                        }\r' +
              '                    ],\r' +
              '                    filterMultiple: false,\r' +
              '                    filterMethod (value, row) {\r' +
              '                        if (value === 1) {\r' +
              '                            return row.age > 25;\r' +
              '                        } else if (value === 2) {\r' +
              '                            return row.age < 25;\r' +
              '                        }\r' +
              '                    }\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Address\',\r' +
              '                    key: \'address\',\r' +
              '                    filters: [\r' +
              '                        {\r' +
              '                            label: \'New York\',\r' +
              '                            value: \'New York\'\r' +
              '                        },\r' +
              '                        {\r' +
              '                            label: \'London\',\r' +
              '                            value: \'London\'\r' +
              '                        },\r' +
              '                       {\r' +
              '                            label: \'Sydney\',\r' +
              '                            value: \'Sydney\'\r' +
              '                        }\r' +
              '                    ],\r' +
              '                    filterMethod (value, row) {\r' +
              '                        return row.address.indexOf(value) > -1;\r' +
              '                    }\r' +
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
              '}\r',
      demo12: '<z-table border :columns="columns12" :data="data6">\r' +
              '    <template slot-scope="{ row }" slot="name">\r' +
              '        <strong>{{ row.name }}</strong>\r' +
              '    </template>\r' +
              '    <template slot-scope="{ row, index }" slot="action">\r' +
              '        <z-button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</z-button>\r' +
              '        <z-button type="error" size="small" @click="remove(index)">Delete</z-button>\r' +
              '    </template>\r' +
              '</z-table>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '            columns12: [\r' +
              '                {\r' +
              '                    title: \'Name\',\r' +
              '                    slot: \'name\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Age\',\r' +
              '                    key: \'age\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Address\',\r' +
              '                    key: \'address\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Action\',\r' +
              '                    slot: \'action\',\r' +
              '                    width: 150,\r' +
              '                    align: \'center\'\r' +
              '                }\r' +
              '            ],\r' +
              '            data6: [\r' +
              '                {\r' +
              '                    name: \'John Brown\',\r' +
              '                    age: 18,\r' +
              '                    address: \'New York No. 1 Lake Park\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jim Green\',\r' +
              '                    age: 24,\r' +
              '                    address: \'London No. 1 Lake Park\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Joe Black\',\r' +
              '                    age: 30,\r' +
              '                    address: \'Sydney No. 1 Lake Park\'\r' +
              '                },\r' +
              '               {\r' +
              '                    name: \'Jon Snow\',\r' +
              '                    age: 26,\r' +
              '                    address: \'Ottawa No. 2 Lake Park\'\r' +
              '                }\r' +
              '            ]\r' +
              '       }\r' +
              '   }\r' +
              '}\r',
      demo13: ' <z-table border :columns="columns7" :data="data6"></z-table>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '            columns7: [\r' +
              '                {\r' +
              '                    title: \'Name\',\r' +
              '                    key: \'name\',\r' +
              '                    render: (h, params) => {\r' +
              '                        return h(\'div\', [\r' +
              '                            h(\'Icon\', {\r' +
              '                                props: {\r' +
              '                                    type: \'person\'\r' +
              '                                }\r' +
              '                            }),\r' +
              '                            h(\'strong\', params.row.name)\r' +
              '                        ]);\r' +
              '                    }\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Age\',\r' +
              '                    key: \'age\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Address\',\r' +
              '                    key: \'address\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Action\',\r' +
              '                    key: \'action\',\r' +
              '                    width: 150,\r' +
              '                    align: \'center\',\r' +
              '                    render: (h, params) => {\r' +
              '                        return h(\'div\', [\r' +
              '                            h(\'Button\', {\r' +
              '                                props: {\r' +
              '                                    type: \'primary\',\r' +
              '                                    size: \'small\'\r' +
              '                               },\r' +
              '                               style: {\r' +
              '                                    marginRight: \'5px\'\r' +
              '                               },\r' +
              '                               on: {\r' +
              '                                    click: () => {\r' +
              '                                        this.show(params.index)\r' +
              '                                    }\r' +
              '                               }\r' +
              '                           }, \'View\'),\r' +
              '                           h(\'Button\', {\r' +
              '                                props: {\r' +
              '                                    type: \'error\',\r' +
              '                                   size: \'small\'\r' +
              '                               },\r' +
              '                               on: {\r' +
              '                                    click: () => {\r' +
              '                                        this.remove(params.index)\r' +
              '                                    }\r' +
              '                                }\r' +
              '                            }, \'Delete\')\r' +
              '                        ]);\r' +
              '                    }\r' +
              '                }\r' +
              '            ],\r' +
              '            data6: [\r' +
              '                {\r' +
              '                    name: \'John Brown\',\r' +
              '                    age: 18,\r' +
              '                    address: \'New York No. 1 Lake Park\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jim Green\',\r' +
              '                    age: 24,\r' +
              '                    address: \'London No. 1 Lake Park\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Joe Black\',\r' +
              '                    age: 30,\r' +
              '                    address: \'Sydney No. 1 Lake Park\'\r' +
              '                },\r' +
              '               {\r' +
              '                    name: \'Jon Snow\',\r' +
              '                    age: 26,\r' +
              '                    address: \'Ottawa No. 2 Lake Park\'\r' +
              '                }\r' +
              '            ]\r' +
              '        }\r' +
              '    },\r' +
              '    methods: {\r' +
              '        show (index) {\r' +
              '            this.$Modal.info({\r' +
              '                title: \'User Info\',\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '                content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`\r' +
              '            })\r' +
              '        },\r' +
              '        remove (index) {\r' +
              '            this.data6.splice(index, 1);\r' +
              '        }\r' +
              '   }\r' +
              '}\r',
      demo14: '<z-table :columns="columns11" :data="data10" border height="500"></z-table>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '            columns11: [\r' +
              '                {\r' +
              '                    title: \'Name\',\r' +
              '                    key: \'name\',\r' +
              '                    align: \'center\',\r' +
              '                    width: 200,\r' +
              '                    fixed: \'left\',\r' +
              '                    filters: [\r' +
              '                        {\r' +
              '                            label: \'Joe\',\r' +
              '                            value: 1\r' +
              '                        },\r' +
              '                        {\r' +
              '                            label: \'John\',\r' +
              '                            value: 2\r' +
              '                        }\r' +
              '                    ],\r' +
              '                    filterMultiple: false,\r' +
              '                    filterMethod (value, row) {\r' +
              '                        if (value === 1) {\r' +
              '                            return row.name === \'Joe\';\r' +
              '                        } else if (value === 2) {\r' +
              '                            return row.name === \'John Brown\';\r' +
              '                        }\r' +
              '                    }\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Other\',\r' +
              '                    align: \'center\',\r' +
              '                    children: [\r' +
              '                        {\r' +
              '                            title: \'Age\',\r' +
              '                            key: \'age\',\r' +
              '                            align: \'center\',\r' +
              '                            width: 200,\r' +
              '                            sortable: true\r' +
              '                        },\r' +
              '                        {\r' +
              '                            title: \'Address\',\r' +
              '                            align: \'center\',\r' +
              '                            children: [\r' +
              '                                {\r' +
              '                                    title: \'Street\',\r' +
              '                                    key: \'street\',\r' +
              '                                    align: \'center\',\r' +
              '                                    width: 200\r' +
              '                                },\r' +
              '                                {\r' +
              '                                    title: \'Block\',\r' +
              '                                    align: \'center\',\r' +
              '                                    children: [\r' +
              '                                        {\r' +
              '                                            title: \'Building\',\r' +
              '                                            key: \'building\',\r' +
              '                                            align: \'center\',\r' +
              '                                            width: 200,\r' +
              '                                            sortable: true\r' +
              '                                        },\r' +
              '                                        {\r' +
              '                                            title: \'Door No.\',\r' +
              '                                            key: \'door\',\r' +
              '                                            align: \'center\',\r' +
              '                                            width: 200\r' +
              '                                        }\r' +
              '                                    ]\r' +
              '                                }\r' +
              '                            ]\r' +
              '                        }\r' +
              '                    ]\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Company\',\r' +
              '                    align: \'center\',\r' +
              '                    children: [\r' +
              '                        {\r' +
              '                            title: \'Company Address\',\r' +
              '                            key: \'caddress\',\r' +
              '                            align: \'center\',\r' +
              '                            width: 200\r' +
              '                        },\r' +
              '                        {\r' +
              '                            title: \'Company Name\',\r' +
              '                            key: \'cname\',\r' +
              '                            align: \'center\',\r' +
              '                            width: 200\r' +
              '                        }\r' +
              '                    ]\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Gender\',\r' +
              '                    key: \'gender\',\r' +
              '                    align: \'center\',\r' +
              '                    width: 200,\r' +
              '                    fixed: \'right\'\r' +
              '                }\r' +
              '            ],\r' +
              '            data10: []\r' +
              '        }\r' +
              '    },\r' +
              '        mounted () {\r' +
              '            const data = [];\r' +
              '            for (let i = 0; i < 20; i++) {\r' +
              '                data.push({\r' +
              '                    key: i,\r' +
              '                    name: \'John Brown\',\r' +
              '                    age: i + 1,\r' +
              '                    street: \'Lake Park\',\r' +
              '                    building: \'C\',\r' +
              '                    door: 2035,\r' +
              '                    caddress: \'Lake Street 42\',\r' +
              '                    cname: \'SoftLake Co\',\r' +
              '                    gender: \'M\',\r' +
              '                });\r' +
              '            }\r' +
              '            this.data10 = data;\r' +
              '        }\r' +
              '}\r',
      demo15: '<z-table :loading="loading" :columns="columns1" :data="data1"></z-table>\r' +
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
      demo16: '<z-table size="large" :columns="columns1" :data="data1"></z-table>\r' +
              ' <z-table size="small" :columns="columns1" :data="data1"></z-table>\r' +
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
      demo17: ' <z-table :columns="columns8" :data="data7" size="small" ref="table"></z-table>\r' +
              '<br>\r' +
              '<z-button type="primary" size="large" @click="exportData(1)">\r' +
              '    <z-icon type="ios-download-outline"></z-icon> Export source data\r' +
              '</z-button>\r' +
              '<z-button type="primary" size="large" @click="exportData(2)">\r' +
              '    <z-icon type="ios-download-outline"></z-icon> Export sorting and filtered data\r' +
              '</z-button>\r' +
              '<z-button type="primary" size="large" @click="exportData(3)">\r' +
              '    <z-icon type="ios-download-outline"></z-icon> Export custom data\r' +
              '</z-button>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '            columns8: [\r' +
              '                {\r' +
              '                    "title": "Name",\r' +
              '                    "key": "name",\r' +
              '                    "fixed": "left",\r' +
              '                    "width": 200\r' +
              '                },\r' +
              '               {\r' +
              '                    "title": "Show",\r' +
              '                    "key": "show",\r' +
              '                    "width": 150,\r' +
              '                    "sortable": true,\r' +
              '                    filters: [\r' +
              '                        {\r' +
              '                            label: \'Greater than 4000\',\r' +
              '                            value: 1\r' +
              '                        },\r' +
              '                        {\r' +
              '                            label: \'Less than 4000\',\r' +
              '                            value: 2\r' +
              '                        }\r' +
              '                    ],\r' +
              '                    filterMultiple: false,\r' +
              '                    filterMethod (value, row) {\r' +
              '                        if (value === 1) {\r' +
              '                            return row.show > 4000;\r' +
              '                        } else if (value === 2) {\r' +
              '                            return row.show < 4000;\r' +
              '                        }\r' +
              '                    }\r' +
              '                },\r' +
              '                {\r' +
              '                    "title": "Weak",\r' +
              '                    "key": "weak",\r' +
              '                    "width": 150,\r' +
              '                    "sortable": true\r' +
              '                },\r' +
              '                {\r' +
              '                    "title": "Signin",\r' +
              '                    "key": "signin",\r' +
              '                    "width": 150,\r' +
              '                    "sortable": true\r' +
              '               },\r' +
              '               {\r' +
              '                    "title": "Click",\r' +
              '                    "key": "click",\r' +
              '                    "width": 150,\r' +
              '                    "sortable": true\r' +
              '                },\r' +
              '                {\r' +
              '                    "title": "Active",\r' +
              '                    "key": "active",\r' +
              '                   "width": 150,\r' +
              '                    "sortable": true\r' +
              '                },\r' +
              '                {\r' +
              '                    "title": "7, retained",\r' +
              '                    "key": "day7",\r' +
              '                    "width": 150,\r' +
              '                    "sortable": true\r' +
              '                },\r' +
              '                {\r' +
              '                    "title": "30, retained",\r' +
              '                    "key": "day30",\r' +
              '                    "width": 150,\r' +
              '                    "sortable": true\r' +
              '                },\r' +
              '                {\r' +
              '                    "title": "The next day left",\r' +
              '                    "key": "tomorrow",\r' +
              '                    "width": 150,\r' +
              '                   "sortable": true\r' +
              '               },\r' +
              '                {\r' +
              '                    "title": "Day Active",\r' +
              '                    "key": "day",\r' +
              '                    "width": 150,\r' +
              '                    "sortable": true\r' +
              '                },\r' +
              '                {\r' +
              '                    "title": "Week Active",\r' +
              '                    "key": "week",\r' +
              '                    "width": 150,\r' +
              '                    "sortable": true\r' +
              '                },\r' +
              '                {\r' +
              '                    "title": "Month Active",\r' +
              '                    "key": "month",\r' +
              '                    "width": 150,\r' +
              '                    "sortable": true\r' +
              '                }\r' +
              '            ],\r' +
              '            data7: [\r' +
              '                {\r' +
              '                    "name": "Name1",\r' +
              '                    "fav": 0,\r' +
              '                    "show": 7302,\r' +
              '                    "weak": 5627,\r' +
              '                    "signin": 1563,\r' +
              '                    "click": 4254,\r' +
              '                    "active": 1438,\r' +
              '                    "day7": 274,\r' +
              '                    "day30": 285,\r' +
              '                    "tomorrow": 1727,\r' +
              '                    "day": 558,\r' +
              '                    "week": 4440,\r' +
              '                    "month": 5610\r' +
              '                },\r' +
              '                {\r' +
              '                    "name": "Name2",\r' +
              '                    "fav": 0,\r' +
              '                    "show": 4720,\r' +
              '                    "weak": 4086,\r' +
              '                    "signin": 3792,\r' +
              '                    "click": 8690,\r' +
              '                    "active": 8470,\r' +
              '                    "day7": 8172,\r' +
              '                   "day30": 5197,\r' +
              '                    "tomorrow": 1684,\r' +
              '                    "day": 2593,\r' +
              '                   "week": 2507,\r' +
              '                   "month": 1537\r' +
              '                },\r' +
              '                {\r' +
              '                    "name": "Name3",\r' +
              '                    "fav": 0,\r' +
              '                    "show": 7181,\r' +
              '                    "weak": 8007,\r' +
              '                    "signin": 8477,\r' +
              '                    "click": 1879,\r' +
              '                    "active": 16,\r' +
              '                    "day7": 2249,\r' +
              '                    "day30": 3450,\r' +
              '                    "tomorrow": 377,\r' +
              '                    "day": 1561,\r' +
              '                    "week": 3219,\r' +
              '                    "month": 1588\r' +
              '                },\r' +
              '                {\r' +
              '                    "name": "Name4",\r' +
              '                    "fav": 0,\r' +
              '                    "show": 9911,\r' +
              '                    "weak": 8976,\r' +
              '                    "signin": 8807,\r' +
              '                    "click": 8050,\r' +
              '                    "active": 7668,\r' +
              '                    "day7": 1547,\r' +
              '                    "day30": 2357,\r' +
              '                    "tomorrow": 7278,\r' +
              '                   "day": 5309,\r' +
              '                   "week": 1655,\r' +
              '                    "month": 9043\r' +
              '                },\r' +
              '                {\r' +
              '                    "name": "Name5",\r' +
              '                    "fav": 0,\r' +
              '                    "show": 934,\r' +
              '                    "weak": 1394,\r' +
              '                    "signin": 6463,\r' +
              '                    "click": 5278,\r' +
              '                    "active": 9256,\r' +
              '                   "day7": 209,\r' +
              '                    "day30": 3563,\r' +
              '                    "tomorrow": 8285,\r' +
              '                    "day": 1230,\r' +
              '                   "week": 4840,\r' +
              '                    "month": 9908\r' +
              '                },\r' +
              '               {\r' +
              '                    "name": "Name6",\r' +
              '                    "fav": 0,\r' +
              '                    "show": 6856,\r' +
              '                    "weak": 1608,\r' +
              '                    "signin": 457,\r' +
              '                    "click": 4949,\r' +
              '                    "active": 2909,\r' +
              '                    "day7": 4525,\r' +
              '                    "day30": 6171,\r' +
              '                    "tomorrow": 1920,\r' +
              '                    "day": 1966,\r' +
              '                    "week": 904,\r' +
              '                    "month": 6851\r' +
              '                },\r' +
              '               {\r' +
              '                    "name": "Name7",\r' +
              '                    "fav": 0,\r' +
              '                    "show": 5107,\r' +
              '                    "weak": 6407,\r' +
              '                    "signin": 4166,\r' +
              '                    "click": 7970,\r' +
              '                    "active": 1002,\r' +
              '                    "day7": 8701,\r' +
              '                    "day30": 9040,\r' +
              '                    "tomorrow": 7632,\r' +
              '                   "day": 4061,\r' +
              '                    "week": 4359,\r' +
              '                    "month": 3676\r' +
              '                },\r' +
              '                {\r' +
              '                    "name": "Name8",\r' +
              '                    "fav": 0,\r' +
              '                    "show": 862,\r' +
              '                   "weak": 6520,\r' +
              '                    "signin": 6696,\r' +
              '                   "click": 3209,\r' +
              '                    "active": 6801,\r' +
              '                    "day7": 6364,\r' +
              '                    "day30": 6850,\r' +
              '                    "tomorrow": 9408,\r' +
              '                   "day": 2481,\r' +
              '                    "week": 1479,\r' +
              '                    "month": 2346\r' +
              '                },\r' +
              '                {\r' +
              '                    "name": "Name9",\r' +
              '                    "fav": 0,\r' +
              '                   "show": 567,\r' +
              '                    "weak": 5859,\r' +
              '                    "signin": 128,\r' +
              '                    "click": 6593,\r' +
              '                    "active": 1971,\r' +
              '                    "day7": 7596,\r' +
              '                    "day30": 3546,\r' +
              '                    "tomorrow": 6641,\r' +
              '                    "day": 1611,\r' +
              '                    "week": 5534,\r' +
              '                    "month": 3190\r' +
              '                },\r' +
              '                {\r' +
              '                    "name": "Name10",\r' +
              '                    "fav": 0,\r' +
              '                    "show": 3651,\r' +
              '                    "weak": 1819,\r' +
              '                    "signin": 4595,\r' +
              '                    "click": 7499,\r' +
              '                    "active": 7405,\r' +
              '                    "day7": 8710,\r' +
              '                   "day30": 5518,\r' +
              '                    "tomorrow": 428,\r' +
              '                    "day": 9768,\r' +
              '                    "week": 2864,\r' +
              '                    "month": 5811\r' +
              '                }\r' +
              '            ]\r' +
              '        }\r' +
              '    },\r' +
              '    methods: {\r' +
              '        exportData (type) {\r' +
              '            if (type === 1) {\r' +
              '                this.$refs.table.exportCsv({\r' +
              '                    filename: \'The original data\'\r' +
              '                });\r' +
              '            } else if (type === 2) {\r' +
              '                this.$refs.table.exportCsv({\r' +
              '                    filename: \'Sorting and filtering data\',\r' +
              '                    original: false\r' +
              '                });\r' +
              '            } else if (type === 3) {\r' +
              '                this.$refs.table.exportCsv({\r' +
              '                    filename: \'Custom data\',\r' +
              '                    columns: this.columns8.filter((col, index) => index < 4),\r' +
              '                    data: this.data7.filter((data, index) => index < 4)\r' +
              '                });\r' +
              '            }\r' +
              '        }  \r' +
              '   }\r' +
              '}\r',
      demo18: '<z-table :columns="columns13" :data="data5" border></z-table>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '                columns13: [\r' +
              '                    {\r' +
              '                        title: \'Date\',\r' +
              '                        key: \'date\',\r' +
              '                        resizable: true,\r' +
              '                        width: 180\r' +
              '                    },\r' +
              '                    {\r' +
              '                        title: \'Name\',\r' +
              '                        key: \'name\',\r' +
              '                        resizable: true,\r' +
              '                        width: 180\r' +
              '                    },\r' +
              '                    {\r' +
              '                        title: \'Age\',\r' +
              '                        key: \'age\',\r' +
              '                        resizable: true,\r' +
              '                        width: 180\r' +
              '                    },\r' +
              '                    {\r' +
              '                        title: \'Address\',\r' +
              '                        key: \'address\'\r' +
              '                    }\r' +
              '                ],\r' +
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
              '        }  \r' +
              '   }\r' +
              '}\r',
      demo19: '<z-table :columns="columns14" :data="data5" border :span-method="handleSpan"></z-table>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '             columns14: [\r' +
              '                 {\r' +
              '                     title: \'Date\',\r' +
              '                     key: \'date\'\r' +
              '                 },\r' +
              '                 {\r' +
              '                     title: \'Name\',\r' +
              '                     key: \'name\'\r' +
              '                },\r' +
              '                 {\r' +
              '                     title: \'Age\',\r' +
              '                     key: \'age\'\r' +
              '                 },\r' +
              '                {\r' +
              '                     title: \'Address\',\r' +
              '                     key: \'address\'\r' +
              '                 }\r' +
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
              '         }\r' +
              '   }\r' +
              '}\r',
      demo20: '<z-table :columns="columns15" :data="data11" border show-summary></z-table>\r' +
              '<br>\r' +
              '<z-table :columns="columns15" :data="data11" border show-summary :summary-method="handleSummary" height="200"></z-table>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '            columns15: [\r' +
              '                {\r' +
              '                    title: \'ID\',\r' +
              '                    key: \'id\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Name\',\r' +
              '                    key: \'name\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Amount1\',\r' +
              '                    key: \'amount1\'\r' +
              '                },\r' +
              '                {\r' +
              '                    title: \'Amount2\',\r' +
              '                    key: \'amount2\'\r' +
              '               },\r' +
              '                {\r' +
              '                    title: \'Amount3\',\r' +
              '                    key: \'amount3\'\r' +
              '                }\r' +
              '            ],\r' +
              '            data11: [\r' +
              '                {\r' +
              '                    id: \'100001\',\r' +
              '                    name: \'John Brown\',\r' +
              '                    amount1: \'123\',\r' +
              '                    amount2: \'1.2\',\r' +
              '                    amount3: 10\r' +
              '                }, {\r' +
              '                    id: \'100002\',\r' +
              '                    name: \'Jim Green\',\r' +
              '                    amount1: \'234\',\r' +
              '                    amount2: \'2.3\',\r' +
              '                    amount3: 11\r' +
              '                }, {\r' +
              '                    id: \'100003\',\r' +
              '                    name: \'Joe Black\',\r' +
              '                    amount1: \'345\',\r' +
              '                    amount2: \'3.4\',\r' +
              '                    amount3: 12\r' +
              '                }, {\r' +
              '                    id: \'100004\',\r' +
              '                    name: \'Jon Snow\',\r' +
              '                    amount1: \'456\',\r' +
              '                    amount2: \'4.5\',\r' +
              '                    amount3: 13\r' +
              '                }, {\r' +
              '                    id: \'100005\',\r' +
              '                    name: \'Jobs\',\r' +
              '                    amount1: \'678\',\r' +
              '                    amount2: \'5.6\',\r' +
              '                    amount3: 14\r' +
              '                }\r' +
              '            ]\r' +
              '         }\r' +
              '   }\r' +
              '}),\r' +
              'methods: {\r' +
              '    handleSummary: function ({ columns, data }) {\r' +
              '        const sums = {};\r' +
              '        columns.forEach((column, index) => {\r' +
              '            const key = column.key;\r' +
              '            if (index === 0) {\r' +
              '                sums[key] = {\r' +
              '                    key,\r' +
              '                    value: \'总价\'\r' +
              '                };\r' +
              '                return;\r' +
              '            }\r' +
              '            const values = data.map(item => Number(item[key]));\r' +
              '            if (!values.every(value => isNaN(value))) {\r' +
              '                const v = values.reduce((prev, curr) => {\r' +
              '                    const value = Number(curr);\r' +
              '                    if (!isNaN(value)) {\r' +
              '                        return prev + curr;\r' +
              '                    } else {\r' +
              '                        return prev;\r' +
              '                    }\r' +
              '                }, 0);\r' +
              '                sums[key] = {\r' +
              '                    key,\r' +
              '                    value: v + \' 元\'\r' +
              '                };\r' +
              '            } else {\r' +
              '                sums[key] = {\r' +
              '                    key,\r' +
              '                    value: \'N/A\'\r' +
              '                };\r' +
              '            }\r' +
              '        });\r' +
              '        return sums;\r' +
              '    }\r' +
              '}\r',
      demo21: '<z-table :columns="columns10" :data="data9"></z-table>\r' +
              'export default {\r' +
              '    data () {\r' +
              '        return {\r' +
              '            columns10: [\r' +
              '                {\r' +
              '                    type: \'expand\',\r' +
              '                   width: 50,\r' +
              '                    render: (h, params) => {\r' +
              '                        return h(\'div\', [\r' +
              '                            h(\'z-button\', {\r' +
              '                                props: {\r' +
              '                                    type: \'primary\',\r' +
              '                                    size: \'small\'\r' +
              '                                }\r' +
              '                            }, \'View\')\r' +
              '                        ]);\r' +
              '                    }\r' +
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
              '               }\r' +
              '            ],\r' +
              '           data9: [\r' +
              '                {\r' +
              '                    name: \'John Brown\',\r' +
              '                    age: 18,\r' +
              '                    address: \'New York No. 1 Lake Park\',\r' +
              '                    job: \'Data engineer\',\r' +
              '                   interest: \'badminton\',\r' +
              '                    birthday: \'1991-05-14\',\r' +
              '                    book: \'Steve Jobs\',\r' +
              '                    movie: \'The Prestige\',\r' +
              '                    music: \'I Cry\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jim Green\',\r' +
              '                    age: 25,\r' +
              '                    address: \'London No. 1 Lake Park\',\r' +
              '                    job: \'Data Scientist\',\r' +
              '                    interest: \'volleyball\',\r' +
              '                    birthday: \'1989-03-18\',\r' +
              '                    book: \'My Struggle\',\r' +
              '                    movie: \'Roman Holiday\',\r' +
              '                    music: \'My Heart Will Go On\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Joe Black\',\r' +
              '                    age: 30,\r' +
              '                    address: \'Sydney No. 1 Lake Park\',\r' +
              '                   job: \'Data Product Manager\',\r' +
              '                    interest: \'tennis\',\r' +
              '                    birthday: \'1992-01-31\',\r' +
              '                    book: \'Win\',\r' +
              '                    movie: \'Jobs\',\r' +
              '                    music: \'Don’t Cry\'\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Jon Snow\',\r' +
              '                    age: 26,\r' +
              '                    address: \'Ottawa No. 2 Lake Park\',\r' +
              '                    job: \'Data Analyst\',\r' +
              '                    interest: \'snooker\',\r' +
              '                    birthday: \'1988-7-25\',\r' +
              '                    book: \'A Dream in Red Mansions\',\r' +
              '                    movie: \'A Chinese Ghost Story\',\r' +
              '                    music: \'actor\'\r' +
              '                }\r' +
              '            ]\r' +
              '        }\r' +
              '    }\r' +
              '}\r',
      demo22: '    <z-table row-key="id" :columns="columns16" :data="data12" border></z-table>\r' +
              '    export default {\r' +
              '        data () {\r' +
              '            return {\r' +
              '                columns16: [\r' +
              '                    {\r' +
              '                        title: \'Name\',\r' +
              '                        key: \'name\',\r' +
              '                        tree: true\r' +
              '                    },\r' +
              '                    {\r' +
              '                        title: \'Age\',\r' +
              '                        key: \'age\'\r' +
              '                    },\r' +
              '                    {\r' +
              '                        title: \'Address\',\r' +
              '                        key: \'address\'\r' +
              '                    }\r' +
              '                ],\r' +
              '                data12: [\r' +
              '                    {\r' +
              '                        id: \'100\',\r' +
              '                        name: \'John Brown\',\r' +
              '                        age: 18,\r' +
              '                        address: \'New York No. 1 Lake Park\'\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: \'101\',\r' +
              '                        name: \'Jim Green\',\r' +
              '                        age: 24,\r' +
              '                        address: \'London No. 1 Lake Park\',\r' +
              '                        children: [\r' +
              '                            {\r' +
              '                                id: \'10100\',\r' +
              '                                name: \'John Brown\',\r' +
              '                                age: 18,\r' +
              '                                address: \'New York No. 1 Lake Park\'\r' +
              '                            },\r' +
              '                            {\r' +
              '                                id: \'10101\',\r' +
              '                                name: \'Joe Blackn\',\r' +
              '                                age: 30,\r' +
              '                                address: \'Sydney No. 1 Lake Park\'\r' +
              '                            },\r' +
              '                            {\r' +
              '                                id: \'10102\',\r' +
              '                                name: \'Jon Snow\',\r' +
              '                                age: 26,\r' +
              '                                address: \'Ottawa No. 2 Lake Park\',\r' +
              '                                children: [\r' +
              '                                    {\r' +
              '                                        id: \'1010200\',\r' +
              '                                        name: \'Jim Green\',\r' +
              '                                        age: 24,\r' +
              '                                        address: \'New York No. 1 Lake Park\'\r' +
              '                                    }\r' +
              '                                ]\r' +
              '                            }\r' +
              '                        ]\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: \'102\',\r' +
              '                        name: \'Joe Black\',\r' +
              '                        age: 30,\r' +
              '                        address: \'Sydney No. 1 Lake Park\'\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: \'103\',\r' +
              '                        name: \'Jon Snow\',\r' +
              '                        age: 26,\r' +
              '                        address: \'Ottawa No. 2 Lake Park\'\r' +
              '                    }\r' +
              '                ]\r' +
              '            }\r' +
              '        }\r' +
              '    }\r',
      demo23: '   <z-table row-key="id" :columns="columns16" :data="data12" border></z-table>\r' +
              '    export default {\r' +
              '        data () {\r' +
              '            return {\r' +
              '                columns16: [\r' +
              '                    {\r' +
              '                        title: \'Name\',\r' +
              '                        key: \'name\',\r' +
              '                        tree: true\r' +
              '                    },\r' +
              '                    {\r' +
              '                        title: \'Age\',\r' +
              '                        key: \'age\'\r' +
              '                    },\r' +
              '                    {\r' +
              '                        title: \'Address\',\r' +
              '                        key: \'address\'\r' +
              '                    }\r' +
              '                ],\r' +
              '                  data13: [\r' +
              '                    {\r' +
              '                        id: \'100\',\r' +
              '                        name: \'John Brown\',\r' +
              '                        age: 18,\r' +
              '                        address: \'New York No. 1 Lake Park\'\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: \'101\',\r' +
              '                        name: \'Jim Green\',\r' +
              '                        age: 24,\r' +
              '                       address: \'London No. 1 Lake Park\',\r' +
              '                        _loading: false,\r' +
              '                        children: []\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: \'102\',\r' +
              '                        name: \'Joe Black\',\r' +
              '                        age: 30,\r' +
              '                        address: \'Sydney No. 1 Lake Park\'\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: \'103\',\r' +
              '                        name: \'Jon Snow\',\r' +
              '                        age: 26,\r' +
              '                        address: \'Ottawa No. 2 Lake Park\'\r' +
              '                    }\r' +
              '                ]\r' +
              '            }\r' +
              '        }\r' +
              '    }\r'
    }
  },
  methods: {
    show: function (index) {
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
      })
    },
    remove: function (index) {
      this.data6.splice(index, 1)
    },
    exportData: function (type) {
      if (type === 1) {
        this.$refs.table.exportCsv({
          filename: 'The original data'
        })
      } else if (type === 2) {
        this.$refs.table.exportCsv({
          filename: 'Sorting and filtering data',
          original: false
        })
      } else if (type === 3) {
        this.$refs.table.exportCsv({
          filename: 'Custom data',
          columns: this.columns8.filter((col, index) => index < 4),
          data: this.data7.filter((data, index) => index < 4)
        })
      }
    },
    handleSpan: function ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0 && columnIndex === 0) {
        return [1, 2]
      } else if (rowIndex === 0 && columnIndex === 1) {
        return [0, 0]
      }
      if (rowIndex === 2 && columnIndex === 0) {
        return {
          rowspan: 2,
          colspan: 1
        }
      } else if (rowIndex === 3 && columnIndex === 0) {
        return {
          rowspan: 0,
          colspan: 0
        }
      }
    },
    handleSummary ({ columns, data }) {
      const sums = {}
      columns.forEach((column, index) => {
        const key = column.key
        if (index === 0) {
          sums[key] = {
            key,
            value: '总价'
          }
          return
        }
        const values = data.map(item => Number(item[key]))
        if (!values.every(value => isNaN(value))) {
          const v = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[key] = {
            key,
            value: v + ' 元'
          }
        } else {
          sums[key] = {
            key,
            value: 'N/A'
          }
        }
      })
      return sums
    },
    handleLoadData (item, callback) {
      setTimeout(() => {
        const data = [
          {
            id: '10100',
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park'
          },
          {
            id: '10101',
            name: 'Joe Blackn',
            age: 30,
            address: 'Sydney No. 1 Lake Park'
          }
        ]
        callback(data)
      }, 2000)
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

.expand-row {
    margin-bottom: 16px;
}
</style>
