import api from './api.js'
import GlobalConfig from 'vxe-table/lib/conf'
export default {
  name: 'export-online',
  props: {
    defaultOptions: Object,
    storeData: Object,
    parent: Object
  },
  data () {
    return {
      loading: false,
      typeList: [
        {
          text: this.$t('framework.component.vxeTblExport.text.exportCur'),
          label: 'cur'
        },
        {
          text: this.$t('framework.component.vxeTblExport.text.exportAll'),
          label: 'all'
        }
      ],
      hideList: [
        {
          text: this.$t('common.option.yes'),
          label: 'yes'
        },
        {
          text: this.$t('common.option.no'),
          label: 'no'
        }
      ],
      options: {
        filename: '',
        exportVersion: '2003',
        expType: 'cur',
        expHide: 'yes'
      },
      selectList: [
        {
          label: '2003',
          value: '2003',
          name: 'xls'
        },
        {
          label: '2007',
          value: '2007',
          name: 'xlsx'
        },
        {
          label: this.$t('framework.component.vxeTblExport.label.pdf'),
          value: 'pdf',
          name: 'pdf'
        },
        {
          label: this.$t('framework.component.vxeTblExport.label.pdfRotate'),
          value: 'pdfRotate',
          name: 'pdf'
        }
      ]
    }
  },
  computed: {
    // selectList: function () {
    //   return this.storeData.typeList
    // }
  },
  render (h) {
    const {options, selectList, hideList, typeList, exportEvent} = this
    let exportConfig = this.parent.exportConfig
    let expType = ''
    if (exportConfig.type) {
      // options.exportVersion = exportConfig.type
      expType = options.exportVersion
    }

    return h('z-form',
      {
        class: 'per-center m-t-30',
        props: {
          labelWidth: 100
        }
      },
      [
        h('z-form-item', {
          class: 'm-t-30',
          props: {
            label: GlobalConfig.i18n('vxe.export.expName')
          }
        }, [

          h('z-input', {
            ref: 'filename',
            props: {
              value: options.filename,
              type: 'text',
              clearable: true,
              placeholder: GlobalConfig.i18n('vxe.export.expNamePlaceholder')
            },
            on: {
              input (value) {
                options.filename = value
              }
            }
          })
        ]),
        h('z-form-item',
          {
            class: 'm-t-30',
            props: {
              label: this.$t('framework.component.vxeTblExport.label.exportVersion')
            }
          },
          [
            h('z-select', {
              props: {
                value: expType
              },
              on: {
                input (value) {
                  expType = value
                  options.exportVersion = value
                }
              }
            }, selectList.map(item => {
              return h('z-option', {
                props: {
                  value: item.value,
                  label: item.label
                }
              })
            })
            )
          ]),
        h('z-form-item',
          {
            props: {
              label: this.$t('framework.component.vxeTblExport.label.exportMethod')
            }
          },
          [
            h('z-radio-group', {
              props: {
                type: 'button',
                value: options.expType
              },
              on: {
                input (value) {
                  options.expType = value
                }
              }
            },
            typeList.map(item => {
              return h('z-radio', {
                props: {
                  label: item.label
                }
              }, item.text)
            })
            )
          ]),

        h('z-form-item',
          {
            props: {
              type: 'button',
              label: this.$t('framework.component.vxeTblExport.label.exportHidenCol')
            }
          },
          [
            h('z-radio-group', {
              props: {
                type: 'button',
                value: options.expHide
              },
              on: {
                input (value) {
                  options.expHide = value
                }
              }
            },
            hideList.map(item => {
              return h('z-radio', {
                props: {
                  label: item.label
                }
              }, item.text)
            })
            )
          ]),
        h('z-form-item', {
        }, [
          h('z-button', {
            props: {
              type: 'primary'
            },
            on: {
              click: exportEvent
            }
          }, this.$t('framework.component.vxeTblExport.text.export'))
        ])
      ])
  },
  methods: {
    exportEvent: function () {
      // 列配置
      let columnConfigs = this.parent.getTableColumn().fullColumn
      let colModels = []
      let colNames = []
      columnConfigs.forEach(item => {
        if (item.property) {
          // 如果导出隐藏列
          if (this.options.expHide === 'yes') {
            colModels.push(item.property)
            colNames.push(item.title)
          } else {
            if (item.visible) {
              colModels.push(item.property)
              colNames.push(item.title)
            }
          }
        }
      })
      // 导出配置
      let expConfig = this.parent.exportConfig
      // 请求路径
      let path = expConfig.exportOnlinePath
      let postDataObj = {}
      if (expConfig.postData) {
        postDataObj = expConfig.postData()
      }
      if (!path) {
        alert(this.$t('framework.component.vxeTblExport.alert.addExportOnlinePath'))
        return
      }
      // 请求类型
      let action = expConfig.exportOnlineAction ? expConfig.exportOnlineAction : 'post'
      let config = {
        method: action
      }
      // 导出方式
      let pageEl = this.parent.$parent.$el.querySelector('.vxe-pager').__vue__
      if (this.options.expType === 'all') {
        this.options.rows = pageEl.total
        this.options.page = 1
      } else {
        // 导出当前页
        this.options.rows = pageEl.pageSize
        this.options.page = pageEl.currentPage
      }
      // 导出版本判断
      let filename = ''
      if (this.options.filename) {
        filename = this.options.filename
      } else {
        filename = new Date().getTime()
      }
      let list = this.selectList
      for (let i = 0; i < list.length; i++) {
        if (this.options.exportVersion === list[i].value) {
          filename = this.options.filename ? this.options.filename + '.' + list[i].name : new Date().getTime() + '.' + list[i].name
        }
      }
      let data = {
        exportHttpData: {
          codeMappingKey: '[]',
          codeMappingKeyCol: '[]',
          codeMappingSeparator: '[]',
          codeTableData: '{}',
          colDateCode: '{}',
          colModel: JSON.stringify(colModels),
          colNames: JSON.stringify(colNames),
          colRelation: '[]',
          exportFlag: '1',
          exportHideCol: this.options.expHide,
          exportMode: this.options.expType,
          exportVersion: this.options.exportVersion,
          footData: '',
          groupHeader: '[]',
          queryMethod: path,
          rowsReader: 'rows',
          udReader: 'userdata'
        },
        page: this.options.page,
        rows: this.options.rows
      }
      let paramData = Object.assign(postDataObj, data)

      api.download(path, paramData, config).then(function (res) {
        if (typeof window.chrome !== 'undefined') {
          // Chrome version
          let blob = new Blob([res.data])
          let downloadElement = document.createElement('a')
          let href = window.URL.createObjectURL(blob) // 创建下载的链接
          downloadElement.href = href
          downloadElement.download = filename // 下载后文件名
          document.body.appendChild(downloadElement)
          downloadElement.click() // 点击下载
          document.body.removeChild(downloadElement) // 下载完成移除元素
          window.URL.revokeObjectURL(href) // 释放掉blob对象
        } else if (typeof window.navigator.msSaveBlob !== 'undefined') {
          // IE version
          let blob = new Blob([res.data], { type: 'application/force-download' })
          window.navigator.msSaveBlob(blob, filename)
        } else {
          // Firefox version
          let file = new File([res.data], filename, { type: 'application/force-download' })
          window.open(URL.createObjectURL(file))
        }
      })
    }
  },
  mounted: function () {
  }
}
