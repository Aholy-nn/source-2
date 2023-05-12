<template>
<div class="ilead-tab-menu" :class="{'theme':type=='theme'}">
  <div class="tab-nav-wrap" :class="{'tab-nav-scrollable':scrollable}">
      <span @click="scrollPrev" class="tab-nav-prev" :class="{'tab-scroll-disabled':!scrollable}"><Icon type="ios-arrow-back"></Icon></span>
      <span @click="scrollNext" class="tab-nav-next" :class="{'tab-scroll-disabled':!scrollable}"><Icon type="ios-arrow-forward"></Icon></span>
      <div ref="navScroll" class="tab-nav-scroll">
        <div ref="nav" class="tab-nav" :style="navStyle">
          <Tag
            type="dot"
            :fade="false"
            v-for="(item, index) in list"
            :key="`tag-nav-${index}`"
            :name="item.name"
            :data-route-item="item.path"
            :closable="isClosable(item)"
            @on-close="handleClose(item)"
            @click.native="handleClick(item.name)"
            :class="{'tag-active':tabValue==item.name}"
            :color="tabValue==item.name ? 'primary' : 'default'"
            >{{item.meta.title}}</Tag>
        </div>
      </div>
     </div>
    <!--下拉菜单-->
    <z-dropdown class="ilead-tab-menu_dropdown" @on-click="dropmenuClick">
         <z-button>
            <z-icon type="ios-arrow-down"></z-icon>
        </z-button>
        <z-dropdown-menu slot="list">
            <z-dropdown-item name="close-others">{{$t('framework.btn.closeOther')}}</z-dropdown-item>
            <z-dropdown-item name="close-all">{{$t('framework.btn.closeAll')}}</z-dropdown-item>
        </z-dropdown-menu>
    </z-dropdown>
