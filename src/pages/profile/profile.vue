<template>
  <div>
    <div class="userinfo">
      <div class="userinfo-avatar">
        <img class="userinfo-avatar-img" src="/static/images/head.jpg" background-size="cover" />
      </div>
      <div class="userinfo-desc">
        <div class="userinfo-desc-name">aaaaaa</div>
        <div class="userinfo-desc-email">11111@11.com</div>
      </div>
    </div>
    <div class="myorder underline">
      <div class="myorder-order">我的订单</div>
      <div class="myorder-check">
        <a>查看全部 ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  components: {
  },
  methods: {
  },
  created() {
  }
}
</script>
<style scoped>
.userinfo {
  display: flex;
  flex-direction: row;
  height: 275rpx;
  background-color: rgb(243, 243, 243);
}

.underline {
  border-bottom: 1rpx solid #eee;
}

.userinfo-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200rpx;
}

.userinfo-avatar-img {
  width: 150rpx;
  height: 150rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
}

.userinfo-desc-name {
  font-size: 50rpx;
  font-weight: bolder;
}

.userinfo-desc-email {
  font-size: 40rpx;
  font-weight: lighter;
}

.myorder {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30rpx;
}

.myorder-order {
  /* margin-left: 30rpx; */
  font-size: 40rpx; 
}

.myorder-check {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-left: 30rpx; */
  font-size: 35rpx; 
  font-weight:300;
}
</style>
