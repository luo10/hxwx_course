<template>
  <div class="fixedbtn">
    <div class="item">
      在线咨询
    </div>
    <div class="item">
      立即购买
    </div>
  </div>
</template>

<script>

export default {
};

</script>

<style lang="sass">
.fixedbtn
  position: fixed
  left: 0
  bottom: 0
  width: 100%
  display: flex
  height: 49px
  line-height: 49px
  font-size: 18px
  .item
    flex: 1
    text-align: center
    color: #000
    background-color: #fff
    &:last-child
      color: #fff
      background-color: #000
</style>
