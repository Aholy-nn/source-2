<!--
 * @Author: your name
 * @Date: 2020-01-04 11:04:50
 * @LastEditTime: 2020-09-08 14:11:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: ilead4admin-ui\src\views\framework\parentView\parentView.vue
 -->
<template>
<div>
    <keep-alive :include="cacheList">
      <router-view v-if="ifCache"></router-view>
    </keep-alive>
    <router-view ref="child" v-if="!ifCache"></router-view>
</div>
</template>
<script>
import Config from '@/config'
export default {
  name: 'parentView',
  data () {
    return {
      ifCache: Config.ifCache
    }
  },
  computed: {
    tabList () {
      return this.$store.state.tabList
    },
    cacheList () {
      return ['parentView', ...this.tabList.length ? this.tabList.map(item => item.name) : []]
    }
  }
}
</script>
