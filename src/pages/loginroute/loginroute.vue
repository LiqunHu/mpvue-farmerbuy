<template>
  <div class="loginroute">
    <button class="weui-btn weui-btn_primary" type="primary" size="default" open-type="getUserInfo" @click="wxlogin()">微信登录</button>
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
  methods: {
    ...mapActions('access', [
      'login'
    ]),
    wxlogin() {
      let _self = this
      wx.login({
        success: async function (res) {
          if (res.code) {
            try {
              let response = await _self.$http.post('/api/auth', { loginType: 'WEIXIN', wxCode: res.code })
              if (response.errno === 0) {
                await _self.login({ userInfo: response.info })
                wx.navigateBack({
                  delta: 1
                })
              } else if (response.errno === 'auth_22') {
                console.log(response.msg)
                wx.navigateTo({ url: '../wxreg/main' })
              } else {
                wx.showToast({
                  title: response.msg,
                  icon: 'none'
                })
              }
            } catch (error) {
              console.log('登录失败！' + error)
            }
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    }
  },
  created() {
    try {
    } catch (error) {
      console.error(error)
    }
  }
}
</script>
<style scoped>
/* @import '../../assets/css/weui.css'; */
.loginroute {
  margin-top: 400rpx;
  padding: 0 15px;
}
</style>
