<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-08 13:14:43
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
    <z-row :gutter="15">
      <z-col span="12">
          <div class="example-case">
            <z-scroll :on-reach-bottom="handleReachBottom">
                <z-card dis-hover v-for="(item, index) in list1" :key="index"
                    style="margin: 32px 0">
                    Content {{ item }}
                </z-card>
            </z-scroll>
        </div>
        <div class="example-desc">
            <header class="example-header"><span>底部触发</span></header>
            <div>当滚动至底部时，触发加载更多。需返回 Promise。</div>
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
         <div class="example-case">
            <z-scroll :on-reach-top="handleReachTop">
                <z-card dis-hover v-for="(item, index) in list2" :key="index"
                    style="margin: 32px 0">
                    Content {{ item }}
                </z-card>
            </z-scroll>
          </div>
          <div class="example-desc">
              <header class="example-header"><span>顶部触发</span></header>
              <div>当滚动至顶部时，触发加载更多。需返回 Promise。</div>
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
         <div class="example-case">
            <z-scroll :on-reach-edge="handleReachEdge">
                <z-card dis-hover v-for="(item, index) in list3" :key="index"
                    style="margin: 32px 0">
                    Content {{ item }}
                </z-card>
            </z-scroll>
        </div>
        <div class="example-desc">
            <header class="example-header"><span>边缘触发</span></header>
            <div>当滚动至底部或顶部时，触发加载更多。需返回 Promise。</div>
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
          <h3 id="Scroll_props">Scroll props</h3>
      </div>
      <table class="table">
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
                  <td>height</td>
                  <td>滚动区域的高度，单位像素</td>
                  <td>String | Number</td>
                  <td>300</td>
              </tr>
              <tr>
                  <td>loading-text</td>
                  <td>加载中的文案</td>
                  <td>String</td>
                  <td>加载中</td>
              </tr>
              <tr>
                  <td>on-reach-top</td>
                  <td>滚动至顶部时触发，需返回 Promise</td>
                  <td>Function</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>on-reach-bottom</td>
                  <td>滚动至底部时触发，需返回 Promise</td>
                  <td>Function</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>on-reach-edge</td>
                  <td>滚动至顶部或底部时触发，需返回 Promise</td>
                  <td>Function</td>
                  <td>-</td>
              </tr>
              <tr>
                  <td>distance-to-edge</td>
                  <td>从边缘到触发回调的距离。如果是负的，回调将在到达边缘之前触发。值最好在 24 以下。</td>
                  <td>Number | Array</td>
                  <td>[20, 20]</td>
              </tr>
          </tbody>
      </table>
  </div>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpScroll',
  data: function () {
    return {
      list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      list2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      list3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      demo1: '<z-scroll :on-reach-bottom="handleReachBottom">\r' +
              '   <z-card dis-hover v-for="(item, index) in list1" :key="index" style="margin: 32px 0">\r' +
              '       Content {{ item }}\r' +
              '   </z-card>\r' +
              '</z-scroll>',
      demo2: '<z-scroll :on-reach-top="handleReachTop">\r' +
              '   <z-card dis-hover v-for="(item, index) in list2" :key="index" style="margin: 32px 0">\r' +
              '       Content {{ item }}\r' +
              '   </z-card>\r' +
              '</z-scroll>',
      demo3: '<z-scroll :on-reach-edge="handleReachEdge">\r' +
              '   <z-card dis-hover v-for="(item, index) in list3" :key="index" style="margin: 32px 0">\r' +
              '      Content {{ item }}\r' +
              '   </z-card>\r' +
              '</z-scroll>'
    }
  },
  methods: {
    handleReachBottom: function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          var last = this.list1[this.list1.length - 1]
          for (var i = 1; i < 11; i++) {
            this.list1.push(last + i)
          }
          resolve()
        }, 2000)
      })
    },
    handleReachTop: function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          var first = this.list2[0]
          for (var i = 1; i < 11; i++) {
            this.list2.unshift(first - i)
          }
          resolve()
        }, 2000)
      })
    },
    handleReachEdge: function (dir) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          if (dir > 0) {
            var first = this.list3[0]
            for (var i = 1; i < 11; i++) {
              this.list3.unshift(first - i)
            }
          } else {
            var last = this.list3[this.list3.length - 1]
            for (var j = 1; j < 11; j++) {
              this.list3.push(last + j)
            }
          }
          resolve()
        }, 2000)
      })
    }
  }
}
</script>
<style scoped>
</style>
