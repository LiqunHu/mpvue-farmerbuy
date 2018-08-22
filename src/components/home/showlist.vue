<template>
    <view class="show-list">
  		<view :class="{'border-bottom': showlists[showlists.length-1] != item}" v-for="item in showlists" :key="item.id" @click="toIndex(item.id)">
        <view class="show-item">
          <image class="show-item-poster" :src="'https://gw.alicdn.com/' + item.url"></image>
          <view class="show-item-body">
            <view class="show-item-meta">
              <text class="show-item-title">{{ item.showName }}</text>
              <!-- <div class="starts">
                <div class="full-star">
                  <div class="score-start" :style="'width: ' + item.remark * 10 + '%'"></div>
                </div>
                <span class="score">{{ item.remark }}</span>
              </div> -->
              <p class="show-item-desc">{{ item.desc }}</p>
              <div class="show-item-price-sales">
                <div class="show-item-price">
                  <div class="show-item-price-mark">¥</div>
                  <div>{{ item.price }}</div>
                </div>
                <div class="show-item-sales">已销售{{ item.sales }}</div>
              </div>
              <!-- <p class="desc">{{ item.leadingRole}}</p> -->
              <!-- <text class="md-show-item__sub-title">{{ movie.original_title }} ({{ movie.year }})</text>
              <view class="md-show-item__artists">导演：<block v-for="(director, i) in movie.directors" :key="director.id"> {{ director.name }} </block></view> -->
            </view>
            <!-- <view class="show-item-act">
              <button class="show-item-buy">购买</button>
            </view> -->
          </view>
        </view>
      </view>
        <!-- <figure class="m-img ml fl pr">
  				<img :src="'https://gw.alicdn.com/' + item.poster">
  				<div class="play-icon pa">
  					<img src="https://gw.alicdn.com/tps/TB1PH2uLXXXXXaLaXXXXXXXXXXX-60-60.png" alt="">
  				</div>
  			</figure> -->
        <!-- <div class="mr border-bottom">
          <div class="m-buy fr">
            <button class="buy-btn f12" v-if="item.openTime < '2016-12-09'">购买</button>
            <button class="forward-buy-btn f12" v-else>预售</button>
          </div>
          <a>
          <router-link :to="{ name: 'detail', params: { id: item.mID }}">
            <div class="m-info">
              <div class="m-name">
                <h2 class="f16 tddd vm fl">{{ item.showName }}</h2>
                <div class="vm type-3dimax" v-if="item.showMark == 'IMAX3D'"></div>
                <div class="vm type-imax" v-if="item.showMark == 'IMAX'"></div>
                <div class="vm type-3d" v-if="item.showMark == '3D'"></div>
              </div>
              <div class="full-star pr">
                <div class="score-start" :style="'width: ' + item.remark * 10"></div>
                <span class="score pa">{{ item.remark }}</span>
              </div>
              <p>{{ item.highlight }}</p>
              <p>{{ item.leadingRole}}</p>
            </div>
          </a>
          </router-link>		
        </div>
        <div class="f13 m-act">
          <span class="border-right">1212五折狂欢</span>
          <span class="tddd">1212特惠抢票，名额有限抢完即止</span>
        </div> -->
    </view>
</template>
<script>
export default {
  name: 'showlist',
  data() {
    return {
    }
  },
  props: {
    'showlists': {
      type: Array,
      default: () => []
    }
  },
  methods: {
    toIndex(itemId) {
      wx.navigateTo({
        url: '/pages/detail/main?id=' + itemId,
        success: function (res) {
          console.log('success')
        }
      })
    }
  }
}
</script>
<style>
.show-list {
  height: 100%;
}
.show-item {
  display: flex;
  flex-direction: row;
  padding: 20rpx 40rpx;
}
.show-item-poster {
  width: 128rpx;
  height: 168rpx;
  margin-right: 20rpx;
}
.show-item-body {
  display: flex;
  flex-direction: row;
  height: 170rpx;
  width: 600rpx;
  border-bottom: 1rpx solid #eee;
}
.show-item-meta {
  flex: 1;
  height: 168rpx;
}
.show-item-act {
  height: 168rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.show-item-buy {
  display: inline-block;
  /* margin: 10rpx auto; */
  padding: 1rpx 30rpx;
  color: #ff4d64;
  border: 1rpx solid #ff4d64;
  font-size: 20rpx;
  font-weight: bold;
}
.show-item-title {
  font-size: 32rpx;
}
.starts {
  display: flex;
  flex-direction: row;
  margin-bottom: 15rpx;
}
.full-star {
  /* margin-top: 4rpx; */
  width: 96rpx;
  height: 20rpx;
  background-size: auto 100%;
  background-image: url('../../assets/images/nostart.svg');
}
.score-start {
  width: 100%;
  height: 100%;
  background-size: auto 100%;
  background-image: url('../../assets/images/star.svg');
}
.score {
  /* margin-left: 100rpx; */
  margin-top: -2rpx;
  font-size: 20rpx;
  color: #9c9c9c;
}
.show-item-desc {
  width: 400rpx;
  /* margin-top: 5rpx; */
  font-size: 20rpx;
  color: #9c9c9c;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.show-item-price-sales {
  display: flex;
  justify-content: space-between;
}
.show-item-price {
  display: flex;
  flex-direction: row;
  color: orangered;
}
.show-item-price-mark {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25rpx;
}
.show-item-sales {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #9c9c9c;
  font-size: 20rpx;
}
</style>
