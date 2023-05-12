<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-06-02 19:01:22
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
 <z-row  :gutter="15">
    <z-col :xs="24" :sm="12" :lg="6" v-for="(item,index) in listData" :key="index" class="m-b-15">
      <a :href="item.href">
        <z-card dis-hover shadow class="list-goods">
            <img :src="item.imgUrl">
            <div class="list-goods_title">{{item.title}}</div>
            <div class="list-goods_desc">{{item.desc}}</div>
            <div class="list-goods_price">{{item.price}}</div>
        </z-card>
      </a>
    </z-col>
</z-row>
 <z-page class="m-t-15 text-center" :page-size="5" :total="3" show-sizer show-total transfer show-elevator></z-page>
 </div>
</template>

<script>
export default {
  name: 'listGoods',
  data: function () {
    return {
      listData: [
        {
          href: '#',
          imgUrl: require('assetspath/framework/list/prod.png'),
          title: '索尼无声耳机',
          desc: 'WH-222',
          price: '￥26100'
        },
        {
          href: '#',
          imgUrl: require('assetspath/framework/list/prod.png'),
          title: '索尼无声耳机',
          desc: 'WH-222',
          price: '￥26100'
        },
        {
          href: '#',
          imgUrl: require('assetspath/framework/list/prod.png'),
          title: '索尼无声耳机',
          desc: 'WH-222',
          price: '￥26100'
        },
        {
          href: '#',
          imgUrl: require('assetspath/framework/list/prod.png'),
          title: '索尼无声耳机',
          desc: 'WH-222',
          price: '￥26100'
        },
        {
          href: '#',
          imgUrl: require('assetspath/framework/list/prod.png'),
          title: '索尼无声耳机',
          desc: 'WH-222',
          price: '￥26100'
        },
        {
          href: '#',
          imgUrl: require('assetspath/framework/list/prod.png'),
          title: '索尼无声耳机',
          desc: 'WH-222',
          price: '￥26100'
        },
        {
          href: '#',
          imgUrl: require('assetspath/framework/list/prod.png'),
          title: '索尼无声耳机',
          desc: 'WH-222',
          price: '￥26100'
        },
        {
          href: '#',
          imgUrl: require('assetspath/framework/list/prod.png'),
          title: '索尼无声耳机',
          desc: 'WH-222',
          price: '￥26100'
        }
      ]
    }
  },
  methods: {

  }
}
</script>
<style scoped>
    @import "../../../../../styles/framework/pages/list/listGoods.css";
</style>
