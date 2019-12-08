<template>
    <div class="header">
      <div class="header-left"></div>
      <p class="header-title">知播渔音乐</p>
      <div class="header-right"></div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
  @import "../assets/css/variable";
  @import "../assets/css/mixin";
.header{
  width: 100%;
  height: 100px;
  /*background: #f00;*/
  @include bg_color($background-color-theme);
  display: flex;
  justify-content: space-between;
  .header-left, .header-right{
    width: 84px;
    height: 84px;
    background: #000;
    margin-top: 8px;
  }
  .header-title{
    text-align: center;
    line-height: 100px;
  }
}
</style>
