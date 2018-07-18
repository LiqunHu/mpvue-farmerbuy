import Vue from 'vue'
import store from '@/store'
import App from './wxreg'

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  config: {
    navigationBarTitleText: '微信注册',
    window: {
      // navigationBarBackgroundColor: '#ffff00',
      // backgroundColor: '#eeeeee'
    }
  }
}
