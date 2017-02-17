<template>
  <div class="course_outline">
    <list></list>
    <list></list>
    <list></list>
  </div>
</template>

<script>
import list from './course_outline_list';
export default {
  data() {
    return {
      isUl: []
    };
  },
  methods: {
    showUlitem() {
      this.isUl = !this.isUl;
    }
  },
  components: {
    list
  }
};

</script>

<style lang="sass">
  @import "../../common/sass/mixin.sass"

  .course_outline
    padding: 22px 15px 29px
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
