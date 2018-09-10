<template>
  <div>
    <homeheader></homeheader>
    <homeswiper></homeswiper>
    <homeshowlist></homeshowlist>
    <commontabbar :active="0"></commontabbar>
  </div>
</template>

<script>
import Homeheader from '@/components/home/Homeheader'
import Homeswiper from '@/components/home/Homeswiper'
import Homeshowlist from '@/components/home/Homeshowlist'
import Commontabbar from '@/components/Commontabbar'
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
    Commontabbar,
    Homeshowlist
  },
  methods: {
  },
  created() {
  }
}
</script>
<style scoped>
</style>
