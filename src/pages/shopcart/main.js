import Vue from 'vue'
import store from '@/store'
import App from './shopcart'

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  config: {
    navigationBarTitleText: '购物车',
    usingComponents: {
      'van-button': '/static/vant/button/index',
      'van-notify': '/static/vant/notify/index',
      'van-tabbar': '/static/vant/tabbar/index',
      'van-tabbar-item': '/static/vant/tabbar-item/index',
      'van-card': '/static/vant/card/index'
    }
  }
}
