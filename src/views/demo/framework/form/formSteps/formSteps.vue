<template>
<div class="frame-page">
  <div class="layout-head">
    <h2 class="m-b-20">表单分步骤</h2>
     <p><strong>优点：</strong>通过把复杂表单按步骤拆分成多个简洁界面，既能增强引导性，又能提高专注度。</p>
     <p class="m-t-5"><strong>使用场景：</strong>适用于填写项目较多的任务性表单，如常见的注册界面。</p>
     <p class="m-t-5"><strong>特别注意：</strong>步骤拆分不宜过多（最好不超过三步），同时需要保持每个步骤的填写项目足够精简。否则同样容易引起用户焦躁反感，造成流失。</p>

  </div>
  <z-edit-panel class="m-t-15 p-b-40">
    <!-- 步骤条 -->
    <z-row class="m-b-40">
        <z-col span="18" push="3"  :xs="{ span: 18, push: 3 }" :lg="{ span: 14, push: 5 }">
          <z-steps :current="stepIndex" class="m-t-30">
              <z-step title="填写基本信息"></z-step>
              <z-step title="填写详细信息"></z-step>
              <z-step title="确认填写信息"></z-step>
              <z-step title="完成"></z-step>
          </z-steps>
        </z-col>
    </z-row>
    <!-- 表单1 -->
    <z-row v-if="stepIndex==0">
      <z-col span="18" push="3" :xs="{ span: 18, push: 3 }" :lg="{ span: 14, push: 5 }">
          <z-form ref="formItem" :model="formItem" :rules="ruleValidate" :label-width="120" label-position="right">
            <z-form-item label="姓名：" prop="name">
                <z-input v-model="formItem.name" placeholder="请输入..."></z-input>
            </z-form-item>
            <z-form-item label="性别：" prop="sex">
                <z-input v-model="formItem.sex" placeholder="请输入..."></z-input>
            </z-form-item>
            <z-form-item label="生日：" prop="birthday">
                <z-input v-model="formItem.birthday" placeholder="请输入..."></z-input>
            </z-form-item>
            <z-form-item label="电话：">
                <z-row>
                  <z-col span="2">
                    <z-form-item>
                        <z-input v-model="formItem.telCountry" placeholder="86"></z-input>
                    </z-form-item>
                  </z-col>
                  <z-col span="2" class="text-center">-</z-col>
                  <z-col span="6">
                      <z-form-item>
                        <z-input v-model="formItem.telProvince" placeholder="0411"></z-input>
                    </z-form-item>
                  </z-col>
                  <z-col span="2" class="text-center">-</z-col>
                  <z-col span="12">
                      <z-form-item>
                        <z-input v-model="formItem.telNumber" placeholder="13376883333"></z-input>
                      </z-form-item>
                  </z-col>
                </z-row>
            </z-form-item>
            <z-form-item label="邮箱：" prop="fullName">
                <z-input v-model="formItem.mailbox" placeholder="请输入..."></z-input>
            </z-form-item>
            <div class="text-center">
                <z-button type="primary" @click="next('formItem')">下一步</z-button>
            </div>
          </z-form>
      </z-col>
    </z-row>
    <!-- 表单2 -->
    <z-row v-if="stepIndex==1">
      <z-col span="20" push="2" :xs="{ span: 24, push: 0 }" :lg="{ span: 18, push: 3 }">
        <z-form ref="formItem1" :model="formItem1" :rules="ruleValidate" :label-width="120" label-position="right">
            <z-row>
                <z-col span="12">
                  <z-form-item label="申请名称：" prop="apName">
                      <z-input v-model="formItem1.apName" placeholder="请输入..."></z-input>
                  </z-form-item>
                </z-col>
                <z-col span="12">
                      <z-form-item label="申请内容：" prop="apContent">
                          <z-input v-model="formItem1.apContent" placeholder="请输入..."></z-input>
                      </z-form-item>
                </z-col>
                <z-col span="12">
                    <z-form-item label="申请时间：" prop="apTime">
                        <z-date-picker type="date" v-model="formItem1.apTime" placeholder="请选择..."></z-date-picker>
                    </z-form-item>
                </z-col>
                <z-col span="12">
                    <z-form-item label="参与者：" prop="partner">
                      <z-select v-model="formItem1.partner">
                          <z-option value="beijing">New York</z-option>
                          <z-option value="shanghai">London</z-option>
                          <z-option value="shenzhen">Sydney</z-option>
                      </z-select>
                    </z-form-item>
                </z-col>
                <z-col span="12">
                    <z-form-item label="申请金额：" prop="apMoney">
                        <z-input v-model="formItem1.apMoney" placeholder="请输入..."></z-input>
                    </z-form-item>
                </z-col>
                <z-col span="12">
                    <z-form-item label="申请期限：" prop="term">
                        <z-input v-model="formItem1.term" placeholder="请输入..."></z-input>
                    </z-form-item>
                </z-col>
                <!-- 文本域 -->
                <z-col span="12">
                  <z-form-item label="国家：" prop="country">
                      <z-select v-model="formItem1.country">
                          <z-option value="beijing">New York</z-option>
                          <z-option value="shanghai">London</z-option>
                          <z-option value="shenzhen">Sydney</z-option>
                        </z-select>
                    </z-form-item>
                  </z-col>
                  <z-col span="12">
                    <z-form-item label="城市：" prop="city">
                        <z-radio-group v-model="formItem1.city" type="button">
                            <z-radio label="北京"></z-radio>
                            <z-radio label="上海"></z-radio>
                            <z-radio label="深圳"></z-radio>
                            <z-radio label="杭州"></z-radio>
                        </z-radio-group>
                    </z-form-item>
                 </z-col>
                 <z-col span="24">
                    <z-form-item label="详细地址：" prop="address">
                        <z-input v-model="formItem1.address" type="textarea" :autosize="{minRows: 3,maxRows: 5}"
                            placeholder="请输入详细地址"></z-input>
                    </z-form-item>
                 </z-col>
                 <z-col span="24" class="text-center">
                    <z-button type="primary" @click="next('formItem1')">下一步</z-button>
                    <z-button @click="prev">上一步</z-button>
                 </z-col>
            </z-row>
        </z-form>
     </z-col>
    </z-row>
    <!-- 表单3 -->
    <z-row v-if="stepIndex==2">
      <z-col span="20" push="2"  :xs="{ span: 24, push: 0 }" :lg="{ span: 18, push: 3 }">
        <z-form ref="formItem2" :label-width="120" label-position="right">
            <z-row>
                <z-col span="8">
                  <z-form-item label="姓名：">
                      {{formItem.name}}
                  </z-form-item>
                </z-col>
                <z-col span="8">
                    <z-form-item label="性别：">
                        {{formItem.sex}}
                    </z-form-item>
                </z-col>
                 <z-col span="8">
                    <z-form-item label="生日：">
                        {{formItem.birthday}}
                    </z-form-item>
                </z-col>
                 <z-col span="8">
                    <z-form-item label="电话：">
                        {{formItem.telCountry}}-{{formItem.mobileProvince}}-{{formItem.teNumber}}
                    </z-form-item>
                </z-col>
                 <z-col span="8">
                    <z-form-item label="邮箱：">
                        {{formItem.mailbox}}
                    </z-form-item>
                </z-col>
                <z-col span="8">
                    <z-form-item label="申请名称：">
                        {{formItem1.apName}}
                    </z-form-item>
                </z-col>
                <z-col span="8">
                    <z-form-item label="申请内容：">
                        {{formItem1.apContent}}
                    </z-form-item>
                </z-col>
                <z-col span="8">
                    <z-form-item label="申请时间：">
                        {{formItem1.apTime}}
                    </z-form-item>
                </z-col>
                <z-col span="8">
                    <z-form-item label="参与者：">
                        {{formItem1.partner}}
                    </z-form-item>
                </z-col>
                 <z-col span="8">
                    <z-form-item label="申请金额：">
                        {{formItem1.apMoney}}
                    </z-form-item>
                </z-col>
                 <z-col span="8">
                    <z-form-item label="申请期限：">
                        {{formItem1.term}}
                    </z-form-item>
                </z-col>
                 <z-col span="8">
                    <z-form-item label="国家：">
                        {{formItem1.country}}
                    </z-form-item>
                </z-col>
                 <z-col span="8">
                    <z-form-item label="城市：">
                        {{formItem1.city}}
                    </z-form-item>
                </z-col>
                 <z-col span="8">
                    <z-form-item label="详细地址：">
                        {{formItem1.address}}
                    </z-form-item>
                </z-col>
                   <z-col span="24" class="text-center">
                    <z-button type="primary" @click="next('formItem2')">提交</z-button>
                    <z-button @click="prev">上一步</z-button>
                 </z-col>
            </z-row>
        </z-form>
     </z-col>
    </z-row>
    <!-- 表单4 -->
    <z-row v-if="stepIndex==3">
      <z-col span="18" push="3"  :xs="{ span: 18, push: 3 }" :lg="{ span: 14, push: 5 }">
        <div class="result">
          <z-icon type="checkmark-circled"></z-icon>
          <p class="result_title">操作成功</p>
          <p class="result_desc">等待审批通过</p>
          <div class="result_extra">
           <z-form ref="formItem2" :label-width="120" label-position="right">
                <z-row>
                    <z-col span="8">
                      <z-form-item label="姓名：">
                          {{formItem.name}}
                      </z-form-item>
                    </z-col>
                    <z-col span="8">
                        <z-form-item label="性别：">
                            {{formItem.sex}}
                        </z-form-item>
                    </z-col>
                    <z-col span="8">
                        <z-form-item label="生日：">
                            {{formItem.birthday}}
                        </z-form-item>
                    </z-col>
                    <z-col span="8">
                        <z-form-item label="电话：">
                            {{formItem.telCountry}}-{{formItem.mobileProvince}}-{{formItem.teNumber}}
                        </z-form-item>
                    </z-col>
                    <z-col span="8">
                        <z-form-item label="邮箱：">
                            {{formItem.mailbox}}
                        </z-form-item>
                    </z-col>
                    <z-col span="8">
                        <z-form-item label="申请名称：">
                            {{formItem1.apName}}
                        </z-form-item>
                    </z-col>
                    <z-col span="8">
                        <z-form-item label="申请内容：">
                            {{formItem1.apContent}}
                        </z-form-item>
                    </z-col>
                    <z-col span="8">
                        <z-form-item label="申请时间：">
                            {{formItem1.apTime}}
                        </z-form-item>
                    </z-col>
                    <z-col span="8">
                        <z-form-item label="参与者：">
                            {{formItem1.partner}}
                        </z-form-item>
                    </z-col>
                    <z-col span="8">
                        <z-form-item label="申请金额：">
                            {{formItem1.apMoney}}
                        </z-form-item>
                    </z-col>
                    <z-col span="8">
                        <z-form-item label="申请期限：">
                            {{formItem1.term}}
                        </z-form-item>
                    </z-col>
                    <z-col span="8">
                        <z-form-item label="国家：">
                            {{formItem1.country}}
                        </z-form-item>
                    </z-col>
                    <z-col span="8">
                        <z-form-item label="城市：">
                            {{formItem1.city}}
                        </z-form-item>
                    </z-col>
                    <z-col span="8">
                        <z-form-item label="详细地址：">
                            {{formItem1.address}}
                        </z-form-item>
                    </z-col>
                </z-row>
            </z-form>
          </div>
          <div class="m-t-20">
              <z-button type="primary" @click="complete()">返回首页</z-button>
          </div>
        </div>
      </z-col>
    </z-row>
    </z-edit-panel>
 </div>
</template>
<script>
export default {
  name: 'formSteps',
  data: function () {
    return {
      formItem: {
        name: '',
        sex: '',
        birthday: '',
        telCountry: '',
        telProvince: '',
        telNumber: '',
        mobileCountry: '',
        mobileProvince: '',
        mobileNumber: '',
        mailbox: ''
      },
      formItem1: {
        apName: '',
        apContent: '',
        apTime: '',
        partner: '',
        apMoney: '',
        term: '',
        country: '',
        city: '',
        address: ''
      },
      // 表单校验
      ruleValidate: {
        name: [
          { required: true, message: '不能为空', trigger: 'change' }
        ],
        sex: [
          { required: true, message: '不能为空', trigger: 'change' }
        ],
        apName: [
          { required: true, message: '不能为空', trigger: 'change' }
        ]
      },
      stepIndex: 0
    }
  },
  methods: {
    next (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
          this.stepIndex++
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    prev: function () {
      this.stepIndex--
    },
    complete: function () {
      this.stepIndex = 0
    }
  }
}
</script>
<style scoped>
    @import "../../../../../styles/framework/pages/result/result.css";
</style>
