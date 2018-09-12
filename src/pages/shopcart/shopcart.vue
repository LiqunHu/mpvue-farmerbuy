<template>
  <div>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        class="card-goods__item"
        v-for="item in goods"
        :key="item.id"
        :name="item.id"
      >
        <van-card
          :title="item.title"
          :desc="item.desc"
          :num="item.num"
          :price="formatPrice(item.price)"
          :thumb="item.thumb"
        />
      </van-checkbox>
    </van-checkbox-group>
  </div>
</template>

<script>
import Homeheader from '@/components/home/Homeheader'
import Homeswiper from '@/components/home/Homeswiper'
import Homeshowlist from '@/components/home/Homeshowlist'
// const apiUrl = '/api/farmerbuy/farmerbuyMPControl?method='
// import Notify from '@/../static/vant/notify/notify'

export default {
  data() {
    return {
      showlists: []
    }
  },
  components: {
    Homeheader,
    Homeswiper,
    Homeshowlist
  },
  methods: {
  },
  created() {
    wx.setTabBarBadge({ index: 1, text: '0' })
  }
}
</script>
<style scoped>
</style>
