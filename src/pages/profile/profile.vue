<template>
  <div class="profile">
    <div v-if="loginState === 1" class="userinfo">
      <div class="userinfo-avatar">
        <img class="userinfo-avatar-img" src="/static/images/head.jpg" background-size="cover" />
      </div>
      <div class="userinfo-desc">
        <div class="userinfo-desc-name">aaaaaa</div>
        <div class="userinfo-desc-email">11111@11.com</div>
      </div>
    </div>
    <div v-else class="userinfo">
      <div class="userinfo-login" @click="loginRoute()">
        <div class="userinfo-login-text">登录/注册</div>
        <div class="userinfo-login-right">></div>
      </div>
    </div>
    <div class="myorder underline">
      <div class="myorder-order">我的订单</div>
      <div class="myorder-check">
        <a @click="aaa()">查看全部 ></a>
      </div>
    </div>
    <div class="actgroup">
      <a class="actgroup-item">
        <div class="actgroup-item-area">
          <image class="actgroup-item-icon" src="/static/images/list.png"></image>
          <text class="actgroup-item-desc">全部订单</text>
        </div>
      </a>
      <a class="actgroup-item">
        <div class="actgroup-item-area">
          <image class="actgroup-item-icon" src="/static/images/pay.png"></image>
          <text class="actgroup-item-desc">待付款</text>
        </div> 
      </a>
      <a class="actgroup-item">
        <div class="actgroup-item-area">
          <image class="actgroup-item-icon" src="/static/images/shipping.png"></image>
          <text class="actgroup-item-desc">待发货</text>
        </div> 
      </a>
      <a class="actgroup-item">
        <div class="actgroup-item-area">
          <image class="actgroup-item-icon" src="/static/images/getting.png"></image>
          <text class="actgroup-item-desc">待收货</text>
        </div> 
      </a>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('access', {
      loginState: state => state.loginState,
      userInfo: state => state.userInfo
    })
  },
  data() {
    return {
    }
  },
  components: {
  },
  methods: {
    ...mapActions('access', [
      'logout'
    ]),
    loginRoute() {
      wx.navigateTo({ url: '../loginroute/main' })
    },
    aaa() {
      this.logout()
      console.log('1111')
    }
  },
  created() {
  }
}
</script>
<style scoped>
.profile {
  display: flex;
  flex-direction: column;
}

.userinfo {
  display: flex;
  flex-direction: row;
  height: 275rpx;
  background-color: rgb(250, 250, 250);
}

.userinfo-login {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.userinfo-login-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50rpx;
  font-weight: bolder;
  padding-left: 40rpx;
}

.userinfo-login-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 80rpx;
  font-weight: lighter;
  padding-left: 410rpx;
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
  background-color: white;
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
  font-weight: 300;
}

.actgroup {
  display: flex;
  flex-direction: row;
  height: 200rpx;
  border-bottom: 18rpx solid #eee;
}

.actgroup-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.actgroup-item-area {
  display: flex;
  flex-direction: column;
}

.actgroup-item-icon {
  width: 100rpx;
  height: 100rpx;
}

.actgroup-item-desc {
  font-size: 25rpx;
  text-align: center;
}
</style>
