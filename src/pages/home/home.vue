<template>
  <div>
    <homeheader></homeheader>
    <homeswiper></homeswiper>
    <homeshowlist></homeshowlist>
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
