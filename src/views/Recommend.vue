<template>
    <div class="recommend">
      热门推荐
    </div>
</template>

<script>
import { getBanner } from '../api/index'

export default {
  name: 'Recommend',
  created () {
    getBanner()
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
