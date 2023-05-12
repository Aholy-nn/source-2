<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-07 14:14:08
 * @LastEditTime: 2021-04-25 09:46:58
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
    <!-- header开始 -->
   <div class="clearfix"></div>
   <div class="frame-wrapper">
      <!-- 左侧菜单 -->
      <div id="sidebarMenu" v-cloak>
        <ilead-sidebar></ilead-sidebar>
      </div>
       <!-- 右侧 -->
      <div class="frame-container">
        <!-- head -->
        <div class="frame-header" style="display: flex; justify-content: flex-end">
          <div class="frame-header_left" style="flex: 1">
            <!-- 刷新 -->
            <a @click="refresh"><z-icon type="ios-reload"></z-icon></a>
            <z-breadcrumb v-if="ifBreadcrumb">
                <!-- <z-breadcrumb-item to="/">Home</z-breadcrumb-item>-->
                <z-breadcrumb-item v-for="(item,index) in breadCrumbList" :key="index">{{item}}</z-breadcrumb-item>
            </z-breadcrumb>
          </div>
          <!-- 控制台 -->
          <div style="margin-top: 25px; padding-right: 20px;">
              <z-badge v-if='noticeBadgeVisible' :count="unReadCount" overflow-count="999">
                  <a href="#" @click="msgClick">消息管理器</a>
              </z-badge>
          </div>
          <!-- 登录设置 -->
          <div class="frame-header_login" v-cloak>
              <z-dropdown class="top-menu_user">
                  <a>
                      <z-icon type="arrow-down-b"></z-icon>
                      <span class="username"> {{userName}} <p class="company"> {{company}} </p></span>
                      <img alt="" class="img-circle img-responsive" src="~assetspath/framework/index/avatar.png" />
                  </a>
                  <z-dropdown-menu trigger="hover" slot="list">
                      <z-dropdown-item>
                          <a href="#" @click="alterPass"><i class="icon-rocket"></i> {{editPassword}} </a>
                      </z-dropdown-item>
                      <z-dropdown-item>
                          <a href="#" @click="logout"><i class="icon-key"></i> {{logoutText}} </a>
                      </z-dropdown-item>
                  </z-dropdown-menu>
              </z-dropdown>
          </div>
        </div>
        <!-- tab -->
        <ilead-tab-menu v-if="ifTab" type="theme"></ilead-tab-menu>
        <!-- main -->
        <div class="frame-main" :class="{'no-tab': !ifTab}">
            <z-spin size="large" class="ui-page-loading" v-if="pageLoading" fix>
                <z-animate-loading></z-animate-loading>
            </z-spin>
            <keep-alive :include="cacheList">
                <router-view v-if="ifCache&&isRouterAlive"></router-view>
            </keep-alive>
            <router-view v-if="isRouterAlive&&!ifCache"></router-view>
        </div>
      </div>
  </div>
  <!-- 弹出 -->
  <edit-pas ref="editPas"></edit-pas>
  <z-modal v-model="msgVisible" title="消息提醒" @on-ok="OKBtn('msg')" class="addModel">
      <ul id="example-1">
          <li style="margin: 10px 0px; padding-left: 10px; background-color: #DDDDDD; border-left: 3px solid blue;" v-for="item in noticeList" :key="item.noticeTextId">
              {{ item.noticeContent }}
          </li>
      </ul>
  </z-modal>
