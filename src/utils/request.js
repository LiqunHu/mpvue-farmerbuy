import wx from 'wx'
import Fly from 'flyio'

const request = new Fly()

request.config.timeout = 10 * 1000
// request.config.baseURL = 'http://localhost:9093'
request.config.baseURL = 'http://120.24.236.69:9093'
// if (process.env.METHOD === 'local') {
//   request.config.baseURL = 'http://localhost:9090'
// }
// } else if (process.env.METHOD === 'proxy2') {
//   request.config.baseURL = 'http://localhost:3002' // 本地代理2(100次/小时)
// } else if (process.env.METHOD === 'nginx') {
//   request.config.baseURL = 'https://movie.douban.gusaifei.com/v2/movie' // nginx 代理(100次/小时)
// }

request.interceptors.request.use((request) => {
  wx.showLoading({ title: '加载中...' })
  let token = wx.getStorageSync('token')
  if (typeof (token) === 'string') {
    request.headers['authorization'] = token
  }
  return request
})

request.interceptors.response.use(
  (response, promise) => {
    wx.hideLoading()
    return promise.resolve(response.data)
  },
  (err, promise) => {
    wx.hideLoading()
    // wx.showToast({
    //   title: err.message,
    //   icon: 'none'
    // })
    return promise.resolve(err.response.data)
  }
)

export default request
