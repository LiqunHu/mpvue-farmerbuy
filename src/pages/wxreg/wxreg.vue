<template>
  <view class="page__bd">
    <view class="weui-cells">
        <view class="weui-cell weui-cell_input weui-cell_vcode">
            <view class="weui-cell__hd">
                <view class="weui-label">手机号</view>
            </view>
            <view class="weui-cell__bd">
                <input class="weui-input" placeholder="输入手机号" v-model="phone"/>
            </view>
            <view class="weui-cell__ft">
                <view class="weui-vcode-btn">获取验证码</view>
            </view>
        </view>
        <view class="weui-cell weui-cell_input weui-cell_vcode">
            <view class="weui-cell__hd">
                <view class="weui-label">验证码</view>
            </view>
            <view class="weui-cell__bd">
                <input class="weui-input" placeholder="请输入验证码" v-model="captcha"/>
            </view>
        </view>
    </view>
    <view class="weui-btn-area">
        <button class="weui-btn" type="primary" @click="wxReg()">确定</button>
    </view>
  </view>
</template>

<script>
import { mapState, mapActions } from 'vuex'
const apiUrl = '/api/farmerbuy/farmerbuyMPControl?method='
export default {
  computed: {
    ...mapState('access', {
      loginState: state => state.loginState,
      userInfo: state => state.userInfo
    })
  },
  data() {
    return {
      phone: '',
      captcha: ''
    }
  },
  methods: {
    ...mapActions('access', [
      'login'
    ]),
    wxReg() {
      let _self = this
      wx.login({
        success: async function (res) {
          if (res.code) {
            wx.getSetting({
              success: function (setting) {
                if (setting.authSetting['scope.userInfo']) {
                  // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                  wx.getUserInfo({
                    success: async function (info) {
                      let response = await _self.$http.post(apiUrl + 'wxReg', { wxCode: res.code, info: info.userInfo, phone: _self.phone, captcha: _self.captcha })
                      console.log(response)
                      if (response.errno === 0) {
                        await _self.login({ userInfo: response.info })
                        wx.navigateBack({
                          delta: 2
                        })
                      } else {
                        wx.showToast({
                          title: response.msg,
                          icon: 'none'
                        })
                      }
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
  }
}
</script>
<style scoped>
@import '../../assets/css/weui.css';
</style>
