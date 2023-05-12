<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-06-02 18:59:57
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
    <z-row :gutter="15">
      <z-col span="6" :xs="24" :sm="12" :lg="6">
         <z-card class="note-board m-b-15" dis-hover>
            <div slot="title">访问量 </div>
            <z-tag color="green" slot="extra">日</z-tag>
            <div class="note-board_numeral">25,848</div>
            <div class="m-t-15"><span>日同比 12.5%</span><span class="float-right">周同比 5% </span></div>
            <divider />
            <div><span>总访问量</span><span class="float-right">280 万</span></div>
        </z-card>
      </z-col>
       <z-col span="6" :xs="24" :sm="12" :lg="6">
         <z-card class="note-board m-b-15" dis-hover>
            <div slot="title">销售额 </div>
            <z-tag color="blue" slot="extra">月</z-tag>
            <div class="note-board_numeral">¥12,000</div>
            <z-progress class="m-t-20" :percent="60" hide-info />
            <divider />
            <div><span>总销售额</span><span class="float-right">280 万</span></div>
        </z-card>
      </z-col>
       <z-col span="6" :xs="24" :sm="12" :lg="6">
         <z-card class="note-board m-b-15" dis-hover>
            <div slot="title">订单量 </div>
            <z-tag color="red" slot="extra">周</z-tag>
            <div class="note-board_numeral">1,680</div>
            <div class="m-t-15"><span>日同比 12.5%</span><span class="float-right">周同比 5% </span></div>
            <divider />
            <div><span>总订单量</span><span class="float-right">280 万</span></div>
        </z-card>
      </z-col>
       <z-col span="6" :xs="24" :sm="12" :lg="6">
         <z-card class="note-board m-b-15" dis-hover>
            <div slot="title">新增用户 </div>
            <z-tag color="yellow" slot="extra">年</z-tag>
            <div class="note-board_numeral">128 位</div>
             <z-progress class="m-t-20" :percent="90" hide-info />
            <divider />
            <div><span>总用户</span><span class="float-right">280 万</span></div>
        </z-card>
      </z-col>
  </z-row>
  <z-row :gutter="15">
     <z-col span="3" v-for="(item,index) in entryData" :key="index">
      <z-card class="text-center">
          <z-icon :type="item.icon" :size="32" :color="item.color"></z-icon>
          <p class="m-t-10">{{item.text}}</p>
      </z-card>
    </z-col>
  </z-row>
   <z-card class="m-t-15" dis-hover>
      <div slot="title">访问量</div>
      <z-row :gutter="30">
        <z-col span="17"> <div id="bar" style="width: 100%;height: 300px;"></div></z-col>
        <z-col span="7">
          <h4><strong>访问量排行</strong></h4>
          <ul class="ranking-list m-t-20">
            <li><span class="ranking-list_avatar blue">1</span><span class="m-l-10">vue论坛1号</span><span class="num">456,789</span></li>
            <li><span class="ranking-list_avatar blue">2</span><span class="m-l-10">vue论坛2号</span><span class="num">456,789</span></li>
            <li><span class="ranking-list_avatar blue">3</span><span class="m-l-10">vue论坛3号</span><span class="num">456,789</span></li>
            <li><span class="ranking-list_avatar">4</span><span class="m-l-10">vue论坛4号</span><span class="num">456,789</span></li>
            <li><span class="ranking-list_avatar">5</span><span class="m-l-10">vue论坛5号</span><span class="num">456,789</span></li>
            <li><span class="ranking-list_avatar">6</span><span class="m-l-10">vue论坛6号</span><span class="num">456,789</span></li>
            <li><span class="ranking-list_avatar">7</span><span class="m-l-10">vue论坛7号</span><span class="num">456,789</span></li>
          </ul>
        </z-col>
      </z-row>
    </z-card>
    <z-row :gutter="15" class="m-t-15">
      <z-col span="12">
        <z-card dis-hover>
          <div slot="title">热门搜索</div>

          <z-row :gutter="20" class="hot-search">
            <z-col span="12">
              <p>搜索用户数 </p>
              <div class="m-t-10"><span class="hot-search_num">23,378</span><span class="m-l-30">16.8%</span></div>
              <div id="line1" class="m-t-10" style="width: 100%;height: 60px;"></div>
            </z-col>
             <z-col span="12">
              <p>人均搜索次数  </p>
              <div class="m-t-10"><span class="hot-search_num">23,378</span><span class="m-l-30">16.8%</span></div>
                 <div id="line2" class="m-t-10" style="width: 100%;height: 60px;"></div>
             </z-col>
          </z-row>
          <z-table class="m-t-20" :columns="columns" :data="allDatas.tableData" size="small"></z-table>
        </z-card>
      </z-col>
      <z-col span="12">
        <z-card dis-hover>
          <div slot="title">满意度</div>
          <z-row class="m-t-10">
            <z-col span="8" class="text-center">
              <z-circle :percent="40" dashboard>
                <span class="demo-circle-inner" style="font-size:24px">40%</span>
              </z-circle>
              <p>本年度目标达成</p>
            </z-col>
            <z-col span="8" class="text-center">
              <z-circle :percent="60" dashboard>
                <span class="demo-circle-inner" style="font-size:24px">60%</span>
              </z-circle>
               <p>本月度目标达成</p>
            </z-col>
            <z-col span="8" class="text-center">
              <z-circle :percent="80" dashboard>
                <span class="demo-circle-inner" style="font-size:24px">80%</span>
              </z-circle>
               <p>本周目标达成</p>
            </z-col>
          </z-row>
          <div class="m-t-40 m-b-20">
            <h4 class="progress-title">当前评论波动</h4>
            <z-progress class="m-t-20 progress1" :percent="75" :stroke-width="6"/>
            <z-progress class="m-t-15 progress2" :percent="55" :stroke-width="6" />
            <z-progress class="m-t-15 progress3" :percent="35" :stroke-width="6" />
            <z-progress class="m-t-15 progress4" :percent="15" :stroke-width="6" />
            <z-progress class="m-t-15 progress5" :percent="0" :stroke-width="6" />
          </div>
        </z-card>
      </z-col>
    </z-row>
 </div>
