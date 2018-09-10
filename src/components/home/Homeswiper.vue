<template>
  <swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-active-color="#ff5733">
    <swiper-item v-for="(item, index) in imgs" :key="index">
      <image class="slide-image" :src="'https://gw.alicdn.com/tfs/' + item.url" mode="aspectFill" lazy-load="true"/>
    </swiper-item>
  </swiper>
</template>

<script>
const apiUrl = '/api/farmerbuy/farmerbuyMPControl?method='
export default {
  data() {
    return {
      imgs: []
    }
  },
  created() {
    let _self = this
    try {
      _self.getSwiper()
    } catch (error) {
      console.error(error)
    }
  },
  methods: {
    async getSwiper() {
      let _self = this
      try {
        let response = await _self.$http.post(apiUrl + 'getSwiper', {})
        _self.imgs = response.info.data
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
<style scoped>
.slide-image {
  height: 100%;
  width: 100%;
}
</style>
