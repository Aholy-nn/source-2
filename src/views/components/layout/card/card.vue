<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-06 14:15:29
 * @LastEditors  : Please set LastEditors
 -->
<template>
  <div>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-card style="width:350px" bordered dis-hover :shadow="shadow">
            <p slot="title">
                <z-icon type="ios-film-outline"></z-icon>
                Classic film
            </p>
            <a href="#" slot="extra" @click.prevent="changeLimit">
                <z-icon type="ios-loop-strong"></z-icon>
                Change
            </a>
            <ul style="font-family:SimHei">
                <li v-for="(item,index) in randomMovieList" :key="index">
                    <a :href="item.url" target="_blank">{{ item.name }}</a>
                    <span>
                        <z-icon type="ios-star" v-for="n in 4" :key="n"></z-icon>
                        <z-icon type="ios-star" v-if="item.rate >= 9.5"></z-icon>
                        <z-icon type="ios-star-half" v-else></z-icon>
                        {{ item.rate }}
                    </span>
                </li>
            </ul>
        </z-card>
        <div class="example-desc">
            <header class="example-header"><span>基本用法 #</span></header>
            <div>
                <p>自定义标题、额外操作和主体内容，可以完全自由控制各个部分，也可以结合其它组件一起使用，较为灵活。</p>
                <p>2.12.0 版本开始，可以通过设置属性 title 和 icon 快速设置标题栏。</p>
            </div>
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
          <div style="background:#eee;padding: 20px">
              <z-card :bordered="false">
                  <p slot="title">No border title</p>
                  <p>Content of no border type. Content of no border type. Content of no border type.
                      Content of no border type. </p>
              </z-card>
          </div>
          <div class="example-desc">
              <header class="example-header"><span>无边框</span></header>
              <div>
                  <p>通过设置属性bordered为 false ，可以不添加边框，建议在灰色背景下使用。</p>
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
           <z-row>
                <z-col span="11">
                    <z-card>
                        <p slot="title">The standard card</p>
                        <p>Content of card</p>
                        <p>Content of card</p>
                        <p>Content of card</p>
                    </z-card>
                </z-col>
                <z-col span="11" offset="2">
                    <z-card dis-hover>
                        <p slot="title">Disable card with hover shadows</p>
                        <p>Content of card</p>
                        <p>Content of card</p>
                        <p>Content of card</p>
                    </z-card>
                </z-col>
            </z-row>
            <div class="example-desc">
                <header class="example-header"><span>禁用悬停阴影</span></header>
                <div>
                    <p>通过设置属性dis-hover来禁用鼠标悬停显示阴影的效果。</p>
                </div>
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
           <z-row style="background:#eee;padding:20px">
              <z-col span="11">
                  <z-card :bordered="false">
                      <p slot="title">Borderless card</p>
                      <p>Content of card</p>
                      <p>Content of card</p>
                      <p>Content of card</p>
                  </z-card>
              </z-col>
              <z-col span="11" offset="2">
                  <z-card shadow>
                      <p slot="title">Use a card with a shadow effect</p>
                      <p>Content of card</p>
                      <p>Content of card</p>
                      <p>Content of card</p>
                  </z-card>
              </z-col>
          </z-row>
          <div class="example-desc">
              <header class="example-header"><span>卡片阴影</span></header>
              <div>
                  <p>通过设置属性shadow来显示卡片阴影，使用该属性后，bordered和dis-hover将无效，建议在灰色背景下使用。</p>
              </div>
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
          <z-card style="width:320px">
              <div style="text-align:center">
                  <h4>Welcome to zview UI Toolkit</h4>
              </div>
          </z-card>
          <div class="example-desc">
              <header class="example-header"><span>简洁卡片</span></header>
              <div>
                  <p>只包含内容区域，没有标题。</p>
              </div>
          </div>
        </z-col>
        <z-col span="12">
            <z-code-editor :content="demo5"></z-code-editor>
        </z-col>
      </z-row>
    </z-card>
    <z-card bordered dis-hover class="m-t-15">
       <div class="demo-api">
          <div class="anchor">
              <h2 id="API">API</h2>
          </div>
          <div class="anchor">
              <h3 id="Card_props">Card props</h3>
          </div>
          <table>
              <thead>
                  <tr>
                      <th>属性</th>
                      <th>说明</th>
                      <th>类型</th>
                      <th>默认值</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>bordered</td>
                      <td>是否显示边框，建议在灰色背景下使用</td>
                      <td>Boolean</td>
                      <td>true</td>
                  </tr>
                  <tr>
                      <td>dis-hover</td>
                      <td>禁用鼠标悬停显示阴影</td>
                      <td>Boolean</td>
                      <td>false</td>
                  </tr>
                  <tr>
                      <td>shadow</td>
                      <td>卡片阴影，建议在灰色背景下使用</td>
                      <td>Boolean</td>
                      <td>false</td>
                  </tr>
                  <tr>
                      <td>padding</td>
                      <td>卡片内部间距，单位 px</td>
                      <td>Number</td>
                      <td>16</td>
                  </tr>
                  <tr>
                      <td>title</td>
                      <td>标题，2.12.0 新增</td>
                      <td>String</td>
                      <td>-</td>
                  </tr>
                  <tr>
                      <td>icon</td>
                      <td>标题前的图标，2.12.0 新增</td>
                      <td>String</td>
                      <td>-</td>
                  </tr>
                  <tr><td>to</td> <td>跳转的链接，支持 vue-router 对象</td> <td>String | Object</td> <td>-</td></tr>
                  <tr><td>replace</td> <td>路由跳转时，开启 replace 将不会向 history 添加新记录</td> <td>Boolean</td> <td>false</td></tr>
                  <tr><td>target</td> <td>相当于 a 链接的 target 属性</td> <td>String</td> <td>_self</td></tr>
                  <tr><td>append</td> <td>同 vue-router append</td> <td>Boolean</td> <td>false</td></tr>
              </tbody>
          </table>
          <div class="anchor">
              <h3 id="Card_slot">Card slot</h3>
          </div>
          <table>
              <thead>
                  <tr>
                      <th>名称</th>
                      <th>说明</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>title</td>
                      <td>自定义卡片标题，如果是简单文字，可以使用<code>&lt;p&gt;</code>标签包裹</td>
                  </tr>
                  <tr>
                      <td>extra</td>
                      <td>额外显示的内容，默认位置在右上角</td>
                  </tr>
                  <tr>
                      <td>无</td>
                      <td>卡片主体内容</td>
                  </tr>
              </tbody>
          </table>
      </div>
    </z-card>
  </div>
