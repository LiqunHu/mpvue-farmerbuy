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
      'van-card': '/static/vant/card/index',
      'van-stepper': '/static/vant//stepper/index',
      
    }
  }
}
