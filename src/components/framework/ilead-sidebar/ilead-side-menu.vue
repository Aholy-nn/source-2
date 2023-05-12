<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-07 20:53:56
 * @LastEditTime: 2020-06-03 13:24:50
 * @LastEditors: Please set LastEditors
 -->
<template>
<z-menu theme="dark" width="200px" accordion ref="menu"  :active-name="nameId" :open-names="openName"  @on-select="demoAction" >
    <!--一级菜单 -->
    <z-submenu ref="submenu" v-for="(firstItem) in menuData" :key="firstItem.functionId"
      :name="firstItem.functionId" :func-id="firstItem.functionId">
      <template slot="title">
        <Icon v-if="firstItem.icon" :type="firstItem.icon" />
        <span class="title_text" >{{firstItem.functionName}}</span>
      </template>
      <!-- 二级菜单 -->
      <div v-for="secondItem in firstItem.subMenu"  :key="secondItem.functionId">
        <!--无三级-->
        <z-menu-item :name="secondItem.functionId"  :func-id="secondItem.functionId" :to="secondItem.functionPath" v-if="!(secondItem.subMenu&&secondItem.subMenu.length > 0)">
          <Icon v-if="secondItem.icon" :type="secondItem.icon" />{{secondItem.functionName}}
        </z-menu-item>
        <!--有三级-->
        <z-submenu :name="secondItem.functionId" :func-id="secondItem.functionId"  v-else>
            <template slot="title"><Icon v-if="secondItem.icon" :type="secondItem.icon" /><span class="title_text">{{secondItem.functionName}}</span></template>
            <div v-for="thirdItem in secondItem.subMenu" :key="thirdItem.functionId">
              <!--无四级-->
              <z-menu-item :name="thirdItem.functionId" :func-id="thirdItem.functionId" :to="thirdItem.functionPath" v-if="!(thirdItem.subMenu&&thirdItem.subMenu.length>0)">
                <Icon v-if="thirdItem.icon" :type="thirdItem.icon" />{{thirdItem.functionName}}</z-menu-item>
              <!--有四级-->
              <z-submenu :name="thirdItem.functionId" v-else>
                    <template slot="title"><Icon v-if="thirdItem.icon" :type="thirdItem.icon" /><span class="title_text">{{thirdItem.functionName}}</span></template>
                    <z-menu-item v-for="fourthItem in thirdItem.subMenu" :key="fourthItem.functionId"
                     :name="fourthItem.functionId" :func-id="fourthItem.functionId" :to="fourthItem.functionPath">
                      <Icon v-if="fourthItem.icon" :type="fourthItem.icon" />{{fourthItem.functionName}}
                    </z-menu-item>
              </z-submenu>
            </div>
        </z-submenu>
      </div>
  </z-submenu>
</z-menu>
</template>
<script>
import Utils from '@/utils'
export default {
  name: 'ilead-side-menu',
  props: {
    ifDemoData: { // 是否是本地demo
      type: Boolean,
      default: true
    },
    menuData: {
      type: Array
    }
  },
  data: function () {
    return {
      nameId: '',
      openName: []
    }
  },
  methods: {
    // 默认数据
    getDemoFunctionData: function () {
    },
    demoAction: function () {
    }
  },
  computed: {
    tabIdPath: function () {
      return this.$store.state.menuAction
    }
  },
  watch: {
    tabIdPath: function (menuAction) {
      var menus = this.menuData
      // 获取id
      let nameId = Utils.getNameId(menus, menuAction.path)
      // 触发的按钮
      this.nameId = nameId
      let routeMetched = this.$route.matched
      let res = routeMetched.filter(item => {
        return item.meta === undefined || !item.meta.hideInBread
      }).map(function (item, index, arr) {
        if (index < arr.length - 1) {
          let nameId = Utils.getNameId(menus, item.path)
          return nameId
        }
      })
      // 展开的按钮
      this.openName = res
      // 面包屑
      this.$store.commit('setBreadCrumbList', this.$route)
      this.$nextTick(function () {
        this.$refs.menu.updateOpened()
        this.$refs.menu.updateActiveName()
      })
    }
  },
  mounted: function () {
    // this.$store.commit('setMenuList', this.menuData)
  }
}
</script>
