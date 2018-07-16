<template>
  <div class="loginroute">
    <button class="loginbutton" type="primary" size="default" open-type="getUserInfo" @click="wxlogin()">微信登录</button>
  </div>
</template>
<script>
const apiUrl = '/api/farmerbuy/farmerbuyMPControl?method='
export default {
  data() {
    return {
    }
  },
  methods: {
    wxlogin() {
      // 查看是否授权
      // wx.getSetting({
      //   success: function (res) {
      //     if (res.authSetting['scope.userInfo']) {
      //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称
      //       wx.getUserInfo({
      //         success: function (res) {
      //           let appId = 'wx1bf0976923162a6b'
      //           let pc = new WXBizDataCrypt(appId, sessionKey)
      //           console.log(res)
      //           console.log(res.userInfo)
      //         }
      //       })
      //     }
      //   }
      // })
      // let appId = 'wx1bf0976923162a6b'
      // let appSecret = 'f03e63ca1aca1c007b5915b54b6ec8c7'
      let _self = this
      wx.login({
        success: function (res) {
          if (res.code) {
            wx.getSetting({
              success: function (setting) {
                if (setting.authSetting['scope.userInfo']) {
                  // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                  wx.getUserInfo({
                    success: async function (info) {
                      let response = await _self.$http.post(apiUrl + 'wxLogin', { code: res.code, info: info })
                      console.log(response)
                    }
                  })
                }
              }
            })
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
