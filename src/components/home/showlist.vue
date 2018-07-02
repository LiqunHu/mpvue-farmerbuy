<template>
  <section>
  	<ul>
  		<li :class="{'border-bottom': showlists[showlists.length-1] != item}" v-for="item in showlists" :key="item.id">
        <figure class="m-img ml fl pr">
  				<img :src="'https://gw.alicdn.com/' + item.poster">
  				<div class="play-icon pa">
  					<img src="https://gw.alicdn.com/tps/TB1PH2uLXXXXXaLaXXXXXXXXXXX-60-60.png" alt="">
  				</div>
  			</figure>
        <div class="mr border-bottom">
          <div class="m-buy fr">
            <button class="buy-btn f12" v-if="item.openTime < '2016-12-09'">购买</button>
            <button class="forward-buy-btn f12" v-else>预售</button>
          </div>
          <a>
          <!-- <router-link :to="{ name: 'detail', params: { id: item.mID }}"> -->
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
          <!-- </router-link>		 -->
        </div>
        <div class="f13 m-act">
          <span class="border-right">1212五折狂欢</span>
          <span class="tddd">1212特惠抢票，名额有限抢完即止</span>
        </div>
  		</li> 		
  	</ul>
  </section>
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
  }
}
</script>
<style>
#hot {
  padding-left: 15rpx;
  box-sizing: border-box;
  margin-bottom: 10rpx;
  background: #fff;
}
#hot li {
  padding-top: 15rpx;
}
.m-img {
  width: 65rpx;
  height: 90rpx;
}
.m-img img {
  opacity: 0.7;
  transition: opacity 0.7s ease-in;
}
.m-img img,
.play-icon img {
  width: 100%;
  height: 100%;
}
.play-icon {
  width: 17rpx;
  height: 17rpx;
  left: 50%;
  top: 50%;
  margin-left: -8.5rpx;
  margin-top: -8.5rpx;
  display: none;
}
.m-act,
.mr {
  margin-left: 76rpx;
}
.m-act {
  margin-right: 15rpx;
}
.mr {
  padding: 0 15rpx 23rpx 0;
  box-sizing: border-box;
}
.m-buy {
  margin-top: 30rpx;
}
.buy-btn,
.forward-buy-btn {
  height: 24rpx;
  width: 45rpx;
  line-height: 20rpx;
  text-align: center;
  background-color: #fff;
  outline: none;
  border-radius: 3rpx;
  font-weight: bold;
}
.buy-btn {
  border: 1rpx solid #ff4d64;
  color: #ff4d64;
}
.forward-buy-btn {
  border: 1rpx solid #37b7ff;
  color: #37b7ff;
}
.full-star {
  margin-top: 7rpx;
  width: 50rpx;
  height: 10rpx;
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
  right: -21rpx;
  top: -1rpx;
  font-size: 10rpx;
  color: #9c9c9c;
}
.m-info {
  margin-right: 50rpx;
}
.m-info h2 {
  margin-top: 3rpx;
  max-width: 68%;
  display: inline-block;
}
.m-info span {
  display: inline-block;
}
.m-info p:nth-of-type(1) {
  margin-top: 12rpx;
}
.m-info p:nth-of-type(2) {
  margin-top: 6rpx;
}
.m-info p {
  font-size: 13rpx;
  color: #9c9c9c;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.m-act {
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 8rpx;
  padding-bottom: 8rpx;
}
.m-act span:first-child {
  color: #fea54c;
}
.m-act span:last-child {
  color: #9c9c9c;
  text-indent: 8rpx;
}
.m-act span {
  box-sizing: border-box;
  width: 50%;
  display: inline-block;
}
.m-name {
  height: 20rpx;
  color: #333;
}
.type-3d {
  margin-top: 5rpx;
  width: 17rpx;
  height: 17rpx;
  background-image: url('../../assets/images/3d.svg');
}
.type-imax {
  margin-top: 5rpx;
  width: 27rpx;
  height: 15rpx;
  background-image: url('../../assets/images/imax.svg');
}
.type-3dimax {
  margin-top: 5rpx;
  width: 45rpx;
  height: 17rpx;
  background-image: url('../../assets/images/3dimax.svg');
}
.type-3d,
.type-imax,
.type-3dimax {
  margin-left: 5rpx;
  background-size: 100%;
  background-repeat: no-repeat;
  float: left;
}
</style>
