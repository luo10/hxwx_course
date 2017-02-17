<template>
  <div class="list" :class="{showUl : isUl}">
    <h3 @click="showUlitem()">任务1：AI实用技术与标识设计初论<i class="icon"></i></h3>
    <ul>
      <li>
        <h4>平面广告设计基础课－AI软件初识</h4>
        <p>AI软件初识<a href="#2">试看</a></p>
        <p>AI中常用的工具讲解<a href="#2">试看</a></p>
      </li>
      <li>
        <h4>平面广告设计基础课－路径查找器的使用</h4>
        <p>路径查找器的使用（一）</p>
        <p>路径查找器的使用（二）</p>
        <p>路径查找器的使用（三）</p>
      </li>
      <li>
        <h4>第3章 材质调节</h4>
        <p>3-1 日景卧室空间-木纹材质的调节</p>
        <p>3-2 日景卧室空间-窗帘材质</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUl: false
    };
  },
  methods: {
    showUlitem() {
      this.isUl = !this.isUl;
    }
  }
};

</script>

<style lang="sass">
  @import "../../common/sass/mixin.sass"

  .list
    & + .list
      margin-top: 5px
    h3
      padding-left: 19.5px
      padding-right: 32px
      height: 39px
      line-height: 39px
      font-size: 14px
      color: #000
      background-color: #fafafa
      .icon
        float: right
        display: block
        margin-right: -12.5px
        margin-top: 15px
        width: 12.5px
        height: 7.5px
        @include bg-image('course_outline_icon')
        background-size: 100% 100%
        transform: rotate(-90deg)
    ul
      display: none
      padding-top: 19px
      li
        position: relative
        padding-bottom: 43px
        &:not(:last-child):before
          display: block
          content: ""
          position: absolute
          left: 30px
          top: 1px
          height: 100%
          border-left: 1px solid #d9dde1
        h4
          margin-bottom: 19px
          padding-left: 52px
          font-size: 14px
          line-height: 14px
          color: #000
          font-weight: 200
          &:before
            display: block
            content: ""
            position: absolute
            margin-left: -26px
            margin-top: 1px
            width: 10px
            height: 10px
            background-color: #d9dde1
            border-radius: 50%
        p
          padding-left: 78.5px
          font-size: 14px
          line-height: 14px
          color: #666
          font-weight: 200
          & + p
            margin-top: 19px
          a
            float: right
            margin-right: 14px
            color: #009cff
            font-weight: 200
    &.showUl
      h3
        .icon
          transform: none
      ul
        display: block
</style>
