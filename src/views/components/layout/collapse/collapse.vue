<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-07 16:20:55
 * @LastEditors  : Please set LastEditors
 -->
<template>
  <div>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-collapse v-model="value1">
              <z-panel name="1">
                  史蒂夫·乔布斯
                  <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
                  </p>
              </z-panel>
              <z-panel name="2">
                  斯蒂夫·盖瑞·沃兹尼亚克
                  <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                      Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                      Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
              </z-panel>
              <z-panel name="3">
                  乔纳森·伊夫
                  <p slot="content">
                      乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
                  </p>
              </z-panel>
          </z-collapse>
          <div class="example-desc">
              <header class="example-header"><span>基础用法</span></header>
              <div>
                  <p>默认可以同时展开多个面板，可以设置默认展开第几个。</p>
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
           <z-collapse v-model="value2" accordion>
                <z-panel name="1">
                    史蒂夫·乔布斯
                    <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
                    </p>
                </z-panel>
                <z-panel name="2">
                    斯蒂夫·盖瑞·沃兹尼亚克
                    <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                        Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                        Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                </z-panel>
                <z-panel name="3">
                    乔纳森·伊夫
                    <p slot="content">
                        乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
                    </p>
                </z-panel>
            </z-collapse>
            <div class="example-desc">
                <header class="example-header"><span>手风琴</span></header>
                <div>
                    <p>通过设置属性accordion开启手风琴模式，每次只能打开一个面板。</p>
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
            <div class="demo-avatar">
              <z-collapse accordion v-model="value3">
                  <z-panel name="1">
                      史蒂夫·乔布斯
                      <div slot="content">
                          史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
                          <z-collapse accordion v-model="value4">
                              <z-panel name="1-1">
                                  iPhone
                                  <p slot="content">
                                      iPhone，是美国苹果公司研发的智能手机，它搭载iOS操作系统。第一代iPhone于2007年1月9日由苹果公司前首席执行官史蒂夫·乔布斯发布，并在2007年6月29日正式发售。
                                  </p>
                              </z-panel>
                              <z-panel name="1-2">
                                  iPad
                                  <p slot="content">
                                      iPad是由苹果公司于2010年开始发布的平板电脑系列，定位介于苹果的智能手机iPhone和笔记本电脑产品之间，（屏幕中有4个虚拟程序固定栏）与iPhone布局一样，提供浏览网站、收发电子邮件、观看电子书、播放音频或视频、玩游戏等功能。由英国出生的设计主管乔纳森·伊夫（Jonathan
                                      Ive）（有些翻译为 乔纳森·艾维）领导的团队设计的，这个圆滑、超薄的产品反映出了伊夫对德国天才设计师Dieter
                                      Rams的崇敬之情。</p>
                              </z-panel>
                          </z-collapse>
                      </div>
                  </z-panel>
                  <z-panel name="2">
                      斯蒂夫·盖瑞·沃兹尼亚克
                      <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                          Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                          Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                  </z-panel>
                  <z-panel name="3">
                      乔纳森·伊夫
                      <p slot="content">
                          乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
                      </p>
                  </z-panel>
              </z-collapse>
          </div>
          <div class="example-desc">
              <header class="example-header"><span>面板嵌套</span></header>
              <div>
                  <p>折叠面板可以进行嵌套。</p>
              </div>
          </div>
        </z-col>
        <z-col span="12">
            <z-code-editor :content="demo3"></z-code-editor>
        </z-col>
      </z-row>
    </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <div class="demo-api">
        <div class="anchor">
            <h2 id="API">API</h2>
        </div>
        <div class="anchor">
            <h3 id="Collapse_props">Collapse prdemo-ops</h3>
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
                    <td>value</td>
                    <td>当前激活的面板的 name，可以使用 v-model 双向绑定</td>
                    <td>Array | String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>accordion</td>
                    <td>是否开启手风琴模式，开启后每次至多展开一个面板</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="Collapse_events">Collapse events</h3>
        </div>
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
                    <td>on-change</td>
                    <td>切换面板时触发，返回当前已展开的面板的 key，格式为数组</td>
                    <td>[]</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="Panel_props">Panel props</h3>
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
                    <td>name</td>
                    <td>当前面板的 name，与 Collapse的<code>value</code>对应，不填为索引值</td>
                    <td>String</td>
                    <td>index</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="Panel_slot">Panel slot</h3>
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
                    <td>无</td>
                    <td>面板头内容</td>
                </tr>
                <tr>
                    <td>content</td>
                    <td>描述内容</td>
                </tr>
            </tbody>
        </table>
    </div>
    </z-card>
  </div>