</template>
<script>
import Echarts from 'echarts'

export default {
  name: 'controlBoard',
  data: function () {
    return {
      entryData: [
        {
          icon: 'android-people',
          color: '#69c0ff',
          text: '用户'
        },
        {
          icon: 'podium',
          color: '#95de64',
          text: '用户'
        },
        {
          icon: 'ios-cart',
          color: '#ff9c6e',
          text: '商品'
        },
        {
          icon: 'clipboard',
          color: '#b37feb',
          text: '订单'
        },
        {
          icon: 'card',
          color: '#ffd666',
          text: '票据'
        },
        {
          icon: 'email',
          color: '#5cdbd3',
          text: '消息'
        },
        {
          icon: 'pricetags',
          color: '#ff85c0',
          text: '标签'
        },
        {
          icon: 'ios-settings-strong',
          color: '#ffc069',
          text: '配置'
        }
      ],
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '搜索关键字',
          key: 'searchKeyword'
        },
        {
          title: '用户数',
          key: 'userNum'
        },
        {
          title: '周涨幅',
          key: 'weeklyGain'
        }
      ],
      // 表数据
      allDatas: {
        num: 10, // 行数
        tableData: [
          {
            searchKeyword: '搜索关键词0',
            userNum: 128,
            weeklyGain: '-30%'
          },
          {
            searchKeyword: '搜索关键词1',
            userNum: 234,
            weeklyGain: '20%'
          },
          {
            searchKeyword: '搜索关键词1',
            userNum: 253,
            weeklyGain: '45%'
          },
          {
            searchKeyword: '搜索关键词1',
            userNum: 253,
            weeklyGain: '45%'
          },
          {
            searchKeyword: '搜索关键词1',
            userNum: 253,
            weeklyGain: '45%'
          }
        ]
      }
    }
  },
  methods: {
  },
  mounted: function () {
    var myChart = Echarts.init(document.getElementById('bar'))
    myChart.setOption({
      title: {
        text: '访问量趋势',
        textStyle: {
          fontSize: 14
        }
      },
      tooltip: {},
      xAxis: {
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        itemStyle: {
          color: '#1697ec'
        },
        barWidth: 25,
        data: [500, 2000, 3600, 1000, 1000, 2000, 500, 2000, 3600, 1000, 400, 200]
      }]
    })
    var lineOne = Echarts.init(document.getElementById('line1'))
    lineOne.setOption({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        show: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value',
        show: false
      },
      grid: {
        top: '5%',
        bottom: '0%',
        left: '0%'
      },
      series: [{
        data: [200, 240, 300, 220, 300, 280, 210],
        type: 'line',
        symbol: 'none',
        smooth: true,
        itemStyle: {
          color: '#1697ec'
        },
        areaStyle: {}
      }]
    })
    var lineTwo = Echarts.init(document.getElementById('line2'))
    lineTwo.setOption({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        show: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value',
        show: false
      },
      grid: {
        top: '5%',
        bottom: '0%',
        left: '0%'
      },
      series: [{
        data: [200, 300, 210, 290, 220, 300, 210],
        type: 'line',
        symbol: 'none',
        smooth: true,

        itemStyle: {
          color: '#1697ec'
        },
        areaStyle: {}
      }]
    })
  }
}
</script>
<style scoped>
    @import "../../../../../styles/framework/pages/dashboard/controlBoard.css";
</style>
