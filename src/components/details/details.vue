<template>
  <div class="details">
    <v-top></v-top>
    <div class="tab" :class="{fix : tabfix}" ref="details_tab">
      <div class="tab_item">
        <router-link to='/details/courseDetails'>课程详情</router-link>
      </div>
      <div class="tab_item">
        <router-link to='/details/courseOutline'>课程大纲</router-link>
      </div>
      <div class="tab_item">
        <router-link to='/details/courseIssue'>常见问题</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <v-fixedbtn></v-fixedbtn>
  </div>
</template>

<script>
import top from './top';
import fixedbtn from './fixedbtn';

export default {
  data() {
    return {
      tabTop: 0,
      tabfix: false
    };
  },
  created() {
    this.$nextTick(() => {
      this.tabTop = this.$refs.details_tab.offsetTop;
      this.scrollTop();
    });
  },
  methods: {
    scrollTop() {
      const that = this;
      this.$nextTick(() => {
        window.onscroll = function() {
          if (that.tabTop < document.body.scrollTop) {
            that.tabfix = true;
          } else {
            that.tabfix = false;
          }
        };
      });
    }
  },
  components: {
    'v-top': top,
    'v-fixedbtn': fixedbtn
  }
};

</script>

<style lang="sass">
  .details
    padding-bottom: 49px
    .tab
      z-index: 99
      display: flex
      width: 100%
      height: 44px
      line-height: 44px
      background-color: #fff
      box-shadow: 0 0 10px rgba(0, 0, 0, .08)
      &.fix
        position: fixed
        top: 0
        left: 0
      .tab_item
        flex: 1
        text-align: center
        a
          color: #000
          font-size: 15px
          &.active
            color: #ff2d50
</style>
