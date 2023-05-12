<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-03-17 16:23:41
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
   <z-card bordered dis-hover class="m-t-15">
      <z-row :gutter="15">
        <z-col span="12">
          <z-form ref="formInline" :model="formInline" :rules="ruleInline" inline>
              <z-form-item prop="user">
                  <z-input type="text" v-model="formInline.user" placeholder="Username">
                      <z-icon type="ios-person-outline" slot="prepend"></z-icon>
                  </z-input>
              </z-form-item>
              <br>
              <z-form-item prop="password">
                  <z-input type="password" v-model="formInline.password" placeholder="Password">
                      <z-icon type="ios-locked-outline" slot="prepend"></z-icon>
                  </z-input>
              </z-form-item>
              <z-form-item>
                  <z-button type="primary" @click="handleSubmit('formInline')">Signin</z-button>
              </z-form-item>
          </z-form>
          <div class="example-desc">
              <header class="example-header"><span>行内表单</span></header>
              <p>设置属性 inline，表单元素可以水平排列。</p>
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
          <z-form ref="formItem" :model="formItem" :label-width="80" label-position="left"
            :rules="ruleValidate">
            <z-form-item label="Input" prop="input">
                <z-input v-model="formItem.input" placeholder="Enter something..."></z-input>
            </z-form-item>
            <z-form-item label="Select" prop="select">
                <z-select v-model="formItem.select">
                    <z-option value="beijing">New York</z-option>
                    <z-option value="shanghai">London</z-option>
                    <z-option value="shenzhen">Sydney</z-option>
                </z-select>
            </z-form-item>
            <z-form-item label="DatePicker">
                <z-row>
                    <z-col span="11">
                        <z-date-picker type="date" placeholder="Select date"
                            v-model="formItem.date"></z-date-picker>
                    </z-col>
                    <z-col span="2" style="text-align: center">-</z-col>
                    <z-col span="11">
                        <z-time-picker type="time" placeholder="Select time"
                            v-model="formItem.time"></z-time-picker>
                    </z-col>
                </z-row>
            </z-form-item>
            <z-form-item label="Radio">
                <z-radio-group v-model="formItem.radio">
                    <z-radio label="male">Male</z-radio>
                    <z-radio label="female">Female</z-radio>
                </z-radio-group>
            </z-form-item>
            <z-form-item label="Switch">
                <z-switch v-model="formItem.switch" size="large">
                    <span slot="open">On</span>
                    <span slot="close">Off</span>
                </z-switch>
            </z-form-item>
            <z-form-item label="Slider">
                <z-slider v-model="formItem.slider" range></z-slider>
            </z-form-item>
            <z-form-item label="Text">
                <z-input v-model="formItem.textarea" type="textarea"
                    :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></z-input>
            </z-form-item>
            <z-form-item>
                <z-button type="primary" @click="handleSubmit('formItem')">Submit</z-button>
                <z-button type="primary" ghost @click="handleReset('formItem')" style="margin-left: 8px">
                    Reset</z-button>
            </z-form-item>
        </z-form>
        <div class="example-desc">
            <header class="example-header"><span>基础用法</span></header>
            <div>
                <p>* 在 Form 内，每个表单域由 FormItem
                    组成，可包含的控件有：Input、Radio、Checkbox、Switch、Select、Slider、DatePicker、TimePicker、Cascader、Transfer、InputNumber、Rate、Upload、AutoComplete、ColorPicker。
                </p>
                <p>* 给 FormItem 设置属性 label 可以显示表单域的标签，需要给 Form 设置 label-width。</p>
                <p>* 给 FormItem 设置属性 label-for 可以指定原生的 label 标签的 for 属性，配合设置控件的 element-id 属性，可以点击
                    label 时聚焦控件。</p>
                <p>* 设置属性 label-position，可以改变表单域标签的位置，left 为左对齐，right 为右对齐，top 会置于表单域顶部。</p>
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
          <z-form :model="formLeft" label-position="left" :label-width="100">
              <z-form-item label="Title">
                  <z-input v-model="formLeft.input1"></z-input>
              </z-form-item>
              <z-form-item label="Title name">
                  <z-input v-model="formLeft.input2"></z-input>
              </z-form-item>
              <z-form-item label="Aligned title">
                  <z-input v-model="formLeft.input3"></z-input>
              </z-form-item>
          </z-form>
          <z-form :model="formRight" label-position="right" :label-width="100">
              <z-form-item label="Title">
                  <z-input v-model="formRight.input1"></z-input>
              </z-form-item>
              <z-form-item label="Title name">
                  <z-input v-model="formRight.input2"></z-input>
              </z-form-item>
              <z-form-item label="Aligned title">
                  <z-input v-model="formRight.input3"></z-input>
              </z-form-item>
          </z-form>
          <z-form :model="formTop" label-position="top">
              <z-form-item label="Title">
                  <z-input v-model="formTop.input1"></z-input>
              </z-form-item>
              <z-form-item label="Title name">
                  <z-input v-model="formTop.input2"></z-input>
              </z-form-item>
              <z-form-item label="Aligned title">
                  <z-input v-model="formTop.input3"></z-input>
              </z-form-item>
          </z-form>
          <div class="example-desc">
              <header class="example-header"><span>对齐方式</span></header>
              <div>
                  <p>设置属性 label-position，可以改变表单域标签的位置，left 为左对齐，right 为右对齐，top 会置于表单域顶部。</p>
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
            <z-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
              <z-form-item label="Name" prop="name">
                  <z-input v-model="formValidate.name" placeholder="Enter your name"></z-input>
              </z-form-item>
              <z-form-item label="E-mail" prop="mail">
                  <z-input v-model="formValidate.mail" placeholder="Enter your e-mail"></z-input>
              </z-form-item>
              <z-form-item label="City" prop="city">
                  <z-select v-model="formValidate.city" placeholder="Select your city">
                      <Option value="beijing">New York</Option>
                      <Option value="shanghai">London</Option>
                      <Option value="shenzhen">Sydney</Option>
                  </z-select>
              </z-form-item>
              <z-form-item label="Date">
                  <z-row>
                      <z-col span="11">
                          <z-form-item prop="date">
                              <z-date-picker type="date" placeholder="Select date"
                                  v-model="formValidate.date"></z-date-picker>
                          </z-form-item>
                      </z-col>
                      <z-col span="2" style="text-align: center">-</z-col>
                      <z-col span="11">
                          <z-form-item prop="time">
                              <z-time-picker type="time" placeholder="Select time"
                                  v-model="formValidate.time"></z-time-picker>
                          </z-form-item>
                      </z-col>
                  </z-row>
              </z-form-item>
              <z-form-item label="Gender" prop="gender">
                  <z-radio-group v-model="formValidate.gender">
                      <z-radio label="male">Male</z-radio>
                      <z-radio label="female">Female</z-radio>
                  </z-radio-group>
              </z-form-item>
              <z-form-item label="Hobby" prop="interest">
                  <z-checkbox-group v-model="formValidate.interest">
                      <z-checkbox label="Eat"></z-checkbox>
                      <z-checkbox label="Sleep"></z-checkbox>
                      <z-checkbox label="Run"></z-checkbox>
                      <z-checkbox label="Movie"></z-checkbox>
                  </z-checkbox-group>
              </z-form-item>
              <z-form-item label="Desc" prop="desc">
                  <z-input v-model="formValidate.desc" type="textarea"
                      :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></z-input>
              </z-form-item>
              <z-form-item>
                  <z-button type="primary" @click="handleSubmit('formValidate')">Submit</z-button>
                  <z-button type="primary" ghost @click="handleReset('formValidate')"
                      style="margin-left: 8px">Reset</z-button>
              </z-form-item>
          </z-form>
          <div class="example-desc">
              <header class="example-header"><span>表单验证</span></header>
              <div>
                  <p>Form 组件基于 async-validator 实现的数据验证，给 Form 设置属性 rules，同时给需要验证的 FormItem 设置属性 prop
                      指向对应字段即可。</p>
                  <p>完整的验证规则请参照开源项目 async-validator。</p>
                  <p>验证方法也支持 Promise。</p>
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
           <z-form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
              <z-form-item label="Password" prop="passwd">
                  <z-input type="password" v-model="formCustom.passwd"></z-input>
              </z-form-item>
              <z-form-item label="Confirm" prop="passwdCheck">
                  <z-input type="password" v-model="formCustom.passwdCheck"></z-input>
              </z-form-item>
              <z-form-item label="Age" prop="age">
                  <z-input type="text" v-model="formCustom.age" number></z-input>
              </z-form-item>
              <z-form-item>
                  <z-button type="primary" @click="handleSubmit('formCustom')">Submit</z-button>
                  <z-button type="primary" ghost @click="handleReset('formCustom')" style="margin-left: 8px">
                      Reset</z-button>
              </z-form-item>
          </z-form>
          <div class="example-desc">
              <header class="example-header"><span>自定义验证 </span></header>
              <div>
                  <p>可以完全自定义验证规则来完成更复杂的验证，比如某些数据需要在服务端验证时。示例展示的是密码的二次确认及模拟的一个异步验证。</p>
              </div>
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
          <z-form ref="formDynamic" :model="formDynamic" :label-width="80" style="width: 300px">
            <z-form-item v-for="(item, index) in formDynamic.items" :key="index"
                :label="'Item ' + item.index" :prop="'items.' + index + '.value'"
                :rules="{required: true, message: 'Item ' + item.index +' can not be empty', trigger: 'blur'}">
                <z-row  v-if="item.status">
                    <z-col span="18">
                        <z-input type="text" v-model="item.value" placeholder="Enter something...">
                        </z-input>
                    </z-col>
                    <z-col span="4" offset="1">
                        <z-button type="primary" ghost @click="handleRemove(index)">Delete</z-button>
                    </z-col>
                </z-row>
            </z-form-item>
            <z-form-item>
                <z-row>
                    <z-col span="12">
                        <z-button type="dashed" long @click="handleAdd" icon="plus-round">Add item
                        </z-button>
                    </z-col>
                </z-row>
            </z-form-item>
            <z-form-item>
                <z-button type="primary" @click="handleSubmit('formDynamic')">Submit</z-button>
                <z-button type="primary" ghost @click="handleReset('formDynamic')" style="margin-left: 8px">
                    Reset</z-button>
            </z-form-item>
        </z-form>
        <div class="example-desc">
            <header class="example-header"><span>动态增减表单项 </span></header>
            <div>
                <p>当需要动态维护 FormItem 时，也可以直接给 FormItem 设置属性 rules 来单独为该域做验证。</p>
                <p>动态设置 FormItem 的 prop 属性时，会依据上层的 Form 组件的 model 来获取，查看示例代码。</p>
                <p>FormItem 还可以独立设置 required、error 等属性，详见 API。</p>
            </div>
        </div>
        </z-col>
         <z-col span="12">
           <z-code-editor :content="demo6"></z-code-editor>
        </z-col>
      </z-row>
   </z-card>
   <z-card bordered dis-hover class="m-t-15">
      <div class="demo-api">
        <div class="anchor">
            <h2 id="API">API</h2>
        </div>
        <div class="anchor">
            <h3 id="Form_props">Form props</h3>
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
                    <td>model</td>
                    <td>表单数据对象</td>
                    <td>Object</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>rules</td>
                    <td>表单验证规则，具体配置查看 <a href="https://github.com/yiminghe/async-validator"
                            target="_blank"><i class="zvu-icon zvu-icon-social-github"></i>
                            async-validator</a></td>
                    <td>Object</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>inline</td>
                    <td>是否开启行内表单模式</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>label-position</td>
                    <td>表单域标签的位置，可选值为 <code>left</code>、<code>right</code>、<code>top</code></td>
                    <td>String</td>
                    <td>right</td>
                </tr>
                <tr>
                    <td>label-width</td>
                    <td>表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值</td>
                    <td>Number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>show-message</td>
                    <td>是否显示校验错误信息</td>
                    <td>Boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>autocomplete</td>
                    <td>原生的 autocomplete 属性，可选值为 off 或 on</td>
                    <td>String</td>
                    <td>off</td>
                </tr>
                <tr><td>hide-required-mark</td> <td>是否隐藏所有表单项的必选标记</td> <td>Boolean</td> <td>false</td></tr>
                <tr><td>label-colon</td> <td>是否自动在 label 名称后添加冒号</td> <td>Boolean</td> <td>false</td></tr>
                <tr><td>disabled</td> <td>是否禁用该表单内的所有组件（适用于具有 disabled 属性的表单类组件）</td> <td>Boolean</td> <td>false</td></tr>
            </tbody>
        </table>
        <div class="anchor"><h3 id="Form_events">Form events</h3></div>
        <table><thead><tr><th>事件名</th> <th>说明</th> <th>返回值</th></tr></thead> <tbody><tr><td>on-validate</td> <td>任一表单项被校验后触发，返回表单项 prop、校验状态、错误消息</td> <td>prop, status, error</td></tr></tbody></table>
        <div class="anchor">
            <h3 id="Form_methods">Form methods</h3>
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
                    <td>validate</td>
                    <td>对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败，支持 Promise</td>
                    <td>callback</td>
                </tr>
                <tr>
                    <td>validateField</td>
                    <td>对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息</td>
                    <td>callback</td>
                </tr>
                <tr>
                    <td>resetFields</td>
                    <td>对整个表单进行重置，将所有字段值重置为空并移除校验结果</td>
                    <td>无</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="FormItem_props">FormItem props</h3>
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
                    <td>prop</td>
                    <td>对应表单域 model 里的字段</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>标签文本</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>label-width</td>
                    <td>表单域标签的的宽度</td>
                    <td>Number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>label-for</td>
                    <td>指定原生的 label 标签的 for 属性，配合控件的 <code>element-id</code> 属性，可以点击 label 时聚焦控件。
                    </td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>required</td>
                    <td>是否必填，如不设置，则会根据校验规则自动生成</td>
                    <td>Boolean</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>rules</td>
                    <td>表单验证规则</td>
                    <td>Object | Array</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>error</td>
                    <td>表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>show-message</td>
                    <td>是否显示校验错误信息</td>
                    <td>Boolean</td>
                    <td>true</td>
                </tr>
            </tbody>
        </table>
        <div class="anchor">
            <h3 id="FormItem_slot">FormItem slot</h3>
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
                    <td>内容</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>label 内容</td>
                </tr>
            </tbody>
        </table>
    </div>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpForm',
  data: function () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password'))
      } else {
        if (this.formCustom.passwdCheck !== '') {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField('passwdCheck')
        }
        callback()
      }
    }
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password again'))
      } else if (value !== this.formCustom.passwd) {
        callback(new Error('The two input passwords do not match!'))
      } else {
        callback()
      }
    }
    const validateAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Age cannot be empty'))
      }
      // 模拟异步验证效果
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Please enter a numeric value'))
        } else {
          if (value < 18) {
            callback(new Error('Must be over 18 years of age'))
          } else {
            callback()
          }
        }
      }, 1000)
    }

    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      },
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: ''
      },
      ruleValidate: {
        input: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        select: [
          { required: true, message: 'Choose at least one hobby', trigger: 'change' }
        ]
      },
      formLeft: {
        input1: '',
        input2: '',
        input3: ''
      },
      formRight: {
        input1: '',
        input2: '',
        input3: ''
      },
      formTop: {
        input1: '',
        input2: '',
        input3: ''
      },
      formValidate: {
        name: '',
        mail: '',
        city: '',
        gender: '',
        interest: [],
        date: '',
        time: '',
        desc: ''
      },
      ruleValidate1: {
        name: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        city: [
          { required: true, message: 'Please select the city', trigger: 'change' }
        ],
        gender: [
          { required: true, message: 'Please select gender', trigger: 'change' }
        ],
        interest: [
          { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
          { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
        ],
        date: [
          { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
        ],
        time: [
          { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
        ],
        desc: [
          { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
          { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
        ]
      },
      formCustom: {
        passwd: '',
        passwdCheck: '',
        age: ''
      },
      ruleCustom: {
        passwd: [
          { validator: validatePass, trigger: 'blur' }
        ],
        passwdCheck: [
          { validator: validatePassCheck, trigger: 'blur' }
        ],
        age: [
          { validator: validateAge, trigger: 'blur' }
        ]
      },
      index: 1,
      formDynamic: {
        items: [
          {
            value: '',
            index: 1,
            status: 1
          }
        ]
      },
      demo1: '<z-form ref="formInline" :model="formInline" :rules="ruleInline" inline>\r' +
                '    <z-form-item prop="user">\r' +
                '        <z-input type="text" v-model="formInline.user" placeholder="Username">\r' +
                '            <z-icon type="ios-person-outline" slot="prepend"></z-icon>\r' +
                '        </z-input>\r' +
                '    </z-form-item>\r' +
                '    <br>\r' +
                '    <z-form-item prop="password">\r' +
                '        <z-input type="password" v-model="formInline.password" placeholder="Password">\r' +
                '            <z-icon type="ios-locked-outline" slot="prepend"></z-icon>\r' +
                '        </z-input>\r' +
                '    </z-form-item>\r' +
                '    <z-form-item>\r' +
                '        <z-button type="primary" @click="handleSubmit(\'formInline\')">Signin</z-button>\r' +
                '    </z-form-item>\r' +
                '</z-form>\r' +
                'export default {\r' +
                '    data () {\r' +
                '        return {\r' +
                '            formInline: {\r' +
                '                user: \'\',\r' +
                '                password: \'\'\r' +
                '            },\r' +
                '            ruleInline: {\r' +
                '                user: [\r' +
                '                    { required: true, message: \'Please fill in the user name\', trigger: \'blur\' }\r' +
                '                ],\r' +
                '                password: [\r' +
                '                    { required: true, message: \'Please fill in the password.\', trigger: \'blur\' },\r' +
                '                    { type: \'string\', min: 6, message: \'The password length cannot be less than 6 bits\', trigger: \'blur\' }\r' +
                '                ]\r' +
                '            }\r' +
                '        }\r' +
                '    },\r' +
                '    methods: {\r' +
                '        handleSubmit(name) {\r' +
                '            this.$refs[name].validate((valid) => {\r' +
                '                if (valid) {\r' +
                '                    this.$Message.success(\'Success!\')\r' +
                '                } else {\r' +
                '                    this.$Message.error(\'Fail!\')\r' +
                '                }\r' +
                '            })\r' +
                '        }\r' +
                '   }\r' +
                '}\r',
      demo2: '<z-form ref="formItem" :model="formItem" :label-width="80" label-position="left" :rules="ruleValidate">\r' +
                '    <z-form-item label="Input" prop="input">\r' +
                '        <z-input v-model="formItem.input" placeholder="Enter something..."></z-input>\r' +
                '    </z-form-item>\r' +
                '    <z-form-item label="Select" prop="select">\r' +
                '        <z-select v-model="formItem.select">\r' +
                '            <z-option value="beijing">New York</z-option>\r' +
                '            <z-option value="shanghai">London</z-option>\r' +
                '           <z-option value="shenzhen">Sydney</z-option>\r' +
                '        </z-select>\r' +
                '    </z-form-item>\r' +
                '    <z-form-item label="DatePicker">\r' +
                '        <z-row>\r' +
                '            <z-col span="11">\r' +
                '                <z-date-picker type="date" placeholder="Select date" v-model="formItem.date"></z-date-picker>\r' +
                '            </z-col>\r' +
                '            <z-col span="2" style="text-align: center">-</z-col>\r' +
                '            <z-col span="11">\r' +
                '                <z-time-picker type="time" placeholder="Select time" v-model="formItem.time"></z-time-picker>\r' +
                '            </z-col>\r' +
                '        </z-row>\r' +
                '    </z-form-item>\r' +
                '    <z-form-item label="Radio">\r' +
                '        <z-radio-group v-model="formItem.radio">\r' +
                '            <z-radio label="male">Male</z-radio>\r' +
                '            <z-radio label="female">Female</z-radio>\r' +
                '       </z-radio-group>\r' +
                '    </z-form-item>\r' +
                '    <z-form-item label="Switch">\r' +
                '        <z-switch v-model="formItem.switch" size="large">\r' +
                '            <span slot="open">On</span>\r' +
                '            <span slot="close">Off</span>\r' +
                '        </z-switch>\r' +
                '   </z-form-item>\r' +
                '    <z-form-item label="Slider">\r' +
                '        <z-slider v-model="formItem.slider" range></z-slider>\r' +
                '    </z-form-item>\r' +
                '    <z-form-item label="Text">\r' +
                '        <z-input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}"\r' +
                '            placeholder="Enter something..."></z-input>\r' +
                '    </z-form-item>\r' +
                '    <z-form-item>\r' +
                '        <z-button type="primary" @click="handleSubmit(\'formItem\')">Submit</z-button>\r' +
                '        <z-button type="primary" ghost @click="handleReset(\'formItem\')" style="margin-left: 8px">Reset</z-button>\r' +
                '    </z-form-item>\r' +
                '</z-form>\r' +
                'export default {\r' +
                '    data () {\r' +
                '        return {\r' +
                '            formItem: {\r' +
                '                input: \'\',\r' +
                '                select: \'\',\r' +
                '                radio: \'male\',\r' +
                '                checkbox: [],\r' +
                '                switch: true,\r' +
                '                date: \'\',\r' +
                '                time: \'\',\r' +
                '                slider: [20, 50],\r' +
                '                textarea: \'\'\r' +
                '            }\r' +
                '        }\r' +
                '    },\r' +
                '}\r',
      demo3: ' <z-form :model="formLeft" label-position="left" :label-width="100">\r' +
                '    <z-form-item label="Title">\r' +
                '        <z-input v-model="formLeft.input1"></z-input>\r' +
                '    </z-form-item>\r' +
                '    <z-form-item label="Title name">\r' +
                '        <z-input v-model="formLeft.input2"></z-input>\r' +
                '    </z-form-item>\r' +
                '    <z-form-item label="Aligned title">\r' +
                '        <z-input v-model="formLeft.input3"></z-input>\r' +
                '    </z-form-item>\r' +
                '</z-form>\r' +
                '<z-form :model="formRight" label-position="right" :label-width="100">\r' +
                '    <z-form-item label="Title">\r' +
                '        <z-input v-model="formRight.input1"></z-input>\r' +
                '    </z-form-item>\r' +
                '    <z-form-item label="Title name">\r' +
                '        <z-input v-model="formRight.input2"></z-input>\r' +
                '    </z-form-item>\r' +
                '   <z-form-item label="Aligned title">\r' +
                '        <z-input v-model="formRight.input3"></z-input>\r' +
                '    </z-form-item>\r' +
                '</z-form>\r' +
                '<z-form :model="formTop" label-position="top">\r' +
                '    <z-form-item label="Title">\r' +
                '        <z-input v-model="formTop.input1"></z-input>\r' +
                '    </z-form-item>\r' +
                '    <z-form-item label="Title name">\r' +
                '        <z-input v-model="formTop.input2"></z-input>\r' +
                '    </z-form-item>\r' +
                '    <z-form-item label="Aligned title">\r' +
                '        <z-input v-model="formTop.input3"></z-input>\r' +
                '    </z-form-item>\r' +
                '</z-form>\r' +
                'export default {\r' +
                '    data () {\r' +
                '        return {\r' +
                '            formLeft: {\r' +
                '                input1: \'\',\r' +
                '                input2: \'\',\r' +
                '                input3: \'\'\r' +
                '            },\r' +
                '            formRight: {\r' +
                '                input1: \'\',\r' +
                '                input2: \'\',\r' +
                '                input3: \'\'\r' +
                '            },\r' +
                '            formTop: {\r' +
                '                input1: \'\',\r' +
                '                input2: \'\',\r' +
                '                input3: \'\'\r' +
                '            }\r' +
                '        }\r' +
                '    },\r' +
                '}\r',
      demo4: '<z-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">\r' +
                '   <z-form-item label="Name" prop="name">\r' +
                '       <z-input v-model="formValidate.name" placeholder="Enter your name"></z-input>\r' +
                '    </z-form-item>\r' +
                '   <z-form-item label="E-mail" prop="mail">\r' +
                '        <z-input v-model="formValidate.mail" placeholder="Enter your e-mail"></z-input>\r' +
                '    </z-form-item>\r' +
                '    <z-form-item label="City" prop="city">\r' +
                '        <z-select v-model="formValidate.city" placeholder="Select your city">\r' +
                '            <Option value="beijing">New York</Option>\r' +
                '            <Option value="shanghai">London</Option>\r' +
                '            <Option value="shenzhen">Sydney</Option>\r' +
                '        </z-select>\r' +
                '    </z-form-item>\r' +
                '    <z-form-item label="Date">\r' +
                '        <z-row>\r' +
                '            <z-col span="11">\r' +
                '                <z-form-item prop="date">\r' +
                '                    <z-date-picker type="date" placeholder="Select date" v-model="formValidate.date"></z-date-picker>\r' +
                '                </z-form-item>\r' +
                '           </z-col>\r' +
                '           <z-col span="2" style="text-align: center">-</z-col>\r' +
                '            <z-col span="11">\r' +
                '                <z-form-item prop="time">\r' +
                '                   <z-time-picker type="time" placeholder="Select time" v-model="formValidate.time"></z-time-picker>\r' +
                '               </z-form-item>\r' +
                '           </z-col>\r' +
                '        </z-row>\r' +
                '    </z-form-item>\r' +
                '    <z-form-item label="Gender" prop="gender">\r' +
                '        <z-radio-group v-model="formValidate.gender">\r' +
                '           <z-radio label="male">Male</z-radio>\r' +
                '           <z-radio label="female">Female</z-radio>\r' +
                '        </z-radio-group>\r' +
                '   </z-form-item>\r' +
                '    <z-form-item label="Hobby" prop="interest">\r' +
                '        <z-checkbox-group v-model="formValidate.interest">\r' +
                '            <z-checkbox label="Eat"></z-checkbox>\r' +
                '            <z-checkbox label="Sleep"></z-checkbox>\r' +
                '            <z-checkbox label="Run"></z-checkbox>\r' +
                '            <z-checkbox label="Movie"></z-checkbox>\r' +
                '        </z-checkbox-group>\r' +
                '    </z-form-item>\r' +
                '    <z-form-item label="Desc" prop="desc">\r' +
                '        <z-input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}"\r' +
                '            placeholder="Enter something..."></z-input>\r' +
                '    </z-form-item>\r' +
                '    <z-form-item>\r' +
                '        <z-button type="primary" @click="handleSubmit(\'formValidate\')">Submit</z-button>\r' +
                '        <z-button type="primary" ghost @click="handleReset(\'formValidate\')" style="margin-left: 8px">Reset</z-button>\r' +
                '    </z-form-item>\r' +
                '</z-form>\r' +
                'export default {\r' +
                '    data () {\r' +
                '        return {\r' +
                '           formValidate: {\r' +
                '                name: \'\',\r' +
                '                mail: \'\',\r' +
                '                city: \'\',\r' +
                '                gender: \'\',\r' +
                '                interest: [],\r' +
                '                date: \'\',\r' +
                '                time: \'\',\r' +
                '                desc: \'\'\r' +
                '            },\r' +
                '            ruleValidate: {\r' +
                '                name: [\r' +
                '                    { required: true, message: \'The name cannot be empty\', trigger: \'blur\' }\r' +
                '                ],\r' +
                '                mail: [\r' +
                '                    { required: true, message: \'Mailbox cannot be empty\', trigger: \'blur\' },\r' +
                '                    { type: \'email\', message: \'Incorrect email format\', trigger: \'blur\' }\r' +
                '               ],\r' +
                '               city: [\r' +
                '                    { required: true, message: \'Please select the city\', trigger: \'change\' }\r' +
                '                ],\r' +
                '                gender: [\r' +
                '                    { required: true, message: \'Please select gender\', trigger: \'change\' }\r' +
                '                ],\r' +
                '                interest: [\r' +
                '                   { required: true, type: \'array\', min: 1, message: \'Choose at least one hobby\', trigger: \'change\' },\r' +
                '                    { type: \'array\', max: 2, message: \'Choose two hobbies at best\', trigger: \'change\' }\r' +
                '                ],\r' +
                '                date: [\r' +
                '                    { required: true, type: \'date\', message: \'Please select the date\', trigger: \'change\' }\r' +
                '                ],\r' +
                '                time: [\r' +
                '                    { required: true, type: \'string\', message: \'Please select time\', trigger: \'change\' }\r' +
                '                ],\r' +
                '                desc: [\r' +
                '                    { required: true, message: \'Please enter a personal introduction\', trigger: \'blur\' },\r' +
                '                    { type: \'string\', min: 20, message: \'Introduce no less than 20 words\', trigger: \'blur\' }\r' +
                '                ]\r' +
                '           }\r' +
                '        }\r' +
                '    },\r' +
                '    methods: {\r' +
                '       handleSubmit :function(name) {\r' +
                '            this.$refs[name].validate((valid) => {\r' +
                '                if (valid) {\r' +
                '                    this.$Message.success(\'Success!\')\r' +
                '                } else {\r' +
                '                    this.$Message.error(\'Fail!\')\r' +
                '                }\r' +
                '            })\r' +
                '        },\r' +
                '        handleReset (name) {\r' +
                '            this.$refs[name].resetFields()\r' +
                '        },\r' +
                '   }\r' +
                '}\r',
      demo5: '<z-form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">\r' +
                '    <z-form-item label="Password" prop="passwd">\r' +
                '        <z-input type="password" v-model="formCustom.passwd"></z-input>\r' +
                '    </z-form-item>\r' +
                '    <z-form-item label="Confirm" prop="passwdCheck">\r' +
                '        <z-input type="password" v-model="formCustom.passwdCheck"></z-input>\r' +
                '    </z-form-item>\r' +
                '    <z-form-item label="Age" prop="age">\r' +
                '        <z-input type="text" v-model="formCustom.age" number></z-input>\r' +
                '    </z-form-item>\r' +
                '    <z-form-item>\r' +
                '        <z-button type="primary" @click="handleSubmit(\'formCustom\')">Submit</z-button>\r' +
                '        <z-button type="primary" ghost @click="handleReset(\'formCustom\')" style="margin-left: 8px">Reset</z-button>\r' +
                '    </z-form-item>\r' +
                '</z-form>\r' +
                'export default {\r' +
                'const validatePass = (rule, value, callback) => {\r' +
                '    if (value === \'\') {\r' +
                '        callback(new Error(\'Please enter your password\'))\r' +
                '    } else {\r' +
                '        if (this.formCustom.passwdCheck !== \'\') {\r' +
                '            // 对第二个密码框单独验证\r' +
                '            this.$refs.formCustom.validateField(\'passwdCheck\')\r' +
                '        }\r' +
                '        callback()\r' +
                '    }\r' +
                '}\r' +
                'const validatePassCheck = (rule, value, callback) => {\r' +
                '    if (value === \'\') {\r' +
                '        callback(new Error(\'Please enter your password again\'))\r' +
                '    } else if (value !== this.formCustom.passwd) {\r' +
                '        callback(new Error(\'The two input passwords do not match!\'))\r' +
                '    } else {\r' +
                '        callback()\r' +
                '    }\r' +
                '}\r' +
                'const validateAge = (rule, value, callback) => {\r' +
                '    if (!value) {\r' +
                '        return callback(new Error(\'Age cannot be empty\'))\r' +
                '    }\r' +
                '    // 模拟异步验证效果\r' +
                '    setTimeout(() => {\r' +
                '        if (!Number.isInteger(value)) {\r' +
                '            callback(new Error(\'Please enter a numeric value\'))\r' +
                '        } else {\r' +
                '            if (value < 18) {\r' +
                '                callback(new Error(\'Must be over 18 years of age\'))\r' +
                '            } else {\r' +
                '                callback()\r' +
                '            }\r' +
                '        }\r' +
                '    }, 1000)\r' +
                '}\r' +
                '    data () {\r' +
                '        return {\r' +
                '   formCustom: {\r' +
                '        passwd: \'\',\r' +
                '        passwdCheck: \'\',\r' +
                '        age: \'\'\r' +
                '    },\r' +
                '    ruleCustom: {\r' +
                '        passwd: [\r' +
                '            { validator: validatePass, trigger: \'blur\' }\r' +
                '        ],\r' +
                '        passwdCheck: [\r' +
                '            { validator: validatePassCheck, trigger: \'blur\' }\r' +
                '        ],\r' +
                '        age: [\r' +
                '            { validator: validateAge, trigger: \'blur\' }\r' +
                '        ]\r' +
                '    }\r' +
                '        }\r' +
                '    },\r' +
                '    methods: {\r' +
                '       handleSubmit :function(name) {\r' +
                '            this.$refs[name].validate((valid) => {\r' +
                '                if (valid) {\r' +
                '                    this.$Message.success(\'Success!\')\r' +
                '                } else {\r' +
                '                    this.$Message.error(\'Fail!\')\r' +
                '                }\r' +
                '            })\r' +
                '        },\r' +
                '        handleReset :function (name) {\r' +
                '            this.$refs[name].resetFields()\r' +
                '        },\r' +
                '   }\r' +
                '}\r',
      demo6: '<z-form ref="formDynamic" :model="formDynamic" :label-width="80" style="width: 300px">\r' +
                '    <z-form-item v-for="(item, index) in formDynamic.items" v-if="item.status" :key="index"\r' +
                '        :label="\'Item \' + item.index" :prop="\'items.\' + index + \'.value\'" :rules="{required: true, message: \'Item \' + item.index +\' can not be empty\', trigger: \'blur\'}">\r' +
                '        <z-row>\r' +
                '            <z-col span="18">\r' +
                '                <z-input type="text" v-model="item.value" placeholder="Enter something..."></z-input>\r' +
                '            </z-col>\r' +
                '            <z-col span="4" offset="1">\r' +
                '               <z-button type="primary" ghost @click="handleRemove(index)">Delete</z-button>\r' +
                '            </z-col>\r' +
                '        </z-row>\r' +
                '    </z-form-item>\r' +
                '    <z-form-item>\r' +
                '        <z-row>\r' +
                '            <z-col span="12">\r' +
                '                <z-button type="dashed" long @click="handleAdd" icon="plus-round">Add item</z-button>\r' +
                '            </z-col>\r' +
                '        </z-row>\r' +
                '   </z-form-item>\r' +
                '    <z-form-item>\r' +
                '        <z-button type="primary" @click="handleSubmit(\'formDynamic\')">Submit</z-button>\r' +
                '        <z-button type="primary" ghost @click="handleReset(\'formDynamic\')" style="margin-left: 8px">Reset</z-button>\r' +
                '    </z-form-item>\r' +
                '</z-form>\r' +
                'export default {\r' +
                '    data () {\r' +
                '        return {\r' +
                '    index: 1,\r' +
                '    formDynamic: {\r' +
                '        items: [\r' +
                '            {\r' +
                '                value: \'\',\r' +
                '                index: 1,\r' +
                '                status: 1\r' +
                '            }\r' +
                '        ]\r' +
                '    }\r' +
                '        }\r' +
                '    },\r' +
                '    methods: {\r' +
                '        handleSubmit :function(name) {\r' +
                '            this.$refs[name].validate((valid) => {\r' +
                '                if (valid) {\r' +
                '                    this.$Message.success(\'Success!\')\r' +
                '                } else {\r' +
                '                    this.$Message.error(\'Fail!\')\r' +
                '                }\r' +
                '            })\r' +
                '        },\r' +
                '        handleReset (name) {\r' +
                '            this.$refs[name].resetFields()\r' +
                '        },\r' +
                '        handleAdd () {\r' +
                '            this.index++\r' +
                '            this.formDynamic.items.push({\r' +
                '                value: \'\',\r' +
                '                index: this.index,\r' +
                '                status: 1\r' +
                '            })\r' +
                '        },\r' +
                '        handleRemove (index) {\r' +
                '            this.formDynamic.items[index].status = 0\r' +
                '        }\r' +
                '   }\r' +
                '}\r'
    }
  },
  methods: {
    handleSubmit: function (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    },
    handleAdd () {
      this.index++
      this.formDynamic.items.push({
        value: '',
        index: this.index,
        status: 1
      })
    },
    handleRemove (index) {
      this.formDynamic.items[index].status = 0
    }
  }
}
</script>
<style scoped>
</style>
