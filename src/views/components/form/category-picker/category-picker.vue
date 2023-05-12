<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-07 19:39:40
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
      <p>值：{{value}} <z-button @click="getFullData">获取完整数据</z-button></p>
      <p><z-switch v-model="multiple" @change="changeValue">多选</z-switch></p>
      <p><z-switch v-model="showAllLevels" @change="changeValue">显示所有的层级</z-switch></p>
      <p><z-switch v-model="showChildCount">展示子集数量</z-switch></p>
      <p style="width:300px"><z-category-picker ref="CategoryPicker" :option="param" :type="type"
      :showAllLevels="showAllLevels" :multiple="multiple" :showChildCount="showChildCount" v-model="value"></z-category-picker></p>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
     <z-code-editor :content="demo1"></z-code-editor>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpCategoryPicker',
  data: function () {
    return {
      value: 330185,
      type: 'object',
      showChildCount: false,
      showAllLevels: true,
      multiple: true,
      param: {
        keyName: 'id',
        titleName: 'title',
        dataMode: 'list',
        parentName: 'parentId',
        datas: [],
        // 单选控制
        selectable (data, level) {
          // return !data.children || data.children.length == 0;
          return true
        },
        // 多选控制
        checkable (data, level) {
          // return !data.children || data.children.length == 0;
          return true
        }
      },
      demo1: '<div>\r' +
              '     <p>值：{{value}} <z-button @click="getFullData">获取完整数据</z-button></p>\r' +
              '     <p><z-switch v-model="multiple" @change="changeValue">多选</z-switch></p>\r' +
              '    <p><z-switch v-model="showAllLevels" @change="changeValue">显示所有的层级</z-switch></p>\r' +
              '    <p><z-switch v-model="showChildCount">展示子集数量</z-switch></p>\r' +
              '     <p style="width:300px"><z-category-picker ref="CategoryPicker" :option="param" :type="type"\r' +
              '     :showAllLevels="showAllLevels" :multiple="multiple" :showChildCount="showChildCount" v-model="value"></z-category-picker></p>\r' +
              ' </div>\r' +
              ' <script>\r' +
              '     export default{\r' +
              '         data: function () {\r' +
              '           return {\r' +
              '             value: 330185,\r' +
              '            type: \'object\',\r' +
              '             showChildCount: false,\r' +
              '             showAllLevels: true,\r' +
              '             multiple: true,\r' +
              '             param: {\r' +
              '               keyName: \'id\',\r' +
              '              titleName: \'title\',\r' +
              '               dataMode: \'list\',\r' +
              '               parentName: \'parentId\',\r' +
              '               datas: [],\r' +
              '               selectable(data, level) {\r' +
              '                 return true\r' +
              '               },\r' +
              '               checkable(data, level) {\r' +
              '                 return true\r' +
              '               }\r' +
              '             }\r' +
              '           }\r' +
              '         },\r' +
              '        mounted() {\r' +
              '           var test = [\r' +
              '             {\r' +
              '               id: "01",\r' +
              '               parentId: "1",\r' +
              '               pinyinTitle: "111",\r' +
              '               title: "111",\r' +
              '               traditionalTitle: "111"\r' +
              '             },\r' +
              '             {\r' +
              '               id: "02",\r' +
              '               parentId: "01",\r' +
              '              pinyinTitle: "222",\r' +
              '              title: "222",\r' +
              '               traditionalTitle: "222"\r' +
              '             },\r' +
              '             {\r' +
              '               id: "03",\r' +
              '              parentId: "02",\r' +
              '               pinyinTitle: "333",\r' +
              '              title: "333",\r' +
              '              traditionalTitle: "333"\r' +
              '             },\r' +
              '             {\r' +
              '               id: "04",\r' +
              '              parentId: "1",\r' +
              '               pinyinTitle: "444",\r' +
              '              title: "444",\r' +
              '              traditionalTitle: "444"\r' +
              '             },\r' +
              '             {\r' +
              '               id: "05",\r' +
              '              parentId: "04",\r' +
              '               pinyinTitle: "555",\r' +
              '               title: "555",\r' +
              '              traditionalTitle: "555"\r' +
              '            },\r' +
              '             {\r' +
              '               id: "06",\r' +
              '              parentId: "05",\r' +
              '              pinyinTitle: "666",\r' +
              '              title: "6666",\r' +
              '              traditionalTitle: "666"\r' +
              '            }\r' +
              '           ]\r' +
              '           this.param.datas = test\r' +
              '         },\r' +
              '         methods: {\r' +
              '           getFullData() {\r' +
              '             console.log(this.$refs.CategoryPicker.getFullData());\r' +
              '           },\r' +
              '           changeValue() {\r' +
              '             if (this.type == \'key\') {\r' +
              '               this.value = this.multiple ? [110117, 110101] : 110101;\r' +
              '             } else {\r' +
              '               this.value = this.multiple ? [{ \'id\': \'310101\', \'title\': \'黄浦\', \'traditionalTitle\': \'黃浦\', \'pinyinTitle\': \'Huangpu\', \'parentId\': 310000 }, { \'id\': \'310104\',\'title\': \'徐汇\', \'traditionalTitle\': \'徐匯\', \'pinyinTitle\': \'Xuhui\', \'parentId\': 310000 }] : { \'id\': \'340102\', \'title\': \'瑶海\', \'traditionalTitle\': \'瑤海\', \'pinyinTitle\': \'Yaohai\', \'parentId\': \'340100\' };\r' +
              '             }\r' +
              '          }\r' +
              '        }\r' +
              '       }\r' +
              // eslint-disable-next-line no-useless-escape
              ' <\/script>\r'
    }
  },
  mounted () {
    var test = [
      {
        id: '01',
        parentId: '1',
        pinyinTitle: '111',
        title: '111',
        traditionalTitle: '111'
      },
      {
        id: '02',
        parentId: '01',
        pinyinTitle: '222',
        title: '222',
        traditionalTitle: '222'
      },
      {
        id: '03',
        parentId: '02',
        pinyinTitle: '333',
        title: '333',
        traditionalTitle: '333'
      },
      {
        id: '04',
        parentId: '1',
        pinyinTitle: '444',
        title: '444',
        traditionalTitle: '444'
      },
      {
        id: '05',
        parentId: '04',
        pinyinTitle: '555',
        title: '555',
        traditionalTitle: '555'
      },
      {
        id: '06',
        parentId: '05',
        pinyinTitle: '666',
        title: '6666',
        traditionalTitle: '666'
      }
    ]
    this.param.datas = test
  },
  methods: {
    getFullData () {
      console.log(this.$refs.CategoryPicker.getFullData())
    },
    changeValue () {
      if (this.type === 'key') {
        this.value = this.multiple ? [110117, 110101] : 110101
      } else {
        this.value = this.multiple ? [{ 'id': '310101', 'title': '黄浦', 'traditionalTitle': '黃浦', 'pinyinTitle': 'Huangpu', 'parentId': 310000 }, { 'id': '310104', 'title': '徐汇', 'traditionalTitle': '徐匯', 'pinyinTitle': 'Xuhui', 'parentId': 310000 }] : { 'id': '340102', 'title': '瑶海', 'traditionalTitle': '瑤海', 'pinyinTitle': 'Yaohai', 'parentId': '340100' }
      }
    }
  }
}
</script>
<style scoped>
</style>
