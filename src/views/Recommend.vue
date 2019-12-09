<template>
    <div class="recommend">
      <Banner :banners="banners"></Banner>
    </div>
</template>

<script>
import { getBanner } from '../api/index'
import Banner from '../components/Banner'
export default {
  name: 'Recommend',
  components: {
    Banner
  },
  data () {
    return {
      banners: []
    }
  },
  created () {
    getBanner()
      .then((data) => {
        // console.log(data)
        this.banners = data.banners
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>

<style scoped>

</style>
