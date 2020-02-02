<template>
  <div class="rank">
    排行
  </div>
</template>

<script>
import { getTopListDetail } from '../api/index'
export default {
  name: 'Rank',
  created () {
    getTopListDetail()
      .then(function (data) {
        console.log(data)
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>

<style scoped>

</style>