</template>

<script>
export default {
  name: 'cpCard',
  data: function () {
    return {
      movieList: [
        {
          name: 'The Shawshank Redemption',
          url: 'https://movie.douban.com/subject/1292052/',
          rate: 9.6
        },
        {
          name: 'Leon:The Professional',
          url: 'https://movie.douban.com/subject/1295644/',
          rate: 9.4
        },
        {
          name: 'Farewell to My Concubine',
          url: 'https://movie.douban.com/subject/1291546/',
          rate: 9.5
        },
        {
          name: 'Forrest Gump',
          url: 'https://movie.douban.com/subject/1292720/',
          rate: 9.4
        },
        {
          name: 'Life Is Beautiful',
          url: 'https://movie.douban.com/subject/1292063/',
          rate: 9.5
        },
        {
          name: 'Spirited Away',
          url: 'https://movie.douban.com/subject/1291561/',
          rate: 9.2
        },
        {
          name: 'Schindler List',
          url: 'https://movie.douban.com/subject/1295124/',
          rate: 9.4
        },
        {
          name: 'The Legend of 1900',
          url: 'https://movie.douban.com/subject/1292001/',
          rate: 9.2
        },
        {
          name: 'WALL·E',
          url: 'https://movie.douban.com/subject/2131459/',
          rate: 9.3
        },
        {
          name: 'Inception',
          url: 'https://movie.douban.com/subject/3541415/',
          rate: 9.2
        }
      ],
      randomMovieList: [],
      shadow: false,
      demo1: '<div>\r' +
              '    <z-card style="width:350px" bordered dis-hover :shadow="shadow">\r' +
              '        <p slot="title">\r' +
              '            <z-icon type="ios-film-outline"></z-icon>\r' +
              '            Classic film\r' +
              '        </p>\r' +
              '        <a href="#" slot="extra" @click.prevent="changeLimit">\r' +
              '            <z-icon type="ios-loop-strong"></z-icon>\r' +
              '            Change\r' +
              '        </a>\r' +
              '        <ul style="font-family:SimHei">\r' +
              '            <li v-for="item in randomMovieList">\r' +
              '                <a :href="item.url" target="_blank">{ { item.name } }</a>\r' +
              '                <span>\r' +
              '                    <z-icon type="ios-star" v-for="n in 4" :key="n"></z-icon>\r' +
              '                    <z-icon type="ios-star" v-if="item.rate >= 9.5"></z-icon>\r' +
              '                    <z-icon type="ios-star-half" v-else></z-icon>\r' +
              '                    { { item.rate } }\r' +
              '                </span>\r' +
              '            </li>\r' +
              '        </ul>\r' +
              '    </z-card>\r' +
              '</div>\r' +
              '\r' +
              'export default{\r' +
              '    data () {\r' +
              '        return {\r' +
              '            movieList: [\r' +
              '                {\r' +
              '                    name: \'The Shawshank Redemption\',\r' +
              '                    url: \'https://movie.douban.com/subject/1292052/\',\r' +
              '                    rate: 9.6\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Leon:The Professional\',\r' +
              '                    url: \'https://movie.douban.com/subject/1295644/\',\r' +
              '                    rate: 9.4\r' +
              '                },\r' +
              '                 {\r' +
              '                    name: \'Farewell to My Concubine\',\r' +
              '                    url: \'https://movie.douban.com/subject/1291546/\',\r' +
              '                    rate: 9.5\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Forrest Gump\',\r' +
              '                    url: \'https://movie.douban.com/subject/1292720/\',\r' +
              '                    rate: 9.4\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Life Is Beautiful\',\r' +
              '                    url: \'https://movie.douban.com/subject/1292063/\',\r' +
              '                    rate: 9.5\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Spirited Away\',\r' +
              '                    url: \'https://movie.douban.com/subject/1291561/\',\r' +
              '                    rate: 9.2\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Schindler List\',\r' +
              '                    url: \'https://movie.douban.com/subject/1295124/\',\r' +
              '                    rate: 9.4\r' +
              '                },\r' +
              '                {\r' +
              '                     name: \'The Legend of 1900\',\r' +
              '                        url: \'https://movie.douban.com/subject/1292001/\',\r' +
              '                    rate: 9.2\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'WALL·E\',\r' +
              '                        url: \'https://movie.douban.com/subject/2131459/\',\r' +
              '                    rate: 9.3\r' +
              '                },\r' +
              '                {\r' +
              '                    name: \'Inception\',\r' +
              '                        url: \'https://movie.douban.com/subject/3541415/\',\r' +
              '                    rate: 9.2\r' +
              '                }\r' +
              '            ],\r' +
              '            randomMovieList: [],\r' +
              '            shadow:false\r' +
              '        }\r' +
              '    },\r' +
              '    methods: {\r' +
              '        changeLimit () {\r' +
              '            function getArrayItems(arr, num) {\r' +
              '                const tempArray = [];\r' +
              '                for (let index in arr) {\r' +
              '                    tempArray.push(arr[index]);\r' +
              '                }\r' +
              '                const returnArray = [];\r' +
              '                for (let i = 0; i< num; i + +) {\r' +
              '                    if (tempArray.length>0) {\r' +
              '                        const arrIndex = Math.floor(Math.random()*tempArray.length);\r' +
              '                        returnArray[i] = tempArray[arrIndex];\r' +
              '                        tempArray.splice(arrIndex, 1);\r' +
              '                    } else {\r' +
              '                        break;\r' +
              '                    }\r' +
              '                }\r' +
              '                return returnArray;\r' +
              '            }\r' +
              '            this.randomMovieList = getArrayItems(this.movieList, 5);\r' +
              '        }\r' +
              '    },\r' +
              '}',
      demo2: '<z-card :bordered="false">\r' +
              '    <p slot="title">No border title</p>\r' +
              '    <p>Content of no border type. Content of no border type. Content of no border type.\r' +
              '        Content of no border type. </p>\r' +
              ' </z-card>\r',
      demo3: '<z-row>\r' +
              '    <z-col span="11">\r' +
              '        <z-card>\r' +
              '            <p slot="title">The standard card</p>\r' +
              '            <p>Content of card</p>\r' +
              '            <p>Content of card</p>\r' +
              '            <p>Content of card</p>\r' +
              '        </z-card>\r' +
              '    </z-col>\r' +
              '    <z-col span="11" offset="2">\r' +
              '        <z-card dis-hover>\r' +
              '            <p slot="title">Disable card with hover shadows</p>\r' +
              '            <p>Content of card</p>\r' +
              '            <p>Content of card</p>\r' +
              '            <p>Content of card</p>\r' +
              '        </z-card>\r' +
              '    </z-col>\r' +
              ' </z-row>\r',
      demo4: '<z-row style="background:#eee;padding:20px">\r' +
              '    <z-col span="11">\r' +
              '        <z-card :bordered="false">\r' +
              '            <p slot="title">Borderless card</p>\r' +
              '            <p>Content of card</p>\r' +
              '            <p>Content of card</p>\r' +
              '            <p>Content of card</p>\r' +
              '        </z-card>\r' +
              '    </z-col>\r' +
              '    <z-col span="11" offset="2">\r' +
              '        <z-card shadow>\r' +
              '            <p slot="title">Use a card with a shadow effect</p>\r' +
              '            <p>Content of card</p>\r' +
              '            <p>Content of card</p>\r' +
              '            <p>Content of card</p>\r' +
              '        </z-card>\r' +
              '    </z-col>\r' +
              ' </z-row>\r',
      demo5: '<z-card style="width:320px">\r' +
              '    <div style="text-align:center">\r' +
              '        <h4>A high quality UI Toolkit based on Vue.js</h4>\r' +
              '    </div>\r' +
              '</z-card> \r'
    }
  },
  methods: {
    changeLimit: function () {
      function getArrayItems (arr, num) {
        const tempArray = []
        for (let index in arr) {
          tempArray.push(arr[index])
        }
        const returnArray = []
        for (let i = 0; i < num; i++) {
          if (tempArray.length > 0) {
            const arrIndex = Math.floor(Math.random() * tempArray.length)
            returnArray[i] = tempArray[arrIndex]
            tempArray.splice(arrIndex, 1)
          } else {
            break
          }
        }
        return returnArray
      }
      this.randomMovieList = getArrayItems(this.movieList, 5)
    }
  },
  mounted: function () {
    this.changeLimit()
  }
}
</script>
<style scoped>
</style>
