/*
 * @Author: your name
 * @Date: 2019-12-23 13:38:47
 * @LastEditTime: 2020-05-21 15:22:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\utils\index.js
 */
import frameConfig from '@/config'
export default{
  hasChild (item) {
    return item.children && item.children.length !== 0
  },
  // 获取菜单，通过路由
  getMenuByRouter (routers) {
    let res = []
    routers.forEach(item => {
      if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
        let obj = {
          icon: item.meta.icon ? item.meta.icon : '',
          functionName: item.meta.title ? item.meta.title : '',
          functionId: item.name,
          functionPath: item.path
        }
        if (this.hasChild(item)) {
          obj.subMenu = this.getMenuByRouter(item.children)
        }
        res.push(obj)
      }
    })
    return res
  },
  // 首页router
  getHomeRoute (routers, homeName) {
    let i = -1
    let len = routers.length
    let homeRoute = {}
    while (++i < len) {
      let item = routers[i]
      if (item.children && item.children.length) {
        let res = this.getHomeRoute(item.children, homeName)
        if (res.name) return res
      } else {
        if (item.path === homeName) homeRoute = item
      }
    }
    return homeRoute
  },
  // 动态菜单
  // 构建菜单，为菜单添加functionPath
  getMenuByMenu (menus) {
    let res = []
    menus.forEach(item => {
      let obj = item
      if (item.functionPath) {
        obj.functionPath = item.functionPath
      } else {
        let arr = obj.functionURL.split('/')
        let index = arr.indexOf('views')
        if (index > -1) {
          let newArr = arr.slice(index + 2, arr.length - 1)
          obj.functionPath = '/' + newArr.join('/')
        }
      }
      obj.functionPath = item.functionPath ? item.functionPath : '/' + item.functionId
      if (item.subMenu && item.subMenu.length !== 0) {
        obj.subMenu = this.getMenuByMenu(item.subMenu)
      }
      res.push(obj)
    })
    return res
  },
  // 根据菜单数据构建包括扩展菜单功能在内的路由
  getRouteByMenuNew (menu) {
    let res = []
    menu.forEach(item => {
      let ComponentTemp = ''
      // 如果时
      if (item.functionPath.indexOf('/[web]') === 0) {
        ComponentTemp = () => import('@/views/externalMenu.vue')
      } else {
        ComponentTemp = () => import('@/' + item.functionPath + '.vue')
      }
      const Component = ComponentTemp
      const ParentView = () => import('@/views/framework/parentView/parentView')
      let obj = {
        path: item.functionPath,
        name: item.functionId,
        component: Component, // 路径找不到会报错
        meta: {
          title: item.functionName,
          icon: item.iconClass
        }
      }
      if (item.subMenu && item.subMenu.length !== 0) {
        obj.component = ParentView
        obj.children = this.getRouteByMenuNew(item.subMenu)
      }
      res.push(obj)
    })
    return res
  },
  // 通过菜单构建路由
  getRouteByMenu (menus) {
    let res = []
    menus.forEach(item => {
      const Component = () => import('@/' + item.functionURL + '.vue')
      const ParentView = () => import('@/views/framework/parentView/parentView')
      let obj = {
        path: item.functionPath,
        name: item.functionId,
        component: Component, // 路径找不到会报错
        meta: {
          title: item.functionName,
          icon: item.iconClass
        }
      }
      if (item.subMenu && item.subMenu.length !== 0) {
        obj.component = ParentView
        obj.children = this.getRouteByMenu(item.subMenu)
      }
      res.push(obj)
    })
    return res
  },
  // 动态菜单本地路由时，修改键值名
  getMenuTypeOne (menus) {
    let res = []
    menus.forEach(item => {
      let obj = item
      if (item.functionPath) {
        obj.functionPath = item.functionPath
      } else {
        // functionURL变成functionPath
        obj.functionPath = item.functionURL
        delete obj.functionURL
      }
      if (item.iconClass) {
        // iconClass变成icon
        obj.icon = item.iconClass
        delete obj.iconClass
      }
      if (item.subMenu && item.subMenu.length !== 0) {
        obj.subMenu = this.getMenuTypeOne(item.subMenu)
      }
      res.push(obj)
    })
    return res
  },
  // 菜单根据path获取id
  getNameId (menus, path) {
    let res = null
    let that = this
    if (!menus || !path) { return }
    menus.forEach(function (item) {
      if (item.functionPath === path) {
        res = item.functionId
        return false
      } else if (item.subMenu && (item.subMenu.length !== 0)) {
        let chidRes = that.getNameId(item.subMenu, path)
        if (chidRes) { res = chidRes }
      }
    })
    return res
  },
  // 获取面包削
  getBreadCrumbList (route) {
    let routeMetched = route.matched
    let res = routeMetched.filter(item => {
      return item.meta === undefined || !item.meta.hideInBread
    }).map(item => {
      let meta = { ...item.meta }
      if (meta && item.meta.title) {
        return item.meta.title
      }
    })
    return res
  },
  ifUrlWhiteList (url) {
    // TODO 暂时只是支持直等于
    let urlWhiteLists = frameConfig.urlWhiteList
    let returnFlag = false
    for (let i = 0; i < urlWhiteLists.length; i++) {
      let reg = new RegExp('^' + urlWhiteLists[i] + '$', 'gim')
      if (reg.test(url)) {
        returnFlag = true
        break
      }
    }
    return returnFlag
  },
  getInfoByType (dictCode, {supItemCode, dictList, StringKey}) {
    if (!dictList) {
      dictList = JSON.parse(sessionStorage.getItem('dictData'))
    }
    let result = []
    if (supItemCode) {
      dictList.forEach(function (item, index, array) {
        if ((item.dictCode === dictCode) && (item.supItemCode === supItemCode)) {
          let param = {
            value: StringKey ? String(item.itemCode) : Number(item.itemCode),
            label: item.itemValue,
            id: item.dictId
          }
          result.push(param)
        }
      })
    } else {
      dictList.forEach(function (item, index, array) {
        if (item.dictCode === dictCode) {
          let param = {
            value: StringKey ? String(item.itemCode) : Number(item.itemCode),
            label: item.itemValue,
            id: item.dictId
          }
          result.push(param)
        }
      })
    }

    return result
  },
  getValueByCode (dictCode, itemCode, {dictList, StringKey}) {
    if (!dictList) {
      dictList = JSON.parse(sessionStorage.getItem('dictData'))
    }
    let result = null
    dictList.forEach(function (item, index, array) {
      if ((item.dictCode === dictCode) && (item.itemCode === itemCode)) {
        result = item.itemValue
      }
    })

    return result
  },
  getObjectByCode (dictCode, itemCode, {dictList, StringKey}) {
    if (!dictList) {
      dictList = JSON.parse(sessionStorage.getItem('dictData'))
    }
    let result = null
    dictList.forEach(function (item, index, array) {
      if ((item.dictCode === dictCode) && (item.itemCode === itemCode)) {
        result = {
          value: StringKey ? String(item.itemCode) : Number(item.itemCode),
          label: item.itemValue,
          id: item.dictId
        }
      }
    })

    return result
  }
}
