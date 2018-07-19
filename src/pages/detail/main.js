import Vue from 'vue'
import store from '@/store'
import App from './detail'

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  config: {
    navigationBarTitleText: '商品详情'
  }
}
