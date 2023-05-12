import XEUtils from 'xe-utils/methods/xe-utils'
import GlobalConfig from 'vxe-table/lib/conf'
import { UtilTools } from 'vxe-table/lib/tools'
export default {
  name: 'export-local',
  props: {
    defaultOptions: Object,
    storeData: Object,
    parent: Object
  },
  data () {
    return {
      isAll: false,
      isIndeterminate: false,
      loading: false
    }
  },
  computed: {
    vSize () {
      return this.size || this.parent.size || this.parent.vSize
    },
    showSheet () {
      return ['html', 'xml', 'xlsx'].indexOf(this.defaultOptions.type) > -1
    }
  },
  render (h) {
    const { _e, isAll, isIndeterminate, showSheet, defaultOptions, storeData } = this
    const cols = []
    XEUtils.eachTree(storeData.columns, column => {
      const colTitle = UtilTools.formatText(column.getTitle(), 1)
      const isColGroup = column.children && column.children.length
      cols.push(
        h('li', {
          class: ['vxe-export--panel-column-option', `level--${column.level}`, {
            'is--group': isColGroup,
            'is--checked': column.checked,
            'is--indeterminate': column.halfChecked,
            'is--disabled': column.disabled
          }],
          attrs: {
            title: colTitle
          },
          on: {
            click: () => {
              if (!column.disabled) {
                this.changeOption(column)
              }
            }
          }
        }, [
          h('span', {
            class: 'vxe-checkbox--icon vxe-checkbox--checked-icon'
          }),
          h('span', {
            class: 'vxe-checkbox--icon vxe-checkbox--unchecked-icon'
          }),
          h('span', {
            class: 'vxe-checkbox--icon vxe-checkbox--indeterminate-icon'
          }),
          h('span', {
            class: 'vxe-checkbox--label'
          }, colTitle)
        ])
      )
    })
    return h('div', [
      h('z-form', {
        class: 'per-center',
        props: {
          labelWidth: 100
        }
      }, [
        h('z-form-item', {
          class: 'm-t-30',
          props: {
            label: GlobalConfig.i18n('vxe.export.expName')
          }
        }, [

          h('z-input', {
            ref: 'filename',
            props: {
              value: defaultOptions.filename,
              type: 'text',
              clearable: true,
              placeholder: GlobalConfig.i18n('vxe.export.expNamePlaceholder')
            },
            on: {
              input (value) {
                defaultOptions.filename = value
              }
            }
          })
        ]),
        h('z-form-item', {
          props: {
            label: GlobalConfig.i18n('vxe.export.expType')
          }
        }, [
          h('z-select', {
            props: {
              value: defaultOptions.type
            },
            on: {
              input (value) {
                defaultOptions.type = value
              }
            }
          }, storeData.typeList.map(item => {
            return h('z-option', {
              props: {
                value: item.value,
                label: GlobalConfig.i18n(item.label)
              }
            })
          }))
        ]),
        showSheet ? h('z-form-item', {
          props: {
            label: GlobalConfig.i18n('vxe.export.expSheetName')
          }
        }, [
          h('z-input', {
            props: {
              value: defaultOptions.sheetName,
              type: 'text',
              clearable: true,
              placeholder: GlobalConfig.i18n('vxe.export.expSheetNamePlaceholder')
            },
            on: {
              input (value) {
                defaultOptions.sheetName = value
              }
            }
          })
        ]) : _e(),
        h('z-form-item', {
          props: {
            label: GlobalConfig.i18n('vxe.export.expMode')
          }
        }, [
          h('z-select', {
            props: {
              value: defaultOptions.mode
            },
            on: {
              input (value) {
                defaultOptions.mode = value
              }
            }
          }, storeData.modeList.map(item => {
            return h('z-option', {
              props: {
                value: item.value,
                label: GlobalConfig.i18n(item.label)
              }
            })
          }))
        ]),
        h('z-form-item', {
          props: {
            label: GlobalConfig.i18n('vxe.export.expColumn')
          }
        }, [

          h('div', {
            class: 'vxe-export--panel-column'
          }, [
            h('ul', {
              class: 'vxe-export--panel-column-header'
            }, [
              h('li', {
                class: ['vxe-export--panel-column-option', {
                  'is--checked': isAll,
                  'is--indeterminate': isIndeterminate
                }],
                attrs: {
                  title: GlobalConfig.i18n('vxe.table.allTitle')
                },
                on: {
                  click: this.allColumnEvent
                }
              }, [
                h('span', {
                  class: 'vxe-checkbox--icon vxe-checkbox--checked-icon'
                }),
                h('span', {
                  class: 'vxe-checkbox--icon vxe-checkbox--unchecked-icon'
                }),
                h('span', {
                  class: 'vxe-checkbox--icon vxe-checkbox--indeterminate-icon'
                }),
                h('span', {
                  class: 'vxe-checkbox--label'
                }, GlobalConfig.i18n('vxe.export.expCurrentColumn'))
              ])
            ]),
            h('ul', {
              class: 'vxe-export--panel-column-body'
            }, cols)
          ])
        ]),
        h('z-form-item', {
          props: {
            label: GlobalConfig.i18n('vxe.export.allTitle')
          }
        }, [

          h('z-checkbox', {
            props: {
              value: defaultOptions.isHeader,
              title: GlobalConfig.i18n('vxe.export.expHeaderTitle')
            },
            on: {
              input (value) {
                defaultOptions.isHeader = value
              }
            }
          }, GlobalConfig.i18n('vxe.export.expOptHeader')),
          h('z-checkbox', {
            props: {
              value: defaultOptions.isFooter,
              disabled: !storeData.hasFooter,
              title: GlobalConfig.i18n('vxe.export.expFooterTitle')
            },
            on: {
              input (value) {
                defaultOptions.isFooter = value
              }
            }
          }, GlobalConfig.i18n('vxe.export.expOptFooter')),
          h('z-checkbox', {
            props: {
              value: defaultOptions.original,
              title: GlobalConfig.i18n('vxe.export.expOriginalTitle')
            },
            on: {
              input (value) {
                defaultOptions.original = value
              }
            }
          }, GlobalConfig.i18n('vxe.export.expOptOriginal'))

        ]),
        h('z-form-item', {
        }, [
          defaultOptions.isPrint ? h('z-button', {
            props: {
              type: 'primary'
            },
            on: {
              click: this.printEvent
            }
          }, GlobalConfig.i18n('vxe.export.expPrint')) : null,
          h('z-button', {
            props: {
              type: 'primary'
            },
            on: {
              click: this.exportEvent
            }
          }, GlobalConfig.i18n('vxe.export.expConfirm'))
        ])
      ])
    ])
  },
  methods: {
    changeOption (column) {
      const isChecked = !column.checked
      XEUtils.eachTree([column], (item) => {
        item.checked = isChecked
        item.halfChecked = false
      })
      this.handleOptionCheck(column)
      this.checkStatus()
    },
    handleOptionCheck (column) {
      const matchObj = XEUtils.findTree(this.storeData.columns, item => item === column)
      if (matchObj && matchObj.parent) {
        const { parent } = matchObj
        if (parent.children && parent.children.length) {
          parent.checked = parent.children.every(column => column.checked)
          parent.halfChecked = !parent.checked && parent.children.some(column => column.checked || column.halfChecked)
          this.handleOptionCheck(parent)
        }
      }
    },
    checkStatus () {
      const columns = this.storeData.columns
      this.isAll = columns.every(column => column.disabled || column.checked)
      this.isIndeterminate = !this.isAll && columns.some(column => !column.disabled && (column.checked || column.halfChecked))
    },
    allColumnEvent () {
      const isAll = !this.isAll
      XEUtils.eachTree(this.storeData.columns, column => {
        if (!column.disabled) {
          column.checked = isAll
          column.halfChecked = false
        }
      })
      this.isAll = isAll
      this.checkStatus()
    },
    showEvent () {
      this.$nextTick(() => {
        this.$refs.filename.focus()
      })
      this.checkStatus()
    },
    getExportOption () {
      const { storeData, defaultOptions } = this
      const checkColumns = []
      XEUtils.eachTree(storeData.columns, column => {
        const isColGroup = column.children && column.children.length
        if (!isColGroup && column.checked) {
          checkColumns.push(column)
        }
      })
      return Object.assign({
        columns: checkColumns
      }, defaultOptions)
    },
    // 打印
    printEvent () {
      const $xetable = this.parent
      this.storeData.visible = false
      $xetable.print(Object.assign({}, $xetable.printOpts, this.getExportOption()))
    },
    // 导出
    exportEvent () {
      const $xetable = this.parent
      this.loading = true
      $xetable.exportData(Object.assign({}, $xetable.exportOpts, this.getExportOption())).then(() => {
        this.loading = false
        this.storeData.visible = false
      })
    }
  }
}
