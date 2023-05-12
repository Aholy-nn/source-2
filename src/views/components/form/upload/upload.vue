<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-03-17 16:28:32
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
  <z-card bordered dis-hover>
      <z-row :gutter="15">
        <z-col span="12">
           <z-upload action="//jsonplaceholder.typicode.com/posts/">
                <z-button type="primary" ghost icon="ios-cloud-upload-outline">Upload files</z-button>
            </z-upload>
            <div class="example-desc">
                <header class="example-header"><span>点击上传</span></header>
                <p>最基本用法，点击上传，一次选择一个文件。</p>
            </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo0"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
           <z-upload multiple action="//jsonplaceholder.typicode.com/posts/">
              <z-button type="primary" ghost icon="ios-cloud-upload-outline">Upload files</z-button>
          </z-upload>
          <div class="example-desc">
              <header class="example-header"><span>多文件上传</span></header>
              <p>* 设置属性 multiple，可以选择多个文件</p>
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
           <z-upload :before-upload="handleUpload" action="//jsonplaceholder.typicode.com/posts/">
                <z-button type="primary" ghost icon="ios-cloud-upload-outline">Select the file to upload
                </z-button>
            </z-upload>
            <div v-if="file !== null">Upload file: {{ file.name }}
                <z-button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading'
                    : 'Click to upload' }}</z-button>
            </div>
            <div class="example-desc">
                <header class="example-header"><span>手动上传</span></header>
                <p>* 绑定 before-upload，并返回false，可以阻止默认上传流程，手动控制文件上传。</p>
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
           <z-upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
                <div style="padding: 20px 0">
                    <z-icon type="ios-cloud-upload" size="52" style="color: #3399ff"></z-icon>
                    <p>Click or drag files here to upload</p>
                </div>
            </z-upload>
            <div class="example-desc">
                <header class="example-header"><span>拖拽上传</span></header>
                <p>* 设置属性 type 为 drag，可以拖拽上传。</p>
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
            <div class="demo-upload-list" v-for="(item,index) in uploadList" :key="index">
              <template v-if="item.status === 'finished'">
                  <img :src="item.url">
                  <div class="demo-upload-list-cover">
                      <z-icon type="ios-eye-outline" @click.native="handleView(item.name)"></z-icon>
                      <z-icon type="ios-trash-outline" @click.native="handleRemove(item)"></z-icon>
                  </div>
              </template>
              <template v-else>
                  <z-progress v-if="item.showProgress" :percent="item.percentage"></z-progress>
              </template>
          </div>
          <z-upload ref="upload" :show-upload-list="false" :default-file-list="defaultList"
              :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="2048"
              :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize"
              :before-upload="handleBeforeUpload" multiple type="drag"
              action="//jsonplaceholder.typicode.com/posts/"
              style="display: inline-block;width:58px;">
              <div style="width: 58px;height:58px;line-height: 58px;">
                  <z-icon type="camera" size="20"></z-icon>
              </div>
          </z-upload>
          <z-modal title="View Image" v-model="visible">
              <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible"
                  style="width: 100%">
          </z-modal>
          <div class="example-desc">
              <header class="example-header"><span>自定义上传列表</span></header>
              <p>可以自由控制上传列表，完成各种业务逻辑，示例是一个照片墙，可以查看大图和删除。</p>
              <p> * 设置属性 show-upload-list 为 false，可以不显示默认的上传列表</p>
              <p> * 设置属性 default-file-list 设置默认已上传的列表。</p>
              <p> * 通过 on-success 等属性来控制完整的上传过程，详见API。</p>
              <p>另外，可以通过丰富的配置，来定制上传需求，本例中包含了。</p>
              <p> * 文件必须是 jpg 或 png 格式的图片。</p>
              <p> * 最多上传5张图片。</p>
              <p> * 每个文件大小不超过 2M。</p>
          </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo4"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
   <z-card bordered dis-hover class="m-t-15">
      <div class="demo-api">
        <div class="anchor">
            <h2 id="API">API</h2>
        </div>
        <div class="anchor">
            <h3 id="Upload_props">Upload props</h3>
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
                    <td>action</td>
                    <td>上传的地址，必填</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>headers</td>
                    <td>设置上传的请求头部</td>
                    <td>Object</td>
                    <td>{}</td>
                </tr>
                <tr>
                    <td>multiple</td>
                    <td>是否支持多选文件</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>paste</td>
                    <td>是否支持粘贴上传文件</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>是否禁用</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>data</td>
                    <td>上传时附带的额外参数</td>
                    <td>Object</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>上传的文件字段名</td>
                    <td>String</td>
                    <td>file</td>
                </tr>
                <tr>
                    <td>with-credentials</td>
                    <td>支持发送 cookie 凭证信息</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>show-upload-list</td>
                    <td>是否显示已上传文件列表</td>
                    <td>Boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>上传控件的类型，可选值为 <code>select</code>（点击选择），<code>drag</code>（支持拖拽）</td>
                    <td>String</td>
                    <td>select</td>
                </tr>
                <tr>
                    <td>accept</td>
                    <td>接受上传的<a
                            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept"
                            target="_blank">文件类型</a></td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>format</td>
                    <td>支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept
                        属性，会在选择文件时过滤，可以两者结合使用</td>
                    <td>Array</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>max-size</td>
                    <td>文件大小限制，单位 kb</td>
                    <td>Number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>before-upload</td>
                    <td>上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>on-progress</td>
                    <td>文件上传时的钩子，返回字段为 event, file, fileList</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>on-success</td>
                    <td>文件上传成功时的钩子，返回字段为 response, file, fileList</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>on-error</td>
                    <td>文件上传失败时的钩子，返回字段为 error, file, fileList</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>on-preview</td>
                    <td>点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>on-remove</td>
                    <td>文件列表移除文件时的钩子，返回字段为 file, fileList</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>on-format-error</td>
                    <td>文件格式验证失败时的钩子，返回字段为 file, fileList</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>on-exceeded-size</td>
                    <td>文件超出指定大小限制时的钩子，返回字段为 file, fileList</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>default-file-list</td>
                    <td>
                        默认已上传的文件列表，例如：
                        <pre><code>
                              [
                                  {
                                      name: 'img1.jpg',
                                      url: 'http://www.xxx.com/img1.jpg'
                                  },
                                  {
                                      name: 'img2.jpg',
                                      url: 'http://www.xxx.com/img2.jpg'
                                  }
                              ]
                                    </code>
                                </pre>
                    </td>
                    <td>Array</td>
                    <td>[]</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="Upload_methods">Upload methods</h3>
        </div>
        <table>
            <thead>
                <tr>
                    <th>方法名</th>
                    <th>说明</th>
                    <th>参数</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>clearFiles</td>
                    <td>清空已上传的文件列表</td>
                    <td>无</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="Upload_slot">Upload slot</h3>
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
                    <td>触发上传组件的控件</td>
                </tr>
                <tr>
                    <td>tip</td>
                    <td>辅助提示内容</td>
                </tr>
            </tbody>
        </table>
    </div>
   </z-card>