</template>

<script>
export default {
  name: 'cpCollapse',
  data: function () {
    return {
      value1: '1',
      value2: '1',
      value3: '1',
      value4: '1-1',
      demo1: '<z-collapse v-model="value1">\r' +
              '    <z-panel name="1">\r' +
              '        史蒂夫·乔布斯\r' +
              '        <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>\r' +
              '    </z-panel>\r' +
              '    <z-panel name="2">\r' +
              '        斯蒂夫·盖瑞·沃兹尼亚克\r' +
              '        <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>\r' +
              '    </z-panel>\r' +
              '    <z-panel name="3">\r' +
              '        乔纳森·伊夫\r' +
              '        <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>\r' +
              '    </z-panel>\r' +
              '</z-collapse>\r' +
              'export default{\r' +
              '    data () {\r' +
              '        return {\r' +
              '            value1: \'1\',\r' +
              '        }\r' +
              '    },\r' +
              '}\r',
      demo2: ' <z-collapse v-model="value2" accordion>\r' +
              '    <z-panel name="1">\r' +
              '        史蒂夫·乔布斯\r' +
              '        <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>\r' +
              '    </z-panel>\r' +
              '    <z-panel name="2">\r' +
              '        斯蒂夫·盖瑞·沃兹尼亚克\r' +
              '        <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>\r' +
              '    </z-panel>\r' +
              '    <z-panel name="3">\r' +
              '        乔纳森·伊夫\r' +
              '        <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>\r' +
              '    </z-panel>\r' +
              '</z-collapse>\r' +
              'export default{\r' +
              '    data () {\r' +
              '        return {\r' +
              '            value2: \'1\',\r' +
              '        }\r' +
              '    },\r' +
              '}\r',
      demo3: '<div>\r' +
              '    <z-collapse accordion v-model="value3">\r' +
              '        <z-panel name="1">\r' +
              '            史蒂夫·乔布斯\r' +
              '            <div slot="content">\r' +
              '                史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。\r' +
              '                <z-collapse accordion v-model="value4">\r' +
              '                   <z-panel name="1-1">\r' +
              '                       iPhone\r' +
              '                       <p slot="content">iPhone，是美国苹果公司研发的智能手机，它搭载iOS操作系统。第一代iPhone于2007年1月9日由苹果公司前首席执行官史蒂夫·乔布斯发布，并在2007年6月29日正式发售。</p>\r' +
              '                   </z-panel>\r' +
              '                   <z-panel name="1-2">\r' +
              '                       iPad\r' +
              '                        <p slot="content">iPad是由苹果公司于2010年开始发布的平板电脑系列，定位介于苹果的智能手机iPhone和笔记本电脑产品之间，（屏幕中有4个虚拟程序固定栏）与iPhone布局一样，提供浏览网站、收发电子邮件、观看电子书、播放音频或视频、玩游戏等功能。由英国出生的设计主管乔纳森·伊夫（Jonathan\r' +
              '                           Ive）（有些翻译为 乔纳森·艾维）领导的团队设计的，这个圆滑、超薄的产品反映出了伊夫对德国天才设计师Dieter Rams的崇敬之情。</p>\r' +
              '                   </z-panel>\r' +
              '               </z-collapse>\r' +
              '           </div>\r' +
              '       </z-panel>\r' +
              '       <z-panel name="2">\r' +
              '           斯蒂夫·盖瑞·沃兹尼亚克\r' +
              '           <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC\r' +
              '               Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>\r' +
              '       </z-panel>\r' +
              '       <z-panel name="3">\r' +
              '           乔纳森·伊夫\r' +
              '           <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>\r' +
              '       </z-panel>\r' +
              '   </z-collapse>\r' +
              ' </div>\r' +
              '\r' +
              ' export default{\r' +
              '    data () {\r' +
              '        return {\r' +
              '            value3: \'1\',\r' +
              '            value4: \'1-1\'\r' +
              '        }\r' +
              '    },\r' +
              '}\r'
    }
  }
}
</script>
<style scoped>
</style>
