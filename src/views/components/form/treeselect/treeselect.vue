<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-07 19:54:28
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <z-treeselect :multiple="true" :options="options1" placeholder="Select your favourite(s)..."
                v-model="value1" />
            <div class="example-desc">
                <header class="example-header"><span>基本功能</span></header>
            </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo1"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
     <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <div>
              <z-treeselect name="demo" :multiple="multiple" :clearable="clearable"
                  :searchable="searchable" :disabled="disabled" :open-on-click="openOnClick"
                  :open-on-focus="openOnFocus" :clear-on-select="clearOnSelect"
                  :close-on-select="closeOnSelect" :always-open="alwaysOpen"
                  :append-to-body="appendToBody" :options="options2" :limit="3" :max-height="200"
                  v-model="value2" />
              <pre class="result">{{ value2 }}</pre>
              <p>
                  <label>
                      <input type="checkbox" v-model="multiple">Multi-select
                  </label>
                  <label>
                      <input type="checkbox" v-model="clearable">Clearable
                  </label>
                  <label>
                      <input type="checkbox" v-model="searchable">Searchable
                  </label>
                  <label>
                      <input type="checkbox" v-model="disabled">Disabled
                  </label>
              </p>
              <p>
                  <label>
                      <input type="checkbox" v-model="openOnClick">Open on click
                  </label>
                  <label>
                      <input type="checkbox" v-model="openOnFocus">Open on focus
                  </label>
              </p>
              <p>
                  <label>
                      <input type="checkbox" v-model="clearOnSelect">Clear on select
                  </label>
                  <label>
                      <input type="checkbox" v-model="closeOnSelect">Close on select
                  </label>
              </p>
              <p>
                  <label>
                      <input type="checkbox" v-model="alwaysOpen">Always open
                  </label>
                  <label>
                      <input type="checkbox" v-model="appendToBody">Append to body
                  </label>
              </p>
              <div class="example-desc">
                  <header class="example-header"><span>更多功能</span></header>
              </div>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo2"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
     <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-treeselect :multiple="true" :options="options3" :load-options="loadOptions3"
              placeholder="Try expanding any folder option..." v-model="value3" />
          <div class="example-desc">
              <header class="example-header"><span>延迟加载</span></header>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo3"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
     <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-treeselect :load-options="loadOptions14" :options="options14"
              :auto-load-root-options="false" :multiple="true" placeholder="Open the menu..." />
          <div class="example-desc">
              <header class="example-header"><span>延迟加载2</span></header>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo14"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
     <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <z-treeselect :multiple="true" :async="true" :load-options="loadOptions" />
            <div class="example-desc">
                <header class="example-header"><span>异步搜索</span></header>
            </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo4"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
     <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-treeselect :multiple="true" :options="options5" :flat="true"
              :sort-value-by="sortValueBy5" :default-expand-level="1"
              placeholder="Try selecting some options." v-model="value5" />
          <pre class="result">{{ value5 }}</pre>
          <p>
              <strong>Sort value by:</strong>
          </p>
          <p class="options">
              <label>
                  <input type="radio" value="ORDER_SELECTED" v-model="sortValueBy5">Order selected
              </label>
              <label>
                  <input type="radio" value="LEVEL" v-model="sortValueBy5">Level
              </label>
              <label>
                  <input type="radio" value="INDEX" v-model="sortValueBy5">Index
              </label>
          </p>
          <div class="example-desc">
              <header class="example-header"><span>平面模式和排序值</span></header>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo5"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
     <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <z-treeselect :multiple="true" :options="options6" :value-consists-of="valueConsistsOf"
              v-model="value6" />
          <pre class="result">{{ value6 }}</pre>
          <p><strong>Value consists of:</strong></p>
          <p class="options">
              <label><input type="radio" value="ALL" v-model="valueConsistsOf">All</label><br>
              <label><input type="radio" value="BRANCH_PRIORITY" v-model="valueConsistsOf">Branch
                  priority</label><br>
              <label><input type="radio" value="LEAF_PRIORITY" v-model="valueConsistsOf">Leaf
                  priority</label><br>
              <label><input type="radio" value="ALL_WITH_INDETERMINATE" v-model="valueConsistsOf">All
                  with indeterminate</label>
          </p>
          <header class="example-header"><span>防止价值组合</span></header>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo6"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
     <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-treeselect :options="options1" :disable-branch-nodes="true" :show-count="true"
              placeholder="Where are you from?" />
          <header class="example-header"><span>禁用分支节点</span></header>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo7"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
     <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-treeselect :options="options1" :multiple="true" :flatten-search-results="true"
              placeholder="Where are you from?" />
          <header class="example-header"><span>展平搜索结果</span></header>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo13"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-treeselect :multiple="true" :options="options8" :value="value8" />
          <header class="example-header"><span>禁用项目选择</span></header>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo8"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <z-treeselect :multiple="true" :options="options9" :disable-branch-nodes="true"
              v-model="value9" search-nested />
          <header class="example-header"><span>嵌套搜索</span></header>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo9"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
  <z-card bordered dis-hover class="m-t-15">
    <z-row :gutter="15">
      <z-col span="12">
        <z-treeselect :options="options10" :value="value10" :normalizer="normalizer" />
        <header class="example-header"><span>自定义键名称</span></header>
      </z-col>
        <z-col span="12">
          <z-code-editor :content="demo10"></z-code-editor>
      </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
    <z-row :gutter="15">
      <z-col span="12">
        <z-treeselect :options="options11" :value="value11" :searchable="false" :show-count="true"
            :default-expand-level="1">
            <label slot="option-label"
                slot-scope="{ node, shouldShowCount, count, labelClassName, countClassName }"
                :class="labelClassName">
                {{ node.isBranch ? 'Branch' : 'Leaf' }}: {{ node.label }}
                <span v-if="shouldShowCount" :class="countClassName">({{ count }})</span>
            </label>
        </z-treeselect>
        <header class="example-header"><span>自定义选项标签 </span></header>
      </z-col>
        <z-col span="12">
          <z-code-editor :content="demo11"></z-code-editor>
      </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
    <z-row :gutter="15">
      <z-col span="12">
         <z-treeselect :options="options12" :value="value12" :multiple="multiple12">
            <div slot="value-label" slot-scope="{ node }">{{ node.raw.customLabel }}</div>
        </z-treeselect>
        <p>
            <label>
                <input type="checkbox" v-model="multiple12">Multi-select
            </label>
        </p>
        <header class="example-header"><span>自定义值标签 </span></header>
      </z-col>
        <z-col span="12">
          <z-code-editor :content="demo12"></z-code-editor>
      </z-col>
    </z-row>
  </z-card>
