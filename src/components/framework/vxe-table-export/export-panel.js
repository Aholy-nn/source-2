/*
 * @Author: your name
 * @Date: 2020-05-14 13:47:39
 * @LastEditTime: 2020-06-15 16:20:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iLead-ui\ilead4admin-ui\src\components\framework\vxe-table-export\export-panel.js
 */

import GlobalConfig from 'vxe-table/lib/conf'
import exportLocal from './export-local'
import exportOnline from './export-online'
export default {
  name: 'VxeExportPanel',
  components: {
    'export-local': exportLocal,
    'export-online': exportOnline
  },
  props: {
    defaultOptions: Object,
    storeData: Object
  },
  data () {
    return {
      loading: false
    }
  },
  render (h) {
    const { storeData } = this
    let tabs = [
      {
        label: this.$t('framework.component.vxeTblExport.label.localExport'),
        value: 'local'
      },
      {
        label: this.$t('framework.component.vxeTblExport.label.onlineExport'),
        value: 'online'
      }
    ]
    let exportConfig = this.$parent.exportConfig
    let tabValue = 'local'
    if (exportConfig && exportConfig.exportType) {
      let types = exportConfig.exportType
      if (types.indexOf('online') < 0 && types.indexOf('local') < 0) {
        alert(this.$t('framework.component.vxeTblExport.alert.leastOneExportConfigexportType'))
        return
      }
      if (types.indexOf('local') < 0) {
        tabs = [{
          label: this.$t('framework.component.vxeTblExport.label.onlineExport'),
          value: 'online'
        }]
        tabValue = 'online'
      }
      if (types.indexOf('online') < 0) {
        tabs = [{
          label: this.$t('framework.component.vxeTblExport.label.localExport'),
          value: 'local'
        }]
        tabValue = 'local'
      }
    }
    return h('z-modal', {
      res: 'modal',
      props: {
        value: storeData.visible,
        title: GlobalConfig.i18n('vxe.export.expTitle'),
        width: 660,
        fixed: true,
        footerHide: true,
        maxHeight: 500,
        loading: this.loading
      },
      on: {
        input (value) {
          storeData.visible = value
        }
      }
    }, [
      h('Tabs', {
        class: 'vxe-export--panel',
        props: {
          animated: false,
          value: tabValue
        }
      },
      tabs.map(item => {
        // 是否显示tab
        if (storeData.visible) {
          return h('z-tab-pane', {
            props: {
              label: item.label,
              name: item.value
            }
          },
          [
            h('export-' + item.value, {
              props: {
                defaultOptions: this.defaultOptions,
                storeData: this.storeData,
                parent: this.$parent
              }
            })
          ])
        }
      })
      )
    ])
  },
  mounted: function () {
  }
}
