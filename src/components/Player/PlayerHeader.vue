<template>
    <div class="header">
      <div class="header-left"></div>
      <div class="header-title">
        <h3>演员</h3>
        <p>薛之谦</p>
      </div>
      <div class="header-right"></div>
    </div>
</template>

<script>
export default {
  name: 'PlayerHeader'
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
.header{
  width: 100%;
  height: 100px;
  /*background: #f00;*/
  //@include bg_color();
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 999;
  .header-left, .header-right{
    width: 84px;
    height: 84px;
    /*background: #000;*/
    margin-top: 8px;
  }
  .header-left{
    @include bg_img('../../assets/images/down');
  }
  .header-right{
    //@include bg_img('../../assets/images/more')
  }
  .header-title{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #fff;
    @include font_size($font_medium);
    @include no-wrap();
  }
}
</style>
