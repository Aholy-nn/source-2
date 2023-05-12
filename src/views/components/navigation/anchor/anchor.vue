<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-07 16:11:19
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
    <z-row :gutter="15" class="anchor-wrapper">
      <z-col span="6">
        <div class="link-wrapper">
              <z-button @click="changeCon">修改为Window</z-button>
              <z-button @click="andLink">添加一个连接</z-button>
              <z-anchor :bounds="100" @on-change="handleChange" @on-select="handleSelect"
                  :style="{right: '100px'}" :affix="true" :offset-top="30" :scroll-offset="100"
                  :container="scrollCon" show-ink>
                  <div v-for="(link ,index) in 300" :key="index">
                  <z-anchor-link v-if="(link - 1) % 30 === 0"
                       :href="`#title-${link}`" :title="`title-${link}`">
                      <z-anchor-link :scroll-offset="20" v-if="link === 61" href="#title-child-69"
                          title="title-child-69" />
                  </z-anchor-link>
                  </div>
                  <z-anchor-link :scroll-offset="200" href="#lishi" title="李氏专跳" />
                  <z-anchor-link v-if="showNewLink" href="#new-link" title="这是动态添加的连接" />
              </z-anchor>
          </div>
      </z-col>
      <z-col span="18">
          <div v-if="con === 'div'" ref="listWrapper" id="listWrapper" class="list-wrapper">
            <template v-for="i in 300">
                <h1 v-if="(i - 1) % 30 === 0" :key="`h1${i}`" :id="`title-${i}`">{{ `title-${i}`
                    }}
                </h1>
                <h1 v-if="i === 69" :key="`h1${i}`" :id="`title-child-${i}`">{{ `title-${i}` }}
                </h1>
                <h1 v-if="i === 75" :key="`h1${i}`" :id="`title-child-${i}`">{{ `title-${i}` }}
                </h1>
                <p v-else :key="`p${i}`">{{ `content-row-index-${i}` }}</p>
                <z-collapse v-if="i === 3" v-model="value1" :key="`collapse-${i}`">
                    <z-panel name="1">
                        史蒂夫·乔布斯
                        <p v-for="index in 50" :key="`ppp-${index}`" slot="content">{{ index }}
                        </p>
                    </z-panel>
                    <z-panel name="2">
                        斯蒂夫·盖瑞·沃兹尼亚克
                        <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                            Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                            Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
                        </p>
                    </z-panel>
                    <z-panel name="3">
                        乔纳森·伊夫
                        <p slot="content">
                            乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
                        </p>
                    </z-panel>
                </z-collapse>
            </template>
            <h1 id="lishi">李氏专跳</h1>
            <p v-for="i in 100" :key="`chinese-${i}`">这是信息司大是大非胜多负少的{{i}}</p>
          </div>
        <div v-else>
            <template v-for="i in 300">
                <h1 v-if="(i - 1) % 30 === 0" :key="`h1${i}`" :id="`title-${i}`">{{ `title-${i}`
                    }}
                </h1>
                <h1 v-if="i === 69" :key="`h1${i}`" :id="`title-child-${i}`">{{ `title-${i}` }}
                </h1>
                <h1 v-if="i === 75" :key="`h1${i}`" :id="`title-child-${i}`">{{ `title-${i}` }}
                </h1>
                <p v-else :key="`p${i}`">{{ `content-row-index-${i}` }}</p>
                <z-collapse v-if="i === 3" v-model="value1" :key="`collapse-${i}`">
                    <z-panel name="1">
                        史蒂夫·乔布斯
                        <p v-for="index in 50" :key="`ppp-${index}`" slot="content">{{ index }}
                        </p>
                    </z-panel>
                    <z-panel name="2">
                        斯蒂夫·盖瑞·沃兹尼亚克
                        <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                            Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                            Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
                        </p>
                    </z-panel>
                    <z-panel name="3">
                        乔纳森·伊夫
                        <p slot="content">
                            乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
                        </p>
                    </z-panel>
                </z-collapse>
            </template>
            <h1 id="new-link">这是新添加的哦哦哦哦哦 哦 </h1>
            <p v-for="i in 50" :key="`new-${i}`">这是信息司大是大非胜多负少的{{i}}</p>
            <h1 id="lishi">李氏专跳</h1>
            <p v-for="i in 50" :key="`chinese-${i}`">这是信息司大是大非胜多负少的{{i}}</p>
                          </div>
      </z-col>
    </z-row>
  </z-card>
  <z-card bordered dis-hover class="m-t-15">
     <div class="demo-api">
        <div class="anchor">
            <h2 id="API">API</h2>
            <div class="anchor">
                <h3 id="Anchor_props">Anchor props</h3>
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
                            <td>affix</td>
                            <td>固定模式</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>offset-top</td>
                            <td>距离窗口顶部达到指定偏移量后触发</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>offset-bottom</td>
                            <td>距离窗口底部达到指定偏移量后触发</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>bounds</td>
                            <td>锚点区域边界，单位：px</td>
                            <td>Number</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>scroll-offset</td>
                            <td>点击滚动的额外距离</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>container</td>
                            <td>指定滚动的容器</td>
                            <td>String | HTMLElement</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>show-ink</td>
                            <td>是否显示小圆点</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <div class="anchor">
                    <h3 id="Anchor_events">Anchor events</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>事件名</th>
                                <th>说明</th>
                                <th>返回值</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>on-select</td>
                                <td>点击锚点时触发，返回链接</td>
                                <td>href</td>
                            </tr>
                            <tr>
                                <td>on-change</td>
                                <td>链接改变时触发，返回新链接和旧链接</td>
                                <td>newHref, oldHref</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="anchor">
                        <h3 id="AnchorLink_props">AnchorLink props</h3>
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
                                    <td>href</td>
                                    <td>锚点链接</td>
                                    <td>String</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>title</td>
                                    <td>文字内容</td>
                                    <td>String</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>scroll-offset</td>
                                    <td>点击滚动的额外距离</td>
                                    <td>Number</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpAnchor',
  data: function () {
    return {
      container: null,
      value1: '1',
      scrollCon: '',
      con: 'div',
      showNewLink: false,
      demo1: '<div class="anchor-wrapper">\r' +
              '    <div class="col-xs-3">\r' +
              '        <div class="link-wrapper">\r' +
              '            <z-button @click="changeCon">修改为Window</z-button>\r' +
              '            <z-button @click="andLink">添加一个连接</z-button>\r' +
              '            <z-anchor :bounds="100" @on-change="handleChange" @on-select="handleSelect" :style="{right: \'100px\'}" :affix="true" :offset-top="30"\r' +
              '                :scroll-offset="100" :container="scrollCon" show-ink>\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '                <z-anchor-link v-if="(link - 1) % 30 === 0" v-for="link in 300" :key="link${link}">\r' +
              '                    <z-anchor-link :scroll-offset="20" v-if="link === 61" href="#title-child-69" title="title-child-69" />\r' +
              '                </z-anchor-link>\r' +
              '                <z-anchor-link :scroll-offset="200" href="#lishi" title="李氏专跳" />\r' +
              '                <z-anchor-link v-if="showNewLink" href="#new-link" title="这是动态添加的连接" />\r' +
              '            </z-anchor>\r' +
              '        </div>\r' +
              '    </div>\r' +
              '    <div class="col-xs-9">\r' +
              '        <div v-if="con === \'div\'" ref="listWrapper" id="listWrapper" class="list-wrapper">\r' +
              '            <template v-for="i in 300">\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '                <h1 v-if="(i - 1) % 30 === 0" :key="`h1${i}`" :id="`title-${i}`">{{ `title-${i}`}}</h1>\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '                <h1 v-if="i === 69" :key="`h1${i}`" :id="`title-child-${i}`">{{ `title-${i}` }}</h1>\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '                <h1 v-if="i === 75" :key="`h1${i}`" :id="`title-child-${i}`">{{ `title-${i}` }}</h1>\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '                <p v-else :key="`p${i}`">{{ `content-row-index-${i}` }}</p>\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '                <z-collapse v-if="i === 3" v-model="value1" :key="`collapse-${i}`">\r' +
              '                    <z-panel name="1">\r' +
              '                        史蒂夫·乔布斯\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '                        <p v-for="index in 50" :key="`ppp-${index}`" slot="content">{{ index }}</p>\r' +
              '                    </z-panel>\r' +
              '                    <z-panel name="2">\r' +
              '                        斯蒂夫·盖瑞·沃兹尼亚克\r' +
              '                        <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC\r' +
              '                            Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。\r' +
              '                        </p>\r' +
              '                    </z-panel>\r' +
              '                    <z-panel name="3">\r' +
              '                        乔纳森·伊夫\r' +
              '                        <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>\r' +
              '                   </z-panel>\r' +
              '                </z-collapse>\r' +
              '            </template>\r' +
              '            <h1 id="lishi">李氏专跳</h1>\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '            <p v-for="i in 100" :key="`chinese-${i}`">这是信息司大是大非胜多负少的{{i}}</p>\r' +
              '       </div>\r' +
              '        <div v-else>\r' +
              '            <template v-for="i in 300">\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '               <h1 v-if="(i - 1) % 30 === 0" :key="`h1${i}`" :id="`title-${i}`">{{ `title-${i}`}}</h1>\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '               <h1 v-if="i === 69" :key="`h1${i}`" :id="`title-child-${i}`">{{ `title-${i}` }}</h1>\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '                <h1 v-if="i === 75" :key="`h1${i}`" :id="`title-child-${i}`">{{ `title-${i}` }}</h1>\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '                <p v-else :key="`p${i}`">{{ `content-row-index-${i}` }}</p>\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '                <z-collapse v-if="i === 3" v-model="value1" :key="`collapse-${i}`">\r' +
              '                    <z-panel name="1">\r' +
              '                        史蒂夫·乔布斯\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '                        <p v-for="index in 50" :key="`ppp-${index}`" slot="content">{{ index }}</p>\r' +
              '                    </z-panel>\r' +
              '                    <z-panel name="2">\r' +
              '                        斯蒂夫·盖瑞·沃兹尼亚克\r' +
              '                        <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC\r' +
              '                            Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。\r' +
              '                       </p>\r' +
              '                    </z-panel>\r' +
              '                    <z-panel name="3">\r' +
              '                        乔纳森·伊夫\r' +
              '                        <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>\r' +
              '                        </Panel>\r' +
              '                </z-collapse>\r' +
              '            </template>\r' +
              '            <h1 id="new-link">这是新添加的哦哦哦哦哦 哦 </h1>\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '            <p v-for="i in 50" :key="`new-${i}`">这是信息司大是大非胜多负少的{{i}}</p>\r' +
              '            <h1 id="lishi">李氏专跳</h1>\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '            <p v-for="i in 50" :key="`chinese-${i}`">这是信息司大是大非胜多负少的{{i}}</p>\r' +
              '        </div>\r' +
              '    </div>\r' +
              '</div>\r' +
              ' <script>\r' +
              'export default {\r' +
              '    data: function(){\r' +
              '        return {\r' +
              '            container: null,\r' +
              '            value1: "1",\r' +
              '           scrollCon: "",\r' +
              '            con: "div",\r' +
              '            showNewLink: false\r' +
              '       }\r' +
              '    },\r' +
              '    methods: {\r' +
              '        changeCon() {\r' +
              '            this.con = "window";\r' +
              '            this.scrollCon = undefined;\r' +
              '        },\r' +
              '        handleChange(newHref, oldHref) {\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '            console.log(`${oldHref} => ${newHref}`);\r' +
              '        },\r' +
              '        handleSelect(href) {\r' +
              // eslint-disable-next-line no-template-curly-in-string
              '            console.log(`select ${href}`);\r' +
              '        },\r' +
              '        andLink() {\r' +
              '            this.showNewLink = true;\r' +
              '        }\r' +
              '    },\r' +
              '     mounted() {\r' +
              '        this.scrollCon = this.$refs.listWrapper;\r' +
              '    }\r' +
              '}\r' +
              // eslint-disable-next-line no-useless-escape
              '<\/script>\r'
    }
  },
  methods: {
    changeCon () {
      this.con = 'window'
      this.scrollCon = undefined
    },
    handleChange (newHref, oldHref) {
      console.log(`${oldHref} => ${newHref}`)
    },
    handleSelect (href) {
      console.log(`select ${href}`)
    },
    andLink () {
      this.showNewLink = true
    }
  },
  mounted () {
    this.scrollCon = this.$refs.listWrapper
  }
}
</script>
<style>
.anchor-wrapper {
  position: relative;
}
.anchor-wrapper .link-wrapper {
    top: 0px;
    left: 0px;
    width: 200px;
}

.anchor-wrapper .list-wrapper {
    height: 430px;
    overflow: auto;
}
</style>
