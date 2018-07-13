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
    window: {
      // navigationBarBackgroundColor: '#ffff00',
      // backgroundColor: '#eeeeee'
    }
  }
}
