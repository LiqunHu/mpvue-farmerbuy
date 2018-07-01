import Vue from 'vue'
import App from './home'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '侬买'
  }
}
