<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-06-02 18:54:42
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
  <div class="layout-head search-list_head">
    <h3>搜索列表（文章）</h3>
    <div class="search-list_head_content">
        <z-input search enter-button="Search" size="large" placeholder="Enter something..." />
    </div>
    <ul class="search-list_nav">
      <li class="active"><router-link to="/search/article"> 文章 </router-link></li>
      <li><router-link to="/search/project"> 项目 </router-link></li>
      <li><router-link to="/search/apply"> 应用 </router-link></li>
    </ul>
  </div>
  <z-card dis-hover class="m-t-15">
    <z-form :label-width="54" label-position="right">
      <z-form-item label="分类：">
        <ul class="tag-select" ref="tagSelect">
            <li v-for="(item,index) in tagLists" :key="index"  @click="tagClick(index)" :class="{active:item.show}">{{item.name}}</li>
            <a class="tag-select_expand-btn" @click="expandFun">
                <span>{{expandText}}<z-icon class="m-l-5" :type="expandIcon"></z-icon></span>
            </a>
        </ul>
      </z-form-item>
      <z-divider dashed />
      <z-form-item label="作者：">
        <z-select multiple style="width:260px">
            <z-option value="小雪">小雪</z-option>
            <z-option value="老蒋">老蒋</z-option>
            <z-option value="zrz">zrz</z-option>
        </z-select>
      </z-form-item>
      <z-divider dashed />
      <z-form-item label="排序：">
        <z-radio-group v-model="sort">
              <z-radio label="最新创建"></z-radio>
              <z-radio label="最多收藏"></z-radio>
              <z-radio label="最多阅读"></z-radio>
          </z-radio-group>
      </z-form-item>
    </z-form>
  </z-card>
  <z-card dis-hover class="m-t-15 infolist">
    <div class="infolist_item">
        <div class="infolist_item_title"><a>ilead框架全面优化，性能更强</a></div>
        <div class="infolist_item_description">
          <z-tag type="border">ilead</z-tag>
          <z-tag type="border">vue</z-tag>
          <z-tag type="border">webpack</z-tag>
        </div>
        <p class="m-t-15">Vue 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>
        <div class="m-t-15">
        <z-avatar size="small" :src="avatar" />
        小雪 发表于 2018-08-23 18:46:27
        </div>
        <ul class="infolist_item_action m-t-15">
          <li><z-icon type="ios-star-outline"></z-icon> 20</li>
          <li><z-icon type="ios-heart-outline"></z-icon> 15</li>
          <li><z-icon type="ios-chatboxes-outline"></z-icon> 1</li>
        </ul>
        <div class="infolist_item_extra">
          <img src="~assetspath/framework/search/small.png" style="width: 280px;">
        </div>
    </div>
    <divider/>
      <div class="infolist_item">
        <div class="infolist_item_title"><a>ilead框架全面优化，性能更强</a></div>
        <div class="infolist_item_description">
          <z-tag type="border">ilead</z-tag>
          <z-tag type="border">vue</z-tag>
          <z-tag type="border">webpack</z-tag>
        </div>
        <p class="m-t-15">Vue 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>
        <div class="m-t-15">
        <z-avatar size="small" :src="avatar" />
        小雪 发表于 2018-08-23 18:46:27
        </div>
        <ul class="infolist_item_action m-t-15">
          <li><z-icon type="ios-star-outline"></z-icon> 20</li>
          <li><z-icon type="ios-heart-outline"></z-icon> 15</li>
          <li><z-icon type="ios-chatboxes-outline"></z-icon> 1</li>
        </ul>
        <div class="infolist_item_extra">
          <img src="~assetspath/framework/search/small.png" style="width: 280px;">
        </div>
    </div>
      <divider/>
      <div class="infolist_item">
        <div class="infolist_item_title"><a>ilead框架全面优化，性能更强</a></div>
        <div class="infolist_item_description">
          <z-tag type="border">ilead</z-tag>
          <z-tag type="border">vue</z-tag>
          <z-tag type="border">webpack</z-tag>
        </div>
        <p class="m-t-15">Vue 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>
        <div class="m-t-15">
        <z-avatar size="small" :src="avatar" />
        小雪 发表于 2018-08-23 18:46:27
        </div>
        <ul class="infolist_item_action m-t-15">
          <li><z-icon type="ios-star-outline"></z-icon> 20</li>
          <li><z-icon type="ios-heart-outline"></z-icon> 15</li>
          <li><z-icon type="ios-chatboxes-outline"></z-icon> 1</li>
        </ul>
        <div class="infolist_item_extra">
          <img src="~assetspath/framework/search/small.png" style="width: 280px;">
        </div>
    </div>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'formBase',
  data: function () {
    return {
      sort: '最新创建',
      expandText: '展开',
      expandIcon: 'chevron-down',
      avatar: require('assetspath/framework/search/avatar.png'),
      tagLists: [
        {name: '类别一', show: false},
        {name: '类别二', show: false},
        {name: '类别三', show: false},
        {name: '类别四', show: false},
        {name: '类别五', show: false},
        {name: '类别六', show: false},
        {name: '类别七', show: false},
        {name: '类别八', show: false},
        {name: '类别九', show: false},
        {name: '类别十', show: false},
        {name: '类别十一', show: false},
        {name: '类别十二', show: false},
        {name: '类别十三', show: false},
        {name: '类别十四', show: false},
        {name: '类别十五', show: false},
        {name: '类别十六', show: false},
        {name: '类别十七', show: false},
        {name: '类别十八', show: false},
        {name: '类别十九', show: false}
      ]
    }
  },
  methods: {
    tagClick: function (index) {
      this.tagLists[index].show = !this.tagLists[index].show
    },
    expandFun: function () {
      var el = this.$refs.tagSelect
      if (el.getAttribute('class') === 'tag-select') {
        el.classList.add('tag-select-expanded')
        this.expandText = '闭合'
        this.expandIcon = 'chevron-up'
      } else {
        el.classList.remove('tag-select-expanded')
        this.expandText = '展开'
        this.expandIcon = 'chevron-down'
      }
    }
  },
  mounted: function () {
  }
}
</script>
<style>
    @import "../../../../../styles/framework/pages/search/searchList.css";
</style>
