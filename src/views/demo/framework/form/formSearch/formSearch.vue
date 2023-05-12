<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2019-11-07 10:33:12
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="frame-page">
    <!-- 基础表单 -->
    <p class="demo-title">基础表单</p>
    <z-search-panel>
       <z-form ref="model" :model="model" :label-width="120" label-position="right">
        <z-row>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="公告编号：">
              <z-input v-model="model.notifNo" placeholder="请输入..." />
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="公告标题：">
              <z-input v-model="model.notifTitle" placeholder="请输入..." />
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="编辑人：">
              <z-input v-model="model.editPer" placeholder="请输入..." />
            </z-form-item>
          </z-col>
           <z-col span="8" :xs="24" :sm="12" :lg="8" class="btns-group">
               <z-button type="primary">查询</z-button>
               <z-button>重置</z-button>
          </z-col>
        </z-row>
      </z-form>
    </z-search-panel>
    <!-- 展开1 -->
    <p class="demo-title">展开效果</p>
    <z-search-panel>
      <z-form ref="model" :model="model" :label-width="120" label-position="right">
        <z-row>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="公告编号：">
              <z-input v-model="model.notifNo" placeholder="请输入..." />
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="公告标题：">
              <z-input v-model="model.notifTitle" placeholder="请输入..." />
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="编辑人：">
              <z-input v-model="model.editPer" placeholder="请输入..." />
            </z-form-item>
          </z-col>
         <z-col span="8" :xs="24" :sm="12" :lg="8">
              <z-form-item label="公告状态：" >
                <z-select v-model="model.notifState" placeholder="请选择...">
                  <z-option v-for="item in model.notifState" :value="item.value" :key="item.value">{{ item.label }}</z-option>
                </z-select>
              </z-form-item>
            </z-col>
             <z-col span="8" :xs="24" :sm="12" :lg="8">
              <z-form-item label="结束时间：">
                 <date-picker v-model="model.editTime" type="date" clearable placeholder="请选择..."></date-picker>
              </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8" class="btns-group">
                <z-button type="primary">查询</z-button>
                <z-button>重置</z-button>
          </z-col>
        </z-row>
          <z-spread :no-suspend="true" class="spread-b">
            <z-row>
              <z-col span="8" :xs="24" :sm="12" :lg="8">
                <z-form-item label="公告编号：">
                  <z-input v-model="model.notifNo" placeholder="请输入..." />
                </z-form-item>
              </z-col>
            </z-row>
        </z-spread>
      </z-form>
    </z-search-panel>
    <!-- 展开效果2 -->
    <p class="demo-title">展开效果2</p>
     <z-search-panel>
      <z-form ref="model" :model="model" :label-width="120" label-position="right">
        <z-row>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="公告编号：">
              <z-input v-model="model.notifNo" placeholder="请输入..." />
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="公告标题：">
              <z-input v-model="model.notifTitle" placeholder="请输入..." />
            </z-form-item>
          </z-col>
            <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="编辑人：">
              <z-input v-model="model.editPer" placeholder="请输入..." />
            </z-form-item>
          </z-col>
          </z-row>
          <z-spread :no-suspend="false">
              <div slot="ilead-more-content">
                  <z-button type="primary">查询</z-button>
                  <z-button>重置</z-button>
              </div>
              <z-row>
                <z-col span="8" :xs="24" :sm="12" :lg="8">
                  <z-form-item label="公告编号：">
                    <z-input v-model="model.notifNo" placeholder="请输入..." />
                  </z-form-item>
                </z-col>
              </z-row>
          </z-spread>
      </z-form>
    </z-search-panel>
    <!-- 带tab -->
    <p class="demo-title">带tab的效果</p>
    <z-tabs value="allOrder" :animated="false" class="m-t-10">
        <z-tab-pane label="进行中" name="allOrder">
          <z-search-panel>
            <z-form ref="model" :model="model" :label-width="120" label-position="right">
                <z-row>
                  <z-col span="8" :xs="24" :sm="12" :lg="8">
                    <z-form-item label="公告编号：">
                      <z-input v-model="model.notifNo" placeholder="请输入..." />
                    </z-form-item>
                  </z-col>
                  <z-col span="8" :xs="24" :sm="12" :lg="8">
                    <z-form-item label="公告标题：">
                      <z-input v-model="model.notifTitle" placeholder="请输入..." />
                    </z-form-item>
                  </z-col>
                  <z-col span="8" :xs="24" :sm="12" :lg="8">
                    <z-form-item label="编辑人：">
                      <z-input v-model="model.editPer" placeholder="请输入..." />
                    </z-form-item>
                  </z-col>
                  <div class="btns-group">
                    <z-button type="primary">查询</z-button>
                    <z-button>重置</z-button>
                  </div>
                </z-row>
              </z-form>
          </z-search-panel>
        </z-tab-pane>
        <z-tab-pane label="进行中" name="name3">2</z-tab-pane>
    </z-tabs>
    <!-- 特殊控件 -->
    <p class="demo-title">特殊控件</p>
    <z-search-panel>
      <z-form ref="model" :model="model" :label-width="100" label-position="right">
        <z-row>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="公告编号：">
              <z-input v-model="model.notifNo" placeholder="请输入..." />
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
                <z-form-item label="紧急程度：" prop="">
                <z-checkbox-group>
                    <z-checkbox v-for="item in model.urgency" :value="item.value" :key="item.value">{{item.label}}</z-checkbox>
                </z-checkbox-group>
              </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="城市：">
              <z-radio-group type="button">
                  <z-radio label="北京"></z-radio>
                  <z-radio label="上海"></z-radio>
                  <z-radio label="深圳"></z-radio>
              </z-radio-group>
            </z-form-item>
          </z-col>
           <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="公告数量：">
              <z-input v-model="model.notifNo" placeholder="请输入..." />
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
              <z-form-item label="公告状态：" >
                <z-select v-model="model.notifState" placeholder="请选择...">
                  <z-option v-for="item in model.notifState" :value="item.value" :key="item.value">{{ item.label }}</z-option>
                </z-select>
              </z-form-item>
            </z-col>
             <z-col span="8" :xs="24" :sm="12" :lg="8">
              <z-form-item label="结束时间：">
                 <date-picker v-model="model.editTime" type="date" clearable placeholder="请选择..."></date-picker>
              </z-form-item>
            </z-col>
          <z-col span="16" :lg="16" :sm="24" :xs="24">
            <z-form-item label="时间：">
              <z-col span="8"><z-date-picker type="date" placeholder="请选择..." v-model="model.editTime"></z-date-picker></z-col>
              <z-col span="2" class="text-center">~</z-col>
              <z-col span="8"><z-date-picker type="date" placeholder="请选择..." v-model="model.editTime"></z-date-picker> </z-col>
            </z-form-item>
          </z-col>

          <div class="btns-group">
            <z-button type="primary">查询</z-button>
            <z-button>重置</z-button>
          </div>
        </z-row>
      </z-form>
    </z-search-panel>
    <!-- 按钮固定在右侧 -->
    <p class="demo-title">按钮固定在右侧</p>
    <z-search-panel btns-right>
      <z-form ref="model" :model="model" :label-width="120" label-position="right">
        <z-row>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="公告编号：">
              <z-input v-model="model.notifNo" placeholder="请输入..." />
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="公告标题：">
              <z-input v-model="model.notifTitle" placeholder="请输入..." />
            </z-form-item>
          </z-col>
            <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="编辑人：">
              <z-input v-model="model.editPer" placeholder="请输入..." />
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="失效时间：">
              <z-date-picker type="date" placeholder="请选择..." v-model="model.editTime"></z-date-picker>
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="公告状态：">
               <z-select v-model="model.notifState" placeholder="请选择...">
                  <z-option value="未提交">未提交</z-option>
                  <z-option value="提交中">提交中</z-option>
                  <z-option value="已提交">已提交</z-option>
              </z-select>
            </z-form-item>
          </z-col>
          </z-row>
         <div class="btns-group">
                <z-button type="primary">查询</z-button>
                <z-button>重置</z-button>
          </div>
      </z-form>
    </z-search-panel>
    <!-- 按钮固定在右侧,展开 -->
    <p class="demo-title">按钮固定在右侧,展开</p>
    <z-search-panel btns-right>
      <z-form ref="model" :model="model" :label-width="120" label-position="right">
        <z-row>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="公告编号：">
              <z-input v-model="model.notifNo" placeholder="请输入..." />
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="公告标题：">
               <z-input v-model="model.notifNo" placeholder="请输入..." />
            </z-form-item>
          </z-col>
          <z-col span="8" :xs="24" :sm="12" :lg="8">
            <z-form-item label="编辑人：">
              <z-input v-model="model.editPer" placeholder="请输入..." />
            </z-form-item>
          </z-col>
        </z-row>
          <z-spread :no-suspend="true">
              <div slot="ilead-more-content">
                  <z-button type="primary">查询</z-button>
                  <z-button>重置</z-button>
            </div>
            <z-row>
              <z-col span="8" :xs="24" :sm="12" :lg="8">
                <z-form-item label="公告编号：">
                  <z-input v-model="model.notifNo" placeholder="请输入..." />
                </z-form-item>
              </z-col>
            </z-row>
          </z-spread>
      </z-form>
    </z-search-panel>

  </div>
</template>
<script>
export default {
  name: 'formSearch',
  data: function () {
    return {
      value1: '1',
      model: {
        notifNo: '',
        notifTitle: '',
        notifContent: '',
        editPer: '',
        editTime: '',
        urgency: [
          {
            value: '1',
            label: '紧急'
          },
          {
            value: '2',
            label: '一般'
          },
          {
            value: '3',
            label: '不紧急'
          }
        ],
        notifState: [
          {
            value: '01',
            label: '未提交'
          },
          {
            value: '02',
            label: '提交中'
          },
          {
            value: '03',
            label: '已提交'
          }
        ],
        endTime: '',
        notifNum: ''
      }
    }
  },
  methods: {
  }
}
</script>
