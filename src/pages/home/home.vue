<template>
  <section style="height: 100%">
    <section class="content">
      <swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-active-color="#ff5733">
        <swiper-item v-for="(item, index) in imgs" :key="index">
          <image class="slide-image" :src="'https://gw.alicdn.com/tfs/' + item.url" mode="aspectFill" lazy-load="true"/>
        </swiper-item>
      </swiper>
      <showlist :showlists="showlists"></showlist>
    </section>
    <!-- <section  v-show="!selnav"  class="content">
      <coming :comingLists="comingLists" ></coming>
      <div class="click-load-more" @click="clickLoadMore">
        <span v-show="clickLoadStatus === 'start'">点击查看更多</span>
        <div v-show="clickLoadStatus === 'loading'" class="loading-icon">
          <span>加载中</span>
          <mt-spinner style="display: inline-block" type="fading-circle" color="rgb(100, 100, 100)" :size="19"></mt-spinner>
        </div>
        <span v-show="clickLoadStatus === 'complete'">已经全部显示</span>
      </div>
    </section>
    <play-video></play-video> -->
  </section>
</template>

<script>
import showlist from '@/components/home/showlist'
const apiUrl = '/api/farmerbuy/farmerbuyMPControl?method='

export default {
  data() {
    return {
      showlists: [],
      imgs: []
    }
  },
  components: {
    showlist
  },
  methods: {
    async getSwiper() {
      let _self = this
      try {
        let response = await _self.$http.post(apiUrl + 'getSwiper', {})
        _self.imgs = response.info
      } catch (error) {
        console.error(error)
      }
    },
    async getShowLists() {
      let _self = this
      try {
        let response = await _self.$http.get(`/movie/hot/?city=bj`)
        _self.showlists = response.data.data.returnValue
        console.log(_self.showlists)
      } catch (error) {
        console.error(error)
      }
    }
  },
  created() {
    let _self = this
    try {
      // _self.getSwiper()
      _self.getShowLists()
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style scoped>
.home-header {
  height: 40rpx;
  font-size: 0rpx;
  background-color: #fff;
}
.selnav {
  color: #ff4d64;
}
.content {
  margin-bottom: 58rpx;
}
.swiper {
  height: 375rpx;
}
.slide-image {
  height: 100%;
  width: 100%;
}
.sel-lists {
  width: 65%;
  display: -moz-box;
  display: -webkit-box;
  display: box;
}
.sel-lists div {
  -moz-box-flex: 1;
  -webkit-box-flex: 1;
  line-height: 40rpx;
  text-align: center;
}
.move {
  display: inline-block;
  bottom: 0rpx;
  width: 40%;
  border-bottom: 3rpx solid #ff4d64;
  -webkit-transition: left 0.7s ease-in-out;
  transition: left 0.7s ease-in-out;
}
.click-load-more {
  height: 42rpx;
  line-height: 42rpx;
  text-align: center;
  color: #333;
  font-size: 15rpx;
  background-color: #fff;
  margin: 5rpx 0 8rpx;
}
.loading-icon span {
  vertical-align: middle;
}
</style>