</div>
</template>
<script>
import _ from 'lodash'
import Config from '@/config'
export default {
  name: 'ilead-tab-menu',
  data: function () {
    return {
      list: [],
      tabValue: '',
      navStyle: { transform: '' },
      scrollable: false
    }
  },
  props: {
    type: {
      type: String
    }
  },
  created: function () {
  },
  watch: {
    '$route' (to) {
      this.addTag(to)
      this.currentTab(to)
      this.$nextTick(() => {
        this.updateNavScroll()
        this.scrollToActiveTab()
      })
    },
    list (value) {
      this.$store.commit('setTabList', value)
    }
  },
  methods: {
    // 左右滑动的方法
    updateNavScroll () {
      const navWidth = this.$refs.nav.offsetWidth
      const containerWidth = this.$refs.navScroll.offsetWidth
      const currentOffset = this.getCurrentScrollOffset()
      if (containerWidth < navWidth) {
        this.scrollable = true
        // this.setOffset(navWidth - containerWidth)
        if (navWidth - currentOffset < containerWidth) {
          this.setOffset(navWidth - containerWidth)
        }
      } else {
        this.scrollable = false
        if (currentOffset > 0) {
          this.setOffset(0)
        }
      }
    },
    // 点击tab，执行左右滑动
    scrollToActiveTab () {
      if (!this.scrollable) return
      const nav = this.$refs.nav
      const activeTab = this.$el.querySelector(`.tag-active`)
      if (!activeTab) return
      const navScroll = this.$refs.navScroll
      const activeTabBounding = activeTab.getBoundingClientRect()
      const navScrollBounding = navScroll.getBoundingClientRect()
      const navBounding = nav.getBoundingClientRect()
      const currentOffset = this.getCurrentScrollOffset()
      let newOffset = currentOffset
      if (navBounding.right < navScrollBounding.right) {
        newOffset = nav.offsetWidth - navScrollBounding.width
      }
      if (activeTabBounding.left < navScrollBounding.left) {
        newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left)
      } else if (activeTabBounding.right > navScrollBounding.right) {
        newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right
      }
      if (currentOffset !== newOffset) {
        this.setOffset(Math.max(newOffset, 0))
      }
    },
    // 获取nav的偏移值
    getCurrentScrollOffset () {
      const { navStyle } = this
      return navStyle.transform
        ? Number(navStyle.transform.match(/translateX\(-(\d+(\.\d+)*)px\)/)[1])
        : 0
    },
    // 执行滑动
    setOffset (value) {
      this.navStyle.transform = `translateX(-${value}px)`
    },
    // 点击向前
    scrollPrev () {
      const containerWidth = this.$refs.navScroll.offsetWidth
      const currentOffset = this.getCurrentScrollOffset()
      if (!currentOffset) return
      let newOffset = currentOffset > containerWidth
        ? currentOffset - containerWidth
        : 0
      this.setOffset(newOffset)
    },
    // 点击向后
    scrollNext () {
      const navWidth = this.$refs.nav.offsetWidth
      const containerWidth = this.$refs.navScroll.offsetWidth
      const currentOffset = this.getCurrentScrollOffset()
      if (navWidth - currentOffset <= containerWidth) return

      let newOffset = navWidth - currentOffset > containerWidth * 2
        ? currentOffset + containerWidth
        : (navWidth - containerWidth)
      this.setOffset(newOffset)
    },
    push (path) {
      if (this.$route.path !== path) {
        // 解决刷新页面的时候出现的navigation  canceled from "XX" to "XX" with a new navigation问题
        let originalPush = this.$router.push
        this.$router.push = function push (path) {
          return originalPush.call(this, path).catch(err => err)
        }
        this.$router.push(path)
      }
    },
    // 点击标签
    handleClick (name) {
      var item = _.find(this.list, {'name': name})
      // 修改route
      this.push(item.path)
      // 对应菜单
      this.$store.commit('setMenuAction', item)
    },
    // 关闭当前
    handleClose (item) {
      var index = this.list.indexOf(item)
      if (index > 0) {
        // 如果这个标签名为当前选中的标签
        if (this.$route.name === item.name) {
          // 点击上一个标签
          this.$store.commit('setMenuAction', this.list[index - 1])
          this.push(this.list[index - 1].path)
        }
        this.list.splice(index, 1)
        this.$nextTick(() => {
          this.updateNavScroll()
        })
      }
    },
    // 标签添加高亮
    currentTab (item) {
      this.tabValue = item.name
    },
    // 是否显示×
    isClosable (item) {
      if (item && item.path === Config.homeName) {
        return false
      } else {
        return true
      }
    },
    // 初始化为home页
    setTagNavList (item) {
      this.push(item.path)
      this.addTag(item)
      this.currentTab(item)
    },
    // 添加标签
    addTag (to) {
      var res = false
      this.list.forEach(function (item) {
        if (item.path === to.path) {
          res = true
        }
      })
      // 通过route获取对应的信息
      // var routeValue = this.getRouteValue(path)
      // 如果tab标签内没有route
      if (!res) {
        this.list.push(to)
      }
      // 对应菜单
      this.$store.commit('setMenuAction', to)
    },
    // 下拉菜单
    dropmenuClick (name) {
      if (name === 'close-all') {
        this.list = this.list.filter(function (item) {
          return item.path === Config.homeName
        })
        let homeRoute = this.$store.state.homeRoute
        this.setTagNavList(homeRoute)
      } else if (name === 'close-others') {
        var action = this.$store.state.menuAction
        this.list = this.list.filter(function (item) {
          return item.path === Config.homeName || item.path === action.path
        })
      }
      this.$nextTick(() => {
        this.setOffset(0)
        this.scrollable = false
      })
    }
  },
  mounted () {
    var that = this
    setTimeout(function () {
      // 初始化为home页
      let homeRoute = that.$store.state.homeRoute
      that.setTagNavList(homeRoute)
    })
  }
}
</script>
<style>
 @import '../../../styles/framework/components/ilead-tab-menu.css';
</style>
