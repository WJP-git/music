<template>
  <div class="singer">
    <ScrollView ref="scrollView">
      <ul class="list-wrapper">
        <li class="list-group" v-for="(value, index) in list" :key="index" ref="group">
          <h2 class="group-title">{{keys[index]}}</h2>
          <ul>
            <li class="group-item" v-for="obj in list[index]" :key="obj.id">
              <img v-lazy="obj.img1v1Url" alt="">
              <p>{{obj.name}}</p>
            </li>
          </ul>
        </li>
      </ul>
    </ScrollView>
    <ul class="list-keys">
      <!--
      <li v-for="(key, index) in keys"
          :key="key"
          @click.stop="keyDown(index)"
          :class="{'active': currentIndex === index}">{{key}}</li>
      -->
      <li v-for="(key, index) in keys"
          :key="key"
          :data-index="index"
          @touchstart.stop.prevent="touchstart"
          @touchmove.stop.prevent="touchmove"
          :class="{'active': currentIndex === index}">{{key}}</li>
    </ul>
  </div>
</template>

<script>
import { getAllArtists } from '../api/index'
import ScrollView from '../components/ScrollView'
export default {
  name: 'Singer',
  components: {
    ScrollView
  },
  methods: {
    _keyDown (index) {
      this.currentIndex = index
      // console.log(index)
      let offsetY = this.groupsTop[index]
      // console.log(offsetY)
      this.$refs.scrollView.scrollTo(0, -offsetY)
    },
    touchstart (e) {
      // console.log(e.target.dataset.index)
      let index = parseInt(e.target.dataset.index)
      this._keyDown(index)

      this.beginOffsetY = e.touches[0].pageY
    },
    touchmove (e) {
      this.moveOffsetY = e.touches[0].pageY
      let offsetY = (this.moveOffsetY - this.beginOffsetY) / e.target.offsetHeight
      // console.log(offsetY)
      let index = parseInt(e.target.dataset.index) + Math.floor(offsetY)
      if (index < 0) {
        index = 0
      } else if (index > this.keys.length - 1) {
        index = this.keys.length - 1
      }
      this._keyDown(index)
    }
  },
  created () {
    getAllArtists()
      .then((result) => {
        console.log(result)
        this.keys = result.keys
        this.list = result.list
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  data () {
    return {
      keys: [],
      list: [],
      groupsTop: [],
      currentIndex: 0,
      beginOffsetY: 0,
      moveOffsetY: 0
    }
  },
  watch: {
    list () {
      // console.log(this.$refs.group)
      // 注意点: watch只能监听数据的变化, 数据变化的时候不一定已经渲染完了
      //         所以为了保证是渲染完成之后再去获取, 我们可以借助Vue的$nextTick方法来实现
      //         也就是说在$nextTick回调函数中一定能拿到渲染完成只有的数据, 因为$nextTick的回调函数只有渲染完成之后才会执行
      this.$nextTick(() => {
        // console.log(this.$refs.group)
        this.$refs.group.forEach((group) => {
          this.groupsTop.push(group.offsetTop)
        })
        // console.log(this.groupsTop)
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/variable";
  @import "../assets/css/mixin";
.singer{
  position: fixed;
  top: 184px;
  bottom: 0;
  left: 0;
  right: 0px;
  @include bg_sub_color();
  overflow: hidden;
  .list-wrapper{
    /*width: 100%;*/
    /*height: 100%;*/
    .list-group{
      .group-title{
        @include bg_color();
        @include font_size($font_medium);
        color: #fff;
        padding: 10px 20px;
        box-sizing: border-box;
      }
      .group-item{
        display: flex;
        justify-content: flex-start;
        padding: 10px 20px;
        border-bottom: 1px solid #ccc;
        img{
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
        }
        p{
          @include font_size($font_medium);
          @include font_color();
          display: flex;
          align-items: center;
          margin-left: 20px;
        }
      }
    }
  }
  .list-keys{
    position: fixed;
    right: 10px;
    top: 60%;
    transform: translateY(-50%);
    li{
      @include font_color();
      @include font_size($font_medium_s);
      padding: 3px 0;
      &.active{
        text-shadow: 0 0 10px #000;
      }
    }
  }
}
</style>
