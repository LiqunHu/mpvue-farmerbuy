import Vue from 'vue'
import store from '@/store'
import App from './loginroute'

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  config: {
    navigationBarTitleText: '登录'
  }
}
