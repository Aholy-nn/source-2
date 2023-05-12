<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-06-02 19:01:57
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
  <z-card dis-hover>
      <div class="list-user_item" v-for="(item,index) in listData" :key="index">
         <div class="title m-t-15">
            <z-avatar :src="item.avatarSrc" />
            <span class="m-l-10">{{item.unserName}}</span>
          </div>
          <p class="m-t-15">ID：{{item.id}}  <z-button size="small"><z-icon type="ios-copy-outline" class="m-r-5"></z-icon>复制</z-button></p>
          <p class="m-t-5">邮箱地址：{{item.mailbox}}</p>
          <div class="m-t-15">
            <z-tag type="border" color="green">已验证邮箱</z-tag>
            <z-tag type="border" color="red">运营人员</z-tag>
            <z-button size="small" @click="onSlide(index)"><z-icon type="navicon" class="m-r-5"></z-icon>展开操作</z-button>
          </div>
          <div class="m-t-15" v-if="index==num">
           <z-poptip
              confirm
              title="确定改用户设置为普通用户?"
              ok-text="确定"
              cancel-text="取消">
              <z-button type="primary" size="small" disabled>普通用户</z-button>
          </z-poptip>
           <z-divider type="vertical"/>
            <z-poptip
              confirm
              title="确定改用户设置为管理员?"
              ok-text="确定"
              cancel-text="取消">
              <z-button type="primary" size="small">管理员</z-button>
          </z-poptip>
          <z-divider type="vertical"/>
           <z-poptip
              confirm
              title="确定改用户设置为运营人员?"
              ok-text="确定"
              cancel-text="取消">
              <z-button type="primary" size="small">运营人员</z-button>
          </z-poptip>
          </div>
          <divider/>
      </div>
    </z-card>
 </div>
</template>

<script>
export default {
  name: 'listUser',
  data: function () {
    return {
      listData: [
        {
          avatarSrc: require('assetspath/framework/list/avatar.png'),
          unserName: '小雪',
          id: '123456789',
          mailbox: 'zrz_oracle@163.com'
        },
        {
          avatarSrc: require('assetspath/framework/list/avatar.png'),
          unserName: '小雪',
          id: '123456789',
          mailbox: 'zrz_oracle@163.com'
        },
        {
          avatarSrc: require('assetspath/framework/list/avatar.png'),
          unserName: '小雪',
          id: '123456789',
          mailbox: 'zrz_oracle@163.com'
        },
        {
          avatarSrc: require('assetspath/framework/list/avatar.png'),
          unserName: '小雪',
          id: '123456789',
          mailbox: 'zrz_oracle@163.com'
        }
      ],
      num: -1
    }
  },
  methods: {
    onSlide: function (index) {
      if (this.num === index) {
        this.num = -1
      } else {
        this.num = index
      }
    }
  }
}
</script>
<style>
    @import "../../../../../styles/framework/pages/list/listUser.css";
</style>
