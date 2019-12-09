<template>
    <div class="recommend">
      <Banner :banners="banners"></Banner>
      <Personalized :personalized="personalized" :title="'推荐歌单'"></Personalized>
      <Personalized :personalized="albums" :title="'最新专辑'"></Personalized>
    </div>
</template>

<script>
import { getBanner, getPersonalized, getNewAlbum } from '../api/index'
import Banner from '../components/Banner'
import Personalized from '../components/Personalized'

export default {
  name: 'Recommend',
  components: {
    Banner,
    Personalized
  },
  data () {
    return {
      banners: [],
      personalized: [],
      albums: []
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
    getPersonalized()
      .then((data) => {
        // console.log(data)
        this.personalized = data.result
      })
      .catch(function (err) {
        console.log(err)
      })
    getNewAlbum()
      .then((data) => {
        // console.log(data.albums.splice(0, 6))
        this.albums = data.albums.splice(0, 6)
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>

<style scoped>

</style>
