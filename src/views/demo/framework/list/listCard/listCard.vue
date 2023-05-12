<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2019-12-28 10:19:52
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div class="frame-page">
 <z-row :gutter="15">
   <z-col :xs="24" :sm="12" :lg="8" class="m-b-15">
        <z-button type="dashed" long style="height:182px"><z-icon class="m-r-5" type="plus-round"></z-icon>新增产品</z-button>
    </z-col>
    <z-col :xs="24" :sm="12" :lg="8" class="m-b-15" v-for="(item,index) in listData" :key="index">
        <z-card dis-hover shadow>
          <div class="list-card_meta">
              <div class="list-card_meta_avatar">
                <z-avatar :src="item.url" />
              </div>
              <div class="list-card_meta_content">
                <div class="list-card_meta_title">{{item.title}}</div>
                <div class="list-card_meta_description">{{item.content}}</div>
              </div>
          </div>
          <ul class="list-card_action">
            <li>{{item.actionText}}</li>
            <li><z-divider type="vertical" /></li>
            <li>{{item.actionText1}}</li>
          </ul>
        </z-card>
    </z-col>
</z-row>

 </div>
</template>

<script>
export default {
  name: 'listCard',
  data: function () {
    return {
      listData: [
        {
          url: require('assetspath/framework/list/avatar.png'),
          title: 'ilead admin ui',
          content: '毫无疑问你在科研方面会取得成功,毫无疑问你在科研方面会取得成功,毫无疑问你在科研方面会取得成功。',
          actionText: '操作一',
          actionFunc: '',
          actionText1: '操作二',
          actionFunc1: ''
        },
        {
          url: require('assetspath/framework/list/avatar.png'),
          title: 'ilead admin ui',
          content: '毫无疑问你在科研方面会取得成功,毫无疑问你在科研方面会取得成功,毫无疑问你在科研方面会取得成功。',
          actionText: '操作一',
          actionFunc: '',
          actionText1: '操作二',
          actionFunc1: ''
        },
        {
          url: require('assetspath/framework/list/avatar.png'),
          title: 'ilead admin ui',
          content: '毫无疑问你在科研方面会取得成功,毫无疑问你在科研方面会取得成功,毫无疑问你在科研方面会取得成功。',
          actionText: '操作一',
          actionFunc: '',
          actionText1: '操作二',
          actionFunc1: ''
        },
        {
          url: require('assetspath/framework/list/avatar.png'),
          title: 'ilead admin ui',
          content: '毫无疑问你在科研方面会取得成功,毫无疑问你在科研方面会取得成功,毫无疑问你在科研方面会取得成功。',
          actionText: '操作一',
          actionFunc: '',
          actionText1: '操作二',
          actionFunc1: ''
        },
        {
          url: require('assetspath/framework/list/avatar.png'),
          title: 'ilead admin ui',
          content: '毫无疑问你在科研方面会取得成功,毫无疑问你在科研方面会取得成功,毫无疑问你在科研方面会取得成功。',
          actionText: '操作一',
          actionFunc: '',
          actionText1: '操作二',
          actionFunc1: ''
        }
      ]
    }
  },
  methods: {

  }
}
</script>
<style scoped>
    @import "../../../../../styles/framework/pages/list/listCard.css";
</style>
