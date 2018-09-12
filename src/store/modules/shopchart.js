import {
  CHART_ADD,
  CHART_REMOVE,
  CHART_CLEAR
} from '@/store/mutations-type'

const state = {
  total: 0.00,
  totalcount: 0,
  goods: []
}

function reCalc() {
  let total = 0
  let totalcount = 0
  for (let i of state.goods) {
    total += Math.ceil(parseFloat(i.price) * 100 * i.count)
    totalcount += i.count
  }
  state.total = total
  state.totalcount = totalcount
  wx.setTabBarBadge({
    index: 1,
    text: totalcount.toString()
  })
}

const mutations = {
  [CHART_ADD](state, {
    item
  }) {
    let i = 0
    for (; i < state.goods.length; i++) {
      if (state.goods[i].goodId === item.goodId) {
        state.goods[i].count += 1
        break
      }
    }
    if (i === state.goods.length) {
      item.count = 0
      state.goods.push(item)
    }
    reCalc()
  },
  [CHART_REMOVE]: (state, {
    item
  }) => {
    for (let i = 0; i < state.goods.length; i++) {
      if (state.goods[i].goodId === item.goodId) {
        state.goods.splice(i, 1)
      }
    }
    reCalc()
  },
  [CHART_CLEAR]: (state) => {
    state.total = 0.00
    state.totalcount = 0
    state.goods = []
    wx.setTabBarBadge({
      index: 1,
      text: '0'
    })
  }
}

const actions = {
  async addtochart({
    state,
    commit
  }, {
    item
  }) {
    commit(CHART_ADD, {
      item
    })
  },
  async removeitem({
    state,
    commit
  }, {
    item
  }) {
    commit(CHART_REMOVE, {
      item: item
    })
  },
  async clearchart({
    state,
    commit
  }) {
    commit(CHART_CLEAR)
  }
}

export default {
  state,
  mutations,
  actions
}
