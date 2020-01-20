<template>
  <div class="singer">
    歌手
  </div>
</template>

<script>
// import { getHotArtists } from '../api/index'
// import { getLetterArtists } from '../api/index'
import { getAllArtists } from '../api/index'
export default {
  name: 'Singer',
  created () {
    getAllArtists()
      .then(function (result) {
        console.log(result)
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>

<style scoped>

</style>
