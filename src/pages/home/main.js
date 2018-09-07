import Vue from 'vue'
import store from '@/store'
import App from './home'

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  config: {
    navigationBarTitleText: '侬买',
    usingComponents: {
      'van-button': '/static/vant/button/index',
      'van-notify': '/static/vant/notify/index'
    }
  }
}
