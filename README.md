# 分支说明
* 本工程为iLead框架前端工程
* 为主要开发分支
* 对应的iLead版本为1.5.5.1-SNAPSHOT
# ilead4admin-ui
## 快速启动
### 安装cnpm
``` bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
可通过cnpm -v命令查看cnpm版本，从而检验cnpm安装成功与否，后续声明中不再分辨npm install与cnpm install，若自行配置了npm 私仓地址，则可通过npm install完成私仓中的依赖安装，其余依赖可通过cnpm install进行引入
- 若cnpm -v命令报错，可能原因为未添加系统变量path的内容，因为cnpm会被安装到Program Files\nodejs\node_global下，而系统变量path并未包含该路径。在系统变量path下添加该路径即可正常使用cnpm。
- 具体参考https://npm.taobao.org/
### 安装依赖
``` bash
cnpm install
```
如果第一步的cnpm安装始终不成功，可考虑使用npm install，但是容易可能出现下载失败以及下载速度过慢的问题
### 配置后端服务地址
修改/config/index.js文件中下述配置中的用户中心（iretail-web单体应用demo工程可做用户中心）后端地址
快速开发平台后端地址可不配置，不影响登录功能等，仅影响开发平台相关功能无法使用
``` vue
   proxyTable: {
      '/api/gen': {
        // 快速开发平台后端地址
        target: 'http://localhost:5004/',
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api/gen': '' // 需要rewrite重写的,
        }
      },
      '/api': {
        // 用户中心（iretail-web单体应用demo工程可做用户中心）后端地址
        target: 'http://localhost:8082/',
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': '' // 需要rewrite重写的,
        }
      }
    },
```
### 启动项目
``` bash
npm run dev
```
如果项目编译速度过慢，可考虑在根目录下的.babelrc文件中声明对dynamic-import-node插件的引入
```
"development": {
  "plugins": ["dynamic-import-node"]
},
```
## 其余命令说明
``` bash
# 打包命令，将前端工程打包，最后生成dist文件夹，该文件夹可用于将前端部署至Nginx
npm run build

