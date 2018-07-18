<template>
  <view class="page__bd">
    <view class="weui-cells">
        <view class="weui-cell weui-cell_input weui-cell_vcode">
            <view class="weui-cell__hd">
                <view class="weui-label">手机号</view>
            </view>
            <view class="weui-cell__bd">
                <input class="weui-input" placeholder="输入手机号" />
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
                <input class="weui-input" placeholder="请输入验证码" />
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
    wxReg() {
      console.log(33333)
    }
  },
  created() {
  }
}
</script>
<style scoped>
@import '../../assets/css/weui.css';
</style>
