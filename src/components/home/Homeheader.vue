<template>
  <view class="header" id="homeheader" @click="scanCode()">
    <image class="scan-icon" mode="aspectFit" src="/static/images/scan.png"/>
    <text class="scan-text">扫描</text>
	</view>
</template>
<script>
export default {
  data() {
    return {
      imgs: []
    }
  },
  onLoad() {
  },
  methods: {
    scanCode() {
      // let _self = this
      wx.scanCode({
        scanType: ['qrCode'],
        success: async function (res) {
          console.log(res)
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.header {
  display: flex;
  align-items: center;
  height: 40px;
  color: white;
  background-color: #01aee3;

  .scan-icon {
    height: 20px;
    width: 20px;
    margin-left: 15px;
  }

  .scan-text {
    margin-left: 8px;
    font-size: 18px;
    font-weight: 300;
  }
}
</style>
