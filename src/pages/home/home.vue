<template>
  <div>
    <myheader></myheader>
  </div>
</template>

<script>
import Myheader from '@/components/home/Myheader'
// const apiUrl = '/api/farmerbuy/farmerbuyMPControl?method='
import Notify from '@/../static/vant/notify/notify'

export default {
  data() {
    return {
      showlists: [],
      imgs: []
    }
  },
  components: {
    Myheader
  },
  methods: {
    onClick () {
      Notify('通知消息！')
    }
  },
  created() {
  }
}
</script>
<style scoped>
</style>
