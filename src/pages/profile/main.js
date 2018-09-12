import Vue from 'vue'
import store from '@/store'
import App from './profile'

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  config: {
    navigationBarTitleText: '我的',
    usingComponents: {
      'van-button': '/static/vant/button/index',
      'van-tabbar': '/static/vant/tabbar/index',
      'van-tabbar-item': '/static/vant/tabbar-item/index'
    }
  }
}
