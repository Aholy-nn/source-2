<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-07 17:01:51
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
      <z-editor ref="zEditor" :custom-config="customConfig" v-model="content"></z-editor>
        <z-button @click="getContent">查看html</z-button>
        <z-button @click="getText">查看text</z-button>
        <z-button @click="setContent">设置值</z-button>
        <div class="m-t-15">
          <z-code-editor :content="demo1"></z-code-editor>
        </div>
   </z-card>
    <z-card bordered dis-hover class="m-t-15">
      <div class="demo-api">
        <div class="anchor">
            <h3>props</h3>
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
            <tr>
                <td>value</td>
                <td>默认值</td>
                <td>String</td>
                <td></td>
            </tr>
            <tr>
                <td>custom-config</td>
                <td>配置</td>
                <td>Object</td>
                <td></td>
            </tr>
        </table>
        <div class="anchor">
            <h3>custom-config的属性</h3>
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
                    <td>menus</td>
                    <td>配置菜单</td>
                    <td>Array</td>
                    <td>[
                        'head', // 标题
                        'bold', // 粗体
                        'fontSize', // 字号
                        'fontName', // 字体
                        'italic', // 斜体
                        'underline', // 下划线
                        'strikeThrough', // 删除线
                        'foreColor', // 文字颜色
                        'backColor', // 背景颜色
                        'link', // 插入链接
                        'list', // 列表
                        'justify', // 对齐方式
                        'quote', // 引用
                        'emoticon', // 表情
                        'image', // 插入图片
                        'table', // 表格
                        'video', // 插入视频
                        'code', // 插入代码
                        'undo', // 撤销
                        'redo' // 重复
                        ]</td>
                </tr>
                <tr>
                    <td>zIndex</td>
                    <td>配置z-index,在customConfig中</td>
                    <td>Number</td>
                    <td>10000</td>
                </tr>
                <tr>
                    <td>lang</td>
                    <td>配置多语言,通过该配置项中的配置，将编辑器显示的文字，替换成你需要的文字。例：{
                        '设置标题': 'title',
                        '正文': 'p',
                        '链接文字': 'link text',
                        '链接': 'link',
                        '上传图片': 'upload image',
                        '上传': 'upload',
                        '创建': 'init'
                        }</td>
                    <td>Object</td>
                    <td></td>
                </tr>
                <tr>
                    <td>pasteFilterStyle</td>
                    <td>关闭粘贴样式的过滤</td>
                    <td>Boolean</td>
                    <td></td>
                </tr>
                <tr>
                    <td>pasteTextHandle</td>
                    <td>自定义处理粘贴的文本内容</td>
                    <td>Object</td>
                    <td></td>
                </tr>
                <tr>
                    <td>pasteIgnoreImg</td>
                    <td>忽略粘贴内容中的图片</td>
                    <td>Object</td>
                    <td></td>
                </tr>
                <tr>
                    <td>linkImgCallback</td>
                    <td>插入图片的地址</td>
                    <td>Function</td>
                    <td></td>
                </tr>
                <tr>
                    <td>linkImgCheck</td>
                    <td>插入网络图片的校验</td>
                    <td>Function</td>
                    <td></td>
                </tr>
                <tr>
                    <td>onfocus</td>
                    <td>配置 onfocus 函数,点击富文本区域会触发onfocus函数执行</td>
                    <td>Function</td>
                    <td></td>
                </tr>
                <tr>
                    <td>onblur</td>
                    <td>配置 onblur 函数</td>
                    <td>Function</td>
                    <td></td>
                </tr>
                <tr>
                    <td>colors</td>
                    <td>配置字体颜色、背景色</td>
                    <td>Array</td>
                    <td>[
                            '#000000',
                            '#eeece0',
                            '#1c487f',
                            '#4d80bf',
                            '#c24f4a',
                            '#8baa4a',
                            '#7b5ba1',
                            '#46acc8',
                            '#f9963b',
                            '#ffffff'
                        ]</td>
                </tr>
                <tr>
                    <td>emotions</td>
                    <td>配置表情</td>
                    <td>Array</td>
                    <td>[
                        {
                        alt: '[坏笑]',
                        src:
                        'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png'
                        },
                        {
                        alt: '[舔屏]',
                        src:
                        'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png'
                        }
                        ]</td>
                </tr>
                <tr>
                    <td>fontNames</td>
                    <td>配置字体</td>
                    <td>Array</td>
                    <td>[
                        '宋体',
                        '微软雅黑',
                        'Arial',
                        'Tahoma',
                        'Verdana'
                        ]</td>
                </tr>
                <tr>
                    <td>uploadImgShowBase64</td>
                    <td> 使用 base64 保存图片</td>
                    <td>Boolean</td>
                    <td></td>
                </tr>
                <tr>
                    <td>uploadImgServer</td>
                    <td>上传图片到服务器</td>
                    <td>String</td>
                    <td></td>
                </tr>
                <tr>
                    <td>showLinkImg</td>
                    <td>显示隐藏“网络图片”tab</td>
                    <td>Booloan</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3>events</h3>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>prop</th>
                    <th>descripton</th>
                    <th>arguments</th>
                </tr>
            </thead>
            <tr>
                <td>getText</td>
                <td>获取text值</td>
                <td>this.$refs.zEditor.getText()</td>
            </tr>
        </table>
        <a href="https://www.kancloud.cn/wangfupeng/wangeditor3/335776">点击查看更多细节</a>
    </div>
   </z-card>
