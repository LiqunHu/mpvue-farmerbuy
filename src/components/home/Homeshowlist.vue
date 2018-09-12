<template>
  <scroll-view scroll-y :style="'height:'+ scrollHeight">
    <view class="van-hairline--bottom" v-for="item in showlists" :key="item.id">
      <van-card
        :title="item.showName"
        :desc="item.desc"
        num="1"
        :price="item.price"
        :thumb="'https://gw.alicdn.com/' + item.url">
        <view slot="footer">
          <van-button size="mini" @click="add2Chart(item)">购买</van-button>
        </view>
      </van-card>
    </view>
  </scroll-view>
</template>

<script>
import { mapActions } from 'vuex'
const apiUrl = '/api/farmerbuy/farmerbuyMPControl?method='
export default {
  data() {
    return {
      scrollHeight: 'auto',
      showlists: []
    }
  },
  async created() {
    let _self = this
    try {
      _self.getShowLists()
      let homeheader = await _self.getItemRect('homeheader')
      let homeswiper = await _self.getItemRect('homeswiper')
      let winheight = wx.getSystemInfoSync().windowHeight
      let autoHeight = winheight - homeheader.height - homeswiper.height
      _self.scrollHeight = autoHeight + 'px'
    } catch (error) {
      console.error(error)
    }
  },
  methods: {
    ...mapActions('shopchart', [
      'addtochart'
    ]),
    async getShowLists() {
      let _self = this
      try {
        let response = await _self.$http.post(apiUrl + 'getGoodsList', {})
        _self.showlists = response.info.data
        console.log(_self.showlists)
      } catch (error) {
        console.error(error)
      }
    },
    getItemRect(id) {
      return new Promise(function (resolve, reject) {
        try {
          let query = wx.createSelectorQuery()
          query.select('#' + id).boundingClientRect()
          query.exec(function (res) {
            resolve(res[0])
          })
        } catch (error) {
          reject(error)
        }
      })
    },
    toIndex(itemId) {
      wx.navigateTo({
        url: '/pages/detail/main?id=' + itemId,
        success: function (res) {
          console.log('success')
        }
      })
    },
    add2Chart(item) {
      let _self = this
      _self.addtochart({item: item})
    }
  }
}
</script>
<style scoped>
</style>
