<template>
  <div class ="frame-page">
    <z-iframe  :height="height" width="100%" :url="url" id="externalMenuIframe"></z-iframe>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      url: '',
      height: '550px'
    }
  },
  mounted: function () {
    this.setIframeHeight()
    window.onresize = () => {
      this.setIframeHeight()
    }
  },
  methods: {
    setIframeHeight: function () {
      let height1 = document.getElementsByClassName('frame-header')[0].clientHeight
      let height2 = document.getElementsByClassName('tab-nav')[0].clientHeight
      this.height = document.getElementsByClassName('page-sidebar_logo')[0].clientHeight + document.getElementsByClassName('__vuescroll hasVBar')[0].clientHeight - height1 - height2
      this.height = String(this.height)
    }
  },
  components: {},
  beforeRouteEnter (to, from, next) {
    next(vm => {
      let len = vm.$route.fullPath.length
      vm.url = decodeURIComponent(vm.$route.fullPath.substring(6, len))
    })
  },
  beforeRouteLeave (to, from, next) {
    next()
  }
}
</script>
