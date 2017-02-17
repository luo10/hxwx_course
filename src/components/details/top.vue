<template>
  <div class="top">
    <div class="top_img">
      <img :src="data.topImgUrl">
    </div>
    <div class="top_info">
      <h2>{{data.topInfo.h2}}</h2>
      <h3>{{data.topInfo.h3}}</h3>
      <div class="money">￥{{data.topInfo.money}}</div>
    </div>
    <div class="bot_info">
      <div class="row">
        <em>期数：</em>
        <p>{{data.bot_info.time}}</p>
      </div>
      <div class="row">
        <em>服务：</em>
        <p><i class="icon icon_live"></i>课程系统化直播</p>
        <p><i class="icon icon_medal"></i>接轨企业指导</p>
        <p><i class="icon icon_course"></i>企业参与课程开发</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters({
      data: 'getData'
    })
};

</script>

<style lang="sass">
  @import "../../common/sass/mixin.sass"

  .top
    .top_img
      position: relative
      padding-top: 450/750*100%
      img
        position: absolute
        left: 0
        top: 0
        width: 100%
        height: 100%
    .top_info
      padding: 37.5px 17px 29px
      background-color: #fff
      h2
        margin-bottom: 23px
        line-height: 20px
        font-size: 20px
        font-weight: bold
        color: #000
      h3
        margin-bottom: 23px
        font-size: 15px
        line-height: 15px
        color: #666
      .money
        font-size: 18px
        line-height: 18px
        color: #ff2d50
    .bot_info
      padding: 29px 17px
      background-color: #fafafa
      .row
        padding-left: 3em
        font-size: 15px
        line-height: 25px
        color: #666
        &:last-child
          margin-top: 13px
        em
          float: left
          margin-left: -3em
          font-style: normal
        .icon
          display: block
          float: left
          margin-top: 4px
          margin-right: 7px
          background-size: 100% 100%
          &.icon_live
            @include bg-image('icon_live')
            width: 16px
            height: 15px
          &.icon_medal
            @include bg-image('icon_medal')
            width: 15px
            height: 17px
          &.icon_course
            @include bg-image('icon_course')
            width: 14px
            height: 16px

</style>
