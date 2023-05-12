<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:39:37
 * @LastEditTime: 2020-06-02 18:52:52
 * @LastEditors: Please set LastEditors
 -->
<template>
 <div class="errorpage">
      <div class="errorpage_container">
            <div class="errorpage_subject subject-500">
              <img class="img-responsive" src="~assetspath/framework/abnomal/500-subject.png">
            </div>
            <div class="errorpage_text text-500">
                <p>抱歉，</p>
                <p>服务器错误！</p>
            </div>
      </div>
    </div>
</template>
<script>

export default {
  name: 'error500'

}
</script>
<style scoped>
    @import "../../../../../styles/framework/pages/abnormal/abnormal.css";
</style>
