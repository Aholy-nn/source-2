<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime: 2020-06-02 19:02:15
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="frame-page">
  <div class="layout-head search-list_head">
    <h3>搜索列表（应用）</h3>
    <div class="search-list_head_content">
        <z-input search enter-button="Search" size="large" placeholder="Enter something..." />
    </div>
     <ul class="search-list_nav">
      <li><router-link to="/search/article"> 文章 </router-link></li>
      <li><router-link to="/search/project"> 项目 </router-link></li>
      <li class="active"><router-link to="/search/apply"> 应用 </router-link></li>
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
      <z-form-item label="排序：">
        <z-radio-group v-model="sort">
              <z-radio label="最新创建"></z-radio>
              <z-radio label="最后更新"></z-radio>
          </z-radio-group>
      </z-form-item>
    </z-form>
  </z-card>
  <z-row  :gutter="15">
    <z-col :xs="24" :sm="12" :lg="6" class="m-t-15" v-for="(item,index) in listData" :key="index">
        <z-card dis-hover shadow>
          <div class="apply-card">
            <div class="list-card_meta_title"> <z-avatar :src="item.url" /><span class="m-l-10">{{item.title}}</span></div>
            <p>负责人：{{item.author}}</p>
            <p>最后更新时间：{{item.lastTime}}</p>
          </div>
          <ul class="list-card_action">
            <li><z-icon type="android-open"></z-icon></li>
            <li><z-divider type="vertical" /></li>
            <li><z-icon type="ios-download"></z-icon></li>
            <li><z-divider type="vertical" /></li>
            <li><z-icon type="android-create"></z-icon></li>
            <li><z-divider type="vertical" /></li>
            <li><z-icon type="android-share-alt"></z-icon></li>
          </ul>
        </z-card>
    </z-col>
</z-row>
</div>
</template>

<script>
export default {
  name: 'formBase',
  data: function () {
    return {
      sort: '最新创建',
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
      ],
      listData: [
        {
          url: require('assetspath/framework/search/avatar.png'),
          title: 'ilead admin ui',
          author: '小雪',
          lastTime: '2019-12-10'
        },
        {
          url: require('assetspath/framework/search/avatar.png'),
          title: 'ilead admin ui',
          author: '小雪',
          lastTime: '2019-12-10'
        },
        {
          url: require('assetspath/framework/search/avatar.png'),
          title: 'ilead admin ui',
          author: '小雪',
          lastTime: '2019-12-10'
        },
        {
          url: require('assetspath/framework/search/avatar.png'),
          title: 'ilead admin ui',
          author: '小雪',
          lastTime: '2019-12-10'
        },
        {
          url: require('assetspath/framework/search/avatar.png'),
          title: 'ilead admin ui',
          author: '小雪',
          lastTime: '2019-12-10'
        },
        {
          url: require('assetspath/framework/search/avatar.png'),
          title: 'ilead admin ui',
          author: '小雪',
          lastTime: '2019-12-10'
        },
        {
          url: require('assetspath/framework/search/avatar.png'),
          title: 'ilead admin ui',
          author: '小雪',
          lastTime: '2019-12-10'
        },
        {
          url: require('assetspath/framework/search/avatar.png'),
          title: 'ilead admin ui',
          author: '小雪',
          lastTime: '2019-12-10'
        }
      ],
      expandText: '展开',
      expandIcon: 'chevron-down'
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
    @import "../../../../../styles/framework/pages/list/listCard.css";
    @import "../../../../../styles/framework/pages/search/searchList.css";
</style>
