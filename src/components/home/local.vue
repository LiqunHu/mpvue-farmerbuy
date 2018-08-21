<template>
    <div class="heard">
        <div class="heard-location" @click="searchAddress">
            <image src="/static/images/location.png" class="heard-location-icon"/>
            <text class="heard-location-text">{{location}}</text>
        </div>
        <div class="heard-scan">
        <image src="/static/images/scan.png" class="heard-scan-icon"/>
        <span class="text">扫码</span> 
        </div>
  </div>
</template>

<script>
import QQMapWX from '../../utils/map'
var qqmapsdk
qqmapsdk = new QQMapWX({
  key: 'DHNBZ-2ZLKK-T7IJJ-AXSQW-WX5L6-A6FJZ'
})
export default {
  data() {
    return {
      location: ''
    }
  },
  onLoad() {
    let _self = this
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: (res) => {
            _self.location = res.result.formatted_addresses.recommend
          }
        })
      }
    })
  },
  methods: {
    searchAddress() {
      wx.chooseLocation()
    }
  }
}
</script>
<style lang="stylus" scoped>
.heard {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 80rpx;
  background: #FFC640;

  .heard-location {
    position: relative;
    font-size: 25rpx;
    padding: 10rpx 15rpx;
    margin: 12rpx;
    width: 250rpx;
    height: 40rpx;
    line-height: 40rpx;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    background: #B38B2D;
    color: white;
    border-radius: 20rpx;

    &:after {
      content: '';
      position: absolute;
      top: 25rpx;
      left: 250rpx;
      width: 8rpx;
      height: 8rpx;
      border: 3rpx solid #fff;
      border-bottom: none;
      border-left: none;
      transform: rotate(45deg);
    }

    .heard-location-icon {
      position: absolute;
      top: 17rpx;
      height: 25rpx;
      width: 25rpx;
    }

    .heard-location-text {
      left: 47rpx;
      height: 30rpx;
      width: 190rpx;
      padding-left: 30rpx;
    }
  }

  .heard-scan {
    position: relative;
    font-size: 25rpx;
    padding: 9rpx 10rpx;
    margin: 15rpx;
    height: 40rpx;
    width: 100rpx;
    background: white;
    border-radius: 10rpx;
    line-height: 40rpx;

    .text {
      padding-left: 10rpx;
      color: #ccc;
    }

    .heard-scan-icon {
      top: 17rpx;
      height: 25rpx;
      width: 25rpx;
    }
  }
}
</style>
