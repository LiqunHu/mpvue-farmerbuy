<template>
  <div>
    <view class="van-hairline--bottom" v-for="item in goods" :key="item.goodId">
      <wux-card title="卡片标题" extra="额外内容">
        <view slot="body">卡片内容</view>
        <view slot="footer">尾部内容</view>
      </wux-card>
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
