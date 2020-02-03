<template>
  <div id="app">
    <MainHeader></MainHeader>
    <Tabbar></Tabbar>
    <router-view></router-view>
    <Player></Player>
  </div>
</template>
<script>
import MainHeader from './components/MainHeader'
import Tabbar from './components/Tabbar'
import Player from './views/Player'
export default {
  name: 'App',
  components: {
    MainHeader,
    Tabbar,
    Player
  }
}
</script>
<style scoped lang="scss">
</style>
