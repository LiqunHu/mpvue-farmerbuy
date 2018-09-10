<template>
  <div>
    <van-tabbar @change="onChange" :active="active">
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
      console.log(event.mp.detail)
    }
  }
}
</script>
<style scoped>
</style>