</div>
</template>

<script>
export default {
  name: 'cpUpload',
  data: function () {
    return {
      file: null,
      loadingStatus: false,
      defaultList: [
        {
          'name': 'a42bdcc1178e62b4694c830f028db5c0',
          'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
        },
        {
          'name': 'bc7521e033abdd1e92222d733590f104',
          'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
        },
        {
          'name': '11111',
          'url': 'views/demo/component/upload/a044ad345982b2b713b5ad7d3aadcbef76099b65.jpg'
        }
      ],
      imgName: '',
      visible: false,
      uploadList: [],
      demo0: ' <z-upload action="//jsonplaceholder.typicode.com/posts/">\r' +
            '    <z-button type="primary" ghost icon="ios-cloud-upload-outline">Upload files</z-button>\r' +
            '</z-upload>\r',
      demo1: '// demo1 多文件上传\r' +
            '<z-upload\r' +
            '    multiple\r' +
            '    action="//jsonplaceholder.typicode.com/posts/">\r' +
            '    <z-button type="primary" ghost icon="ios-cloud-upload-outline">Upload files</z-button>\r' +
            '</z-upload>',
      demo2: '// demo2 手动上传\r' +
            '<z-upload multiple action="//jsonplaceholder.typicode.com/posts/">\r' +
            '   <z-button type="primary" ghost icon="ios-cloud-upload-outline">Upload files</z-button>\r' +
            '</z-upload>',
      demo3: '// demo3 拖拽上传\r' +
            '<z-upload\r' +
            '       multiple\r' +
            '       type="drag"\r' +
            '       action="//jsonplaceholder.typicode.com/posts/">\r' +
            '   <div style="padding: 20px 0">\r' +
            '       <z-icon type="ios-cloud-upload" size="52" style="color: #3399ff"></z-icon>\r' +
            '       <p>Click or drag files here to upload</p>\r' +
            '   </div>\r' +
            '</z-upload>',
      demo4: '// demo4 自定义上传\r' +
            '<z-upload\r' +
            '       ref="upload"\r' +
            '       :show-upload-list="false"\r' +
            '       :default-file-list="defaultList"\r' +
            '       :on-success="handleSuccess"\r' +
            '       :format="[\'jpg\',\'jpeg\',\'png\']"\r' +
            '       :max-size="2048"\r' +
            '       :on-format-error="handleFormatError"\r' +
            '       :on-exceeded-size="handleMaxSize"\r' +
            '       :before-upload="handleBeforeUpload"\r' +
            '       multiple\r' +
            '       type="drag"\r' +
            '       action="//jsonplaceholder.typicode.com/posts/"\r' +
            '       style="display: inline-block;width:58px;">\r' +
            '       <div style="width: 58px;height:58px;line-height: 58px;">\r' +
            '           <z-icon type="ios-camera" size="20"></z-icon>\r' +
            '       </div>\r' +
            '</z-upload>\r\n' +
            'export default {\r' +
            '   data: function() {\r' +
            '       return {\r' +
            '           file: null,\r' +
            '           loadingStatus: false,\r' +
            '           defaultList: [\r' +
            '               {\r' +
            '                   \'name\': \'a42bdcc1178e62b4694c830f028db5c0\',\r' +
            '                   \'url\': \'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar\'\r' +
            '               },\r' +
            '               {\r' +
            '                   \'name\': \'bc7521e033abdd1e92222d733590f104\',\r' +
            '                   \'url\': \'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar\'\r' +
            '               },\r' +
            '               {\r' +
            '                   \'name\': \'11111\',\r' +
            '                   \'url\': \'views/demo/component/upload/a044ad345982b2b713b5ad7d3aadcbef76099b65.jpg\'\r' +
            '               }\r' +
            '           ],\r' +
            '       }\r' +
            '   },\r' +
            '   methods: {\r' +
            '       handleUpload :function(file) {\r' +
            '           this.file = file;\r' +
            '           return false;\r' +
            '       },\r' +
            '       upload:function() {\r' +
            '           this.loadingStatus = true;\r' +
            '           setTimeout(function (){\r' +
            '               this.file = null;\r' +
            '               this.loadingStatus = false;\r' +
            '               this.$Message.success(\'Success\')\r' +
            '           }, 1500);\r' +
            '       },\r' +
            '       handleView:function (name) {\r' +
            '           this.imgName = name;\r' +
            '           this.visible = true;\r' +
            '       },\r' +
            '       handleRemove:function (file) {\r' +
            '           const fileList = this.$refs.upload.fileList;\r' +
            '           this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);\r' +
            '       },\r' +
            '       handleSuccess:function (res, file) {\r' +
            '           file.url = \'https://www.baidu.com\';\r' +
            '           file.name = \'7eb99afb9d5f317c912f08b5212fd69a\';\r' +
            '       },\r' +
            '       handleFormatError:function (file) {\r' +
            '           this.$Notice.warning({\r' +
            '               title: \'The file format is incorrect\',\r' +
            '               desc: \'File format of \' + file.name + \' is incorrect, please select jpg or png.\'\r' +
            '           });\r' +
            '       },\r' +
            '       handleMaxSize :function(file) {\r' +
            '           this.$Notice.warning({\r' +
            '               title: \'Exceeding file size limit\',\r' +
            '               desc: \'File  \' + file.name + \' is too large, no more than 2M.\'\r' +
            '           });\r' +
            '       },\r' +
            '       handleBeforeUpload:function () {\r' +
            '           const check = this.uploadList.length < 5;\r' +
            '           if (!check) {\r' +
            '               this.$Notice.warning({\r' +
            '                   title: \'Up to five pictures can be uploaded.\'\r' +
            '               });\r' +
            '           }\r' +
            '           return check;\r' +
            '       }\r' +
            '   }\r' +
            '}'
    }
  },
  methods: {
    handleUpload: function (file) {
      this.file = file
      return false
    },
    upload: function () {
      this.loadingStatus = true
      setTimeout(function () {
        this.file = null
        this.loadingStatus = false
        this.$Message.success('Success')
      }, 1500)
    },
    handleView: function (name) {
      this.imgName = name
      this.visible = true
    },
    handleRemove: function (file) {
      const fileList = this.$refs.upload.fileList
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1)
    },
    handleSuccess: function (res, file) {
      file.url = 'https://www.baidu.com'
      file.name = '7eb99afb9d5f317c912f08b5212fd69a'
    },
    handleFormatError: function (file) {
      this.$Notice.warning({
        title: 'The file format is incorrect',
        desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
      })
    },
    handleMaxSize: function (file) {
      this.$Notice.warning({
        title: 'Exceeding file size limit',
        desc: 'File  ' + file.name + ' is too large, no more than 2M.'
      })
    },
    handleBeforeUpload: function () {
      const check = this.uploadList.length < 5
      if (!check) {
        this.$Notice.warning({
          title: 'Up to five pictures can be uploaded.'
        })
      }
      return check
    }
  }
}
</script>
<style scoped>
  .demo-upload-list {
      display: inline-block;
      width: 60px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      border: 1px solid transparent;
      border-radius: 4px;
      overflow: hidden;
      background: #fff;
      position: relative;
      box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
      margin-right: 4px;
  }
  .demo-upload-list img {
      width: 100%;
      height: 100%;
  }
  .demo-upload-list-cover {
      display: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, .6);
  }
  .demo-upload-list:hover .demo-upload-list-cover {
      display: block;
  }
  .demo-upload-list-cover i {
      color: #fff;
      font-size: 20px;
      cursor: pointer;
      margin: 0 2px;
  }
</style>
