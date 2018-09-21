<template>
  <div>
    <view class="van-hairline--bottom" v-for="item in goods" :key="item.goodId">
      <van-card
        :title="item.showName"
        :desc="item.desc"
        :price="item.price"
        :thumb="'https://gw.alicdn.com/' + item.url">
        <view slot="footer">
          <view class="view-block">
            <van-stepper :value="item.count" @change="changeItemCount(item, $event)"/>
          </view>
          <view>
            <van-icon name="delete" size="20px"/>
          </view>
        </view>
      </van-card>
    </view>
    <demo-block title="基础用法">
      <van-submit-bar
        :price="total"
        button-text="提交订单"
        custom-class="van-submit-bar"
      />
    </demo-block>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("shopchart", {
      total: state => state.total,
      totalcount: state => state.totalcount,
      goods: state => state.goods
    })
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions("shopchart", ["setItemCount"]),
    changeItemCount(item, e) {
      let _self = this;
      _self.setItemCount({ item: item, itemcount: e.mp.detail });
    }
  },
  created() {}
};
</script>
<style scoped>
.van-submit-bar {
  position: relative !important;
}
.view-block {
  padding: 0 15px;
}
</style>
