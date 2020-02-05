<template>
  <div id="app">
    <MainHeader></MainHeader>
    <Tabbar></Tabbar>
    <keep-alive include="Singer, Search">
      <router-view></router-view>
    </keep-alive>
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
/*
1.单页Web应用（single page web application，SPA）
SPA只会加载一个HTML页面, 它将所有的活动局限在这个HTML页面中
SPA不会因为用户的操作而进行页面的重新加载或跳转
SPA在用户与应用程序交互时通过动态更新页面内容的方式来呈现不同的内容
Vue开发的项目就是典型的SPA项目, 所有的内容其实都在一个页面中
我们只是通过路由控制不同内容的显示隐藏来让它看上去是界面的跳转而已

2. SPA优点
1) 有良好的交互体验
能提升页面切换体验，用户在访问应用页面是不会频繁的去切换浏览页面，从而避免了页面的重新加载
2) 前后端分离开发
单页Web应用可以和 RESTful 规约一起使用，通过 REST API 提供接口数据
并使用 Ajax 异步获取，这样有助于分离客户端和服务器端工作
更进一步，可以在客户端也可以分解为静态页面和页面交互两个部分
3) 减轻服务器压力
服务器只用出数据就可以，不用管展示逻辑和页面合成，吞吐能力会提高几倍
4) 共用一套后端程序代码
不用修改后端程序代码就可以同时用于 Web 界面、手机、平板等多种客户端

3. 缺点：
1) SEO难度较高
由于所有的内容都在一个页面中动态替换显示，所以在SEO上其有着天然的弱势，
所以如果你的站点对SEO很看重，且要用单页应用，那么就做些静态页面给搜索引擎用吧；
2) 前进、后退管理
由于单页Web应用在一个页面中显示所有的内容，
所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理
3) 初次加载耗时多
为实现单页Web应用功能及显示效果，需要在加载页面的时候将JavaScript、CSS统一加载，
部分页面可以在需要的时候加载。
* */
</script>
<style scoped lang="scss">
</style>
