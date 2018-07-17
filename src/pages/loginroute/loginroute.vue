<template>
  <div class="loginroute">
    <button class="loginbutton" type="primary" size="default" open-type="getUserInfo" @click="wxlogin()">微信登录</button>
  </div>
</template>
<script>
// const apiUrl = '/api/farmerbuy/farmerbuyMPControl?method='
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
              console.log(response)
              await _self.login(response.info)
            } catch (error) {
              console.log('登录失败！' + error)
            }
            // wx.getSetting({
            //   success: function (setting) {
            //     if (setting.authSetting['scope.userInfo']) {
            //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            //       wx.getUserInfo({
            //         success: async function (info) {
            //           let response = await _self.$http.post('/api/auth', { code: res.code, info: info })
            //           console.log(response)
            //         }
            //       })
            //     }
            //   }
            // })
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
.loginroute {
  margin-top: 400rpx;
}

.loginbutton {
  width: 90%;
}
</style>
