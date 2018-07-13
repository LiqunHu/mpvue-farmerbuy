import {
  ACCESS_LOGIN,
  ACCESS_LOGOUT
} from '@/store/mutations-type'

const state = {
  loginState: wx.getStorageSync('loginState') || 0,
  userInfo: wx.getStorageSync('userInfo') || {}
}

const mutations = {
  [ACCESS_LOGIN](state, {
    userInfo
  }) {
    state.loginState = 1
    state.userInfo = userInfo
    wx.setStorageSync('loginState', state.loginState)
    wx.setStorageSync('userInfo', state.userInfo)
  },
  [ACCESS_LOGOUT]: (state) => {
    state.loginState = 0
    state.userInfo = {}
    wx.setStorageSync('loginState', state.loginState)
    wx.setStorageSync('userInfo', state.userInfo)
  }
}

const actions = {
  async login({
    state,
    commit
  }) {
    let userInfo = {}
    commit(ACCESS_LOGIN, {
      userInfo: userInfo
    })
  }
}

export default {
  state,
  mutations,
  actions
}
