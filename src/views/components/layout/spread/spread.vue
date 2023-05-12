<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-06 14:53:24
 * @LastEditors  : Please set LastEditors
 -->
<template>
  <div>
    <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-spread>
            <z-row :gutter="15">
                <z-col span="8">
                    <z-input></z-input>
                </z-col>
                <z-col span="8">
                    <z-input></z-input>
                </z-col>
                <z-col span="8">
                    <z-input></z-input>
                </z-col>
            </z-row>
          </z-spread>
          <div class="demo-api m-t-10">
          <table class="demo-table table-striped">
              <tr>
                  <td>测试内容</td>
                  <td>测试内容</td>
                  <td>测试内容</td>
                  <td>测试内容</td>
              </tr>
          </table>
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
          <z-spread init-show="true" no-suspend="true">
            <z-row :gutter="15">
                <z-col span="8">
                    <z-input></z-input>
                </z-col>
                <z-col span="8">
                    <z-input></z-input>
                </z-col>
                <z-col span="8">
                    <z-input></z-input>
                </z-col>
            </z-row>
          </z-spread>
          <div class="demo-api m-t-10">
          <table class="demo-table table-striped">
              <tr>
                  <td>测试内容</td>
                  <td>测试内容</td>
                  <td>测试内容</td>
                  <td>测试内容</td>
              </tr>
          </table>
          </div>
        </z-col>
        <z-col span="12">
            <z-code-editor :content="demo2"></z-code-editor>
        </z-col>
      </z-row>
    </z-card>
  </div>
</template>

<script>
export default {
  name: 'cpSpread',
  data: function () {
    return {
      demo1: '<z-spread>\r' +
              '   <div class="row">\r' +
              '       <div class="col-xs-4"><z-input></z-input></div>\r' +
              '       <div class="col-xs-4"><z-input></z-input></div>\r' +
              '       <div class="col-xs-4"><z-input></z-input></div>\r' +
              '   </div>\r' +
              '</z-spread>\r',
      demo2: '<z-spread init-show="true" no-suspend="true">\r' +
              '   <div class="row">\r' +
              '       <div class="col-xs-4"><z-input></z-input></div>\r' +
              '       <div class="col-xs-4"><z-input></z-input></div>\r' +
              '       <div class="col-xs-4"><z-input></z-input></div>\r' +
              '   </div>\r' +
              '</z-spread>\r'
    }
  },
  computed: {
  }
}
</script>
<style scoped>
</style>