</div>
</template>

<script>
var LOAD_CHILDREN_OPTIONS = require('zview')
var LOAD_ROOT_OPTIONS = require('zview')
var ASYNC_SEARCH = require('zview')
// eslint-disable-next-line no-unused-vars
var ORDER_SELECTED = require('zview')
const simulateAsyncOperation = fn => {
  setTimeout(fn, 2000)
}
// eslint-disable-next-line no-undef
const sleep = d => new Promise(resolve => setTimeout(r, d))
let called = false

export default {
  name: 'cpTreeselect',
  data: function () {
    return {
      value1: [],
      options1: [
        {
          id: 'fruits',
          label: 'Fruits',
          children: [
            {
              id: 'apple',
              label: 'Apple 🍎',
              isNew: true
            },
            {
              id: 'grapes',
              label: 'Grapes 🍇'
            },
            {
              id: 'pear',
              label: 'Pear 🍐'
            },
            {
              id: 'strawberry',
              label: 'Strawberry 🍓'
            },
            {
              id: 'watermelon',
              label: 'Watermelon 🍉'
            }
          ]
        },
        {
          id: 'vegetables',
          label: 'Vegetables',
          children: [
            {
              id: 'corn',
              label: 'Corn 🌽'
            },
            {
              id: 'carrot',
              label: 'Carrot 🥕'
            },
            {
              id: 'eggplant',
              label: 'Eggplant 🍆'
            },
            {
              id: 'tomato',
              label: 'Tomato 🍅'
            }
          ]
        }
      ],
      multiple: true,
      clearable: true,
      searchable: true,
      disabled: false,
      openOnClick: true,
      openOnFocus: false,
      clearOnSelect: true,
      closeOnSelect: false,
      alwaysOpen: false,
      appendToBody: false,
      value2: ['a'],
      options2: this.generateOptions(2, 3),
      value3: null,
      options3: [
        {
          id: 'success',
          label: 'With children',
          // Declare an unloaded branch node.
          children: null
        },
        {
          id: 'no-children',
          label: 'With no children',
          children: null
        },
        {
          id: 'failure',
          label: 'Demonstrates error handling',
          children: null
        }
      ],
      options14: null,
      value5: ['c', 'aaa', 'bb'],
      options5: this.generateOptions(3),
      sortValueBy5: 'ORDER_SELECTED',
      value6: ['team-i'],
      valueConsistsOf: 'BRANCH_PRIORITY',
      options6: [
        {
          id: 'company',
          label: 'Company 🏢',
          children: [
            {
              id: 'team-i',
              label: 'Team I 👥',
              children: [
                {
                  id: 'person-a',
                  label: 'Person A 👱'
                },
                {
                  id: 'person-b',
                  label: 'Person B 🧔'
                }
              ]
            },
            {
              id: 'team-ii',
              label: 'Team II 👥',
              children: [
                {
                  id: 'person-c',
                  label: 'Person C 👳'
                },
                {
                  id: 'person-d',
                  label: 'Person D 👧'
                }
              ]
            },
            {
              id: 'person-e',
              label: 'Person E 👩'
            }
          ]
        }
      ],
      options8: [
        {
          id: 'folder',
          label: 'Normal Folder',
          children: [
            {
              id: 'disabled-checked',
              label: 'Checked',
              isDisabled: true
            },
            {
              id: 'disabled-unchecked',
              label: 'Unchecked',
              isDisabled: true
            },
            {
              id: 'item-1',
              label: 'Item'
            }
          ]
        },
        {
          id: 'disabled-folder',
          label: 'Disabled Folder',
          isDisabled: true,
          children: [
            {
              id: 'item-2',
              label: 'Item'
            },
            {
              id: 'item-3',
              label: 'Item'
            }
          ]
        }
      ],
      value8: ['disabled-checked'],
      value9: [],
      options9: [
        {
          id: 'm',
          label: 'McDonalds',
          children: [
            {
              id: 'm-fries',
              label: 'French Fries'
            },
            {
              id: 'm-cheeseburger',
              label: 'Cheeseburger'
            },
            {
              id: 'm-white-cheedar-burger',
              label: 'White Cheddar Burger'
            },
            {
              id: 'm-southwest-buttermilk-crispy-chicken-salad',
              label: 'Southwest Buttermilk Crispy Chicken Salad'
            },
            {
              id: 'm-cola',
              label: 'Coca-Cola®'
            },
            {
              id: 'm-chocolate-shake',
              label: 'Chocolate Shake'
            }
          ]
        },
        {
          id: 'kfc',
          label: 'KFC',
          children: [
            {
              id: 'kfc-fries',
              label: 'French Fries'
            },
            {
              id: 'kfc-chicken-litties-sandwiches',
              label: 'Chicken Litties Sandwiches'
            },
            {
              id: 'kfc-grilled-chicken',
              label: 'Grilled Chicken'
            },
            {
              id: 'kfc-cola',
              label: 'Pepsi® Cola'
            }
          ]
        },
        {
          id: 'bk',
          label: 'Burger King',
          children: [
            {
              id: 'bk-chicken-fries',
              label: 'Chicken Fries'
            },
            {
              id: 'bk-chicken-nuggets',
              label: 'Chicken Nuggets'
            },
            {
              id: 'bk-garden-side-salad',
              label: 'Garden Side Salad'
            },
            {
              id: 'bk-cheeseburger',
              label: 'Cheeseburger'
            },
            {
              id: 'bk-bacon-king-jr-sandwich',
              label: 'BACON KING™ Jr. Sandwich'
            },
            {
              id: 'bk-cola',
              label: 'Coca-Cola®'
            },
            {
              id: 'bk-oreo-chocolate-shake',
              label: 'OREO® Chocolate Shake'
            }
          ]
        }
      ],
      value10: null,
      options10: [
        {
          key: 'a',
          name: 'a',
          subOptions: [
            {
              key: 'aa',
              name: 'aa'
            }
          ]
        }
      ],
      normalizer (node) {
        return {
          id: node.key,
          label: node.name,
          children: node.subOptions
        }
      },
      value11: null,
      options11: this.generateOptions(2),
      multiple12: true,
      value12: null,
      options12: [1, 2, 3].map(i => ({
        id: i,
        label: `Label ${i}`,
        customLabel: `Custom Label ${i}`
      })),
      demo1: '<z-treeselect :multiple="true" :options="options" placeholder="Select your favourite(s)..."v-model="value" />\r' +
              '<script>\r' +
              'export default {\r' +
              '   data:function () {\r' +
              '       return{\r' +
              '            value: [],\r' +
              '            options: [\r' +
              '                {\r' +
              '                    id: "fruits",\r' +
              '                    label: "Fruits",\r' +
              '                    children: [\r' +
              '                        {\r' +
              '                            id: "apple",\r' +
              '                            label: "Apple 🍎",\r' +
              '                            isNew: true\r' +
              '                        },\r' +
              '                        {\r' +
              '                            id: "grapes",\r' +
              '                            label: "Grapes 🍇"\r' +
              '                        },\r' +
              '                        {\r' +
              '                            id: "pear",\r' +
              '                            label: "Pear 🍐"\r' +
              '                        },\r' +
              '                        {\r' +
              '                            id: "strawberry",\r' +
              '                            label: "Strawberry 🍓"\r' +
              '                        },\r' +
              '                        {\r' +
              '                            id: "watermelon",\r' +
              '                            label: "Watermelon 🍉"\r' +
              '                        }\r' +
              '                    ]\r' +
              '          }\r' +
              '   }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo2: '<z-treeselect name="demo" :multiple="multiple" :clearable="clearable" :searchable="searchable"\r' +
              '    :disabled="disabled" :open-on-click="openOnClick" :open-on-focus="openOnFocus"\r' +
              '    :clear-on-select="clearOnSelect" :close-on-select="closeOnSelect" :always-open="alwaysOpen"\r' +
              '    :append-to-body="appendToBody" :options="options" :limit="3" :max-height="200"\r' +
              '    v-model="value2" />\r' +
              '<pre class="result">{{ value2 }}</pre>\r' +
              '<p>\r' +
              '    <label>\r' +
              '        <input type="checkbox" v-model="multiple">Multi-select\r' +
              '    </label>\r' +
              '    <label>\r' +
              '        <input type="checkbox" v-model="clearable">Clearable\r' +
              '    </label>\r' +
              '    <label>\r' +
              '        <input type="checkbox" v-model="searchable">Searchable\r' +
              '    </label>\r' +
              '    <label>\r' +
              '        <input type="checkbox" v-model="disabled">Disabled\r' +
              '    </label>\r' +
              '</p>\r' +
              '<p>\r' +
              '    <label>\r' +
              '        <input type="checkbox" v-model="openOnClick">Open on click\r' +
              '    </label>\r' +
              '    <label>\r' +
              '        <input type="checkbox" v-model="openOnFocus">Open on focus\r' +
              '    </label>\r' +
              '</p>\r' +
              '<p>\r' +
              '    <label>\r' +
              '        <input type="checkbox" v-model="clearOnSelect">Clear on select\r' +
              '    </label>\r' +
              '    <label>\r' +
              '        <input type="checkbox" v-model="closeOnSelect">Close on select\r' +
              '     </label>\r' +
              ' </p>\r' +
              '<p>\r' +
              '    <label>\r' +
              '        <input type="checkbox" v-model="alwaysOpen">Always open\r' +
              '    </label>\r' +
              '    <label>\r' +
              '        <input type="checkbox" v-model="appendToBody">Append to body\r' +
              '    </label>\r' +
              '</p>\r' +
              '<script>\r' +
              'export default {\r' +
              '   data:function () {\r' +
              '       return{\r' +
              '            multiple: true,\r' +
              '            clearable: true,\r' +
              '            searchable: true,\r' +
              '            disabled: false,\r' +
              '            openOnClick: true,\r' +
              '            openOnFocus: false,\r' +
              '            clearOnSelect: true,\r' +
              '            closeOnSelect: false,\r' +
              '            alwaysOpen: false,\r' +
              '            appendToBody: false,\r' +
              '            value: [ \'a\' ],\r' +
              '            options: this.generateOptions(2, 3),\r' +
              '       }\r' +
              '   },\r' +
              'methods: {\r' +
              '    generateOptions: function (maxLevel, itemsPerLevel = maxLevel) {\r' +
              '        const generate = parentId =>\r' +
              '            this.createArray(itemsPerLevel, i => {\r' +
              '                const id = parentId + String.fromCharCode(97 + i);\r' +
              '                const option = { id, label: id.toUpperCase() };\r' +
              '                if (id.length < maxLevel) option.children = generate(id);\r' +
              '                return option;\r' +
              '            });\r' +
              '        return generate("");\r' +
              '    },\r' +
              '    createArray: function (len, valueMaker) {\r' +
              '        const arr = [];\r' +
              '        let i = 0;\r' +
              '        while (i < len) arr.push(valueMaker(i++));\r' +
              '        return arr;\r' +
              '    }\r' +
              '},\r' +
              'watch: {\r' +
              '    multiple(newValue) {\r' +
              '      if (newValue) {\r' +
              '        this.value = this.value ? [ this.value ] : []\r' +
              '      } else {\r' +
              '        this.value = this.value[0]\r' +
              '      }\r' +
              '    }\r' +
              '  }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo3: '<z-treeselect :multiple="true" :options="options" :load-options="loadOptions" placeholder="Try expanding any folder option..." v-model="value3" />' +
              '<script>\r' +
              'var LOAD_CHILDREN_OPTIONS = require(\'zview\');\r' +
              'const simulateAsyncOperation = fn => {\r' +
              '    setTimeout(fn, 2000)\r' +
              '  }\r' +
              'export default {\r' +
              '   data:function () {\r' +
              '       return{\r' +
              '            value: null,\r' +
              '            options: [ {\r' +
              '            id: \'success\',\r' +
              '            label: \'With children\',\r' +
              '            // Declare an unloaded branch node.\r' +
              '            children: null,\r' +
              '            }, {\r' +
              '            id: \'no-children\',\r' +
              '            label: \'With no children\',\r' +
              '            children: null,\r' +
              '            }, {\r' +
              '            id: \'failure\',\r' +
              '            label: \'Demonstrates error handling\',\r' +
              '            children: null,\r' +
              '            }],\r' +
              '       }\r' +
              '   },\r' +
              'methods: {\r' +
              '    loadOptions: function ({ action, parentNode, callback }) {\r' +
              '        if (action === LOAD_CHILDREN_OPTIONS) {\r' +
              '            switch (parentNode.id) {\r' +
              '                case "success": {\r' +
              '                    simulateAsyncOperation(() => {\r' +
              '                        parentNode.children = [\r' +
              '                            {\r' +
              '                                id: "child",\r' +
              '                                label: "Child option"\r' +
              '                            }\r' +
              '                        ];\r' +
              '                        callback();\r' +
              '                    });\r' +
              '                    break;\r' +
              '                }\r' +
              '                case "no-children": {\r' +
              '                    simulateAsyncOperation(() => {\r' +
              '                        parentNode.children = [];\r' +
              '                        callback();\r' +
              '                    });\r' +
              '                    break;\r' +
              '                }\r' +
              '                case "failure": {\r' +
              '                    simulateAsyncOperation(() => {\r' +
              '                        callback(new Error("Failed to load options: network error."));\r' +
              '                    });\r' +
              '                    break;\r' +
              '                }\r' +
              '                default: /* empty */\r' +
              '             }\r' +
              '         }\r' +
              '     }\r' +
              '   }\r' +
              '}\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo4: '    <z-treeselect :multiple="true" :async="true" :load-options="loadOptions4" />' +
              '<script>\r' +
              'export default {\r' +
              '   data:function () {\r' +
              '       return{\r' +
              '       }\r' +
              '   },\r' +
              'methods: {\r' +
              '    loadOptions4: function ({ action, searchQuery, callback }) {\r' +
              '        if (action === ASYNC_SEARCH) {\r' +
              '            simulateAsyncOperation(() => {\r' +
              '                const options = [1, 2, 3, 4, 5].map(i => ({\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '                    id: \'${searchQuery}-${i}\',\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '                    label: \'${searchQuery}-${i}\'\r' +
              '                }))\r' +
              '                callback(null, options);\r' +
              '            })\r' +
            '           }\r' +
              '      }\r' +
              '  }\r' +
              '}\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo5: '<z-treeselect :multiple="true" :options="options5" :flat="true" :sort-value-by="sortValueBy"\r' +
              ':default-expand-level="1" placeholder="Try selecting some options." v-model="value5" />\r' +
              '<pre class="result">{{ value5 }}</pre>\r' +
              '<p>\r' +
              '      <strong>Sort value by:</strong>\r' +
              ' </p>\r' +
              '<p class="options">\r' +
              ' <label>\r' +
              '     <input type="radio" value="ORDER_SELECTED" v-model="sortValueBy">Order selected\r' +
              '</label>\r' +
              '<label>\r' +
              '      <input type="radio" value="LEVEL" v-model="sortValueBy">Level\r' +
              '</label>\r' +
              '<label>\r' +
              '    <input type="radio" value="INDEX" v-model="sortValueBy">Index\r' +
              '</label>\r' +
              '</p>\r' +
              '<script>\r' +
              'export default {\r' +
              '   data:function () {\r' +
              '       return{\r' +
              '            value5: ["c", "aaa", "bb"],\r' +
              '            options5: this.generateOptions(3),\r' +
              '            sortValueBy5: "ORDER_SELECTED"\r' +
              '       }\r' +
              '   },\r' +
              'methods: {\r' +
              '    generateOptions: function (maxLevel, itemsPerLevel = maxLevel) {\r' +
              '        const generate = parentId =>\r' +
              '            this.createArray(itemsPerLevel, i => {\r' +
              '                const id = parentId + String.fromCharCode(97 + i);\r' +
              '                const option = { id, label: id.toUpperCase() };\r' +
              '                if (id.length < maxLevel) option.children = generate(id);\r' +
              '                return option;\r' +
              '            });\r' +
              '        return generate("");\r' +
              '    },\r' +
              '    createArray: function (len, valueMaker) {\r' +
              '        const arr = [];\r' +
              '        let i = 0;\r' +
              '        while (i < len) arr.push(valueMaker(i++));\r' +
              '        return arr;\r' +
              '    }\r' +
              '}\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo6: '<z-treeselect :multiple="true" :options="options6" :value-consists-of="valueConsistsOf"\r' +
              '    v-model="value6" />\r' +
              '<pre class="result">{{ value6 }}</pre>\r' +
              '<p><strong>Value consists of:</strong></p>\r' +
              '<p class="options">\r' +
              '    <label><input type="radio" value="ALL" v-model="valueConsistsOf">All</label><br>\r' +
              '    <label><input type="radio" value="BRANCH_PRIORITY" v-model="valueConsistsOf">Branch priority</label><br>\r' +
              '    <label><input type="radio" value="LEAF_PRIORITY" v-model="valueConsistsOf">Leaf priority</label><br>\r' +
              '    <label><input type="radio" value="ALL_WITH_INDETERMINATE" v-model="valueConsistsOf">All with indeterminate</label>\r' +
              '</p>\r' +
              '<script>\r' +
              'export default {\r' +
              '   data:function () {\r' +
              '       return{\r' +
              ' value6: ["team-i"],\r' +
              ' valueConsistsOf: "BRANCH_PRIORITY",\r' +
              ' options6: [\r' +
              '    {\r' +
              '        id: "company",\r' +
              '        label: "Company 🏢",\r' +
              '        children: [\r' +
              '            {\r' +
              '                id: "team-i",\r' +
              '                label: "Team I 👥",\r' +
              '                children: [\r' +
              '                    {\r' +
              '                        id: "person-a",\r' +
              '                        label: "Person A 👱"\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: "person-b",\r' +
              '                        label: "Person B 🧔"\r' +
              '                    }\r' +
              '                ]\r' +
              '            },\r' +
              '            {\r' +
              '                id: "team-ii",\r' +
              '                label: "Team II 👥",\r' +
              '                children: [\r' +
              '                    {\r' +
              '                        id: "person-c",\r' +
              '                        label: "Person C 👳"\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: "person-d",\r' +
              '                        label: "Person D 👧"\r' +
              '                    }\r' +
              '                ]\r' +
              '            },\r' +
              '            {\r' +
              '                id: "person-e",\r' +
              '                label: "Person E 👩"\r' +
              '              }\r' +
              '            ]\r' +
              '          }\r' +
              '       ],\r' +
              '    }\r' +
              ' }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo7: '<z-treeselect :options="options1" :disable-branch-nodes="true" :show-count="true" placeholder="Where are you from?" />',
      demo13: '<z-treeselect :options="options1" :multiple="true" :flatten-search-results="true" placeholder="Where are you from?" />',
      demo8: '<z-treeselect :multiple="true" :options="options8" :value="value8" />\r' +
              '<script>\r' +
              'export default {\r' +
              '   data:function () {\r' +
              '      return {\r' +
              '        options8: [\r' +
              '            {\r' +
              '                id: "folder",\r' +
              '                label: "Normal Folder",\r' +
              '                children: [\r' +
              '                    {\r' +
              '                        id: "disabled-checked",\r' +
              '                        label: "Checked",\r' +
              '                        isDisabled: true\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: "disabled-unchecked",\r' +
              '                        label: "Unchecked",\r' +
              '                        isDisabled: true\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: "item-1",\r' +
              '                        label: "Item"\r' +
              '                    }\r' +
              '                ]\r' +
              '            },\r' +
              '            {\r' +
              '                id: "disabled-folder",\r' +
              '                label: "Disabled Folder",\r' +
              '                isDisabled: true,\r' +
              '                children: [\r' +
              '                    {\r' +
              '                        id: "item-2",\r' +
              '                        label: "Item"\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: "item-3",\r' +
              '                        label: "Item"\r' +
              '                    }\r' +
              '                ]\r' +
              '            }\r' +
              '        ],\r' +
              '        value8: ["disabled-checked"]\r' +
              '      }\r' +
              '     }\r' +
              '   }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo9: '<z-treeselect :multiple="true" :options="options9" :disable-branch-nodes="true" v-model="value9" search-nested />r' +
              '<script>\r' +
              'export default {\r' +
              '  data:function () {\r' +
              '      return {\r' +
              '        value9: [],\r' +
              '        options9: [\r' +
              '            {\r' +
              '                id: "m",\r' +
              '                label: "McDonalds",\r' +
              '                children: [\r' +
              '                    {\r' +
              '                        id: "m-fries",\r' +
              '                        label: "French Fries"\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: "m-cheeseburger",\r' +
              '                       label: "Cheeseburger"\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: "m-white-cheedar-burger",\r' +
              '                        label: "White Cheddar Burger"\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: "m-southwest-buttermilk-crispy-chicken-salad",\r' +
              '                        label: "Southwest Buttermilk Crispy Chicken Salad"\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: "m-cola",\r' +
              '                       label: "Coca-Cola®"\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: "m-chocolate-shake",\r' +
              '                        label: "Chocolate Shake"\r' +
              '                    }\r' +
              '                ]\r' +
              '            },\r' +
              '            {\r' +
              '                id: "kfc",\r' +
              '               label: "KFC",\r' +
              '               children: [\r' +
              '                    {\r' +
              '                        id: "kfc-fries",\r' +
              '                        label: "French Fries"\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: "kfc-chicken-litties-sandwiches",\r' +
              '                        label: "Chicken Litties Sandwiches"\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: "kfc-grilled-chicken",\r' +
              '                        label: "Grilled Chicken"\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: "kfc-cola",\r' +
              '                        label: "Pepsi® Cola"\r' +
              '                    }\r' +
              '                ]\r' +
              '           },\r' +
              '            {\r' +
              '                id: "bk",\r' +
              '                label: "Burger King",\r' +
              '                children: [\r' +
              '                    {\r' +
              '                        id: "bk-chicken-fries",\r' +
              '                        label: "Chicken Fries"\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: "bk-chicken-nuggets",\r' +
              '                        label: "Chicken Nuggets"\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: "bk-garden-side-salad",\r' +
              '                        label: "Garden Side Salad"\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: "bk-cheeseburger",\r' +
              '                        label: "Cheeseburger"\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: "bk-bacon-king-jr-sandwich",\r' +
              '                        label: "BACON KING™ Jr. Sandwich"\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: "bk-cola",\r' +
              '                        label: "Coca-Cola®"\r' +
              '                    },\r' +
              '                    {\r' +
              '                        id: "bk-oreo-chocolate-shake",\r' +
              '                        label: "OREO® Chocolate Shake"\r' +
              '                    }\r' +
              '                ]\r' +
              '            }\r' +
              '        ]\r' +
              '      }\r' +
              '     }\r' +
              '   }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo10: '<z-treeselect :options="options10" :value="value10" :normalizer="normalizer" />\r' +
              '<script>\r' +
              'export default {\r' +
              '  data:function () {\r' +
              '     return {\r' +
              '        value10: null,\r' +
              '        options10: [\r' +
              '            {\r' +
              '                key: "a",\r' +
              '                name: "a",\r' +
              '                subOptions: [\r' +
              '                    {\r' +
              '                        key: "aa",\r' +
              '                        name: "aa"\r' +
              '                    }\r' +
              '                 ]\r' +
              '             }\r' +
              '        ],\r' +
              '        normalizer(node) {\r' +
              '            return {\r' +
              '                id: node.key,\r' +
              '                label: node.name,\r' +
              '                children: node.subOptions\r' +
              '            }\r' +
              '        }\r' +
              '      }\r' +
              '    }\r' +
              '  }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo11: '<z-treeselect :options="options11" :value="value11" :searchable="false" :show-count="true"\r' +
              '    :default-expand-level="1">\r' +
              '    <label slot="option-label" slot-scope="{ node, shouldShowCount, count, labelClassName, countClassName }"\r' +
              '        :class="labelClassName">\r' +
              '        {{ node.isBranch ? \'Branch\' : \'Leaf\' }}: {{ node.label }}\r' +
              '        <span v-if="shouldShowCount" :class="countClassName">({{ count }})</span>\r' +
              '    </label>\r' +
              '</z-treeselect>\r' +
              '<script>\r' +
              'export default {\r' +
              '  data:function () {\r' +
              '      return {\r' +
              '        value11: null,\r' +
              '        options11: this.generateOptions(2),\r' +
              '      }\r' +
              '  }\r' +
              'methods: {\r' +
              '    generateOptions: function (maxLevel, itemsPerLevel = maxLevel) {\r' +
              '        const generate = parentId =>\r' +
              '            this.createArray(itemsPerLevel, i => {\r' +
              '                const id = parentId + String.fromCharCode(97 + i);\r' +
              '                const option = { id, label: id.toUpperCase() };\r' +
              '                if (id.length < maxLevel) option.children = generate(id);\r' +
              '                return option;\r' +
              '            });\r' +
              '        return generate("");\r' +
              '    },\r' +
              '    createArray: function (len, valueMaker) {\r' +
              '        const arr = [];\r' +
              '        let i = 0;\r' +
              '        while (i < len) arr.push(valueMaker(i++));\r' +
              '        return arr;\r' +
              '    }\r' +
              '  }\r' +
              '}\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo12: ' <z-treeselect :options="options12" :value="value12" :multiple="multiple12">\r' +
              '    <div slot="value-label" slot-scope="{ node }">{{ node.raw.customLabel }}</div>\r' +
              '</z-treeselect>\r' +
              '<p>\r' +
              '    <label>\r' +
              '        <input type="checkbox" v-model="multiple12">Multi-select\r' +
              '    </label>\r' +
              '</p>\r' +
              '<script>\r' +
              'export default {\r' +
              '  data:function () {\r' +
              '      return {\r' +
              '        multiple12: true,\r' +
              '        value12: null,\r' +
              '        options12: [ 1, 2, 3 ].map(i => ({\r' +
              '        id: i,\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '        label: `Label ${i}`,\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '        customLabel: `Custom Label ${i}`,\r' +
              '        })),\r' +
              '      }\r' +
              '     }\r' +
              '   }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r',
      demo14: '  <z-treeselect :load-options="loadOptions14" :options="options14" :auto-load-root-options="false" :multiple="true" placeholder="Open the menu..." />\r' +
              '<script>\r' +
              'var LOAD_CHILDREN_OPTIONS = require(\'zview\');\r' +
              'const simulateAsyncOperation = fn => {\r' +
              '    setTimeout(fn, 2000)\r' +
              '}\r' +
              'export default {\r' +
              '  data:function () {\r' +
              '      return {\r' +
              '        options: null,\r' +
              '      }\r' +
              '   },\r' +
              'methods: {\r' +
              '    async loadOptions14({ action /*, callback*/ }) {\r' +
              '        if (action === LOAD_ROOT_OPTIONS) {\r' +
              '            if (!called) {\r' +
              '                // First try: simulate an exception.\r' +
              '                 await sleep(2000); // Simulate an async operation.\r' +
              '                called = true;\r' +
              '                throw new Error("Failed to load options: test.");\r' +
              '            } else {\r' +
              '                 // Second try: simulate a successful loading.\r' +
              '                await sleep(2000);\r' +
              '                this.options = ["a", "b", "c", "d", "e"].map(id => ({\r' +
              '                    id,\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '                    label: `option-${id}`\r' +
              '                }));\r' +
              '            }\r' +
              '        }\r' +
              '    }\r' +
              '    }\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r'

    }
  },
  methods: {
    generateOptions: function (maxLevel, itemsPerLevel = maxLevel) {
      const generate = parentId =>
        this.createArray(itemsPerLevel, i => {
          const id = parentId + String.fromCharCode(97 + i)
          const option = { id, label: id.toUpperCase() }
          if (id.length < maxLevel) option.children = generate(id)
          return option
        })

      return generate('')
    },
    createArray: function (len, valueMaker) {
      const arr = []
      let i = 0
      while (i < len) arr.push(valueMaker(i++))
      return arr
    },
    loadOptions3: function ({ action, parentNode, callback }) {
      if (action === LOAD_CHILDREN_OPTIONS) {
        switch (parentNode.id) {
          case 'success': {
            simulateAsyncOperation(() => {
              parentNode.children = [
                {
                  id: 'child',
                  label: 'Child option'
                }
              ]
              callback()
            })
            break
          }
          case 'no-children': {
            simulateAsyncOperation(() => {
              parentNode.children = []
              callback()
            })
            break
          }
          case 'failure': {
            simulateAsyncOperation(() => {
              callback(new Error('Failed to load options: network error.'))
            })
            break
          }
          default: /* empty */
        }
      }
    },
    async loadOptions14 ({ action }) {
      if (action === LOAD_ROOT_OPTIONS) {
        if (!called) {
          // First try: simulate an exception.
          await sleep(2000) // Simulate an async operation.
          called = true
          throw new Error('Failed to load options: test.')
        } else {
          // Second try: simulate a successful loading.
          await sleep(2000)
          this.options = ['a', 'b', 'c', 'd', 'e'].map(id => ({
            id,
            label: `option-${id}`
          }))
        }
      }
    },
    loadOptions ({ action, searchQuery, callback }) {
      if (action === ASYNC_SEARCH) {
        simulateAsyncOperation(() => {
          const options = [1, 2, 3, 4, 5].map(i => ({
            // eslint-disable-next-line no-template-curly-in-string
            id: '${searchQuery}-${i}',
            // eslint-disable-next-line no-template-curly-in-string
            label: '${searchQuery}-${i}'
          }))
          callback(null, options)
        })
      }
    }
  },
  watch: {
    multiple (newValue) {
      if (newValue) {
        this.value = this.value ? [this.value] : []
      } else {
        this.value = this.value[0]
      }
    }
  }
}
</script>
<style scoped>
</style>
