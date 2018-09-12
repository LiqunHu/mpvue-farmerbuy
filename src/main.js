import Vue from 'vue'
import App from './App'
import request from '@/utils/request'
import '../static/vant/common/index.wxss'

Vue.config.productionTip = false
Vue.prototype.$http = request
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    // pages: ['pages/logs/main', '^pages/index/main' , 'pages/loginroute/main', 'pages/wxreg/main', 'pages/detail/main'],
    pages: ['^pages/home/main', 'pages/detail/main', 'pages/profile/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#01aee3',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: false
    },
    tabBar: {
      color: '#666666',
      selectedColor: '#000000',
      borderStyle: 'white',
      backgroundColor: '#f8f9fb',
      list: [
        {
          text: '首页',
          pagePath: 'pages/home/main',
          iconPath: 'static/images/home.png',
          selectedIconPath: 'static/images/home-actived.png'
        },
        {
          text: '购物车',
          pagePath: 'pages/home/main',
          iconPath: 'static/images/shoppingcart.png',
          selectedIconPath: 'static/images/shoppingcart-actived.png'
        },
        {
          text: '我的',
          pagePath: 'pages/profile/main',
          iconPath: 'static/images/profile.png',
          selectedIconPath: 'static/images/profile-actived.png'
        }
      ]
    }

  }
}
