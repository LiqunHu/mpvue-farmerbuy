<template>
  <div>
    <view class="van-hairline--bottom" v-for="item in goods" :key="item.goodId">
      <van-card
        :title="item.showName"
        :desc="item.desc"
        :price="item.price"
        :thumb="'https://gw.alicdn.com/' + item.url">
        <view slot="footer">
          <van-stepper :value="item.count"/>
        </view>
      </van-card>
    </view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('shopchart', {
      total: state => state.total,
      totalcount: state => state.totalcount,
      goods: state => state.goods
    })
  },
  data() {
    return {
    }
  },
  methods: {
  },
  created() {
  }
}
</script>
<style scoped>
</style>
