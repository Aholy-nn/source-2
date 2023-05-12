<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-06-02 19:00:10
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
  <div class="layout-head">
    <h2 class="m-b-20">工作台</h2>
     <z-row type="flex" justify="space-between">
        <z-col span="16">
           <z-avatar size="large" :src="avatar" />
          <div class="wrokboard-header_tip">
            <h2>早安，zrzdemon，开始您一天的工作吧！</h2>
            <p>冬日大雪，注意保暖。</p>
          </div>
        </z-col>
        <z-col span="8" class="wrokboard-header_extra">
          <div class="row">
            <z-col span="8">
               <z-avatar icon="grid" style="background:#e6f7ff;color:#40a9ff" size="small" />
               <span>项目数</span>
               <p>12</p>
            </z-col>
            <z-col span="8">
                <z-avatar icon="ios-compose-outline" style="background:#fff7e6;color:#ffb065" size="small" />
                <span>待办项</span>
                <p>3 / 24</p>
            </z-col>
            <z-col span="8">
                 <z-avatar icon="social-usd" style="background:#f6ffed;color:#73d5a9" size="small" />
                <span>积分</span>
                <p>1,689</p>
            </z-col>
          </div>
        </z-col>
    </z-row>
  </div>
  <z-row :gutter="15">
  <z-col span="16">
    <z-card class="m-t-15" dis-hover>
      <div slot="title">
        <z-avatar icon="grid" style="background:#e6f7ff;color:#40a9ff" size="small" />
        基础用法
        <span class="float-right card-extra">全部项目</span>
      </div>
     <z-row :gutter="15" class="wrokboard-apps">
         <z-col span="8">
          <div  class="wrokboard-apps_item" style="">
            <div class="name">zView</div>
            <p class="desc">基础组件库</p>
          </div>
         </z-col>
         <z-col span="8">
           <div  class="wrokboard-apps_item">
              <div class="name">zView</div>
              <p class="desc">基础组件库</p>
            </div>
         </z-col>
         <z-col span="8">
            <div  class="wrokboard-apps_item">
              <div class="name">zView</div>
              <p class="desc">基础组件库</p>
            </div>
         </z-col>
         <z-col span="8">
          <div  class="wrokboard-apps_item">
            <div class="name">zView</div>
            <p class="desc">基础组件库</p>
          </div>
         </z-col>
         <z-col span="8">
           <div  class="wrokboard-apps_item">
              <div class="name">zView</div>
              <p class="desc">基础组件库</p>
            </div>
         </z-col>
         <z-col span="8">
            <div  class="wrokboard-apps_item">
              <div class="name">zView</div>
              <p class="desc">基础组件库</p>
            </div>
         </z-col>
     </z-row>
    </z-card>
    <z-card class="m-t-15" dis-hover>
     <div slot="title">
        <z-avatar icon="ios-lightbulb-outline" style="background:#f9f0ff;color:#8246d7" size="small" />
        动态
      </div>
      <div class="wrokboard-lists_item">
           <z-avatar :src="avatar" size="large" />
          <div class="content">
            <strong>小雪</strong>关注了 <a>zView</a>
            <P class="time">06-01 11:35</p>
          </div>
      </div>
      <z-divider />
      <div class="wrokboard-lists_item">
           <z-avatar :src="avatar" size="large" />
          <div class="content">
            <strong>小雪</strong>关注了 <a>zView</a>
            <P class="time">06-01 11:35</p>
          </div>
      </div>
      <z-divider />
      <div class="wrokboard-lists_item">
           <z-avatar :src="avatar" size="large" />
          <div class="content">
            <strong>小雪</strong>关注了 <a>zView</a>
            <P class="time">06-01 11:35</p>
          </div>
      </div>
      <z-divider />
      <div class="wrokboard-lists_item m-b-30">
           <z-avatar :src="avatar" size="large" />
          <div class="content">
            <strong>小雪</strong>关注了 <a>zView</a>
            <P class="time">06-01 11:35</p>
          </div>
      </div>
    </z-card>
  </z-col>
   <z-col span="8">
     <z-card class="m-t-15" dis-hover>
      <div slot="title">
        <z-avatar icon="ios-heart" style="background:#fff1f0;color:#ff4d4f" size="small" />
        快捷操作
        <span class="float-right card-extra"><z-icon type="ios-gear"></z-icon></span>
      </div>
     <z-row :gutter="20" class="wrokboard-shortcut">
        <z-col span="8">
          <a>
            <z-icon type="ios-list-outline" color="#5ec82a"></z-icon>
            <p>表单</p>
          </a>
        </z-col>
        <z-col span="8">
          <a>
            <z-icon type="ios-list-outline" color="#1890ff"></z-icon>
            <p>表单</p>
          </a>
         </z-col>
        <z-col span="8">
           <a>
            <z-icon type="ios-list-outline" color="#faad14"></z-icon>
            <p>表单</p>
          </a>
        </z-col>
          <z-col span="8">
          <a>
            <z-icon type="ios-list-outline" color="#7a3ad4"></z-icon>
            <p>表单</p>
          </a>
        </z-col>
     </z-row>
    </z-card>
    <z-list-panel class="ilead-table m-t-10">
       <div slot="title" style="line-height: 52px;">
         <z-avatar icon="ios-compose-outline" style="background:#fff7e6;color:#ffb065" size="small" />待办事项
       </div>
      <z-table :columns="columns" :data="allDatas.tableData"></z-table>
    </z-list-panel>
      <z-card class="m-t-15" dis-hover>
     <div slot="title">
        <z-avatar icon="android-people" style="background:#f6ffed;color:#59c723" size="small" />
        小组成员
      </div>
      <div class="wrokboard-lists_item">
           <z-avatar :src="avatar"/>
          <div class="content">
            <strong>小雪</strong>
            <P>Designer</p>
            <div class="extra"><z-tag color="green">通过</z-tag></div>
          </div>
      </div>
      <div class="wrokboard-lists_item">
           <z-avatar :src="avatar"/>
          <div class="content">
            <strong>小雪</strong>
            <P>Designer</p>
            <div class="extra"><z-tag color="red">未通过</z-tag></div>
          </div>
      </div>
      <div class="wrokboard-lists_item">
           <z-avatar :src="avatar"/>
          <div class="content">
            <strong>小雪</strong>
            <P>Designer</p>
            <div class="extra"><z-tag color="green">通过</z-tag></div>
          </div>
      </div>
       <div class="wrokboard-lists_item">
           <z-avatar :src="avatar"/>
          <div class="content">
            <strong>小雪</strong>
            <P>Designer</p>
            <div class="extra"><z-tag color="green">通过</z-tag></div>
          </div>
      </div>
    </z-card>
   </z-col>
  </z-row>
</div>
</template>
<script>
export default {
  name: 'detailsBase',
  data: function () {
    return {
      avatar: require('assetspath/framework/dashboard/avatar.png'),
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '任务',
          key: 'task'
        },
        {
          title: '协作者',
          key: 'partner'
        }
      ],
      // 表数据
      allDatas: {
        num: 10, // 行数
        tableData: [
          {
            task: 'zView',
            partner: '小雪'
          },
          {
            task: 'zView',
            partner: '小雪'
          },
          {
            task: 'zView',
            partner: '小雪'
          },
          {
            task: 'zView',
            partner: '小雪'
          }

        ]
      }
    }
  },
  methods: {
  }
}
</script>
<style scoped>
    @import "../../../../../styles/framework/pages/dashboard/workBoard.css";
</style>
