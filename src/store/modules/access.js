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
    wx.setStorageSync('token', userInfo.authorization)
  },
  [ACCESS_LOGOUT]: (state) => {
    state.loginState = 0
    state.userInfo = {}
    wx.clearStorageSync()
  }
}

const actions = {
  async login({
    state,
    commit
  }, {
    userInfo
  }) {
    commit(ACCESS_LOGIN, {
      userInfo: userInfo
    })
  },
  async logout({
    state,
    commit
  }) {
    commit(ACCESS_LOGOUT)
  }
}

export default {
  state,
  mutations,
  actions
}
