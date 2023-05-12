<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-07 21:37:10
 * @LastEditTime: 2020-07-12 13:23:50
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="page-sidebar" :class="{'page-sidebar-closed':menuIsClose,'ellipsis':ellipsis}" v-cloak>
    <z-spin fix v-if="spinShow">
      <z-icon type="load-c" size=18 class="ui-spin-icon-load"></z-icon>
      <div>Loading</div>
    </z-spin>
    <div class="page-sidebar_logo"><span class="logo-text">ILead Admin Ui</span></div>
    <div class="sidebar-toggler" @click="onToggleMenu"><z-icon type="navicon"></z-icon></div>
    <vue-scroll :ops="ops">
      <!-- 动态菜单 -->
      <ilead-side-menu :menu-data="menuData" key="main"></ilead-side-menu>
      <!-- demo菜单 -->
        <h4 class="sidebar_demo-title" v-if="ifDemoMenu">demo</h4>
        <ilead-side-menu :menu-data="menuDemo"></ilead-side-menu>
      <slot></slot>
    </vue-scroll>
</div>
</template>
<script>
import Vue from 'vue'
import vuescroll from 'vuescroll'
import Router from '@/router'
import ileadSideMenu from './ilead-side-menu'
import Utils from '@/utils'
import Api from '@/api/framework'
import config from '@/config'
Vue.use(vuescroll)
export default {
  name: 'ilead-sidebar',
  components: {
    'vue-scroll': vuescroll,
    'ilead-side-menu': ileadSideMenu
  },
  data: function () {
    return {
      // 滚动条配置
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {},
        bar: {
          background: '#fff',
          opacity: '0.5'
        }
      },
      spinShow: false,
      menuDemo: this.$store.state.menuData,
      menuData: this.getFunctionData(),
      ifDemoMenu: config.ifDemoMenu,
      menuIsClose: false
    }
  },
  props: {
    // ellipsis为true,菜单内容过长，用省略号
    ellipsis: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getFunctionData: function () {
      // TODO 判断userId是否存在
      let userId = this.$store.state.userId
      let that = this
      const isLocal = process.env.IF_LOCAL && process.env.IF_LOCAL === 'local'
      if (isLocal) {
        return
      }
      this.spinShow = true
      Api.menuQuery(userId).then(function (response) {
        let data = response.data
        // TODO 旧版本的框架返回的正确码为1，为兼容所以此处增加兼容判断
        if (data.code === '01' || data.code === '1') {
          let menuData = data.data
          if (config.menuType === 1) {
            // 对后端返回的菜单数据进行一定处理(functionURL变成functionPath等)
            menuData = Utils.getMenuTypeOne(menuData)
            // 根据菜单数据获取路由数据
            let routerlist = Utils.getRouteByMenuNew(menuData)
            // 对于根菜单(/sysmanage同级的)设置其component
            routerlist.forEach(item => {
              item.component = () => import('@/views/index')
            })
            Router.addRoutes(routerlist)
          } else if (config.menuType === 2) {
            // 获取正确格式的菜单
            menuData = Utils.getMenuByMenu(menuData)
            // 获取正确格式的路由菜单
            let routerlist = Utils.getRouteByMenu(menuData)
            // 为每个根菜单添加index
            routerlist.forEach(item => {
              item.component = () => import('@/views/index')
            })
            // 添加路由
            Router.addRoutes(routerlist)
          }
          // 添加菜单
          that.menuData = menuData
          that.spinShow = false
        } else {
          that.$Message.error({content: that.$t('framework.message.getMenuError'), duration: 3})
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    onToggleMenu: function () {
      var wrap = this.$parent.$el.querySelector('.frame-wrapper')
      if (this.menuIsClose) {
        this.menuIsClose = false
        wrap.classList.remove('toggler-menu')
      } else {
        this.menuIsClose = true
        wrap.classList.add('toggler-menu')
      }
    }
  }
}
</script>
<style>
  @import '../../../styles/framework/components/ilead-sidebar.css';
</style>
