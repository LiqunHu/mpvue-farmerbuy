<template>
  <div>
    <van-card
      title="标题"
      desc="描述"
      num="2"
      price="2.00"
      thumb="/static/imgges/location.png"/>
  </div>
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