# 打包同时查看分析报告
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e
f
# run all tests
npm test
```
## 部署步骤
1. 执行npm run build命令进行打包，将生成的dist文件夹上传至nginx安装目录apps文件下即可，建议dist文件夹更名为gaas-portal-ui
2. 增加Nginx配置，根目录下包含nginx.conf，为nginx配置demo文件，注意demo文件中的underscores_in_headers on配置项一定要在Nginx上配置，否则会出现登录时报错“token 002 ，未传递认证标识”

## 集成iLead-biz-gen开发平台组件步骤
当前工程默认未引入了开发平台组件，如果需要，可以参照下述引入组件步骤自行引入组件相关代码及声明
### iLead-biz-gen打包
对ilead-biz-gen工程执行打包命令，将生成的dist文件夹放置于当前ilead4admin-ui工程node_modules文件夹，更改文件夹名为ilead-biz-gen
说明：
- 当前工程根目录下已包含ilead-biz-gen集成所需文件，参照ilead-biz-gen.zip压缩包中的说明，将ilead-biz-gen依赖对应的文件夹直接解压至node_modules文件夹即可，无需打包更名
- 如果将ilead-biz-gen发布到npm私仓，则无需进行该步骤，只需在依赖声明时，新增ilead-biz-gen依赖声明(版本0.2.1)即可，依赖引入时，通过npm install将自动将从私仓中下载安装至node_modules中
### 依赖声明
package.json文件中dependencies模块新增下述依赖声明
```
"@smallwei/avue": "^2.8.22",
"deepmerge": "^4.2.2",
"element-ui": "^2.15.6",
"normalize-wheel": "^1.0.1",
"pig-avue-form-design": "^1.1.6",
"qiankun": "^2.4.0",
"resize-observer-polyfill": "^1.5.1",
"throttle-debounce": "^3.0.1",
```
### 依赖引入
执行下述命令完成依赖引入
```
cnpm install
```
### 引入element-ui
src/locale/index.js文件修改下述内容
```
// element-ui
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
// zhCN和enUS中新增element-ui中英文包的引入
let zhCN = Object.assign(zhLocale, zviewCN, vxeCN, frameworkCN, authuiCN)
let enUS = Object.assign(enLocale, zviewUS, vxeUS, frameworkUS, authuiUS)
```

### main.js引入
```
// 开发平台
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'
import DataSource from 'ilead-biz-gen'
import CodeGenerator from 'ilead-biz-gen'
import FormDesign from 'ilead-biz-gen'
import FormManagement from 'ilead-biz-gen'
import AvueFormDesign from 'pig-avue-form-design'
Vue.use(ElementUI, {
  size: 'small',
  menuType: 'text'
})
Vue.use(Avue)
Vue.use(DataSource)
Vue.use(CodeGenerator)
Vue.use(FormDesign)
Vue.use(FormManagement)
Vue.use(AvueFormDesign)
```

### 编写功能页面
通过使用页面标签，即可快速完成页面编写，本工程已将功能页面代码置于ilead-biz-gen.zip压缩包的gen文件夹中，将gen文件夹解压至src\views\demo\framework路径下

### 路由指定
本工程已将路由配置置于src/router/framework/routers-demo.js中并默认注释状态，开发者可视需要自行开启用于测试，或者自行修改（如修改路由配置，注意修改对应的vue代码文件位置）
说明: 启动时报错ilead-biz-gen imported multiple times，不影响运行

#version: 1.0.0
修改api-request.js 中增加方法

#version: 1.0.1 2019/10/10
subCompManageOrder.vue 添加了z-spread的demo
common.css添加了展开按钮的样式

#version: 1.0.2 2019/11/7
更新了zview
删除ilead-vtable
修改了demo页，ilead-vtable全部换成z-table
修改了common.css,添加了z-table的样式

#version: 1.0.2 2019/11/8
添加zview国际化

#version: 1.0.3 2019/11/19
新增vxeTable的9个demo页面

#version: 1.0.4 2019/12/5
新增25个demo页面

#version: 1.0.5 2019/12/12
添加tab菜单功能

#version: 1.0.6 2019/12/16
添加组件，z-detail-panel详情、z-edit-panel编辑、z-list-panel列表、z-search-panel查询表单
添加class属性frame-page在根元素标签
添加class属性frame-panel在row标签上使用

#version: 1.0.7 2019/12/19
修改首页的布局，将左侧菜单通栏显示，top移到右侧

#version: 1.0.8 2019/12/20
添加面包屑功能
添加登录页面
修改了菜单图标
添加了tab的两种风格展示，添加或去掉type="theme"

#version: 1.0.9 2019/12/24
ilead-side-menu,把to直接加在了menu-item上
添加了登录、登出功能

#version: 1.0.10 2019/12/25
搜索页面的分类部分改为多选
解决搜索页面tab点击的问题
替换title上的小图标
将list-panel、detail-panel、edit-panel、search-panel组件移到zview中
添加页面刷新功能

#version: 1.0.11 2019/12/28
修复了页面刷新历史不清空的问题
修复了菜单页面的警告
左侧菜单通过router中获取，
修改了结构，把框架相关的内容都移到framework中，framework不可修改，随时被替换
store添加了stores.js为方便开发者扩展使用
router添加了routers.js为方便开发者扩展使用
所有静态图片移至assets
static只可以引入第三方的静态文件

#version: 1.0.12 2019/12/31
修改了部分文件移动到framework下
实现登录、登出的接口对应

#version: 1.0.13 2020/1/02
添加是否本地

#version: 1.0.14 2020/1/03
添加动态菜单
demo菜单可关闭，在config里配置
添加默认首页为/home
router下的framework分出了个routers-demo，方便将其隐藏

#version: 1.0.15 2020/1/06
添加views里的parentView文件，为三级菜单的时候使用
修改了utils-framework.js的getRouteByMenu方法，引入ParentView
修改了index.vue的cacheList方法
修改了router-demo.js，引入ParentView
添加views里的组件demo
添加了styles的组件demo的样式

#version: 1.0.16 2020/1/08
views里,添加了组件demo

#version：1.0.16 2020/1/13
修改webpack.base.conf.js 增加ilead-utils工具类的支持
在static目录下增加ilead-utils的工具类文件
router里的采用懒加载require的方式引入文件

#version：1.0.16 2020/1/14
vxe-table,index.css升级

#version：1.0.16 2020/1/17
router 添加process.env.IF_LOCAL &&的判断
dev.env.js登录不为本地时，去掉 IF_LOCAL: '"local"'或修改成IF_LOCAL: '""'

#version：1.0.17 2020/2/17
修改src/api/framework/index.js中的getSessionData方法接口调整
修改axios.js中iflocle改为ifLocale
修改config-framework.js中iflocle改为ifLocale
修改login.vue中iflocle改为ifLocale

#version：1.0.18 2020/3/2
static/data/function.json,修改了菜单
src/api/framework/index.js，添加isAuth
src/common/http/api-request.js，修改成config ? Object.assign(config, options) : options
src/components/framework/ilead-sidebar/ilead-sidebar.vue，添加else{that.$Message.error('获取菜单异常!')}
src/router/index.js,添加router.onError异常捕获
src/views/framework/login，this修改成that
src/views/authui5,文件新添加
src/views/index.vue,添加Api.getCurrentUser()和Api.isAuth()


#version：1.0.18 2020/3/3
src/views/index.vue，添加是否本地判断
src/components/framework/ilead-sidebar/ilead-sidebar.vue，getFunctionData方法添加是否本地判断
#version：1.0.18 2020/3/5
src/common/http/axios.js,添加了超时跳转到登录页
#version：1.0.18 2020/3/10
src/common/http/axios.js,调用authHandler方法
src/common/auth,添加auth文件
static/style/vxeTable.css添加vxeTable.css
#version：1.0.18 2020/3/5
src/common/http/axios.js,添加了超时跳转到登录页
#version：1.0.18 2020/3/12
修改api/framework/index.js增加查询菜单相关的接口app判断
修改common/auth/index.js 将认证的header接口统一封装起来；增加删除本地认证信息的方法
修改common/http/axios.js 将获取认证信息的地方统一从auth.js获取，将接口认证的信息放置到auth.js
修改config/framework/config-framework.js 增加是否ifSSO用来判断是否单点登录和mainDomain用于判断sso的主域名配置
修改router/index.js 修改请求前页面跳转的逻辑
修改store/framework/stores-framework.js 增加getter方法和action方法
修改views/index.vue将获取session信息的地方转移到store中
设置SSO设置需要配置config/framework/config-framework.js 中的ifSSO和mainDomain

#version：1.0.18 2020/3/12
src/components/framework/ilead-sidebar/ilead-side-menu.vue,watch方法的nameId通过getNameId方法获取
src/components/framework/ilead-sidebar/ilead-sidebar.vue,添加if(config.menuType === 2)
src/config/framework/config-framework.js,添加 menuType
添加/src/router/framework/routers-menu.js
src/router/index.js，把routerMenu添加路由，获取不到to.name返回404
src/utils/framework/utils-framework.js，添加getNameId方法
src/styles，把一些样式提到了common.css中

#version：1.0.19 2020/3/16
auto-complete组件,demo升级
form组件，demo升级
select组件，demo升级
slider组件，demo升级
table组件，demo升级
affix组件，demo升级
avatar组件，demo升级
carousel组件，demo升级

#version：1.0.19 2020/3/17
src/router/index.js，添加if (isLocal) {auth.removeAuthToken() next()}
src/views/index.vue，logout方法中添加 location.reload()
src/utils/framework/utils-framework.js，添加getMenuTypeOne方法
src/components/framework/ilead-sidebar/ilead-sidebar.vue，config.menuType为1时，调用getMenuTypeOne方法

#version：1.0.20 2020/3/20
修改axios.js 将获取header的方式从auth组件获取
修改auth/index.js 将调整相应的认证处理
修改config-framework.js 增加SSO相关配置
修改router/index.js 路由跳转增加逻辑处理
修改stores-framework.js增加appId默认值
修改views/index.vue 增加登出移除cookie设置

#version：1.0.20 2020/3/25
修改index.html升级UI版本
修改login.vue 将设置session的方法去掉，登录成功设置Token方法改为从auth中设置
修改stores-framework.js增加config组件设置国际化语言
修改common/auth/index.js增加设置token方法
修改stores-framework.js 解决demo菜单中包含系统菜单bug
修改login.vue增加loadingbar
修改router/index.js增加获取session数据的loadingbar
修改common/auth/index.js增加设置token方法

#version：1.0.20 2020/3/25
src/store/framework/stores-framework.js,menuData方法,修改了routers的获取路径
src/styles/framework/common.css,.zvu-form-item-content添加折行样式
#version：1.0.20 2020/4/7
修改login.vue增加$Message引用错误问题

#version：1.0.20 2020/4/11
修改router/index.js将loading不显示图标处理
修改common.js增加loading滚动的样式
修改login.vue修改loading图标不显示问题

#version：1.0.20 2020/04/13
src/views/authui5，input框添加max-length字数限制
src/styles/framework/common.css，添加per-center样式
把vxeTable.css本地获取，修改成node_modules获取
去掉vxeTable.css文件
spin，组件添加图标旋转功能
login.vue,添加校验失败时调用重置方法，添加表单回车时调用登录方法
修改router/index.js和axios.js增加token一致性认证
修改common/auth/index.js增加认证本地系统token认证
修改build下的webpack.base.conf.js修改css规则 解决vxeTable.css无法import的问题
login.vue,添加校验失败时调用重置方法，添加表单回车时调用登录方法，添加登陆时输入框按钮变为只读
所有localStorage变为sessionStorage

#version：1.0.20 2020/04/14
sidebar，宽度设置为200px，添加ellipsis菜单超出部分是否使用省略号的属性，调整toggle按钮位置
src/store/framework/stores-framework.js，添加pageLoading
src/router/index.js，zView.Spin.show()修改成 store.commit('setPageLoading', true)，
zView.Spin.hide()修改成store.commit('setPageLoading', false)
src/styles/framework/common.css，修改loading样式，添加vtree省略号的样式
src/views/index.vue，添加spin和animate-loading
src/views/index.vue，添加spin和animate-loading

#version：1.0.20 2020/04/16
src/router/index.js,添加菜单和添加路由位置逻辑重新调整
src/styles/common.css，vtree输入框缩短，zview表格间距
src/utils/framework/utils-framework.js，getMenuTypeOne方法里icon和iconClass转换
authui5/usergroup/userGroupManage/userGroupManage.vue，修改handleReset方法,调整z-card间距
authui5/organization/orgManage/orgManage.vue，修改handleReset方法,调整z-card间距
authui5/function/functionManage/functionManage.vue,调整z-card间距
authui5/user/addSearchOrg，vtree添加 :node-icon="true"
authui5/user/userManage/userManage.vue，去掉this.$refs.editUser.modelType = 'add'
#version：1.0.20 2020/04/16
修改package.json升级vxe-table的版本
修改auth/index.js checkLocalAuthToken方法从返回boolean改为返回具体对象；修改removeAuthToken方法增加store中setOrgId，setUserCode，setsrc/store/frameworkUserName设置为空
修改/components/framework/ilead-sidebar/lead-sidebar.vue修改this的无效引用
修改/common/http/axios.js修改认证checkLocalAuthToken逻辑
修改/router/index.js修改整体认证逻辑
修改/views/index.vue登出的逻辑
修改/config/framework/config-framework.js增加属性urlWhiteList 白名单，白名单中的url不会被前端认证拦截

#version：1.0.20 2020/04/18
authui5,下modal添加fixed属性和maxHeight属性
authui5/function/functionManage/functionManage.vue，iconData在created里获取
authui5/function/api/api.js,添加 getIconData方法
static/data,添加icon-data.json

#version：1.0.20 2020/04/21
src/styles/framework/components/ilead-sidebar.css，修改了page-sidebar-closed的样式
src/store/framework/stores-framework.js,为了兼容ie10,添加navigator.language &&
authui5/function/functionManage/functionManage.vue,提交方法去掉that.value = ''that.clearModel()
authui5/organization/orgManage/orgManage.vue,提交方法去掉that.value = ''that.clearModel()
authui5/roles/rolePrivilege/rolePrivilege.vue,提交方法去掉that.value = ''that.clearModel()
authui5/roles/rolesManage/rolesManage.vue,提交方法去掉that.value = ''that.clearModel()
authui5/usergroup/userGroupManage/userGroupManage.vue,提交方法去掉that.value = ''that.clearModel()

#version：1.0.20 2020/04/22
roles/rolesManage/rolesManage.vue,修改doDataPrivilege方法，树的value值
roles/rolePrivilege/rolePrivilege.vue，修改title名

#version：1.0.20 2020/04/28
src/router/index.js,onError添加跳转404，增加初始化菜单的http交互.uiManage.initFuncurl()
src/router/framework/routers-framework.js,添加404、500、unknown、notDev的路由
修改src\store\framework\stores-framework.js将默认的appId修改为空
修改src\components\framework\ui-privilege\index.vue修改按钮权限逻辑处理
添加src\common\ui-manage\index.js将ui管理的逻辑进行分离
修改src\views\authui5\user\userManage\userManage.vue增加按钮权限
修改src\views\authui5\user\api\api.js中的userReset方法

#version：1.0.20  2020/05/14
src/views/authui5/user/addRole/addRole.vue,tablePage.rows改成10000
src/views/authui5/user/api/api.js,queryRoles方法的roles改成tree
src/views/index.vue,添加编辑密码功能
src/views/authui5/user/editPas/editPas.vue，添加from属性
src/views/authui5/user/addRole/addRole.vue,rows改成10000
src/views/authui5/user/userManage/userManage.vue,editPas方法添加reset
src/config/framework/config-framework.js,添加iftab
src/views/index.vue,添加ifTab的相关配置
src/styles/framework/pages/index.css,添加notab样式

#version：1.0.20  2020/05/19
src/views/authui5/common，添加common文件
src/main.js，去掉 if (process.env.NODE_ENV !== 'production') require('@/mock')
src/mock，去掉文件
src/views/authui5/organization/orgManage/orgManage.vue，添加import {AuthConstants} from '../../common'，'1'修改成AuthConstants.org.RESULT_AUTH_ORG_NOT_DEL
src/components/framework,添加vxe-table-export文件
src/common/http/api-request.js,添加download方法
src/views/authui5/user/userManage/userManage.vue,添加导出功能
package.json，添加vxe-table-plugin-export-xlsx添加xlsx

#version：1.0.20  2020/05/21
src/common/http/api-request.js,添加getBaseUrl方法

#version：1.0.20  2020/05/22
src/config/framework/config-framework.js,baseUrl修改属性
src/components/framework/vxe-table-export/export-panel.js,添加storeData.visible判断,添加exportConfig.inPaging判断
src/styles/framework/common.css,.ui-page-loading的left改成200px

src/styles/framework/pages/index.css，.frame-main.no-tab .ui-page-loading，的top改成70px
src/views/authui5/roles/rolesManage/rolesManage.vue，edit方法调整temp.parentId位置

#version：1.0.20  2020/05/27
src/config/framework/config-framework.js,baseUrl修改属性
src/components/framework/vxe-table-export,解决ie兼容，添加固定高度属性
添加src/components/framework/ilead-tab-menu/index.js
添加src/components/framework/ilead-sidebar/index.js
src/views/index.vue,ileadSidebar、ileadTabMenu组件改成全局注册

#version：1.0.20  2020/05/28
添加src/config/framework/vxe-table
src/views/authui5，vxetable相关的引用改成@/components/framework/vxe-table。修改了查询时分页不跳转第一页的问题，var声明方式改成let
package.js,vxe-table版本修改成2.9.9,vxe-table-plugin-export-xlsx版本修改成1.3.11，xe-utils版本修改成2.4.5
src/views/framework/vxeTable,解决升级版本后警告问题
src/router/framework/routers-demo.js,修改路由名，解决重名警告问题

#version：1.0.20  2020/06/01
src/components/framework/ilead-sidebar/ilead-side-menu.vue,<i>修改成<Icon>
src/common/auth/index.js,02注释了
src/components/framework/vxe-table/index.js，添加国际化
src/locale，添加国际化
src/views/index.vue,添加国际化

#version：1.0.20  2020/06/02
src/views/framework/login/login.vue,添加国际化按钮
styles/framework/pages/login/login.css,添加国家化按钮样式

#version：1.0.21  2020/06/02
src/api/framework/index,修改了login方法，添加了queryTenantByUserCode和getSecurityCode的方法
src/common/auth/index，getAuthHeader、setAuthToken、removeAuthToken添加tenantId
src/common/http/axios.js，请求拦截添加tenantId，修改Content-Type从config获取
src/component，添加encrypt文件
src/config/framework/config-framework.js，添加了multiApply、ifTenant、urlStartWhiteList、http对象,修改了urlWhiteList
src/styles/framework/common.css，添加了样式
src/utils/framework/utils-framework.js,修改了ifUrlWhiteList方法
src/views/authui5，添加了usergroupn文件
src/views/authui5，添加了tenant文件
src/views/authui5，添加了roleTemplate文件
src/views/authui5，添加了original文件
src/views/authui5/user/userManage/userManage.vue，query添加清空高亮行
src/views/authui5/roles，添加了业务授权、数管理授权、据授权的多应用
src/views/authui5/restype，外部资源管理,添加多应用
src/views/authui5/datacatego/authData，数据授权，添加多应用
src/views/framework/login/login.vue，添加多租户，添加验证码
static/data/function.json，修改了菜单

添加src/views/authui5/tenant/tenantManage/tenantManage.vue
src/views/authui5/tenant/addApp/addApp.vue，新添加文件
src/views/authui5/function/functionManage/functionManage.vue，添加多应用功能
src/views/authui5/roleTemplate/roleTemplateManage/roleTemplateManage.vue，添加handleClose方法

添加src/views/authui5/log
添加src/views/manage

#version：1.0.21  2020/06/03
srcc/viewsc/authui5/property，添加系统属性管理
src/views/framework文件移动至src/views/demo/framework文件移动至src
multiApply修改成multiApp
src/views/authui5/usergroupn/userGroupManage/userGroupManage.vue,创建时间添加formatTime

#version：1.0.22  2020/06/09
src/views/authui5/user/userManage/userManage.vue。input添加clearable。vxe-table添加show-header-overflow、show-overflow属性。操作列添加width。unlock方法和resetPas方法判断code是否为01并去掉that.query()。refreshTable方法的refreshData改成syncData。query方法添加that.$refs['childTable']的判断。
src/views/authui5/user/editUser/editUser。input添加clearable。添加<z-alert>错误提示。 v-show="isNameShow"改成v-show="modelType == 'edit'"。v-show="isIdShow"改成v-show="modelType == 'add'"。ruleValidate去掉trigger: 'blur'，添加了orgName。添加onValidate方法。添加validateOrgName方法。editOrg方法中添加this.$refs.addSearchOrg.modelIsOpen = true。handleSubmit方法中的校验放置validateOrgName方法。that.$Message.error(response.data.msg)修改成that.errorMsg = response.data.msg。
src/views/authui5/user/editPas/editPas.vue。input添加clearable。添加<z-alert>错误提示。 ruleValidate去掉trigger: 'blur'。添加onValidate方法。save方法中 that.$Message.error(response.data.msg)修改成that.errorMsg = response.data.msg。
src/views/authui5/user/addRole/addRole.vue。vxe-table上去掉checkRowKeys:checkRows添加checkMethod:checkMethod。去掉vxe-pager。添加checkMethod方法。query方法添加table.setAllTreeExpansion(true)。checkRowsFunc方法this.checkRows.push(item.id)修改成table.setCheckboxRow(item, true)。
src/views/authui5/user/addGroup/addGroup.vue，树展示修改成表格树
src/views/manage/aksk，akskmanage修改为aksk
src/views/manage/cert，certmanage名称修改为cert
src/styles/framework/common.css,.vxe-table .vxe-cell去掉，添加column高度36px。添加vxe-table--tooltip-wrapper.theme--dark的z-index
src/views/authui5/user/addGroup/addGroup.vue，树修改成的列表

#version：1.0.22  2020/06/12
authui5下的vxe-table添加表格添加 show-header-overflow、show-overflow
authui5下的input,添加clearable
src/styles/framework/common.css,添加所属组织抽屉样式
添加src/views/authui5/roles/addUsern
src/views/authui5/roles/addOrg/addOrg.vue，设置父子不关联，添加树操作
src/views/authui5/roles/api，添加getUserOrgTree、roleUserWaitList、roleUserList、changeBatch
src/views/authui5/roles/editRoles，添加自定义校验
src/views/authui5/roles/rolePrivilege，choose-mode="some"改为choose-mode="all"
src/views/authui5/roles/rolesManage，去掉分页，实现非管理角色不能做管理授权，删除时判断esponse.data.code === '01'
src/views/authui5/organization/orgManage，排序使用z-input-number，添加批量删除，添加部门和岗位对应图标
src/views/authui5/function/functionManage，排序使用z-input-number
src/views/authui5/usergroupn/groupAddUser，添加禁用admin项，addUser和deleteUser直接提交，行政组织改为所属组织
src/views/authui5/usergroupn/resource，添加未选择列表提示
src/views/authui5/usergroupn/userGroupEdit，parentGroupId添加默认值
src/views/authui5/usergroupn/userGroupManage，添加ifMultiApp判断
src/views/authui5/datacategory/authData，只有全选和非全选时禁用
src/views/authui5/datacategory/dataCategory，删除时判断esponse.data.code === '01'
#version：1.0.22  2020/06/13
修改src/views/authui5/function/functionManage，将树展示从异步树改为同步树
修改src/views/authui5/function/api/index.js，增加同步树获取接口

#version：1.0.22  2020/06/15
src/views/authui5/user/userManage,添加刷新按钮demo,修改导出按钮demo
src/views/authui5/roles/addOrg,修改成同步加载树
src/views/authui5/roles/api，getOrgTree接口有修改
添加src/views/authui5/organization/showRoles
src/views/authui5/organization/orgManage，添加查看角色
src/views/authui5/organization/api，添加getOrgRoles
authui5/function/functionManage，添加批量删除
添加/src/components/framework/vxe-table-extend
src/components/framework/vxe-table-export/export-panel.js，去掉导出按钮
src/components/framework/vxe-table，引入vxeTableExtend,去掉vxeTableExport

#version：1.0.22  2020/06/16
src/views/authui5/roles/addOrg,修改已选中从接口获取
src/views/authui5/roles/api，添加getOrgChecks方法
src/components/framework/vxe-table-export，selectList自己定义的，data.colDateCode的内容去掉了

#version：1.0.22  2020/07/12
修改src\common\auth\index.js 增加authType == 3的判断，针对只用Token认证

#version：1.0.22  2020/08/17
src/views/framework/login/login.vue，全部异常信息$message弹出，添加errorMsg显示，catch方法isReadonly设置为false

#version：1.0.22  2020/09/01
升级zview.min.js从0.1.16到0.1.17
修改src/config/framework/config-framework.js将默认配置改为单应用模式
修改src/views/framework/login/login.vue 修改无效的变量定义

#version：1.0.22  2020/09/04
升级zview.min.js修改z-vtree组件
修改src/views/authui5/roles/rolePrivilege/rolePrivilege.vue修改connectInterface中初始化定义
修改src/views/authui5/function/functionManage/functionManage.vue修改整体布局跟多TAB页多15px

#version：1.0.22  2020/09/08
修改src\views\authui5\dict\dictManage\dictManage.vue修改增加节点后刷新节点，调整样式，叶子节点可以增加类型

#version：1.0.22  2020/09/23
src\views 新增admin文件夹
src\views\admin 新增files文件夹和seq文件夹
src\views\admin\files 新增fileStorageManage.vue文件，文件存储信息管理功能主界面
src\views\admin\files 新增editFileStorage.vue文件，文件存储信息编辑界面
src\views\admin\files 新增api文件夹并在该文件夹下新增api.js文件，全局序号管理功能的查询，添加，删除，编辑功能接口
src\views\admin\seq   新增seqManage.vue，全局序号管理功能主界面
src\views\admin\seq   新增editSeq.vue，全局序号编辑界面
src\views\admin\seq   新增api文件夹并在该文件夹下新增api.js文件，全局序号管理功能的查询，添加，删除，编辑接口
src\router\framework\routers-menu.js 新增全局序号管理功能和文件存储信息管理功能

#version：1.0.22  2020/10/14
src/views/authui5/authappinfo/editAuthAppInfo/editAuthAppInfo.vue 增加状态值空值校验
src/views/authui5/datacategory/authData/authData.vue 修复后端数据只有部分子节点选中，但前端显示所有同级子节点和父节点都被选中的bug
src/views/authui5/organization/orgManage/orgManage.vue 修复由于主键未传至后端导致的岗位信息修改失败问题
src/views/authui5/restype/resManage/resManage.vue 修复因为多余双引号导致的后端删除数据失败问题
src/views/authui5/tenant/tenantManage/tenantManage.vue 修正提示内容
src/views/authui5/usergroupn/userGroupManage/userGroupManage.vue 修复重置功能异常bug

#version：1.0.22  2020/10/24
添加nginx.conf 增加ngnix的配置样例

#version：1.0.22  2020/10/30
src/views/authui5/restype/resManage/resManage.vue 修复缺少双引号导致后端删除数据失败问题

src\views\manage\aksk\akSkManage\akSkManage.vue 修复过期时间未显示bug

#version：1.0.22  2020/10/30
nginx.conf 更新nginx.conf

#version：1.0.22  2020/11/12
src/views/authui5/authappresinfo/authAppResInfoManage/authAppResInfoManage.vue 修复资源类型为HTTP与分布式服务时，前端无法显示的bug
src/views/authui5/restype/resManage/resManage.vue 修复资源类型名称为HTML方法时，前端错误显示为HTTP方法的bug
src/views/authui5/roles/rolesManage/rolesManage.vue 修复前端添加角色和修改角色弹窗标题均为添加角色的bug

#version：1.0.22  2020/11/12
src/views/authui5/function/functionManage/functionManage.vue 解决bug:新增节点后，未刷新节点树
src/views/manage/cert/certManage/certManage.vue 解决证书管理查询条件无效的bug

#version：1.0.22  2020/11/19
src/router/framework/routers-menu.js 新增邮件信息管理功能
src/views/admin/mail/api/api.js 新增文件，邮件信息管理功能的API接口
src/views/admin/mail/editMail.vue 新增文件，邮件信息管理功能中添加，编辑用户界面
src/views/admin/mail/mailManage.vue 新增文件，邮件信息管理功能主界面
src/views/admin/mail/mailManage.vue 修改文件，邮件信息管理功能界面优化

#version：1.0.22  2020/11/20
src/views/admin/mail/mailManage.vue 修改文件，优化页面布局，解决无序号显示问题，增加编辑发送成功状态邮件的处理
src/views/admin/mail/editMail.vue 修改文件，优化页面布局，新增字段校验

#version：1.0.22  2020/11/23
src/views/framework/login/login.vue 修改文件，将登陆时向后端传输的密码md5字符串从小写改为大写

#version：1.0.22  2020/11/25
src/views/authui5/user/editUser/editUser.vue 修改文件，按照自定义日期格式进行属性绑定

#version：1.0.22  2021/2/7
src/components/framework/ilead-sidebar/ilead-sidebar.vue 修改文件，menutype=1时针对扩展菜单构造特殊路由
src/components/framework/ilead-tab-menu/ilead-tab-menu.vue 修改文件，解决刷新页面的时候出现的navigation  canceled from "XX" to "XX" with a new navigation问题
src/utils/framework/utils-framework.js 修改文件，新增方法getRouteByMenuNew 
src/views/externalMenu.vue 新增文件，用于加载第三方网页
src/views/authui5/function/functionManage/functionManage.vue 修改文件，修改functionUrl的最大长度限制，新增对/[web]开头的特殊url地址的编码处理

src/views/authui5/user/editPas/editPas.vue 修改文件，新增在userPswRule=3时最小密码长度的配置

#version：1.0.22  2021/2/8
src/views/admin/mail/mailManage.vue 修改文件，修复实际发送请求时的时间比用户选择的时间晚8小时的bug

#version：1.0.22  2021/3/30
src/router/framework/routers-menu.js 修改文件，新增定时任务管理功能，任务运行日志功能，任务异常日志功能
src/views/schedule/api/api.js 新增文件，任务管理功能的API接口
src/views/schedule/editJob.vue 新增文件，新增/编辑任务的界面；修改文件，修复错误的后端接口调用返回判断条件
src/views/schedule/exceptionLogs.vue 新增文件，任务异常日志功能界面
src/views/schedule/executeLogs.vue 新增文件，任务执行日志功能界面
src/views/schedule/scheduleJob.vue 新增文件，调度任务功能界面
src/views/schedule/scheduleManage.vue 新增文件，任务管理功能界面

src/views/schedule/api/api.js 修改文件，修复错误的api接口地址
src/views/schedule/exceptionLogs.vue 修改文件，修复错误的后端接口调用返回判断条件,修复缺失的delBatch方法，优化界面布局
src/views/schedule/executeLogs.vue 修改文件，修复错误的后端接口调用返回判断条件,修复缺失的delBatch方法，优化界面布局
src/views/schedule/scheduleJob.vue 修改文件，修复错误的后端接口调用返回判断条件
src/views/schedule/scheduleManage.vue 修改文件，修复错误的后端接口调用返回判断条件,修复缺失的delBatch方法，优化界面布局

#version：1.0.22  2021/3/31
src/views/authui5/property/editSysProperty/editSysProperty.vue 修改文件，修复非多租户模式下仍然要求租户标识必须输入的Bug

src/views/authui5/usergroupn/resource/authResource.vue  修改文件，修复非多应用模式下仍然要求选择应用的Bug

#version：1.0.22  2021/3/31
src/router/framework/routers-menu.js 去掉未实现的接口管理功能路由

#version：1.0.22  2021/4/8
src/views/schedule/editJob.vue 修复故障恢复选项的文本显示与实际值相悖的问题

#version：1.0.22  2021/4/28
src/views/authui5/user/addSearchOrg/addSearchOrg.vue 修改文件
src/views/authui5/user/editUser/editUser.vue 修改文件
src/views/authui5/user/userManage/userManage.vue 修改文件：修复给用户分配岗位时，岗位Id错误分配到组织Id;修改用户列表使其显示岗位信息

#version：1.0.22  2021/4/29
src/views/authui5/user/editUser/editUser.vue 修改文件，修复handleReset方法未重置岗位名称的问题

#version：1.0.22  2021/4/30
src/router/index.js 修改文件，解决刷新页面时的加载阻塞问题
src/views/authui5/log/api/api.js 修改文件，修复错误的审计日志查询接口地址
src/views/authui5/roles/api/api.js 修改文件，移除不存在的接口
src/views/authui5/roles/rolePrivilege/rolePrivilege.vue 修改文件，移除角色管理中对不存在的接口的调用

















 


