<template>
  <!-- <section>
    <section class="content">
      <header></header>
      <swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-active-color="#ff5733">
        <swiper-item v-for="(item, index) in imgs" :key="index">
          <image class="slide-image" :src="'https://gw.alicdn.com/tfs/' + item.url" mode="aspectFill" lazy-load="true"/>
        </swiper-item>
      </swiper>
      <showlist :showlists="showlists"></showlist>
    </section>
  </section> -->
</template>

<script>
import showlist from '@/components/home/showlist'
import header from '@/components/home/header'
const apiUrl = '/api/farmerbuy/farmerbuyMPControl?method='

export default {
  data() {
    return {
      showlists: [],
      imgs: []
    }
  },
  components: {
    showlist,
    header
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
    },
    async getShowLists() {
      let _self = this
      try {
        let response = await _self.$http.post(apiUrl + 'getGoodsList', {})
        _self.showlists = response.info.data
      } catch (error) {
        console.error(error)
      }
    }
  },
  created() {
    let _self = this
    try {
      _self.getSwiper()
      _self.getShowLists()
    } catch (error) {
      console.error(error)
    }
  }
}
</script>
<style scoped>
</style>
