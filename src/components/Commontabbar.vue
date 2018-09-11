<template>
  <div>
    <van-tabbar id="commontabbar" @change="onChange" :active="active">
        <van-tabbar-item icon="home">首页</van-tabbar-item>
        <van-tabbar-item icon="cart" info="0">购物车</van-tabbar-item>
        <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
	</div>
</template>
<script>
export default {
  props: {
    'active': {
      type: Number,
      default: 0
    }
  },
  methods: {
    onChange(event) {
      let _self = this
      if (_self.active !== event.mp.detail) {
        if (event.mp.detail === 0) {
          wx.navigateTo({
            url: '/pages/home/main'
          })
        } else if (event.mp.detail === 1) {

        } else if (event.mp.detail === 2) {
          wx.navigateTo({
            url: '/pages/profile/main'
          })
        }
      }
    }
  }
}
</script>
<style scoped>
</style>
