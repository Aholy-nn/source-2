
/*
 * @Author: your name
 * @Date: 2020-06-12 16:21:57
 * @LastEditTime: 2020-06-15 16:18:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\components\framework\vxe-table-extend\index.js
 */
import Vue from 'vue'
export default {
  props: {
    refresh: {
      type: Boolean,
      default: false
    },
    export: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 渲染page上的按钮
    renderBtns () {
      if (this.$parent && this.$parent.$el.querySelector('.vxe-table')) {
        var parent = this.$parent.$el.querySelector('.vxe-table').__vue__
      }
      // 刷新
      var RefreshComponent = Vue.extend({
        template: `<a @click ="onRefresh" class="p-l-15" style="float:left"><z-icon type="ios-reload" size="24"></z-icon></a>`,
        data () {
          return {
            text: '刷新',
            parent: parent
          }
        },
        methods: {
          onRefresh: function () {
            this.parent.onTableRefresh()
          }
        }
      })
      // 导出
      var ExpComponent = Vue.extend({
        template: `<a @click ="onExport" class="p-l-15" style="float:left"><z-icon type="ios-download-outline" size="24"></z-icon></a>`,
        data () {
          return {
            text: '导出',
            parent: parent
          }
        },
        methods: {
          onExport: function () {
            this.parent.openExport({
              isPrint: false, isFooter: false, original: false
            })
          }
        }
      })

      let pageEl = this.$el.querySelector('.vxe-pager--wrapper')
      if (pageEl) {
        // 刷新
        if (this.refresh) {
          let refreshComponent = new RefreshComponent().$mount()
          pageEl.appendChild(refreshComponent.$el)
        }
        // 导出
        if (this.export) {
          let exportComponent = new ExpComponent().$mount()
          pageEl.appendChild(exportComponent.$el)
        }
      }
    }
  },
  mounted: function () {
    if (this.refresh || this.export) {
      this.renderBtns()
    }
  }
}