</div>
</template>

<script>
export default {
  name: 'cpEditor',
  data: function () {
    return {
      customConfig: {
      },
      content: '默认内容',
      demo1: ' <z-editor ref="zEditor" :custom-config="customConfig" v-model="content"></z-editor>\r' +
              '<z-button @click="getContent">查看html</z-button>\r' +
              '<z-button @click="getText">查看text</z-button>\r' +
              '<z-button @click="setContent">设置值</z-button> \r' +
              ' export default {\r' +
              '   data: function () {\r' +
              '       return {\r' +
              '           customConfig1: {\r' +
              '                // menus : [\r' +
              '                //   \'head\',\r' +
              '                //   \'bold\',\r' +
              '                //   \'italic\'\r' +
              '                // ],\r' +
              '                zIndex:111,\r' +
              '                customUploadImg:this.customUploadImg\r' +
              '            },\r' +
              '            content: "默认内容"\r' +
              '        }\r' +
              '    },\r' +
              '    methods: {\r' +
              '        setContent:function(){\r' +
              '            this.content="<p>powered by wangeditor</p>"\r' +
              '        },\r' +
              '        getText:function(){\r' +
              '            alert(this.$refs.zEditor.getText())\r' +
              '        },\r' +
              '        getContent: function() {\r' +
              '            alert(this.content);\r' +
              '        },\r' +
              '        customUploadImg:function(files, insert){\r' +
              '            // files 是 input 中选中的文件列表\r' +
              '            // insert 是获取图片 url 后，插入到编辑器的方法\r' +
              '            // 上传代码返回结果之后，将图片插入到编辑器中\r' +
              '            insert(imgUrl)\r' +
              '        }\r' +
              '     }\r' +
              '}\r'
    }
  },
  methods: {
    setContent: function () {
      this.content = '<p>powered by wangeditor</p>'
    },
    getText: function () {
      alert(this.$refs.zEditor.getText())
    },
    getContent: function () {
      alert(this.content)
    },
    customUploadImg: function (files, insert) {
      // files 是 input 中选中的文件列表
      // insert 是获取图片 url 后，插入到编辑器的方法
      // 上传代码返回结果之后，将图片插入到编辑器中
      // insert(imgUrl)
    }
  }
}
</script>
<style scoped>
</style>