</div>
</template>
<script>
import '@/components/framework/ilead-sidebar'
import '@/components/framework/ilead-tab-menu'
import Api from '@/api/framework'
import zView from 'zview'
import Config from '@/config'
import auth from '@/common/auth'
import editPas from '@/views/authui5/user/editPas/editPas'
import locale from '@/locale'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
export default {
  name: 'indexPage',
  i18n: locale,
  components: {
    'edit-pas': editPas
  },
  data () {
    return {
      userName: 'admin',
      company: 'iLead ui',
      editPassword: this.$t('index.editPassword'),
      logoutText: this.$t('index.logout'),
      // 左侧菜单
      ifCache: Config.ifCache,
      ifBreadcrumb: Config.ifBreadcrumb,
      isRouterAlive: true,
      openMenus: ['menu-1', 'menu-2', 'menu-3'],
      ifTab: Config.ifTab,
      stompClient: '',
      wsServer: '',
      isWsClose: false,
      connectTryCount: 0,
      maxConnectTryCount: 3,
      noticeBadgeVisible: false,
      msgVisible: false,
      unReadCount: 0,
      noticeList: []
    }
  },
  computed: {
    breadCrumbList () {
      return this.$store.state.breadCrumbList
    },
    tabList () {
      return this.$store.state.tabList
    },
    cacheList () {
      return ['parentView', ...this.tabList.length ? this.tabList.map(item => item.name) : []]
    },
    pageLoading () {
      return this.$store.state.pageLoading
    }
  },
  methods: {
    alterPass: function () {
      this.$refs.editPas.modelIsOpen = true
      this.$refs.editPas.reset()
      this.$refs.editPas.formItem.userId = this.$store.state.userId
      this.$refs.editPas.from = 'main'
    },
    refresh: function () {
      this.isRouterAlive = false
      zView.LoadingBar.start()
      this.$nextTick(function () {
        this.isRouterAlive = true
        zView.LoadingBar.finish()
      })
    },
    msgClick: function () {
      this.msgVisible = true
    },
    OKBtn: function (res) {
      this.msgVisible = false
    },
    logout: function () {
      let that = this
      if (this.ifNotice) {
        this.stompClient.disconnect(function () {
          console.log('断开连接')
        })
      }
      Api.logout().then(function (response) {
        let data = response.data
        if (data.code === '01' || response.status === 204) {
          auth.removeAuthToken('all')
          if (Config.ifSSO && Config.ifSSO === true) {
            if (Config.SSOType === 'CAS') {
              window.location.href = Config.CAS.server + '/logout?service=' + Config.CAS.client
            } else if (Config.SSOType === 'OAuth2') {
              window.location.href = Config.OAuth2.logoutUrl
            } else {
              window.location.href = data.redirectUrl
            }
          } else {
            that.$router.push({
              name: 'login'
            })
          }
        } else {
          console.log(this.$t('index.logoutFailed'))
          auth.removeAuthToken('all')
          that.$router.push({name: 'login'})
          that.$Message.error({ content: this.$t('index.logoutFailed') })
        }
      }).catch(function (error) {
        console.log(this.$t('index.logoutFailed') + error)
        auth.removeAuthToken('all')
        that.$router.push({name: 'login'})
      })
    },
    // 建立ws连接
    initWs: function () {
      let that = this
      // ws服务器地址
      this.wsServer = Config.NoticeWsUrl
      var SUBSCRIBE_PREFIX = '/topic/'
      // ws开放端口
      var SOCKET_ENDPOINT = '/websocket'
      // 订阅地址
      var SUBSCRIBE = ''
      var socket = new SockJS(this.wsServer + SOCKET_ENDPOINT, null, {timeout: 15000})
      console.log('socket连接地址：' + this.wsServer + SOCKET_ENDPOINT)
      this.stompClient = Stomp.over(socket)
      that.connectTryCount++
      this.stompClient.connect({}, function (frame) {
        console.log('连接成功')
        that.connectTryCount = 1
        that.isWsClose = false
        SUBSCRIBE = SUBSCRIBE_PREFIX + that.$store.state.userCode
        console.log('设置订阅地址为:' + SUBSCRIBE)
        that.stompClient.subscribe(SUBSCRIBE, function (response) {
          // var receiveMessage = JSON.parse(response)
          console.log(response)
          // 获取未读消息数
          that.getUnreadCount()
          // 获取用户最新的10条消息
          that.getUserNotice()
        })
      }, function (frame) {
        if (that.isWsClose) {
          return
        }
        // 小于重连次数
        if (that.connectTryCount < that.maxConnectTryCount) {
          console.log('第' + that.connectTryCount + '次连接失败，尝试重连')
          // 为了防止海量客户端同时发起重连请求（reconnect），客户端应该推迟一个随机时间后重新连接
          setTimeout(that.initWs(), (Math.random() * 3 + 1) * 1000)
        } else {
          console.log('已达最大重连次数,放弃重连')
          that.isWsClose = true
        }
      }
      )
    },
    getUnreadCount: function () {
      let that = this
      Api.queryUnreadCount().then(function (response) {
        let data = response.data
        if (data.code === '01') {
          that.unReadCount = data.data
        } else {
          console.log('获取未读消息数失败')
        }
      }).catch(function (error) {
        console.log('获取未读消息数失败 || ' + error)
      })
    },
    getUserNotice: function () {
      let that = this
      let param = {
        'page': 1,
        'rows': 10
      }
      Api.queryUserNotice(param).then(function (response) {
        that.noticeList = response.data.rows
      }).catch(function (error) {
        console.log('获取用户公告数据失败 || ' + error)
      })
      if (!this.ifTab && this.$route.path !== '/home') {
        this.$router.push('/home')
      }
    }
  },
  mounted: function () {
    this.$store.commit('setHomeRoute', Config.homeName)
    const isLocal = process.env.IF_LOCAL && process.env.IF_LOCAL === 'local'
    if (isLocal) {
      return
    }
    this.userName = this.$store.state.userName
    this.company = this.$store.state.orgName
    if (Config.ifNotice) {
      this.noticeBadgeVisible = true
      // 建立ws连接
      this.initWs()
      // 获取未读消息数
      this.getUnreadCount()
      // 获取用户最新的10条消息
      this.getUserNotice()
    }
    if (!this.ifTab && this.$route.path !== '/home') {
      this.$router.push('/home')
    }
  }
}
</script>
<style>
  @import '../styles/framework/pages/index.css';
</style>
<style scoped>
</style>
